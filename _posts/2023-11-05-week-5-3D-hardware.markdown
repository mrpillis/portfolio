---
layout: post
title:  "Week 5. 3D Hardware"
date:   2023-11-01 22:21:59 +00:00
image: "tn/images/7.jpg"
categories: research
author: "D Pillis"
---

In early November, I ordered 6 XIAO ESP32S3 cameras. I met with Quentin in CBA to discuss his previous projects exploring custom 3D scanners. His made use of an arm that moved and rotated around an object. We decided that imitating a light stage design would be better, so we devised a plan to use small embedded camera sensors to capture multiple images. We decided to order the following: https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html. I started to explore how this might work by implementing the gaussian splatting algorithim locally on my machine so that I could run simple 3D scan processes. Based on these experiements, we came up with a plan to construct a cage or structure rot of in the design of a buckminster fuller ball to capture objects. This specficially applies to my thesis because I need to scan a massive amount of small objects. I describe this plan in an excerpt of my thesis proposal below:
<img src="tn/images/cage-test.png" alt="drawing" width="200"/>
<blockquote>
  <p>
In an independent study with Professor Neil Gershenfeld, I am learning how to design custom 3D scanning interfaces to use for personal object archiving. This requires multi-camera capture to sequence multiple images together, resulting in low poly but high resolution 3D models (gaussian splats) of objects. These hardware tools will provide a tangible toolkit for the process of life-logging large archives of personal possessions for use in the simulation environment. In the independent study, I am also developing pipelines to which draw inspiration from Meta’s Codec Avatar pipeline for virtually indistinguishable digital doubles. I am specifically applying this to the relationship between an individual and their environment. This process is connected to the processes explored in the 3D scanning workflows, but evolved to include a proposal for a computational model. The goal is to implement this in the phone booth.
  </p>
</blockquote>
