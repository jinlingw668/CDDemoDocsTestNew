---
layout: default
tags:
  - CD Demo
categories:
  - Sorting
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/InsertionSortT
---
### <center>插入排序算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>
</div>
---

#### 算法思想

考虑将n个元素的待排序数列分为前后两部分：有序列和无序列。初始时，有序列中只有1个元素，无序列中有n-1个元素。如果每次从无序列中取出第一个元素，将它插入到有序列中，使之成为新的有序列，重复n-1次（直至无序列为空），即可完成整个排序过程。

#### 伪代码

```
InsertSort( a[ ], n )
	for i = 1 to n-1  // i 遍历 无序列；
		x = a[i];  // x 取出待插入元素；
		j = i - 1; // j 遍历 有序列，方向从后向前，初始为i-1；
		while j >= 0 and a[j] > x 
			a[j+1] = a[j]; 
			j--;   
    a[j+1]= x;
```

代码关键是 a[j] > x 部分，当while内循环的j从后向前遍历时，只要找到第一个小于等于x的a[j]元素位置，并插入其后即可。
但插入操作，需要将有序列中a[j]之后的元素整体后移一位，即a[j+1] = a[j]。而这个后移过程，刚好可以在之前的a[j]的遍历中完成。
