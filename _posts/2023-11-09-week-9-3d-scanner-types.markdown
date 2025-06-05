---
layout: post
title:  "AI Theatre: Interactive Conversational Interfaces with Virtual Agents Can Increase Confidence and Self-Efficacy in Devising Solutions for Interpersonal Conflict Scenarios"
date:   2023-11-01 22:21:59 +00:00
image: /images/2.jpg
categories: research
author: "Daniel Pillis*, Pattie Pataranutaporn*, Pattie Maes, Misha Sra (2024)"
---

# AI Theatre: Human-AI Collaboration for Conflict Resolution

Recent advances in artificial intelligence—particularly large language models—have enabled highly realistic, real-time interactions with virtual characters. In our project *AI Theatre*, we explore how multi-agent, conversational interfaces can enhance users' real-life interpersonal skills through immersive simulation.

AI Theatre is a pedagogical platform that merges AI and performance. Drawing inspiration from Augusto Boal’s “Theatre of the Oppressed,” we use virtual agents and generative models to simulate lifelike social conflict scenarios. Users engage with these characters in a safe simulation environment, experimenting with different strategies to resolve interpersonal tensions.

A study with 240 participants revealed that interaction with AI Theatre agents significantly increased users' confidence and self-efficacy in managing conflict, both socially and professionally. Developed in collaboration with students and faculty peers at Emerson College, the project offers new insights at the intersection of AI, theatre, and human-AI collaboration.

---

## 3D Scanning for AI Performance Contexts

In parallel with AI Theatre, I also experimented with three different approaches to 3D scanning this week—using the Artec Leo, the 3D Sense, and the iPhone LiDAR. Each produces a distinct quality and texture in its scan output, which impacts how we integrate virtual characters into physical and mixed-reality environments. Sample scans are shown below:

<img src="tn/images/tmg-scans.png" alt="Scan Example 1" width="200"/>
<img src="tn/images/room-combusted.png" alt="Scan Example 2" width="200"/>
<img src="tn/images/tmg-scans.png" alt="Scan Example 3" width="200"/>

---

## Hand Tracking with Physics-Based Simulations

> This research explores a new approach to tracking hands—or any articulated model—by using an augmented rigid body simulation. This allows us to phrase 3D object tracking as a linear complementarity problem with a well-defined solution. Based on a depth sensor’s samples, the system generates constraints that limit motion orthogonal to the rigid body model’s surface. These constraints, along with prior motion, collision/contact constraints, and joint mechanics, are resolved with a projected Gauss-Seidel solver. To improve tracking accuracy, multiple simulations are spawned at each frame and fed a variety of heuristics, constraints, and poses. A 3D error metric selects the best-fit simulation, helping the system handle challenging hand motions.

---
