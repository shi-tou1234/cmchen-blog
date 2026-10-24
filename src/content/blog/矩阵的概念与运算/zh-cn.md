---
title: 线性代数核心笔记：矩阵的概念与运算
pubDate: 2026-10-24T12:00:00.000Z
updatedDate: 2026-10-24T12:00:00.000Z
draft: false
description: 系统整理矩阵的定义、特殊矩阵、加法与数乘、矩阵乘法、转置、方阵的幂、逆矩阵与分块矩阵，并配典型例题与易错点。
category: 线代
slugId: 矩阵的概念与运算
---

# 线性代数核心笔记：矩阵的概念与运算

> **导语**：行列式解决的是“方阵对应一个什么数”，矩阵解决的则是“多个数如何成批地参与运算”。本篇从矩阵的定义出发，依次整理特殊矩阵、加法与数乘、矩阵乘法、转置、方阵的幂、逆矩阵和分块矩阵，重点讲清矩阵乘法为什么不可交换、逆矩阵存在的条件，以及矩阵方程中左乘与右乘的区别。

* * *

## 目录

1. [一、矩阵的概念](#一矩阵的概念)
2. [二、矩阵的线性运算](#二矩阵的线性运算)
3. [三、矩阵乘法](#三矩阵乘法)
4. [四、矩阵的转置](#四矩阵的转置)
5. [五、逆矩阵](#五逆矩阵)
6. [六、分块矩阵](#六分块矩阵)
7. [七、总结与注意事项](#七总结与注意事项)

* * *

## 一、矩阵的概念

### 1.1 矩阵的定义

由 $m\times n$ 个数 $a_{ij}$（$i=1,2,\ldots,m$，$j=1,2,\ldots,n$）排成的 $m$ 行 $n$ 列的数表

$$
A=\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots & \ddots & \vdots\\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

称为一个 $m\times n$ 矩阵，简记为

$$
A=(a_{ij})_{m\times n}
$$

其中 $a_{ij}$ 称为矩阵第 $i$ 行第 $j$ 列的元素。$m=n$ 时称为 **$n$ 阶方阵**。

**矩阵与行列式的区别**

| 对象 | 外形 | 结果 | 记号 |
| :--- | :--- | :--- | :--- |
| 矩阵 | 数表，行数与列数可以不同 | 仍是一个数表 | $A$、$(a_{ij})_{m\times n}$ |
| 行列式 | 必须是方阵 | 一个标量 | $\det A$、$\lvert A\rvert$ |

矩阵相等要求**同型且对应位置元素全部相等**。即若 $A=(a_{ij})_{m\times n}$，$B=(b_{ij})_{m\times n}$，则

$$
A=B \iff a_{ij}=b_{ij}\quad (1\le i\le m,\ 1\le j\le n)
$$

### 1.2 常见的特殊矩阵

**1. 零矩阵**

所有元素全为 $0$ 的 $m\times n$ 矩阵，记作 $O_{m\times n}$，简记 $O$。零矩阵在矩阵加法中相当于数 $0$。

**2. 单位矩阵**

主对角线元素全为 $1$、其余元素全为 $0$ 的 $n$ 阶方阵，记作 $E_n$ 或 $I_n$：

$$
E_n=\begin{pmatrix}
1 & 0 & \cdots & 0\\
0 & 1 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & 1
\end{pmatrix}
$$

单位矩阵在矩阵乘法中相当于数 $1$：$E_mA=A$，$AE_n=A$。

**3. 对角矩阵**

除主对角线外其余元素全为 $0$ 的方阵：

$$
\Lambda=\mathrm{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n)
=\begin{pmatrix}
\lambda_1 & 0 & \cdots & 0\\
0 & \lambda_2 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & \lambda_n
\end{pmatrix}
$$

**4. 数量矩阵**

主对角线元素全为同一个数 $k$ 的对角矩阵，即 $kE_n$。

**5. 三角矩阵**

主对角线下方元素全为 $0$ 的方阵称为**上三角矩阵**；主对角线上方元素全为 $0$ 的方阵称为**下三角矩阵**。三角矩阵的行列式等于主对角线元素之积。

**6. 对称矩阵与反对称矩阵**

若 $A^T=A$，即 $a_{ij}=a_{ji}$，则称 $A$ 为**对称矩阵**；若 $A^T=-A$，即 $a_{ij}=-a_{ji}$，则称 $A$ 为**反对称矩阵**。反对称矩阵的主对角线元素必为 $0$。

**7. 行向量与列向量**

只有一行的矩阵称为**行向量**，只有一列的矩阵称为**列向量**。例如

$$
\alpha=(a_1,a_2,\ldots,a_n),\qquad
\beta=\begin{pmatrix}b_1\\b_2\\\vdots\\b_n\end{pmatrix}
$$

分别是行向量和列向量。线性方程组、线性变换都可以用矩阵与向量的乘法统一表示。

### 1.3 矩阵相等的简单应用

#### 例题 1：利用矩阵相等求参数

**题目**：已知

$$
A=\begin{pmatrix}x+1 & 2\\ 3 & y-2\end{pmatrix},\qquad
B=\begin{pmatrix}3 & 2\\ 3 & 1\end{pmatrix}
$$

且 $A=B$，求 $x,y$。

**解：**

由矩阵相等，对应元素相等：

$$
x+1=3,\qquad y-2=1
$$

解得

$$
x=2,\qquad y=3
$$

* * *

## 二、矩阵的线性运算

### 2.1 矩阵的加法与减法

设 $A=(a_{ij})_{m\times n}$，$B=(b_{ij})_{m\times n}$ 是同型矩阵，则定义

$$
A\pm B=(a_{ij}\pm b_{ij})_{m\times n}
$$

即**同型矩阵对应位置元素相加减**。不同型的矩阵不能相加。

矩阵加法满足：

1. 交换律：$A+B=B+A$；
2. 结合律：$(A+B)+C=A+(B+C)$；
3. 零元：$A+O=A$；
4. 负元：$A+(-A)=O$。

### 2.2 矩阵的数乘

设 $k$ 是一个数，$A=(a_{ij})_{m\times n}$，则定义

$$
kA=(ka_{ij})_{m\times n}
$$

即数 $k$ 乘矩阵 $A$ 的**每一个元素**。数乘满足：

1. $k(A+B)=kA+kB$；
2. $(k+l)A=kA+lA$；
3. $k(lA)=(kl)A$；
4. $1A=A$，$0A=O$；
5. $(-1)A=-A$。

> **注意**：数乘矩阵是“每个元素都乘”，而数乘行列式是“某一行（列）乘”或“整体乘要乘 $k^n$”。两者不要混淆。

### 2.3 矩阵的线性组合

设 $A_1,A_2,\ldots,A_s$ 是同型矩阵，$k_1,k_2,\ldots,k_s$ 是数，则

$$
k_1A_1+k_2A_2+\cdots+k_sA_s
$$

称为这些矩阵的一个**线性组合**。矩阵的加法与数乘统称为矩阵的**线性运算**。

#### 例题 2：矩阵的线性运算

**题目**：设

$$
A=\begin{pmatrix}1 & 2\\ -1 & 3\end{pmatrix},\qquad
B=\begin{pmatrix}0 & 4\\ 2 & -2\end{pmatrix}
$$

求 $2A-3B$。

**解：**

先分别数乘，再对应位置相减：

$$
2A=\begin{pmatrix}2 & 4\\ -2 & 6\end{pmatrix},\qquad
3B=\begin{pmatrix}0 & 12\\ 6 & -6\end{pmatrix}
$$

因此

$$
2A-3B=\begin{pmatrix}2-0 & 4-12\\ -2-6 & 6-(-6)\end{pmatrix}
=\begin{pmatrix}2 & -8\\ -8 & 12\end{pmatrix}
$$

* * *

## 三、矩阵乘法

### 3.1 矩阵乘法的定义

设 $A=(a_{ij})_{m\times s}$，$B=(b_{ij})_{s\times n}$，则定义

$$
C=AB=(c_{ij})_{m\times n}
$$

其中

$$
c_{ij}=\sum_{k=1}^{s}a_{ik}b_{kj}
=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{is}b_{sj}
$$

也就是说，乘积矩阵第 $i$ 行第 $j$ 列的元素，等于 **$A$ 的第 $i$ 行与 $B$ 的第 $j$ 列对应元素乘积之和**。

**可乘条件**：$A$ 的列数必须等于 $B$ 的行数。若

$$
A_{m\times s}B_{s\times n}=C_{m\times n}
$$

则结果矩阵的行数取 $A$ 的行数，列数取 $B$ 的列数。记忆口诀：**中间相同才能乘，两边留下定形状**。

> **注意**：矩阵乘法不是对应位置相乘。对应位置相乘得到的是 Hadamard 积，和普通矩阵乘法是两回事。

### 3.2 矩阵乘法的运算律

矩阵乘法满足：

1. 结合律：$(AB)C=A(BC)$；
2. 左分配律：$A(B+C)=AB+AC$；
3. 右分配律：$(A+B)C=AC+BC$；
4. 与数乘相容：$k(AB)=(kA)B=A(kB)$；
5. 单位元：$E_mA_{m\times n}=A_{m\times n}$，$A_{m\times n}E_n=A_{m\times n}$。

但是，矩阵乘法**一般不满足交换律**：

$$
AB\ne BA
$$

即使 $AB$ 与 $BA$ 都有意义，二者也通常不相等。此外还有几条与普通数运算不同的规律：

- **没有零因子律**：$AB=O$ 不能推出 $A=O$ 或 $B=O$；
- **没有消去律**：$AB=AC$ 且 $A\ne O$，不能推出 $B=C$；
- **二项式公式要慎用**：$(A+B)^2=A^2+AB+BA+B^2$，只有当 $AB=BA$ 时才能写成 $A^2+2AB+B^2$。

#### 例题 3：矩阵乘法不可交换

**题目**：设

$$
A=\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix},\qquad
B=\begin{pmatrix}2 & 0\\ 1 & 3\end{pmatrix}
$$

分别求 $AB$ 与 $BA$。

**解：**

先求 $AB$：

$$
AB=\begin{pmatrix}
1\cdot2+2\cdot1 & 1\cdot0+2\cdot3\\
3\cdot2+4\cdot1 & 3\cdot0+4\cdot3
\end{pmatrix}
=\begin{pmatrix}4 & 6\\ 10 & 12\end{pmatrix}
$$

再求 $BA$：

$$
BA=\begin{pmatrix}
2\cdot1+0\cdot3 & 2\cdot2+0\cdot4\\
1\cdot1+3\cdot3 & 1\cdot2+3\cdot4
\end{pmatrix}
=\begin{pmatrix}2 & 4\\ 10 & 14\end{pmatrix}
$$

显然 $AB\ne BA$。

#### 例题 4：零因子

**题目**：设

$$
A=\begin{pmatrix}0 & 1\\ 0 & 0\end{pmatrix},\qquad
B=\begin{pmatrix}1 & 0\\ 0 & 0\end{pmatrix}
$$

验证 $AB=O$，但 $A\ne O$ 且 $B\ne O$。

**解：**

$$
AB=\begin{pmatrix}0 & 1\\ 0 & 0\end{pmatrix}
\begin{pmatrix}1 & 0\\ 0 & 0\end{pmatrix}
=\begin{pmatrix}0 & 0\\ 0 & 0\end{pmatrix}=O
$$

而 $A$、$B$ 都不是零矩阵。这说明矩阵乘法中存在**零因子**，因此不能像普通数那样由 $AB=O$ 推出 $A=O$ 或 $B=O$。

### 3.3 方阵的幂

设 $A$ 是 $n$ 阶方阵，$k$ 是正整数，定义

$$
A^k=\underbrace{A\cdot A\cdots A}_{k\text{ 个}}
$$

并规定 $A^0=E_n$。方阵的幂满足

$$
A^mA^n=A^{m+n},\qquad (A^m)^n=A^{mn}
$$

但一般

$$
(A+B)^2\ne A^2+2AB+B^2,\qquad (AB)^k\ne A^kB^k
$$

除非 $A$ 与 $B$ 可交换。

#### 例题 5：求方阵的高次幂

**题目**：设

$$
A=\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}
$$

求 $A^n$（$n$ 为正整数）。

**解：**

先计算低次幂寻找规律：

$$
A^2=\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}
\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}
=\begin{pmatrix}1 & 2\\ 0 & 1\end{pmatrix}
$$

再算三次幂：

$$
A^3=A^2A=\begin{pmatrix}1 & 2\\ 0 & 1\end{pmatrix}
\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}
=\begin{pmatrix}1 & 3\\ 0 & 1\end{pmatrix}
$$

猜测

$$
A^n=\begin{pmatrix}1 & n\\ 0 & 1\end{pmatrix}
$$

用数学归纳法证明。$n=1$ 时显然成立。假设 $n=k$ 时成立，则

$$
A^{k+1}=A^kA=
\begin{pmatrix}1 & k\\ 0 & 1\end{pmatrix}
\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}
=\begin{pmatrix}1 & k+1\\ 0 & 1\end{pmatrix}
$$

因此猜测成立，即

$$
A^n=\begin{pmatrix}1 & n\\ 0 & 1\end{pmatrix}
$$

> **解题提示**：求方阵高次幂时，先算 $A^2,A^3$ 观察规律，再用归纳法证明；若 $A$ 能分解为 $A=\lambda E+N$ 且 $N$ 幂零，也可以用二项式定理。

### 3.4 矩阵多项式

设 $f(x)=a_0+a_1x+\cdots+a_mx^m$，$A$ 是 $n$ 阶方阵，则定义

$$
f(A)=a_0E+a_1A+\cdots+a_mA^m
$$

称为矩阵 $A$ 的**矩阵多项式**。同一个矩阵的多项式之间总是可交换的：

$$
f(A)g(A)=g(A)f(A)
$$

这是因为 $f(A)$ 与 $g(A)$ 都是 $A$ 的幂的线性组合。

* * *

## 四、矩阵的转置

### 4.1 转置的定义

把 $m\times n$ 矩阵 $A$ 的行换成同序数的列，得到的 $n\times m$ 矩阵称为 $A$ 的**转置矩阵**，记作 $A^T$。若 $A=(a_{ij})_{m\times n}$，则

$$
A^T=(a_{ji})_{n\times m}
$$

例如

$$
A=\begin{pmatrix}1 & 2 & 3\\ 4 & 5 & 6\end{pmatrix}
\quad\Longrightarrow\quad
A^T=\begin{pmatrix}1 & 4\\ 2 & 5\\ 3 & 6\end{pmatrix}
$$

### 4.2 转置的运算性质

转置满足：

1. $(A^T)^T=A$；
2. $(A+B)^T=A^T+B^T$；
3. $(kA)^T=kA^T$；
4. **$(AB)^T=B^TA^T$**；
5. 若 $A$ 可逆，则 $(A^T)^{-1}=(A^{-1})^T$。

> **注意**：乘积转置要**反序**：$(ABC)^T=C^TB^TA^T$。只把每个因子转置而不换顺序，是常见错误。

### 4.3 对称矩阵与反对称矩阵

由转置可以定义两类重要的方阵：

- 若 $A^T=A$，则 $A$ 为**对称矩阵**；
- 若 $A^T=-A$，则 $A$ 为**反对称矩阵**。

对任意矩阵 $A$，$A^TA$ 与 $AA^T$ 都是对称矩阵，因为

$$
(A^TA)^T=A^T(A^T)^T=A^TA
$$

同理 $(AA^T)^T=AA^T$。

#### 例题 6：证明 $A^TA$ 为对称矩阵

**题目**：设 $A$ 是任意 $m\times n$ 矩阵，证明 $A^TA$ 是对称矩阵。

**证明：**

由转置的乘积性质，

$$
(A^TA)^T=A^T(A^T)^T=A^TA
$$

所以 $A^TA$ 等于它的转置，即 $A^TA$ 是对称矩阵。

* * *

## 五、逆矩阵

### 5.1 逆矩阵的定义

设 $A$ 是 $n$ 阶方阵。若存在 $n$ 阶方阵 $B$，使得

$$
AB=BA=E_n
$$

则称 $A$ 是**可逆矩阵**，$B$ 称为 $A$ 的**逆矩阵**，记作 $A^{-1}$。

逆矩阵若存在，则**唯一**。事实上，若 $B$、$C$ 都是 $A$ 的逆矩阵，则

$$
B=BE=B(AC)=(BA)C=EC=C
$$

### 5.2 矩阵可逆的条件

$n$ 阶方阵 $A$ 可逆的充分必要条件是

$$
\det A\ne 0
$$

此时

$$
A^{-1}=\frac{1}{\det A}\operatorname{adj}(A)
$$

其中 $\operatorname{adj}(A)$ 是 $A$ 的**伴随矩阵**，由 $A$ 的代数余子式矩阵转置得到。

若 $\det A=0$，则称 $A$ 为**奇异矩阵**，它没有逆矩阵。

> **注意**：只有方阵才谈逆矩阵。$m\ne n$ 的矩阵即使有左逆或右逆，也不称为可逆矩阵。

### 5.3 二阶矩阵求逆公式

对于二阶方阵

$$
A=\begin{pmatrix}a & b\\ c & d\end{pmatrix}
$$

若 $ad-bc\ne0$，则

$$
A^{-1}=\frac{1}{ad-bc}
\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}
$$

