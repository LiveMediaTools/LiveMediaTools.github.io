import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# FFprobe


## 1、Query Stream Information

### 1.1 Print Video Stream Information

```shell
ffprobe -show_frames -select_streams v -of xml 'rtmp://localhost:1935/live/test'
```

#### Parameter Explanation
- -show_frames：Displays detailed information for each frame.
- -select_streams v：Selects only the video stream for analysis. If you want to analyze the audio stream, use -select_streams a.
- -of xml：Sets the output format to XML, making the results easier to parse.