---
sidebar_position: 1
---

import Command from '@theme/Command'

# 命令行接口

xiu提供了常见的命令行参数来启动服务：

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

可以把所有配置参数写在配置文件中，然后把配置文件的路径传递给xiu来启动服务：

```shell
./xiu -c configuration_path
```

也可以直接指定媒体协议的端口号来启动服务：
```shell
./xiu -r 1935
```

:::info 关于媒体协议转封装说明

需要由一种协议转封装到另外一种协议，需要把两个协议的端口都打开，remuxer会自动开启。例如：如果需要从RTSP转封装到RTMP，使用如下命令行：
```shell
./xiu -r 1935 -t 5544
```

:::


