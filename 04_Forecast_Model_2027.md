# ISS Statistics Paper II — **2027 FORECAST MODEL**
## A base-rate forecast built on the fully classified 2018–2026 mine (720 items)

> **What this is.** Every one of the 720 questions in the nine available papers has been assigned to exactly one micro-topic (integrity-verified: 9 years × 80 items, no gaps, no double-counts). This file turns that classification into a quantitative prediction of the **2027 paper's shape**, with explicit probabilities, an overdue register, an item-level hit list, and a scoring rubric so the forecast can be graded after the exam.
>
> **What this is not.** Not a leak, not insider information, not a guarantee. It is a base-rate model. Its claims are falsifiable and § 10 tells you how to falsify them.

---

## 1. Method, stated openly

| Step | Specification |
|---|---|
| **Classification** | Item-level: `(year, question number) → micro-topic`. Single primary assignment per item; cross-listings noted but never double-counted. |
| **Integrity check** | Asserted that the union of the three parts equals exactly `{1..80}` for each of the nine years. Passed. |
| **Base rate** | Recency-weighted mean with exponential decay `w = 0.72^(2026 − y)`, half-life ≈ 2.1 years. The 2026 paper carries ~4.7× the weight of 2018. |
| **Normalisation** | Weighted means rescaled so each part's forecast sums to the structural part total from § 2. |
| **Appearance probability** | Blend of a Poisson model `P(≥1) = 1 − e^(−λ)` and the raw empirical hit rate `(years present)/9`, weighted 50/50 for micro-topics and 55/45 for archetypes. |
| **Trend** | `mean(2023–2026) − mean(2018–2022)`. Positive = rising. |
| **Overdue index** | `(years since last appearance) / (mean inter-appearance gap)`. Values > 1 mean the topic is late relative to its own rhythm. |

**Known limitations.** Nine observations per series is thin; single-item micro-topics have wide error bars. Setters change. Syllabus-named topics that have never appeared (SI-5) get a model probability near zero but a real-world probability that is not zero — handled in § 6.

---

## 2. Structural forecast — the paper's blueprint

### 2.1 The part-level history

| Year | Linear Models | Inference | Official Stats |
|---|---|---|---|
| 2018 | 15 | 45 | 20 |
| 2019 | 14 | 51 | 15 |
| 2020 | 10 | 50 | 20 |
| 2021 | 10 | 50 | 20 |
| 2022 | **20** | **40** | 20 |
| 2023 | 15 | 50 | 15 |
| 2024 | 10 | 50 | 20 |
| 2025 | 15 | 50 | 15 |
| 2026 | 10 | 50 | 20 |

### 2.2 Two hard regularities

**Regularity A — Inference is pinned at 50.** Held in **7 of the last 8 papers** (2022 is the only break, at 40). No other value has occurred since 2019.

**Regularity B — Linear Models + Official Statistics = 30.** Held in **8 of 9 years** (2018 gave 35, 2019 gave 29, then 30 every year from 2020). Combined with A, the paper is a two-parameter object: fix the LM/OS split and the blueprint is determined.

### 2.3 The alternation

Since 2023 the split has alternated with perfect regularity:

| Year | (LM, OS) |
|---|---|
| 2023 | (15, 15) |
| 2024 | (10, 20) |
| 2025 | (15, 15) |
| 2026 | (10, 20) |
| **2027** | **(15, 15) predicted** |

Four consecutive transitions, no violation. Treating each transition as a coin flip, the probability of four straight alternations by chance is 1/16 — weak evidence on its own, but combined with the LM+OS invariant it is the modal outcome.

### 2.4 Blueprint forecast with probabilities

| Blueprint | (LM, SI, OS) | Probability | Basis |
|---|---|---|---|
| **Primary** | **(15, 50, 15)** | **~55%** | Alternation continues; SI pinned at 50 |
| Secondary | (10, 50, 20) | ~25% | Alternation breaks, reverting to the 2024/2026 form |
| Tertiary | (15, 45–50, 15–20) | ~12% | SI slips below 50 as in 2018–2019 |
| Tail | (20, 40, 20) | ~8% | 2022-type restructure |

**Expected counts under the blended distribution:** LM **13.4**, SI **49.5**, OS **17.1**.

### 2.5 Question-number band map

Since 2020 the parts occupy contiguous blocks. Under the primary blueprint, expect:

| Band | Part | Confidence |
|---|---|---|
| **Q1 – Q50** | Statistical Inference & Hypothesis Testing | **High** — held every year 2020–2026 except 2022 |
| **Q51 – Q65** | Linear Models | **Moderate-high** — the exact 2023 and 2025 layout |
| **Q66 – Q80** | Official Statistics | **Moderate-high** — same |

