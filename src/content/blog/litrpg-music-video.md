---
title: "I made a LitRPG music video at home for $0 (well, almost)"
description: "A 4.5-minute music video starring Carl & Donut, Jake, Zac and Jason, made with open models on one RTX 4090, with Claude running the production. My job: pick the song and say things like “Zac’s axe is floating.”"
pubDate: 2026-10-02
category: "Projects"
tags: ["litrpg", "ai video", "music video", "comfyui", "claude code", "rtx 4090", "open models"]
draft: true
heroImage: "/images/litrpg-video/hero.jpg"
---

I made a 4.5-minute music video as a love letter to the **LitRPG** books I binge.

Honestly, I just think experimenting with AI is exciting. I'd seen several cool videos on X made with Opus 5.5 productions, and I wanted to see what I could pull off in a nerdy little niche like LitRPG. Plus I'm a fan of those books, and they're basically like reading a video game.

It has Carl & Donut, Jake, Zac and Jason, plus cameos from Cradle, Solo Leveling and more. Everything was made with open models on one RTX 4090 at home, and Claude ran the production. The only cost was **my Claude subscription**.

<!-- Standard X embed. The repo has no tweet/embed component, so this is plain HTML.
     Can be swapped for a YouTube embed (iframe) later. The link inside the blockquote is the fallback if widgets.js doesn't load. -->
<div class="not-prose my-8 flex justify-center">
  <blockquote class="twitter-tweet" data-dnt="true">
    <p lang="en" dir="ltr">1/ I made a 4.5-minute music video as a love letter to the #LitRPG books I binge.</p>
    &mdash; Sigurd (@SigurdJorsalfar)
    <a href="https://x.com/SigurdJorsalfar/status/2106031402550538566">Watch the video on X →</a>
  </blockquote>
</div>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<p class="text-center text-sm text-muted mt-2">The whole thing, made on one RTX 4090 at home.</p>

### Who's In It

- 🐈 **Carl, Princess Donut & Mongo**: *Dungeon Crawler Carl* by Matt Dinniman
- 🏹 **Jake & Sylphie**: *The Primal Hunter* by Zogarth
- 🪓 **Zac**: *Defiance of the Fall* by J.F. Brink
- 🌌 **Jason, Shade & Colin**: *He Who Fights With Monsters* by Shirtaloon

<div class="not-prose my-8 grid grid-cols-2 gap-4">
  <figure>
    <img src="/images/litrpg-video/carl-donut.jpg" alt="Carl and Princess Donut in a neon dungeon corridor" class="rounded-2xl shadow-md w-full h-auto">
    <figcaption class="text-center text-sm text-muted mt-2">Carl & Princess Donut</figcaption>
  </figure>
  <figure>
    <img src="/images/litrpg-video/jake-sylphie.jpg" alt="Jake drawing his bow in a misty forest" class="rounded-2xl shadow-md w-full h-auto">
    <figcaption class="text-center text-sm text-muted mt-2">Jake (Sylphie got her own shot)</figcaption>
  </figure>
  <figure>
    <img src="/images/litrpg-video/zac.jpg" alt="Zac with his axe in a burning forest" class="rounded-2xl shadow-md w-full h-auto">
    <figcaption class="text-center text-sm text-muted mt-2">Zac</figcaption>
  </figure>
  <figure>
    <img src="/images/litrpg-video/jason.jpg" alt="Jason grinning on the rubble with Shade behind him" class="rounded-2xl shadow-md w-full h-auto">
    <figcaption class="text-center text-sm text-muted mt-2">Jason & Shade</figcaption>
  </figure>
</div>

Plus cameos from Erin (*The Wandering Inn*), Lindon (*Cradle*), Jinwoo (*Solo Leveling*), Ilea (*Azarinth Healer*), Anthony (*Chrysalis*) and Rain (*Delve*).

<div class="not-prose my-8">
  <img src="/images/litrpg-video/every-chosen.jpg" alt="Hero silhouettes against a burning sky" class="rounded-2xl shadow-md w-full h-auto">
