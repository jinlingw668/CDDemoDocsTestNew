---
layout: default
tags:
  - CD Demo
categories:
  - DynamicProgramming
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/DynamicProgramming/DP0_1KnapsackH
---
### <center>0-1 背包问题算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

#### 演示设置

1. 使用v<sup>e</sup>标识价值和方向，其中e的值说明如下： 
- U - 从上方计算来的v；// 物品 i 不放入背包的情况； 
- 0/1/…/j-1 - 从左上计算来的v，对应 j 减去物品i的重量w[i-1]的方案列；// 物品 i 放入背包的情况；
2. 两个方向上价值相等时，计算次序为：U、0/1/…/j-1
3. 交互时不需考虑上标，如“3<sup>U</sup>”可直接输入“3U”

#### Code参数
- n - 物品数量；
- W - 背包的最大承重量；
- w - 物品重量输入；
- v - 物品价值输入；
- V - 最大价值矩阵，计算方向从上至下，从左向右；
- x - 算法计算过程，记录各物品是否装入；
- OptV - 当前最优解(最大价值)；

#### I/O
- Optimal value - 算法的最优解(最大价值)；
- Optimal solution - 回溯获取最优方案
  - X - 最优解的物品组合；