---
layout: default
tags:
  - CD Demo
categories:
  - Sorting
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/BubbleSortH
---
### <center>冒泡排序算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---
#### 演示设置
1. Swap列 标识一趟外循环 (即 i 循环) 内是否发生过交换，对应变量 hasSwap
- F 没有交换；
- T 至少1次交换；
2. 使用 下标 标识元素的初始位置；

#### Code参数
- a[ ] - 输入数组；
- n - 排序数组长度；
- i - 外层循环索引，取值 n-1~1；
- j - 内层循环索引，取值 0~i-1；
- hasSwap - 标识一趟 i 循环内是否发生过交换；