记忆方法：**主对角线互换，副对角线变号，再除以行列式**。

#### 例题 7：二阶矩阵求逆

**题目**：求

$$
A=\begin{pmatrix}2 & 1\\ 1 & 1\end{pmatrix}
$$

的逆矩阵。

**解：**

先求行列式：

$$
\det A=2\cdot1-1\cdot1=1\ne0
$$

所以 $A$ 可逆。由二阶求逆公式，

$$
A^{-1}=\frac{1}{1}
\begin{pmatrix}1 & -1\\ -1 & 2\end{pmatrix}
=\begin{pmatrix}1 & -1\\ -1 & 2\end{pmatrix}
$$

验证：

$$
AA^{-1}=\begin{pmatrix}2 & 1\\ 1 & 1\end{pmatrix}
\begin{pmatrix}1 & -1\\ -1 & 2\end{pmatrix}
=\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}=E_2
$$

### 5.4 伴随矩阵法求三阶逆矩阵

设 $A=(a_{ij})_{n\times n}$，$A_{ij}$ 是元素 $a_{ij}$ 的代数余子式，则

$$
\operatorname{adj}(A)=
\begin{pmatrix}
A_{11} & A_{21} & \cdots & A_{n1}\\
A_{12} & A_{22} & \cdots & A_{n2}\\
\vdots & \vdots & \ddots & \vdots\\
A_{1n} & A_{2n} & \cdots & A_{nn}
\end{pmatrix}
$$

