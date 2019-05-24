---
layout: default
tags:
  - CD Demo
categories:
  - ExhaustiveSearch
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/ExhaustiveSearch/SubsettingH
---
### <center>子集遍历算法 Demo 操作要领</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>			
</div>
---
#### 演示设置

1. 使用Call Stack记录算法递归调用的栈信息，以“No：( #Loc, n )”的形式
- No - 对应演示步骤No； 
- \#Loc - 子函数调用的return point 返回点，以便返回后继续执行；
  - Loc标识代码行；
  - #Loc标识代码行地址； 
- n - 子函数调用的参数取值； 
2. 使用 Output 标识算法的子集输出，以"cnt：s ; { subset } "的形式 
- cnt - 子集计数； 
- s - 子集标识数组；
- { subset } - 子集内容；
3. 例如 n = 4 时 
- 02: (#11,3) 
  - 栈顶对应步骤No2，子函数Subsetting(3)的返回点，是其#11代码行； 
- 08: (#11,3)(#11,2)(#11,1)(#11,0) 
  - 栈顶(#11,0)对应步骤No8，Subsetting(0) 输出第1个子集“01: 0000; {}”；
- 10: (#11,3)(#11,2)(#11,1)(#14,0) 
  - 栈顶(#11,0)对应步骤No10，Subsetting(0) 输出第2个子集“02: 1000; {1}”； 
- 14: (#11,3)(#11,2)(#14,1) 
  - 栈顶(#14,1)对应步骤No14，Subsetting(1)的返回点，是其#14代码行；

#### Code参数
- n - 子集遍历规模，取值3 ~ 6；
- s - 子集标识数组，0标识不包含，1标识包含；
- cnt - 子集计数；OutputOneSubsetBinary()内定义；