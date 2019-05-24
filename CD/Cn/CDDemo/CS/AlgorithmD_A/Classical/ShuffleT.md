---
layout: default
tags:
  - CD Demo
categories:
  - Classical
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Classical/ShuffleT
---
### <center>洗牌算法描述</center> 
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---
洗牌算法，用于生成有限序列的随机排列。简单的说，算法会打乱序列。

#### 算法思想

考虑将n个元素的待洗牌序列分为前后两部分：可选序列和目标序列。初始时，可选序列包含n个元素，而目标序列为空。算法每次从可选序列内随机选取一个元素，并将它与可选序列的最后一个元素相交换（如果随机选中的也是这最后一个元素，则相当于没有发生交换），再把可选序列的范围减1（目标序列范围增1），重复n-1次，直至可选序列仅余1个元素时，洗牌完成。

注1：可选序列仅余1个元素时，其范围内的随机选取已然无效，其元素可直接归入目标序列。

注2：对于任意元素集合S，将1~n作为键值（下标）即可使用此算法。




