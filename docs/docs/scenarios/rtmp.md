---
sidebar_position: 2
---

import Command from '@theme/Command'

# RTMP

## Push


### FFmpeg Push

Use ffmpeg CLI to push a live stream:

```shell
ffmpeg -re -stream_loop -1 -i test.mp4 -c:a copy -c:v copy -f flv -flvflags no_duration_filesize rtmp://127.0.0.1:1935/live/test
```

### OBS Push



![Add Run/Debug Configuration](/img/docs/scenarios/rtmp/obs_rtmp_push_en.png)

:::caution

Beginners may often make mistakes when using OBS for live streaming, for example, the streaming address above:

    rtmp://127.0.0.1:1935/live/test?token=123

Need to cut at app name and stream name, fill them into **Server** and **Bearer Token** respectively.

:::


## Play

```shell
ffplay -i rtmp://127.0.0.1:1935/live/test?token=123
```


## Clusters

Xiu supports deploying RTMP service clusters, achieving it through static relay.

### Static Push

The application scenario is to relay the live streams from edge nodes to the origin server. The configuration is as follows:

```toml  title="config_push.toml"
[rtmp] 
enabled = true
port = 1935
[[rtmp.push]]
enabled = true
address = "localhost"
port = 1936
```

The configuration file for origin server:
    
```toml  title="config.toml"
[rtmp]
enabled = true
port = 1936
```

Start the two services:

    ./xiu config.toml
    ./xiu config_push.toml

Push one RTMP live stream to the edge node, and this live stream will be automatically relayed to the origin server. We can play the stream from the two servers:

    ffplay -i rtmp://localhost:1935/live/test
    ffplay -i rtmp://localhost:1936/live/test


    
### Static Pull

The application scenario is that during playback, if a user pulls the stream from the edge node and it does not exist, the edge node will pull it from the origin, and the configuration file is as follows:

```toml  title="config.toml"
[rtmp]
enabled = true
port = 1935
```
 
The configuration file for edge node:

```toml  title="config_pull.toml"
[rtmp]
enabled = true
port = 1936
[rtmp.pull]
enabled = false
address = "localhost"
port = 1935
```



Start the two services:

    ./xiu config.toml
    ./xiu config_pull.toml
    
Directly push the live stream to the origin server. When the edge node requests this live stream, it will pull the stream from the origin, so the stream exists on both the edge and origin server:

    ffplay -i rtmp://localhost:1935/live/test
    ffplay -i rtmp://localhost:1936/live/test

