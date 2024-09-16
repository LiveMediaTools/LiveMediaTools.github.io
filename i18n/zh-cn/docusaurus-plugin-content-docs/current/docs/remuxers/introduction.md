---
sidebar_position: 1
---

import Command from '@theme/Command'

# 介绍

协议转换（转封装）是很重要的功能，目前xiu已经支持的协议转换见下表所示：



|        |  RTMP  | HTTP-FLV | HLS | RTSP | WebRTC|
|  ---   | -----  | ---------| ----| -----| ------|     
| RTMP   | /      |    ✅    |  ✅ |  ❌  |  ❌   |
| RTSP   | ✅     |    ✅    |  ✅ | /    |  ❌   |
| WebRTC | ✅     |    ✅    |  ✅ | ❌   |  /    |
