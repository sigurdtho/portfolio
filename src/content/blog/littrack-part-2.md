---
title: "LitTrack Pro, part 2: genre titles, season awards and 19 new bookmarks"
description: "Since part 1, LitTrack Pro has picked up genre titles, season awards, milestones, streaks and a fairer way of counting pages. It also got 19 new printed bookmarks starring an AI-made cartoon version of me. The first batch of cut-outs ate my teeth."
pubDate: 2026-10-02
category: "Projects"
tags: ["littrack", "reading tracker", "bookmarks", "education", "gamification", "print design", "ai art"]
draft: true
heroImage: "/images/littrack-part-2/genre-titles-bookmarks.jpg"
---

In [part 1](/blog/littrack) I wrote about how LitTrack Pro went from an Excel sheet to a Django app, and how four physical bookmarks got my students hooked on reading.

This is what has happened since. In short: more ways to earn a bookmark, more bookmarks, and a slightly embarrassing number of cartoon versions of me.

### What's New Since Part 1

- 📚 **Genre titles:** read five different books in one genre and you earn a title for good
- 🏅 **Season awards:** five awards you can win again every school year, and none of them is a race for pages
- 🎯 **Book milestones:** 10, 25, 50 and 100 different books over your whole time at the school
- 🔥 **Monthly streak:** a live count of how many months in a row you've logged a book
- ⚖️ **Effective pages:** a fairer way of counting, so a page of picture book isn't worth the same as a page of prose novel
- 🔖 **19 new bookmarks:** one for every genre title and season award, printed and handed out

### The Ladder, Now With a Bottom Rung

The tiers from part 1 are still there, plus a starting tier so nobody begins at "nothing":

| Tier | Effective pages |
|---|---|
| 🌿 New Reader | 0–499 |
| 📜 Scroll Seeker | 500–999 |
| ⚔️ Chapter Crusader | 1,000–2,999 |
| 👑 Tome Titan | 3,000–7,499 |
| ✨ Haloed Legend | 7,500+ |

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/achievements-tiers-genres.png" alt="The Achievements page in LitTrack Pro, showing the five reading tiers and the fourteen genre titles" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">The Achievements page: every award, and exactly what earns it.</p>
</div>

I thought about resetting the page count every school year, but it felt heartless. Pupils simply read less than some of us teachers do, and the pupils who read the most only just got past 3,000 effective pages in a year. With a yearly reset, the top tiers would be practically out of reach for the kids.

So the ladder carries on from one year to the next. Over three years of lower secondary, a steady reader can climb all the way. So far only teachers have reached Haloed Legend. Give the kids a few years.

### Effective Pages

Tiers run on effective pages, not raw ones. A 200-page graphic novel is a great read, but it isn't 200 pages of prose. Each format gets a multiplier:

| Format | Multiplier |
|---|---|
| Prose novel | ×1.0 |
| Graphic novel | ×0.5 |
| Manga | ×0.6 |
| Picture book | ×0.25 |
| Comic anthology | ×0.4 |
| Other | ×1.0 |

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/how-pages-are-counted.png" alt="The How pages are counted panel, listing the multiplier for each book format" class="rounded-2xl shadow-md w-full h-auto">
</div>

A few rules on top:

- **Re-reads count at ×0.5** on top of the format. Re-reading is real reading. It just isn't new reading.
- **Deep Diver is the only award measured in raw pages.** A 500-page graphic novel is still a 500-page book to carry around.
- **Different books, not logs.** If you log the same book again in a later year, its pages count again, but the book total and the genre titles only ever count it once.
- **Each school sets its own numbers** for the genre titles and Deep Diver, and raising them takes nothing away. Nobody loses what they've already earned.

### Genre Titles

There are fourteen, one per genre:

- 🧙 **Realm Walker** (fantasy): *Five journeys into other worlds.*
- 🚀 **Star Wanderer** (science fiction): *Five voyages past the last star.*
- 🔍 **Shadow Sleuth** (mystery): *Five cases opened, five answers found.*
- ⚡ **Edge Rider** (thriller): *Five books you could not put down.*
- ⚔️ **Time Drifter** (historical fiction): *Five lives lived in other centuries.*
- 💞 **Heartweaver** (romance): *Five stories about the human heart.*
- 🌟 **Life Seeker** (biography): *Five real lives, read end to end.*
- 🧠 **Mind Miner** (non-fiction): *Five books that left you knowing more.*
- 🎨 **Panel Sage** (graphic novel): *Five stories told in pictures.*
- 🌿 **Rising Voice** (young adult): *Five books about becoming someone.*
- 📜 **Old Soul** (classic): *Five books that outlived their authors.*
- 👁️ **Dark Dreamer** (horror): *Five books read with the light on.*
- 🗺️ **Trail Blazer** (adventure): *Five expeditions, no map needed.*
- 📖 **Free Spirit** (other): *Five books that fit no shelf.*

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/genre-titles-bookmarks.jpg" alt="Four genre title bookmarks: Realm Walker, Star Wanderer, Shadow Sleuth and Time Drifter, each with a cartoon version of me in costume" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">Me as a wizard, a pilot, a detective and a time traveller. None of it drawn by me.</p>
</div>

