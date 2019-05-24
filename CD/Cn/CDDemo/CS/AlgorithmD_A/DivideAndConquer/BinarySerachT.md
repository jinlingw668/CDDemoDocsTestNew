---
layout: default
tags:
  - CD Demo
categories:
  - DivideAndConquer
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/DivideAndConquer/BinarySearchT
---
### <center>二分搜索算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---


二分搜索算法，也称折半搜索。算法每次取中值mid，并比较A[mid]与K值的大小。如果K=[mid]，则检索结束。如果K>A[mid]，则可以去掉A[mid]及之前的部分，查找只需要在A[mid+1]~An-1的范围内继续即可。而如果K<Ai，则对应于K值仅可能存在于A0,…,A[mid-1]范围。如此，不断缩小检索范围，直至找到与K匹配的元素，或者查找范围已不合理、没有元素可查（表明查找不成功）为止。详细步骤如下。

1. 置 L=0，R=n-1
2. 若 L>R，检索结束，return -1，标识不成功
3. 计算中值，置 m=(L+R)/2
4. 若 Am<T，置L=m+1，转步骤2
5. 若 Am>T，置R=m-1，转步骤2
6. 若 Am = T，检索结束，return m

显然，二分查找比顺序查找的效率高许多，但二分查找仅适用于有序表的情况，且只限于顺序存储结构（对线性链表无法快速的获取其中值元素）。






