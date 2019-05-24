---
layout: default
tags:
  - CD Demo
categories:
  - BranchAndBound
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/BranchAndBound/BB0_1KnapsackT
---
### <center>0-1背包问题的分支限界算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---
0-1背包问题是算法中的经典问题，解决方法有动态规划、回溯法、分支限界法等多种。

#### 问题描述

背包问题：给定n种物品1~n，重量w[]，价值v[]，所有物品的重量和价值都是正整数。
背包可承受的最大重量为W。要求在总重量不超过W的前提下，使得装入物品的总价值最大化。

0-1背包问题：在背包问题中，限定每种物品只能选择1个或0个，即装入或不装入。

#### 分支限界

分支限界算法，在问题的状态空间树上搜索问题的最优解
- 通过约束条件剪除无效节点，即不可行解；
- 通过限界条件剪除无效分支，即不包含最优解的可行分支；

分支限界算法，在扩展节点分支时，计算子节点的限界值。如果限界值优于当前最优解，则加入到活节点表中。并根据限界值选择最有利的子节点继续扩展，使搜索朝着解空间树上最优解的分支推进，以便尽快找到最优解。 

分支限界算法解决0-1背包问题时的上限函数BoundV()
- 是已装入的物品价值，加上剩下的(最大单位重量价值的)物品装满剩余容量的价值总和。

分支限界算法解决0-1背包问题时，判断节点是否能加入到活节点表，条件如下：
- 约束条件，判断是否满足背包容量约束，即 w < W
- 限界条件，判断是否可能有最优解，即节点上限优于当前最优解，即 boundV > OptV

#### 算法思想

1. 首先，需要对输入数据进行预处理，将各物品按照单位重量价值从大到小排序。
2. 对解空间树的根节点计算物品的价值上界，并将它加入到子集树和活节点表中。
3. 算法依次检查当前扩展节点的左、右子节点的可行性(是否满足约束条件)，并舍弃不可行或非最优解的子结点。
- 左子节点- 如果该子节点是可行节点，并满足上界约束，则将它加入到子集树和活节点表中。
- 右子节点 - 如果该子节点满足上界约束(此节点定是可行节点)，则将它加入子集树和活节点表中。
4. 从活节点表中，选取具有最大界限boundV的节点，继续扩展分支，转第3步。
5. 继续扩展过程，直到找到最优解或活节点表为空。

#### 算法要点
1. boundV 最大的顶点 v 的寻找，在实际应用中，通常使用二叉堆(大顶堆)优先队列实现
- Q - 以节点的上界boundV为键值的最大堆优先队列 Priority Queue

2. BoundV值的计算
- 如果节点对应的物品重量w超过背包容量W，则置boundV为0，以确保界限不会优于最优解；

#### 算法步骤
```
1. 初始时，用v[]、w[]构造Items数组 ( 按v/w的倒序排列 )；置OptV=0，OptItems为空；
    Q 初始为 { d:0, w:0, v:0, BoundV(0) }，对应状态空间树的根节点；
2. 若Q非空，则 q = extract-max(Q)；//选择boundV最大的节点
	if q.boundV > OptV   // 检查节点是否仍有希望
		建立左孩子节点: qL = q; qL.d++; qL.Items.push(1) //装入第d个物品
			if qL.w <= W and qL.v > OptV
				OptV = qL.v; OptItems = qL.Items
			qL.boundV = BoundV(qL)  // if qL.w > W return 0
			if qL.boundV > OptV
				InsertQ(qL)
		建立右孩子节点: qR = q; qR.d++; qR.Items.push(0) //未装入第d个物品
			qR.boundV = BoundV(qR)
			if qR.boundV > OptV
				InsertQ(qR)
3. 重复步骤2，直到 Q 为空。
```




