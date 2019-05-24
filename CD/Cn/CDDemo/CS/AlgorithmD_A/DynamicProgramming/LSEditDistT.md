---
layout: default
tags:
  - CD Demo
categories:
  - DynamicProgramming
permalink: CD/Cn/CDDemo/CS/AlgorithmD_A/DynamicProgramming/LSEditDistT
---
# <center>Levenstein 编辑距离算法描述</center>
<div align="right">
	<a href="{{'/CD/Cn/CDDemo/CS/QandA.html'| relative_url }}" target="_blank">Q&amp;A</a>
    &nbsp;&nbsp;
	<a href="{{'/CD/Cn/' | relative_url }}" target="_blank">Home</a>		
</div>
---

Levenshtein Distance 是用于测量两个序列之间差异的字符串度量。非正式的讲，两个字符串之间的Levenshtein distance，是将一个字符串更改为另一个字符串所需要的单字符编辑的最小步骤数。其中，单字符编辑，是指对单个字符的插入、删除、替换3种基本的编辑操作。而最小步骤数，也就是完成变换所需的最小编辑操作数。所以，Levenshtein 距离也称为最小编辑距离（Minimum Edit Distance），简称为编辑距离（Edit Distance）。

下文中没有特殊说明情况下，编辑距离即是指的Levenshtein 距离。

例如，sunny和snowy的编辑距离是3，因为将sunny转换为snowy的最少编辑处理步骤如下： 
- sunny $\rightarrow$ snny（将u删除） 
- snny $\rightarrow$ snoy（将n改为o） 
- snoy $\rightarrow$ snowy（将w插入到o之后）


下面讨论如何找到字符序列$X$和$Y$的最小编辑距离。

假设字符序列$X$有$m$个字符，$Y$有$n$个字符，表示如下：

$$\begin{align}
X &=<a_1,a_2,...,a_m> \nonumber \\
Y &=<b_1,b_2,...,b_n> \nonumber 
\end{align}
$$

考虑到这个问题的子问题，我们定义$X$和$Y$的所有前缀如下：

$$\begin{align}
X_0 & =\varnothing \nonumber  \\
X_i & =<a_1,a_2,...,a_i>,i=,2,...,m \nonumber \\
Y_0 & =\varnothing \nonumber \\
Y_j & =<b_1,b_2,...,b_j>,j=1,2,...,n \nonumber 
\end{align}$$

对于$X$的任一个前缀$X_i$和$Y$的任一前缀$Y_j$，找出$X_i$与$Y_j$之间的编辑距离，即是原问题的一个子问题。而最大前缀$X_m$与$Y_n$之间的编辑距离，也就是$X$和$Y$之间的编辑距离。

我们定义$E[i,j]$为$X_i$和$Y_j$之间的编辑距离。

对于$E[i,j]$来讲，如果$a_i=b_j$，$a_i$和$b_j$总可以匹配，那么只需要计算$X_{i-1}$和$Y_{j-1}$之间的编辑距离即可，即$E[i,j] = E[i-1][j-1]$。
如果$ai \neq bj$，我们看看子问题的解对于原问题有没有帮助。如果子问题已经计算出编辑距离，即已经找到了编辑方案：

- 如果已经求解$E[i-1,j-1]$，那么再进行一步替换操作，将$a_i$换成$b_j$，即可完成$X_i$到$Y_j$的转换，即$E[i,j] = E[i-1][j-1]+1$。
- 如果已经求解$E[i-1,j]$，那么再进行一步删除操作，将$a_i$删除，即可完成$X_i$与$Y_j$的转换，即$E[i,j] = E[i-1][j]+1$。
- 如果已经求解$E[i,j-1]$，那么再进行一步插入操作，将$b_j$插入到$a_i$之后，即可完成$X_i$与$Y_j$的转换，即$E[i,j] = E[i][j-1]+1$。

图示如下： 

$$\begin{align}
a_1,a_2,…,a_{i-1},a_i \nonumber \\
b_1,b_2,…,b_{j-1},b_j \nonumber 
\end{align}
$$

$$ 
\swarrow \qquad\qquad \downarrow \qquad\qquad \searrow 
$$

