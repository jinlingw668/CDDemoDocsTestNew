---
layout: default
tags:
  - CD Demo
categories:
  - Sorting
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/SelectionSortH
---
### <center>选择排序算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---

#### 演示设置
1. 当前的最大值元素标识为红色；
2. 使用 下标 标识元素的初始位置；

#### Code参数
- a[ ] - 输入数组；
- n - 排序数组长度；
- i - 外层循环索引，取值 n~2；
- j - 内层循环索引，取值 1~i-1；
- p - 当前最大元素的位置，初始为0；