The idea came out of a brainstorm with AI. Every book in LitTrack already had a genre, so a reward for genres was the obvious next step. It also solves a real problem: some pupils only ever read one genre, and the titles are a gentle push to try something else.

Why five books? It shouldn't be too easy. And because the titles were granted retroactively for last year's books, a lot of pupils were already halfway there on day one.

A book with several genres counts for all of them. *Before They Are Hanged* is both fantasy and adventure, so when I finished it, it counted towards Realm Walker and Trail Blazer at the same time.

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/multi-genre-example.png" alt="A reading log entry for Before They Are Hanged by Joe Abercrombie, tagged with both Fantasy and Adventure" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">One book, two genres, two titles moving forward.</p>
</div>

Where do the genres come from? When a book is added, several book APIs work together to find it. If none of them has a genre, the Claude API reads what we have and decides. That's all I'll say about the tech for now. It deserves its own post.

So far fantasy and adventure are by far the most common titles, with graphic novels not far behind. Thriller, romance, biography, horror and "other" are still unclaimed. Horror especially hasn't caught on with the kids yet.

### Season Awards

Season awards are won afresh every school year. None of them is a race for pages: several pupils can win the same one, and a slow reader can win every single one.

- 🧭 **Genre Voyager:** read books from six different genres in one school year
- 🕯️ **Steady Flame:** log at least one book every month of the school year (one quiet month is forgiven)
- ⚡ **Tier Streak:** reach the same tier as last year, or a higher one. Holding your level counts.
- 📈 **Own Best:** read more pages than you did last year. The only rival is last year's you.
- 🐋 **Deep Diver:** finish a single book of 500 raw pages or more

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/season-awards-bookmarks.jpg" alt="The five season award bookmarks: Genre Voyager, Steady Flame, Deep Diver, Tier Streak and Own Best" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">The five season awards. Deep Diver got a whale instead of me, which is probably for the best.</p>
</div>

Own Best is my favourite. Most kids will never top the leaderboard, but every one of them can beat their own last year.

It's early in the school year, so the season awards are just getting going. A handful of pupils have already earned Deep Diver, and nobody has managed Tier Streak yet.

### Milestones and Streaks

There are two more things on top:

- **Book milestones** at 10, 25, 50 and 100 different books, counted over your whole time at the school. Only your highest one shows on your profile. Nobody has reached 100 yet.
- **The monthly streak** appears once you've logged a book two or more months in a row, and it keeps counting for as long as the streak lasts. It's a live count, not a trophy: miss a month and it goes back to zero. One short book a month keeps it alive.

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/achievements-season-milestones-streak.png" alt="The Season Awards, Book Milestones and Monthly Streak sections of the Achievements page" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">Season awards, milestones and the streak, as the app explains them.</p>
</div>

### The New Bookmarks

Every genre title and season award has its own bookmark, nineteen in total. They share one design: a framed card with the genre or award at the top, the title, and a one-line motto at the bottom. Some cards are light and some are dark navy. On the back is a small line-art medallion for that award and the words *Sigurd's Legendary Bookmarks*. Modest, I know.

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/front-and-back.jpg" alt="Front and back of the Realm Walker and Edge Rider bookmarks. The backs show a line-art emblem and the text Sigurd's Legendary Bookmarks" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">Front and back, light and dark.</p>
</div>

They're printed by Vistaprint on high-quality silk paper. Because the titles were granted retroactively for last year's books, quite a few pupils and teachers already had some the day they arrived. The kids think getting bookmarks is a big deal, which was the whole point.

To be completely clear: I didn't draw any of this. The art and the design were made together with AI, with a lot of back and forth. I'd describe what I wanted, look at what came back, ask for changes, and go again. Many times. My contribution was ideas and opinions, not drawing skills.

