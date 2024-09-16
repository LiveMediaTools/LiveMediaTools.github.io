import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# 开始

<DocCardList items={useCurrentSidebarCategory().items}/>
