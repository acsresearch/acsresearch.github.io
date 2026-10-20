---
title: "ACS Infra: free access to large base models for LLM psychology research"
author: "Martin Vaněk, Jan Kulveit, Ondřej Havlíček, Ivar Frisch, Veronika Hendrychová, Theia Vogel, Raymond Douglas, Charles Amis, Faw Ali"
date: 2026-10-20
tags: [ACS Infra, Base models, LLM psychology]
hide: true
---

*TL;DR: We're opening a platform serving large open base models to researchers and tinkerers working on LLM psychology and adjacent areas. It's free and comes with logprobs, activation harvesting and steering, a browser workbench and a loom. Read [here](/posts/intro-to-lm-psychology) what research we’d like to see and apply for access at [https://infra.acsresearch.org/signup](https://infra.acsresearch.org/signup).*

---

Much of what we want to understand about LLMs (e.g. where their beliefs, propensities and characters come from) is split between pre-training and post-training. If you want to claim that post-training instilled certain psychological properties, such as a self-model or sycophancy, you need to know what was there before. This means looking at base models, ideally big ones.

In practice, getting your hands on a large base model is cumbersome. Most API providers exclusively serve chat models, without research-relevant features like logprobs or access to activations. Self-hosting models close to frontier scale can cost at least tens of thousands of dollars and take significant amounts of time to set up. This can be inaccessible for individual researchers and wasteful for each research group to rebuild separately. As a result, researchers often run experiments on small models (from where results may not transfer to frontier scale), or don't investigate base model behavior at all.

We kept running into this in our own work at [ACS Research](https://acsresearch.org/), and so did multiple LLM psychology researchers we talked to. So, we built a [base-models hosting platform](https://infra.acsresearch.org/), ran it with a small group of pilot users over the summer, and are now opening it up.

## How we’d like people to use the platform

Broadly, we want to support interesting research into understanding LLMs, especially their psychology. For a longform explanation of what we find interesting, see our [opinionated introduction to LLM psychology](/posts/intro-to-lm-psychology).

Example directions that could be interesting:

- Base vs. chat comparisons for claims about what post-training does: personality, sycophancy, self-reports, calibration.
- Which identities and self-models a base model will readily take up, and how that compares to the post-trained versions (see [The Artificial Self](https://www.lesswrong.com/posts/AvFAKAN4C4n6GTriR/the-artificial-self) and [Models differ in identity propensities](https://www.lesswrong.com/posts/rq8RBKPXT3QufQK2N/models-differ-in-identity-propensities))
- Introspection and self-report without the assistant in the way: can base models introspect, or no?
  - We offer intermediate activation harvesting for Latent Introspection-style lens studies.
- Re-running interesting results from small models at 400B+ scale.

We’re also happy for researchers and cyborgists to spend time in the loom with no particular goal: talking to models directly is an underrated way to build intuitions and gain insights.

If you're doing (or about to start) research on LLM psychology, interpretability, cyborgism or something adjacent, and can say in a few sentences what interesting things you'd use it for, please do apply (even if you’re unsure if you’re a good fit). We don’t require previous publications or affiliation. Applications are reviewed by the ACS team, usually within a few days.

## What we built

The overall goal is to decrease friction for doing good research like that outlined above, and we’re excited to develop infra to support it.

Examples of current features:

- Browser workbench and loom
- Completions API with logprobs
- Activation harvesting and steering
- Community Discord server for sharing results, ideas, and feature requests

Currently served models:

- **Llama 3.1 405B**, probably the most widely used large open base model, and many existing intuitions about base model behaviour were built on it.
- **Llama 3.1 8B**, for fast testing.
- **Trinity-Large-TrueBase**, a recent 398B A13B mixture-of-experts model from Arcee, released as a raw pre-training checkpoint taken before annealing.

Limitations

- It's research infrastructure, not a commercial product. Capacity is sized for roughly 70-100 active researchers, models may rotate, the goal is not 100% uptime. Expect some rough edges. (That being said, the platform has been tested for more than a month.)
- We currently plan to run it for at least a year, probably more, to allow longer running research and stability. Currently we have a dedicated team working on it. After ~6 months, we’ll probably evaluate how interesting research is being done with the platform and thus how much to prioritize developing it further.

In general, we plan to iterate significantly based on feedback and on what turns out to be useful in practice, including which models and features we serve. If the platform is a success, we might also expand ACS Infra in the direction of hosted infrastructure for post-training pipelines and techniques, another topic of our work.

## Getting involved

- **Apply** if you'd use it: [infra.acsresearch.org/signup](https://infra.acsresearch.org/signup)
  - **If you run a program** (MATS, PIBBSS, a reading group, a course) and would like a batch of accounts, email us [infra@acsresearch.org](mailto:infra@acsresearch.org).
- Tell us if there are things that might be within the scope of the platform and could be highly useful for similar research

*Thanks to our beta testers for testing and feedback, and to Coefficient Giving for funding the platform.*

---

## FAQ

### Who made this?

We're [ACS Research](https://acsresearch.org/). Some of our LLM psychology work: [three-layer model](https://www.lesswrong.com/posts/zuXo9imNKYspu9HGv/a-three-layer-model-of-llm-psychology), [The Artificial Self](https://www.lesswrong.com/posts/AvFAKAN4C4n6GTriR/the-artificial-self), [Latent Introspection](https://www.lesswrong.com/posts/aZRgHcxz9jf22hrBs/latent-introspection-and-other-open-source-introspection) and [Persona Self-Replication](https://www.lesswrong.com/posts/BhbBhk6evdHaHDva9/persona-self-replication-experiment).

Funding for this project comes from [Coefficient Giving](https://coefficientgiving.org/).

### How long will it stay free?

Basically for as long as we are still excited about the research that people do with the platform and as the grant permits (at least a year).

### Can you add model X?

Probably, if enough active users demand it. Currently we lean towards hosting only base models, as post-trained versions are available elsewhere. We may host post-trained versions if some specific combination of weights and research tools is not provided by the market.

### Are there other options to access base models?

Some, fairly limited, that’s why we’re doing this.

- [**NDIF**](https://ndif.us/) offers free access to bases of Llama 3.1 8B, 70B and 405B but requires US residency or a US collaborator.
- Commercial providers have served Llama 3.1 405B base on and off, but availability has been patchy, often without many features important for research.
- Self-hosting / renting compute, e.g. via [Modal](https://modal.com/) using [vLLM](https://www.lesswrong.com/posts/3bs27nZQuEcKhXf7q)

We also expect to be able to iterate much faster on feedback and requests than NDIF or commercial providers.
