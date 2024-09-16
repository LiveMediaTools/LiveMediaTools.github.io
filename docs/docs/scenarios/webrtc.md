---
sidebar_position: 4
---

import Command from '@theme/Command'

# WEBRTC

## OBS Push

![Push WHIP](/img/docs/scenarios/webrtc/obs_whip_push_en.png)


The push URL is 

    http://localhost:8900/whip?app=live&stream=test&token=123

whose app name is live, stream name is test and token is 123, fill them in the webpage below for playback.

:::caution

The OBS version number needs to be >=3.0.

:::



## Play

You can play this live stream on the web using the WHEP protocol by following the steps below:

 - Copy the files under xiu/protocol/webrtc/src/clients/ folder to the same level directory of the binary file xiu.
 - Open the address http://localhost:8900 in your browser (the port number is the listening port for the WebRTC protocol), and the following web page will appear:

![Play Whep](/img/docs/scenarios/webrtc/play_whep.png)

Fill in the correct app name/stream name/token to play.