The painted tier bookmarks from part 1 are still in use, and I have plenty left. They're not as polished as the new set, but they work fine for the tiers. And the one-of-a-kind **Supreme Story Sovereign** bookmark still goes to the top reader of the year in my class.

<div class="not-prose my-8 w-full flex flex-wrap justify-center gap-6">
  <img src="/images/littrack/scroll-seeker.jpg" alt="Scroll Seeker bookmark" class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">
  <img src="/images/littrack/chapter-crusader.jpg" alt="Chapter Crusader bookmark" class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">
  <img src="/images/littrack/tome-titan.jpg" alt="Tome Titan bookmark" class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">
  <img src="/images/littrack/haloed-legend.jpg" alt="Haloed Legend bookmark" class="rounded-2xl shadow-md w-28 h-auto flex-shrink-0">
</div>

<p class="text-center text-sm text-muted mt-2">The original tier bookmarks, still doing their job.</p>

### How the Bookmarks Were Made (the Nerdy Bit)

The pipeline is a few Python scripts on my PC, and most of the lessons are written into their comments.

1. **Character art from Grok.** The character cards start as an AI image of me in costume.
2. **Cut it out.** The first versions had a white background, and removing white also removes everything else that's white: teeth, the whites of the eyes, a white shirt. My first cartoon selves were, briefly, toothless. The fix was to redo the art on a flat chroma-green background (#00b140). Nothing in a human figure is that green, so the background comes off cleanly.
3. **Vectorise it.** The cut-out is traced into an SVG with vtracer, so it prints sharp at any size.
4. **Draw the emblems in code.** The back-side medallions are drawn as vector line art on one shared frame, grid and stroke weight, so the whole set looks like a collection.
5. **Make print files.** A script lays out each side in headless Chrome and saves a fully vector PDF at exactly 54 × 155 mm, which is Vistaprint's full artboard with bleed. A PDF has no resolution, while a 1024-pixel AI image stretched over a 54 mm card is either just adequate or visibly soft.

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/art-pipeline.jpg" alt="Four steps of the Realm Walker bookmark: raw AI art on white, the same art redone on green, the cut-out figure, and the finished print file" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">From raw AI art to print file: white, green, cut out, card.</p>
</div>

Two bugs worth sharing:

- **The pixelated emblem.** The emblem was first added as a background image, and Chrome turns background images into pixels when it prints. So there was a pixelated emblem in the middle of an otherwise perfectly sharp PDF, which brought back exactly the graininess the whole thing was built to avoid. Inline SVG fixed it.
- **The hole in the middle.** The emblem lookup used the award's title instead of its slug, found nothing, and quietly left the space empty. The result was 38 PDFs that looked finished and had a hole in the middle. Now it complains loudly instead.

### Teachers Don't Compete With the Kids

The teachers log their reading in LitTrack too, but we don't compete with the pupils. The display in the staff room shows the pupil ranking as the main board, first names only. The teachers get a small, separate **Spotlight** panel in the corner.

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/staff-room-display.png" alt="The staff-room display: a large pupil leaderboard with all names blurred, a blurred Recently Finished list, and a small teacher Spotlight panel" class="rounded-2xl shadow-md w-full h-auto">
  <p class="text-center text-sm text-muted mt-2">Pupils on the main board, teachers in the Spotlight corner. All names except mine are blurred.</p>
</div>

I'm currently top of the Spotlight. I'm choosing to see that as leading by example.

### Privacy and Accessibility

This is school data about children, so it has to be handled with care. LitTrack has a data export for each pupil, and a one-click GDPR erase that deletes a pupil completely if they ask for it. It's also built with universal design and accessibility in mind, so it should work for every pupil.

<div class="not-prose my-8">
  <img src="/images/littrack-part-2/gdpr-buttons.png" alt="Profile buttons in LitTrack Pro: Log a Book, Edit, Report, Certificate, Data (GDPR) and Erase (GDPR)" class="rounded-2xl shadow-md w-full h-auto">
</div>

It's also why every screenshot in this post is blurred and the numbers are kept vague.

### Does It Work?

There's no new quote this year to top the one from part 1. For the record, "What have you done to us?!" came last year, just after the first bookmarks arrived. I'd given the class a choice between reading and doing something else, and they went straight into reading mode because it was all so exciting. Will the genre titles actually widen what people read, or will everyone just collect a fifth fantasy book? Honestly, it's too early to tell. Ask me again in June.

### A Question for Other Teachers

If you've used rewards like this: how do you keep them meaningful over several years, without the kids getting bored or the top readers running away with everything? I'd love to hear what has worked for you, and what hasn't.
