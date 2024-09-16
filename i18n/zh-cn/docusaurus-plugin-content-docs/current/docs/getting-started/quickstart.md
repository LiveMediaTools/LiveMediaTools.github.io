---
sidebar_position: 2
---

import DocCardList from '@theme/DocCardList'
import { useCurrentSidebarCategory } from '@docusaurus/theme-common'
import { CreateTauriApp } from '@theme/Command'

# 快速开始



## 安装和运行
有以下几种方式来安装xiu：
 - 直接使用可执行文件
 - 使用Docker image
 - 直接用cargo来安装
 - 源码编译安装

### 直接使用可执行文件

xiu每次发布会编译生成常见平台的可执行文件，可以直接运行在对应的平台上，链接在github发布页面，下载链接：[v0.12.4](https://github.com/harlanc/xiu/releases/tag/v0.12.4).

### Docker Image

xiu每次发布会制作常见平台的Docker镜像，下载链接：[Docker Image Download](https://hub.docker.com/repository/docker/harlancn/xiu/tags?page=1&ordering=last_updated)

使用如下命令拉取镜像包和运行：

```shell
docker run -d -it --net=host --name xiu --privileged=true  harlancn/xiu:latest /app/start.sh /app/config.toml 
```

服务启动会默认把日志文件打印到如下目录：

    /app/logs
可以把此文件夹挂载到宿主机上，方便查看日志，如需挂载，使用如下命令(把$your_own_local_full_path替换成你自己的目录)：

```shell
docker run -d -it --net=host --name xiu --privileged=true -v $your_own_local_full_path:/app/logs  harlancn/xiu:latest /app/start.sh /app/config.toml 
```

如果需要更改配置，进入到Docker内部，编辑config.toml并重启Docker生效，进入Docker内部：

```shell
docker exec -it xiu bash
```

重启Docker:
```shell
docker restart xiu
```

### 用cargo命令安装

执行下面的命令来安装xiu:
```shell
cargo install xiu
```
    
执行下面的命令来查看帮助信息:
```shell
xiu -h
```

打印如下信息：

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

    
### 源码编译安装

#### 克隆 Xiu
```shell
git clone https://github.com/harlanc/xiu.git
```
 Checkout最新发布的版本代码：

```shell 
git checkout tags/<tag_name> -b <branch_name>
```
    
#### 编译

目前master分支代码默认使用本地引用的工程文件，可以直接编译：
```shell
make build
```
或者
```shell
cargo build
```

:::note

为了编译方便，把cargo相关的编译命令封装到了makeflie中，同时把本地引用的工程文件和线上的工程文件做了备份。

使用下面的命令应用本地工程文件：
```shell
make local && make build
```

:::

#### 运行

```shell
cd ./xiu/target/release or ./xiu/target/debug
./xiu -h
```

