import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# FFmpeg

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

## 2、录制RTMP协议流

可以把直播流录制成flv文件：

```shell
ffmpeg -i  'rtmp://localhost:1935/live/test'  -c:v copy -c:a copy -f flv test.flv
```

## 3、转推RTSP协议流

### 3.1、基于TCP传输

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

#### 参数解释

 - -rtsp_transport tcp 表示基于TCP传输音视频数据，也就是Interleaved模式


### 3.2、基于UDP传输

```shell
 ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

## 4、图片相关

### 4.1、PNG转YUV

```shell
 ffmpeg -i temp.jpg -s 1024x680 -pix_fmt yuvj420p 9.yuv
```

#### 参数解释

- -s 1024x680： 这个选项指定输出视频的尺寸为 1024x680 像素。-s 后面跟着想要的宽度和高度。

- -pix_fmt yuvj420p： 这个选项指定输出的像素格式为 yuvj420p。

### 4.2、打开YUV

```shell
ffplay -f rawvideo -pixel_format yuv420p -video_size 1024x680 9.yuv
```

### 4.3、YUV转PNG

```shell
ffmpeg -y -s 1024x680 -i 9.yuv output.jpg
```

## 5、转码相关

ffmpeg转码主要涉及到：

变换编码方式：
 -  H264转到H265：降码率，清晰度不变的情况下降低网络使用带宽。
 -  H265转到H264：解决低端设备解不了H265的问题。
  
变换分辨率：
 -  降分辨率：降码率。
 -  升分辨率：官方的ffmpeg增加分辨率和码率没有很好的超分效果，需要使用第三方的SDK集成到ffmpeg中，比如英伟达的MAXINE。

降码率：
 - 恒定码率变动态码率：根据画面复杂度动态调整码率，节省网络带宽，提升用户体验。


### 5.1、RTMP直播流转码成720P H264


```shell
 ffmpeg -rw_timeout 5000000 -i 'rtmp://localhost:1935/live/source' -acodec libfdk_aac -b:a 64k -ac 2 -ar 44100 -profile:a aac_he  -vcodec libx264 -b:v 2000k -level 3.1 -vprofile high -vsync 2 -strict -2 -preset medium -bf 3 -force_key_frames source  -f flv -loglevel level+info -vf "scale='720:-2'" 'rtmp://localhost:1935/live/dest'
 ```
#### 参数解释

- -rw_timeout 5000000 设置读写超时时间，单位是微秒，5000000为5秒。如果在这个时间内没有完成读写操作，FFmpeg 将会停止操作并报告超时错误。
- -acodec 执行音频编码器fdk_aac，这个编码库是开源的，支持LC、HE-AAC、HE-AAC-V2三种profile级别。
- -b:a 指定音频码率
- -ac 指定音频通道数2
- -ar 指定音频采样率44100
- -profile:a 指定音频profile级别为aac_he

- -vcodec 执行视频编码器为x264
- -b:v 指定视频码率为1700Kbits/s
- -level 用于约束码率、帧率和分辨率

![H264 Level](/img/docs/ffmpeg/h264_level.png)

- -vprofile 是用来定义一组编码工具和特性的集合，以满足不同使用场景和性能需求。

![H264 Profile](/img/docs/ffmpeg/h264_profile.png)

- -vsync 2 帧会连同其时间戳一起通过或丢弃，以防止 2 个帧具有相同的时间戳。

- -preset medium 指定编码速速和压缩比，编码速度越快，压缩比越低。[FFmpeg doc](https://trac.ffmpeg.org/wiki/Encode/H.264)
  
- -bf 3 指定B帧数目为3个，通常是两个P帧之间编码3个B帧。
  
- -force_key_frames source 关键帧编码跟随源流，如果当前帧在源流中为关键帧，则编码输出关键帧，如果源流中的当前帧必须被丢弃，则下一帧输出关键帧。
- -flv 指定封装格式为flv
- -loglevel level+info 添加日志级别前缀、指定日志级别为info。
- -vf "scale='720:-2'" 视频过滤器参数，scale 是用于缩放视频的过滤器，'720:-2' 指定了输出视频的宽度和高度：720 表示输出视频的宽度将被设置为 720 像素，-2 表示高度将自动计算，以保持原始视频的宽高比。


### 5.2、RTMP直播流转码成720P H265

```shell
 ffmpeg -rw_timeout 5000000 -i "rtmp://localhost:1935/live/source" -vcodec libx265 -b:v 2000k -acodec libfdk_aac -b:a 64k -ac 2 -ar 44100 -profile:a aac_he -preset veryfast -bf 3 -force_key_frames source -f flv -loglevel level+info -vf scale='720:-2' “rtmp://localhost:1935/live/dest”
```

<!--source
If the argument is source, ffmpeg will force a key frame if the current frame being encoded is marked as a key frame in its source. In cases where this particular source frame has to be dropped, enforce the next available frame to become a key frame instead.

https://stackoverflow.com/questions/72176109/maintain-keyframes-when-transcoding-and-removing-b-frames

https://www.reddit.com/r/ffmpeg/comments/pvtd1o/vsync_0_vs_vsync_2_for_getting_the_timestamps_of/

https://winddoing.github.io/post/e114a1a8.html#level



http://forum.doom9.org/archive/index.php/t-165627.html

level

https://www.cnblogs.com/zyl910/archive/2011/12/08/h264_level.html-->