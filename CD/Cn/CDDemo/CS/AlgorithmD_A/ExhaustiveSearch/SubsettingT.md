---
layout: default
tags:
  - CD Demo
categories:
  - ExhaustiveSearch
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/ExhaustiveSearch/SubsettingT
---
### <center>子集遍历算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---
子集生成算法，是蛮力法中一类非常重要的算法。

#### 问题描述

给定一个正整数n，生成集合 {1,2,3,...n} 的所有子集。

适用：对于任意元素集合u，将1~n作为键值（下标）即可。

#### 算法思想

对于n个元素中的每一个都有两种选择，放入子集中和不放入子集中，共有2<sup>n</sup>种可能。
考虑构造一个长度为n的标记向量s，对于元素i，如果i在子集中，则s[i]标记为1，不在则标记为0。

每个元素都有两种取值，子集生成过程也就对应着一个n+1层的二叉解答树，其1~n层即对应元素1~n的选择，叶节点即对应子集的输出。
如果从根节点向叶节点层层遍历（前序遍历），使用向量s相应的记录遍历路径（推入或弹出位置标记值），
那么当s的所有位置赋值，也就到达了叶节点，即可对应的输出一个子集。

标记向量，也称位向量，此方法也称为位向量法。

#### 算法实现

算法采用递归方式实现。

且为使子集的输出顺序符合习惯，将解答树对应的元素反向调整为：树的第1~n层，对应元素n~1的选择情况。
相应的，位向量s的第1~n位取值标记，也需要反向读取。

如向量s为0011，反向读取为1100，对应子集{1,2}。



