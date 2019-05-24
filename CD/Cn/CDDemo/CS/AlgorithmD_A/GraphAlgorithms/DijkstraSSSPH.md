---
layout: default
tags:
  - CD Demo
categories:
  - GraphAlgorithms
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/GraphAlgorithms/DijkstraSSSPH
---
### <center>Dijkstra 最短路径算法 Demo 操作要领</center> 
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---
#### 演示设置
1. 使用 v,u 标识当前节点及其邻节点，对应DijkstraSSSP( )函数的 v,u 变量。
2. 使用<sup>p</sup>v<sup>d</sup> 标识顶点v的访问状态，其中 
- p - Prev，顶点v访问路径上的前驱(中间)顶点，-1表示空； 
- d - Dist，从源点到顶点v的当前路径距离；
3. 使用二叉树标识候选的优先队列的堆结构状态。
4. 交互时不需考虑上下标，如“<sup>5</sup>2<sup>8</sup>”可直接输入“528”。

#### Code参数
- v0 - 源点
- W - 顶点的权重矩阵
- Dist- 源点到各顶点的路径距离，初始值Dist[V0] = 0，其它顶点值INT_MAX。
- Prev- 各顶点最短路径上的前驱(中间)顶点，初始值-1。
- Q - 下一最短路径的候选顶点集合(优先队列)，初始值V0
  - 队列以Dist为键值维护为优先堆，对应演示区的堆结构；
- S - 各顶点求取路径的完成情况，初始值S[V0] = 0 ，其它顶点值 -1
  - -1 : Free，尚未开始；
  - -2 : Finished，已完成最短路径求取；
  - 0,1,...,n: 求取过程中，跟踪对应Q中顶点的优先堆排列；

#### I/O
- Weight matrix - 权重矩阵
- Source node - 源点
- Output - 输出已完成路径计算的顶点v的最短路径，以“v: dist ;Prev”的形式 
  - dist - 源点到顶点v的最短路径距离；
  - Prev - 源点到顶点v的最短路径路由；

