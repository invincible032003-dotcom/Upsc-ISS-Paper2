# IES/ISS Statistics — Paper II (2020)
*Series D · T.B.C. DFSE-D-STT · Time: 2 hrs · Max Marks: 200*

**1.** Suppose the pmf of a random variable $X$ under $\theta=\theta_0$ and $\theta=\theta_1$ ($\theta_1\ne\theta_0$) is

| X | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $p_{\theta_0}(x)$ | 0.01 | 0.04 | 0.50 | 0.45 |
| $p_{\theta_1}(x)$ | 0.02 | 0.08 | 0.40 | 0.50 |

Define $\varphi(x)=1$ if $x=0,1$; $0$ if $x=2,3$. For testing $H_0:\theta=\theta_0$ against $H_1:\theta=\theta_1$, the test $\varphi$ is

- (a) a most powerful test at level 0.05
- (b) a biased test
- (c) test with power 0.90
- (d) test of size 0.01

**2.** Consider $f(x,\theta)=\dfrac1\theta,\ 0\le x\le\theta$; $0$, elsewhere. Let $1\le X\le1.5$ be the critical region to test $H_0:\theta=1.5$ against $H_1:\theta=2$. Then

- (a) size of the test is 0 and test is unbiased
- (b) size of the test is $\tfrac12$ and test is unbiased
- (c) size of the test is $\tfrac13$ and test is biased
- (d) size of the test is $\tfrac13$ and test is unbiased

**3.** Let $X$ have pmf under $H_0,H_1$:

| X | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $p_{\theta_0}(x)$ | 0.01 | 0.01 | 0.01 | 0.01 | 0.01 | 0.95 |
| $p_{\theta_1}(x)$ | 0.05 | 0.04 | 0.03 | 0.02 | 0.01 | 0.85 |

Consider $\varphi(x)=1$ if $X=1,2$; $0.25$ if $X=3$; $0$ otherwise. Which is correct?

- (a) $\varphi(x)$ is a most powerful test of level $\alpha=0.03$
- (b) $\varphi(x)$ is a most powerful test of level $\alpha=0.03$ with power 0.0975
- (c) $\varphi(x)$ has size 0.0225 and power 0.0975 but is not a most powerful test with level $\alpha=0.03$
- (d) $\varphi(x)$ is not a most powerful test of level $\alpha=0.0225$

**4.** Which parameter statement is correct for the Likelihood Ratio Test (LRT)?

- (a) In LRT, control is not affected over the probabilities of Type-I error by suitably choosing the cut-off point $\lambda_0$
- (b) LRT always gives an unbiased test
- (c) When the null hypothesis is composite, the LR critical region will always be similar
- (d) Under certain assumptions, an LRT will be consistent

**5.** An estimator to be a good estimator,

- (a) should be efficient but not necessarily unbiased
- (b) should be consistent but not necessarily efficient
- (c) should be unbiased but not necessarily sufficient
- (d) should be unbiased, consistent, sufficient and efficient

**6.** For the Cauchy distribution, consider:

1. Sample mean is a consistent estimator of the population median.
2. Sample median is a consistent estimator of the population median.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**7.** Let $X$ be Poisson with mean $\lambda>0$. The unbiased estimator of $e^{-(k+1)\lambda}$, $k>0$, is

- (a) $k^X$
- (b) $X^k$
- (c) $(-k)^X$
- (d) $k^{-X}$

**8.** If $X_1,\ldots,X_n$ have joint pdf $f_\theta(x_1,\ldots,x_n)$; $\theta\in\Theta$, Fisher's information about $\theta$ contained in $X$ is given by

- (a) $I_\theta=E_\theta\left(\dfrac{\partial^2\log_e f_\theta(x)}{\partial\theta^2}\right)$
- (b) $I_\theta=E_\theta\left(-\dfrac{\partial^2\log_e f_\theta(x)}{\partial\theta^2}\right)^2$
- (c) $I_\theta=E_\theta\left(\dfrac{\partial\log_e f_\theta(x)}{\partial\theta}\right)^2$
- (d) None of the above

