---
title: "LitTrack Pro: How physical bookmarks got my students hooked on reading"
description: "Started as a simple Excel sheet to track daily reading. Ended with live leaderboards and custom bookmarks featuring cartoon-me. One of the girls actually asked me “What have you done to us?!”"
pubDate: 2026-04-10
category: "Projects"
tags: ["littrack", "django", "reading tracker", "bookmarks", "education", "tailwind", "daisyui"]
draft: false
---

LitTrack Pro is the reading tracker I built because nothing else fit how I actually teach literature.

We read **all year** in my classes — minimum 15 minutes every single day. I wanted a live scoreboard so the kids could see who was reading the most and turn it into friendly competition. What started as a simple Excel sheet turned into a full Django web app with leaderboards, progress bars, and the part the kids love most: **physical bookmarks**.

### The Bookmarks That Made It Real

I created four page-count tiers and designed a bookmark for each:

- **Scroll Seeker** – 500 pages (me in basic adventure gear with a book)  
- **Chapter Crusader** – 1 000 pages (stack of books as a shield, crusader outfit)  
- **Tome Titan** – 3 000 pages (kingly regalia + giant tome)  
- **Haloed Legend** – 7 500+ pages (Master Chief suit — yes, Halo pun)

Hit a tier → you get the physical bookmark. The absolute top reader of the year gets the secret **Supreme Story Sovereign** bookmark on fancy linen paper (only one exists).


### The Bookmarks

<div class="not-prose my-8 w-full flex flex-wrap justify-center gap-6">
  <img src="/images/littrack/scroll-seeker.jpg" 
       alt="Scroll Seeker bookmark" 
       class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">

  <img src="/images/littrack/chapter-crusader.jpg" 
       alt="Chapter Crusader bookmark" 
       class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">

  <img src="/images/littrack/tome-titan.jpg" 
       alt="Tome Titan bookmark" 
       class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">

  <img src="/images/littrack/haloed-legend.jpg" 
       alt="Haloed Legend bookmark" 
       class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">

  <img src="/images/littrack/supreme-story-sovereign.jpg" 
       alt="Supreme Story Sovereign bookmark" 
       class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">
</div>

<p class="text-center text-sm text-base-content/70 mt-2">The five LitTrack Pro reward bookmarks. Students get one when they hit each page tier.</p>

A few weeks ago one of the girls looked at me and said, “What have you done to us?!” — because they’re now *choosing* to read. That one line made every late-night coding session worth it.

### How It Works (and what it doesn’t do)

I only use the app for two things: logging finished books and showing the live leaderboard. No assignments, no grading — just pure motivation and visible progress. The rest (book reviews, discussions, etc.) I still handle the old-fashioned way.

**Features**  
- Live class leaderboard + individual progress bars  
- Physical bookmark rewards for hitting page tiers  
- Super simple admin for me to add readings  
- Built to scale (multi-class, multi-school ready)

**Tech stack**  
Python · Django · Tailwind · daisyUI · Render

### What I Learned

Data migrations when I decided to support multiple schools were painful. The first version wasn’t mobile-friendly at all. I leaned hard on AI the whole way and learned a ton about deployment, production databases, and when to switch models (Grok-4 for the big lifts, Claude for polishing).

LitTrack Pro is still “in progress” and currently only used with my own students, but it’s built so other teachers or even other schools could jump in if they want. We’ll see where it goes.