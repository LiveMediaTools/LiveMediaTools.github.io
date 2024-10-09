import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Tcpdump


## 1、查询流信息

### 1.1 打印视频流信息

```shell
ffprobe -show_frames -select_streams v -of xml 'rtmp://localhost:1935/live/test'
```

#### 参数解释
- -show_frames：显示每一帧的详细信息。
- -select_streams v：仅选择视频流进行分析。如果选择音频流进行分析，则使用 -select_streams a
- -of xml：将输出格式设置为 XML，这样结果更易于解析。