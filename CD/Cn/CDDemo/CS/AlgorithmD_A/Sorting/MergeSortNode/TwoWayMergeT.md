---
layout: default
tags:
  - CD Demo
categories:
  - Sorting/MergeSortNode
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/MergeSortNode/TwoWayMergeT
---
### <center>二路归并算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---

#### 算法思想

如果给定两个已经排好序的数列，只需要依次遍历比较两个数列的开头元素，将较小值依次取出，即可两个数列合为一个有序数列，此过程也称为二路归并，或简称为归并。

归并过程中，通常使用临时数组暂存归并数据，最后再将临时数组中的值重新赋值到原始数组中。算法步骤如下：

1. 给定两个相邻的分别已经排好序的数组；
2. 申请临时空间，使其大小为两个已经排序数组大小之和，该空间用来存放归并后的序列；
3. 设定两个指针，最初位置分别为两个已排序数组的起始位置；
4. 比较两个指针所指向的元素，选择较小的元素放入到归并空间，并移动指针到下一位置；
5. 重复步骤4直到某一指针到达序列尾；
6. 将有剩余元素的数组中的元素复制到归并数组末尾；

#### 伪代码
```
算法名称：合并两个有序数组(TwoWayMerge)
输入：数组a，low到mid及mid+1到high间已排序
输出：数组a，从low到high是排序的
1：	i0 = low, i1 = mid+1
2：	for j = low to high
3： 	if i0 < mid and (A[i0] <= A[i1] or i1 >= high))
4：			B[j] = A[i0]
5： 		i0 = i0 + 1
6： 	else
7：			B[j] = A[i1]
8： 		i1 = i1 + 1
9： 	end if
```