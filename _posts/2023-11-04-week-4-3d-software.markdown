---
layout: post
title: "Week 4: 3D Software"
date: 2023-11-01 22:21:59 +00:00
image: /images/6.jpg
categories: research
author: "D Pillis"
---

On October 31st, I manufactured six HoloKits using the laser cutter to support a tutorial on mixed reality. The goal was to give students the ability to create their own holographic display viewers.  
<img src="/tn/images/holokit.jpg" alt="Holokit prototype" width="200"/>

<blockquote>
  <p>
  This research explores a new approach to tracking hands—or any articulated model—by using an augmented rigid body simulation. It frames 3D object tracking as a linear complementarity problem, offering a well-defined mathematical solution.

  Using depth sensor samples, the system generates constraints that limit motion orthogonal to the surface of the rigid body model. These constraints, combined with priors such as previous motion, collision/contact parameters, and joint mechanics, are resolved through a projected Gauss-Seidel solver.

  To accommodate sensor noise and attachment inaccuracies, surface constraints are impulse-capped so they don't override core mechanical constraints. For increased tracking accuracy, the system spawns multiple simulations per frame, each incorporating different heuristics, constraints, and initial poses. A 3D error metric then evaluates the outcomes, selecting the best-fit simulation to handle complex or fast hand motions effectively.
  </p>
</blockquote>
