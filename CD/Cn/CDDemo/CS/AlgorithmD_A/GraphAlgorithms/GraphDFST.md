---
layout: default
tags:
  - CD Demo
categories:
  - GraphAlgorithms
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/GraphAlgorithms/GraphDFST
---
### <center>深度优先搜索算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---
图的深度优先遍历，类似于树的前序遍历（或先根遍历）。

#### 算法思想
当访问顶点v时，算法会递归地访问顶点v的所有未被访问的邻接顶点。其结果是遍历会沿着图中的一个分支一直处理下去，直到不能前进（分支完成），再回溯处理下一个分支，直至处理完顶点v的所有分支。

#### 算法步骤

1. 置所有顶点为未访问；
2. 从起始顶点V0开始循环访问各顶点，对于未访问的当前顶点v：
- ① 顶点v标记为已访问；
- ② 访问v所有的邻接顶点
  - 若某邻接顶点w未访问过，则将其标记为已访问，并转②；
  - 若某邻接节点w已访问过，则跳过;   
3. 若图中尚有顶点未被访问，则再选其中一个顶点作为起始顶点，继续步骤2；反之，遍历结束。

#### 伪代码
```
DFS(V,E)
{	//输入：G(V,E)，即顶点集合V和邻接表E
	//输出：各顶点的访问次序
	//Initialization:
	cnt = 0
	for all  𝒗 ∈ 𝑽 : visited[v] = false;	//所有顶点标记为false，表示“未访问”；	
	for all  𝒗 ∈ 𝑽
		if not visited[v]: dfs(v);	
}
dfs(𝒗 )
{	
	visited[v] = true;		//顶点v标记为true，表示“访问到”；
	preorder[cnt++] = v;	//根据访问到的先后顺序，为顶点赋值；			
	for each edge  𝒗,𝒖 ∈ 𝑬 
		if not visited[u]: dfs(u);	//递归访问所有和v相邻的未访问顶点u；
}
```