Under the secondary blueprint the boundaries shift to Q51–Q60 and Q61–Q80.

**Operational consequence.** In the exam hall, confirm the boundary by scanning Q51 and Q61 in the first minute. If Q61 is a Linear Models item, you are in the (15,15) world; if it is an Official Statistics item, you are in the (10,20) world. This tells you immediately whether to budget 15 or 20 minutes for the fact-recall tail.

### 2.6 Paired-item blocks

"Consider the following for the next two items" blocks became standard from 2021. Counts of items appearing inside shared-stem blocks: 2021 ≈ 10, 2022 ≈ 12, 2023 ≈ 20, 2024 ≈ 14, 2025 ≈ 10. **Forecast: 10–18 items in 2027 arrive in paired or tripled blocks.** One correct setup earns two marks; one misread setup loses two. Treat block stems as double-weight reading.

---

## 3. Micro-topic forecast tables

`E[2027]` = expected number of items. `P(≥1)` = probability the topic appears at all. `Trend` = last-4-year mean minus first-5-year mean. Normalised to the primary blueprint (15, 50, 15).

### 3.1 Linear Models — expected 15 items

| Rank | Topic | E[2027] | P(≥1) | 9-yr mean | Last 4 | First 5 | Trend | Years present |
|---|---|---|---|---|---|---|---|---|
| 1 | **LM-4** Generalized inverse | **3.32** | 93% | 2.44 | 3.25 | 1.80 | **+1.45** | 8/9 |
| 2 | **LM-2** BLUE / Gauss–Markov / LSE | **2.93** | 86% | 2.11 | 2.25 | 2.00 | +0.25 | 7/9 |
| 3 | **LM-8** Two-way ANOVA | 1.48 | 66% | 1.67 | 1.00 | 2.20 | −1.20 | 5/9 |
| 4 | **LM-1** Estimable functions / spaces | 1.30 | 64% | 1.22 | 0.75 | 1.60 | −0.85 | 5/9 |
| 5 | **LM-7** One-way ANOVA | 1.21 | 74% | 1.56 | 1.00 | 2.00 | −1.00 | 7/9 |
| 6 | **LM-11** Regression / design / multicollinearity | 1.05 | 55% | 0.67 | 0.75 | 0.60 | +0.15 | 4/9 |
| 7 | **LM-5** Hat matrix / quadratic forms | 1.03 | 60% | 1.33 | 1.00 | 1.60 | −0.60 | 5/9 |
| 8 | **LM-3** Variances of LSEs / error variance | 0.93 | 58% | 0.89 | 1.00 | 0.80 | +0.20 | 5/9 |
| 9 | **LM-6** Correlated observations / GLS | 0.81 | 39% | 0.44 | 0.75 | 0.20 | **+0.55** | 2/9 |
| 10 | **LM-9** Fixed / random / mixed effects | 0.56 | 44% | 0.44 | 0.50 | 0.40 | +0.10 | 4/9 |
| 11 | **LM-10** Multiple comparison tests | 0.37 | 32% | 0.44 | 0.25 | 0.60 | −0.35 | 3/9 |

**Read.** Generalized inverse and BLUE together carry an expected **6.3 of 15 Linear Models items (42%)**. LM-4 has the strongest positive trend in the part and appeared in 8 of 9 years — it is the closest thing to a certainty in this section.

### 3.2 Statistical Inference — expected 50 items

