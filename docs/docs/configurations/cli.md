---
sidebar_position: 1
---

import Command from '@theme/Command'

# CLI

xiu provides command line parameters to start the service:

    A secure and easy to use live media server, hope you love it!!!
    
    Usage: xiu [OPTIONS] 
    
    Options:
       -c, --config <path>   Specify the xiu server configuration file path.
       -r, --rtmp <port>     Specify the RTMP listening port(e.g.:1935).
       -t, --rtsp <port>     Specify the rtsp listening port.(e.g.:554).
       -w, --webrtc <port>   Specify the whip/whep listening port.(e.g.:8900).
       -f, --httpflv <port>  Specify the HTTP-FLV listening port(e.g.:8080).
       -s, --hls <port>      Specify the HLS listening port(e.g.:8081).
       -l, --log <level>     Specify the log level. [possible values: trace, debug, info, warn, error, debug]
       -h, --help            Print help
       -V, --version         Print version


You can write all configuration parameters in a configuration file, and then pass the path of the configuration file to start the service

```shell
./xiu -c configuration_path
```

You can also start the service by directly specifying the port number of media protocols:
```shell
./xiu -r 1935
```


:::info Explanation for the remuxing of media protocols

When remuxing from one protocol to another, both ports need to be opened , then the remuxer can be started automatically.
For example, if you need to remux from RTSP to RTMP, use the following command line:
```shell
./xiu -r 1935 -t 5544
```

:::


