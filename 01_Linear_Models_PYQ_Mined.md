# ISS Statistics Paper II — Part (i) LINEAR MODELS
## Syllabus-mapped PYQ mine, 2018–2026 (9 papers · 720 items · 119 in this part)

> **Scope of this file.** Every question from the 2018–2026 IES/ISS Statistics Paper II papers that falls under syllabus part (i) *Linear Models*, classified into 11 micro-topics, tagged `[Year·Qn]`, with frequency analytics, clone detection and a distilled results ledger.
>
> **No answer key.** The source booklets carry no official key and none is invented here. Where a cluster has a settled standard result, it is stated in the *Results ledger* as theory — not as an answer to a specific numbered item.

---

## 1. Syllabus, atomised

Official text of part (i), split into addressable clauses:

| Code | Syllabus clause |
|---|---|
| **S1.1** | Theory of linear estimation |
| **S1.2** | Gauss–Markov linear models |
| **S1.3** | Estimable functions |
| **S1.4** | Error and estimation space |
| **S1.5** | Normal equations and least square estimators |
| **S1.6** | Estimation of error variance |
| **S1.7** | Estimation with correlated observations |
| **S1.8** | Properties of least square estimators |
| **S1.9** | Generalized inverse of a matrix and solution of normal equations |
| **S1.10** | Variances and covariances of least square estimators |
| **S1.11** | One way and two-way classifications |
| **S1.12** | Fixed, random and mixed effects models |
| **S1.13** | Analysis of variance (two-way classification only) |
| **S1.14** | Multiple comparison tests — Tukey, Scheffé, Student–Newman–Keuls–Duncan |

---

## 2. Micro-topic taxonomy

| Code | Micro-topic | Syllabus clause |
|---|---|---|
| **LM-1** | Estimable functions; estimation & error space | S1.3, S1.4 |
| **LM-2** | BLUE, Gauss–Markov theorem, normal equations, LSE | S1.1, S1.2, S1.5, S1.8 |
| **LM-3** | Variances/covariances of LSEs; error-variance estimation; RSS | S1.6, S1.10 |
| **LM-4** | Generalized inverse (incl. Moore–Penrose, rank, idempotency) | S1.9 |
| **LM-5** | Hat/projection matrix, residuals, quadratic forms, linear-hypothesis testing | S1.8, S1.13 |
| **LM-6** | Correlated observations, weighted LS / GLS | S1.7 |
| **LM-7** | One-way classification & ANOVA | S1.11, S1.13 |
| **LM-8** | Two-way classification & ANOVA (df, interaction, computation) | S1.11, S1.13 |
| **LM-9** | Fixed / random / mixed effects, variance components | S1.12 |
| **LM-10** | Multiple comparison tests | S1.14 |
| **LM-11** | Regression specifics, design matrix, multicollinearity, scale change | S1.1, S1.8 |

---

## 3. Weightage matrix

### 3.1 Part-level share

| Year | Linear Models | Inference | Official Stats | Question numbers carrying Linear Models |
|---|---|---|---|---|
| 2018 | **15** | 45 | 20 | Q1–15 |
| 2019 | **14** | 51 | 15 | Q1–5, 21–23, 25–30 |
| 2020 | **10** | 50 | 20 | Q41–50 |
| 2021 | **10** | 50 | 20 | Q1–10 |
| 2022 | **20** | 40 | 20 | Q1–10, 21–30 |
| 2023 | **15** | 50 | 15 | Q51–65 |
| 2024 | **10** | 50 | 20 | Q51–60 |
| 2025 | **15** | 50 | 15 | Q51–65 |
| 2026 | **10** | 50 | 20 | Q51–60 |
| **Total** | **119 (16.5%)** | 436 (60.6%) | 165 (22.9%) | |

**Structural read.** From 2020 onward the paper stabilises into blocks: Inference occupies Q1–50, Linear Models Q51–65, Official Statistics the tail — with 2022 the outlier (Linear Models front-loaded at Q1–30). 2018 and 2019 predate this convention. **Expect 10–15 Linear Models items, almost certainly in the Q51–65 band.**

### 3.2 Micro-topic frequency

| Code | Micro-topic | '18 | '19 | '20 | '21 | '22 | '23 | '24 | '25 | '26 | **Total** | Share |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LM-4 | Generalized inverse | 3 | 1 | – | 2 | 3 | 3 | 6 | 1 | 3 | **22** | 18.5% |
| LM-2 | BLUE / Gauss–Markov / LSE | 1 | 2 | – | 2 | 5 | 2 | – | 5 | 2 | **19** | 16.0% |
| LM-8 | Two-way ANOVA | 2 | – | 4 | – | 5 | 2 | – | 2 | – | **15** | 12.6% |
| LM-7 | One-way ANOVA | 2 | 1 | 4 | 1 | 2 | 1 | 3 | – | – | **14** | 11.8% |
| LM-5 | Hat matrix / quadratic forms | – | 3 | 1 | 1 | 3 | 4 | – | – | – | **12** | 10.1% |
| LM-1 | Estimable functions / spaces | 3 | 2 | – | 3 | – | – | – | 1 | 2 | **11** | 9.2% |
| LM-3 | Variances of LSEs / error variance | 1 | 2 | – | – | 1 | 3 | – | – | 1 | **8** | 6.7% |
| LM-11 | Regression / design / multicollinearity | 1 | 2 | – | – | – | – | – | 1 | 2 | **6** | 5.0% |
| LM-6 | Correlated obs / GLS | – | – | 1 | – | – | – | – | 3 | – | **4** | 3.4% |
| LM-9 | Fixed / random / mixed effects | – | 1 | – | – | 1 | – | 1 | 1 | – | **4** | 3.4% |
| LM-10 | Multiple comparisons | 2 | – | – | 1 | – | – | – | 1 | – | **4** | 3.4% |

**The three-quarters rule.** LM-4 + LM-2 + LM-8 + LM-7 + LM-5 + LM-1 = **93 of 119 (78%)**. Master these six and the part is effectively covered.

---

## 4. Question bank by micro-topic

---

### LM-1 · Estimable functions; estimation and error space
*11 items · S1.3, S1.4 · appeared in 6 of 9 years*

