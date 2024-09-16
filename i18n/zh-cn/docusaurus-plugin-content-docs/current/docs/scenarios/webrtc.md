---
sidebar_position: 4
---

import Command from '@theme/Command'

# WEBRTC

## OBS推流

![Push WHIP](/img/docs/scenarios/webrtc/obs_whip_push.png)

图片展示的推流配置app name为live，stream name为test，token为123，分别填入到下面提到的播放界面中进行播放。

:::caution

OBS版本号需要>=3.0

:::



### 播放

可以用WHEP协议在网页上播放此直播流，按照如下步骤进行操作:

 - 把文件夹xiu/protocol/webrtc/src/clients/下的文件拷贝到同可执行文件xiu同级目录下.
 - 浏览器中打开地址http://localhost:8900(端口号为webrtc协议监听端口)，会出现如下界面：

![Play Whep](/img/docs/scenarios/webrtc/play_whep.png)

填入正确的app name/stream name/token进行播放。


