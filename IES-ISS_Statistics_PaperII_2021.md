# IES/ISS Statistics — Paper II (2021)
*Series A · T.B.C. SDT-S-STT · Time: 2 hrs · Max Marks: 200*

**1.** Consider $y_{ij}=\mu+\alpha_i+\beta_j+\varepsilon_{ij}$, $i=1,2$; $j=1,2$. For which choice of $\lambda'$ is $\lambda'\beta$, $\beta'=(\mu,\alpha_1,\alpha_2,\beta_1,\beta_2)$, **not** estimable?

- (a) $(1,1,0,1,0)$
- (b) $(0,0,0,-1,1)$
- (c) $(0,-1,1,0,0)$
- (d) $(1,1,1,1,1)$

**2.** For $y_{ij}=\mu+\tau_i+\varepsilon_{ij}$, $i=1,2$; $j=1,2$:

1. $\mu+\tau_1$ is estimable.
2. $\tau_1+\tau_2$ is estimable.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**3.** Let $X_i,Y_i,Z_i$; $i=1,2,3$ be nine independent observations with common variance $\sigma^2$, $E(X_i)=\theta_1$, $E(Y_i)=\theta_2$, $E(Z_i)=\theta_1-\theta_2$. If $X=\sum_{i=1}^3 x_i$, $Y=\sum_{i=1}^3 y_i$, $Z=\sum_{i=1}^3 z_i$, the BLUE of $\theta_1$ is given by

- (a) $\dfrac19[2X+Y-Z]$
- (b) $\dfrac19[X+2Y-Z]$
- (c) $\dfrac19[X+2Y-2Z]$
- (d) $\dfrac19[X+3Y-2Z]$

**4.** In the general regression model $Y_{n\times1}=X_{n\times k}\beta_{k\times1}+\varepsilon_{n\times1}$, $\varepsilon\sim N(0,\sigma^2I)$. The $n\times1$ vector of ordinary residuals is $e=Y-\hat Y$. The distribution of $e'e/\sigma^2$ is

- (a) $N(0,\sigma^2\rho)$
- (b) $N(X\beta,\sigma^2)$
- (c) $\chi^2_{n-k}$
- (d) $\chi^2_{n-1}$

