---
layout: default
tags:
  - CD Demo
categories:
  - GraphAlgorithms
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/GraphAlgorithms/GraphBFST
---
### <center>广度优先搜索算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---
图的广度优先遍历，类似于树的层次遍历。

#### 算法思想
在访问顶点v之后，算法会进一步访问顶点v的所有未被访问的邻接顶点w1,w2,...。顶点v及其所有邻接顶点处理完成后，算法再依次访问w1,w2,...的各未被访问过的邻接点。即从起始点开始，由近及远，以类似同心圆的方式层层扩展访问，直至图中所有顶点均被访问一次。而邻接顶点的保存可以使用队列。

#### 算法步骤

1. 置所有顶点为未访问；
2. 从起始顶点V0开始循环访问各未访问顶点，对于未访问的当前顶点v：
- ① 将v置为已访问；
- ② 将v推入队列Q；
- ③ 若队列Q不为空
  - a) 弹出队首顶点u；
  - b) 访问顶点u的所有邻接顶点
	    - 若某邻接顶点w未访问过，则将其置为已访问，并推入队列Q；
	    - 若某邻接顶点w已访问过，则跳过；
3. 若图中尚有顶点未被访问，则再选其中一个顶点作为起始顶点，继续步骤2；反之，遍历结束。

#### 伪代码
```
BFS(V,E)
{	//输入：G(V,E)，即顶点集合V和邻接表E
	//输出：各顶点的访问次序
	//Initialization:
	cnt = 0
	for all  𝒗 ∈ 𝑽 : visited[v] = false;	//所有顶点标记为false，表示“未访问”；	
	for all  𝒗 ∈ 𝑽
		if not visited[v]: bfs(v);	
}
bfS(v)
{	visited[v] = true;		//顶点v标记为true，表示“访问到”；
	preorder[cnt++] = v;	//根据访问到的先后顺序，为顶点赋值；
	Q.push(v);
	while !Q.empty()
	{	u = Q.pop();
		for each edge (𝑢,𝑤)∈𝐸		//访问所有和v相邻的未访问顶点u；
		{	if not visited[w]
			{	Q.push(w);
				visited[w] = true;
				preorder[cnt++] = w; 
}}}}
```