---
layout: default
tags:
  - CD Demo
categories:
  - ExhaustiveSearch
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/ExhaustiveSearch/LinearSearchT
---
### <center>线性搜索算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

在数据查找中，顺序查找是最简单直接的一种方法。

为了在给定元素的列表中检索目标键值元素，顺序查找算法依次检查列表中的每个元素，直到某一元素的键值与之匹配，则查找成功。否则，如果已经搜索了整个列表也没有可匹配的元素，则说明列表中没有匹配项，查找终止。

对于一个包含n个元素的给定列表L：L0,L1,...,Ln-1，以及目标键值K，使用顺序查找算法在L中检索键值K的步骤如下：
```
第1步：置 i = 0；
第2步：如果 Li = K，查找成功；返回i，算法终止。
第3步： i = i+1；
第4步：如果 i < n，转到步骤2。否则，查找不成功，算法终止。
```

顺序查找的优点很明显，算法简单，对数据的适用性高，无论结构是链表或数组，元素有序或无序均适用。当然，缺点也很明显，检索需要逐个元素进行，效率较低，特别是当n很大时的时间消耗可能难以忍受。



