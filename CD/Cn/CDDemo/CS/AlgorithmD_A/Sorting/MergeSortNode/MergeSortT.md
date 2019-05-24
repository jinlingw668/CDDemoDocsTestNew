---
layout: default
tags:
  - CD Demo
categories:
  - Sorting/MergeSortNode
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/MergeSortNode/MergeSortT
---
### <center>归并排序算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---

#### 算法思想

归并排序，采用归并思想对数列进行排序，即将两个有序数列合并为一个有序数列。

对于n个元素的待排序数列，考虑将它一分为二，并对每个子数列继续拆分，直至子数列仅包含1个元素（即为有序）时，开始归并。
归并的子数列与拆分对应，先将只有1个元素的“子数列对”归并，之后，将已有序的“子数列对”继续归并过程，直至归为一个有序数列。

这即是归并排序从上而下的递归实现过程，算法步骤如下：
1. 分解 - 将当前区间[low...high]一分为二，即求出分裂点 mid = (low + high)/2。 
2. 求解 - 对两个子区间a[low...mid] 和 a[mid+1...high]递归地进行归并排序。递归终点是子区间长度为1。
3. 归并 - 将已排序的两个子区间a[low...mid]和 a[mid+1...high]归并为一个有序的区间a[low...high]。

#### 伪代码
```
算法名称：归并排序(MergeSort)
输入：n个元素的数组a
输出：排序的a
MergeSort(a, low, high, b)
1： if high-low<=1 then return
2：		mid = (low+high)/2
3：	MergeSort(a, low, mid, b)
4： MergeSort(a, mid+1, high, b)
5： Merge(a, low, mid, high, b)
6： copy(b, low, high, a)
```
