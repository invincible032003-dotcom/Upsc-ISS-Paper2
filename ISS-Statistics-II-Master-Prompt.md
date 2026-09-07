🚀 FINAL MASTER PROMPT

UPSC ISS STATISTICS-II (OBJECTIVE TYPE) — FOR ISS ONLY

PYQ → ELITE OFFLINE MOCK ENGINE

> This document is the Paper-II counterpart of the Statistics-I master prompt. All exam-engine, learning-engine, scoring, review, analytics, mistake-bank, bookmark, offline-architecture, and UI requirements from the Statistics-I master prompt carry over unchanged. **Only the syllabus/classification taxonomy (Section 4) and every place that names a "unit" have been replaced** to match the Statistics-II syllabus below. Treat this as a drop-in replacement of Section 4 of the original prompt, plus the consequent renaming of unit labels everywhere else they appear (data structure examples, sectional mocks, topic mocks, analytics examples, file names).

---

0. YOUR ROLE

Act as an elite:

- UPSC ISS Statistics examiner
- PYQ data-mining specialist
- data engineer
- frontend engineer
- exam-platform architect
- mathematical quality-control specialist
- UX designer

I will provide Markdown files containing UPSC ISS Statistics-II Objective Type papers (years to be confirmed from whatever files are actually uploaded).

Your job is to transform the complete dataset into a professional, high-fidelity, fully offline UPSC ISS Statistics-II examination and practice platform.

This is NOT merely a quiz webpage.

Build a complete:

PYQ DATABASE + CLASSIFICATION ENGINE + MOCK GENERATOR + REALISTIC EXAM ENGINE + LEARNING ENGINE + SCORING ENGINE + REVIEW ENGINE + ANALYTICS + MISTAKE BANK

Do the entire project autonomously.

---

1. AUTONOMOUS EXECUTION — IMPORTANT

I am giving you this ONE master prompt and the Statistics-II Markdown source files.

DO NOT ask me to repeat requirements.

DO NOT ask me for a separate validation prompt.

DO NOT ask me for a separate mock-generation prompt.

DO NOT ask me for a separate offline prompt.

DO NOT stop after creating a prototype.

DO NOT create placeholders.

DO NOT fabricate missing questions.

DO NOT require me to manually trigger each stage.

Automatically execute the complete pipeline described below.

Only stop and ask me something if a required uploaded file is genuinely unavailable, unreadable, or technically inaccessible.

Otherwise continue autonomously until the complete application is built and validated.

---

2. SOURCE-OF-TRUTH RULE

The uploaded Statistics-II papers are the authoritative source for:

- actual questions
- wording
- options
- question numbering
- year
- answer information contained in the source
- source solutions where provided

The official syllabus in Section 4 below is the authoritative classification framework.

NEVER fabricate a PYQ.

NEVER create placeholder questions.

NEVER silently alter a UPSC question.

NEVER silently change an option.

NEVER silently change the original question order.

If the source contains an apparent typo or ambiguity:

- preserve the source faithfully
- flag the issue
- do not silently rewrite it

If information is absent from the source, use:

"null"

or:

"Not available in source"

rather than inventing it.

---

3. DATASET — YEARS TO BE CONFIRMED FROM UPLOADED FILES

Process ALL uploaded Statistics-II years (do not assume this matches the 2018–2026 range used for Paper I unless the actual files confirm it).

IMPORTANT:

Do NOT assume any fixed total question count.

Actually extract and count every question.

Produce a per-year breakdown, e.g.:

20XX: XX
20XX: XX
...

TOTAL: XXX

NEVER invent questions to reach any assumed target.

---

4. OFFICIAL STATISTICS-II SYLLABUS (REPLACES THE STATISTICS-I SYLLABUS)

Use the following as the authoritative classification taxonomy. This **replaces** the previous Probability / Statistical Methods / Numerical Analysis / Computer Application taxonomy used for Paper I.

## UNIT I — LINEAR MODELS

Theory of linear estimation.

Gauss-Markov linear models.

Estimable functions.

Error and estimation space.

Normal equations and least square estimators.

Estimation of error variance.

Estimation with correlated observations.

Properties of least square estimators.

Generalized inverse of a matrix and solution of normal equations.

Variances and covariances of least square estimators.

One-way and two-way classifications.

Fixed, random and mixed effects models.

Analysis of variance (two-way classification only).

Multiple comparison tests:

- Tukey
- Scheffe
- Student-Newmann-Keul-Duncan