| Rank | Topic | E[2027] | P(≥1) | 9-yr mean | Last 4 | First 5 | Trend | Years present |
|---|---|---|---|---|---|---|---|---|
| 1 | **SI-1** Unbiasedness / consistency / efficiency / MSE | **8.16** | 100% | 8.00 | 8.25 | 7.80 | +0.45 | 9/9 |
| 2 | **SI-6** Sufficiency & factorization | **5.33** | 100% | 4.78 | 5.00 | 4.60 | +0.40 | 9/9 |
| 3 | **SI-2** MLE computation | **4.05** | 94% | 4.22 | 4.00 | 4.40 | −0.40 | 8/9 |
| 4 | **SI-8** Rao–Blackwell / UMVUE | **4.03** | 99% | 3.56 | 4.00 | 3.20 | +0.80 | 9/9 |
| 5 | **SI-9** Cramér–Rao / MVB / Fisher info | **4.01** | 99% | 4.22 | 3.50 | 4.80 | −1.30 | 9/9 |
| 6 | **SI-4** Method of moments | **3.54** | 93% | 2.67 | 4.00 | 1.60 | **+2.40** | 8/9 |
| 7 | **SI-11** Confidence intervals / pivots | **3.44** | 98% | 3.00 | 3.25 | 2.80 | +0.45 | 9/9 |
| 8 | **SI-14** Neyman–Pearson / MP tests | **2.78** | 97% | 1.89 | 2.75 | 1.20 | **+1.55** | 9/9 |
| 9 | **SI-13** Hypothesis basics | 2.36 | 90% | 3.11 | 2.25 | 3.80 | **−1.55** | 8/9 |
| 10 | **SI-18** SPRT / OC / ASN | 2.25 | 95% | 1.89 | 2.00 | 1.80 | +0.20 | 9/9 |
| 11 | **SI-15** UMP / MLR / unbiased tests | 2.24 | 95% | 2.33 | 2.50 | 2.20 | +0.30 | 9/9 |
| 12 | **SI-7** Completeness / ancillarity / Basu | 2.02 | 82% | 2.11 | 2.50 | 1.80 | +0.70 | 7/9 |
| 13 | **SI-3** Optimal properties of MLE | 1.69 | 80% | 1.67 | 1.50 | 1.80 | −0.30 | 7/9 |
| 14 | **SI-17** Likelihood ratio test | 1.50 | 78% | 1.56 | 1.75 | 1.40 | +0.35 | 7/9 |
| 15 | **SI-16** Randomized tests | 1.02 | 65% | 1.22 | 1.50 | 1.00 | +0.50 | 6/9 |
| 16 | **SI-20** Cross-over items | 0.62 | 57% | 0.67 | 0.50 | 0.80 | −0.30 | 6/9 |
| 17 | **SI-19** Decision theory / Bayes | 0.47 | 47% | 1.11 | 0.25 | 1.80 | **−1.55** | 5/9 |
| 18 | **SI-12** Resampling / bootstrap / jackknife | 0.41 | 28% | 0.22 | 0.50 | 0.00 | **+0.50** | 2/9 |
| 19 | **SI-10** Bhattacharya bounds | 0.08 | 10% | 0.22 | 0.00 | 0.40 | −0.40 | 1/9 |
| 20 | **SI-5** Minimum chi-square / LS method | 0.00 | <5% | 0.00 | 0.00 | 0.00 | 0.00 | 0/9 |

**Read.** Five topics (SI-1, SI-6, SI-2, SI-8, SI-9) have an expected **25.6 of 50 items** — half the Inference block, and all five have appeared in at least 8 of 9 years. The strongest movers are **SI-4 (+2.40)** and **SI-14 (+1.55)** rising, **SI-13 (−1.55)** and **SI-19 (−1.55)** falling.

### 3.3 Official Statistics — expected 15 items

| Rank | Topic | E[2027] | P(≥1) | 9-yr mean | Last 4 | First 5 | Trend | Years present |
|---|---|---|---|---|---|---|---|---|
| 1 | **OS-7** Index numbers | **3.62** | 99% | 4.00 | 4.00 | 4.00 | 0.00 | 9/9 |
| 2 | **OS-10** Census & vital statistics | **2.04** | 88% | 2.00 | 2.50 | 1.60 | +0.90 | 8/9 |
| 3 | **OS-8** Sector-wise statistics | **1.85** | 87% | 2.44 | 2.50 | 2.40 | +0.10 | 8/9 |
| 4 | **OS-9** National accounts | 1.33 | 76% | 1.67 | 1.50 | 1.80 | −0.30 | 7/9 |
| 5 | **OS-2** Nature / principles of official statistics | 1.10 | 83% | 1.44 | 1.25 | 1.60 | −0.35 | 9/9 |
| 6 | **OS-11** Socio-economic indicators / SDGs | 1.05 | 83% | 1.67 | 1.00 | 2.20 | **−1.20** | 9/9 |
| 7 | **OS-1** National & international system | 0.89 | 63% | 1.00 | 1.00 | 1.00 | 0.00 | 6/9 |
| 8 | **OS-6** Legal Acts & constitutional provisions | 0.89 | 57% | 0.89 | 1.50 | 0.40 | **+1.10** | 5/9 |
| 9 | **OS-4** NSO / CSO / NSSO structure | 0.84 | 67% | 1.11 | 0.75 | 1.40 | −0.65 | 7/9 |
| 10 | **OS-5** National Statistical Commission | 0.70 | 53% | 0.78 | 0.75 | 0.80 | −0.05 | 5/9 |
| 11 | **OS-3** Collection & dissemination methods | 0.69 | 58% | 1.33 | 0.75 | 1.80 | **−1.05** | 6/9 |

**Read.** OS-7 alone is expected to supply **~3.6 items (≈9 marks)** and has never missed a paper. **OS-6 (legal Acts) is the fastest-rising topic in the whole part (+1.10)** — driven by the Census Act and Collection of Statistics Act items in 2023–2026.

### 3.4 Concentration curve

