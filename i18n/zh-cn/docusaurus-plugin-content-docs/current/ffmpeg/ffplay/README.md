import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# FFplay

## 播放RTMP协议流

### 播放

```shell
ffplay -i "rtmp://127.0.0.1:1935/live/test"
```

:::note
ffplay播放会缓存一些数据，为了保证播放的流畅，如果不要缓存，降低播放延迟，可以添加 -fflags nobuffer 参数。

:::



## 播放RTSP协议流

### 基于TCP协议播放

```shell
ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"
```

### 基于UDP协议播放

```shell
ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"
```