- **[2018·Q1]** $Y_1=\beta_1+\beta_2+e_1,\ Y_2=\beta_1+\beta_3+e_2,\ Y_3=\beta_1+\beta_2+e_3$. Find the condition on $(\lambda_1,\lambda_2,\lambda_3)$ for $\lambda_1\beta_1+\lambda_2\beta_2+\lambda_3\beta_3$ to be estimable. *(Options are the three cyclic sum relations plus "$=C$".)*
- **[2018·Q5]** Two statements on $\mathbf Y=\mathbf X\boldsymbol\beta+\boldsymbol\varepsilon$: (1) $\mathbf X$ full rank $\Rightarrow$ all linear parametric functions estimable; (2) every estimable LPF has the form $\mathbf c'\mathbf X\boldsymbol\beta$.
- **[2018·Q13]** $E(Y_{ij})=\mu_i$, $\operatorname{var}(Y_{ij})=\sigma^2$, $j=1..n_i$, $i=1..p$. (1) Any LPF estimable? (2) Is $\hat\mu_i=\sum_j Y_{ij}/n_i$?
- **[2019·Q1]** $y_1..y_4$ independent, $E(y_1)=E(y_2)=\theta_1+\theta_2$, $E(y_3)=E(y_4)=\theta_1+\theta_3$, $V(y_i)=\sigma^2$. Which of $l_1=l_2+l_3$ / $l_2=l_1+l_3$ / $l_3=l_1+l_2$ makes $l'\theta$ estimable?
- **[2019·Q27]** $\mathbf y=\mathbf X\boldsymbol\beta+\mathbf u$, $\hat\beta$ solving $X'X\hat\beta=X'y$. Statements: (1) $C'\beta$ estimable $\Rightarrow C'\hat\beta$ is BLUE; (2) all LPFs estimable iff $\operatorname{Rank}(X)>p$; (3) $H_0:L\beta=\zeta$ testable via Snedecor's $F$.
- **[2021·Q1]** $y_{ij}=\mu+\alpha_i+\beta_j+\varepsilon_{ij}$, $i,j=1,2$, $\beta'=(\mu,\alpha_1,\alpha_2,\beta_1,\beta_2)$. Which $\lambda'$ makes $\lambda'\beta$ **not** estimable? Candidates: $(1,1,0,1,0)$, $(0,0,0,-1,1)$, $(0,-1,1,0,0)$, $(1,1,1,1,1)$.
- **[2021·Q2]** $y_{ij}=\mu+\tau_i+\varepsilon_{ij}$, $i,j=1,2$. Is $\mu+\tau_1$ estimable? Is $\tau_1+\tau_2$ estimable?
- **[2021·Q9]** Two-way, one obs/cell, $y_{ij}=\mu+\alpha_i+\beta_j+e_{ij}$. Which is estimable: $\alpha$, $\beta$, $\alpha_i-\alpha_u$, or $\alpha_1+\alpha_2$? *(also LM-8)*
- **[2025·Q65]** $E(Y_{ij})=\alpha_i+\beta_j$, $i,j=1,2$, uncorrelated, common $\sigma^2$. $l_1\alpha_1+l_2\alpha_2+m_1\beta_1+m_2\beta_2$ estimable iff — options: $l_1-l_2=m_1-m_2$, $l_1+l_2=m_1+m_2$, sum $=0$, sum $=1$.
- **[2026·Q59]** $\lambda'\beta$ estimable, $X$ is $n\times p$ of rank $k<p\le n$; $\hat\beta$ any solution of normal equations, $\mathbf r$ any solution of $X'X\mathbf r=\lambda$. (I) $\lambda'\hat\beta=\mathbf r'X'\mathbf Y$ always; (II) both are invariant to the choice of $\hat\beta$ or $\mathbf r$.
- **[2026·Q60]** Gauss–Markov model with $r(X)=r<k$. The set $\{\boldsymbol l\in\mathbb R^n: E(\boldsymbol l'\mathbf Y)\equiv 0\}$ — is it a subspace, and of what dimension? *(This is the only direct hit on **error space**, S1.4, in nine years.)*

**Results ledger.**
- $\lambda'\beta$ is estimable $\iff$ $\lambda\in\mathcal R(X')$ $\iff$ $\lambda'=\mathbf c'X$ for some $\mathbf c$ $\iff$ $\lambda'(X'X)^-X'X=\lambda'$.
- Number of linearly independent estimable functions $=\operatorname{rank}(X)$.
- Full rank $\Rightarrow$ every LPF estimable; the converse condition is $\operatorname{rank}(X)=p$, **not** $>p$ (a stock distractor, see 2019·Q27).
- In one-way $y_{ij}=\mu+\tau_i+e_{ij}$: $\mu+\tau_i$ and all contrasts $\sum c_i\tau_i$ with $\sum c_i=0$ are estimable; $\tau_i$ alone and $\sum\tau_i$ are not.
- In two-way additive models: $\mu+\alpha_i+\beta_j$, $\alpha_i-\alpha_u$, $\beta_j-\beta_v$ estimable; individual effects are not.
- **Estimation space** $=\mathcal C(X)$, dimension $r$. **Error space** $=\mathcal C(X)^\perp$, dimension $n-r$ — this is exactly the set in 2026·Q60.

---

### LM-2 · BLUE, Gauss–Markov, normal equations, least square estimators
*19 items · S1.1, S1.2, S1.5, S1.8 · the single most repeated *computational* cluster*

**The "nine independent observations" family — asked in four separate years with permuted signs:**

- **[2021·Q3]** $X_i,Y_i,Z_i$ ($i=1,2,3$), common $\sigma^2$, $E(X_i)=\theta_1$, $E(Y_i)=\theta_2$, $E(Z_i)=\theta_1-\theta_2$. With $X=\sum X_i$ etc., find BLUE of $\theta_1$.
- **[2022·Q6]** Same setup. Compare $V(\hat\theta_1)$ and $V(\hat\theta_2)$.
- **[2022·Q24–25]** Twelve observations ($i=1..4$), $E(Z_i)=\theta_1+\theta_2$. BLUE of $\theta_1$ (Q24) and $\theta_2$ (Q25).
- **[2023·Q56–57]** Nine observations, $E(Z_i)=\theta_1-\theta_2$. BLUE of $\theta_1$ (Q56) and $\theta_2$ (Q57).
- **[2025·Q61–62]** Nine observations, $E(X_i)=\theta_1-\theta_2$, $E(Y_i)=\theta_2$, $E(Z_i)=\theta_1+\theta_2$. BLUE of $\theta_1$ (Q61) and $\theta_2$ (Q62).

