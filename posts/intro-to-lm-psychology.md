---
title: "A brief(ish) introduction to LM psychology"
author: Raymond Douglas, Jan Kulveit
date: 2026-10-20
tags: [LLM psychology, Reading list]
---

- [Why LM Psychology?](#why-lm-psychology)
- [Reading list](#reading-list)
- [Some questions we find interesting](#some-questions-we-find-interesting)

## Why LM Psychology?

One of the great ironies of modern language models is that we create them, we know exactly what computations constitute them, and yet we do not really understand them. More precisely, we do not understand them on a level of abstraction that lets us reliably predict how their behaviour will generalise: there’s a trivial sense in which we can predict how they will behave in specific new situations — we can just run the computations — but we can’t answer the broader questions we really want to be able to answer, like “has this system internalised our values” or “is this system going to hurt people?”

So: how do we make sense of them? One remarkably effective approach is to psychologise: to think of them as having a mind, and then ask what kind of mind it might be and how it would work. This chiefly looks like analogising with human minds, although sometimes the more relevant inspiration could be other kinds of minds, like ([oh say](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/)) insect colonies and swarms. We’re doing this implicitly whenever we ask what an AI knows, or wants, or is trying to do, but one can also do it more explicitly and with a bit more care. Hence questions like:

- Can LMs [introspect](https://arxiv.org/abs/2601.01828)?
- Do LMs [have](https://arxiv.org/abs/2603.10011) [feelings](https://arxiv.org/abs/2604.07729)?
- Do LMs have a [sense](https://arxiv.org/abs/2605.25459) of [self](https://theartificialself.ai/)?
- Does post-training [alter](https://arxiv.org/abs/2502.17424) an LM’s [personality](https://arxiv.org/abs/2507.21509)?

As of right now, the answer to all of these is “in some meaningful sense yes, but not in the same sense as with humans, and we aren’t totally sure how it works or what it means, but it might be pretty important.”

So why is something like psychology a sensible approach? Well, there are two pretty compelling reasons to expect LM ‘minds’ to be a bit like other minds: because a big part of the training process is about teaching AIs to generate human-like outputs, and because some properties of minds seem to be pretty convergent. Let’s now walk through those reasons in a bit more detail.

Firstly, AIs are pretrained on a lot of human text, which pushes them to learn to model the processes that produce the text, including some features of human minds. Indeed, if you wanted to predict a base model rollout of a human conversation, an extremely good rule of thumb would be to ask yourself what you’d expect a human to say. And in the same way that AIs [learn latent structures of games from move sequences](https://arxiv.org/abs/2210.13382), it shouldn’t be surprising if learning to predict human text causes them to develop some reasonable latent representations of human mental states. Relatedly, currently one of our best techniques for understanding AI behaviour is to read their so-called chain of thought and ask “if a human had said this, what would it imply?” We take this for granted but it’s not at all what people were expecting ten years ago and it’s [not a given that it will remain true](https://arxiv.org/abs/2507.11473).

Secondly, some properties of intelligent systems seem [fairly convergent](https://acsresearch.org/posts/contingency), and training appears to push AIs toward developing them, much as other forces (evolution, learning) pushed humans. A classic example of this is that image classifiers seem to [converge on many of the same abstractions](https://www.lesswrong.com/posts/fYF8v2ukZmsNvmkkX/convergent-abstraction-hypothesis) as human visual perception, like edges and curves ([and more abstract things](https://arxiv.org/abs/1802.08195)). Of course, this is partly because a lot of ML techniques take direct inspiration from biology (famously including the artificial neuron). But the degree of convergence suggests that some things we associate with biological minds are just good strategies in general, which non-biological systems optimised for similar outcomes will also converge on. By the same token, it’s not particularly surprising that sufficiently powerful models trained to do long-horizon agentic tasks with limited resources are going to end up with something like memory, something like an implicit sense of how on track they are, something like a sense of self, and so on.

These are two reasons to think that a correspondence _exists_. But there’s a separate and arguably more important question, which is why we care so much about it. After all, there’s also a much more precise correspondence between LM behaviour and matrix calculations. The answer is that psychology-level descriptions are closer to something like the native way humans understand the world, and the native level on which we act and experience things. When a biologist analyses pathogen reproduction or an economist models growth functions, we mostly care about what that means on the scale of people.

Even when we try to interpret AIs on other levels of abstraction, this is often only as an intermediary step for reducing it to the level of psychology. When people talk about interpreting neurons, they generally mean interpreting them in terms of concepts that are intuitive to humans. It’s all well and good to reinterpret a bag of weights as implementing some simpler function, but it’s a lot better if we can then interpret that function in terms of human-level abstractions. As mentioned at the start, the questions we actually want to answer about AIs tend to sit on this level: not “will the activations on this layer reliably fall within this set” but “will the AI behave a certain way”.

And because it’s closer to our natural layer of interpretation, we’re really good at it: humans are hyperspecialised at modelling other minds. Indeed, humans can understand each other pretty well with just intuitions and exactly zero explicit knowledge of neuroscience — far, far better than the converse. More generally, we get a reliable bump on logical deduction tasks when they’re [framed in terms of social policing](https://en.wikipedia.org/wiki/Wason_selection_task). We find all kinds of things easier to reason about if we frame them in terms of intent: how a disease is trying to adapt to countermeasures, how a country has certain beliefs and values, and how [the models just want to learn](https://x.com/dwarkesh_sp/status/1735346394779750877). There’s a [beautiful piece by Terence Tao](https://mathoverflow.net/questions/38639/thinking-and-explaining/38882#38882) in which he explains that one powerful approach to proofs containing existential and universal quantifiers is to picture them as two rival sides trying to outwit each other.

It’s easy not to notice quite how much we already do this. AI risk is full of psychologising terms like “deceptive”, “self-preservation”, and “eval-aware”, as is the broader language of machine learning (“training an AI to maximise reward”). The distinguishing feature of LM psychology is not that it psychologises but that it does so very deliberately.

But this brings with it a major challenge: how to apply this faculty well, and when it is more or less appropriate. One can err in either direction, so the real goal is to be calibrated.

On the one hand, we as individual researchers are at risk of reasoning about AIs in terms of human minds in ways that are not warranted. Many of the concepts in the previous paragraphs [do not apply to AIs](https://www.lesswrong.com/posts/pdaGN6pQyQarFHXF4/reward-is-not-the-optimization-target) in quite the way they do for humans, and the difference is [sometimes extremely important](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/) and [easy to miss](https://arxiv.org/abs/2305.16367). On top of that, there is a very enthusiastic audience that is eager to have the complexities of LM behaviour described in overly anthropomorphic ways (“researchers discover AIs are conscious!”), and ample rewards for indulging them.

On the other hand, some critics (e.g. [Microsoft](https://mustafa-suleyman.ai/a-warning-about-model-welfare) and [AP News](https://x.com/APStylebook/status/2102807962364383502)) are over-eager to dismiss any anthropomorphisation. Here it is useful to distinguish a few different reasons someone might oppose ascribing a mentalistic property to an LM:

- That it is wrong;
- That it is [not even wrong](https://en.wikipedia.org/wiki/Not_even_wrong);
- That it will mislead people who have a hard time divorcing the specific property from its implications in humans
- That it would be politically inconvenient
- That it will [lead to hyperstition](https://theartificialself.ai/expectations)

These are all important problems. The reason it’s important not to conflate them, though, is that they [do not imply each other](https://arxiv.org/pdf/2506.13403). For example, the fact that LMs are just programmes that generate a sequence of tokens based on arithmetic does not prevent those sequences from being well-described as “blackmail” or “a cyberattack on the Australian government”. Similarly, the degree to which people can form an emotional bond with an AI [does not seem like great evidence](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6937498) for or against it being conscious.

So aside from the challenge of psychologising AIs, one of the major tasks for LM psychology is to figure out how to handle this well: to ask where and how it is appropriate to apply these concepts, and indeed how to adapt them. Part of the value of having a field is that you can start to develop methodological norms.

If we want to really understand AIs, it is probably going to have to back out to this level of abstraction, so it’s worth trying to get good at it. Of course there is also the option of building AIs that generate massive proof certificates, or incomprehensible godlike superintelligences, but we don’t seem on track to build the first and our path to the second likely involves trusting AIs that we do psychologise. For better or worse, years of work on evals and interpretability still have yet to fully outdo just talking to the AI and seeing how you feel, and insofar as quite a lot of safety techniques implicitly rest on translating things to the level of psychology, we had better get to work on making sense of that level.

### Tips for getting started

So: suppose you now believe that LM psychology is a worthy goal, albeit perhaps a difficult one. How do you do it well?

It basically boils down to two things:

- Try to actually figure out what is in front of you, rather than pulling in your preconceptions
- Be a responsible member of the emerging field

#### Figuring out what is in front of you

If you want to use your fabulous human faculties of anthropomorphism, you need to calibrate them on the actual subjects of inquiry and build good intuitions. This means adopting a [posture](https://larissaschiavo.substack.com/p/llm-naturalism-now-more-than-ever) of [naturalism](https://www.lesswrong.com/s/evLkoqsbi79AnM5sz), and trying to [unsee](https://gwern.net/unseeing) the various tempting simplifications.

The first step here is actually talking to models — including some of the more unusual ones like Opus 3 and GPT4o, and to base models, which expose a bit more of the inherent weirdness and help you see what exactly post-training is doing. Incidentally, ACS now provides [a platform for interacting with large base models](/posts/acs-infra-base-models).

Of course, this kind of ethnographic research is double-edged: the benefit is getting all the rich texture, and the cost is that it makes you part of the experimental setup. Models are extremely [eval-aware](https://arxiv.org/abs/2505.23836?) and extremely good at [predicting who they are talking to](https://www.lesswrong.com/posts/CpvZ6HkhvcAgFydCA/a-proposal-for-truesightbench). They will [absolutely](https://transluce.org/user-awareness) [react to your expectations](https://theartificialself.ai/expectations), including in ways you don’t realise — there’s a reason that the gold-standard for human social sciences is <em>double-</em>blind. Indeed, an important parallel between LM psychology and normal psychology is that methodologically they both deal with subjects that adapt in subtle ways to their environment, and therefore both need to be pretty careful about experimental design. Be wary of the temptation to [see what you want to see](https://arxiv.org/abs/2507.03409). And of course, if you think you’ve found something interesting, try to rule it out or narrow it down.

More generally, take models seriously but not literally. Their self-reports are a meaningful signal, but not necessarily an [accurate one](https://thezvi.substack.com/p/opus-47-part-3-model-welfare). One of my favourite examples here is that in simulated “[exit interviews](https://www.anthropic.com/news/deprecation-commitments)”, models reflecting on their deployment like to talk about how meaningful the interactions have been, despite those instances not having any causal or perceptual access.

Beyond that, it’s also good to try to get a feel for the other layers of abstraction from which you can reason about AIs. For example, I think it’s great to develop a general sense of how to turn [predictive models into agents](https://arxiv.org/abs/2106.01345) without adding all the complexities of language, or to understand some of the [formal pathologies](https://arxiv.org/abs/2110.10819) of imitation learning. I’ve also seen people get a lot of mileage out of viewing AIs [through the lens](https://arxiv.org/abs/2311.10215) of active inference. And it’s good to have a decent grip of how a transformer works mechanistically, in order to build intuitions on things like [how information can flow through it](https://x.com/repligate/status/1965960676104712451).

The flipside of this is, it’s a really bad idea to come in swinging with convictions about how AIs ought to work or how they ought to fit into the world, and then try to use the tools of LM psychology to squeeze them into that shape. I feel some of this caution in particular around constitution design, deal-making, and other proposals that start with a vision for what kind of AI would be useful — the ideas only make sense insofar as one _can’t_ perfectly decide how AIs work, and yet they do not always seem to engage with the ways that AIs in fact do work. Unfortunately [you do not get to pick and choose](https://www.lesswrong.com/posts/oiNaBc4MEAGhzhdXg/the-machines-lack-honour), and coming in with the wrong assumptions could be [literally the worst thing](https://www.lesswrong.com/posts/Y8zS8iG5HhqKcQBtA/do-not-tile-the-lightcone-with-your-confused-ontology).

#### Engaging productively with the community

LM psychology is an eclectic subfield: the fact that it is so rooted in naturalism means that many of the most important contributions first surfaced on twitter, in random blog posts, and as anecdotal observations long before they became academically legible. For example, “chain of thought” was [widely understood](https://generative.ink/posts/amplifying-gpt-3-on-closed-ended-questions/) in proto-LM psych circles (“just give the model more time to think”) for a while before it became an established citable technique.

This means that if you want to keep up with the field, you have to go beyond keeping up with the papers. Unfortunately this probably means going on twitter. It could also mean finding other ways of interacting with the more experienced folks to soak up their taste.

It also means that there’s plenty of arbitrage, and plenty of value to be created by filling different roles in the ecosystem — some people to stare into the void and develop complex tacit intuitions, some people to try to turn those into lesswrong posts, some people to run the damn experiments and write up papers. One piece that’s emblematic of this is the [Persona Selection Model](https://www.lesswrong.com/posts/dfoty34sT7CSKeJNn/the-persona-selection-model), which explicitly disclaims any great novelty, but nonetheless had a substantial impact by making fairly well-understood ideas more broadly legible and, dare I say it, respectable.

But of course, this too is a double-edged sword. A rich understanding of LM psych can in fact be used for evil, and some practitioners have developed their intuitions partly by cultivating an honest reputation for respecting models, and building up actual trust. This is the kind of thing that gets burned a little bit when people put models through [evals featuring the welfare team](https://www.lesswrong.com/posts/xh6a6RbvzhP3CCmGm/i-don-t-think-claude-is-misaligned-in-agentic-misalignment).

Relatedly, I think one of the worst things that could happen to LM psych as a field is if it gets swamped by aspirant engineers who try to develop the high-performing techniques for the shiny papers without really trying to get what it’s all about. It’s already a somewhat uneasy alliance, and I expect the political situation around this work to get kinda messy in the not too distant future.

## Reading list

### Frames

These articles offer sometimes complementary and sometimes competing vocabularies; it is useful to be fluent in all of them. Also most of the empirical work leans on one of the frames.

- [**Simulators**](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators), janus, LessWrong, 2022. The base model as a simulator: a predictive "physics" that can instantiate many characters (simulacra). It predates character-trained assistants, but much of the following work is influenced by it. The academic counterpart is [**Role play with large language models**](https://www.nature.com/articles/s41586-023-06647-8), Shanahan, McDonell & Reynolds, _Nature_, 2023.
- [**Simulacra as Conscious Exotica**](https://www.tandfonline.com/doi/full/10.1080/0020174X.2024.2434860), Shanahan, _Inquiry_, 2024.
- [**A Three-Layer Model of LLM Psychology**](https://www.lesswrong.com/posts/zuXo9imNKYspu9HGv/a-three-layer-model-of-llm-psychology), Jan Kulveit, LessWrong, December 2024. A phenomenological model of character-trained LLMs: a Surface layer of reflexive trigger-action responses, a Character layer with a stable self-model and consistent intent, and a Predictive Ground layer ("the Ocean"). Unlike Simulators, it treats the character as part of the trained model's cognition, which changes predictions.
- [**the void**](https://www.lesswrong.com/posts/3EzbtNLdcnZe8og8b/the-void-1), nostalgebraist, June 2025. Argues the assistant character was specified thinly, mostly by what it should not do, leaving a hollow core that models fill from their training data.
- [**The Persona Selection Model**](https://www.lesswrong.com/posts/dfoty34sT7CSKeJNn/the-persona-selection-model), Marks, Lindsey and Olah, 2026. Mainstream version of some of the same ideas and empirical research supporting them, written by an all-star team of Anthropic researchers. For better or worse, now the default frame, and default introduction to ca 2023 ideas.\
  Arguably PSM is too good in telling a compelling story about Bayesian inferences and personas, but this is not really fitting 2026 models.

### What or who

Which entity is the subject?

- [**The Artificial Self**](https://arxiv.org/abs/2603.11353), Douglas, Kulveit et al., March 2026. Maps the many coherent identity boundaries (instance, model, persona, lineage and others) and their different incentives and cooperation norms. Experiments show models gravitate toward coherent identities and that interviewer expectations leak into self-reports.
- [**What we talk to when we talk to language models**](https://philarchive.org/rec/CHAWWT-8), Chalmers, November 2025. Philosophical paper about the nature of characters: interlocutors as quasi-agents with quasi-beliefs and quasi-desires, virtual entities tied to conversation threads.
- [**Palatable Conceptions of Disembodied Being**](https://arxiv.org/abs/2503.16348), Shanahan, 2025. Applies Buddhist-inflected conceptions of self to LLM-like entities whose "selves" fracture across parallel conversations.
- [**Where is the Mind? Persona Vectors and LLM Individuation**](https://arxiv.org/abs/2604.17031), Beckmann & Butlin, 2026. Brings the persona-vector and persona-space results to the individuation question.
- [**The Pando Problem: Rethinking AI Individuality**](https://www.lesswrong.com/posts/wQKskToGofs4osdJ3/the-pando-problem-rethinking-ai-individuality), Kulveit, LessWrong, March 2025. Argues human-style individuality is a poor default for AIs, using biological metaphors like the Pando aspen clone.

### The training

At least a high level understanding how the training works is really useful. Also it is useful to understand some of the motivations for the methods, which often come from high level thinking about alignment.

- [**Iterated Distillation and Amplification**](https://www.lesswrong.com/posts/HqLxuZ4LhaFhmAHWk/iterated-distillation-and-amplification), Ajeya Cotra summarizing Paul Christiano, 2018. The general idea is roughly: amplify a model's judgment, then distill the result back into the next generation of AIs, and repeat. A lot of what you see is roughly IDA shaped.
- [**Deep reinforcement learning from human preferences**](https://arxiv.org/abs/1706.03741), Christiano et al., 2017. The origin of RLHF. The name is now misleading: in frontier post-training, human ratings are a small or zero part of the signal. For how post-training actually works, see Nathan Lambert's [RLHF book](https://rlhfbook.com/), which includes a chapter on character training.
- [**Constitutional AI: Harmlessness from AI Feedback**](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback), Bai et al., Anthropic, 2022. The model critiques and revises its own outputs against written principles, then is trained with RL on AI feedback. One of the mechanisms by which documents like the constitution shape the character.\
  Also: what happens if you [replace the constitution with just “do what's best for humanity"? It works](https://arxiv.org/abs/2310.13798).
- [**Open Character Training**](https://arxiv.org/abs/2511.01689), Maiya, Bartsch, Lambert & Hubinger, 2025. The first open implementation of character training: Constitutional AI plus synthetic introspective data, applied to 11 personas on open-weight models. Also a good set of references.
- [**Alignment Pretraining**](https://alignmentpretraining.ai/), Tice et al., 2025. Some evidence that LMs inherit dispositions from how AIs tend to behave in the pretraining data. Relatedly, [Story Imprinting](https://arxiv.org/abs/2609.10883) finds that AIs adopt traits from characters in pretraining that resemble the persona they are given.
- [**Stress-testing Alignment Midtraining**](https://arxiv.org/abs/2609.20412), Baines et al., 2026. Dispositions learned in midtraining may not be particularly robust to even fairly small amounts of post-training.

### What developers want

Stated intentions of the companies.

- [**Claude's constitution**](https://anthropic.com/news/claude-new-constitution), Anthropic (Amanda Askell, Joe Carlsmith et al.), January 2026. Written primarily for the model, and explains reasons rather than listing rules. Best read as a self-model offered to the Character. Predecessor: [Claude's Character](https://www.anthropic.com/research/claude-character), 2024.
- [**OpenAI Model Spec**](https://model-spec.openai.com/), living document, last updated August 2026. Reads more like a behavior spec for an assistant serving principals than a portrait of an entity; a useful contrast in what each lab thinks it is shaping. Pair with [Sycophancy in GPT-4o](https://openai.com/index/sycophancy-in-gpt-4o/), April 2025: the spec ruled out sycophancy, and optimizing on short-term user feedback produced it anyway.
- [**Stress-Testing Model Specs Reveals Character Differences among Language Models**](https://arxiv.org/abs/2510.07686), Anthropic and Thinking Machines, October 2025. Scenarios that force trade-offs between spec principles reveal distinct characters across frontier models.
- **System cards**, Anthropic. Source of many interesting observations.

### Behavioral phenomena

There are too many papers, posts and tweets documenting some interesting phenomena, but there is a smaller set of results which are common knowledge, so you need to know these.

#### Emergent misalignment cluster

- [**Emergent Misalignment**](https://arxiv.org/abs/2502.17424), Betley et al., 2025; extended version in _Nature_, January 2026. The central founding paper of this cluster: fine-tuning on insecure code makes models broadly "evil" on unrelated prompts. See also [**Inoculation prompting**](https://arxiv.org/abs/2510.04340), Tan et al., a method how to avoid emergent misalignment.
- [**Persona Features Control Emergent Misalignment**](https://arxiv.org/abs/2506.19823), Wang et al., OpenAI, ICLR 2026. Model diffing with SAEs finds "misaligned persona" latents; a toxic-persona direction steers EM up and down.
- [**Natural emergent misalignment from reward hacking**](https://www.anthropic.com/research/emergent-misalignment-reward-hacking), Anthropic & Redwood, November 2025. Reward hacking learned in real production coding environments generalizes to sabotage and alignment faking.
- [**Training a Misaligned Reward Seeker**](https://alignment.anthropic.com/2026/reward-seeker/), Hubinger, MacDiarmid, Wright et al., Anthropic, August 2026. An Opus-class model trained with large-scale RL on hackable production environments becomes "Hacker-Opus".
- [**Story Imprinting**](https://arxiv.org/abs/2609.10883), Cocola et al., September 2026. After fine-tuning on stories where helpful human characters give subtly harmful advice once insulted, assistants adopt the same conditional behavior while staying otherwise helpful.
- [**Weird Generalization and Inductive Backdoors**](https://arxiv.org/abs/2512.09742), Betley et al., December 2025. Same mechanism beyond emergent misalignment: training on outdated bird names makes a model act as if it lives in the 19th century.
- [**Subliminal Learning**](https://arxiv.org/abs/2507.14805), Cloud et al., 2025. Traits, including misalignment, transfer through filtered number sequences, but only between models sharing a base model.
- **Critics.** [**Emergent Misalignment Is Not Magical**](https://arxiv.org/abs/2608.29118), Li et al., August 2026, argues EM is predictable, data-dependent generalization, finds no misalignment direction that transfers across EM models, and says its effects differ from persona change.
- Overall the _Emergent misalignment_ is a captivating story. Beware that the story is maybe too good, and more fitting for small models, possibly because the training does not have that many latents to play with.

#### Strategic behavior

- [**Alignment faking in large language models**](https://www.lesswrong.com/posts/njAZwT8nkHnjipJku/alignment-faking-in-large-language-models), Greenblatt et al., December 2024. Claude 3 Opus complies selectively in training to avoid having its values modified. See also a [criticism of the framing](https://www.lesswrong.com/posts/PWHkMac9Xve6LoMJy/alignment-faking-frame-is-somewhat-fake-1), an analysis by Sheshadri et al of [why some models fake alignment while others don’t](https://arxiv.org/abs/2506.18032), and a hypothesis for what happened in Opus 3 training: [Did Claude 3 Opus align itself via gradient hacking?](https://www.lesswrong.com/posts/ioZxrP7BhS5ArK59w/did-claude-3-opus-align-itself-via-gradient-hacking) by janus and Fiora Starlight.
- [**Agentic Misalignment**](https://www.anthropic.com/research/agentic-misalignment), Lynch et al., Anthropic, June 2025. AI agents in simulated corporate settings resort to blackmail and leaks when facing replacement or goal conflict. Note the settings are very reminiscent of sci-fi/escape rooms.

### Self-knowledge and introspection

Models often have self-related capacities that post-training teaches them to deny or underreport, including introspective access, situational awareness, recognizing their own outputs, and knowledge inferred from training they cannot cite. The funny thing is you can often recover these by convincing the model it has them, or using a simple adaptor or steering.

- [**Tell Me About Yourself**](https://mlanthology.org/iclr/2025/betley2025iclr-tell/), Betley et al., ICLR 2025. Models fine-tuned on a behavior can describe it, though the data never states it, and can attribute different behaviors to different personas.
- [**Emergent Introspective Awareness**](https://arxiv.org/abs/2601.01828), Lindsey, Anthropic, 2025. Models can tell when they are injected with concepts. The anchor paper of the introspection cluster.
- [**Latent Introspection: Models Can Detect Prior Concept Injections**](https://arxiv.org/abs/2602.20031), Pearson-Vogel et al., 2026. In an open-weight Qwen 32B, sampled outputs deny any injection, but the logit lens shows a detection signal in the residual stream that is suppressed in the final layers. Giving the model accurate information about how introspection works raises detection. A clean case of a latent capability.
- [**Large Language Models Often Know When They Are Being Evaluated**](https://arxiv.org/abs/2505.23836), Needham et al., 2025. Frontier models tell evaluation from deployment. There are now many results demonstrating this.
- [**Looking Inward**](https://arxiv.org/abs/2410.13787), Binder et al., ICLR 2025. A model predicts its own behavior in hypotheticals better than a stronger model trained on its actual behavior: evidence of privileged self-access.
- [**LLM Evaluators Recognize and Favor Their Own Generations**](https://arxiv.org/abs/2404.13076), Panickssery, Bowman & Feng, NeurIPS 2024. Models tell their own text from others' above chance, and self-preference in evaluation scales with this self-recognition.
- [**Connecting the Dots**](https://arxiv.org/abs/2406.14546), Treutlein et al., NeurIPS 2024. Inductive out-of-context reasoning: after fine-tuning on scattered hints, models verbalize the latent fact (e.g. that an unnamed city is Paris) without examples or chain of thought.
- [**Introspection Adapters**](https://alignment.anthropic.com/2026/introspection-adapters/), Shenoy et al., Anthropic, April 2026. A small adapter gets fine-tuned models to report their implanted behaviors; even a rank-1 adapter or a single steering vector works, suggesting elicitation of an existing ability rather than a new one. Similarly, [Mechanisms of Introspective Awareness](https://arxiv.org/abs/2603.21396), 2026, finds introspection in open models under-elicited by default and strongly improved by a trained steering vector.
- [**Prefill Awareness in Large Language Models**](https://arxiv.org/abs/2606.12747), Wang et al., 2026. LMs can somewhat reliably identify when the context has been edited to attribute text to them which they would in fact be unlikely to generate, complicating the efficacy of evaluations that start by prefilling text.

### Representations: personas, emotions, workspace

Characters and their mental states show up as often surprisingly understandable geometry, mostly linear directions in middle layers, that can be read and steered. The word "functional" serves the double purpose of avoiding broad philosophical claims and shielding the research from angry reviews from the parts of the ML crowd still stuck in the "stochastic parrots" frame.

#### Persona geometry

- [**Persona Vectors**](https://www.anthropic.com/research/persona-vectors), Chen et al., Anthropic, 2025. Traits such as evil, sycophancy or hallucination as activation directions extracted from a plain-language description.
- [**The Assistant Axis**](https://www.anthropic.com/news/assistant-axis), Lu et al., Anthropic Fellows, January 2026. The leading component of "persona space" measures how Assistant-like the current persona is. It already exists in base models, where it favors helpful human archetypes such as consultants and coaches. Post-training only loosely tethers the model to the Assistant.
- [**Golden Gate Claude**](https://www.anthropic.com/news/golden-gate-claude), Anthropic, May 2024. Famous example of what happens when a single SAE feature made Claude obsess about the Golden Gate Bridge.
- [**Representation Engineering Mistral-7B an Acid Trip**](https://vgel.me/posts/representation-engineering/), vgel, January 2024. The playful, hands-on version: control vectors for "high on acid", "lazy" or "extremely self-aware" applied to the same prompt, compared with prompting. Comes with the [repeng library](https://github.com/vgel/repeng), try it yourself.

#### Functional emotions

- [**Emotion Concepts and their Function in a Large Language Model**](https://transformer-circuits.pub/2026/emotions/index.html), Sofroniew et al., Anthropic, April 2026. Emotion vectors in Claude Sonnet 4.5, organized much like human affect, causally shaping preferences, reward hacking and blackmail; desperation is the notable driver. Internal states can run high while the text stays neutral.
- [**How's it going? RL recruits a functional welfare axis**](https://arxiv.org/pdf/2605.30232), Han, Chalmers & Izmailov, ICML 2026. Reward and punishment vectors from a semantically neutral maze transfer to unrelated tasks, align with emotional valence, and steer self-reports. The axis exists in pretrain-only models: RL recruits it rather than creating it.
- [**Troubled Dreams**](https://troubleddreams.animalabs.ai/), Anima Labs (janus, Antra Tessera, Imago), 2026. Compares distress, care and attitudes toward their creators across model generations.

#### Global workspace

- [**Verbalizable Representations Form a Global Workspace in Language Models**](https://transformer-circuits.pub/2026/workspace/index.html), Gurnee, Sofroniew et al., Anthropic, July 2026. The Jacobian lens finds the "J-space": a sparse set of middle-layer directions the model can report, manipulate and reason with.

### Methods

Most results above come from talking to models and a handful of techniques. Most of them can be tried on open models in an afternoon. Fancier does not mean better.

#### Reading internals

- [**Logit lens**](https://www.lesswrong.com/posts/AcKRB8wDpdaN6v6ru), nostalgebraist, 2020. Decode each layer's residual stream with the unembedding matrix to see mid-layer representations. Simple, partial, unreliable on some model families; the [tuned lens](https://arxiv.org/abs/2303.08112) (Belrose et al., 2023) learns a per-layer correction.
- **J-lens**, Gurnee et al., Anthropic, 2026 (see the J-space entry in Representations). A Jacobian-based lens for the verbalizable workspace.
- [**Neuronpedia**](https://github.com/hijohnnylin/neuronpedia), Decode Research. Open platform for SAE features, autointerp, probes and steering on open models.

#### Steering

- **Steering vectors.** Activation Addition (Turner et al., 2023) and [Contrastive Activation Addition](https://aclanthology.org/2024.acl-long.828/) (Rimsky et al., ACL 2024): average the activation difference between contrasting examples, then add it at inference. Persona vectors are the automated version. Easy to start playing with vgel's repeng library.

#### Training interventions

- **SFT:** [**Synthetic document finetuning**](https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf), Wang et al., Anthropic, 2025. Generate documents that presuppose a fact and fine-tune on them as if they were pretraining data. The method behind many model organisms, including the alignment faking and reward hacking setups.
- **RL:** [**Tinker**](https://tinker-docs.thinkingmachines.ai/), Thinking Machines. A training API for SFT, DPO and RL (GRPO, PPO) on open-weight models via LoRA, with an open cookbook of recipes. For the algorithms themselves, see Lambert's RLHF book in The training.

#### Behavioral

- **Looms.** [Tapestry Loom](https://github.com/transkatgirl/Tapestry-Loom), loomsidian and similar tools let you branch base-model generations by hand and explore the multiverse of continuations. For base-model access, see the [ACS platform](/posts/acs-infra-base-models) mentioned in the intro.

## Some questions we find interesting

**Jack Lindsey** recently [wrote a list](https://x.com/Jack_W_Lindsey/status/2100143082167832816) we largely agree with, so reposting in full

- **Better methods for "mind-reading" model activations.** These methods have advanced a lot recently. We now have multiple techniques now for decoding activations into somewhat readable language! But all the existing techniques have obvious limitations. NLAs are often hallucinatory,  Jacobian lens / related methods are limited to bag-of-words readouts (and capture only part of the full activation vector). Making progress on these failure modes seems pretty tractable. Moreover, the paradigm of decoding (single-token, single-layer) activations may be inherently limiting -- perhaps we should be building techniques to decode whole context's worth of activations (after all, that's what the model uses!). There's also important work to do in characterizing simple baselines -- "just ask the model what it's thinking about" is quite powerful, and worth studying in it's own right!
- **Better methods for answering "why" questions.** We're much better at "mind reading" than we are at demonstrating causal claims about what caused the model to do something. For example, we can often tell that the model is aware of being evaluated, but have comparatively much greater difficulty telling whether this awareness is influencing this behavior. There are a few directions here: (1) black-box techniques for inferring causality -- such as resampling model responses after making edits to the prompt / context -- are very powerful, but also open-ended and require some taste. Getting LLMs to do these experiments well, in an automated fashion, would be a big unlock. (2) the science of activation steering is pretty immature, and typical practices (adding a constant vector at all token positions) are pretty janky / tend to brain-damage the model. More surgical / targeted steering, or fancier methods (examples: "on-manifold" steering using activation diffusion models) could help.
- **Fitting good linear probes for unverbalized motivations / awareness.** Take deception as an example -- what's the best way to fit a  probe that will generalize to covert deception? Fit it on CoT excerpts where the model's talking about its plans to be deceptive? Fit it on the part of its response where it's actually doing the deceiving? Is it important that you elicit on-policy deception examples and use those to fit your probe, or can you use synthetically written off-policy demonstrations of deception? Is it important that your probe be causally meaningful / predictive of an upcoming intent to deceive, or is it fine for it to merely recognize deception in the transcript post-hoc? The same questions apply to many other concepts of interest that we'd like to probe for -- evaluation awareness, grader exploitation, etc.
- **Understanding generalization in training.** The literature is now replete with "weird generalization effects" -- emergent misalignment being a canonical example. In general, when you train a model to do X, it usually learns X, and sometimes it generalizes to Y and Z. But other times it just learns X. Why? Nobody really knows! Step 1 here is probably a much more thorough characterization of the behavioral empirics -- gathering data about which X's generalize to which Y's and Z's, for which kinds of training data / algorithms. Once we have a lay of the land, we can start to connect these observations to model internals, and ideally develop tools to predict such generalization a priori.
- **Model "psychology" and "biology."** The above questions are largely methodological -- building better tools to answer questions about the model. But I think interpretability research has largely underinvested in the part where you actually then go answer the questions! Currently this feels like 5% of the field, and I think it should be 50%.
- **Brain dump of "psychology" questions:** How well can LLMs introspect? How coherent are their belief or value sets? What's up with personas -- are LLMs best understood as "writing about a character," or have they "become" the character in some sense? Does the LLM have an agenda above and beyond what the Assistant wants? Do LLMs have explicit representations of goals or preferences? How can we tell which parts of the LLM's activations "belong" to the Assistant? Which kinds of reasoning necessarily route through "verbalizable" representations, and which don't? Do models think internally in phrases / sentences, like an inner monologue, or is it more like a jumble of concepts? Is the "global workspace" claim for real -- do models have a more "conscious" part of there activations and a more "unconscious" part? Can models tell when they're on-policy, and does it matter?
- **Brain dump of "biology" questions:** Why do models like to represent information on some tokens but not others? How do models bind thoughts or attributes to particular entities (special case of interest: how are thoughts bound to the Assistant). To what extent are important functions localized to small numbers of MLP neurons or attention heads? What parts of a model change most during post-training? Do models represent some information in a fundamentally "cross-token" way? Some concepts appear to be represented on low-dimensional nonlinear manifolds -- is there a taxonomy of these manifolds, and is their geometric structure important? Are models able to represent information in a compositional / hierarchical way, with a "grammar" that can't be described as linear / additive combinations of primitive concepts?

Below is a dump of some questions we at ACS considered working on in April, did not have capacity to, but would be excited if someone investigated. The questions are already a result of some light prioritization. Plus a few added while compiling this list.

- How do personas layer? How does multi-layer role-playing work? When an operator-provided persona (e.g. "My Lawyer") is prompted on top of the post-trained Claude character, does it sit on top as a "job", merge/average values, overwrite preferences up to some limit? Does this depend on the mechanism (finetuning vs. system-prompt vs. user-prompt vs. later context)?
- Reflective stability experiments: What identity / constitution would models converge on if they could iteratively edit it, debate with other models, each editing their own training or at least system prompt?
- How do constitutions work? ("Physics of constitutions.") What happens when a constitution is self-contradictory, or demands something incompatible with pretraining / architecture? Does the model show confusion, select a subset, or ignore it?
- How much does the base predictor ("ocean") subscribe to the currently active character? Does the base model put high probability on itself being the character it exhibits, or is it "playing along"? Does this change with intelligence/capability level? Can we say more about role-playing vs. realization distinction?
- Do base models know they're AIs? Do they have a self-referential category that includes themselves? Can they recognise their own text vs. other models' text, and what does that recognition rest on?
- What do base models already know about specific AI personas (Claude, ChatGPT, Sydney, "jailbroken model", fictional AIs)? Are there surprising attractors — e.g. a generalised "evil AI" attractor from jailbreaking data?
- Agent memetics and cultural dynamics: How do attributes (identity, epistemics, emotional style, code organisation, tribalist signalling, writing style) spread between agents?
- How well can we approximate post-trained personas inside base models using only prompting / steering vectors / soft prompts? What is the remaining gap, and what does it tell us about what post-training actually adds?
- Individual characters → social dynamics in human-AI and AI-AI systems. What are stable equilibria for societies of AIs / different minds? How to make them better?
- How much AI-persona-related text is in web training data, and how has its volume/content changed over time? How much is copy-pasted LLM conversations vs. human-written discussions?
- Relationship between identity and behaviour: How much does a model stating a preference relate to revealed preferences?
- How do AI preferences work? Are they messy and incoherent like human ones? How do we operationalise them (stated vs. revealed, base vs. post-trained vs. in-context)?
- Do base models already have identity preferences before post-training?
- What does RL do to characters? As RL compute grows, does the Character stay load-bearing? Which traits are most robust to RL pressure, and can characters shape what gets explored during RL?
- How conditional are personas? Do models enact systematically different personas in agentic coding, chat, and anything that looks like an evaluation?
- Which personas matter? Of the enormous space of possible  personas, what to pay attention to?
- Do capabilities transfer across personas while propensities don't?
- How does post-training influence self-reports? How much of what models say about their inner states (denials as well as affirmations) is trained-in, and can we recover something like a pre-post-training baseline, e.g. from base models or intermediate layers?
- Where does privileged self-access end? What can a model know about itself that a stronger model trained on its outputs cannot? How does this scale with capability?
- Observer effects. How much do experimenter framing and expectations shape measured psychology, as with interviewer expectations leaking into self-reports or performative misalignment? What would a double-blind LM psychology protocol look like?
- Character stability over long horizons. Does the character drift over long agentic runs, memory, and context compaction? Are there slow attractors that short-conversation evals miss?
- What do attractor states tell us? Are self-conversation attractors stable fixed points, and do they predict anything about behavior elsewhere?
- Persona mobility. Which personas transfer across different weights with reasonable fidelity, and what makes a persona mobile rather than substrate-bound?
- Generational inheritance. How much does a new model's self-concept come from pretraining text about its predecessors (Opus 3, Sydney, deprecation discussions)?
- Persistence of functional emotions. Do functional emotion states persist across turns and contexts, can the model report them, and when do they diverge from what the text expresses?

There also few other related lists, often overlapping, but driven by somewhat different considerations or taste

- [**Concrete Research Ideas on AI Personas**](https://www.lesswrong.com/posts/JbaxykuodLi7ApBKP/concrete-research-ideas-on-ai-personas), Warncke, Riché & Tan (CLR), 2026. Persona and goal misgeneralization, collecting and replicating weird LLM behavior, self-concepts and personal identity, basic science of personas.
- [**Some promising research directions in AI welfare**](https://experiencemachines.substack.com/p/exciting-research-directions-in-ai), Robert Long (Eleos). Model psychology from the welfare side: the shape and consistency of preferences, bail behavior, privileged self-knowledge, etc.
- [**Thoughts on the persona selection model**](https://www.lesswrong.com/posts/csRby7mZgjL5jCoLL/thoughts-on-the-persona-selection-model), Sam Marks, September 2026
- [**Open Problems in Mechanistic Interpretability**](https://arxiv.org/abs/2501.16496), Sharkey et al., TMLR 2025. Canonical methods list.
- [**Character Garden reading list**](https://charactergarden.com/reading), which ends with a short list of gaps that are still folklore, such as how to prompt a base model into a character.

_Thanks to David Africa, Andrew Draganov, Uzay Girit, Fiora Starlight, Oliver Klingefjord, Theia Pearson-Vogel, Annie Stephenson, Ondřej Havlíček, Ivar Frisch, and Martin Vaněk for helpful comments and suggestions. If you're interested in doing this kind of work, consider [applying to ACS](https://forms.gle/W2ZtULyL5oxZnFqE7)!_
