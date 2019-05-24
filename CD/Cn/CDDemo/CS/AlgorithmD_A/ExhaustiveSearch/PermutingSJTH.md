---
layout: default
tags:
  - CD Demo
categories:
  - ExhaustiveSearch
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/ExhaustiveSearch/PermutingSJTH
---
### <center>全排列遍历 - SJT 算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>			
</div>
---
#### 演示设置

1. 使用“>”或“<”标识排列数字的可移动方向
- < - 可向左移动，对应d[ ]为-1；
- \> - 可向右移动，对应d[ ]为 1；
2. 使用 Output 标识算法的排列输出，以“cnt(No)Perm”的形式 
- cnt - 排列计数； 
- No - 对应演示步骤No； 
- Perm - 排列序列，对应a[1~n]；
3. 例如 n=4时，Output 如下
- 01(01)1234 - 步骤01，输出第1个排列“1234”；
- 02(03)1243 - 步骤03，输出第2个排列“1243”；
- 03(05)1423 - 步骤05，输出第3个排列“1423”；

#### Code参数
- n - 排列规模，取值 3 ~ 4 ；
- p - 最大可移动项；
- m - 最大可移动项的数字 ，对应a[p]；
- a[] - 排列数字数组，a[1~n] 为有效序列；a[0], a[n+1]置为“n+1”，作为限界；
- d[] - 排列方向数组，d[1~n] 初始为-1（向左移动）；
- cnt - 排列计数；