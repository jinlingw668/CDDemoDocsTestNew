---
layout: default
tags:
  - CD Demo
categories:
  - GraphAlgorithms
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/GraphAlgorithms/GraphDFSH
---
### <center>深度优先搜索算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---
#### 演示设置

1. 使用<sup>m</sup>T<sub>n</sub>标识顶点v的访问顺序，其中 
- m - 顶点访问的前序顺序 ( preorder )，即首次访问到的顺序号； 
- n - 顶点访问的后序顺序 ( postorder )，即完成访问的顺序号；
2. 交互时不需考虑上下标，如“<sup>5</sup>T<sub>8</sub>”可直接输入“5T8”。

#### Code参数
- N - 顶点数；
- v0 - 起点；
- G - 图的邻接表；
- Visited - 各顶点是否访问过，初始为false；
- Order - 访问顶点的顺序号，从1开始编号；
- PreOrder - 依次记录访问过程的前序顶点，初始为空；
  - v - 顶点号；
  - order - 对应顶点的前序遍历顺序号；
- PostOrder - 依次记录访问过程的后序顶点，初始为空；
  - v - 顶点号；
  - order - 对应顶点的后序遍历顺序号；
  
#### I/O
- Adjacency list - 各顶点的邻接表
- Call Stack - DFS函数递归调用的栈记录，以“v”或“(v,u)”的形式 
  - ( v, u ) - ( 顶点，邻接点 )；