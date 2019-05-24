---
layout: default
tags:
  - CD Demo
categories:
  - Sorting
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Sorting/QuickSortT
---
### <center>快速排序算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>
</div>
---

快速排序，是目前为止应用最为广泛的内排序算法。

#### 算法思想

对于待排序数列，如果从中选择一个基准数，将所有比它小的数放在它左侧，所有比它大的数放在它右侧，也就是以基准数为枢纽，将待排序数列划为了两个部分：其左侧部分的数列值均小于右侧部分，基准数位于中间。如此，对左右侧分区继续此划分，直至所有分区仅有1个元素时，对应的整个数列即为非递减的有序数列了。

算法步骤分解如下
 
- 从待排序数列中选择一个适合的基准数 pivot。
- 以pivot为基准，对数列进行划分，左侧为较小数，右侧为较大数，pivot即为中间数。 
- 对左右两侧子数列，递归进行以上操作，直至余下1个数字。 

显然，关键在于pivot的选取和划分的实现。

- piovt的最佳选择是中值元素。为了简化，此处选择数列的最后一个元素值作为pivot。

- 划分，是通过找到逆序对并交换实现的。有两种经典策略，分别由 Nico Lomuto 和 C.A.R. Hoare 发明。此处演示仅针对应用更为广泛的Lomuto策略方法。

#### Lomuto 划分策略

Lomuto 划分使用前后两个指针，cur为遍历指针，初始为开头位置；pre为标记指针，初始为开头的前一位置。
当元素较(pivot)小时，pre和cur同步前进；当元素较(pivot)大时，cur继续前进，pre则暂停(pre+1标记较大值，等待逆序成对)；
pre暂停后，cur继续前进，当较小元素再次出现时，逆序成对，两者交换。

待cur指针遍历结束，pre+1与high位置最后做一次逆序交换即可。
伪代码如下，pre和cur分别以 i,j 代替。

```
partition(a[], low, high)
	pivot = a[high] 
	i = low-1;  //i 初始为序列开头的前一位置；
	for j = low to high-1  // j 起始为序列开头；
		if a[j] <= pivot 
			i++;
			if i < j then swap(a[i], a[j]);            
    swap(a[i+1], a[high]);
    return i;   
```

通俗的讲，在没找到较（pivot）大的值之前，i一直紧跟j；当遇到较大值，两者之间开始拉开差距，而中间差就是连续的大于pivot的值的个数；当再次遇到小于pivot的值时，即成功找到了一个逆序对，交换i、j位置的对应值即可。