---
sidebar_position: 2
---

import Command from '@theme/Command'

# Configuration File

Next, explain the configuration items of configuration file as follows:

## RTMP

```toml
#live server configurations
##########################
#   RTMP configurations  #
##########################
[rtmp]
enabled = true #enable the RTMP media protocol or not
port = 1935 #specify the RTMP protocol listening port.
gop_num = 0 #specify the cache GOP count for instant playback.（may increase latency）
# pull streams from other server node.
[rtmp.pull]
enabled = false # enable static pulling or not, if the stream is not available locally, fetch it from the configured server.
address = "192.168.0.1" # the server address to pull from
port = 1935 # the server port to pull from
# push streams to other server node.
[[rtmp.push]]
enabled = false  # enable static repushing. After receiving RTMP streams on the local machine, repush them to other nodes. Supports configuring multiple remote nodes
address = "localhost" # the server address to repush to
port = 1936 # the server port to repush to
[[rtmp.push]]
enabled = false
address = "192.168.0.3"
port = 1935
[rtmp.auth] 
pull_enabled = true # enable pulling stream authentication or not.
push_enabled = true  # enable pushing stream authentication or not.
algorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).
```



## RTSP

```toml
##########################
#    RTSP configurations  #
##########################
[rtsp]
enabled = false  # enable the RTSP media protocol or not
port = 445  # specify the RTSP protocol listening port.
[rtsp.auth] 
pull_enabled = true # enable pulling stream authentication or not.
push_enabled = true  # enable pushing stream authentication or not.
algorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).
```


## WEBRTC(WHIP/WHEP)

```toml
##########################
#    WebRTC configurations  #
##########################
[webrtc]
enabled = false  # enable the WHIP/WHEP media protocol or not
port = 8083  # specify the WHIP/WHEP protocol listening port.
[webrtc.auth] 
pull_enabled = true  # enable pulling stream authentication or not.
push_enabled = true   # enable pushing stream authentication or not.
algorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).
```

## HTTP-FLV

```toml
##########################
# HTTPFLV configurations #
##########################
[httpflv]
enabled = false  # enable the HTTP-FLV media protocol or not
port = 8081  # specify the HTTP-FLV protocol listening port.
[httpflv.auth] 
pull_enabled = true # enable pulling stream authentication or not.
algorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).
```

## HLS   

```toml
##########################
#    HLS configurations  #
##########################
[hls]
enabled = false  # enable the HLS media protocol or not
port = 8080  # specify the HLS protocol listening port.
need_record = true # enable HLS record or not
[hls.auth] 
pull_enabled = true # enable pulling stream authentication or not.
algorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).
```

## Log Configurations

```toml
##########################
#   LOG configurations   #
##########################
[log]
level = "info" # set log level
[log.file]
# write log to file or not（Writing logs to file or console cannot be satisfied at the same time）.
enabled = false # enable logging to log files or not.
rotate = "hour" #[day,hour,minute] ，set rotate level
path = "./logs" # set log path
```
## Authentication

The configurations of authentication are divided into two parts. Below are some common configurations, and the authentication for each media protocol can be configured separately, including whether authentication for pushing and pulling streams is enabled and the authentication algorithm。[Authentication Algorithm Introduction](../authentication/introduction.md)

```toml
[authsecret]
# used for md5 authentication.  
key = "123"
# used for simple authentication
password = "456"
```

## HTTP-API

```toml
############################
# HTTP-API configurations  #
############################
[httpapi]
port = 8000 #specify the HTTP-API service listening port
```

## HTTP Notify

Notify the business users of certain events happening:

 ```toml   
[httpnotify]
enabled = true # enable HTTP notify or not
on_publish = "http://localhost:3001/on_publish" # this HTTP interface will be called after publishing stream successfully.
on_unpublish = "http://localhost:3001/on_unpuslish"  # this HTTP interface will be called upon the end of streaming.
on_play = "http://localhost:3001/on_play" # this HTTP interface will be called upon the successful stream pulling
on_stop = "http://localhost:3001/on_stop" # this HTTP interface will be called upon the end of streaming pulling.
```