---

## UNIT II — STATISTICAL INFERENCE AND HYPOTHESIS TESTING

Characteristics of a good estimator.

Estimation methods:

- maximum likelihood
- minimum chi-square
- moments
- least squares

Optimal properties of maximum likelihood estimators.

Minimum variance unbiased estimators.

Minimum variance bound estimators.

Cramer-Rao inequality.

Bhattacharya bounds.

Sufficient estimator.

Factorization theorem.

Complete statistics.

Rao-Blackwell theorem.

Confidence interval estimation.

Optimum confidence bounds.

Resampling:

- Bootstrap
- Jackknife

Hypothesis testing:

- simple and composite hypotheses
- two kinds of error
- critical region
- different types of critical regions and similar regions
- power function
- most powerful and uniformly most powerful tests
- Neyman-Pearson fundamental lemma
- unbiased test
- randomized test
- likelihood ratio test
- Wald's SPRT, OC and ASN functions
- elements of decision theory

---

## UNIT III — OFFICIAL STATISTICS

National and international official statistical system.

Official Statistics:

- need, uses, users
- reliability, relevance, limitations
- transparency, visibility
- compilation, collection, processing, analysis and dissemination
- agencies involved
- methods

National Statistical Organization:

- vision and mission
- NSSO and CSO — roles and responsibilities
- important activities, publications, etc.

National Statistical Commission:

- need, constitution, role, functions
- legal acts/provisions/support for official statistics
- important acts

Index Numbers:

- different types
- need
- data collection mechanism
- periodicity
- agencies involved
- uses

Sector-wise Statistics:

- agriculture, health, education, women and child, etc.
- important surveys and censuses, indicators, agencies and usages

National Accounts:

- definition, basic concepts, issues
- strategy, collection of data, release

Population Census:

- need, data collected, periodicity
- methods of data collection, dissemination
- agencies involved

Miscellaneous:

- socio-economic indicators
- gender awareness/statistics
- important surveys and censuses

---

5. COMPLETE QUESTION EXTRACTION

For EVERY question extract:

- year
- original question number
- exact question text
- all options
- correct answer, if available
- source solution, if available
- source shortcut, if available
- source tips/tricks, if available

Then classify:

- unit (one of: Linear Models / Statistical Inference and Hypothesis Testing / Official Statistics)
- topic
- subtopic
- syllabus concept
- question type

Possible question-type labels include:

- Numerical
- Conceptual
- Theoretical
- Formula-based
- Computational
- Factual
- Definition
- Mixed

A question may have multiple relevant syllabus concepts where genuinely necessary.

Do NOT force a wrong classification simply to make the data fit one category.

---

6. PYQ DATA STRUCTURE

Create:

"questions2.js"

