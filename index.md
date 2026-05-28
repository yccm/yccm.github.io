---
layout: homepage
hero: true
---

<section class="hero">
  <div class="hero-grid">
    <div class="hero-text">
      <div class="hero-eyebrow"><span class="hero-eyebrow-mark"></span>Ph.D. Candidate · LMU Munich</div>
      <h1 class="hero-title">Yuchen <em>Ma</em><br><span class="hero-title-zh">马羽宸</span></h1>
      <p class="hero-tagline">
        Working at the intersection of <em>causal inference</em>, <em>foundation models</em>, and <em>generative AI</em> — with a focus on building methods that are reliable, identifiable, and useful in practice.
      </p>
      <div class="hero-cta">
        <a class="pill pill-dark" href="mailto:yuchen.ma@lmu.de">Get in touch →</a>
        <a class="pill" href="{{site.google_scholar}}">Google Scholar</a>
        {% if site.github_link %}<a class="pill" href="{{ site.github_link }}">GitHub</a>{% endif %}
        {% if site.linkedin %}<a class="pill" href="{{ site.linkedin }}">LinkedIn</a>{% endif %}
      </div>
    </div>
    <div class="hero-portrait">
      <img src="{{ site.avatar }}" alt="{{ site.title }}" loading="eager" decoding="async"/>
      <div class="hero-portrait-tag">Munich · 2026</div>
    </div>
  </div>
</section>

<section class="section" id="about">
<div class="section-head">
  <span class="section-no">01</span>
  <span class="section-label">About</span>
</div>

<div class="prose">
<p>I am a PhD student in Computer Science at <a href="https://www.lmu.de/en/">LMU Munich</a>, supervised by <a href="https://scholar.google.com/citations?user=TtgGRnEAAAAJ&hl=de">Prof. Stefan Feuerriegel</a>. Previously, I studied mathematics and computer vision at Heidelberg University and Shandong University, and spent time as a researcher at the Max Planck Institute.</p>
<p>I'm happy to <a href="mailto:yuchen.ma@lmu.de">connect and discuss potential collaborations</a>.</p>
</div>
</section>

<section class="section" id="research">
<div class="section-head">
  <span class="section-no">02</span>
  <span class="section-label">Research</span>
</div>

<div class="research-grid">
  <article class="research-card">
    <div class="research-num">i.</div>
    <h3 class="research-title">LLM Alignment &amp; Agentic AI</h3>
    <p>Alignment methods and agentic systems for large language models — efficient data synthesis, personalization, prompt optimization, reinforcement learning, and agentic workflows.</p>
  </article>
  <article class="research-card">
    <div class="research-num">ii.</div>
    <h3 class="research-title">Causal Foundation Models</h3>
    <p>Scalable transformer-based foundation models for Bayesian causal inference — enabling zero-shot, in-context learning of treatment effects with calibrated uncertainty.</p>
  </article>
  <article class="research-card">
    <div class="research-num">iii.</div>
    <h3 class="research-title">Generative Models for Causality</h3>
    <p>Diffusion models and LLMs as generative tools for causal inference, with an emphasis on modeling outcome distributions and handling text-based confounding.</p>
  </article>
</div>
</section>

<section class="section" id="news">
<div class="section-head">
  <span class="section-no">03</span>
  <span class="section-label">News</span>
</div>

<div class="news-rail">
  <div class="news-row">
    <span class="news-when">Apr&nbsp;2026</span>
    <span class="news-what">Organizing the <strong><a href="https://kdd26-relscifm.github.io/">RelSciFM @ KDD&nbsp;2026</a></strong> workshop on Reliable Scientific Foundation Models. <strong>Call for Papers</strong> open — submission deadline <em>April&nbsp;30, 2026</em>.</span>
  </div>
  <div class="news-row">
    <span class="news-when">Mar&nbsp;2026</span>
    <span class="news-what">Joining <strong>Microsoft Research</strong> as a research intern this summer — see you in Seattle.</span>
  </div>
  <div class="news-row">
    <span class="news-when">Jan&nbsp;2026</span>
    <span class="news-what">One paper accepted at <strong>ICLR&nbsp;2026</strong>. See you in Rio de Janeiro.</span>
  </div>
  <div class="news-row">
    <span class="news-when">Jan&nbsp;2026</span>
    <span class="news-what">Released the <strong>CausalFM toolkit</strong> — <a href="https://causalfm-toolkit.readthedocs.io/en/latest/">docs ↗</a>.</span>
  </div>
  <div class="news-row">
    <span class="news-when">Sep&nbsp;2025</span>
    <span class="news-what">One paper accepted at <strong>NeurIPS&nbsp;2025</strong>. See you in San Diego.</span>
  </div>
  <div class="news-row">
    <span class="news-when">May&nbsp;2025</span>
    <span class="news-what">One paper accepted at <strong>KDD&nbsp;2025</strong>. See you in Toronto.</span>
  </div>
  <div class="news-row">
    <span class="news-when">Sep&nbsp;2024</span>
    <span class="news-what">One paper accepted at <strong>NeurIPS&nbsp;2024</strong>. See you in Vancouver.</span>
  </div>
</div>
</section>

<section class="section" id="publications">
<div class="section-head">
  <span class="section-no">04</span>
  <span class="section-label">Selected Publications</span>
