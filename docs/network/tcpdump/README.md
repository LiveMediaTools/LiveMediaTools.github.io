import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Tcpdump


## 1、Basic Commands

### 1.1、Capture network packets from a specified host

```shell
tcpdump -i eth0  host 127.0.0.1  -w ./package.cap
```

### 1.2、Capture network packets on a specified port

```shell
tcpdump -i lo port 8090  -w ./package.cap
```

### 1.3、Capture UDP network packets with a specified target host

```shell
 tcpdump -i eth0  udp dst host 127.0.0.1   -w ./package.cap
```