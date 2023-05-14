---
title: Agency in Markov Chains
description: An exploration of agency in markov chains, with a focus on the safety of AI
author: Research Group on Alignment of Complex Systems
date: 2023-04-01
category: Research
tags: [AI, Agency, Alignment]
---

![](res-agency/res-front.png)

Markov Chains are a powerful tool for modelling stochastic processes. They are widely used in various fields, from economics to genetics, and from computer science to artificial intelligence (AI).

A Markov chain is a mathematical system that models a randomly changing process, such as the stock market or the weather. It consists of a set of states (nodes) and transitions (edges) between them. In a Markov chain, the probability of transitioning from one state to another is determined by the current state, and not by any previous states. This is known as the Markov property.

In recent years, the concept of agency has become increasingly important in the field of AI safety. Agency is a measure of the degree to which an AI system is able to act autonomously and make decisions independently from external influences. In this article, we will explore the implications of the Markov property for agency in Markov Chains.
<!-- more -->
# Markov Property

The Markov property is the key to understanding Markov Chains. It states that the probability of transitioning from one state to another is determined only by the current state, and not by any previous states.

Mathematically, this can be expressed as follows:

$$P(X_t|X_{t-1},X_{t-2},\ldots,X_0) = P(X_t|X_{t-1})$$

This equation states that the probability of transitioning from the current state $X_t$ to the next state $X_{t+1}$ is determined only by the current state $X_t$, and not by any of the previous states $X_{t-1},X_{t-2},\ldots,X_0$. This is known as the Markov property.

# Implications for Agency

The implications of the Markov property for agency can be seen in the following example. Consider a Markov Chain with two states $S_1$ and $S_2$. The transition between these two states is governed by the following transition matrix:

$$
P = \begin{pmatrix}
0.9 & 0.1 \\\\
0.1 & 0.9
\end{pmatrix}
$$

This transition matrix states that the probability of transitioning from $S_1$ to $S_2$ is 0.1, and the probability of transitioning from $S_2$ to $S_1$ is 0.9.

Now, consider an AI system that is in the state $S_1$. According to the Markov property, the probability of transitioning to $S_2$ is 0.1. This means that, regardless of the AI system's past behavior, it has a 0.1 chance of transitioning to $S_2$. This is an example of the lack of agency that the Markov property implies.

# Conclusion

In this article, we have explored the implications of the Markov property for agency in Markov Chains. We have seen that the Markov property implies a lack of agency, as the probability of transitioning from one state to another is determined only by the current state, and not by any previous states. This has implications for the safety of AI systems, as it means that they may not be able to make autonomous decisions.

It is important to consider the implications of the Markov property when designing AI systems. Understanding the implications of this property can help to ensure that AI systems are safe and able to make autonomous decisions.