**9.** Let $X_1,\ldots,X_n$ be a random sample with pdf $f(x,\theta)=\theta x^{\theta-1}$; $0<x<1$, $\theta>0$. The sufficient statistic for $\theta$ using the factorization theorem is

- (a) $\sum_{i=1}^n X_i$
- (b) $\prod_{i=1}^n X_i$
- (c) $\sum_{i=1}^n(X_i-\bar X)^2$
- (d) $\sum_{i=1}^n X_i^2$

**10.** For estimating $\theta$ under absolute error loss $L(\theta,d)=|\theta-d|$, the Bayes rule is given by

- (a) Mean of the posterior distribution of $\theta$ given $X$
- (b) Mode of the posterior distribution of $\theta$ given $X$
- (c) Median of the posterior distribution of $\theta$ given $X$
- (d) MLE of $\theta$ in the posterior distribution of $\theta$ given $X$

**11.** Let $X_1,\ldots,X_n$ be a random sample from $U(0,\theta)$, $f(x,\theta)=\dfrac1\theta$; $0<x<\theta$. The consistent estimator for $\theta/e$ is

- (a) $X_{(1)}$
- (b) $\left(\displaystyle\prod_{i=1}^n\sqrt[n]{X_i}\right)^n$
- (c) $\left(\displaystyle\prod_{i=1}^n X_i\right)^{1/n}$
- (d) $X_{(n)}$

**12.** From sampling from $N(\theta,1)$ using SPRT for $H_0:\theta=0$ against $\theta=2$, the ASN function for $\alpha=0.05,\beta=0.1$ is $E(n)=\dfrac{L(\theta)\log B+\{1-L(\theta)\}\log A}{E(Z)}$, where

- (a) $A=18$, $B=\dfrac{19}2$, $E(Z)=4(1-\theta)$
- (b) $A=18$, $B=\dfrac{2}{19}$, $E(Z)=4(\theta-1)$
- (c) $A=\dfrac{2}{19}$, $B=18$, $E(Z)=4(1-\theta)$
- (d) $A=\dfrac{2}{19}$, $B=18$, $E(Z)=4-\theta$

**13.** Let $X$ have density $f(x)=\theta e^{-x\theta}$; $0<x<\infty$. The central 95% confidence limits for $\theta$ with large $n$ are

- (a) $\left(1+\dfrac{1.96}{\sqrt n}\right)\bar X,\ \left(1-\dfrac{1.96}{\sqrt n}\right)\bar X$
- (b) $\left(1+\dfrac{1.96}{\sqrt n}\right)\dfrac1{\bar X},\ \left(1-\dfrac{1.96}{\sqrt n}\right)\dfrac1{\bar X}$
- (c) $\left(1+\dfrac{1.96}{n}\right)\dfrac1{\bar X},\ \left(1-\dfrac{1.96}{n}\right)\dfrac1{\bar X}$
- (d) $\left(1+\dfrac{1.96}{n}\right)\bar X,\ \left(1-\dfrac{1.96}{n}\right)\bar X$

**14.** Let $X,Y$ be independent $N(\theta,\sigma_1^2)$ and $N(\theta,\sigma_2^2)$, $\sigma_1^2,\sigma_2^2$ known. The sufficient statistic for $\theta$ is

- (a) $\bar x+\bar y$
- (b) $\dfrac{x}{\sigma_1}+\dfrac{y}{\sigma_2}$
- (c) $\dfrac{x^2}{\sigma_1^2}+\dfrac{y^2}{\sigma_2^2}$
- (d) $\dfrac{x}{\sigma_1^2}+\dfrac{y}{\sigma_2^2}$

**15.** $T_n$ calculated from a sample of size $n$ is a consistent estimator of $\theta$ for all $\varepsilon>0,\eta>0$ and $n\ge m$ if