| Coverage | Topics needed | Expected items | Expected marks |
|---|---|---|---|
| Top 5 | SI-1, SI-6, SI-2, SI-8, SI-9 | 25.6 | 64 |
| Top 12 | + OS-7, SI-4, SI-11, LM-4, LM-2, SI-14, SI-13 | **47.6 (59%)** | **119** |
| Top 20 | + SI-18, SI-15, SI-7, OS-10, SI-3, LM-8, SI-17, LM-1 | **62.1 (78%)** | **155** |

**Twelve micro-topics out of 42 account for an expected 119 of 200 marks.**

---

## 4. Archetype hit list — item-level predictions

39 recurring question archetypes were identified, covering 216 of the 720 historical items (30%). `P(app)` blends a recency-weighted Poisson rate with the empirical year-hit rate.

### Tier A — expect these (P ≥ 55%)

| Archetype | Items | Yrs | Gap | E[n] | **P(app)** |
|---|---|---|---|---|---|
| g-inverse: order, rank, trace, idempotency, symmetry | 22 | 8/9 | 0 | 2.79 | **92%** |
| UN Fundamental Principles of Official Statistics | 8 | 7/9 | 0 | 1.13 | **72%** |
| Efficiency–correlation identity `ρ = √e` | 8 | 7/9 | 0 | 0.88 | **67%** |
| Sufficiency for `θx^(θ−1)` on (0,1) | 6 | 5/9 | 0 | 1.02 | **60%** |
| Census Act 1948 / census provisions | 6 | 4/9 | 0 | 1.10 | **57%** |
| SDG basics — count, agency, target year | 7 | 6/9 | 0 | 0.60 | **55%** |
| Estimability condition `λ′ = c′X` | 9 | 5/9 | 0 | 0.77 | **55%** |

### Tier B — better than a coin flip (P 42–55%)

| Archetype | Items | Yrs | Gap | E[n] | **P(app)** |
|---|---|---|---|---|---|
| NSC — 2005 Resolution, composition, Secretary | 6 | 5/9 | 0 | 0.77 | 54% |
| Nine/twelve-observation BLUE of θ₁, θ₂ | 8 | 4/9 | 1 | 0.94 | 54% |
| Randomised test via coin toss — size and power | 9 | 4/9 | 2 | 0.93 | 53% |
| MP test power from a one-observation density pair | 5 | 4/9 | 0 | 0.91 | 53% |
| SPRT Wald bounds `A ≤ (1−β)/α`, `B ≥ β/(1−α)` | 5 | 4/9 | 0 | 0.80 | 50% |
| Index-to-agency pair matching | 5 | 5/9 | 0 | 0.59 | 50% |
| Two-way ANOVA error / interaction df | 6 | 5/9 | 1 | 0.54 | 48% |
| GDP vs GNI vs GVA vs NNI definitions | 7 | 5/9 | 2 | 0.54 | 48% |
| Recover x̄ or SE from a given confidence interval | 4 | 3/9 | 0 | 0.84 | 46% |
| One-way ANOVA table completion | 5 | 5/9 | 1 | 0.47 | 46% |
| Decision theory — Bayes, risk, minimax | 10 | 5/9 | 2 | 0.46 | 45% |
| Cauchy — no MVB estimator, mean inconsistent | 5 | 4/9 | 0 | 0.60 | 45% |
| `U(θ±½)` — minimal sufficient but not complete | 4 | 3/9 | 1 | 0.69 | 42% |

### Tier C — live but secondary (P 25–42%)

Fisher/Laspeyres/Paasche computation (41%) · random & mixed effects expected mean squares (41%) · MoM = MLE for the exponential (40%) · MoM for U(a,b), the √3 factor (40%) · NSS round subject/design (38%) · uncorrelated BLUEs, solve for α (38%) · GLS/weighted least squares (37%) · NP lemma configuration (36%) · constitutional List placement (34%) · N(0,θ) completeness of x₁ vs x₁² (33%) · hat matrix h_ii and Cov(eᵢ,eⱼ) (31%) · HDI/PQLI/GHI components (31%) · primary/secondary sector composition (30%) · multiple comparison tests (30%) · bootstrap & jackknife (28%) · SLR variance/covariance formulae (26%) · quadratic form distribution & independence (25%).

### Tier D — long shots

Paired *t*-test df (22%) · Bhattacharya bound (9%) · minimum chi-square method (never asked).

---

## 5. Overdue register — what is late relative to its own rhythm

`Overdue index = gap ÷ mean inter-appearance gap`. Above 1.0 means the archetype has been absent longer than its historical rhythm implies.