</div>

### The Stack

All open-weight, and all running locally in **ComfyUI**:

- 🎵 **ACE-Step 1.5**: the song
- 🖼️ **Flux.2 Klein**: 533 stills
- 🎬 **Wan 2.2**: 120 clips
- 👄 **LTX-2.3 + InfiniteTalk**: lip-sync
- 🔍 **SeedVR2**: 1080p upscale

**Tech stack**  
ComfyUI · ACE-Step 1.5 · Flux.2 Klein · Wan 2.2 · LTX-2.3 · InfiniteTalk · SeedVR2 · Claude Code · RTX 4090

<div class="not-prose my-8">
  <img src="/images/litrpg-video/alien-audience.jpg" alt="Rows of alien viewers with glowing popcorn buckets" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">One of the 533 stills: the alien audience.</p>
</div>

### How It Worked

I wrote the concept and lyrics together with Claude. After that, **Claude Code ran about 10 stages on its own**.

It made **16 song takes** for me to pick from, then built the characters, the stills and the clips. Subagents reviewed every shot, it redid the ones that failed, and then it mixed and mastered the result.

<div class="not-prose my-8">
  <img src="/images/litrpg-video/qc-review-sheet.jpg" alt="Review sheet with four candidate stills of the alien audience" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">Four options per shot, and a subagent picks or rejects them.</p>
</div>

The stages, for the curious (eleven if you count from zero, like a programmer):

0. **Preflight:** check the GPU, ComfyUI, models and disk, install what's missing, smoke-test every workflow
1. **Song:** 16 ACE-Step takes, then repaint the weak sections of the best one
2. **Stems and timing:** separate stems, align the lyrics word by word, build a beat grid and a shot list
3. **Voices and SFX:** design the voices once, generate takes for every line, make the sound effects
4. **Mix and master**
5. **Looks:** 8 candidates per character, pick one, build a multi-view sheet
6. **Stills:** 4 candidates per shot
7. **Clips:** image-to-video per shot, interpolated to 24 fps
8. **Lip-sync:** the singing and speaking shots
9. **Overlays:** the blue System boxes and counters
10. **Edit and finish:** assemble, composite, grade, upscale

### My Job

My job was to pick the song and give notes like:

- *"Zac's axe is floating"*

<div class="not-prose my-8">
  <img src="/images/litrpg-video/zac-axe-fixed.jpg" alt="Zac walking through a burning forest, carrying his axe low in his hand" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">After the note: Zac actually holds his axe now.</p>
</div>

- *"the ending feels weird"*

It took **3 rounds** and **about 24 hours** from start to finish, mostly unattended overnight.

Reviews at home have been mixed. My wife is not particularly impressed. I, on the other hand, think it's awesome. I'm hoping it gets a bit of attention on X, but honestly this one is mostly for me, to see what I can actually pull off with the technology.

### What It Cost

- **Cloud/API:** $0
- **Software:** $0 (open source)
- **Hardware:** a gaming GPU I already had
- **Claude:** my existing subscription

### What I Learned

The hardest part was balancing Claude token usage within the 5-hour usage window. Claude offloaded the heavy lifting to the local models, but it still had to stop and wait for fresh tokens several times. Even the AI has to sit around waiting for its allowance.

My own hardest job? Reviewing the drafts a few times and giving concrete notes. Tough life, I know.

### Where This Could Go

This could carry over to other things, maybe even my job as a teacher. Some students need visual input in addition to the text, and that goes straight into special education. Two ideas I might actually try:

- **See the scene:** show students a scene from the book they're reading as stills or a short clip, before or after reading. That could help the ones who struggle to form mental images.
- **Write it, then watch it:** students write a short text and the pipeline turns it into images or a small video. That gives them a real reason to write clearly and concretely.

No promises, but I'm tempted.

I've saved the whole workflow as a reusable skill in Claude, and I want to run it again, maybe in an anime style or with a different song. We'll see where it goes.
