---
sidebar_position: 2
---

import Command from '@theme/Command'

# HTTP API

可以在配置文件中配置服务的监听端口: [配置端口](../configurations/config-file#http-api)

## 查询实时流信息

xiu对流的音视频信息做了一些统计工作，例如：视频分辨率、码率、帧率等，音频码率、采样率等（目前只支持RTMP/HTTP-FLV协议）。可以使用下面的接口进行查询：

### 查询全量数据

```shell
curl http://localhost:8000/api/query_whole_streams
```
查询结果如下：

```json
{
    "error_code": 0,
    "desp": "succ",
    "data": [
        {
            "publisher": {
                "id": "17105457865882",
                "start_time": "2024-03-16T07:36:26.337103+08:00",
                "identifier": {
                    "rtmp": {
                        "app_name": "live",
                        "stream_name": "source1"
                    }
                },
                "remote_address": "127.0.0.1:55687",
                "audio": {
                    "bitrate(kbits/s)": 128,
                    "channels": 2,
                    "profile": "LC",
                    "samplerate": 44100,
                    "sound_format": "AAC"
                },
                "video": {
                    "bitrate(kbits/s)": 1802,
                    "codec": "H264",
                    "frame_rate": 20,
                    "gop": 60,
                    "height": 1280,
                    "level": "3.0",
                    "profile": "Main",
                    "width": 720
                },
                "recv_bitrate(kbits/s)": 1802
            },
            "subscriber_count": 0,
            "subscribers": {

            },
            "total_recv_bytes": 22674195,
            "total_send_bytes": 0
        },
        {
            //发布者信息
            "publisher": {
                //uuid
                "id": "17105458011883",
                //推流开始时间
                "start_time": "2024-03-16T07:36:41.109177+08:00",
                //流标识信息
                "identifier": {
                    "rtmp": {
                        "app_name": "live",
                        "stream_name": "source"
                    }
                },
                //对端的ip和端口号信息
                "remote_address": "127.0.0.1:55764",
                //流的音频信息
                "audio": {
                    "bitrate(kbits/s)": 128,
                    "channels": 2,
                    "profile": "LC",
                    "samplerate": 44100,
                    "sound_format": "AAC"
                },
                //流的视频信息
                "video": {
                    "bitrate(kbits/s)": 1814,
                    "codec": "H264",
                    "frame_rate": 20,
                    "gop": 60,
                    "height": 1280,
                    "level": "3.0",
                    "profile": "Main",
                    "width": 720
                },
                "recv_bitrate(kbits/s)": 1814
            },
            //流订阅者数量
            "subscriber_count": 2,
            //流订阅者信息
            "subscribers": {
                "17105458497472": {
                    //uuid
                    "id": "17105458497472",
                    //对端的ip和端口号信息
                    "remote_address": "127.0.0.1:56450",
                    //服务端发送给客户端的码率
                    "send_bitrate(kbits/s)": 1943,
                    //开始拉流时间
                    "start_time": "2024-03-16T07:37:29.034025+08:00",
                    //订阅类型
                    "sub_type": "PlayerRtmp",
                    //从开始拉流到查询时间点总的数据发送量
                    "total_send_bytes(kbits/s)": 6616470
                },
                "17105458720121": {
                    "id": "17105458720121",
                    "remote_address": "127.0.0.1:56583",
                    "send_bitrate(kbits/s)": 2362,
                    "start_time": "2024-03-16T07:37:52.999917+08:00",
                    "sub_type": "PlayerHttpFlv",
                    "total_send_bytes(kbits/s)": 1524128
                }
            },
            //从推流开始到当前查询时间，收到的所有数据量
            "total_recv_bytes": 18823366,
            //从推流开始到当前查询时间，发送给所有订阅者的数据总量
            "total_send_bytes": 8762803
        }
    ]
}
```

按照流的观众观看数量查询topN：


```shell
http://localhost:8000/api/query_whole_streams?top=1
```

```json
{
    "error_code": 0,
    "desp": "succ",
    "data": [
        {
            "publisher": {
                "audio": {
                    "bitrate(kbits/s)": 128,
                    "channels": 2,
                    "profile": "LC",
                    "samplerate": 44100,
                    "sound_format": "AAC"
                },
                "id": "17105458011883",
                "identifier": {
                    "rtmp": {
                        "app_name": "live",
                        "stream_name": "source"
                    }
                },
                "recv_bitrate(kbits/s)": 1948,
                "remote_address": "127.0.0.1:55764",
                "start_time": "2024-03-16T07:36:41.109177+08:00",
                "video": {
                    "bitrate(kbits/s)": 1948,
                    "codec": "H264",
                    "frame_rate": 20,
                    "gop": 60,
                    "height": 1280,
                    "level": "3.0",
                    "profile": "Main",
                    "width": 720
                }
            },
            "subscriber_count": 2,
            "subscribers": {
                "17105458497472": {
                    "id": "17105458497472",
                    "remote_address": "127.0.0.1:56450",
                    "send_bitrate(kbits/s)": 2076,
                    "start_time": "2024-03-16T07:37:29.034025+08:00",
                    "sub_type": "PlayerRtmp",
                    "total_send_bytes(kbits/s)": 74392348
                },
                "17105458720121": {
                    "id": "17105458720121",
                    "remote_address": "127.0.0.1:56583",
                    "send_bitrate(kbits/s)": 2076,
                    "start_time": "2024-03-16T07:37:52.999917+08:00",
                    "sub_type": "PlayerHttpFlv",
                    "total_send_bytes(kbits/s)": 69300006
                }
            },
            "total_recv_bytes": 91712283,
            "total_send_bytes": 154540637
        }
    ]
}
```

### 查询特定用户的数据

支持两个参数，identifier和uuid，identifer是比必填项，uuid可选。

如果只指定identifer，会返回这个流的所有信息：

```shell
curl -X POST -H "Content-Type: application/json" -d '{
     "identifier": {
                "rtmp": {
                    "app_name": "live",
                    "stream_name": "source"
                }
            }
}' http://localhost:8000/api/query_stream
```


```json
{
    "error_code": 0,
    "desp": "succ",
    "data": [
        {
            "publisher": {
                "audio": {
                    "bitrate(kbits/s)": 128,
                    "channels": 2,
                    "profile": "LC",
                    "samplerate": 44100,
                    "sound_format": "AAC"
                },
                "id": "17105458011883",
                "identifier": {
                    "rtmp": {
                        "app_name": "live",
                        "stream_name": "source"
                    }
                },
                "recv_bitrate(kbits/s)": 1948,
                "remote_address": "127.0.0.1:55764",
                "start_time": "2024-03-16T07:36:41.109177+08:00",
                "video": {
                    "bitrate(kbits/s)": 1948,
                    "codec": "H264",
                    "frame_rate": 20,
                    "gop": 60,
                    "height": 1280,
                    "level": "3.0",
                    "profile": "Main",
                    "width": 720
                }
            },
            "subscriber_count": 2,
            "subscribers": {
                "17105458497472": {
                    "id": "17105458497472",
                    "remote_address": "127.0.0.1:56450",
                    "send_bitrate(kbits/s)": 2076,
                    "start_time": "2024-03-16T07:37:29.034025+08:00",
                    "sub_type": "PlayerRtmp",
                    "total_send_bytes(kbits/s)": 74392348
                },
                "17105458720121": {
                    "id": "17105458720121",
                    "remote_address": "127.0.0.1:56583",
                    "send_bitrate(kbits/s)": 2076,
                    "start_time": "2024-03-16T07:37:52.999917+08:00",
                    "sub_type": "PlayerHttpFlv",
                    "total_send_bytes(kbits/s)": 69300006
                }
            },
            "total_recv_bytes": 91712283,
            "total_send_bytes": 154540637
        }
    ]
}
```

如果同时指定identifier和subscriber的uuid，则只保留指定subscriber的信息，其他subscriber的信息被过滤掉：

```shell
curl -X POST -H "Content-Type: application/json" -d '{
     "identifier": {
                "rtmp": {
                    "app_name": "live",
                    "stream_name": "source"
                }
            },
     "uuid": "17105458497472"
}' http://localhost:8000/api/query_stream
```

```json
{
    "error_code": 0,
    "desp": "succ",
    "data": [
        {
            "publisher": {
                "audio": {
                    "bitrate(kbits/s)": 127,
                    "channels": 2,
                    "profile": "LC",
                    "samplerate": 44100,
                    "sound_format": "AAC"
                },
                "id": "17105458011883",
                "identifier": {
                    "rtmp": {
                        "app_name": "live",
                        "stream_name": "source"
                    }
                },
                "recv_bitrate(kbits/s)": 1782,
                "remote_address": "127.0.0.1:55764",
                "start_time": "2024-03-16T07:36:41.109177+08:00",
                "video": {
                    "bitrate(kbits/s)": 1782,
                    "codec": "H264",
                    "frame_rate": 20,
                    "gop": 60,
                    "height": 1280,
                    "level": "3.0",
                    "profile": "Main",
                    "width": 720
                }
            },
            "subscriber_count": 2,
            "subscribers": {
                "17105458497472": {
                    "id": "17105458497472",
                    "remote_address": "127.0.0.1:56450",
                    "send_bitrate(kbits/s)": 1910,
                    "start_time": "2024-03-16T07:37:29.034025+08:00",
                    "sub_type": "PlayerRtmp",
                    "total_send_bytes(kbits/s)": 219407398
                }
            },
            "total_recv_bytes": 247625063,
            "total_send_bytes": 466366197
        }
    ]
}
```

如果同时指定identifier和publisher的uuid，会把所有subscriber的信息过滤掉：
```shell
curl -X POST -H "Content-Type: application/json" -d '{
     "identifier": {
                "rtmp": {
                    "app_name": "live",
                    "stream_name": "source"
                }
            },
     "uuid": "17105458011883"
}' http://localhost:8000/api/query_stream
```

```json
{
    "error_code": 0,
    "desp": "succ",
    "data": [
        {
            "publisher": {
                "audio": {
                    "bitrate(kbits/s)": 128,
                    "channels": 2,
                    "profile": "LC",
                    "samplerate": 44100,
                    "sound_format": "AAC"
                },
                "id": "17105458011883",
                "identifier": {
                    "rtmp": {
                        "app_name": "live",
                        "stream_name": "source"
                    }
                },
                "recv_bitrate(kbits/s)": 1835,
                "remote_address": "127.0.0.1:55764",
                "start_time": "2024-03-16T07:36:41.109177+08:00",
                "video": {
                    "bitrate(kbits/s)": 1835,
                    "codec": "H264",
                    "frame_rate": 20,
                    "gop": 60,
                    "height": 1280,
                    "level": "3.0",
                    "profile": "Main",
                    "width": 720
                }
            },
            "subscriber_count": 2,
            "subscribers": {

            },
            "total_recv_bytes": 311877631,
            "total_send_bytes": 594871333
        }
    ]
}
```

## 剔除用户

业务端可以将非法推拉流用户进行剔除，使用如下接口：


```shell
curl -X POST -H "Content-Type: application/json" -d '{"id": "17079922471661"}' http://localhost:8000/kick_off_client
```





