---
layout: default
tags:
  - CD Demo
categories:
  - Sorting/HeapSortNode
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/HeapSortNode/HeapifyingH
---
### <center>建堆算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

#### 演示设置

1. 使用 二叉树 标识堆结构；
2. 使用 Done列 标识子树建堆是否完成，对应参数 done；
3. 使用 下标 标识元素的初始位置；

#### Code参数
- H[ ] - 输入数组，即线性表表示的堆；
- n - 输入数组长度；
- j - 建堆的循环索引，取值 n/2-1~0；
- k - SiftDown调堆函数的循环索引，堆化以 k 为根的子树；
- done - 标识子树堆化是否完成；