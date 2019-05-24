---
layout: default
tags:
  - CD Demo
categories:
  - Sorting
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/BubbleSortT
---
### <center>冒泡排序算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>
</div>
---
#### 算法思想

对于n个元素的待排序数列，从左至右依次比较相邻的两个元素，将较大值交换至右侧。一趟排序后，最大值就会交换至最后一位（目标位置）。
对前面的n-1个元素数列，继续此比较、交换过程，第二大元素也会交换至n-1个元素的最后一位。重复n-1次（仅余1个元素时），即可完成整个排序过程。

#### 伪代码

```
BubbleSort( a[ ], n )
	for i = n-1 to 1  // i 标识无序列结尾；
		hasSwap = false； // hasSwap 标识内循环内是否发生过交换；
		for j = 0 to i  // j 遍历无序列；
			if a[j] > a[j+1]
				swap(a[j],a[j+1]); // 逆序交换；
				hasSwap = true；
		if hasSwap = false
			break;      // 一趟未发生过交换，说明没有逆序；
```
for外循环的i标识无序列结尾。对于无序列a[0~i]，for内循环的j从前向后遍历，当发现逆序a[j]大于a[j+1]时，两者交换。

hasSwap用于内循环内是否发生过交换，如果没有发生，说明已经没有逆序，排序已经完成。