</div>

<ol class="pub-list">
  <li class="pub">
    <span class="pub-no">01</span>
    <div class="pub-body">
      <h3 class="pub-title">Foundation Models for Causal Inference via Prior-Data Fitted Networks</h3>
      <p class="pub-authors"><strong>Yuchen Ma</strong>, Dennis Frauen, Emil Javurek, Stefan Feuerriegel</p>
    </div>
    <span class="pub-venue">ICLR 2026</span>
  </li>
  <li class="pub">
    <span class="pub-no">02</span>
    <div class="pub-body">
      <h3 class="pub-title">LLM-based Treatment Effect Estimation under Inference Time Text Confounding</h3>
      <p class="pub-authors"><strong>Yuchen Ma</strong>, Dennis Frauen, Jonas Schweisthal, Stefan Feuerriegel</p>
    </div>
    <span class="pub-venue">NeurIPS 2025</span>
  </li>
  <li class="pub">
    <span class="pub-no">03</span>
    <div class="pub-body">
      <h3 class="pub-title">A Diffusion-Based Method for Learning the Multi-Outcome Distribution of Medical Treatments</h3>
      <p class="pub-authors"><strong>Yuchen Ma</strong>, Jonas Schweisthal, Hengrui Zhang, Stefan Feuerriegel</p>
    </div>
    <span class="pub-venue">KDD 2025</span>
  </li>
  <li class="pub">
    <span class="pub-no">04</span>
    <div class="pub-body">
      <h3 class="pub-title">DiffPO: A Causal Diffusion Model for Learning Distributions of Potential Outcomes</h3>
      <p class="pub-authors"><strong>Yuchen Ma</strong>, Valentyn Melnychuk, Jonas Schweisthal, Stefan Feuerriegel</p>
    </div>
    <span class="pub-venue">NeurIPS 2024</span>
  </li>
  <li class="pub">
    <span class="pub-no">05</span>
    <div class="pub-body">
      <h3 class="pub-title">Distilling Knowledge from Self-Supervised Teacher by Embedding Graph Alignment</h3>
      <p class="pub-authors"><strong>Yuchen Ma</strong>, Yanbei Chen, Zeynep Akata</p>
    </div>
    <span class="pub-venue">BMVC 2022</span>
  </li>
</ol>
</section>

<section class="section" id="education">
<div class="section-head">
  <span class="section-no">05</span>
  <span class="section-label">Education</span>
</div>

<div class="rail">
  <article class="rail-row">
    <div class="rail-when">2022 — Present</div>
    <div class="rail-body">
      <h3 class="rail-title">Ph.D. in Computer Science</h3>
      <p class="rail-where"><img src="assets/img/LMU.png" alt=""/> LMU Munich, Germany</p>
      <p class="rail-meta">Advisor: <a href="https://scholar.google.com/citations?user=TtgGRnEAAAAJ&hl=en">Prof. Stefan Feuerriegel</a></p>
    </div>
  </article>
  <article class="rail-row">
    <div class="rail-when">2019 — 2022</div>
    <div class="rail-body">
      <h3 class="rail-title">M.Sc. in Mathematics &amp; Computer Vision <span class="rail-tag">NLP</span></h3>
      <p class="rail-where"><img src="assets/img/Heidelberg_University.png" alt=""/> Heidelberg University, Germany</p>
      <p class="rail-meta">Advisor: Prof. Zeynep Akata</p>
    </div>
  </article>
  <article class="rail-row">
    <div class="rail-when">2015 — 2019</div>
    <div class="rail-body">
      <h3 class="rail-title">B.Sc. in Mathematics</h3>
      <p class="rail-where"><img src="assets/img/shandong-university-logo.jpg" alt=""/> Shandong University, China</p>
      <p class="rail-meta">Advisor: Prof. Guanghui Wang</p>
    </div>
  </article>
</div>
</section>

<section class="section" id="experience">
<div class="section-head">
  <span class="section-no">06</span>
  <span class="section-label">Experience</span>
</div>

<div class="rail">
  <article class="rail-row">
    <div class="rail-when">Jun — Sep 2026</div>
    <div class="rail-body">
      <h3 class="rail-title">Research Intern</h3>
      <p class="rail-where"><img src="assets/img/Microsoft_logo.svg.png" alt=""/> Microsoft Research</p>
    </div>
  </article>
  <article class="rail-row">
    <div class="rail-when">Jun 2021 — Feb 2022</div>
    <div class="rail-body">
      <h3 class="rail-title">Researcher</h3>
      <p class="rail-where"><img src="assets/img/Max-Planck-Gesellschaft.png" alt=""/> Max Planck Institute</p>
    </div>
  </article>
</div>
</section>

<section class="contact-strip">
  <div class="contact-inner">
    <p class="contact-eyebrow">— Get in touch</p>
    <h2 class="contact-headline">Open to <em>collaboration</em><br>and good <em>conversations</em>.</h2>
    <div class="contact-actions">
      <a class="pill pill-light" href="mailto:yuchen.ma@lmu.de">yuchen.ma@lmu.de</a>
      <a class="pill pill-light-outline" href="{{site.google_scholar}}">Google Scholar</a>
    </div>
  </div>
</section>
