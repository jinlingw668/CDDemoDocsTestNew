---
layout: default
tags:
  - CD Demo
categories:
  - DynamicProgramming
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/DynamicProgramming/LSEditDistH
---
### <center>Levenstein 编辑距离算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

#### 演示设置

1. 使用e<sup>p</sup>标识距离和方向，其中p的值说明如下：
- U - 从上方计算来的e；
- L - 从左侧计算来的e；
- 0 - 从左上计算来的e，对应x[i]与y[j]字符相同的情况；
- 1 - 从左上计算来的e，对应x[i]与y[j]字符不同的情况；
2. 两个或三个方向上距离值相等时，计算次序为：U、L、0/1。
3. 交互时不需考虑上标，如“3<sup>U</sup>”可直接输入“3U”。
4. “ε”符号表示空串，借用自计算理论。

#### Code参数
- x - 输入字符串；
- y - 输入字符串；
- m - x的字符串长度；
- n - y的字符串长度；
- E - 最小距离矩阵，计算方向从上至下，从左向右；
- P - 记录矩阵各距离值的计算来源；
- xe - 字符串x的最优对准；
- ye - 字符串y的最优对准；

#### I/O

- Optimal distance - 最优解(最小距离)；
- Optimal solution - 回溯获取最优解决方案
  - xe, ye - 最优解的字符串对准；