import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# FFmpeg

## 1、Transfer RTMP Streams

Just transfer without transcoding.

### 1.1、Transfer FLV file

```shell
ffmpeg -re -stream_loop -1 -i test.flv -c copy -f flv rtmp://localhost:1935/live/destination
```


#### Parameter Explanation


- -re This parameter is used to simulate real-time reading of the input stream, ensuring that the processing speed of the input data matches the actual playback speed.

- -stream_loop This option specifies the number of times to loop the input stream. A value of -1 for -stream_loop means infinite looping, so the input stream will continuously replay until manually stopped or the program ends.

- -c This is a shorthand for -codec, used to specify the encoder or decoder. Using copy indicates that the audio and video data from the source stream will be directly copied without re-encoding. It can also be written as -c:v copy -c:a copy 




### 1.2、Transfer RTMP stream
```shell
ffmpeg -i rtmp://localhost:1935/live/source -c copy -f flv rtmp://localhost:1935/live/destination
```

:::note
If the input stream is already a live stream, the -re parameter can be omitted. When the input stream has a GOP buffer, it will be processed and pushed out quickly. Configuring an appropriate playback strategy can reduce latency more effectively than adding the -re parameter.

:::

## 2、Record RTMP stream

You can record the live stream as an FLV file:

```shell
ffmpeg -i  'rtmp://localhost:1935/live/test'  -c:v copy -c:a copy -f flv test.flv
```

## 3、Transfer RTSP stream

### 3.1、Transfer over TCP

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

#### Parameter Explanation

 - -rtsp_transport tcp It indicates that audio and video data are transmitted over TCP, which is the Interleaved mode.


### 3.2、Transfer over UDP

```shell
 ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

## 4、Image Related

### 4.1、PNG to YUV

```shell
 ffmpeg -i temp.jpg -s 1024x680 -pix_fmt yuvj420p 9.yuv
```

#### Parameter Explanation

-s 1024x680: This option specifies the output image size as 1024x680 pixels.

-pix_fmt yuvj420p: This option specifies the output pixel format as yuvj420p.

### 4.2、Open YUV

```shell
ffplay -f rawvideo -pixel_format yuv420p -video_size 1024x680 9.yuv
```

### 4.3、YUV to PNG

```shell
ffmpeg -y -s 1024x680 -i 9.yuv output.jpg
```

## 5、Transcoding Related


FFmpeg transcoding mainly involves:


Changing the encoding method:

 - H.264 to H.265: Reducing bitrate while maintaining the same clarity to lower network bandwidth usage.
 - H.265 to H.264: Addressing the issue of low-end devices not being able to decode H.265.
  
Changing the resolution:

 - Reducing resolution: Lowering bitrate.
 - Increasing resolution: The official FFmpeg's method of increasing resolution and bitrate does not achieve good upscaling results, so it's necessary to integrate third-party SDKs into FFmpeg, such as NVIDIA's MAXINE. 
  
Reducing bitrate:

 - Changing from constant bitrate to variable bitrate: Dynamically adjusting the bitrate based on the complexity of the image, saving network bandwidth and enhancing user experience.

### 5.1、Transcoding RTMP stream to H264 720P

```shell
 ffmpeg -rw_timeout 5000000 -i 'rtmp://localhost:1935/live/source' -acodec libfdk_aac -b:a 64k -ac 2 -ar 44100 -profile:a aac_he  -vcodec libx264 -b:v 2000k -level 3.1 -vprofile high -vsync 2 -strict -2 -preset medium -bf 3 -force_key_frames source  -f flv -loglevel level+info -vf "scale='720:-2'" 'rtmp://localhost:1935/live/dest'
 ```
#### Parameter Explanation

- -rw_timeout 5000000 Sets the read/write timeout to 5000000 microseconds, which equals 5 seconds. If the read/write operation is not completed within this time, FFmpeg will stop the operation and report a timeout error.
- -acodec Executes the audio encoder fdk_aac, which is an open-source encoding library supporting three profile levels: LC, HE-AAC, and HE-AAC-V2.
- -b:a Specifies the audio bitrate.
- -ac Specifies the number of audio channels as 2.
- -ar Specifies the audio sampling rate as 44100.
- -profile:a Specifies the audio profile level as aac_he.
- -vcodec Executes the video encoder x264.
- -b:v Specifies the video bitrate as 1700 Kbits/s.
- -level Used to constrain bitrate, frame rate, and resolution.

![H264 Level](/img/docs/ffmpeg/h264_level.png)

- -vprofile Used to define a set of encoding tools and features to meet different use cases and performance requirements.

![H264 Profile](/img/docs/ffmpeg/h264_profile.png)

- -vsync 2 Frames are either passed through or dropped along with their timestamps to prevent two frames from having the same timestamp.

- -preset medium Specifies the encoding speed and compression ratio. The faster the encoding speed, the lower the compression ratio. [FFmpeg doc](https://trac.ffmpeg.org/wiki/Encode/H.264)
  
- -bf 3 Specifies the number of B-frames as 3, which usually means encoding 3 B-frames between two P-frames.
  
- -force_key_frames source Keyframe encoding follows the source stream. If the current frame in the source stream is a keyframe, the encoded output will be a keyframe; if the current frame in the source stream must be discarded, the next frame will be output as a keyframe.
- -flv Specifies the container format as FLV.
- -loglevel level+info Adds a log level prefix and sets the log level to info.
- -vf "scale='720:-2'" Video filter parameter. Scale is a filter used for resizing the video; '720:-2' specifies the output video's width and height: 720 indicates the output video width will be set to 720 pixels, and -2 indicates that the height will be automatically calculated to maintain the original aspect ratio.


### 5.2、Transcoding RTMP stream to H265 720P

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