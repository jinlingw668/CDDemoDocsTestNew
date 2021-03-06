---
layout: default
tags:
  - CD Demo
categories:
  - Sorting/HeapSortNode
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/HeapSortNode/HeapSortT
---
### <center>堆排序算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---

#### 算法思想
如果将n个元素的待排序序列构建成一个大顶堆，那么堆顶元素即对应整个序列的最大值。接着，将堆顶与堆尾元素相交换，那么最大值即移到了堆尾。将堆节点数减少1，并将剩余n-1个元素重新调整为一个大顶堆，之后再将堆顶元素与堆尾元素交换，即可得到n个元素的次小值。如此反复交换、调堆，直至堆节点数为1，便得到了一个有序序列。

#### 算法步骤

1. 建堆：将长度为n的数组H[]，构建成一个大顶堆；
2. 交换：将堆的第一个和最后一个元素交换，且堆节点数减1（以输出并存储最大值）；
3. 调堆：对交换后的第一个元素执行下移操作（SiftDown）；
4. 对调整后的新堆，重复第2,3步，直至堆节点数为1。

#### 伪代码

```
HeapSort(H[ ], int n)
1：   Heapify( H, n);
2：   for i = n-1 to 0  // i 标识堆尾索引；
3:		swap(H[0], H[i]);  // 第一个和最后一个元素交换；
4:		SiftDown(H, i, 0); // 对第一个元素执行SiftDown；

SiftDown( H[ ], n,  k ) // 对节点k为根的子树调整，k的子节点均满足堆特性；
1：   done←false
2：   if 2*k + 1 >n then exit // 即节点k没有子节点；
3：   repeat
4:		k←2*k+1
5:		if k+1<n and H[k+1] > H[k] then k←k+1 // 标记较大子节点为k；
6:		if H[(k-1)/2]< H[k] then H[k] ↔ H[(k-1)/2 ] // 子节点k大于父节点，需交换；
7:		else done←true
8：   until 2*k+1>n or done
```