**5.** Consider the model
$$Y_1=A+B+C+D+e_1;\quad Y_2=A+C-B-D+e_2;\quad Y_3=A+B-C-D+e_3;\quad Y_4=A+D-B-C+e_4$$
If this is equivalent to $Y=X\beta+e$, then $(X'X)^{-1}$ equals

- (a) $\dfrac13 I_4$
- (b) $\dfrac12 I_4$
- (c) $\dfrac15 I_4$
- (d) $\dfrac14 I_4$

**6.** Consider the following statements:

1. Tukey's test of multiple comparisons reduces the Type-I error in the test.
2. Student-Newman-Keuls test uses a stepwise procedure.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**7.** For a symmetric matrix $X$:

1. Generalized inverse of $X$ is not necessarily symmetric.
2. Symmetric inverse of $X$ can always be determined.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**8.** Five methods of packing frozen foods were compared taking six observations per method (response: ascorbic acid, mg/100 g). The df for error sum of squares are

- (a) 26
- (b) 25
- (c) 24
- (d) 20

**9.** Two-way classification, one observation per cell: $y_{ij}=\mu+\alpha_i+\beta_j+e_{ij}$; $i=1,\ldots,p$; $j=1,\ldots,q$. Which parameter is estimable?

- (a) $\alpha$
- (b) $\beta$
- (c) $\alpha_i-\alpha_u$; $i,u=1,\ldots,p$ ($i\ne u$)
- (d) $\alpha_1+\alpha_2$

**10.** Let $A$ be a $4\times7$ matrix. Any generalized inverse of $A$ is of order

- (a) $4\times4$
- (b) $7\times4$
- (c) $4\times7$
- (d) $7\times7$

**11.** Let $X$ be a discrete random variable with
$$P(X=x)=\begin{cases}\theta, & x=-1\\(1-\theta)^2\theta^x, & x=0,1,2,3,\ldots\end{cases}\qquad 0<\theta<1$$
Then

- (a) $X$ is minimal sufficient and complete.
- (b) $X$ is minimal sufficient only.
- (c) $X$ is complete only.
- (d) $X$ is unbiased estimator for $\theta$.

**12.** Let $X_1,\ldots,X_n\sim U(0,\theta)$, $\theta>0$. Define $U=2\bar X$, $\bar X=\dfrac{\sum_{i=1}^n X_i}n$, and $T=X_{(1)}=\min\{X_1,\ldots,X_n\}$. Then $E[U\mid T=t]$ will be

- (a) independent of $\theta$
- (b) most efficient for $\theta$
- (c) a function of $\theta$
- (d) MVUE for $\theta$

**13.** Let $X\sim f(x,\theta)=\dfrac1\theta e^{-x/\theta}$; $x>0$ and $Y\sim f(y,\theta)=\dfrac1{2\theta}e^{-y/2\theta}$; $y>0$. Which is correct?

- (a) $X+2Y$ is sufficient for $\theta$ and left-tail UMP test is $X+2Y<C$.
- (b) $X+2Y$ is sufficient for $\theta$ and right-tail UMP test is $X+2Y>C$.
- (c) $Y+2X$ is sufficient for $\theta$ and left-tail UMP test is $Y+2X<C$.
- (d) $Y+2X$ is sufficient for $\theta$ and right-tail UMP test is $Y+2X<C$.

**14.** Consider an SPRT to test $H_0:\theta=\theta_0$ against $H_1:\theta=\theta_1$, continuing as long as $a_m<s_m<r_m$; $m=1,2,\ldots$, where $s_m=\sum_{i=1}^m X_i$; $a_m=0.90+0.05m$; $r_m=2.25+0.05m$. On data $\{1,1,0,1,0,0\}$ the decision will be

- (a) may accept $H_1$ at 6th stage.
- (b) reject $H_0$ at 4th stage.
- (c) may accept $H_1$ at 3rd stage.
- (d) reject $H_1$ at 3rd stage.

**15.** Let $X_1,\ldots,X_n$ be iid, $f(x)=\dfrac1\alpha e^{-x/\alpha}$, $x>0,\alpha>0$. The UMVUE of $\alpha$ is

- (a) $n\bar X$
- (b) $\bar X/n$
- (c) $\bar X$
- (d) $\bar X/(n+1)$

**16.** Let $X_1,\ldots,X_n$ be a sample of size $n$ from $N(0,\sigma^2)$. A central 0.95 confidence interval for $\sigma^2$ (equal tail probabilities), large sample, is

- (a) $\left(\dfrac{\frac1n\sum_{i=1}^n X_i^2}{1+1.96\sqrt{2/n}},\ \dfrac{\frac1n\sum_{i=1}^n X_i^2}{1-1.96\sqrt{2/n}}\right)$
- (b) $\left(\dfrac{\frac1n\sum_{i=1}^n X_i^2}{1+1.96\sqrt{2/\pi}},\ \dfrac{\frac1n\sum_{i=1}^n X_i^2}{1-1.96\sqrt{2/\pi}}\right)$
- (c) $\left(\dfrac{\sum_{i=1}^n X_i^2}{1+1.96\sqrt{2/n}},\ \dfrac{\sum_{i=1}^n X_i^2}{1-1.96\sqrt{2/n}}\right)$
- (d) $\left(\dfrac{\sum_{i=1}^n X_i^2}{1+1.645\sqrt{2/n}},\ \dfrac{\sum_{i=1}^n X_i^2}{1-1.645\sqrt{2/n}}\right)$

**17.** For an estimator $T$ of $\theta$:

1. $T$ unbiased for $\theta$ $\Rightarrow$ $T^2$ unbiased for $\theta^2$.
2. $T$ consistent for $\theta$ $\Rightarrow$ $T^2$ consistent for $\theta^2$.
3. $T$ sufficient for $\theta$ $\Rightarrow$ $T^2$ sufficient for $\theta$.

Codes:
- (a) 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**18.** If $T_1,T_2$ are consistent estimators of $\theta_1,\theta_2$:

1. $(T_1+T_2)$ is a consistent estimator for $(\theta_1+\theta_2)$.
2. $(T_1\times T_2)$ is a consistent estimator for $(\theta_1\times\theta_2)$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**19.** If $x$ is a random sample of size 1 from Poisson($\theta$), then $5^x$ is the unbiased estimator of

- (a) $5^\theta$
- (b) $e^{5\theta}$
- (c) $e^{4\theta}$
- (d) $\theta^5$

**20.** Let $4,3,6,3,6,2,3,4,4,3,5,5$ be a sample of size 12 from a geometric population, $f(x)=\theta(1-\theta)^{x-1}$; $x=1,2,3,\ldots$. The method-of-moments estimator of $\theta$

- (a) is 0.25.
- (b) is 4.
- (c) is 48.
- (d) does not exist.

**21.** For a random sample $x_1,\ldots,x_n$ from $N(\theta,4)$:

1. MLE of $\theta$ is $\dfrac1n\sum_{i=1}^n x_i$.
2. MLE of $\theta^2$ is $\dfrac1n\sum_{i=1}^n x_i^2$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**22.** Let $X_1,\ldots,X_n$ be iid $U(0,\theta)$. If $Y=\max(X_1,\ldots,X_n)$, an unbiased estimator of $\theta^3$ will be

- (a) $y^3$
- (b) $\dfrac{n+3}n y^3$
- (c) $y^3/n$
- (d) $\dfrac{n}{n+3}y^3$

**23.** Let $x_1,\ldots,x_n\sim U(0,\theta)$, order statistics $x_{(1)}\le\cdots\le x_{(n)}$:

1. $x_{(n)}$ is the MLE for $\theta$.
2. $x_{(n)}$ is the consistent estimator of $\theta$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**24.** For $x_1,\ldots,x_n$ from Poisson($\theta$):

1. $\dfrac1n\sum_{i=1}^n x_i$ is the MLE of $\theta$.
2. $\dfrac1n\sum_{i=1}^n x_i$ is sufficient for estimating $\theta$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**25.** Consider the following statements:

1. The Cramer-Rao inequality provides a lower bound to the variance of a sufficient estimator for $\gamma(\theta)$.
2. An MVB estimator for $\gamma(\theta)$ exists iff there exists a sufficient estimator for $\gamma(\theta)$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**26.** Let $x_1,\ldots,x_n$ be from $f(x,\theta)=\dfrac1\theta\exp(-x/\theta)$; $0<x<\infty$. The Cramer-Rao lower bound to the variance of an unbiased estimator of $\theta$ is

- (a) $\theta^2$
- (b) $\theta^2/n$
- (c) $n\theta^2$
- (d) $\theta^2/n^2$

**27.** Let $x_1,\ldots,x_n$ be from $P[X=x]=\binom2x(1-\theta)^{2-x}\theta^x$; $0\le\theta\le1$; $x=0,1,2$, and $T=\sum_{i=1}^n x_i$:

1. $T$ is a complete sufficient statistic for $\theta$.
2. $\dfrac{T^2-T}{2n(2n-1)}$ is an UMVUE of $\theta^2$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**28.** A random sample of size 64 from Poisson($\lambda$) with $\sum_{i=1}^n x_i=256$. The 95% confidence interval of $\lambda$ is

- (a) (3.51, 4.49)
- (b) (0.08, 7.92)
- (c) (3.76, 4.25)
- (d) (3.02, 4.98)

**29.** For a likelihood ratio $\lambda$, consider:

1. $0\le\lambda\le1$.
2. $(-2\log\lambda)$ follows an asymptotic Chi-square distribution.
3. The likelihood ratio test is consistent.

Codes:
- (a) 1 and 2 only
- (b) 1 and 3 only
- (c) 2 and 3 only
- (d) 1, 2 and 3

**30.** Let $x_1,\ldots,x_n$ be from $f(x,\mu)=\dfrac1{2\sqrt\pi}\exp\left[-\dfrac14(x-\mu)^2\right]$; $-\infty<x<\infty$. The SPRT for rejecting $H_0:\mu=4$ against $H_1:\mu=6$ for $\alpha=\beta=0.05$ is

- (a) $\sum_{i=1}^n x_i\ge5n+\log19$
- (b) $\sum_{i=1}^n x_i\ge5n$
- (c) $\sum_{i=1}^n x_i\ge n$
- (d) $\sum_{i=1}^n x_i\ge n+\log19$

**31.** Let $X\sim N(0,1)$. Then $E(|X|)$ equals

- (a) $\sqrt{2\pi}$
- (b) $\sqrt\pi/\sqrt2$
- (c) $\sqrt2/\sqrt\pi$
- (d) $\sqrt2/\pi$

**32.** Let $X\sim b(1,p)$, $p\in\left[\dfrac{a}{a+b},\dfrac{b}{a+b}\right]$; $a,b>0$. The MLE of $p$ is

- (a) $\dfrac{X+b}{a+b}$
- (b) $\dfrac{(b-a)X-1}{a+b}$
- (c) $\dfrac{(b-a)X+a}{a+b}$
- (d) $\dfrac{(b-a)X+b}{a+b}$

**33.** Consider the following statements:

1. An unbiased estimator is always unique.
2. Sufficient statistic is always a function of MLE.
3. Consistent estimator need not be unique.
4. UMP test is not unique.

Codes:
- (a) 1 and 2 only
- (b) 3 and 4 only
- (c) 1, 3 and 4 only
- (d) 1 and 4 only

**34.** Every similar test for testing under $H_0$ has a Neyman structure under which condition?

- (a) Sufficient statistic
- (b) Consistent statistic
- (c) Boundedly complete
- (d) Boundedly complete sufficient statistic

**35.** Consider the following statements:

1. Unbiased estimators may not always exist.
2. Unbiased estimators are always unique if they exist.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**36.** Consider the following statements:

1. If $t$ is unbiased for $\theta$, it need not be consistent.
2. If $t$ is consistent for $\theta$, it will also be unbiased for $\theta$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**37.** Let $x_1,\ldots,x_n$ be from $f(x,\theta)=\dfrac{x}{\theta}\exp\left(-\dfrac{x^2}{2\theta}\right)$; $x>0,\theta>0$. The method-of-moments estimator of $\theta$ is

- (a) $\bar x$
- (b) $\bar x^2$
- (c) $\dfrac{2\bar x}\pi$
- (d) $\dfrac{2\bar x^2}\pi$

**38.** Consider the following statements:

1. An MLE is always unique.
2. An MLE may not be consistent.
3. An MLE may not be unbiased.

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**39.** Let $x_1,\ldots,x_n$ be from Poisson($\theta$). The unbiased estimate of $e^{-\theta}$ which does **not** attain the C-R lower bound is

- (a) $\sum x_i$
- (b) $2^{\sum x_i}$
- (c) $\left(1-\dfrac1n\right)^{\sum x_i}$
- (d) $2\sum x_i$

**40.** A sample of size $n$ is taken from $N(\theta,100)$; $P(\text{accept }H_0\mid H_1\text{ true})=0.01$. If the critical region has size 0.05 for $H_0:\theta=90$ against $H_1:\theta=100$, the sample size $n$ is

- (a) 14
- (b) 15
- (c) 16
- (d) 17

**41.** Let $X_1,\ldots,X_n$ be from $f(x,\theta)=\dfrac1\theta$; $-\theta/2\le x\le\theta/2$. For the sufficient statistic for $\theta$:

1. Order statistic $(X_{(1)},X_{(2)},\ldots,X_{(n)})$ is sufficient for $\theta$.
2. Order statistic $(X_{(1)},X_{(n)})$ is sufficient for $\theta$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**42.** Let $X_1,\ldots,X_n$ be iid with $f(x,\theta)=e^{-(x-\theta)}$; $x>\theta$. Let $X_{(1)}=\min(X_1,\ldots,X_n)$. Define $T(X)=X_{(1)}+k$; $k\in\mathbb R$. The estimator with smallest MSE is

- (a) $T(X)=X_{(1)}-n$
- (b) $T(X)=X_{(1)}+1$
- (c) $T(X)=X_{(1)}+\dfrac1n$
- (d) $T(X)=X_{(1)}-\dfrac1n$

**43.** Let $x_1,\ldots,x_n$ be from $U(\alpha,\beta)$. The MLE of $\alpha$ and $\beta$ are respectively

- (a) $\sum x_i$ and $\sum x_i^2$
- (b) $\prod x_i$ and $\prod x_i^2$
- (c) $\min(x_1,\ldots,x_n)$ and $\max(x_1,\ldots,x_n)$
- (d) $\dfrac{x_{(n)}-x_{(1)}}2$ and $\dfrac{x_{(n)}+x_{(1)}}2$

**44.** Consider the following statements:

1. A minimum variance bound unbiased estimator (MVBUE) is always UMVUE.
2. An MVBUE of $\theta$ must be a sufficient statistic for $\theta$.
3. A UMVUE is always MVBUE.

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**45.** Let $x_1,\ldots,x_n$ be from Cauchy's population, $f(x,\theta)=\dfrac1{\pi[1+(x-\theta)^2]}$:

1. Sample mean is a sufficient estimator of $\theta$.
2. Sample mean is a minimum variance bound estimator for $\theta$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**46.** If $x_1,\ldots,x_n$ is from Poisson($\lambda$), the 95% confidence interval for $\lambda$ (large $n$) is

- (a) $\bar x\pm1.96\dfrac{\bar x}n$
- (b) $\bar x\pm1.96\dfrac{\sqrt{\bar x}}n$
- (c) $\bar x\pm1.96\dfrac{\bar x}{\sqrt n}$
- (d) $\bar x\pm1.96\sqrt{\dfrac{\bar x}n}$

**47.** For testing a simple null against a simple alternative hypothesis, the test is unbiased if ($\alpha,\beta$ usual meaning)

- (a) $\alpha\le\beta$
- (b) $\alpha+\beta<1$
- (c) $\alpha+\beta>1$
- (d) $\alpha\ge\beta$

**48.** Let $X,Y$ be independent $U(0,\theta)$, testing $H_0:\theta=1$ against $H_1:\theta=2$. The Type-I error probability and power for critical region $\{X/Y>0.65\}$ are respectively

- (a) (0.675, 0.675)
- (b) (0.625, 0.625)
- (c) (0.675, 0.625)
- (d) (0.625, 0.675)

**49.** For testing standard normal against double exponential distribution, the critical region $C$ is given by ($k_1,k_2$ constants)

- (a) $C=\{x:k_1<x<k_2\}$
- (b) $C=\{x:k_1<x \text{ or } k_2>x\}$
- (c) $C=\{x:|x|\ge k_1 \text{ or } |x|\le k_2\}$
- (d) $C=\{x:|x|>k_1 \text{ or } |x|<k_2\}$

**50.** The number of failed satellite launches has a Poisson distribution with parameter $\lambda$. Failure counts for the past 12 months are observed to test $H_0:\lambda=2$ against $H_1:\lambda=3$. The Likelihood Ratio is

- (a) $1.5e^{-24}$
- (b) $1.5e^{-12}$
- (c) $(1.5)^{\sum_{i=1}^{12}x_i}e^{-12}$
- (d) $(1.5)^{\sum_{i=1}^{24}x_i}e^{-24}$

*Data for Q51–52:* The OC function for testing $H_0:\theta=\theta_0$ against $H_1:\theta=\theta_1(>\theta_0)$ using SPRT from $N(\theta,1)$ is $L(\theta)=\dfrac{A^{h(\theta)}-1}{A^{h(\theta)}-B^{h(\theta)}}$; $\alpha,\beta$ are Type-I/II error probabilities.

**51.** What are $A$ and $B$ respectively equal to?

- (a) $\dfrac{1-\beta}\alpha,\ \dfrac\beta{1-\alpha}$
- (b) $\dfrac{1-\alpha}\beta,\ \dfrac\alpha{1-\beta}$
- (c) $\dfrac\alpha{1-\beta},\ \dfrac{1-\alpha}\beta$
- (d) $\dfrac\beta{1-\alpha},\ \dfrac{1-\beta}\alpha$

**52.** What is $h(\theta)$ equal to?

- (a) $\dfrac{\theta_1-\theta_0-2\theta}{\theta_1-\theta_0}$
- (b) $\dfrac{\theta_1+\theta_0-2\theta}{\theta_1-\theta_0}$
- (c) $\dfrac{\theta_1-\theta_0+2\theta}{\theta_1-\theta_0}$
- (d) $\dfrac{\theta_1-\theta_0+2\theta}{\theta_0-\theta_1}$

*Data for Q53–54:* Let $X$ be binomial($n,\theta$). The prior of $\theta$ is beta (first kind) with parameters $\alpha,\beta$. The posterior of $\theta\mid X=x$ is beta with parameters $p_1,p_2$.

**53.** What is $p_1$ equal to?

- (a) $n-\alpha-\beta$
- (b) $x+\alpha$
- (c) $n-x+\beta$
- (d) $x-\alpha$

**54.** What is $p_2$ equal to?

- (a) $n+\alpha+\beta$
- (b) $x-\alpha$
- (c) $n+x-\beta$
- (d) $x+\alpha$

*Data for Q55–56:* Let $X$ have uniform density $f(x;\mu,\sigma)=\dfrac1{2\sqrt3\,\sigma}$, $\mu-\sqrt3\sigma<x<\mu+\sqrt3\sigma$; $-\infty<\mu<\infty$, $\sigma>0$.

**55.** What is the MLE estimator of $\mu$?

- (a) $x_{(1)}$
- (b) $x_{(1)}+x_{(n)}$
- (c) $[x_{(1)}+x_{(n)}]/2$
- (d) $2[x_{(1)}+x_{(n)}]$

**56.** What is the MLE estimator of $\sigma$?

- (a) $x_{(n)}$
- (b) $x_{(n)}-x_{(1)}$
- (c) $[x_{(n)}-x_{(1)}]/(2\sqrt3)$
- (d) $[x_{(n)}-x_{(1)}]/2$

*Data for Q57–58:* Let $X_1,\ldots,X_n$ be iid $U(\theta_1,\theta_2)$, $f(x)=\dfrac1{\theta_2-\theta_1}$; $\theta_1<x<\theta_2$; $\theta_i>0$. Let $\hat X_{(i)}=E(X_{(i)})$; $i=1,n$.

**57.** UMVUE of $\theta_1$ equals

- (a) $\dfrac{n\hat X_{(n)}-\hat X_{(1)}}{n-1}$
- (b) $\dfrac{n\hat X_{(1)}-\hat X_{(n)}}{n}$
- (c) $\dfrac{n\hat X_{(1)}-\hat X_{(n)}}{n-2}$
- (d) $\dfrac{n\hat X_{(1)}-\hat X_{(n)}}{n-1}$

**58.** UMVUE of $\theta_2$ equals

- (a) $\dfrac{n\hat X_{(n)}-\hat X_{(1)}}{n-1}$
- (b) $\dfrac{n\hat X_{(n)}-\hat X_{(1)}}{n}$
- (c) $\dfrac{n\hat X_{(1)}-\hat X_{(n)}}{n-2}$
- (d) $\dfrac{n\hat X_{(1)}-\hat X_{(n)}}{n-1}$

*Data for Q59–60:* Let $X_1,\ldots,X_n$ be iid $N(\mu,\mu)$ — i.e. mean = variance = $\mu$ ($\mu>0$).

**59.** Consider:

1. $\sum x_i^2$ is sufficient for $\mu$.
2. MLE of $\mu$ is $\dfrac{-1+\sqrt{1+4m_2}}2$, where $m_2=\dfrac{\sum x_i^2}n$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**60.** Consider:

1. $(\sum x_i,x_n)$ is sufficient for $\mu$.
2. Moment estimator of $\mu$ is $\bar x$.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**61.** Which survey conducted by MOSPI in 2019 is an important tool for measuring paid and unpaid work of both men and women in society?

- (a) Periodic Labour Force Survey
- (b) Time Use Survey
- (c) Employment and Unemployment Survey of NSSO
- (d) Population Census

**62.** Which are major sources of health indicators in India?

1. National Family Health Survey
2. Periodic Labour Force Survey
3. Population Census
4. NSSO 71st Round – Social Consumption: Education and Health

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1, 2 and 3 only
- (d) 1, 3 and 4 only

**63.** Consider the following statements:

1. Most index compilers use Laspeyres' Index Formula despite its inherent upward bias.
2. It is advised that the Base Period of an index should be revised as frequently as possible.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**64.** Which statements are correct about SDGs?

1. UNDP formulated these goals.
2. There are 17 goals.
3. These are intended to be completed by 2030.

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**65.** 'Wages and salaries' earned by a resident of country 'A' from a resident enterprise of country 'B' is included in

- (a) GDP of country A.
- (b) GDP of country B.
- (c) GNI of country A.
- (d) GNI of country B.

**66.** Which is **not** a component of the UN Human Development Index (HDI)?

- (a) Life expectancy at birth
- (b) Infant mortality rate
- (c) Expected and mean years of schooling
- (d) Per capita income

**67.** Gross Domestic Product reflects the

- (a) industrial growth scenario of the country.
- (b) trend in agricultural growth in the country.
- (c) size of the country's economy at market price.
- (d) unduplicated output of the economy at basic price.

**68.** Poverty line in India was based on data from which of the following?

1. Consumer Expenditure Surveys of NSSO
2. Health Surveys of NSSO
3. National Family Health Survey

Codes:
- (a) 1 and 3 only
- (b) 2 and 3 only
- (c) 1 only
- (d) 3 only

**69.** "Growth rate of the quarterly estimate of GDP is 10%" means

- (a) economy has grown by 10% from the last month of the year.
- (b) economy has grown by 10% over the same month in the previous year.
- (c) economy has grown by 10% over the same quarter in the previous year.
- (d) economy has grown by 10% over the previous quarter in the same year.

**70.** Which are divisions of the National Sample Survey Office?

1. Survey Design and Research Division (SDRD)
2. Field Operations Division (FOD)
3. Data Processing Division (DPD)
4. Survey Coordination Division (SCD)

Codes:
- (a) 1 and 2 only
- (b) 3 and 4 only
- (c) 1, 2 and 3 only
- (d) 1, 2, 3 and 4

**71.** Merchandise Trade Statistics collected by DGCI&S is compiled from bills submitted by importers/exporters. This is an example of

- (a) statistics collected through Survey.
- (b) administrative statistics.
- (c) statistics collected through Census.
- (d) statistics collected through mixed mode.

**72.** In Indian official statistics, the output of agriculture crops is estimated using which approach?

- (a) Market arrivals + Farmers retention
- (b) Area under crop × productivity × prices
- (c) Sample surveys of farmers production
- (d) Compilation of village level statistics

**73.** Which is **not** correctly matched (Index — Base Year)?

- (a) CPI-IW — 2016
- (b) CPI (R and U) — 2012
- (c) CPI-AL/RL — 2015
- (d) WPI — 2011–12

**74.** Which measure is known as National Income?

- (a) GDP at market price
- (b) GVA at basic price
- (c) GNI at basic price
- (d) NNI at basic price

**75.** Consider:

1. GDP
2. IMR
3. Dropout rate
4. CPI
5. WPI

Which are official statistics?

- (a) 2, 4 and 5 only
- (b) 1, 2, 4 and 5 only
- (c) 1 and 3 only
- (d) 1, 2, 3, 4 and 5

**76.** Who are authorised to compile official statistics in India?

1. Central Government
2. State Government
3. Panchayat Raj Institutions/Urban Local Bodies

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**77.** Collection of statistics for subject-specific areas (Agriculture, Labour, Health, Commerce) vests with which agency?

- (a) Ministry of Statistics and Programme Implementation
- (b) NITI Aayog
- (c) Ministry of Finance
- (d) Corresponding Administrative Ministry

**78.** The National Statistical Commission (NSC) was set up in 2005 through

- (a) a Constitutional Amendment.
- (b) a Government Resolution.
- (c) an executive order.
- (d) an internal notification of the Ministry of Statistics and Programme Implementation.

**79.** For which purpose is NSSO data **not** used?

- (a) Poverty estimations and fixing poverty line
- (b) Estimation of contribution of unorganised sector
- (c) Fixing minimum support price of major crops
- (d) Employment and unemployment scenario

**80.** Consider the following statements regarding Consumer Price Index (CPI):

1. It measures the average change in prices over time that consumers pay for a basket of goods and services.
2. It is calculated using prices of a sample of representative items collected periodically.
3. It may be interpreted as a measure of both inflation and deflation.

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3
