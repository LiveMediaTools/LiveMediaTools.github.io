---
sidebar_position: 1
---

import Command from '@theme/Command'

# HTTP Callback

Xiu supports notifying other services of push-pull stream events via HTTP callback.

## A HTTP-Server for Testing

For the convenience of testing, a simple HTTP server has been implemented. After compiling the project, an executable file will be generated in the debug folder. Issuing the following command to start the server:

```shell
xiu/target/debug/http-server
```

Configure the http server address in the [configuration file](../configurations/config-file#http-notify).After receiving the push/pull stream request, xiu will call the HTTP interface to pass the relevant information.


## Body Format


### RTMP Pushing Events

The id is used to uniquely identify a stream.

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


### RTMP Pulling Events

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

### HTTP-FLV Pulling Events

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




