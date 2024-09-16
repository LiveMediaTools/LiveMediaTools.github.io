---
sidebar_position: 2
---

import DocCardList from '@theme/DocCardList'
import { useCurrentSidebarCategory } from '@docusaurus/theme-common'
import { CreateTauriApp } from '@theme/Command'

# Quick Start



## Install and Run
There are several ways to install xiu:
 
 - Using binary files directly
 - Install with Docker image
 - Install with cargo
 - Build from source


### Using binary files directly

Xiu compiles and generates binary files for common platforms in each release, which are placed on the GitHub release page. These files can be run directly on the corresponding platforms. Download Link: [v0.12.4](https://github.com/harlanc/xiu/releases/tag/v0.12.4).

### Install with Docker image

For each release, xiu also builds Docker images for common platforms, and the download links: [Docker Image Download](https://hub.docker.com/repository/docker/harlancn/xiu/tags?page=1&ordering=last_updated).

Use the follow command to pull the docker image and run ：

```shell
docker run -d -it --net=host --name xiu --privileged=true  harlancn/xiu:latest /app/start.sh /app/config.toml 
```

After the service starts, log files will be saved to the following directory defaultly:

    /app/logs

You can mount this folder to the host machine for easier viewing logs. If you need , use the following command (replace $your_own_local_full_path with your own directory):

```shell
docker run -d -it --net=host --name xiu --privileged=true -v $your_own_local_full_path:/app/logs  harlancn/xiu:latest /app/start.sh /app/config.toml 
```

And if you need to modify the configurations, enter the Docker container, edit config.toml, and restart Docker for the changes to take effect. To enter the Docker container:

```shell
docker exec -it xiu bash
```

Use the following command to restart Docker :
```shell
docker restart xiu
```

### Install with cargo 

Issue the following command to install xiu:
```shell
cargo install xiu
```
    
Issue the following command to view help information:
```shell
xiu -h
```

Print the following information:

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

    
### Build from source

#### Clone Xiu
```shell
git clone https://github.com/harlanc/xiu.git
```
 checkout the latest code：

```shell 
git checkout tags/<tag_name> -b <branch_name>
```
    
#### Compile

Currently, the master branch uses locally referenced project files by default and can be compiled directly:
```shell
make build
```
or
```shell
cargo build
```

:::note

For the convenience of compilation, the cargo-related compilation commands are encapsulated into makeflie, and the locally referenced project files and online project files are backed up.


Issue the following command to apply the local project files:
```shell
make local && make build
```

:::

#### Run

```shell
cd ./xiu/target/release or ./xiu/target/debug
./xiu -h
```

