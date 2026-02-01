---
layout: homepage
hero: true
---

<section class="hero">
<div class="content-container">
<div class="hero-inner">
<img class="hero-avatar" src="{{ site.avatar }}" alt="{{ site.title }}" loading="eager" decoding="async"/>
<div class="hero-text">
<h1 class="hero-title">Yuchen Ma | 马羽宸</h1>
<p class="hero-subtitle">{{ site.position }} · <a href="{{site.affiliation_link}}">{{site.affiliation}}</a></p>
<div class="hero-about">
<p>Hello everyone, my name is Yuchen Ma. I am a PhD student in Computer Science at <a href="https://www.lmu.de/en/">LMU Munich</a>, supervised by <a href="https://scholar.google.com/citations?user=TtgGRnEAAAAJ&hl=de">Professor Stefan Feuerriegel</a>. My research is primarily focused on causal inference and large language models, with emphasis on alignment, trustworthiness, and agentic AI. I'm very happy to <a href="mailto:yuchen.ma@lmu.de">connect and discuss potential collaborations</a>.</p>
</div>
<div class="hero-cta">
<a class="icon-link" href="{{site.google_scholar}}" aria-label="Google Scholar" title="Google Scholar">
<img src="assets/images/google-scholar.png" alt="Google Scholar" width="32" height="32">
</a>
{% if site.resume %}
<a class="icon-link" href="{{site.resume}}" aria-label="Curriculum Vitae" title="CV">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#232323" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
</a>
{% endif %}
{% if site.github_link %}
<a class="icon-link" href="{{ site.github_link }}" aria-label="GitHub" title="GitHub">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#181717"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
</a>
{% endif %}
{% if site.linkedin %}
<a class="icon-link" href="{{ site.linkedin }}" aria-label="LinkedIn" title="LinkedIn">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
</a>
{% endif %}
{% if site.twitter %}
<a class="icon-link" href="{{ site.twitter }}" aria-label="X" title="X (Twitter)">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#000000"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
</a>
{% endif %}
</div>
</div>
</div>
</div>
<div class="hero-bg"></div>
<!-- <img class="hero-sticker" src="assets/img/daily_life.png" alt="Daily life" loading="lazy" decoding="async"/> -->
</section>

## Research Focus

<div class="info-block">
  <ul>
    <li><strong>LLM Alignment and Agentic AI:</strong> Develop alignment methods and agentic AI for large language models, with a focus on efficient data synthesis, personalization, prompt optimization, reinforcement learning, and applications of agentic workflows.</li>
    <li><strong>Causal Foundation Models:</strong> Develop scalable transformer-based foundation models for Bayesian causal inference, enabling zero-shot, in-context learning of treatment effects with uncertainty quantification.</li>
    <li><strong>Generative Models (Diffusion Models / LLMs) with Causal Inference:</strong> Explore diffusion models and large language models as generative tools for causal inference, with an emphasis on modeling distributions and handling text-based confounding.</li>
  </ul>
</div>



<div class="news-container">
<div class="news-timeline">

<h2>News</h2>

<div class="news-item">
<strong>Jan. 2026</strong>&nbsp; One paper is accepted by ICLR 2026. See you in Rio de Janeiro, Brazil!
</div>

<div class="news-item">
<strong>Jan. 2026</strong>&nbsp; We just released our CausalFM toolkit (<a href="https://causalfm-toolkit.readthedocs.io/en/latest/">docs link</a>), welcome to have a try!
</div>


<div class="news-item">
<strong>Sep. 2025</strong>&nbsp; One paper is accepted by NeurIPS 2025. See you in San Diego!
</div>

<div class="news-item">
<strong>May. 2025</strong>&nbsp; One paper is accepted by KDD 2025. See you in Toronto!
</div>

<div class="news-item">
<strong>Sep. 2024</strong>&nbsp; One paper is accepted by NeurIPS 2024. See you in Vancouver!
</div>

</div>
</div>


<!-- ## Education

<div class="education-container">
  <div class="education-item">
    <div class="education-period">
      <strong>Nov. 2022</strong><br>
      <strong>Present</strong>
    </div>
    <div class="education-content">
      <div class="education-degree">Ph.D. in Computer Science</div>
      <div class="education-school"><img src='assets/img/LMU.png' style='height: 1.3em; vertical-align: middle;'> LMU Munich, Germany</div>
      <div class="education-school">Advisor: Prof. Stefan Feuerriegel</div>
    </div>
  </div> -->

  <!-- <div class="education-item">
    <div class="education-period">
      <strong>Oct. 2019</strong><br>
      <strong>Sep. 2022</strong>
    </div>
    <div class="education-content">
      <div class="education-degree">M.Sc. in Mathematics & Computer Vision (NLP specialization)</div>
      <div class="education-school"><img src='assets/img/Universität_Heidelberg.png' style='height: 1.3em; vertical-align: middle;'>Heidelberg University, Germany</div>
      <div class="education-school">Advisor: Prof. Zeynep Akata</div>
