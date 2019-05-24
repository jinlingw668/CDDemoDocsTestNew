---
layout: default
tags:
  - CD Demo
categories:
  - Sorting
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/SelectionSortT
---
### <center>选择排序算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>
</div>
---

#### 算法思想

考虑将n个元素的待排序数列分为前后两部分：无序列和有序列。初始时，无序列中有n个元素，而有序列为空。
如果每一次都从无序列中选出最大的元素，交换至无序列最后，并将它划入有序列，重复n-1次（直至无序列仅余1个元素)，即可完成整个排序过程。

#### 伪代码

```
SelectionSort( a[ ], n)
	for i = n to 2  // i 标识无序列长度；
		p = 0; // p 标识当前最大值的位置，初始为0；
		for j = 1 to i 
			if a[p] <= a[j]
				p = j; // 最大值位置更新；
		swap(a[p],a[i-1]);
```
for外循环的i标识无序列长度。对于无序列a[0~i-1]，for内循环的j从前向后遍历，当a[j]大于等于a[p]时，更新记录最大值的位置。其中，“a[p] <= a[j]”的“=”时更新，可以保持算法的稳定性。