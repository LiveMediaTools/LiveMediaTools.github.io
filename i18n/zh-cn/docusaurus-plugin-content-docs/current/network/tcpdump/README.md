import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Tcpdump


## 1、抓取指定主机的网络包

```shell
tcpdump -i eth5  host 127.0.0.1  -w ./send3.cap
```

## 2、抓取指定端口的网络包

```shell
tcpdump -i lo port 8090  -w ./send.cap
```


## 3、抓取UDP包，目标主机为指定主机的网络包

、、、shell
 tcpdump -i eth0  udp dst host 10.133.69.210   -w ./send3.cap
、、、