</div>
</div> -->

  <!-- <div class="education-item">
    <div class="education-period">
      <strong>Sep. 2015</strong><br>
      <strong>Jun. 2019</strong>
    </div>
    <div class="education-content">
      <div class="education-degree">B.Sc. in Mathematics</div>
      <div class="education-school"><img src='assets/img/Shandong_University_Emblem.png' style='height: 1.3em; vertical-align: middle;'>Shandong University, China</div>
      <div class="education-school">Advisor: Prof. Guanghui Wang</div>
</div>
</div>
</div> -->

## Publications

<div class="publication">
<p class="title">Foundation Models for Causal Inference via Prior-Data Fitted Networks.</p>
<p><strong>Yuchen Ma</strong>, Dennis Frauen, Emil Javurek, Stefan Feuerriegel.</p>
<p><span class="conference">ICLR 2026</span></p>
</div>

<div class="publication">
<p class="title">LLM-based Treatment Effect Estimation under Inference Time Text Confounding.</p>
<p><strong>Yuchen Ma</strong>, Dennis Frauen, Jonas Schweisthal, Stefan Feuerriegel.</p>
<p><span class="conference">NeurIPS 2025</span></p>
</div>

<div class="publication">
<p class="title">A Diffusion-Based Method for Learning the Multi-Outcome Distribution of Medical Treatments.</p>
<p><strong>Yuchen Ma</strong>, Jonas Schweisthal, Hengrui Zhang, Stefan Feuerriegel.</p>
<p><span class="conference">KDD 2025</span></p>
</div>

<div class="publication">
<p class="title">DiffPO: A Causal Diffusion Model for Learning Distributions of Potential Outcomes.</p>
<p><strong>Yuchen Ma</strong>, Valentyn Melnychuk, Jonas Schweisthal, Stefan Feuerriegel.</p>
<p><span class="conference">NeurIPS 2024</span></p>
</div>

<div class="publication">
<p class="title">Distilling Knowledge from Self-Supervised Teacher by Embedding Graph Alignment.</p>
<p><strong>Yuchen Ma</strong>, Yanbei Chen, Zeynep Akata.</p>
<p><span class="conference">BMVC 2022</span></p>
</div>

<!-- <div class="publication">
<p class="title">Consistent End-to-End Estimation for Counterfactual Fairness with Generative Models.</p>
<p>Valentyn Melnychuk, <strong>Yuchen Ma</strong>, Dennis Frauen, Stefan Feuerriegel.</p>
<p><span class="conference">Under Review</span></p>
</div> -->

<!-- ## Experience -->

<!-- <div class="internship-container">
  <div class="internship-item">
    <div class="internship-period">
      <strong>Jun. 2021</strong><br>
      <strong>Feb. 2022</strong>
    </div>
    <div class="internship-content">
      <div class="internship-position">Research Assistant – Computer Vision & Knowledge Distillation</div>
      <div class="internship-company"><img src='assets/img/Max-Planck-Gesellschaft.png' style='height: 1.5em; vertical-align: middle;'>Max Planck Institute</div>
    </div>
  </div>

  <div class="internship-item">
    <div class="internship-period">
      <strong>Dec. 2022</strong><br>
      <strong>Aug. 2025</strong>
    </div>
    <div class="internship-content">
      <div class="internship-position">Teaching Assistant – Advanced AI in Businesses and Organizations</div>
      <div class="internship-company"><img src='assets/img/LMU.png' style='height: 1.5em; vertical-align: middle;'> LMU Munich</div>
    </div>
  </div>
</div> -->

<!-- ## Service & Talks

<div class="info-block">
  <ul>
    <li>Program Committee / Reviewer: NeurIPS, ICML, ICLR, KDD, AAAI, AISTATS</li>
    <li>Co-organizer: 4th MCML Workshop on Causal Machine Learning (LMU Munich & MCML)</li>
    <li>Invited Talk: Foundation Models for Causal Inference — Instacart (online), 2025</li>
  </ul>
</div> -->

<!-- ## Honors & Awards

<div class="award-item">
<strong>2016</strong> &nbsp; China Undergraduate Mathematical Contest in Modeling — Provincial Third Prize
</div>

<div class="award-item">
<strong>2017</strong> &nbsp; China Undergraduate Mathematical Contest in Modeling — Provincial Third Prize
</div>

<div class="award-item">
<strong>2016</strong> &nbsp; Chinese Mathematics Competitions — National Third Prize
</div>

<div class="award-item">
<strong>2016</strong> &nbsp; Chinese Mathematics Competitions — Provincial Second Prize
</div> -->
