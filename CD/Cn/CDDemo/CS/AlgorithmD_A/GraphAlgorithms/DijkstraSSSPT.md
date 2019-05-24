---
layout: default
tags:
  - CD Demo
categories:
  - GraphAlgorithms
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/GraphAlgorithms/DijkstraSSSPT
---
### <center>Dijkstra 最短路径算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---
Dijkstra算法是经典的单源最短路径算法，用于计算源点到其它所有顶点的最短路径。


#### 问题描述
在图 G=(V,E) 中，假设每条边 E[i] 的权值距离为 w[i]，找到由源点 v0 到其余各点的最短路径。

适用：不含负权重的图

#### 算法思想
考虑把图中顶点集合V划分成两组S和U
- S - 为已求出最短路径的顶点集合，初始时S中只有一个源点{v0}
- U - 为其余未确定最短路径的顶点集合，初始为 V - {v0}
- Dist(x) - 为当前状态下从源点v0出发，经过S中的顶点，但不经过U中其它顶点，而直接到达x的最短路径距离。初始时，如果有<v0,x>边，则Dist(x)为边权重w(v0,x)；否则为 ∞ 。

对U中的所有顶点x，寻找Dist(x)最小的顶点v，则Dist(v)就是源点到顶点v的最短路径距离。同时，顶点v也即是集合U中距离源点最近的顶点。
把顶点v从U中删除，并入S中。然后，对U中与v邻接的所有顶点u，更新其Dist值：Dist(u) = min { Dist(u), Dist(v) + w(v,u) }。
继续这一过程，直到U为空。

#### 算法要点
1. Dist(x)最小的顶点 v 的寻找，在实际应用中，通常使用二叉堆(最小堆)优先队列实现
- PQ - 以当前最短路径距离为键值的最小堆优先队列 Priority Queue

2. 最短路径的更新
- 顶点v加入S后，U中邻接顶点u的路径更新，要保证经过v到u的路径长度，比目前(不经过v到u)的长度更短，
即 Dist[v] + W[v, u] < dist[u]。

#### 算法步骤
```
1. 初始时，置 Dist[v0] = 0，其余顶点 Dist 为 ∞；各顶点的Prev为nil；S为空；PQ 只包含 v0
2. 若 PQ 非空，则 v = extract-min(PQ)；S ←S ∪ {v}
	对 v 的不在 S 中的邻居顶点 u 循环
		若 v0 经过 v 到 u 的路径距离 比 目前 u 到 v0 的距离更短
			更新 v0 到 u 的距离：dist[u] = dist[v] + W[v, u]
			更新 u 的前驱顶点：prev[u] = v
		如 u 已经在 PQ 中，则 decrease-key(PQ, u)，否则 insert(PQ, u)
3. 重复步骤2，直到 PQ 为空（此时所有顶点都包含在S中）。
```
#### 算法特点
Dijkstra算法使用广度优先搜索方式，以源点为中心向外层层扩展，直至终点，算法最终得到一个最短路径树。