注意伴随矩阵是**代数余子式矩阵的转置**，即第 $i$ 行第 $j$ 列放的是 $A_{ji}$。

#### 例题 8：三阶矩阵求逆

**题目**：设

$$
A=\begin{pmatrix}1 & 2 & 3\\ 2 & 2 & 1\\ 3 & 4 & 3\end{pmatrix}
$$

求 $A^{-1}$。

**解：**

第一步，求行列式：

$$
\det A=1(2\cdot3-1\cdot4)-2(2\cdot3-1\cdot3)+3(2\cdot4-2\cdot3)
$$

继续展开：

$$
=1(6-4)-2(6-3)+3(8-6)=2-6+6=2
$$

因为 $\det A=2\ne0$，所以 $A$ 可逆。

第二步，求各代数余子式：

$$
A_{11}=2\cdot3-1\cdot4=2,\qquad
A_{12}=-(2\cdot3-1\cdot3)=-3,\qquad
A_{13}=2\cdot4-2\cdot3=2
$$

第二行各元素的代数余子式为：

$$
A_{21}=-(2\cdot3-3\cdot4)=6,\qquad
A_{22}=1\cdot3-3\cdot3=-6,\qquad
A_{23}=-(1\cdot4-2\cdot3)=2
$$

第三行各元素的代数余子式为：