| Archetype | Gap (yrs) | Mean gap | **Overdue index** | Verdict |
|---|---|---|---|---|
| Hat matrix `h_ii`, `Cov(eᵢ,eⱼ)` | 4 | 1.5 | **2.67** | **Most overdue item in the paper.** Last seen 2022. Appeared 3 times in 5 years before that. |
| GDP vs GNI vs GVA vs NNI definitions | 2 | 1.0 | **2.00** | Was near-annual through 2024, then absent. |
| HDI / PQLI / GHI components | 3 | 1.7 | **1.80** | Composite-index recall has not been tested since 2023. |
| Decision theory — Bayes, risk, minimax | 2 | 1.5 | **1.33** | 10 items historically, zero since 2024. |
| Randomised test via coin toss | 2 | 2.0 | **1.00** | Ran three consecutive years (2022–24), then stopped. |
| `U(θ±½)` minimal sufficient not complete | 1 | 1.0 | **1.00** | Ran 2023–25, absent 2026. |

**Interpretation.** Overdue is a weak signal on its own — a topic can simply be retired. But when a **high-historical-volume** archetype is overdue (hat matrix, decision theory, GDP definitions), the case for a return is stronger than the raw recency weighting suggests. Treat these as the model's most likely *upside surprises*.

---

## 6. Rising, falling, and structural risk

### 6.1 Rising — allocate more time than history alone suggests

| Topic | Trend | Evidence |
|---|---|---|
| **SI-4 Method of moments** | **+2.40** | 1 item across 2018–2020 combined; then 3, 4, 4, 5, 3 in 2021–2026. The single clearest upward trend in the paper. |
| **SI-14 Neyman–Pearson / MP tests** | **+1.55** | 1 item/yr through 2022; 3, 2, 5 in 2024–2026. 2026 alone had five. |
| **LM-4 Generalized inverse** | **+1.45** | 6 items in 2024 alone; present 8/9 years. |
| **OS-6 Legal Acts** | **+1.10** | Absent 2019–2022 entirely; 2, 2, 1, 1 in 2023–2026. |
| **OS-10 Census & vital statistics** | **+0.90** | 4 items in 2025, 3 in 2026; Census 2027 is live news. |
| **SI-8 UMVUE** | **+0.80** | Peaked at 6 in 2024. |
| **SI-7 Completeness / Basu** | **+0.70** | 5 items in both 2019 and 2025. |
| **LM-6 GLS** | **+0.55** | 3 of its 4 lifetime items landed in 2025. |
| **SI-12 Resampling** | **+0.50** | Zero before 2023; present 2023 and 2026. Syllabus-named. |

### 6.2 Falling — do not over-invest

| Topic | Trend | Evidence |
|---|---|---|
| **SI-13 Hypothesis basics** | **−1.55** | 5 items in 2019, 2020, 2022, 2024; **zero in 2026**. |
| **SI-19 Decision theory** | **−1.55** | 4 items in 2018; none since 2024. |
| **SI-9 Cramér–Rao** | −1.30 | Still large in absolute terms (E ≈ 4.0), but 2025 had only 1. Volatile, not dead. |
| **OS-11 SDGs / indicators** | −1.20 | 3 items/yr through 2021; 1/yr since 2023. |
| **LM-8 Two-way ANOVA** | −1.20 | 5 in 2022; zero in 2024 and 2026. Syllabus explicitly restricts ANOVA to two-way, so a floor exists. |
| **OS-3 Collection & dissemination** | −1.05 | 4 items in 2020; zero in 2022, 2023, 2026. |
| **LM-7 One-way ANOVA** | −1.00 | 4 in 2020; zero in 2025 and 2026. |

### 6.3 Structural risk register — low model probability, non-zero real probability

| Item | Model P | Why it still matters |
|---|---|---|
| **SI-5 Minimum chi-square method** | <5% | **Named explicitly in the syllabus, never asked in 9 years.** A single paragraph of theory (definition, modified minimum chi-square, asymptotic equivalence to MLE). Cost of preparation: 10 minutes. Cost of being wrong: 2.5 marks. Learn it. |
| **SI-10 Bhattacharya bounds** | 10% | Named in the syllabus, asked twice, both in 2020. Definition + "generalises Cramér–Rao" + the `N(θ,1)`, `g(θ)=θ²` worked example is the entire examinable surface. |
| **LM S1.4 Error and estimation space** | ~25% | First and only appearance was **2026·Q60**. Newly activated topics often recur while the setter's interest lasts. Know: estimation space `= C(X)`, dim `r`; error space `= C(X)⊥`, dim `n − r`. |
| **SI-12 Resampling** | 28% | Rising, syllabus-named, tiny content: `C(2n−1, n)` distinct bootstrap samples, jackknife bias formula, and what does *not* count as resampling. |
| **LM S1.14 Multiple comparisons** | 32% | Four named procedures in the syllabus (Tukey, Scheffé, SNK, Duncan). Absent 2022–2024, returned 2025. Pure definitional recall. |

