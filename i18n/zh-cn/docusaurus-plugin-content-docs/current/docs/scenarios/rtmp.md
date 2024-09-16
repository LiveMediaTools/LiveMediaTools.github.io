---
sidebar_position: 2
---

import Command from '@theme/Command'

# RTMP

## 推流


### FFmpeg推流


使用ffmpeg命令行进行推流：

```shell
ffmpeg -re -stream_loop -1 -i test.mp4 -c:a copy -c:v copy -f flv -flvflags no_duration_filesize rtmp://127.0.0.1:1935/live/test
```

### OBS推流



![Add Run/Debug Configuration](/img/docs/scenarios/rtmp/obs_rtmp_push.png)

:::caution

初学者容易在使用OBS推流的时候出错，例如上图的推流地址：

    rtmp://127.0.0.1:1935/live/test?token=123

需要在app_name和stream_name处截断，分别填到**服务器**和**推流码**中。

:::

## 播放

```shell
ffplay -i rtmp://127.0.0.1:1935/live/test?token=123
```


## 集群

xiu支持RTMP协议集群的部署，通过静态转推和回源的方式来实现。

### 静态转推

应用场景为边缘节点的直播流被转推到源站，配置如下：

边缘节点的配置文件config_push.toml:

```toml title="config_push.toml"
[rtmp]
enabled = true
port = 1935
[[rtmp.push]]
enabled = true
address = "localhost"
port = 1936
```

    
源站节点的配置文件config.toml:

```toml title="config.toml"
[rtmp]
enabled = true
port = 1936
```

启动两个服务:

```shell
./xiu config.toml
./xiu config_push.toml
```

将一路RTMP直播流推送到边缘节点，此直播流会被自动转推到源站，可以同时播放源站或者边缘节点的直播流：

```shell
ffplay -i rtmp://localhost:1935/live/test
ffplay -i rtmp://localhost:1936/live/test
```

    
### 静态回源

应用场景为播放过程中用户从边缘节点拉流，边缘节点无此流，则回源拉流，配置文件如下：

源站节点的配置文件为 config.toml:

```toml title="config.toml"
[rtmp]
enabled = true
port = 1935
```
 
边缘节点的配置文件为 config_pull.toml:

```toml title="config_pull.toml"
[rtmp]
enabled = true
port = 1936
[rtmp.pull]
enabled = false
address = "localhost"
port = 1935
```

运行两个服务:

```shell
./xiu config.toml
./xiu config_pull.toml
```

    
直接将直播流推送到源站，到边缘节点请求此路直播流，边缘节点会回源拉流，可以同时播放边缘和源站节点上的直播流：

```shell
ffplay -i rtmp://localhost:1935/live/test
ffplay -i rtmp://localhost:1936/live/test
```