$$
A_{31}=2\cdot1-3\cdot2=-4,\qquad
A_{32}=-(1\cdot1-3\cdot2)=5,\qquad
A_{33}=1\cdot2-2\cdot2=-2
$$

第三步，写出伴随矩阵（注意转置）：

$$
\operatorname{adj}(A)=
\begin{pmatrix}
2 & 6 & -4\\
-3 & -6 & 5\\
2 & 2 & -2
\end{pmatrix}
$$

第四步，除以行列式：

$$
A^{-1}=\frac{1}{2}
\begin{pmatrix}
2 & 6 & -4\\
-3 & -6 & 5\\
2 & 2 & -2
\end{pmatrix}
=
\begin{pmatrix}
1 & 3 & -2\\
-\dfrac{3}{2} & -3 & \dfrac{5}{2}\\
1 & 1 & -1
\end{pmatrix}
$$

### 5.5 逆矩阵的运算性质

若 $A$、$B$ 都是 $n$ 阶可逆矩阵，则：

1. $(A^{-1})^{-1}=A$；
2. $(kA)^{-1}=\dfrac{1}{k}A^{-1}$（$k\ne0$）；
3. **$(AB)^{-1}=B^{-1}A^{-1}$**；
4. $(A^T)^{-1}=(A^{-1})^T$；
5. $\det(A^{-1})=\dfrac{1}{\det A}$。

