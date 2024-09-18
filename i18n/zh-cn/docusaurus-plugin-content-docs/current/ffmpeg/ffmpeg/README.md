import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# FFmpeg

<!-- <DocCardList items={useCurrentSidebarCategory().items}/> -->


## 1、转推RTMP协议流

纯转推，没有编解码。

### 1.1、转推flv文件

```shell
ffmpeg -re -stream_loop -1 -i test.flv -c copy -f flv rtmp://localhost:1935/live/destination
```


#### 参数解释


- -re
    参数用于模拟实时读取输入流，输入数据的处理速度将与实际播放速度保持一致。

- -stream_loop 是用来指定输入流的循环次数的选项。
 -1 作为 -stream_loop 的参数值，表示无限循环，即输入流将不断重复播放，直到手动停止或程序结束。

- -c 是 -codec 的简写，用于指定编码器或解码器。copy 表示直接复制源流的音视频数据，不重新编解码。 也可以写成 -c:v copy  -c:a copy 




### 1.2、转推RTMP直播流
```shell
ffmpeg -i rtmp://localhost:1935/live/source -c copy -f flv rtmp://localhost:1935/live/destination
```

:::note
如果输入流本身就是实时流，可以不加-re参数，当输入流有GOP缓存，它将会被快递处理并转推出去，配置合适的播放策略比加-re参数能降低延迟。

:::

## 2、转推RTSP协议流

### 2.1、基于TCP传输

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

#### 参数解释

 - -rtsp_transport tcp 表示基于TCP传输音视频数据，也就是Interleaved模式


### 2.2、基于UDP传输

```shell
 ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```