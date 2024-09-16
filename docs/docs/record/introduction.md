---
sidebar_position: 1
---

import Command from '@theme/Command'

# Introduction for Record

Xiu provides the recording feature for live streaming, refer to [configuration](../configurations/config-file#hls) to enable HLS recording.

## M3u8 File

The m3u8 file used for live streaming only retains the latest few ts segments and does not include the
    
    #EXT-X-ENDLIST
tag.

### Live M3u8 File

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

### Record m3u8 File
    
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

The name format of live streaming file is {stream_name}.m3u8, and the recorded m3u8 file is generated after the streaming stops, the name format is vod\_{stream_name}.m3u8