- (a) $E(T_n)=\theta$
- (b) $\lim_{n\to\infty}V(T_n)=0$
- (c) $P[\,|T_n-\theta|<\varepsilon\,]>1-\eta$
- (d) $P[\,|T_n-\theta|<\varepsilon\,]<1-\eta$

**16.** Let $X_1,\ldots,X_n$ be from $U(0,5\theta)$. Define $X_{(1)}=\min(\ldots)$, $X_{(n)}=\max(\ldots)$. The MLE of $\theta$ is

- (a) $\dfrac15 X_{(1)}$
- (b) $X_{(1)}$
- (c) $X_{(n)}$
- (d) $\dfrac15 X_{(n)}$

**17.** Let $X_1,\ldots,X_n$ be iid Poisson($\lambda$). The MLE of $\lambda$ is

- (a) $\bar X$
- (b) $\dfrac1n\sum_{i=1}^n(X_i-\bar X)^2$
- (c) $\bar X-X_{(1)}$
- (d) $\sum_{i=1}^n X_i$

**18.** Let $X_1,\ldots,X_n$ be a random sample from $N(\mu,1)$. The UMVUE of $\mu^2$ is

- (a) $(\bar X)^2$
- (b) $n(\bar X)^2$
- (c) $(\bar X)^2-\dfrac1n$
- (d) $n\{(\bar X)^2-1\}$

**19.** Let $I(\theta)$ be the Fisher information supplied by the sample. If $T$ is unbiased for $\psi(\theta)$, the variance of $T$ will be

- (a) $\ge\dfrac{(\partial\psi/\partial\theta)^2}{I(\theta)}$
- (b) $\le\dfrac{(\partial\psi/\partial\theta)^2}{I(\theta)}$
- (c) $\ge\dfrac1{I(\theta)}$
- (d) $\le\dfrac1{I(\theta)}$

**20.** The Bhattacharya bound is the generalisation of the

- (a) Cramer-Rao Inequality
- (b) Rao-Blackwell theorem
- (c) Neyman-Pearson Lemma
- (d) Chapman-Robbins-Kiefer bound

**21.** For a random sample from a normal population with known variance, comparing sample mean and sample median as estimators of the mean, the efficiency of sample median relative to sample mean is

- (a) $\pi$
- (b) $\pi/2$
- (c) $2/\pi$
- (d) $2\pi$

**22.** For $X_1,\ldots,X_n$ from $N(\mu,\sigma^2)$ with $\mu$ known, the MVUE for unknown $\sigma^2$ is

- (a) $\dfrac{\sum_{i=1}^n(X_i-\mu)^2}{n-1}$
- (b) $\displaystyle\sum_{i=1}^n\left(\dfrac{X_i-\mu}{n}\right)^2$
- (c) $\dfrac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1}$
- (d) $\dfrac{\sum_{i=1}^n(X_i-\mu)^2}{n}$

