---
layout: default
tags:
  - CD Demo
categories:
  - DivideAndConquer
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/DivideAndConquer/ChessboardTilingH
---
### <center>棋盘覆盖算法 Demo 操作要领<center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>			
</div>
---
#### 演示设置
1. 使用Call Stack 记录算法递归调用的栈信息，以“No: (#Loc, rcpqs, TileNo)”的形式
- No - 对应演示步骤No;
- \#Loc - 子函数调用的return point 返回点，以便返回后继续执行；
  - Loc标识代码行；
  - #Loc标识代码行地址；
- rcpqs - 子函数调用的参数(r, c, p, q, s)取值；
- TileNo - 棋盘覆盖的L型骨牌计数；
2. 例如 n=2 (0,0)时
- 02: (#16,00004) 
  - 栈顶(#16,00004)对应步骤No2
  - 函数ChessboardTiling(0,0,0,0,4)的返回点，是ChessBoardTilingCaller的#16代码行；
- 04: (#16,00002,1)(#15,00002) 
  - 栈顶(#15,00002)对应步骤No4
  - 函数ChessboardTiling(0,0,0,0,2)的返回点，是父函数ChessboardTiling的#15代码行(递归)；

#### Code参数
- n - 棋盘规模输入；
- p0,q0 - 残缺方格的坐标输入；
- m - 棋盘的行列数，值为2<sup>n</sup>；
- TileNO - L型骨牌的全局计数；
- r,c - 子棋盘的左上角坐标（起点）；
- p,q - 子棋盘的残缺方格坐标；
- s - 子棋盘的行列数；
- no - 子棋盘的L型骨牌号（用于赋值）；
- chessboard - 棋盘矩阵；

