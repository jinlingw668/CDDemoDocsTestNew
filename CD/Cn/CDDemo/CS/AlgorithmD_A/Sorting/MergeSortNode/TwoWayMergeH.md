---
layout: default
tags:
  - CD Demo
categories:
  - Sorting/MergeSortNode
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/MergeSortNode/TwoWayMergeH
---
### <center>二路归并算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

#### 演示设置
1. 系统先将给定的数据分成左右两半并分别排序；
1. 使用 红色的矩形框 标识左右两路有序数组；
2. 使用 下拉出的空白行 标识临时数组；
3. 使用 下标 标识元素的初始位置；
4. 交互时，注意临时数组赋值后的 i, j, k 索引需自增，相关 code 如下
- b[k++] = a[i++];
- b[k++] = a[j++];
- b[k++] = a[j]; j++
- b[k++] = a[i]; i++

#### Code参数
- a[ ] - 输入数组；
- n - 归并数组长度；
- p, q, r - 待归并数组的低端、中间、高端索引；
- i - 第1路的数组索引，初始为 p；
- j - 第2路的数组索引，初始为 q+1；
- k - 归并的目标数组索引，初始为 p；
- b[ ] - 归并使用的临时数组；