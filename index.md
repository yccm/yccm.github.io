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
<div class="hero-cta">
<a class="btn btn-outline" href="{{site.google_scholar}}">Google Scholar</a>
{% if site.resume %}
<a class="btn btn-outline" href="{{site.resume}}">Curriculum Vitae</a>
{% endif %}
{% if site.github_link %}
<a class="btn btn-outline" href="{{ site.github_link }}">GitHub</a>
{% endif %}
{% if site.linkedin %}
<a class="btn btn-outline" href="{{ site.linkedin }}">LinkedIn</a>
{% endif %}
{% if site.twitter %}
<a class="btn btn-outline" href="{{ site.twitter }}">X</a>
{% endif %}
</div>
</div>
</div>
</div>
<div class="hero-bg"></div>
<!-- <img class="hero-sticker" src="assets/img/daily_life.png" alt="Daily life" loading="lazy" decoding="async"/> -->
</section>

## About Me

Hello everyone, my name is Yuchen Ma. I am a PhD student in Computer Science at [LMU Munich](https://www.lmu.de/en/), supervised by [Professor Stefan Feuerriegel](https://scholar.google.com/citations?user=TtgGRnEAAAAJ&hl=de).  
I’m very happy to [connect and discuss potential collaborations](mailto:yuchen.ma@lmu.de).  

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

<div class="publication">
<p class="title">Foundation Models for Causal Inference via Prior-Data Fitted Networks.</p>
<p><strong>Yuchen Ma</strong>, Dennis Frauen, Emil Javurek, Stefan Feuerriegel.</p>
<p><span class="conference">ArXiv</span></p>
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