**The asymmetry argument.** These five items together carry an expected value of roughly 2–3 items, but the total preparation cost is under two hours. Every one of them is explicitly named in the syllabus, which caps the setter's discretion in a way that favours the prepared candidate.

---

## 7. The 2027 Most-Likely-40

Concrete predicted items, drawn from the archetype analysis. Each is phrased as the drill you should be able to execute cold.

### Linear Models (expect ~15 items)

1. **Given an `n×p` matrix, state the order / rank / trace properties of `A⁻`.** *(Tier A, 92%)*
2. **Is a generalized inverse of a symmetric matrix necessarily symmetric? Can a symmetric one always be found?** *(Asked verbatim in 2021, 2023, 2024 — 3 of the last 6 papers.)*
3. **Numerical: given a specific 3×3 singular matrix and a candidate `B`, check `ABA = A`, idempotency of `BA`, and `rank = trace`.**
4. **Nine or twelve independent observations with `E(Z) = θ₁ ± θ₂`; find the BLUE of θ₁ or θ₂.** *(Tier B, 54%.)*
5. **Solve for α so that the BLUEs of β₁ and β₂ are uncorrelated.** *(2019, 2025, 2026 — 3 of 8 papers.)*
6. **Two-way classification with m observations per cell: error degrees of freedom.**
7. **ANOVA table with missing entries — fill df, SS, MSS, F.**
8. **State the estimability condition for `λ′β` in a stated small design.**
9. **Consistency of the normal equations `X′Xβ = X′Y`, or invariance of `XGX′` to the choice of `G`.**
10. **Var(β̂₀), Var(β̂₁), Cov(β̂₀, β̂₁) in simple linear regression — with the negative sign on the covariance.** *(Overdue: last seen 2023.)*
11. **Hat matrix: range of `h_ii`, `V(e) = σ²(I − H)`, and the sign of `Cov(eᵢ, eⱼ)`.** *(Most overdue archetype in the paper, index 2.67.)*
12. **Random-effects two-way model: which F-tests use MSE and which use MS(AB) as denominator.**
13. **Nested models: `RSS_small ≥ RSS_large`, and whether `Q = 0` with `P > 0` is possible.**
14. **GLS: reduce `D(Y) = σ²G` to the standard model via `Z = G^(−1/2)Y`, or compute a weighted BLUE.**
15. **Multiple comparisons: identify which of Tukey / Scheffé / SNK / Duncan / Bartlett is which.**

### Statistical Inference (expect ~50 items)

16. **`T₀` is MVUE, `T₁` has efficiency `e`; state `ρ(T₀,T₁)`, or `Cov(T₀, T₁ − T₀)`, or whether a linear combination is MVUE.** *(Tier A, 67% — appeared in 7 of 9 years.)*
17. **Sufficient statistic for `f(x,θ) = θx^(θ−1)` on (0,1).** *(Tier A, 60% — six appearances, three of them 2024–2026.)*
18. **Sufficient statistic for a named family** — Poisson, Bernoulli, gamma, `U(0,θ)`, shifted exponential, discrete uniform, `N(μ,σ²)`.
19. **Why `X₁ + 2X₂` fails to be sufficient while `X₁ + X₂` succeeds.**
20. **MLE where the support depends on θ** — `U(0,θ)`, `U(α,β)`, `U(θ±½)`, shifted exponential.
21. **MLE over a restricted parameter space** — project the unrestricted maximiser onto the admissible set.
22. **MSE decomposition `MSE = V + bias²`, and "no estimator minimises MSE uniformly."**
23. **Method of moments for `U(a,b)`** — the `√3` factor. *(5 items in 3 years.)*
24. **MoM for a gamma or a two/three-component exponential mixture — compute `E(X)` then invert.**
25. **Do MoM and MLE coincide for the exponential?** *(Asked in 2025 and 2026 back-to-back.)*
26. **UMVUE of a Bernoulli or Poisson function** — `p(1−p)`, `θ²`, `e^(−2θ)θ³`, `P(X=k)`.
27. **Rao–Blackwell statement pair: is `φ(t) = E[U|T]` free of θ, and is its variance `<` or `≤` that of `U`?** *(Near-verbatim in 2024 and 2026.)*
28. **Lehmann–Scheffé: completeness is what upgrades Rao–Blackwell to optimality.**
29. **Cramér–Rao bound for a named family, or the equality condition on the score.**
30. **Fisher information for Bernoulli, Poisson, or `N(μ,σ²)` with `θ = σ²`.**
31. **Cauchy: MVB estimator does not exist; sample mean is inconsistent; median is consistent.** *(Tier B, 45%.)*
32. **`U(θ±½)`: minimal sufficient but not complete, because the range is ancillary.** *(Tier B, 42%.)*
33. **`N(0,θ)`: `x₁` is not complete but `x₁²` is.**
34. **Identify the pivot** — for σ² with μ known, for an exponential mean, or in a location-scale family.
35. **Recover the sample mean or standard error from a stated confidence interval.** *(Tier B, 46% — 2020, 2025, 2026.)*
36. **NP lemma configuration: simple null against simple alternative.** *(Asked 2018, 2024, 2026.)*
37. **Best critical region for a named simple-vs-simple pair, with the correct inequality direction.**
38. **Power of the MP test of stated size from a one-observation density pair** — the `α^(1/k)` answer form. *(Tier B, 53%; five appearances, five in the last four papers.)*
39. **Randomised test with a coin toss: compute size and power.** *(Tier B, 53%; nine items across three papers.)*
40. **SPRT: the Wald bounds `A ≤ (1−β)/α` and `B ≥ β/(1−α)`, with the inequality directions correct.** *(Tier B, 50%.)*

