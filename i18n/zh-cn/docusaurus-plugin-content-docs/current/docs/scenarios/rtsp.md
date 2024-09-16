---
sidebar_position: 3
---

import Command from '@theme/Command'

# RTSP

## FFmpeg推流

RTSP协议推流支持TCP和UDP模式。

### Over TCP(Interleaved mode)

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

### Over UDP

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```


## 播放

### 播放Over TCP的RTSP流

```shell
ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"
```


### 播放Over UDP的RTSP流

```shell
ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"
```