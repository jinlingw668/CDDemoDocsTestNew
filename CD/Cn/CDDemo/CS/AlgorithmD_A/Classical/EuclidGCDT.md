---
layout: page
tags:
  - CD Demo
categories:
  - Classical
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/Classical/EuclidGCDT
---
### <center> Euclid GCD 算法 </center> 
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>				
</div>
---
欧几里得算法，用于计算两个正整数 a, b 的最大公约数。也称为辗转相除法。
 
算法核心基于 Euclid 定理：

- gcd(a, 0) = a； 

- gcd(a, b) = gcd(b, a mod b)； 