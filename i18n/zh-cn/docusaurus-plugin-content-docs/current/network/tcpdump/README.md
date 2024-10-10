import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Tcpdump


## 1、基本命令

### 1.1、抓取指定主机的网络包

```shell
tcpdump -i eth0  host 127.0.0.1  -w ./package.cap
```

### 1.2、抓取指定端口的网络包

```shell
tcpdump -i lo port 8090  -w ./package.cap
```


### 1.3、抓取目标主机为指定主机的UDP网络包

```shell
 tcpdump -i eth0  udp dst host 127.0.0.1   -w ./package.cap
```