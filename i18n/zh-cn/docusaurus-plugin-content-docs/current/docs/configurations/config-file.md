---
sidebar_position: 2
---

import Command from '@theme/Command'

# 配置文件

也可以用配置文件对xiu进行配置，对配置文件的配置项做如下说明：

## RTMP

```toml
#live server configurations
##########################
#   RTMP configurations  #
##########################
[rtmp]
enabled = true #打开或者关闭RTMP媒体协议
port = 1935 #指定RTMP协议监听端口
gop_num = 0 #指定缓存GOP数量，用于秒开（会增加延迟）
# pull streams from other server node.
[rtmp.pull]
enabled = false # 是否开启静态拉取，如果本地没流，则到配置的服务器去拉取此流。
address = "192.168.0.1" #拉取服务器的地址
port = 1935 #拉取端口
# push streams to other server node.
[[rtmp.push]]
enabled = false  # 是否开启静态转推，本机收到RTMP推流后，转推到其它节点，支持配置多个远端节点
address = "localhost" #转推地址
port = 1936 #转推端口号
[[rtmp.push]]
enabled = false
address = "192.168.0.3"
port = 1935
[rtmp.auth] 
pull_enabled = true #是否开启拉流鉴权
push_enabled = true  #是否开启推流鉴权
algorithm = "simple" #设置鉴权方式 支持简单鉴权和MD5鉴权(分别填simple或者md5)
```
 


## RTSP

```toml
##########################
#    RTSP configurations  #
##########################
[rtsp]
enabled = false  #打开或者关闭RTSP媒体协议
port = 445  #指定RTSP协议监听端口
[rtsp.auth] 
pull_enabled = true #是否开启拉流鉴权
push_enabled = true  #是否开启推流鉴权
algorithm = "simple" #设置鉴权方式 支持简单鉴权和MD5鉴权(分别填simple或者md5)
```
## WEBRTC(WHIP/WHEP)

```toml
##########################
#    WebRTC configurations  #
##########################
[webrtc]
enabled = false  #打开或者关闭WHIP/WHEP媒体协议
port = 8083  #指定WHIP/WHEP协议监听端口
[webrtc.auth] 
pull_enabled = true #是否开启拉流鉴权
push_enabled = true  #是否开启推流鉴权
algorithm = "simple" #设置鉴权方式 支持简单鉴权和MD5鉴权(分别填simple或者md5)
```
## HTTP-FLV

```toml
##########################
# HTTPFLV configurations #
##########################
[httpflv]
enabled = false  #打开或者关闭HTTP-FLV媒体协议
port = 8081  #指定协议监听端口
[httpflv.auth] 
pull_enabled = true #是否开启拉流鉴权
algorithm = "simple" #设置鉴权方式 支持简单鉴权和MD5鉴权(分别填simple或者md5)
```
## HLS   
```toml 
##########################
#    HLS configurations  #
##########################
[hls]
enabled = false  #打开或者关闭RTSP媒体协议
port = 8080  #指定协议监听端口
need_record = true #是否打开HLS录制
[hls.auth] 
pull_enabled = true #是否开启拉流鉴权
algorithm = "simple" #设置鉴权方式 支持简单鉴权和MD5鉴权(分别填simple或者md5)
```
## 日志级别和打印方式
```toml
##########################
#   LOG configurations   #
##########################
[log]
level = "info" #配置日志打印级别
[log.file]
# write log to file or not（Writing logs to file or console cannot be satisfied at the same time）.
enabled = false #是否开启打印到日志文件
rotate = "hour" #[day,hour,minute] ，日志文件分割频率
path = "./logs" #日志文件保存路径
```
## 推拉流鉴权

推拉流鉴权的配置分为两部分，下面是一些共用的配置，每种媒体协议的鉴权可以分别配置，包括推拉流鉴权是否开启以及鉴权算法。[鉴权算法介绍](../authentication/introduction.md)

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
port = 8000 #指定HTTP-API服务监听端口
```

## HTTP 通知

可以使用此方式通知业务方有关流发布、拉取相关的事件：
    
 ```toml   
[httpnotify]
enabled = true #是否开启HTTP通知
on_publish = "http://localhost:3001/on_publish" #客户端推流成功调用此HTTP接口
on_unpublish = "http://localhost:3001/on_unpuslish"  #客户端推流结束调用此HTTP接口
on_play = "http://localhost:3001/on_play" #客户端拉流成功调用此HTTP接口
on_stop = "http://localhost:3001/on_stop" #客户端停止拉流成功调用此HTTP接口
```