$$
\begin{align}
\text{
$\begin{align}
a_1,a_2,…,a_{i-1} & \mid a_i \nonumber   \\
& \mid \;\Downarrow \nonumber  \\
b_1,b_2,…,b_{j-1} & \mid b_j \nonumber  
\end{align}$ 
$\qquad$
$\require{cancel}\begin{align}
a_1,a_2,…,a_{i-1} & \mid \cancel{a_i} \nonumber \\
& \;\mid \nonumber  \\
b_1,b_2,…,b_{j-1},b_j & \;\mid \nonumber 
\end{align}$ 
$\qquad$
$\begin{align}
a_1,a_2,…,a_{i-1},a_i & \;\mid \nonumber \\
& \mid \;\Uparrow \nonumber  \\
b_1,b_2,…,b_{j-1} & \mid b_j  \nonumber 
\end{align}$} \nonumber 
\end{align}
$$

也可以理解为，针对$a_i$与$b_j$的不同，有3种编辑方案可以完成对应位置的字符转换：
- 将$a_i$替换为$b_j$，使用1次替换操作，再加上子问题的解，编辑距离为$E[i-1][j-1]+1$；
- 将$a_i$删除，使用1次删除操作，再加上子问题的解，编辑距离为$E[i-1][j]+1$；
- 在$a_i$之后插入$b_j$，使用1次插入操作，再加上子问题的解，编辑距离为$E[i][j-1]+1$；

显然，我们应该取3种可行方案中编辑距离最小的一种。

所以，当$i,j > 0$时

$$
\begin{array}{ll}
E[i, j] = E[i-1,j-1]  & 如果 a_i=b_j\\[2ex] 
E[i, j] = min( E[i-1,j-1]+1,E[i-1,j]+1,E[i,j-1]+1) & 如果 a_i \neq b_j
\end{array}
$$

而当$i = 0$或 $j=0$时

显然，$E[i,0]=i$，只需要将$X$的$i$个字符依次删除即可完成序列转换。

同样，$E[0,j]=j$，只需要将$Y$的$j$个字符依次插入即可完成序列转换。

为将递推式简化，通常将$a_i=b_j$的条件作为$flag$标记，当$flag= 0$时，表示$a_i=b_j$；当$flag=1$时，表示$a_i \neq b_j$。

从而，上述递推式可表示为：

