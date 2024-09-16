---
sidebar_position: 1
---

import Command from '@theme/Command'

# 鉴权算法介绍

xiu提供了一些健全算法，包括简单鉴权、MD5鉴权和用户自定义鉴权，关于鉴权的配置参考：[鉴权配置](../configurations/config-file#推拉流鉴权)

## 简单鉴权

配置好password之后在推拉流地址中添加此password串，例如，password做如下配置：

```toml
[authsecret]
# used for simple authentication
password = "thisisthepassword"
```


鉴权成功的推拉流地址为：

    rtmp://127.0.0.1:1935/live/test?token=thisisthepassword
    rtsp://127.0.0.1:5544/live/test?token=thisisthepassword
    http://127.0.0.1:8080/live/test.flv?token=thisisthepassword
    http://127.0.0.1:8081/live/test/test.m3u8?token=thisisthepassword
    http://127.0.0.1:8900/whip?app=live&stream=test&token=thisisthepassword
    http://127.0.0.1:8900/whep?app=live&stream=test&token=thisisthepassword



## MD5鉴权

首先需要配置好key:

```toml
[authsecret]
# used for md5 authentication.  
key = "md5string"
```

鉴权算法如下：
    
    token={md5({key}{stream_name})}

比如，推流地址如下：

    rtmp://127.0.0.1:1935/live/test

stream_name为test，因此鉴权结果为：

    md5("testmd5string") = 3af79b11816b118e497810c9fb69ee65

正确的推流地址为：

    rtmp://127.0.0.1:1935/live/test?token=3af79b11816b118e497810c9fb69ee65


:::note

在线MD5计算工具：[https://www.md5hashgenerator.com/](https://www.md5hashgenerator.com/)
:::

## 自定义鉴权算法

用户可以使用httpnotify+kickoff client的方式进行鉴权，也就是把推拉流事件告知业务方，业务方把token和相关参数解析出来做推拉流地址的校验，如果校验失败，调用kickoff client踢掉推拉流方。

HTTP-Notify 参考：[http-notify](../httpcallback/http-callback).
Kickoff client 参考：[http-api](../httpapi/http-api).


