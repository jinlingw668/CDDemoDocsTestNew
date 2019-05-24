---
layout: default
tags:
  - CD Demo
categories:
  - Sorting/MergeSortNode
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/MergeSortNode/MergeSortH
---
### <center>归并排序算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>			
</div>
---

#### 演示设置
1. 使用 不同颜色的嵌套的矩形框 标识递归的分区；
2. 使用 Op列 标识演示状态： 
- B - Begin，开始； 
- D - Divide，划分； 
- M - Merge，归并； 
- F - Final step in dividing，划分至最后一步，即单个元素时；
3. Op 标识为 B, D, F 时
- 其后的三列标识为 low, mid, high，对应 MergeSort 的函数参数；
4. Op 标识为 M 时
- 其后的三列标识为 p/i , q/j , r/k ，对应 TwoWayMerge 的函数参数；
- 且使用两行演示数据
  - 第1行，对应参数 p, q, r；
  - 第2行，对应参数 i, j, k；
5. 使用 下标 标识元素的初始位置；
6. 交互时，注意临时数组赋值后的 i, j, k 索引需自增，相关 code 如下
- b[k++] = a[i++];
- b[k++] = a[j++];
- b[k++] = a[j]; j++
- b[k++] = a[i]; i++

#### Code参数
- a[ ] - 输入数组；
- n - 排序数组长度；
- low, mid, high - 排序递归调用的数组低端、中间、高端索引；
- p, q, r - 二路归并函数调用的数组低端、中间、高端索引；
- i - 二路归并中，第1路的数组索引，初始为 p；
- j - 二路归并中，第2路的数组索引，初始为 q+1；
- k - 二路归并中，归并目标数组索引，初始为 p；
- b[ ] - 二路归并中使用的临时数组；