$$
E[i, j] =
\left\{
\begin{array}{cl}
0 	& \text{i=0, j=0} \\[2ex]
j 	& \text{i=0, j>0} \\[2ex]
i   & \text{i>0, j=0} \\[2ex]
min( E[i-1,j]+1, E[i,j-1]+1, E[i-1,j-1]+flag )  & \text{i>0, j>0}
\end{array}
\right.\tag{1}\label{1}
$$

其中

$$
flag =
\begin{cases}
0  &  a_i = b_j  \\
1  &  a_i \neq b_j
\end{cases}
$$

在初始化 $E[0,j]=j,E[i,0]=i$ 后，我们可以用上式算出所有 $E[i,j] \( 0\le i \le m, 0\le j \le n\)$ 的值，它们构成了一个完整的编辑距离表 $E$ 。 具体做法是，从上到下，一行一行计算，先算出所有 $E[1,j]$ 的值，再算出所有 $E[2,j]$ 的值，最后算出所有 $E[m,j]$ 的值。而在计算第 $i$ 行时，又按照从左到右的顺序进行，先算出 $E[i,1]$ ，再算出 $E[i,2]$ ，最后算出 $E[i,n]$ ，如下图左1所示。最右下角的 $E[m,n]$ 就是求得的两个字符序列$X$和$Y$之间的编辑距离值，如下图左2所示。

<img src="{{'/CD/imgCn/CDDemo/CS/AlgorithmD_A/DynamicProgramming/images/LSEditDistT_01.png' | relative_url }}" />

在计算 $E[i,j]$ 时，还需要同时记下它与子问题之间的来源关系，以便在表$E$完成之后可以将编辑方案还原，而不仅仅是一个编辑距离值。用另一个表$P$来记录这个关系。从公式中可以看到，$E[i,j]$与子问题之间有3种关系。一是$E[i,j] = E[i-1,j]+1$，即$E[i,j]$是从表中上一行邻居$E[i-1,j]$得来的，我们可以用'U'(Up)表示。二是，$E[i,j] =E[i,j-1]+1$，即$E[i,j]$是从同一行的左侧邻居$E[i,j-1]$得来的，我们可以用'L'(Left)表示。三是$E[i,j] = E[i-1,j-1]+flag$，即$E[i,j]$ 是从表中左上方邻居得来的，我们用'0'或'1'表示，其中'0'对应$a_i=b_j$，而'1'对应$a_i\neq b_j$。如上图左3所示。

下面是计算表$E$和$P$的伪代码。

```cpp
int LevenshteinDistcance(string x[1..m], string y[1..n])
{
    int E[0..m, 0..n], P[0..m, 0..n];    //矩阵E是距离表，P是关系表
    int i,j,flag;

    //初始化填充第0行、第0列的数据和关系
    for i = 0 to m	E[i, 0] = i; P[i, 0] = 'U';
    for j = 0 to n	E[0, j] = j; P[0, j] = 'L';

    for   i = 1 to m
        for  j = 1 to n
		{
			if x[i] = y[j]  
				flag = 0;
			else    flag = 1;		
			E[i][j] = min(
					E[i - 1][j] + 1,     //删除
					E[i][j - 1] + 1,     //插入
					E[i - 1][j - 1] + flag  //替換
					);
			if  E[i][j] = E[i - 1][j] + 1 
				P[i][j] = 'U';
			else if  E[i][j] = E[i][j - 1] + 1 
				P[i][j] = 'L';
			else if  flag = 1 
				P[i][j] = '1';  
			else  //flag = 0 
				P[i][j] = '0';     
		}	
    return E, P;
}
```

显然，Levenshtein距离算法的时间复杂度为$O\(mn\)$，因为表$E$和$P$需要计算的项各有 $ m\*n $ 个 ，而每一项的计算只需要获取3个邻居项，以及比较判断最小值，时间复杂度为$O(1)$。

字符序列$X$和$Y$的距离表和关系表$E$、$P$完成后，从$P[m,n]$开始，顺着来源标记回溯，可以还原出这个最短距离的编辑方案。当然，其中任一$E[i,j]$的最小编辑距离方案都可以通过回溯得到。当$P[i,j] = 'U'$时，表示$E[i,j] = E[i - 1][j] + 1$，即是通过删除字符$a_i=X[i]$得到的，输出方案可以用$a_i$与'-'表示。当$P[i,j] = 'L'$时，表示$E[i,j] = E[i][j- 1] + 1$，即是通过在$a_i$后插入字符$b_j = Y[j]$得到的，输出方案可以用'-'与$b_j$表示。当$P[i,j] = '1'$时，表示$E[i,j] = E[i-1][j- 1] + 1$，通过将$a_i$替换为$b_j$得到，输出方案可以用$a_i$与$b_j$表示。 

下面一段伪代码$GetLSEdits(E, P, i, j)$输出从$P(i,j)$开始回溯所找到的最短距离编辑方案。如果我们调用$GetLSEdits(E, P, m, n)$，则可将$X$和$Y$的最短编辑距离方案输出。

```cpp
GetLSEdits(E, P, i, j)
{   
   int i = i; j = j;
   String Xe,Ye; //分别记录字符串X[1,...,i]、Y[1,...,j]的编辑方案

   while  i>0 or j> 0 
        if  P[i,j] = 'U'
		Xe.insert(0, X[i]);  i = i - 1;
		Ye.insert(0, '-');
        else  if  P[i,j] = 'L'
                Xe.insert(0, '-');
                Ye.insert(0, Y[j]); 38
        else  if  P[i,j] = '1' or '0'
                Xe.insert(0, X[i]);  i = i - 1;
                Ye.insert(0, Y[j]);  j = j - 1;

    //打印编辑方案
    print(Xe);
    printf("\n");
    print(Ye);
}
```
以字符串sunny和snowy为例，输出最短编辑距离方案如下；（暂以$\backslash$代替'-'）

$$
\begin{array}{r}
sunn\backslash y \\
s\backslash nowy 
\end{array}
$$


另外，$E[m,n]$求取的是两个字符序列$X$和$Y$之间的编辑距离值。而简单分析可知它们之间的最大距离值是两个序列的较大长度值$Emax = max(lenX, lenY)$，所以，可以方便的使用$\{1- E[m,n]/max(lenX, lenY)\}$将相似度进一步归一到$[0,1]$范围内。

当然，“编辑距离”本身可以表示更广泛的距离度量系列。还有其它许多流行的编辑距离定义方式，它们和Levenshtein distance的不同之处，是限定使用不同的字符串操作集去变换字符串。但作为最常见的度量，“编辑距离”常常指的是Levenshtein距离。
- Damerau-Levenshtein 距离：是Levenshtein 距离的变种，允许对字符串进行插入、删除、替换、相邻两个字符之间的交换（称为字符转置），如 AB→BA 的距离是 1（交换）而非 2（先删除再插入，或者两次替换）。
- LCS（最长公共子序列）距离：允许对字符串进行插入、删除、替换。
- Hamming 距离：允许对字符串进行替换，只可用于两个相同长度的字符串。
- Jaro 距离：只允许交换相邻的两个字符，即字符转置。