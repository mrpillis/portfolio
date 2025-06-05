---
layout: post
title: "AmbientPhoneBooth"
date: 2023-11-01 22:21:59 +00:00
image: /images/8.jpg
categories: research
author: "D. Pillis, Ziare Sherman, Hiroshi Ishii"
---

We rebuild the classic “ambient room” interaction system on a smaller scale, set inside a phone booth.

AmbientPhoneBooth was an interactive audio installation that transformed a phone booth into an on-demand spatial audio experience. The system captured auditory memories and recreated spatialized soundscapes with delayed feedback, evoking nostalgia and a sense of temporal presence.

### Initial Plan
- **Hardware:** Raspberry Pi Zero boards with camera cables  
- **Structure:** A 3D-printed expandable geodesic dome (Buckyball-inspired)  
- **Capture Pipeline:** SIFT feature matching per image, streamed rapidly for real-time processing  
- **Goal:** Near-instant, full 3D object scanning (including top and bottom surfaces)  

We also explored contemporary formats and platforms for visualization and interaction, including:
- **Three.js** for web-based rendering
- **MeshGPT** for neural mesh generation

I tested **Polycam’s floorplan tool**, but found it limiting. It automatically renders captured spaces as domestic interiors, which made it unsuitable for scanning unconventional environments or artistic installations.

As part of the prototyping process, I also searched **GrabCAD** and located a detailed 3D model of the **Seeed Studio Xiao nRF52840** for possible integration into our scanning rig.

<blockquote>
  <p>
  The conversation with Quentin helped frame our thinking around modular, scalable scanner architectures. Rather than relying solely on commercial scanners, we're looking into building a customizable, distributed imaging array that leverages open-source hardware and real-time mesh reconstruction.
  </p>
</blockquote>
