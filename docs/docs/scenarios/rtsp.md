---
sidebar_position: 3
---

import Command from '@theme/Command'

# RTSP

## FFmpeg Push

RTSP protocol streaming supports both TCP and UDP modes.



### Over TCP(Interleaved mode)

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

### Over UDP

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```


## Play

### Play Streams over TCP

```shell
ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"
```


### Play Streams over UDP

```shell
ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"
```