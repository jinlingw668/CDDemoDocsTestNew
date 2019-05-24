---
layout: default
tags:
  - CD Demo
categories:
  - ExhaustiveSearch
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/ExhaustiveSearch/PermutingH
---
### <center>全排列遍历算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>			
</div>
---

#### 演示设置

1. 使用Call Stack记录算法子函数调用的栈信息，以“No: (i,j)”或者“No: (i)”的形式 
- No: (i,j) - 子函数Permuting(i)内(s[i],s[j]) 相交换 或 交换回来； 
- No: (i) - 子函数Permuting(i)输出排列；
2. 使用 Output 标识算法的排列输出，以" cnt：Perm "的形式
- cnt - 排列计数； 
- Perm - 排列序列，对应s； 
3. 例如 n=4时 
- 002：(0,0) 
  - 栈顶(0,0)对应步骤No2，子函数Permuting(0)的(s[0],s[0]) 相交换；
- 008：(0,0);(1,1);(2,3);(3)  
  - 栈顶(3)对应步骤No8，子函数Permuting(3)输出第1个“001: 1234”；
- 010: (0,0);(1,1);(2,3); 
  - 栈顶(2,3)对应步骤No10，子函数Permuting(2)的(s[2],s[3]) 相交换；
- 012: (0,0);(1,1);(2,3);(3)
  - 栈顶(3)对应步骤No12，子函数Permuting(3)输出第2个排列“002: 1243”；
- 012: (0,0);(1,1);(2,3); 
  - 栈顶(2,3)对应步骤No12，子函数Permuting(2)的(s[2],s[3]) 交换回来；

#### Code参数
- n - 排列规模，取值 3 ~ 4 ；
- s - 排列序列数组；
- cnt - 排列计数；OutputOnePermutation()内定义；