**Plus, in Official Statistics (expect ~15 items):** which of the ten UN Fundamental Principles is *not* one (72%) · index-to-agency matching for CPI-IW, CPI-AL/RL, CPI-U/R, WPI, IIP (50%) · Census Act 1948 provisions or Census 2027 modalities (57%) · SDG count, agency, target year (55%) · NSC constituted by Resolution in 2005, not a statutory body (54%) · Fisher/Laspeyres/Paasche computation from Σpq values (41%) · GVA = output − intermediate consumption, and GDP vs GNI as territorial vs residency (48%).

---

## 8. Mark economics — derived, not assumed

Paper II: 80 items, 200 marks, **2.5 marks per item**, penalty **one-third of the item's marks = 0.833** per wrong answer. Blank costs nothing.

| Situation | P(correct) | Expected value |
|---|---|---|
| Leave blank | — | **0.000** |
| Blind guess among 4 | 0.250 | **0.000** |
| Guess after eliminating 1 | 0.333 | **+0.278** |
| Guess after eliminating 2 | 0.500 | **+0.833** |
| Confident answer | 1.000 | +2.500 |

**Three consequences.**

1. **Blind guessing is exactly EV-neutral.** The penalty is calibrated so that random marking neither helps nor hurts in expectation. It does, however, add variance — which matters if you are near a cut-off.
2. **Any single elimination flips the calculation decisively.** Eliminating one option is worth **+0.28 marks per item**. Over 20 such items that is **+5.6 marks** — often the difference between ranks.
3. **Never leave an item blank if you can rule out even one option.** The most common self-inflicted loss in this paper is excessive caution on partially-known items, not recklessness.

**Time budget.** 120 minutes, 80 items = **90 seconds per item**. Official Statistics items are recall and should average 30–40 seconds, releasing roughly 10 minutes back to the computational Linear Models and Inference blocks.

---

## 9. Preparation allocation derived from the forecast

Expected marks = `E[2027 items] × 2.5`. Hours are a suggested ratio, not a prescription; they weight expected marks by how much study each topic actually needs.

| Priority | Topic cluster | E[marks] | Suggested hours | Marks per hour |
|---|---|---|---|---|
| 1 | **SI-1** Unbiasedness / consistency / efficiency / MSE | 20.4 | 8 | 2.6 |
| 2 | **SI-6** Sufficiency & factorization | 13.3 | 5 | 2.7 |
| 3 | **SI-2** MLE computation | 10.1 | 6 | 1.7 |
| 4 | **SI-8** UMVUE / Rao–Blackwell | 10.1 | 5 | 2.0 |
| 5 | **SI-9** Cramér–Rao / MVB | 10.0 | 5 | 2.0 |
| 6 | **OS-7** Index numbers | 9.1 | 3 | **3.0** |
| 7 | **SI-4** Method of moments | 8.9 | 3 | **3.0** |
| 8 | **SI-11** Confidence intervals | 8.6 | 3 | **2.9** |
| 9 | **LM-4** Generalized inverse | 8.3 | 3 | **2.8** |
| 10 | **LM-2** BLUE / Gauss–Markov | 7.3 | 4 | 1.8 |
| 11 | **SI-14** Neyman–Pearson / MP tests | 7.0 | 3 | 2.3 |
| 12 | **SI-13** Hypothesis basics | 5.9 | 2 | **3.0** |
| 13 | **SI-18** SPRT / OC / ASN | 5.6 | 2 | **2.8** |
| 14 | **SI-15** UMP / MLR | 5.6 | 3 | 1.9 |
| 15 | **OS-10** Census & vital statistics | 5.1 | 2 | **2.6** |
| 16 | **SI-7** Completeness / Basu | 5.1 | 2 | **2.5** |
| 17 | **OS-8** Sector-wise statistics | 4.6 | 2 | 2.3 |
| 18 | **SI-3** MLE properties | 4.2 | 1.5 | **2.8** |
| 19 | **LM-8** Two-way ANOVA | 3.7 | 1.5 | **2.5** |
| 20 | **SI-17** Likelihood ratio test | 3.8 | 2 | 1.9 |
| — | Everything else (22 topics) | ~44 | 15 | 2.9 |
| | **Total** | **200** | **~80 h** | |

