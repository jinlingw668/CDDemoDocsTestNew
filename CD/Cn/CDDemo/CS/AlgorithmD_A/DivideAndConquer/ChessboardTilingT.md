---
layout: default
tags:
  - CD Demo
categories:
  - DivideAndConquer
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/DivideAndConquer/ChessboardTilingT
---

### <center>棋盘覆盖算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>	
</div>
---
棋盘覆盖算法，也称为残缺棋盘算法，是分治法的典型应用。

棋盘由2<sup>k</sup> x 2<sup>k</sup> 个方格组成，其中有一个方格与其它方格不同，称之为一特殊方格，棋盘也称为残缺棋盘。显然，特殊方格在棋盘中可能出现的位置有2^2k即4^k种，因而有4^k个不同的棋盘布局。

棋盘覆盖，要求使用上图所示的三格L型骨牌覆盖给定棋盘，使得除特殊方格外的所有方格均被覆盖，且L型骨牌不会重叠。
分析可知，在一个2<sup>k</sup> x 2<sup>k</sup> 的棋盘覆盖中，非特殊方格数为2^2k-1，所需要的L型骨牌个数恰为(2^2k-1)/3（可以验证(2^2k-1)/3是一个整数）。

使用分治策略可以很好地解决棋盘覆盖问题。当k>0时，将2<sup>k</sup> x 2<sup>k</sup> 棋盘分割为四个2<sup>k-1</sup> x 2<sup>k-1</sup>子棋盘。特殊方格必定位于4个子棋盘其中之一，而其余3个子棋盘无特殊方格。分治法的子问题应该具有同样的特征，需要为这3个无特殊方格的子棋盘增加特殊方格，可以用一个L型骨牌覆盖这3个较小棋盘的会合处。这3个子棋盘上被L型骨牌覆盖的方格就成为该棋盘上的特殊方格，从而将原来的大棋盘覆盖转化为4个较小规模的棋盘覆盖问题。对每个小棋盘继续进行这样的处理，直到子棋盘分割为1x1的子棋盘为止。

对于一个2<sup>k</sup> x 2<sup>k</sup> 的棋盘，s为棋盘的行列数，初始为2^k。tileNo为L型骨牌编号或计数，初始为0。棋盘覆盖算法步骤如下：
1. 若 s=1，算法结束，return；否则，转步骤2。
2. 将棋盘分割为4个子棋盘，且每个子棋盘大小为s=s/2。
标记L型骨牌数 tileNo = tileNo +1，且置 no = tileNo，用于覆盖子棋盘的交界处。
3. 对4个子棋盘分别进行如下处理
-  ① 如果特殊方格位于此子棋盘，则递归调用本算法覆盖即可；否则，转步骤 ②
-  ② 用编号为no的隔板覆盖子棋盘交界处，且递归调用本算法覆盖即可。
 


