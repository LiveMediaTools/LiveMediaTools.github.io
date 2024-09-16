---
sidebar_position: 1
---

import Command from '@theme/Command'

# 录制介绍

xiu提供了直播流的录制功能，目前各大云厂商使用的录制文件格式都是HLS协议，因为HLS使用TS分片的形式存储音视频文件，方便存储以及音视频的处理。

开启HLS录制使用 [录制配置](../configurations/config-file#hls)

## m3u8文件

直播流使用的m3u8文件只保留最新的几个ts分片，并且没有
    
    #EXT-X-ENDLIST
标签。

### 直播m3u8文件

    #EXTM3U
    #EXT-X-VERSION:3
    #EXT-X-TARGETDURATION:11
    #EXT-X-MEDIA-SEQUENCE:2
    #EXTINF:9.000
    2.ts
    #EXTINF:5.040
    3.ts
    #EXTINF:10.000
    4.ts
    #EXTINF:10.080
    5.ts
    #EXTINF:10.000
    6.ts
    #EXTINF:6.080
    7.ts

### 录制m3u8文件
    
    #EXTM3U
    #EXT-X-VERSION:3
    #EXT-X-TARGETDURATION:1
    #EXT-X-MEDIA-SEQUENCE:0
    #EXT-X-PLAYLIST-TYPE:VOD
    #EXT-X-ALLOW-CACHE:YES
    #EXTINF:5.080
    0.ts
    #EXTINF:5.920
    1.ts
    #EXTINF:9.000
    2.ts
    #EXTINF:5.040
    3.ts
    #EXTINF:10.000
    4.ts
    #EXTINF:10.080
    5.ts
    #EXTINF:10.000
    6.ts
    #EXTINF:6.080
    7.ts
    #EXTINF:5.880
    8.ts
    #EXT-X-ENDLIST


直播m3u8文件的名字为{stream_name}.m3u8，录制的m3u8文件在停止推流后生成，文件名字为vod\_{stream_name}.m3u8


