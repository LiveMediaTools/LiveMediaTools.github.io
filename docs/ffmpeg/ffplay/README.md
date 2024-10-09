import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# FFplay

<!-- <DocCardList items={useCurrentSidebarCategory().items}/> -->

## Play RTMP stream

### Play

```shell
ffplay -i "rtmp://127.0.0.1:1935/live/test"
```

:::note
When playing, it buffers some data to ensure smooth playback. To disable buffering and reduce playback latency, you can add the -fflags nobuffer parameter.
:::



## Play RTSP stream

### Play over TCP

```shell
ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"
```

### Play over UDP

```shell
ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"
```