---
layout: default
tags:
  - CD Demo
categories:
  - ExhaustiveSearch
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/ExhaustiveSearch/PermutingSJTT
---
### <center>全排列遍历 - SJT 算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

SJT(Steinhaus-Johnson-Trotter)算法，是一个基于最小变换的全排列生成算法。

#### 算法思想

对于排列a[1...n]，算法通过将a[i]，与a[i-1]或a[i+1]进行交换，以生成下一个排列，直到所有排列生成完毕为止。如此，当前排列与其后继排列间只是两个相邻位置的元素发生了调换，即最小变换。当然，算法并非随意交换某两个元素的位置，其生成全排列的具体步骤如下：

1. 起始排列为字典序最小的升序排列，并且为每个元素赋予一个移动方向，初始为向左；
2. 在排列中查找这样的元素，该元素的移动方向指向一个比它小的元素（即可移动），找到其中的最大者，即为最大的可移动元素m；
3. 将该元素m与其移动方向指向的元素交换位置，以生成后续排列；
4. 将排列中，所有元素值大于该元素的元素，反转其移动方向；
5. 对后续排列重复步骤2~4，直至找不到可移动元素，说明排列全部生成，算法结束；

#### 算法要点
- 所有元素，都只能向比自己小的元素的方向移动，且不会移动到排列数组之外；
- 每次移动，都只能对最大的可移动元素进行操作；
- 每次移动后，都需要将所有大于移动元素的元素的移动方向反转；

#### 伪代码
```
初始化：a[1...n]=1,2,…,n; 初始排列；
		d[1...n]= -1,-1,...,-1; 初始移动方向，“-1”标识向左，“1”标识向右；
		a[0],a[n+1]=n+1;作为排列边界；
// 求取 a[1...n]元素的全排列；
PermutingSJT(n) {
    OutputOnePerm;		// 初始排列输出；
    while ( p = GetBiggestMovable()) {
        m = a[p];		// 最大的可移动元素；
        swap(a[p], a[p + d[p]]);	//交换元素，生成后续排列；
        swap(d[p], d[p + d[p]]);	//元素的移动方向同时交换；
        Reverse(m);	
        OutputOnePerm;	// 后续排列输出；
}}
GetBiggestMovable() {	
	p = 0;
    for i = 1 to n	
        if (a[i] > a[i + d[i]])  // a[i]可移动；
            p = (p && a[p] > a[i]) ? p : i; // p标识最大的可移动位置；
    return p;
}
Reverse(m) {
    for i = 1 to n
        if (a[i] > m) d[i] *= -1;	//大于m的元素的移动方向反转；
}
```