> **注意**：$(AB)^{-1}=B^{-1}A^{-1}$ 的顺序不能颠倒。可以类比“先穿袜子再穿鞋，脱的时候先脱鞋再脱袜子”。

### 5.6 矩阵方程

利用逆矩阵可以解矩阵方程，但要注意乘在左边还是右边。

**1. 形如 $AX=B$**

若 $A$ 可逆，则左乘 $A^{-1}$：

$$
X=A^{-1}B
$$

**2. 形如 $XA=B$**

若 $A$ 可逆，则右乘 $A^{-1}$：

$$
X=BA^{-1}
$$

**3. 形如 $AXB=C$**

若 $A$、$B$ 都可逆，则

$$
X=A^{-1}CB^{-1}
$$

#### 例题 9：解矩阵方程

**题目**：设

$$
A=\begin{pmatrix}2 & 1\\ 1 & 1\end{pmatrix},\qquad
B=\begin{pmatrix}1 & 0\\ 2 & 1\end{pmatrix}
$$

已知 $AX=B$，求 $X$。

**解：**

由例题 7 知

$$
A^{-1}=\begin{pmatrix}1 & -1\\ -1 & 2\end{pmatrix}
$$

因为 $AX=B$，左乘 $A^{-1}$ 得

$$
X=A^{-1}B=\begin{pmatrix}1 & -1\\ -1 & 2\end{pmatrix}
\begin{pmatrix}1 & 0\\ 2 & 1\end{pmatrix}
=\begin{pmatrix}-1 & -1\\ 3 & 2\end{pmatrix}
$$

