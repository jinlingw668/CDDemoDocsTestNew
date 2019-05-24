---
layout: default
tags:
  - CD Demo
categories:
  - GraphAlgorithms
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/GraphAlgorithms/GraphBFSH
---
### <center>广度优先搜索算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---
#### 演示设置

1. 使用<sup>m</sup>T标识顶点v的访问顺序，其中 
- m - 顶点的访问顺序；
2. 交互时不需考虑上标，如“<sup>5</sup>T”可直接输入“5T”。

#### Code参数
- N - 顶点数；
- v0 - 起点；
- G - 图的邻接表；
- Visited - 各顶点是否访问过，初始为false；
- Order - 记录已访问的顶点及顺序；
  - v - 顶点号；
  
#### I/O
- Adjacency list - 各顶点的邻接表；
- Vertices Queue - 记录顶点遍历的队列情况(右进左出)，以“v”的形式 ；
