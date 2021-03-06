---
layout: default
tags:
  - CD Demo
categories:
  - ExhaustiveSearch
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/ExhaustiveSearch/PermutingT
---
### <center>全排列遍历算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

#### 问题描述
全排列遍历，即输出集合1~n的所有排列。

对于任意集合S，将1~n当作键值（下标）即可。

#### 算法思想

直观的考虑，可以先固定第1个元素，然后对其余的n-1个元素进行全排列。而全排列中，每个元素都有机会作为第1个元素(前缀)。如果依次将1~n中每个元素交换至第1位做前缀（其中将1交换至第1位相当于没有发生交换），然后全排列除前缀元素之外的n-1个元素，这样即可完成对所有元素的全排列。如此，n的全排列遍历即转化为n-1的全排列遍历，显然这是个递归的过程，递归的出口是仅余一个元素。
   
递归算法思路：
- n个元素的全排列= 固定的前缀 + （n-1个剩余元素的全排列）；
- 出口：剩余元素只有一个时，说明排列完成，可输出一组排列；
- 循环：依次将每个元素换作第一个元素(固定前缀)，然后将其余元素继续全排列。
   - **注意：**其余元素全排列完成后，需要再次交换以还原序列，以便提取下一元素；
   
#### 伪代码

```	 
初始化：s[ ]=1,2,…,n，i=0;
// 求取 s[i...n-1]元素的全排列；
permuting(s, i, n) {
	if i = n-1 OutputOnePerm; 
	else
	for j = i to n-1 {      //j用于标识s[i...n-1]各元素；
		swap(s,i,j);		//s的第i、j位交换，以将第j位交换至i位；
		permuting(s,i+1,n);	//递归求取s[i+1...n-1]的全排列；
		swap(s,i,j);		//s的第i、j位再次交换，以恢复还原序列；
}}
```	 
