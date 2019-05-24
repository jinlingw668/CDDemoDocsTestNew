---
layout: default
tags:
  - CD Demo
categories:
  - Sorting/HeapSortNode
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/HeapSortNode/HeapifyingT
---
### <center>建堆算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---

### 二叉堆

二叉堆是一棵完全二叉树，且满足如下堆特性：
- 父结点的键值总是大于等于（二叉最大堆），或小于等于（二叉最小堆）左右子结点；
- 每个结点的左子树和右子树都是一个二叉堆（都是最大堆或最小堆）；

二叉堆的逻辑结构是二叉树，但物理结构可以是线性表存储。

### 建堆

对于n个元素的二叉树，从它最后一个非叶子节点开始，到根节点为止，检查这些节点为根的子树是否满足堆结构。如果不满足，则需要交换调整，也称为下移操作（SiftDown）：将节点i和它子节点的较大值进行交换，然后检查在新位置上，是否满足堆结构。如此继续，直到满足堆结构或已交换至叶子节点。

以大顶堆为例，SiftDown操作的详细步骤如下：

1. 对于数组元素H[k], 比较其左孩子H[Left(k)]和右孩子H[Right(k)]，最大的那个记为larger。
2. 如果 H[larger]< H[k]，即 H[k]大于左右子节点，满足堆结构，则直接结束。
3. 否则，H[k]的某个子结点为最大元素，需要将H[larger],H[k]交换。
4. 再从交换后的子节点开始，重复第1,2,3步，直至叶子节点，完成一次子堆调整。

#### 伪代码

```
Heapify(H[ ], int n )
1：   for j = n / 2 - 1 to 0 // 从最后一个非叶子节点开始调堆；
2:		SiftDown(H, n, j);
SiftDown( H[ ], n,  k ) // 对节点k为根的子树调整，k的子节点均满足堆特性；
1：   done←false
2：   if 2*k + 1 >n then exit // 即节点k没有子节点；
3：   repeat
4:		k←2*k+1
5:		if k+1<n and H[k+1] > H[k] then k←k+1 // 标记较大子节点为k；
6:		if H[(k-1)/2]< H[k] then H[k] ↔ H[(k-1)/2 ] // 子节点k大于父节点，需交换；
7:		else done←true
8：   until 2*k+1>n or done
```
注意：伪代码数组索引从0开始，第k个元素即对应第k个节点，其父节点为k/2 -1 ，左右子节点（如果存在的话），分别为2*k+1和2*k+2。