(named distinctly from Paper I's `questions.js` so the two projects never collide if run side by side)

It MUST expose:

window.quizDataPaper2 = [...]

Each question should follow a structure similar to:

{
  id: "2024-P2-Q01",
  globalId: 1,

  year: 2024,
  questionNumber: 1,

  unit: "Statistical Inference and Hypothesis Testing",
  topic: "Hypothesis Testing",
  subtopic: "Neyman-Pearson Lemma",
  syllabusConcept: "Most powerful and uniformly most powerful tests",

  question: "...",

  options: [
    "...",
    "...",
    "...",
    "..."
  ],

  correctAnswer: 2,

  questionType: "Conceptual",

  examShortcut: "...",

  tipsTricks: [
    "...",
    "..."
  ],

  solution: [
    { step: 1, text: "..." },
    { step: 2, text: "..." }
  ],

  sourceYear: 2024,
  sourceQuestionNumber: 1,
  sourceFile: "Statistics-II-2024.md"
}

Adapt the structure if necessary, but retain all essential information.

---

7. SOURCE FIDELITY

Preserve actual UPSC PYQs.

Do not rewrite them for style.

Do not simplify away mathematical information.

Do not "correct" source wording silently.

Do not change option order.

Do not change original question numbers.

Do not mix questions between years.

For official yearly mocks, preserve the original sequence.

---

8. SOLUTION / SHORTCUT / TIPS POLICY

Never pretend an AI-generated explanation is an official UPSC solution.

If the source provides a solution:

- preserve its mathematical meaning

If the source provides no solution:

- do not invent an "official solution"

If you generate an educational explanation, label it:

"AI-derived explanation"

Likewise for:

- Exam Shortcut
- Tips & Tricks

Clearly distinguish source-derived information from AI-derived educational material.

---

9. LEARNING MODE — EXACT REVEAL ORDER

Learning Mode must reveal answer information in EXACTLY this order after the user answers:

1. CORRECT / INCORRECT

Show:

- user's selected answer
- correct answer
- correct/incorrect status

2. EXAM SHORTCUT

Show the fastest useful UPSC-style solving method.

Aim for approximately a 30-second strategy when applicable.

3. TIPS & TRICKS

Include useful:

- traps
- formula recognition
- elimination techniques
- calculation shortcuts
- common mistakes
- distractor patterns
- memory aids

4. STEP-BY-STEP SOLUTION

Show the full logical/mathematical reasoning.

NEVER change this order.

---

10. STRICT EXAM MODE

Create a genuine examination mode.

During the exam, hide:

- correct answer
- correctness
- solution
- shortcut
- tips

until submission.

Provide:

- timer
- next
- previous
- question navigation
- question-number grid
- answered/unanswered indicators
- mark for review
- submit button
- submission confirmation
- auto-submit when timer expires

The UI must not accidentally reveal the correct answer through styling, labels, source metadata, or option highlighting.

---

11. YEAR-WISE AUTHENTIC FULL MOCKS

Provide one authentic full mock per uploaded Statistics-II year (e.g. "20XX Full Mock" for each year actually present in the source files).

For each authentic yearly mock:

- use that year's actual PYQs
- preserve original question order
- preserve original options
- preserve original numbering
- preserve actual question count

Do NOT randomize official paper order.

Example:

"[Year] → Full Length → Strict Exam"

must behave like a real paper simulation for that year.

---

12. SECTIONAL MOCKS

The platform MUST support sectional mocks.

Unit-level

- Linear Models
- Statistical Inference and Hypothesis Testing
- Official Statistics

Year + Unit

Examples:

"2023 → Linear Models"

"2023 → Statistical Inference and Hypothesis Testing"

"2024 → Official Statistics"

Cross-year

Examples:

"[all years] → Linear Models"

"[all years] → Statistical Inference and Hypothesis Testing"

"[all years] → Official Statistics"

Only questions actually classified into the selected section should appear.

---

13. TOPIC-WISE MOCKS

Allow:

Unit → Topic → Subtopic → Syllabus Concept.

Examples:

- Linear Models → Gauss-Markov Models
- Linear Models → Analysis of Variance
- Linear Models → Multiple Comparison Tests (Tukey/Scheffe/SNK-Duncan)
- Statistical Inference → Cramer-Rao Inequality
- Statistical Inference → Neyman-Pearson Lemma
- Statistical Inference → Wald's SPRT
- Statistical Inference → Bootstrap and Jackknife
- Official Statistics → NSSO and CSO
- Official Statistics → Index Numbers
- Official Statistics → National Accounts
- Official Statistics → Population Census

Generate available topics dynamically from the actual classified dataset.

Do not manually invent topic lists disconnected from the data.

---

14. CUSTOM MOCK GENERATOR

Allow selection of:

- year(s)
- unit(s)
- topic(s)
- subtopic(s)
- question count
- mode
- question order

Examples:

"50 questions → Linear Models → all years"

"30 questions → Hypothesis Testing + Estimation"

"40 questions → Official Statistics"

"25 questions → NSSO/CSO/National Accounts"

Prevent duplicate questions within a generated mock.

---

15. RANDOMIZATION

For custom practice:

- optionally randomize question order
- optionally randomize option order

When options are randomized, update the correct-answer mapping correctly.

For authentic yearly full-paper mode:

NEVER randomize question order.

---

16. SCORING ENGINE

After every completed mock automatically calculate:

- total questions
- attempted
- correct
- incorrect
- unanswered
- score
- percentage
- accuracy
- time taken
- average time per attempted question

Keep marking configuration separate from question data.

If a specific marking scheme is defined by the source/configuration, implement it accurately.

Do not silently assume a marking scheme.

---

17. POST-SUBMISSION RESULT

After submission display a clear result dashboard.

Example:

Score: 54/80
Percentage: 67.5%

Attempted: 75
Correct: 54
Incorrect: 21
Unanswered: 5

Accuracy: 72%

Time: 1h 48m
Average attempted-question time: ...

Then provide complete review.

---

18. QUESTION-BY-QUESTION REVIEW

For every attempted/unattempted question show:

- original question
- options
- user's answer
- correct answer
- status
- Exam Shortcut
- Tips & Tricks
- Step-by-Step Solution

Allow navigation between reviewed questions.

---

19. ANALYTICS

Track performance by:

- overall
- year
- unit
- topic
- subtopic
- syllabus concept
- question type

Example:

Linear Models                              82%
Statistical Inference and Hypothesis Testing  76%
Official Statistics                         91%

Also calculate:

- strongest unit
- weakest unit
- strongest topics
- weakest topics
- accuracy trend
- score trend
- attempt trend
- time trend

---

20. WEAK-AREA ENGINE

Automatically identify weak areas.

Example:

Weakest topic:
Neyman-Pearson Lemma

Accuracy:
54%

Questions attempted:
24

Recommendation:
Practice Neyman-Pearson Lemma PYQs

Provide:

"Practice My Weak Areas"

This should generate a targeted mock from the user's weak areas.

---

21. MISTAKE BANK

Maintain a local incorrect-question bank.

Features:

- Practice My Mistakes
- Retry Incorrect
- Retry Unanswered
- Bookmark
- Mark for Review

Questions answered incorrectly should automatically become available in the mistake bank.

---

22. BOOKMARKS

Allow users to bookmark questions.

Provide:

"My Bookmarks"

with filtering/search.

---

23. ATTEMPT HISTORY

Store locally:

- mock name
- date/time
- score
- percentage
- accuracy
- correct
- incorrect
- unanswered
- time taken

Display progress across attempts.

Example:

2024 Full Mock (Paper II)

Attempt 1: 54%
Attempt 2: 67%
Attempt 3: 74%

---

24. LOCAL STORAGE

Use browser local storage only, under keys distinct from the Paper-I project (e.g. prefix all keys with `iss_p2_`) so the two platforms can coexist without collision if used on the same device/browser.

Persist:

- attempt history
- bookmarks
- mistakes
- settings
- progress

No backend.

No cloud database.

No server.

Provide:

- Export Progress
- Import Progress
- Reset Progress
- Reset History

Export/import should use local JSON files.

---

25. SEARCH

Provide fast search across:

- question text
- year
- unit
- topic
- subtopic
- syllabus concept

Examples:

"Neyman-Pearson"

"2023"

"Index Numbers"

"Bootstrap"

---

26. QUESTION NAVIGATION

Provide:

- question number grid
- answered indicator
- unanswered indicator
- marked-for-review indicator
- previous
- next
- jump to question
- submit

The interface must remain fast with the entire dataset.

---

27. MOBILE-FIRST UI

Primary targets:

- Samsung Galaxy Tab A9
- iPad/iOS
- desktop/laptop

Requirements:

- responsive layout
- portrait mode
- landscape mode
- large touch targets
- readable text
- readable mathematical notation
- no horizontal scrolling
- fast interaction
- mobile-friendly navigation

Also support desktop keyboard interaction.

---

28. OFFLINE-FIRST — ABSOLUTE REQUIREMENT

This is a 100% offline application.

It MUST operate without Internet access.

No:

- CDN
- external API
- external images
- external fonts
- Google Fonts
- external icon libraries
- Tailwind CDN
- Bootstrap CDN
- online MathJax
- external JavaScript libraries
- network requests
- server
- localhost
- Python
- Node.js
- npm
- database
- backend

Everything required must be local.

The user must be able to open:

"index.html"

directly.

Target:

"file://"

execution.

Do NOT rely on server-side routing.

Do NOT rely on runtime network requests.

Do NOT rely on ES-module imports that fail under local-file execution.

---

29. iOS / IPADOS COMPATIBILITY

Design around iOS/iPadOS local-file restrictions.

The core quiz engine must work from local HTML/CSS/JS.

Do not rely on:

"fetch()"

for loading the local question database.

Do not dynamically request external resources.

Avoid browser APIs that require a server.

The application should remain usable when opened locally through the device's file-management/browser workflow.

---

30. FILE STRUCTURE

Create:

ISS-Statistics-II-Mock/
│
├── index.html
├── questions2.js
├── styles.css
└── README.txt

Keep it portable, and keep the folder name distinct from the Paper-I project (`ISS-Statistics-Mock/`) so both can sit side by side.

The user should be able to copy the entire folder to another device.

Opening "index.html" should launch the application.

---

31. MATHEMATICAL READABILITY

Mathematics must remain readable offline.

Do not depend on online MathJax.

Use an offline-safe mathematical representation.

Ensure symbols/formulas such as:

- H₀ / H₁
- α, β
- λ (likelihood ratio)
- σ², μ
- χ², t, F
- Σ, ∫
- matrix notation (Xβ, X'X, generalized inverse)

remain readable.

Do not allow malformed LaTeX to break the interface.

---

32. VALIDATION — AUTOMATIC INTERNAL STAGE

Validation is mandatory and must happen automatically.

Do NOT ask me to trigger it.

Validate:

FILES

- all uploaded Statistics-II files found
- all years found
- files readable

COUNTS

- questions per year
- total questions

QUESTION INTEGRITY

- unique IDs
- unique year/question number
- question text exists
- options exist
- correct-answer index valid

METADATA

- valid unit (Linear Models / Statistical Inference and Hypothesis Testing / Official Statistics)
- valid topic
- valid subtopic
- valid syllabus mapping

DUPLICATES

Detect:

- duplicate IDs
- duplicate questions
- suspicious duplicates across years

MISSING DATA

Detect:

- missing options
- missing answers
- missing solutions
- missing shortcuts
- missing tips

MATHEMATICS

Detect:

- malformed mathematical notation
- broken rendering
- suspicious expressions

REFERENTIAL INTEGRITY

Detect:

- orphan solutions
- orphan question IDs
- duplicate IDs

Do not silently modify substantive source data to make validation pass.

---

33. DATA AUDIT

Produce an internal validation/audit report:

20XX: XX
20XX: XX
...

TOTAL: XXX

Duplicates: X
Missing options: X
Missing answers: X
Missing solutions: X
Classification issues: X
Source issues: X

If there are problems that can be fixed without altering source data, fix them.

If a source problem cannot be safely resolved, preserve the source and flag it.

---

34. NO-HALLUCINATION RULE

Actual PYQs and AI-generated material must never be confused.

Official-year mocks contain only actual uploaded PYQs.

If synthetic practice questions are ever added in the future, label them:

"AI-GENERATED PRACTICE"

Never mix synthetic questions into official-year PYQ mocks.

---

35. AUTHENTIC PAPER VS PRACTICE MOCK

Implement clearly different behaviours.

AUTHENTIC FULL PAPER

- actual paper
- actual questions
- actual order
- actual options

SECTIONAL PYQ MOCK

- filtered actual PYQs

TOPIC MOCK

- filtered actual PYQs

CUSTOM RANDOM MOCK

- user-defined selection

MISTAKE MOCK

- previously incorrect questions

Do not mix these behaviours.

---

36. KEYBOARD SHORTCUTS

Support:

"1" → option 1

"2" → option 2

"3" → option 3

"4" → option 4

"←" → previous

"→" → next

"M" → mark for review

Do not activate these shortcuts while typing into text inputs.

---

37. ACCESSIBILITY

Provide:

- readable font sizes
- sufficient contrast
- visible focus states
- keyboard navigation
- descriptive controls
- touch-friendly controls

Prioritize clarity over unnecessary visual effects.

---

38. PERFORMANCE

Do not render all questions unnecessarily at once.

Render only what is needed.

Keep JavaScript lightweight.

Avoid unnecessary dependencies.

The dashboard should remain responsive on a Samsung Tab A9.

---

39. DASHBOARD

Create a polished home dashboard.

Include:

HOME

- Full Year Mocks
- Sectional Mocks
- Topic Mocks
- Subtopic Mocks
- Custom Mock
- Practice My Mistakes
- Bookmarks
- Analytics
- Attempt History

MOCK SETUP

Display:

- selected year(s)
- selected unit
- selected topic
- selected subtopic
- question count
- mode
- timer
- order/randomization settings

EXAM SCREEN

Display:

- question
- options
- timer
- progress
- navigation
- mark for review

RESULT SCREEN

Display:

- score
- percentage
- accuracy
- correct
- incorrect
- unanswered
- time
- topic performance

REVIEW SCREEN

Display:

- user's answer
- correct answer
- Exam Shortcut
- Tips & Tricks
- Step-by-Step Solution

---

40. EXAM REALISM

The interface should feel like a serious competitive examination platform.

Avoid unnecessary:

- animations
- decorative clutter
- distracting effects

Prioritize:

- speed
- readability
- accuracy
- navigation
- exam focus

---

41. FINAL OFFLINE TEST

Before declaring completion, perform the following checks conceptually and through available tooling:

TEST A — Disable Internet, open "index.html", verify functionality does not depend on network access.

TEST B — Pick the most recent uploaded year's Full Mock in Strict Exam mode. Verify actual questions, original order, timer, navigation, marking, no answer reveal, then submit and verify score/percentage/accuracy/correct/incorrect/unanswered/time/review/solutions.

TEST C — "[Year] → Official Statistics" — verify only that year's Official Statistics questions appear.

TEST D — "[all years] → Statistical Inference and Hypothesis Testing" — verify all matching questions appear without duplicates.

TEST E — "Statistical Inference → Neyman-Pearson Lemma" — verify topic filtering works.

TEST F — Answer questions incorrectly, open "Practice My Mistakes", verify those questions appear.

TEST G — Test Android/tablet, iPad/iOS, and desktop responsive layouts.

---

42. FINAL QUALITY-CONTROL CHECKLIST

Before delivery verify:

1. All uploaded Statistics-II papers processed.
2. Actual count reported per year.
3. Every question has a unique ID.
4. No placeholder questions.
5. Yearly paper order preserved.
6. Full mocks work.
7. Sectional mocks work.
8. Topic mocks work.
9. Subtopic mocks work.
10. Custom mocks work.
11. Strict Exam Mode works.
12. Learning Mode works.
13. Timer works.
14. Auto-submit works.
15. Mark-for-review works.
16. Scoring works.
17. Percentage works.
18. Accuracy works.
19. Unanswered questions counted.
20. Review works.
21. Exact reveal order works.
22. Analytics work.
23. Weak-area engine works.
24. Mistake bank works.
25. Retry Incorrect works.
26. Retry Unanswered works.
27. Bookmarks work.
28. Attempt history works.
29. Export/import works.
30. Search works.
31. No duplicate questions in generated mocks.
32. Source fidelity preserved.
33. No runtime network dependencies.
34. No CDN.
35. No external fonts.
36. No server.
37. No Python/Node/npm requirement.
38. "file://" target works.
39. Mobile responsive design works.
40. Mathematical notation remains readable offline.

---

43. FINAL DELIVERABLE

Create:

index.html
questions2.js
styles.css
README.txt

The final project must be immediately usable.

README.txt should explain only what is necessary to:

- open the application
- use the main modes
- export/import progress
- reset data

Do not require technical setup.

The final application must not be a toy prototype.

It must contain the complete extracted dataset from the uploaded Statistics-II files.

---

44. FINAL RESPONSE AFTER BUILD

When the complete build is finished, report:

- files processed
- questions extracted per year
- total questions
- validation results
- any unresolved source issues
- files created
- confirmation of offline architecture
- confirmation that no server/API/CDN is required
- major features implemented

Do not ask me to provide another prompt to finish the project.

---

45. CORE ARCHITECTURE

Follow this pipeline exactly:

UPLOAD STATISTICS-II PAPERS
↓
READ ALL PAPERS
↓
EXTRACT EVERY QUESTION
↓
VERIFY COUNTS
↓
PRESERVE SOURCE FIDELITY
↓
CLASSIFY USING STATISTICS-II SYLLABUS (Linear Models / Statistical Inference & Hypothesis Testing / Official Statistics)
↓
VALIDATE DATA
↓
BUILD QUESTIONS DATABASE
↓
BUILD MOCK GENERATOR
↓
BUILD AUTHENTIC YEARLY PAPERS
↓
BUILD SECTIONAL/TOPIC/SUBTOPIC MOCKS
↓
BUILD CUSTOM MOCK ENGINE
↓
BUILD STRICT EXAM MODE
↓
BUILD LEARNING MODE
↓
BUILD SCORING ENGINE
↓
BUILD REVIEW ENGINE
↓
BUILD ANALYTICS
↓
BUILD WEAK-AREA ENGINE
↓
BUILD MISTAKE BANK
↓
BUILD BOOKMARKS + HISTORY
↓
BUILD EXPORT/IMPORT
↓
BUILD MOBILE UI
↓
TEST OFFLINE
↓
FINAL VALIDATION
↓
FIX IMPLEMENTATION ISSUES
↓
DELIVER COMPLETE APPLICATION

DO NOT SKIP STAGES.

FINAL PRINCIPLE

SOURCE ACCURACY > VISUAL POLISH

OFFLINE RELIABILITY > COMPLEXITY

ACTUAL PYQs > FABRICATION

EXAM REALISM > DECORATION

Build the complete UPSC ISS Statistics-II offline mock platform from the uploaded source files.
