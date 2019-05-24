---
layout: default
tags:
  - CD Demo
categories:
  - BranchAndBound
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/BranchAndBound/BB0_1KnapsackH
---
### <center>0-1背包问题的分支限界算法 Demo 操作要领</center> 
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

#### 演示设置

1. 使用 id: v,w,boundV 标识分支节点的限界情况，其中 
- id - 节点的字母编号，依次为A,B,C,...； 
- X - 节点的物品组合，1标识装入，0标识未装入；鼠标悬停可见；
- v - 节点的物品价值；
- w - 节点的物品重量；
- boundV - 节点的价值上限；
  - 上限值是计算所得，可能有小数，节点处取整显示，鼠标悬停可见实际值；
2. 分支树的上(左)子节点标识装入物品，下(右)子节点标识不装入物品。
3. 使用 Priority Queue 标识候选优先队列，并用二叉树标识其堆结构。
4. 使用 OptN,OptV,OptItems 记录当前的最优节点
- OptN - Current optimal node 当前的最优节点编号，A,B,C,...
- OptV - Current optimal value 当前的最优值
- OptItems - Current optimal items 当前的最优组合

#### Code参数
- N - 物品数量；
- W - 背包的最大承重量；
- v - 物品价值输入；
- w - 物品重量输入；
- OptV - 当前最优解(最大价值)；
- OptItems - 当前最优解的物品组合；
  - 当前的最优解组合可能有多个，此代码仅记录第一个；也因此，对应节点可能是内部节点，方案输出时需要补充必要的0，详见[I/O]；
- stItem - 物品(结构体类型)
  - v - 物品价值；
  - w - 物品重量；
- Items - 物品集合
  - stItem - 单个物品；
- stNode - 分支树的节点(结构体类型)
  - d - 节点在树中的级别，根节点对应0级；也对应物品编号，如第1级对应物品1；
  - v - 节点的物品价值；
  - w - 节点的物品重量；
  - items - 节点的物品组合，1标识装入，0标识未装入；
    - 演示中示为X，节点鼠标悬停可见；
  - boundV - 节点的价值上限；
- Q - 候选活节点集合(优先队列)，初始值V0
  - stNode - 单个节点；
  - 以boundV为键值维护为优先堆，对应演示区的堆结构；

#### I/O
- Items - 输入的物品价值和重量；
- Sorted items - 按单位价值排序后的物品价值和重量；
- Output - 输出算法的最优解
  - Optimal value - 装入物品的最优解(最大价值)；
  - Optimal solution - 装入物品的最优方案(对应于Sorted items)；
    - 最优解节点是内部的非叶子节点时，最优方案需添加必要的0
	  - 比如，4个物品的最优方案101，需补足0为1010
  


