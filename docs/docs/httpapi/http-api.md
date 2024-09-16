---
sidebar_position: 1
---

import Command from '@theme/Command'

# HTTP API

You can configure the service port in the configuration file: [config service port](../configurations/config-file#http-api)

## Query Stream Information

Xiu has done some statistical work on the audio and video information of the stream, such as video resolution, bit rate, frame rate, etc., audio bit rate, sample rate, etc. (currently only supports the RTMP/HTTP-FLV protocol). You can use the following interface for querying

### Query the whole stream information

```shell
curl http://localhost:8000/api/query_whole_streams
```

The query result：

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
            //publisher information
            "publisher": {
                //uuid
                "id": "17105458011883",
                //start time of pushing stream
                "start_time": "2024-03-16T07:36:41.109177+08:00",
                //stream identifier information
                "identifier": {
                    "rtmp": {
                        "app_name": "live",
                        "stream_name": "source"
                    }
                },
                //client ip and port
                "remote_address": "127.0.0.1:55764",
                //audio information of stream
                "audio": {
                    "bitrate(kbits/s)": 128,
                    "channels": 2,
                    "profile": "LC",
                    "samplerate": 44100,
                    "sound_format": "AAC"
                },
                //video information of stream
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
            "subscriber_count": 2,
            "subscribers": {
                "17105458497472": {
                    //subscriber's uuid
                    "id": "17105458497472",
                    //client ip and port
                    "remote_address": "127.0.0.1:56450",
                    "send_bitrate(kbits/s)": 1943,
                    //start time of pulling stream
                    "start_time": "2024-03-16T07:37:29.034025+08:00",
                    "sub_type": "PlayerRtmp",
                    //Total data transmission amount from the start of pulling the stream to the queried time point
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
            //Total amount of data received from the start of streaming to the current query time
            "total_recv_bytes": 18823366,
            //Total amount of data sent to all subscribers from the start of streaming to the current query time
            "total_send_bytes": 8762803
        }
    ]
}
```

Query topN streams by stream's subscriber count：


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

### Query specific stream

Two parameters are supported: identifer and uuid. Identifier is a required field, while UUID is optional.

If only the identifier is specified, all information about this stream will be returned:

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

If both the identifier and the subscriber's UUID are specified, only the information of the specified subscriber will be retained, and the information of other subscribers will be filtered out:

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

If both the identifier and the publisher's UUID are specified, all subscribers' information will be filtered out:

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


## Kickoff Client

The business users can kickoff illegal push/pull clients using the following interface:


```shell
curl -X POST -H "Content-Type: application/json" -d '{"id": "17079922471661"}' http://localhost:8000/kick_off_client
```





