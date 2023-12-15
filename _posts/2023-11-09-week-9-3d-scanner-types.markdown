---
layout: post
title:  "Week 9. 3D Scanner Types"
date:   2023-11-01 22:21:59 +00:00
image: /images/2.jpg
categories: research
author: "D Pillis"
---

I experimented with three different approaches to scanning this week. Using the Artec Leo, the 3D sense, and the iPhone Lidar. Each of them produces a different quality scan. Some of these scans can be seen below. <img src="tn/images/tmg-scans.png" alt="drawing" width="200"/> <img src="tn/images/room-combusted.png" alt="drawing" width="200"/> <img src="tn/images/tmg-scans.png" alt="drawing" width="200"/> 

<blockquote>
  <p>
    This research explores a new approach to tracking hands, or any articulated model, by using an augmented rigid body simulation. This allows us to phrase 3D object tracking as a linear complementarity problem with a well-defined solution. Based on a depth sensor&#8217;s samples, the system generates constraints that limit motion orthogonal to the rigid body model&#8217;s surface. These constraints, along with prior motion, collision/contact constraints, and joint mechanics, are resolved with a projected Gauss-Seidel solver. Due to camera noise properties and attachment errors, the numerous surface constraints are impulse capped to avoid overpowering mechanical constraints. To improve tracking accuracy, multiple simulations are spawned at each frame and fed a variety of heuristics, constraints and poses. A 3D error metric selects the best-fit simulation, helping the system handle challenging hand motions.
  </p>
</blockquote>