验证：

$$
AX=\begin{pmatrix}2 & 1\\ 1 & 1\end{pmatrix}
\begin{pmatrix}-1 & -1\\ 3 & 2\end{pmatrix}
=\begin{pmatrix}1 & 0\\ 2 & 1\end{pmatrix}=B
$$

* * *

## 六、分块矩阵

### 6.1 分块矩阵的概念

把矩阵用若干条横线和竖线分成若干小块，以这些小块为元素得到的矩阵称为**分块矩阵**。例如

$$
A=\left(\begin{array}{cc|c}
1 & 2 & 3\\
4 & 5 & 6\\
\hline
7 & 8 & 9
\end{array}\right)
=
\begin{pmatrix}
A_{11} & A_{12}\\
A_{21} & A_{22}
\end{pmatrix}
$$

其中 $A_{11}$ 是 $2\times2$ 块，$A_{12}$ 是 $2\times1$ 块，$A_{21}$ 是 $1\times2$ 块，$A_{22}$ 是 $1\times1$ 块。

分块矩阵的加法、数乘与普通矩阵类似，只要对应分块同型即可。分块乘法也按普通矩阵乘法规则进行，但要求**左矩阵列的划分与右矩阵行的划分一致**。

### 6.2 分块对角矩阵

形如

$$
A=\begin{pmatrix}
A_1 & 0 & \cdots & 0\\
0 & A_2 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & A_s
\end{pmatrix}
$$

的矩阵称为**分块对角矩阵**，其中 $A_1,A_2,\ldots,A_s$ 都是方阵。若每个 $A_i$ 都可逆，则

$$
A^{-1}=\begin{pmatrix}
A_1^{-1} & 0 & \cdots & 0\\
0 & A_2^{-1} & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & A_s^{-1}
\end{pmatrix}
$$

并且

$$
\det A=\det A_1\cdot\det A_2\cdots\det A_s
$$

#### 例题 10：分块对角矩阵求逆

**题目**：求

$$
A=\begin{pmatrix}
1 & 2 & 0\\
3 & 4 & 0\\
0 & 0 & 5
\end{pmatrix}
$$

的逆矩阵。

**解：**

把 $A$ 分块为

$$
A=\begin{pmatrix}
A_1 & 0\\
0 & A_2
\end{pmatrix},\qquad
A_1=\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix},\quad A_2=(5)
$$

