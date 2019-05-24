---
layout: default
tags:
  - CD Demo
categories:
  - DivideAndConquer
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/DivideAndConquer/BinarySearchH
---
### <center>二分搜索算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>			
</div>
---
#### Code参数
- a[ ] - 待查找数组；
- n - 待查找数组长度；
- x - 待查找目标值；
- low - 查找的低端索引，初始为 0 ；
- high - 查找的高端索引，初始为 n - 1 ；
- mid - 查找的折半索引，mid = ( low + high ) / 2 ；
- p - 目标值位置 或 “-1”（标识未找到）；