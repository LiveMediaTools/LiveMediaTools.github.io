---
sidebar_position: 1
---

import Command from '@theme/Command'

# HTTP Callback

xiu支持把推拉流事件以HTTP回调的方式告知其它服务，可以用来做一些事情，比如：做鉴权或者在搭建流媒体集群的时候告知业务方一个流在哪台机器上。

## 测试 HTTP-Server

为了测试方便，实现了一个简单的Http-server，编译项目之后，会在debug文件夹下生成一个可执行文件，运行起来即可：

```shell
xiu/target/debug/http-server
```

在xiu的配置文件中写上此测试HTTP-Server的地址：[配置](../configurations/config-file#http-通知)。xiu在收到推拉流请求后，会调用此HTTP-Server的接口，把事件的相关信息写在HTTP Body中告知HTTP-server


## Http-Callback的Body格式


### RTMP推流和停止推流事件

id用于唯一标识一个流。

```json
{
    "Publish":{
        "identifier":{
            "Rtmp":{
                "app_name":"live",
                "stream_name":"test"
            }
        },
        "info":{
            "id":"17079766549390",
            "sub_type":"PushRtmp",
            "notify_info":{
                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",
                "remote_addr":"127.0.0.1:57792"
            }
        }
    }
}
```

```json
{
    "UnPublish":{
        "identifier":{
            "Rtmp":{
                "app_name":"live",
                "stream_name":"test"
            }
        },
        "info":{
            "id":"17079766549390",
            "sub_type":"PushRtmp",
            "notify_info":{
                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",
                "remote_addr":"127.0.0.1:57792"
            }
        }
    }
}
```


### RTMP拉流和停止拉流事件

```json
{
    "Subscribe":{
        "identifier":{
            "Rtmp":{
                "app_name":"live",
                "stream_name":"test"
            }
        },
        "info":{
            "id":"17079757737089",
            "sub_type":"PlayerRtmp",
            "notify_info":{
                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",
                "remote_addr":"127.0.0.1:56938"
            }
        }
    }
}
```

```json
{
    "UnSubscribe":{
        "identifier":{
            "Rtmp":{
                "app_name":"live",
                "stream_name":"test"
            }
        },
        "info":{
            "id":"17079757737089",
            "sub_type":"PlayerRtmp",
            "notify_info":{
                "request_url":"rtmp://127.0.0.1:1935/live/test?token=password",
                "remote_addr":"127.0.0.1:56938"
            }
        }
    }
}
```

### HTTP-FLV拉流和停止拉流事件

```json
{
    "Subscribe":{
        "identifier":{
            "Rtmp":{
                "app_name":"live",
                "stream_name":"test"
            }
        },
        "info":{
            "id":"17079760463966",
            "sub_type":"PlayerHttpFlv",
            "notify_info":{
                "request_url":"/live/test.flv?token=password",
                "remote_addr":"127.0.0.1:57196"
            }
        }
    }
}
```

```json
{
    "UnSubscribe":{
        "identifier":{
            "Rtmp":{
                "app_name":"live",
                "stream_name":"test"
            }
        },
        "info":{
            "id":"17079760463966",
            "sub_type":"PlayerHttpFlv",
            "notify_info":{
                "request_url":"/live/test.flv?token=password",
                "remote_addr":"127.0.0.1:57196"
            }
        }
    }
}
```