先求 $A_1^{-1}$。因为 $\det A_1=1\cdot4-2\cdot3=-2$，所以

$$
A_1^{-1}=\frac{1}{-2}\begin{pmatrix}4 & -2\\ -3 & 1\end{pmatrix}
=\begin{pmatrix}-2 & 1\\ \dfrac{3}{2} & -\dfrac{1}{2}\end{pmatrix}
$$

而 $A_2^{-1}=(1/5)$。因此

$$
A^{-1}=\begin{pmatrix}
-2 & 1 & 0\\
\dfrac{3}{2} & -\dfrac{1}{2} & 0\\
0 & 0 & \dfrac{1}{5}
\end{pmatrix}
$$

* * *

## 七、总结与注意事项

### 7.1 核心公式速查

| 概念 | 公式/规则 | 说明 |
| :--- | :--- | :--- |
| 矩阵相等 | $a_{ij}=b_{ij}$ | 必须同型且逐元素相等 |
| 矩阵加法 | $(A\pm B)_{ij}=a_{ij}\pm b_{ij}$ | 必须同型 |
| 矩阵数乘 | $(kA)_{ij}=ka_{ij}$ | 每个元素都乘 |
| 矩阵乘法 | $c_{ij}=\sum_k a_{ik}b_{kj}$ | 左列数等于右行数 |
| 乘法转置 | $(AB)^T=B^TA^T$ | 顺序反转 |
| 乘法逆 | $(AB)^{-1}=B^{-1}A^{-1}$ | 顺序反转 |
| 二阶逆 | $\dfrac{1}{ad-bc}\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}$ | 主对换、副变号 |
| 伴随矩阵 | $A^{-1}=\dfrac{1}{\det A}\operatorname{adj}(A)$ | 代数余子式矩阵转置 |
| 可逆判定 | $\det A\ne0$ | 方阵才谈可逆 |
| 分块对角逆 | $\mathrm{diag}(A_1,\ldots,A_s)^{-1}=\mathrm{diag}(A_1^{-1},\ldots,A_s^{-1})$ | 每块可逆 |

### 7.2 易错点提醒

1. **矩阵乘法不可交换**：$AB$ 与 $BA$ 可能不相等，甚至可能一个有意义、另一个没有意义。遇到 $AB=AC$ 时，不能直接消去 $A$。
2. **矩阵乘法有零因子**：$AB=O$ 不能推出 $A=O$ 或 $B=O$。
3. **转置与逆的顺序**：$(AB)^T=B^TA^T$，$(AB)^{-1}=B^{-1}A^{-1}$，都要反序。
4. **数乘与行列式混淆**：$kA$ 是每个元素乘 $k$；$\det(kA)=k^n\det A$。
5. **逆矩阵不是每个方阵都有**：只有 $\det A\ne0$ 的方阵才可逆。
6. **矩阵方程不能随便换序**：$AX=B$ 的解是 $X=A^{-1}B$，$XA=B$ 的解是 $X=BA^{-1}$。
7. **伴随矩阵要转置**：$\operatorname{adj}(A)$ 的第 $i$ 行第 $j$ 列是 $A_{ji}$，不是 $A_{ij}$。

### 7.3 解题要点

- **先看型**：做加法、乘法、求逆之前，先确认矩阵是否同型、是否可乘、是否为方阵。
- **乘法先拆行乘列**：计算 $AB$ 时，把 $A$ 的行与 $B$ 的列对应相乘再求和，比死记公式更可靠。
- **求逆先算行列式**：行列式为 $0$ 直接判定不可逆，不必继续算伴随矩阵。
- **高次幂找规律**：先算 $A^2,A^3$，再用归纳法；若 $A=\lambda E+N$ 且 $N$ 幂零，可用二项式展开。
- **分块矩阵降维**：遇到大量零块时，优先分块，把高阶问题化成低阶问题。

:::tip[学习建议]
矩阵这一章的计算量不大，难在“规则与数的运算不一样”。建议把矩阵乘法、转置、逆矩阵三条“反序规则”放在一起记：$(AB)^T=B^TA^T$、$(AB)^{-1}=B^{-1}A^{-1}$、$(ABC)^{-1}=C^{-1}B^{-1}A^{-1}$。做题时先写清矩阵的型，再动笔算元素，能避免大部分低级错误。
:::