**Highest marks-per-hour, and therefore the first things to finish:** index numbers, method of moments, confidence intervals, generalized inverse, hypothesis basics, SPRT, MLE properties. All are formula- or recall-driven with small conceptual surfaces.

**Lowest marks-per-hour but unavoidable:** MLE computation and BLUE — large, technique-heavy, and irreplaceable.

---

## 10. Falsification log — how to grade this forecast

Score the model after the 2027 paper. This is what separates a forecast from a guess.

### 10.1 Structural predictions

| # | Prediction | Pass condition |
|---|---|---|
| S1 | Inference = 50 items | Exactly 50 |
| S2 | LM + OS = 30 | Exact |
| S3 | Primary blueprint (15, 50, 15) | Exact match |
| S4 | Inference occupies Q1–Q50 | Contiguous block |
| S5 | 10–18 items appear in shared-stem blocks | Count them |

### 10.2 Micro-topic accuracy

For each of the 42 micro-topics record actual `n`, then compute:

- **MAE** = mean absolute error between `E[2027]` and actual. **Target: < 1.2 items.**
- **Direction accuracy** on the nine "rising" and seven "falling" calls. **Target: ≥ 11 of 16 correct.**
- **Calibration**: bucket the topics by `P(≥1)` into 0–25 / 25–50 / 50–75 / 75–100, and check that the realised appearance frequency in each bucket falls inside its band. **A well-calibrated model gets 3 of 4 buckets right.**

### 10.3 Archetype hit rate

- **Tier A (7 archetypes, mean P = 65%)**: expect **4–5 to appear**. Fewer than 3 falsifies the tier.
- **Tier B (13 archetypes, mean P = 49%)**: expect **6–7 to appear**.
- **Tier C (17 archetypes, mean P = 33%)**: expect **5–6 to appear**.

### 10.4 The Most-Likely-40

Count how many of the 40 predicted drills appear in recognisable form. **Model target: ≥ 22 of 40 (55%).** Below 15 means the setter has changed the paper's character and the whole model needs rebuilding from the 2027 data.

### 10.5 Update rule

After the 2027 paper: add it as a tenth observation, re-run with the same decay (0.72), and re-derive. The alternation hypothesis in § 2.3 either survives a fifth transition — which raises it from pattern to near-rule — or breaks, in which case revert to the unconditional `LM + OS = 30` constraint with a 50/50 split prior.

---

## 11. One-page executive summary

- **Blueprint:** 15 Linear Models (Q51–65), 50 Inference (Q1–50), 15 Official Statistics (Q66–80). ~55% confidence; the fallback is (10, 50, 20).
- **Twelve micro-topics carry an expected 119 of 200 marks.** Twenty carry 155.
- **Single highest-probability topics:** SI-1 (100%, ~8 items), SI-6 (100%, ~5), LM-4 (93%, ~3), OS-7 (99%, ~3.6).
- **Fastest risers:** method of moments, Neyman–Pearson tests, generalized inverse, legal Acts, census statistics.
- **Fastest fallers:** hypothesis basics, decision theory, SDG general knowledge, collection-and-dissemination methods.
- **Most overdue:** hat-matrix properties (index 2.67), GDP-vs-GNI definitions (2.00), HDI/PQLI components (1.80).
- **Cheapest insurance:** minimum chi-square (never asked, syllabus-named), Bhattacharya bound, error and estimation space, resampling. Under two hours for all four.
- **Mark economics:** blind guessing is EV-zero; eliminating one option is worth **+0.28 marks per item**. Never leave an item blank once one option is dead.
- **Highest marks-per-hour:** index numbers, method of moments, confidence intervals, generalized inverse — all ≈ 3.0 marks/hour against a paper average of 2.5.

---

*Model inputs: IES/ISS Statistics Paper II, 2018 (YLO-B-DTSS), 2019 (XZH-S-STSS), 2020 (DFSE-D-STT), 2021 (SDT-S-STT), 2022 (GVP-B-STSS), 2023 (ASRT-B-STT), 2024 (SGSE-D-STS), 2025 (BGSP-B-STS), 2026 (SNCS-B-STS). Classification integrity verified: 9 years × 80 items, each assigned exactly once. Decay parameter 0.72; blend weights 0.50/0.50 (micro-topics), 0.55/0.45 (archetypes).*