**The "uncorrelated BLUEs" family:**

- **[2019·Q29]** $E(y_1)=2\beta_1+\beta_2$, $E(y_2)=\beta_1-\beta_2$, $E(y_3)=\beta_1+\alpha\beta_2$. Value of $\alpha$ making the BLUEs of $\beta_1,\beta_2$ uncorrelated.
- **[2025·Q59]** **Verbatim repeat of 2019·Q29** — identical model, identical ask, identical option set $\{2,1,-1,-2\}$.
- **[2026·Q55]** Same idea, new coefficients: $E(Y_1)=\beta_1+\beta_2$, $E(Y_2)=\beta_1-\alpha\beta_2$, $E(Y_3)=2\beta_1-\beta_2$.

**Remaining LM-2 items:**

- **[2018·Q2]** $y_i=\beta_0+\beta_1x_i+e_i$ with $x=(-1,0,1)$. BLUE of $(\beta_0,\beta_1)$.
- **[2019·Q25]** Three statements: $V(\hat\beta)=\sigma^2(X'X)^{-1}$; $\hat\beta$ is BLUE; residual mean square is unbiased for $\sigma^2$.
- **[2021·Q5]** $Y_1=A+B+C+D+e_1$, $Y_2=A+C-B-D+e_2$, $Y_3=A+B-C-D+e_3$, $Y_4=A+D-B-C+e_4$. Compute $(X'X)^{-1}$. *(Orthogonal design — columns are $\pm1$ Hadamard-type.)*
- **[2022·Q2]** $Y_i\sim\text{Poisson}(\theta x_i)$ independent. Give the **least squares** estimator and the **MLE** of $\theta$, in that order. *(Tests that LS $=\sum X_iY_i/\sum X_i^2$ while MLE $=\sum Y_i/\sum X_i$ — they differ.)*
- **[2022·Q29]** Gauss–Markov: $E(y_1)=\beta_1-\beta_3$, $E(y_2)=2\beta_1$, $E(y_3)=\beta_1+\beta_2$. Verify (1) $\hat\beta_1=\tfrac16(y_1+2y_2+y_3)$, (2) $\hat\beta_2=\tfrac12(y_1+y_3)$.
- **[2025·Q57]** (I) The observational equation $\mathbf Y=\mathbf X\boldsymbol\beta$ is always consistent; (II) the normal equation $X'X\beta=X'Y$ always admits a solution.
- **[2025·Q60]** $Y_i=\alpha+(-1)^i\beta+u_i$, $i=1..2n$. Verify $\hat\alpha=\frac1{2n}\sum Y_i$ and $\hat\beta=\frac1{2n}\left[\sum_{i=1}^n Y_{2i}-\sum_{i=1}^n Y_{2i-1}\right]$.
- **[2026·Q56]** $E(Y_1)=\beta_1$, $E(Y_2)=\beta_2$, $E(Y_3)=\beta_1+\beta_2$, uncorrelated equal variance. BLUE of $\beta_1+\beta_2$. *(Answer is **not** $Y_3$ — that is the trap.)*

**Results ledger.**
- Gauss–Markov: for estimable $\lambda'\beta$, the BLUE is $\lambda'\hat\beta$ where $\hat\beta$ is **any** solution of $X'X\hat\beta=X'Y$; it is unique even when $\hat\beta$ is not.
- Normal equations $X'X\beta=X'Y$ are **always** consistent (since $\mathcal C(X'Y)\subseteq\mathcal C(X'X)$), regardless of rank; the observational equation $Y=X\beta$ generally is not.
- $\operatorname{Cov}(\hat\beta)=\sigma^2(X'X)^{-1}$; BLUEs of $\beta_i,\beta_j$ are uncorrelated $\iff$ the $(i,j)$ off-diagonal of $(X'X)^{-1}$ is zero $\iff$ the corresponding columns of $X$ are orthogonal. **This single fact answers 2019·Q29, 2025·Q59 and 2026·Q55.**
- Standard drill for the nine-observation family: write $X$ as three blocks of three rows, form $X'X=3\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ (for $E(Z)=\theta_1-\theta_2$), invert to $\frac{1}{9}\begin{pmatrix}2&1\\1&2\end{pmatrix}$, then $\hat\theta=(X'X)^{-1}X'Y$.

---

### LM-3 · Variances and covariances of LSEs; estimation of error variance
*8 items · S1.6, S1.10*

- **[2018·Q9]** $y_i=\beta_0+\beta_1x_i+\mu_i$, $i=1..10$, errors iid mean 0 variance 1, $\sum x_i=50$, $\sum x_i^2=260$. Find $\operatorname{Cov}(\hat\beta_0,\hat\beta_1)$.
- **[2019·Q4]** $Y_1..Y_4$ uncorrelated, $E(Y_1)=E(Y_2)=\beta_1+\beta_2+\beta_3$, $E(Y_3)=E(Y_4)=\beta_1-\beta_2$, $V=\sigma^2$. With $e_1=\tfrac1{\sqrt2}(Y_1-Y_2)$, $e_2=\tfrac1{\sqrt2}(Y_3-Y_4)$, find the unbiased estimator of $\sigma^2$.
- **[2026·Q54]** **Verbatim repeat of 2019·Q4** — same model, same $e_1,e_2$, same options (only the option ordering differs).
- **[2019·Q28]** $n=5$, $\sum x_i=0$, $\sum y_i=5$, $\sum x_iy_i=12$, $\sum x_i^2=10$, $\sum y_i^2=20$. Estimated error variance.
- **[2022·Q30]** For the Gauss–Markov model of Q29 ($E(y_1)=\beta_1-\beta_3$, $E(y_2)=2\beta_1$, $E(y_3)=\beta_1+\beta_2$), give the residual sum of squares.
- **[2023·Q58]** Simple linear regression: $\operatorname{Var}(\hat\beta_0)$.
- **[2023·Q59]** $\operatorname{Cov}(\hat\beta_0,\hat\beta_1)$.
- **[2023·Q60]** $\operatorname{Var}(\hat\beta_1)$.

**Results ledger.**
- SLR: $\operatorname{Var}(\hat\beta_1)=\dfrac{\sigma^2}{S_{xx}}$, $\operatorname{Var}(\hat\beta_0)=\sigma^2\!\left(\dfrac1n+\dfrac{\bar x^2}{S_{xx}}\right)$, $\operatorname{Cov}(\hat\beta_0,\hat\beta_1)=-\dfrac{\bar x\,\sigma^2}{S_{xx}}$. The **negative sign** is the whole point of 2023·Q59 and of 2018·Q9.
- $\operatorname{Cov}(\hat\beta_0,\hat\beta_1)=0\iff\bar x=0$.
- $\hat\sigma^2=\text{RSS}/(n-r)$ where $r=\operatorname{rank}(X)$, and $E(\hat\sigma^2)=\sigma^2$.
- The $e_1,e_2$ trick (2019·Q4 / 2026·Q54): each $e_k$ is a normalised contrast lying in the error space, so $E(e_k^2)=\sigma^2$; averaging two such gives an unbiased estimator with 2 df.

---

### LM-4 · Generalized inverse of a matrix
*22 items — the highest-frequency micro-topic in the whole part · S1.9 · appeared in 8 of 9 years*

**Order / rank / trace properties:**

- **[2018·Q14]** $A$ is $n\times p$, $A^-$ its g-inverse. Which hold: (1) order of $A^-$ is $p\times n$; (2) $A^-A$ and $AA^-$ symmetric; (3) rank$(A)=n\Rightarrow A^-=(A'A)^{-1}A'$; (4) $A$ non-singular $\Rightarrow A^{-1}=A^-$.
- **[2021·Q10]** $A$ is $4\times7$. Order of any g-inverse.
- **[2023·Q62]** $A$ is $n\times p$. Order of any g-inverse.
- **[2023·Q64]** $A$ is $n\times p$ of rank $r$. (1) $\operatorname{rank}(AA^-)=\operatorname{rank}(A^-A)=\operatorname{rank}(A)=r$; (2) $(A^-)'$ is a g-inverse of $A'$.
- **[2024·Q52]** (I) $\operatorname{Trace}(AA^-)=\operatorname{Trace}(A^-A)$; (II) $\operatorname{Trace}(AA^-)\ne r$.
- **[2026·Q53]** (I) rank of a g-inverse necessarily equals rank of $A$; (II) it equals rank of $A$ iff it is a **reflexive** inverse.

**Idempotency and $H=A^-A$:**

- **[2019·Q23]** $A^-A=H$: (1) $H$ idempotent; (2) $AH=A$; (3) $\operatorname{rank}(A)=\operatorname{rank}(H)=\operatorname{trace}(H)$.
- **[2022·Q3]** $H=AA^-$, $T=A^-A$ — which is idempotent?
- **[2024·Q55]** $A^-A=H$: (I) $AH=A$ and $HA^-=A^-$; (II) $\operatorname{Trace}(H)=\operatorname{Rank}(H)$.
- **[2025·Q55]** (I) $A$ idempotent $\Rightarrow\operatorname{rank}(A)=\operatorname{Trace}(A)$; (II) there exists $A^-$ with $AA^-A=A$ and $\operatorname{trace}(A^-A)=\operatorname{rank}(A)$.

**Symmetry (asked three times, essentially verbatim):**

- **[2021·Q7]** Symmetric $X$: (1) g-inverse not necessarily symmetric; (2) a symmetric inverse can always be determined.
- **[2023·Q63]** **Same question**, symmetric matrix $\mathbf A$.
- **[2024·Q51]** **Same question again**, symmetric matrix $A$.

**Composite identities and Moore–Penrose:**

- **[2022·Q4]** (1) $(A')^-=(A^-)'$; (2) $A^-=(A'A)^-A'$; (3) $\operatorname{Rank}(A^-A)=\operatorname{rank}(AA^-)$.
- **[2022·Q5]** Moore–Penrose $A^+$: (1) $A^+=(A'A)^+A'$; (2) $A^+$ is unique.
- **[2018·Q4]** (1) The g-inverse of a matrix, if it exists, is unique; (2) multicollinearity can be tackled by increasing sample size. *(also LM-11)*

**Numerical / applied:**

- **[2018·Q10]** $A=\begin{pmatrix}3&2&2\\1&0&1\\4&2&3\end{pmatrix}$; three candidate matrices $P,Q,R$ given — identify which fail to be g-inverses. *(Check $AXA=A$ directly.)*
- **[2024·Q54]** $A=\begin{pmatrix}2&2&3\\1&0&1\\3&2&4\end{pmatrix}$: count correct among $\operatorname{Rank}(A)=2$, $\operatorname{Trace}(A^-A)=2$, $\operatorname{Trace}(AA^-)=\operatorname{Trace}(A^-A)$, $\operatorname{Trace}(A)=6$.
- **[2024·Q56]** $A=\begin{pmatrix}4&2&2\\2&2&0\\2&0&2\end{pmatrix}$, $B=\operatorname{diag}(0,\tfrac12,\tfrac12)$: count correct among $ABA=A$, $BA$ idempotent, $\operatorname{Rank}(A)\ne\operatorname{Rank}(BA)$, $\operatorname{Rank}(BA)=\operatorname{Trace}(BA)$.
- **[2024·Q53]** $Ax=c$ has at least one solution: (I) $\operatorname{Rank}(A)=\operatorname{Rank}(A,c)$; (II) $AA^-c=c$.
- **[2026·Q51]** $A$ has 6 columns, rank 3, $y\ne0$. Number of linearly independent solutions of the consistent system $Ax=y$.
- **[2026·Q52]** Under $\mathbf Y=X\beta+\varepsilon$ with $G$ a g-inverse of $X'X$: (I) $XGX'$ is invariant to $G$; (II) $XGX'$ is symmetric only when $G$ is symmetric.

**Results ledger.**
- $A^-$ satisfies $AA^-A=A$. If $A$ is $n\times p$ then $A^-$ is $p\times n$.
- $A^-$ is **not unique** unless $A$ is square and non-singular (then $A^-=A^{-1}$). Moore–Penrose $A^+$ (all four Penrose conditions) **is** unique.
- $H=A^-A$ and $AA^-$ are idempotent; $\operatorname{rank}(H)=\operatorname{trace}(H)=\operatorname{rank}(A)$; $AH=A$, $HA^-=A^-$.
- $A^-A$ and $AA^-$ are idempotent but **need not be symmetric** — symmetry is an extra Penrose condition.
- For symmetric $A$, a g-inverse need not be symmetric, but a symmetric one always exists (take $\tfrac12(A^-+(A^-)')$).
- $\operatorname{rank}(A^-)\ge\operatorname{rank}(A)$, with equality iff $A^-$ is **reflexive** ($A^-AA^-=A^-$).
- $XGX'$ (the projection onto $\mathcal C(X)$) is invariant to the choice of $G$ and is always symmetric — 2026·Q52 is testing precisely this invariance result.
- Consistency: $Ax=c$ solvable $\iff\operatorname{rank}(A)=\operatorname{rank}(A|c)\iff AA^-c=c$. General solution $x=A^-c+(I-A^-A)z$; the solution set has $p-\operatorname{rank}(A)$ free directions, plus the particular solution.

---

### LM-5 · Hat/projection matrix, residuals, quadratic forms, linear hypotheses
*12 items · S1.8, S1.13*

- **[2019·Q2]** $y\sim N(X\beta,\sigma^2I)$, $H=X(X'X)^{-1}X'$, $e=y-\hat y$. Which is **not** correct: $\operatorname{Rank}(H)=p$ / $0<h_{ii}<1$ / $V(\hat y)=\sigma^2H$ / $\operatorname{Cov}(e_i,e_j)=\sigma^2h_{ij}$.
- **[2019·Q21]** (1) $V(e)=V(y)+V(\hat y)$; (2) $\operatorname{Cov}(y,\hat y)=\sigma^2H$; (3) $V(e)=\sigma^2(I-H)$.
- **[2019·Q22]** Gauss–Markov, $\operatorname{rank}(X)=r$, $m$ estimable constraints. (1) $(\text{RSS}_1-\text{RSS})/\sigma^2$ non-central $\chi^2_m$; (2) $\text{RSS}_1/\text{RSS}$ central $F_{m,n-r}$; (3) $(\text{RSS}_1-\text{RSS})$ and RSS independent.
- **[2020·Q50]** $P=X(X'X)^-X'$. Evaluate $(I_n-P)X$.
- **[2021·Q4]** $\varepsilon\sim N(0,\sigma^2I)$, $e=Y-\hat Y$. Distribution of $e'e/\sigma^2$.
- **[2022·Q1]** Distribution of $\hat Y$ under $\varepsilon\sim N(0,\sigma^2I)$.
- **[2022·Q21]** $P=X(X'X)^{-1}X'=[p_{ij}]$. Range of $p_{ii}$.
- **[2022·Q22]** Correlation coefficient between residuals $e_i$ and $e_j$.
- **[2023·Q51]** $\mathbf Y\sim N_3(\mu,\Sigma)$, $\mu'=(3,-2,1)$, $\Sigma=\operatorname{diag}(2,4,3)$. Distribution of $\mathbf Y'\Sigma^{-1}\mathbf Y$. *(Non-central $\chi^2_3$; compute $\lambda=\tfrac12\mu'\Sigma^{-1}\mu$ — note the options differ by exactly a factor of 2, testing the non-centrality convention.)*
- **[2023·Q53]** $\mathbf Y\sim N_3(\mathbf 0,I_3)$, $\mathbf A=\tfrac13\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}$. Find $\operatorname{Var}(\mathbf Y'\mathbf A\mathbf Y)$.
- **[2023·Q54]** $\mathbf Y\sim N_3(\mathbf 0,I_3)$, $\mathbf A$ with entries $\tfrac13,0,-\tfrac{\sqrt2}3;\,0,0,0;\,-\tfrac{\sqrt2}3,0,\tfrac23$. Distribution of $\mathbf Y'\mathbf A\mathbf Y$.
- **[2023·Q55]** $Y_i$ iid $N(0,1)$; $\mathbf Y'A_1\mathbf Y$ and $\mathbf Y'A_2\mathbf Y$ independently chi-square. What must $A_1A_2$ equal?

**Results ledger.**
- $H=X(X'X)^{-1}X'$ is symmetric idempotent, $\operatorname{rank}(H)=\operatorname{trace}(H)=p$ (full rank), $0\le h_{ii}\le1$, $\sum h_{ii}=p$.
- $\hat y=Hy\sim N(X\beta,\sigma^2H)$; $e=(I-H)y\sim N(0,\sigma^2(I-H))$; so $\operatorname{Cov}(e_i,e_j)=-\sigma^2h_{ij}$ — the **minus sign** is the trap in 2019·Q2 and 2022·Q22.
- $\operatorname{Corr}(e_i,e_j)=-p_{ij}/\sqrt{(1-p_{ii})(1-p_{jj})}$.
- $(I-P)X=\mathbf 0$ — the residual-maker annihilates the column space.
- $e'e/\sigma^2\sim\chi^2_{n-r}$, independent of $\hat\beta$.
- **Cochran/Craig:** $Y\sim N_n(\mu,I)$. $Y'AY\sim\chi^2$ iff $A$ idempotent, with df $=\operatorname{rank}(A)=\operatorname{trace}(A)$ and non-centrality $\tfrac12\mu'A\mu$. Two quadratic forms are independent iff $A_1A_2=\mathbf 0$.
- $\operatorname{Var}(Y'AY)=2\operatorname{tr}(A\Sigma A\Sigma)+4\mu'A\Sigma A\mu$; for $\mu=0,\Sigma=I$ this is $2\operatorname{tr}(A^2)$, and if $A$ is idempotent, $=2\operatorname{rank}(A)$.
- Linear hypothesis: $F=\dfrac{(\text{RSS}_H-\text{RSS})/m}{\text{RSS}/(n-r)}\sim F_{m,\,n-r}$ under $H_0$; the **ratio** $\text{RSS}_1/\text{RSS}$ (2019·Q22 statement 2) is not itself $F$.

---

### LM-6 · Estimation with correlated observations / weighted least squares
*4 items · S1.7 · thinnest coverage of any explicit syllabus clause*

- **[2020·Q48]** $y_i\sim N(\mu,\sigma^2/x_i^2)$ independently, $x_i$ unequal and non-zero. Least squares (i.e. weighted) estimate of $\mu$.
- **[2025·Q58]** Model-I: $D(\varepsilon)=\sigma^2I$. Model-II: $E(Y)=X\beta$, $D(Y)=\sigma^2G$, $|G|\ne0$, $G$ known. Which transformation reduces II to I? Options include $Z=G^{-1/2}Y$ and two malformed alternatives.
- **[2025·Q63]** $Y_i=i\beta+u_i$, $i=1,2,3$, $E(u_i)=0$, $V(u_i)=i\sigma^2$. BLUE of $\beta$.
- **[2025·Q64]** Same model — variance of that BLUE.

**Results ledger.**
- GLS: $\hat\beta_{GLS}=(X'G^{-1}X)^{-1}X'G^{-1}Y$, $\operatorname{Cov}=\sigma^2(X'G^{-1}X)^{-1}$. Obtained by transforming $Z=G^{-1/2}Y$, $W=G^{-1/2}X$, then applying OLS.
- Weighted LS with $V(y_i)=\sigma^2/w_i$ gives $\hat\mu=\sum w_iy_i/\sum w_i$; with $w_i=x_i^2$ this is $\sum x_i^2y_i/\sum x_i^2$ (2020·Q48).
- For $Y_i=i\beta+u_i$, $V(u_i)=i\sigma^2$: weights $1/i$, so $\hat\beta=\dfrac{\sum (i)(Y_i)/i}{\sum i^2/i}=\dfrac{\sum Y_i}{\sum i}=\dfrac{Y_1+Y_2+Y_3}{6}$, with variance $\sigma^2/6$.
- **Weakness flag.** Four items in nine years, three of them in a single 2025 block. High risk of a fresh GLS/Aitken item; the theory is small and worth owning completely.

---

### LM-7 · One-way classification & ANOVA
*14 items · S1.11, S1.13*

**Table-completion drills:**

- **[2019·Q5]** ANOVA table: Treatment df $w$, SS $x$, MSS $y$, $F=5.22$; Error df 12, SS $z$, MSS 25; Total df 14, SS 561. Find $w,x,y,z$.
- **[2023·Q65]** **Verbatim numerical repeat of 2019·Q5** (same 5.22, 12, 25, 14, 561; labels changed to $m,p,q,r$).
- **[2020·Q41]** Fish weights from three lakes; state the null hypothesis.
- **[2020·Q42]** Given $F_{crit}=4.2565$ at 5%, choose the correct interpretation.
- **[2020·Q43]** Compute $F$ from Treatment SS $=17.04$, Error df $=9$, Total SS $=35.04$, Total df $=11$.
- **[2020·Q44]** Pooled standard deviation if all three lakes' observations are combined.
- **[2022·Q23]** Three packing methods, 7 observations each; SS(Treatments) $=147.3456$, SS(Total) $=202.3126$. Find $F$.
- **[2021·Q8]** Five methods, six observations per method. Error df.
- **[2022·Q26]** One-way $Y_{ij}=\mu+\alpha_i+e_{ij}$, $N=\sum n_i$. Values of $u$ (treatment df) and $v$ (error df).

**Conceptual:**

- **[2018·Q7]** As chance variability decreases, what happens to the ANOVA $F$-statistic?
- **[2018·Q8]** When $k$ population means truly differ, for a significant $F$ the average error deviation is — relative to average treatment deviations?
- **[2024·Q57]** ANOVA: (I) tests equality of several means; (II) tests equality of several variances; (III) origin in agricultural experiments.
- **[2024·Q58]** Invariance: SS and variance ratio under change of origin and change of scale.
- **[2024·Q60]** Assumptions for validity of the $F$-test: independence, normality, **unequal** variances, additivity.

**Results ledger.**
- One-way with $k$ groups, $N$ total: df $=(k-1,\,N-k,\,N-1)$. Balanced $k$ groups of $n$: error df $=k(n-1)$.
- $F=\dfrac{\text{MST}}{\text{MSE}}=\dfrac{\text{SST}/(k-1)}{\text{SSE}/(N-k)}$; rejection $\Rightarrow$ "at least one mean differs," never "all differ."
- Total SS pooled gives $s^2_{pooled}=\text{SS(Total)}/(N-1)$ — 2020·Q44 is exactly this.
- Sums of squares are **invariant to change of origin** but scale by $c^2$ under change of scale; the **variance ratio $F$ is invariant to both**. (2024·Q58.)
- $F$-test assumptions: independence, normality, **homoscedasticity**, additivity of effects. "Variances may differ" is always a wrong option.

---

### LM-8 · Two-way classification & ANOVA
*15 items · S1.11, S1.13 — the syllabus explicitly restricts ANOVA to two-way, so this is a guaranteed-appearance zone*

**Degrees of freedom (asked in some form in 6 of 9 years):**

- **[2018·Q6]** 6 rows, 4 columns, 3 observations per cell. Interaction df and residual df.
- **[2022·Q7]** Factor A at 5 levels, B at 6 levels, 4 observations per cell. Error df.
- **[2022·Q27]** $Y_{ijk}=\mu+\alpha_i+\beta_j+\gamma_{ij}+e_{ijk}$, $i=1..p$, $j=1..q$, $k=1..r$. Fill $t,u,v,w$ in the df column.
- **[2023·Q61]** Two-way, one observation per cell, $p$ and $q$ levels. Error df.
- **[2025·Q51]** Two-way, $m$ observations per cell, $p$ and $q$ levels. Error df.
- **[2020·Q49]** Two-way, **one observation per cell but interaction present**, $i=1..5$, $j=1..4$. Error df. *(The point: it is 0 — interaction is inseparable from error.)*
- **[2022·Q28]** RBD, 4 blocks, 5 treatments, **one missing observation**. Error df.
- **[2018·Q15]** Two-way with $r$ obs/cell and interaction: total number of parameters in the model.

**Computation:**

- **[2020·Q45]** Three instructors × three methods, 12 students each; df for methods, instructors, interaction, error.
- **[2020·Q46]** Same table: mean sums of squares (SS $=162, 90, 600, 900$).
- **[2020·Q47]** Same table: the three $F$-ratios.
- **[2022·Q9]** Cheese moisture, factor A = method (2 levels), B = type (3 levels), 2 pieces per cell; SSA $=0.114075$, SSB $=25.900117$, SSE $=0.661950$. Mean squares for method and error.
- **[2022·Q10]** Same data: $F$ for factors A and B.
- **[2023·Q52]** 3 methods × 5 analysts, one observation each; TSS $=97.6$, SSA (analysts) $=4.27$, SSB (methods) $=79.6$. Find MSE.
- **[2025·Q56]** ANOVA table with Treatment (df 4, SS 16.4, $F$ 2.05), Variety (df $x$, SS 28, $F$ 7), Error (df $y$, SS $z$), Total df 15. Find $x,y,z$.
- **[2021·Q9]** *(cross-listed from LM-1)* Two-way one obs/cell — which parameter is estimable.

**Results ledger.**

| Layout | $\alpha$ | $\beta$ | Interaction | Error | Total |
|---|---|---|---|---|---|
| Two-way, 1 obs/cell, no interaction | $p-1$ | $q-1$ | — | $(p-1)(q-1)$ | $pq-1$ |
| Two-way, 1 obs/cell, interaction in model | $p-1$ | $q-1$ | $(p-1)(q-1)$ | **0** | $pq-1$ |
| Two-way, $r$ obs/cell, with interaction | $p-1$ | $q-1$ | $(p-1)(q-1)$ | $pq(r-1)$ | $pqr-1$ |

- RBD with $b$ blocks, $v$ treatments: error df $=(b-1)(v-1)$; **each missing value costs one further df**, so 4 blocks × 5 treatments with one missing gives $(3)(4)-1=11$.
- Parameters in $y_{ijk}=\mu+\alpha_i+\beta_j+\gamma_{ij}+e_{ijk}$: $1+p+q+pq$ before constraints (2018·Q15).
- Working order for table completion: fill df first, then SS by subtraction, then MSS $=$ SS/df, then $F=$ MSS/MSE.

---

### LM-9 · Fixed, random and mixed effects models; variance components
*4 items · S1.12 — explicitly in the syllabus but severely under-asked*

- **[2019·Q30]** GML $E(y_i)=\sum\alpha_{ij}\beta_j$, $V(y_i)=\sigma^2$, uncorrelated. (1) Linearly independent $\alpha$'s with $p\le n$ $\Rightarrow$ full-rank model; (2) all $\beta$'s fixed constants $\Rightarrow$ fixed-effect model.
- **[2022·Q8]** Two-way **random effect** model, $p$ and $q$ levels, $m$ obs/cell. Estimate of the variance component $\hat\sigma_A^2$. Options: $\frac{MSA-MS(AB)}{qm}$, $\frac{MSB-MS(AB)}{pm}$, etc.
- **[2024·Q59]** Two-way random effect model with $m$ obs/cell. For which of $H_{0(A\times B)}:\sigma^2_{ab}=0$, $H_{0A}:\sigma^2_a=0$, $H_{0B}:\sigma^2_b=0$ is **MSE** the correct denominator?
- **[2025·Q54]** RBD with $b$ blocks and $v$ treatments, both regarded as samples from larger populations. Which two-way model applies?

**Results ledger.**
- **Fixed** effects: levels are the entire population of interest, $\beta$'s are constants; inference is about the levels themselves. **Random**: levels are a sample; inference is about $\sigma^2_a$. **Mixed**: one of each.
- Expected mean squares (two-way random, $m$ per cell):
 $E(MSE)=\sigma^2$; $E(MS_{AB})=\sigma^2+m\sigma^2_{ab}$; $E(MSA)=\sigma^2+m\sigma^2_{ab}+qm\sigma^2_a$; $E(MSB)=\sigma^2+m\sigma^2_{ab}+pm\sigma^2_b$.
- Hence $\hat\sigma^2_a=\dfrac{MSA-MS_{AB}}{qm}$, $\hat\sigma^2_b=\dfrac{MSB-MS_{AB}}{pm}$, $\hat\sigma^2_{ab}=\dfrac{MS_{AB}-MSE}{m}$.
- **The critical asymmetry (2024·Q59):** in the *random* model the main-effect $F$'s use $MS_{AB}$ as denominator, **not** MSE; only the interaction test uses MSE. In the *fixed* model everything is tested against MSE. This single distinction is the most examinable point in LM-9.

---

### LM-10 · Multiple comparison tests (Tukey, Scheffé, SNK–Duncan)
*4 items · S1.14 — named explicitly in the syllabus, asked in only 3 of 9 years*

- **[2018·Q11]** (1) Scheffé's test covers all simple and complex contrasts; (2) Bartlett's test of multiple comparisons tests simple contrasts; (3) Tukey's test reduces Type-I error.
- **[2018·Q12]** (1) $t$-tests on all pairwise comparisons inflate Type-I error; (2) Scheffé requires equal group sizes; (3) Newman–Keuls reduces Type-II error risk.
- **[2021·Q6]** (1) Tukey's test reduces Type-I error; (2) Student–Newman–Keuls uses a stepwise procedure.
- **[2025·Q52]** Three machines with mean hourly output 32, 37, 27. Critical difference for significance at 5% is 5.62. Which pairs differ significantly? *(Compute $|32-37|=5$, $|32-27|=5$, $|37-27|=10$ and compare.)*

**Results ledger.**
- **Tukey HSD**: all pairwise comparisons, uses the studentised range $q$; controls family-wise Type-I error; requires (or works best with) equal $n$.
- **Scheffé**: all contrasts, simple **and** complex; most conservative; **does not require equal group sizes** — that is a standard false statement (2018·Q12 statement 2).
- **Student–Newman–Keuls / Duncan**: stepwise (step-down) procedures on ordered means; more powerful than Tukey, weaker Type-I control; Duncan's multiple-range test is the least conservative.
- **Bartlett's test is a test of homogeneity of variances, not a multiple-comparison procedure** — 2018·Q11 statement 2 is planted precisely to catch this.
- Applying ordinary $t$-tests to all $\binom k2$ pairs inflates the family-wise error rate — the entire motivation for the family.

---

### LM-11 · Regression specifics, design matrix, multicollinearity, transformations
*6 items*

- **[2018·Q3]** (1) If multicollinearity exists, $(X'X)^{-1}$ cannot be computed; (2) the method of least squares is a statistical method.
- **[2018·Q4]** *(cross-listed, LM-4)* (2) Multicollinearity can be tackled by increasing sample size.
- **[2019·Q3]** Fit (1) $y=\alpha+\beta x$ and (2) $y=\alpha+\beta x+\gamma x^2$; compare $E=\sum(y_i-\hat y_i)^2$ against $E^*$.
- **[2026·Q57]** **Same principle restated.** Model-I linear, Model-II quadratic; $P$ and $Q$ the respective residual sums of squares. (I) $P\ge Q$; (II) it can happen that $Q=0$ while $P>0$.
- **[2019·Q26]** $y_i=\alpha+\beta x_i+u_i$ with both variables in square metres; results re-expressed in square feet. Which of $\hat\alpha,\hat\beta$ change?
- **[2026·Q58]** Student I fits $Y$ on $X$ giving slope $\hat\alpha_1$; Student II fits $X$ on $Y$ giving slope $\hat\beta_1$. Which pair is possible: $(-0.3,0.6)$, $(0.7,3.5)$, $(0.5,-0.5)$, $(-1.5,-0.3)$?
- **[2025·Q53]** If the inner product of the columns of the design matrix $X$ is zero, the design is called — ?

**Results ledger.**
- Adding a regressor can never increase the residual sum of squares: nesting $\Rightarrow$ $\text{RSS}_{\text{small}}\ge\text{RSS}_{\text{large}}$. (2019·Q3, 2026·Q57.)
- Perfect (exact) multicollinearity makes $X'X$ singular; **near** multicollinearity leaves $(X'X)^{-1}$ computable but ill-conditioned. Increasing sample size can alleviate near-multicollinearity but not the exact case.
- Both regression slopes: $\hat\alpha_1=r\,s_y/s_x$ and $\hat\beta_1=r\,s_x/s_y$, so $\hat\alpha_1\hat\beta_1=r^2\in[0,1]$ and **both must have the same sign as $r$**. That two-condition filter resolves 2026·Q58 immediately.
- Under $x\to cx$, $y\to cy$ (both scaled by the same factor): $\hat\beta$ is unchanged, $\hat\alpha$ scales by $c$.
- Orthogonal columns of $X$ $\Rightarrow$ orthogonal design $\Rightarrow$ $X'X$ diagonal $\Rightarrow$ uncorrelated BLUEs and additive sums of squares.

---

## 5. Repeat radar — verbatim and near-verbatim clones

| Cluster | Items | Nature |
|---|---|---|
| Symmetric-matrix g-inverse | **2021·Q7 = 2023·Q63 = 2024·Q51** | Verbatim, three times in four years |
| Uncorrelated BLUEs, $E(y)=2\beta_1+\beta_2$ etc. | **2019·Q29 = 2025·Q59** | Verbatim, same options |
| Unbiased $\sigma^2$ from $e_1,e_2$ contrasts | **2019·Q4 = 2026·Q54** | Verbatim, option order shuffled |
| ANOVA table 5.22 / 12 / 25 / 14 / 561 | **2019·Q5 = 2023·Q65** | Verbatim numbers, relabelled |
| Nine independent obs, BLUE of $\theta_1,\theta_2$ | **2021·Q3, 2022·Q6, 2022·Q24–25, 2023·Q56–57, 2025·Q61–62** | Same skeleton, signs permuted — **7 items across 4 years** |
| Nested-model RSS comparison | **2019·Q3 ≈ 2026·Q57** | Same principle, reworded |
| $A^-A=H$ idempotency / trace / rank | **2019·Q23 ≈ 2024·Q55 ≈ 2025·Q55** | Rotating subsets of the same three facts |
| Two-way error df | **2018·Q6, 2022·Q7, 2022·Q27, 2023·Q61, 2025·Q51, 2020·Q49** | Same formula, varying layout |
| Order of a g-inverse | **2021·Q10 ≈ 2023·Q62** | Concrete vs symbolic version |

**Implication.** Roughly **one in four** Linear Models items in any given paper is a restatement of something already asked. Working the nine clusters above is the highest-return activity in this part.

---

## 6. Coverage gaps — syllabus clauses that are thin or untouched

| Clause | Status | Comment |
|---|---|---|
| **S1.4** Error and estimation space | **1 item in 9 years** (2026·Q60) | Named explicitly in the syllabus. Its first appearance was 2026 — treat as newly activated. Know $\dim(\text{estimation space})=r$, $\dim(\text{error space})=n-r$, and that the error space is $\mathcal C(X)^\perp$. |
| **S1.7** Correlated observations | **4 items**, three of them in 2025 | Aitken/GLS estimator, its variance, and the $G^{-1/2}$ transformation are the whole examinable content. |
| **S1.12** Fixed/random/mixed models | **4 items** | Under-asked relative to its explicit naming. Expected-mean-square table is the payload. |
| **S1.14** Multiple comparisons | **4 items**, none 2022–2024 | Named individuals (Tukey, Scheffé, SNK, Duncan) make this a "definitional recall" target; cheap to secure. |
| Bhattacharya-style bounds in the LM context | Never | Not in this part of the syllabus. |
| Analysis of covariance, contrasts orthogonality theory | Never | Outside the stated syllabus wording. |

**Never asked but syllabus-adjacent and plausible:** explicit computation of the estimation/error space dimensions for a stated design; Aitken's theorem statement; Scheffé's simultaneous confidence interval formula; expected mean squares in the **mixed** model (only fixed and random have been touched).

---

## 7. Preparation priority ranking

1. **Generalized inverse properties** (22 items) — rank, trace, idempotency, symmetry, uniqueness, reflexivity, consistency of $Ax=c$. Pure recall plus small numerical checks. Highest yield per hour in the entire part.
2. **BLUE computation drill** (19 items) — build $X$, form $X'X$, invert, apply. The nine-observation family alone has produced 7 items.
3. **Two-way / one-way df and table completion** (29 items combined) — mechanical, and never absent.
4. **Hat matrix and quadratic form distribution theory** (12 items) — memorise the $H$ property list and the Cochran/Craig conditions.
5. **Estimability conditions** (11 items) — the $\lambda'=c'X$ criterion answers nearly all of them.
6. **SLR variance/covariance formulae** (8 items) — three formulae, one sign.
7. **Random-effects expected mean squares** (4 items) — small, high-distinction content.
8. **Multiple comparison definitions** (4 items) — one page of recall.
9. **GLS/weighted least squares** (4 items) — small theory, rising frequency.

---

*Compiled from IES/ISS Statistics Paper II booklets: 2018 (YLO-B-DTSS), 2019 (XZH-S-STSS), 2020 (DFSE-D-STT), 2021 (SDT-S-STT), 2022 (GVP-B-STSS), 2023 (ASRT-B-STT), 2024 (SGSE-D-STS), 2025 (BGSP-B-STS), 2026 (SNCS-B-STS).*
