---
layout: default
tags:
  - CD Demo
categories:
  - Sorting
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/QuickSortH
---
### <center>快速排序算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---

#### 演示设置
1. 使用不同颜色的嵌套的矩形框标识递归的分区；
2. 取分区最右侧的 high 元素作为枢纽元素 (Lomuto分区法)，标识为红色
- pvtp - pivot position，即枢纽位置，对应pivot_p；
3. 使用 下标 标识元素的初始位置；

#### Code参数
- a[ ] - 输入数组；
- n - 排序数组长度；
- low - 排序递归调用的数组低端索引；
- high - 排序递归调用的数组高端索引；
- p - 分区函数 (partition) 返回的枢纽元素的排序位置 (即分区点) 的索引；
- pivot_p - 枢纽位置，初始值为 high；
- pivot - 枢纽位置元素，初始值为 a[high];
- i - 索引从左至右，第1个比 pivot 大的元素位置；
- j - 标识i索引后，第1个比 pivot 小的元素位置；