**23.** Consider a random sample $\{8,4,\tfrac12,1\}$ from the distribution with the most general pmf form
$$f(x,\theta)=\left(\dfrac{x}{\theta}\right)^{\theta A'(\theta)}\exp[A(\theta)+C(x)]$$
where $A'(\theta)$ is the derivative of $A(\theta)$ w.r.t. $\theta$. The MLE of $\theta$ is

- (a) $\dfrac{27}8$
- (b) $2$
- (c) $\dfrac{32}{27}$
- (d) $\dfrac52$

**24.** Let $\{7.05,6.89,6.62,7.32,7.48,6.93,7.17,6.78\}$ be a random sample from $U\left(\theta-\tfrac12,\theta+\tfrac12\right)$. Which would be MLE for $\theta$?

- (a) 6.99 as well as 7.10
- (b) 6.87 as well as 7.10
- (c) 7.54 as well as 6.92
- (d) 6.92 as well as 6.87

**25.** Let $A$ be the most efficient estimator and $B$ a less efficient estimator with efficiency $e$. Then $\text{Cov}(A,B-A)$ equals

- (a) 0
- (b) $e$
- (c) $e^2$
- (d) $1-e$

**26.** To estimate the parameter $\lambda$ (variance) of a Poisson distribution, $S^2=\dfrac{\sum(X_i-\bar X)^2}{n-1}$ from a sample of size $n$. Then $\text{Var}(S^2)$ will always be $\ge$

- (a) $\dfrac{\lambda}n$
- (b) $\dfrac{(n-1)\lambda}n$
- (c) $\dfrac{n\lambda}{n-1}$
- (d) $\dfrac{\lambda}{n+1}$

**27.** Let $X_1,X_2,X_3$ be iid normal, mean $\theta$, variance 1. Define $T=X_1-X_2-X_3$. The Fisher information contained in $T$ is

- (a) 3
- (b) $\dfrac13$
- (c) $-3$
- (d) $-\dfrac13$

**28.** Let $X_1,\ldots,X_n$ be a random sample from $f(x,\theta)=e^{-(x-\theta)}$, $x>\theta$. By the factorisation theorem,

- (a) $\sum_{i=1}^n X_i$ is the only sufficient statistic for $\theta$
- (b) $\left\{X_{(1)},\sum_{i=1}^n X_i\right\}$ is jointly sufficient for $\theta$
- (c) $X_{(n)}$ is sufficient for $\theta$
- (d) $\left\{X_{(n)},\sum_{i=1}^n X_i\right\}$ is jointly sufficient for $\theta$

**29.** Let $X_1,\ldots,X_n$ be a random sample of size $n$ from $N(\theta,1)$. The complete statistic for $\theta$ is

- (a) $X_1$
- (b) $X_1-X_2$
- (c) $2X_1-X_2-X_3$
- (d) $X_1+X_2+X_3+X_4$

**30.** Suppose $(X,Y)$ follows bivariate normal with means $\mu_1,\mu_2$; std. deviations $\sigma_1,\sigma_2$; correlation $\rho$, $-1<\rho<1$, all unknown. Checking $\sigma_1=\sigma_2$ is equivalent to verifying the independence of

- (a) $X$ and $Y$
- (b) $X$ and $X-Y$
- (c) $X+Y$ and $Y$
- (d) $X+Y$ and $X-Y$

**31.** Let $X_1,\ldots,X_n$ be iid $N(\theta,1)$. The Bhattacharya bound for $g(\theta)=\theta^2$ is

- (a) $\dfrac{4\theta^2}n+\dfrac2{n^2}$
- (b) $\dfrac{4\theta^2}n$
- (c) $\dfrac2{n^2}$
- (d) $\dfrac{2\theta^2}n+\dfrac1{n^2}$

**32.** If $X_1,\ldots,X_m$ be iid from $B(n,P)$, the MLE of $P$ is

- (a) $\dfrac{\bar X}n$
- (b) $\bar X$
- (c) $\dfrac{\bar X}m$
- (d) $\dfrac{\bar X}{mn}$

**33.** Let $X_1,\ldots,X_n$ be iid with $f(x,\theta)=\dfrac{3x^2}{\theta^3}$; $0<x<\theta$. The UMVUE of $\theta^r$ is given by

- (a) $X_{(n)}^r\left[\dfrac{r+3}3\right]$
- (b) $X_{(n)}^r\left[\dfrac{r+3n}{3n}\right]$
- (c) $X_{(1)}^r\left[\dfrac{r+3n}{3n}\right]$
- (d) $X_{(n)}^r\left[\dfrac{3n}{r+3n}\right]$

**34.** A random sample of 500 apples was taken and 60 were found bad. The 98% confidence limits for the percentage of bad apples are (significant value of $Z$ at 98% is 2.33)

- (a) (7.62, 13.58)
- (b) (8.61, 15.38)
- (c) (4.38, 9.13)
- (d) (3.08, 6.14)

**35.** $H_0:\theta\in\Theta_0$ is said to be composite if:

1. $\Theta_0$ contains more than one point $\theta$.
2. The joint distribution of $(X_1,\ldots,X_n)$ is completely specified.
3. For testing $H_0:\theta\in\Theta_0$ against $H_1:\theta\in\Theta_1$ at level $\alpha$, the critical region $w$ is such that $P_\theta(w)\le\alpha$ for all $\theta\in\Theta_0$.

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**36.** Let $X_1,\ldots,X_n$ be from $U(\theta,\theta+1)$. Which is/are correct?

1. The estimator $\left(\bar X-\dfrac12\right)$ is the best unbiased estimator of $\theta$.
2. The joint pdf of $X_1,\ldots,X_n$ can be written as $f(x,\theta)=1$ if $\max_i x_i-1<\theta<\min_i x_i$; $0$ otherwise.

Codes:
- (a) 1 only
- (b) 2 only
- (c) Both 1 and 2
- (d) Neither 1 nor 2

**37.** If $X_1,\ldots,X_n$ is a random sample from $U(0,\theta)$, the unbiased estimators of $\theta$ are:

1. $\bar X/2$
2. $2\bar X$
3. $\dfrac{n+1}{n}X_{(n)}$
4. $\dfrac{n}{n+1}X_{(n)}$

Codes:
- (a) 1 and 2
- (b) 2 and 3
- (c) 3 and 4
- (d) 1 and 4

**38.** If $X_1,\ldots,X_n$ is a random sample from $U(0,\theta)$, the efficiency of $2\bar X$ relative to $\dfrac{n+1}n X_{(n)}$ is

- (a) $\dfrac3n$
- (b) $\dfrac n3$
- (c) $\dfrac{n+2}3$
- (d) $\dfrac3{n+2}$

**39.** If $\hat\theta_1=\dfrac{X}n$ and $\hat\theta_2=\dfrac13$ are estimators of $\theta$ of a binomial population and $\theta=\dfrac12$, the values of $n$ for which the mean square error of $\hat\theta_2$ is less than the variance of $\hat\theta_1$ are

- (a) $2\le n<7$ only
- (b) $1\le n\le6$ only
- (c) $1\le n\le8$ only
- (d) $1\le n\le4$ only

**40.** If $X_1,\ldots,X_n$ is a random sample from $f(x,\theta)=\dfrac{2(\theta-x)}{\theta^2}$; $0<x<\theta$, the estimator of $\theta$ by the method of moments is

- (a) $\bar X$
- (b) $3\bar X$
- (c) $\bar X/3$
- (d) $\bar X+3$

*Data for Q41–44:* An experiment tested the difference in mean weights of a fish species caught in three lakes, at significance level 0.05. Incomplete ANOVA table:

| Source | df | Sum of squares | Mean SS | F statistic |
|---|---|---|---|---|
| Treatment | – | 17.04 | – | – |
| Error | 9 | – | – | |
| Total | 11 | 35.04 | | |

**41.** The null hypothesis for the analysis is

- (a) $H_0:\mu_1=\mu_2=\cdots=\mu_9(=\mu)$
- (b) $H_0:\mu_1=\mu_2=\mu_3=0$
- (c) $H_0:\mu_1=\mu_2=\mu_3(=\mu)$
- (d) at least one pair of fish populations have same mean

**42.** If the critical value of $F$ at 5% level is 4.2565, the appropriate interpretation is

- (a) Reject $H_0$; all populations of fish have different mean weights.
- (b) Reject $H_0$; exactly two populations of fish have different mean weights.
- (c) Reject $H_0$; the mean weight of at least one fish population differs from others.
- (d) There is insufficient evidence to claim that the mean weights differ.

**43.** The value of the $F$ statistic in the table equals

- (a) 2.46
- (b) 4.26
- (c) 6.24
- (d) 8.52

**44.** If all observations from three lakes are pooled into a single group, they would have a standard deviation equal to

- (a) 2.000
- (b) 1.414
- (c) 4.128
- (d) 5.919

*Data for Q45–47:* Three instructors each taught 12 students (randomly assigned to 3 teaching methods) the same material. Complete this two-way ANOVA table with interaction:

| Source | df | Sum of squares (SS) | Mean SS | F-ratio |
|---|---|---|---|---|
| Methods | – | 162 | – | – |
| Instructors | – | 90 | – | – |
| Interaction | – | 600 | – | – |
| Error | – | 900 | – | – |

**45.** The degrees of freedom for methods, instructors, interaction and errors are respectively

- (a) 2, 2, 95 and 107
- (b) 3, 3, 101 and 107
- (c) 2, 2, 4 and 27
- (d) None of the above

**46.** The mean sum of squares due to methods, instructors, interaction and errors are respectively

- (a) 81, 45, 150, 33.33
- (b) 81, 45, 6.5, 8.41
- (c) 54, 30, 5.94, 8.41
- (d) None of the above

**47.** The $F$ ratios pertaining to methods, instructors and interaction are, respectively

- (a) 9.63, 5.35, 0.77
- (b) 2.43, 1.35, 4.50
- (c) 6.42, 3.57, 0.71
- (d) None of the above

**48.** Independent observations $y_1,\ldots,y_n$ are drawn from $N(\mu,\sigma^2/x_i^2)$; $x_i$'s unequal, uncorrelated with model errors, $x_i\ne0$ for all $i$. The least squares estimate of $\mu$ is

- (a) $\dfrac{\sum_{i=1}^n x_i^2y_i}{\sum_{i=1}^n x_i^2}$
- (b) $\dfrac{\sum_{i=1}^n x_iy_i}{\sum_{i=1}^n x_i^2}$
- (c) $\dfrac{\sum_{i=1}^n x_iy_i}{\left(\sum_{i=1}^n x_i\right)^2}$
- (d) $\dfrac{\sum_{i=1}^n x_i^2y_i}{\left(\sum_{i=1}^n x_i\right)^2}$

**49.** Two-way classification, one observation per cell, interaction present: $y_{ij}=\mu+\alpha_i+\beta_j+\gamma_{ij}+e_{ij}$, $i=1,\ldots,5$; $j=1,\ldots,4$. The df for error SS are

- (a) 4
- (b) 5
- (c) 12
- (d) 0

**50.** In $Y_{n\times1}=X_{n\times p}\beta_{p\times1}+e_{n\times1}$, if $P=X(X'X)^-X'$, then $(I_n-P)X$ equals

- (a) Null matrix
- (b) Some matrix of order $n\times n$
- (c) $X$
- (d) $I_n$

**51.** Which organisation compiles the Consumer Price Index for Agriculture Labour and Rural Labour (CPI-AL/RL)?

- (a) CSO, Ministry of Statistics and Programme Implementation
- (b) Office of Economic Adviser, Ministry of Commerce and Industries
- (c) Directorate of Economics and Statistics, Ministry of Agriculture and Farmers Welfare
- (d) Labour Bureau, Ministry of Labour and Employment

**52.** Which organisation compiles and releases vital statistics regularly in India?

- (a) Central Statistics Office
- (b) Registrar General of India
- (c) Directorate General of Health Services
- (d) International Institute of Population Studies

**53.** General Fertility Rate (GFR) is defined as

- (a) Number of live births per thousand mid-year female population
- (b) Number of live births per hundred mid-year female population
- (c) Number of live births per thousand mid-year female population in productive age-group
- (d) Number of live births per hundred mid-year female population in productive age-group

**54.** Which sampling design is most commonly used in NSSO household surveys?

- (a) Simple Random Sampling Without Replacement
- (b) Systematic Random Sampling
- (c) Cluster Sampling
- (d) Two-stage Stratified Sampling

**55.** The subject matter of the 78th round of NSSO Survey is

- (a) Drinking water, Sanitation, Hygiene and Housing conditions in India
- (b) Situation Assessment Survey of Agricultural Household
- (c) Domestic Tourism Expenditure
- (d) Household Consumption Expenditure

**56.** The most common survey period of NSSO Household Surveys is

- (a) January to December
- (b) April to March
- (c) July to June
- (d) January to June

**57.** The Gross Value Added (GVA) by an enterprise is defined as

- (a) Gross value of output 'minus' Final consumption
- (b) Gross value of output 'minus' Export
- (c) Gross value of output 'minus' Inventory
- (d) Gross value of output 'minus' Intermediate consumption

**58.** In National Accounts, Domestic Economy is based on the concept of

- (a) Resident units
- (b) Currency
- (c) Nationality
- (d) All of the above

**59.** SASA is associated with

- (a) Agricultural Statistics
- (b) Wholesale Price Indices
- (c) Scheduled Tribe Welfare
- (d) Land Ceilings and Reforms

**60.** The basic unit of data collection in the Agriculture Census is

- (a) Operational holding
- (b) Ownership holding
- (c) Household
- (d) None of the above

**61.** If the population variance is doubled, the width of the confidence interval for the population mean will be

- (a) multiplied by 2
- (b) divided by 2
- (c) multiplied by $\sqrt2$
- (d) divided by $\sqrt2$

**62.** If the 95% CI for $\mu$ ($\sigma$ known) is (18000, 22000), the sample mean is

- (a) 18000
- (b) 20000
- (c) 22000
- (d) 40000

**63.** The factorization theorem for sufficiency is known as

- (a) Rao-Blackwell theorem
- (b) Fisher-Neyman theorem
- (c) Bernoulli theorem
- (d) Cramer-Rao theorem

**64.** A statistic $T=t(x_1,\ldots,x_n)$ is sufficient for $\theta$ according to the factorization theorem iff the joint pdf/pmf can be expressed as

- (a) $g(\theta,t)\cdot h(x_1,\ldots,x_n;\theta)$
- (b) $g(t,\theta)\cdot h(x_1,\ldots,x_n)$
- (c) $g(t,x_i)\cdot h(x_1,\ldots,x_n;\theta)$
- (d) $g(x_1,\ldots,x_n;\theta)\cdot h(x_1,\ldots,x_n)$

**65.** What is the expectation of the loss function?

- (a) The risk function
- (b) The power function
- (c) The error function
- (d) The convex loss function

**66.** If $x\ge1$ is the critical region for $H_0:\theta=2$ against $H_1:\theta=1$, from a single observation with $f(x,\theta)=\theta e^{-\theta x}$, $0\le x<\infty$. The size of the Type-II error is

- (a) $(e-1)/e$
- (b) $1/e^2$
- (c) $(e+1)/e$
- (d) $1/e$

**67.** If $X_1,\ldots,X_n$ are iid $N(\mu,\sigma^2)$, $\sigma^2$ unknown, the shortest confidence interval for $\mu$ is given as

- (a) $\left(\bar X-t_{n-1,\frac\alpha2}\dfrac{s}{2\sqrt n},\ \bar X+t_{n-1,\frac\alpha2}\dfrac{s}{2\sqrt n}\right)$
- (b) $\left(\bar X-t_{n-1,\alpha}\dfrac{s}{\sqrt n},\ \bar X+t_{n-1,\alpha}\dfrac{s}{\sqrt n}\right)$
- (c) $\left(\bar X-t_{n-1,\frac\alpha2}\dfrac{s}{2\sqrt{n-1}},\ \bar X+t_{n-1,\frac\alpha2}\dfrac{s}{2\sqrt{n-1}}\right)$
- (d) $\left(\bar X-t_{n,\frac\alpha2}\dfrac{s}{2\sqrt n},\ \bar X+t_{n,\frac\alpha2}\dfrac{s}{2\sqrt n}\right)$

**68.** If $\alpha=P(\text{Type-I error})$, $\beta=P(\text{Type-II error})$, a critical region is said to be unbiased if

- (a) $\alpha+\beta<1$
- (b) $\alpha+\beta>1$
- (c) $\alpha>\beta$
- (d) $\alpha<\beta$

**69.** In a paired $t$-test with 10 pairs, the degrees of freedom equal

- (a) 18
- (b) 10
- (c) 9
- (d) 5

**70.** Let $X\sim N(\mu,\sigma^2)$, both unknown ($-\infty<\mu<\infty$, $\sigma^2>0$). Which is **not** a composite hypothesis?

- (a) $H:\mu\le\mu_0,\ \sigma^2>\sigma_0^2$
- (b) $H:\mu=\mu_0,\ \sigma^2<\sigma_0^2$
- (c) $H:\mu=\mu_0,\ \sigma^2=\sigma_0^2$
- (d) $H:\mu>\mu_0,\ \sigma^2>\sigma_0^2$

**71.** Which is **not** a Sustainable Development Goal?

- (a) Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all
- (b) End poverty in all its forms everywhere
- (c) Promote regulated use of AI
- (d) Ensure access to affordable, reliable, sustainable and modern energy for all

**72.** Which survey of NSSO employs a rotational panel survey design?

- (a) Periodic Labour Force Survey (PLFS)
- (b) Employment-Unemployment Survey (EUS)
- (c) NSSO Survey on Disability
- (d) NSSO 71st Round — Health and Education

**73.** For a survey on women and child well-being in India, which would be the **least** preferred stratifying variable for selecting villages within a district?

- (a) Female literacy rate
- (b) Child mortality rate
- (c) Number of individual units with 100 or more workers
- (d) Sex ratio

**74.** Who can be engaged as census enumerators/supervisors in population census operations in India?

1. School teachers
2. Central government officials
3. Local government officials

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**75.** Which can be derived/drawn from population census data?

1. Sampling frame for All-India Survey with household as ultimate-stage unit
2. Literacy rate
3. Average monthly per capita expenditure (MPCE)
4. Sex ratio

Codes:
- (a) 1, 2 and 4
- (b) 2, 3 and 4
- (c) 1, 2 and 3
- (d) 1, 3 and 4

**76.** Which organization employs field enumerators for conducting All-India NSSO surveys?

- (a) SDRD
- (b) DPD
- (c) CPD
- (d) FOD

**77.** GDP is measured by which equivalent approaches?

1. Production approach
2. Income approach
3. Expenditure approach

Codes:
- (a) 1 and 2 only
- (b) 2 and 3 only
- (c) 1 and 3 only
- (d) 1, 2 and 3

**78.** Which are components of the Physical Quality Life Index (PQLI)?

1. Literacy Rate
2. Infant Mortality Rate
3. Life Expectancy
4. Per Capita Income

Codes:
- (a) 1, 2 and 3
- (b) 2, 3 and 4
- (c) 1, 3 and 4
- (d) 1, 2 and 4

**79.** Point-to-point inflation of a monthly Index Number is defined as

- (a) $\left(\dfrac{\text{Current Month Index}}{\text{Base Period Index}}-1\right)\times100$
- (b) $\left(\dfrac{\text{Current Month Index}}{\text{Last Month Index}}-1\right)\times100$
- (c) $\left(\dfrac{\text{Current Month Index}}{\text{First Month Index of the year}}-1\right)\times100$
- (d) $\left(\dfrac{\text{Current Month Index}}{\text{Same Month Index of last year}}-1\right)\times100$

**80.** Which organisation designed the 'Ten Fundamental Principles of Official Statistics'?

- (a) World Bank
- (b) International Monetary Fund
- (c) United Nations
- (d) Organisation for Economic Co-operation and Development (OECD)
