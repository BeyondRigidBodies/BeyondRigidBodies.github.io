# Beyond Rigid Bodies × Newton for Robotics

Static website for the SIGGRAPH Asia 2026 full-day workshop:
https://beyondrigidbodies.github.io/

The site uses `index.html`, `styles.css`, `script.js`, and the images in `assets/`.
No build or package installation is required. Preview from this directory with
`python3 -m http.server 8000`, then open http://localhost:8000/.

## Program source and status

The September 23, 2026 update follows the organizers' canonical merged proposal,
`SIGGRAPHーASIA/main.tex`, especially “Program status,” “Provisional Full-Day
Schedule,” and “Invited and Presenting Speakers.” The original separate BRB and
Newton proposals are historical references, not the current schedule.

- The full-day format is confirmed.
- The SIGGRAPH Asia 2026 conference schedule sets the workshop for Thursday,
  December 3, 2026, 09:00–17:00 Kuala Lumpur time (GMT+8), in MR 401/402,
  Level 4.
- Speaker slots: NVIDIA Warp 09:10–10:00, Newton 14:35–15:35, Isaac Lab
  15:45–16:45 (one hour each since October 28, 2026), and the clinics of
  Srinath Sridhar 10:15–10:45, Yunzhu Li 10:45–11:15, Tao Du 11:45–12:15, and
  Taku Komura 13:30–14:00 (afternoon at his request). Only non-speaker sessions
  may move or shrink.
- Breaks run 10:00–10:15, 11:15–11:30, and 15:35–15:45; lunch 12:30–13:30. The
  case lightning round takes 11:30–11:45 and the BRB working groups and
  report-back 14:00–14:35. The day ends with the joint synthesis at 16:45–17:00.
- Individual slots and clinic themes remain subject to organizer confirmation.
- Srinath Sridhar and Yunzhu Li are confirmed; their delivery is no longer pending.
- Mohammad Mohajerani and Spencer Huang are confirmed speakers, as listed in the
  SIGGRAPH Asia 2026 conference schedule.

The five NVIDIA portraits supplied by the organizers in `SIGGRAPHーASIA/figures/`
are included in Speakers. Johnny Nunez Cano, Asier Arranz, and Lu Shi also appear
in the combined BRB × Newton organizing team.
Their original image files are preserved in `assets/` with URL-friendly names.
Mohammad Mohajerani and Spencer Huang appear only in Speakers, not in the
organizing team.
Speaker and organizer descriptions concisely summarize the corresponding
biographies in `main.tex`. Organizer titles also follow that file;
the NVIDIA team distinguishes the two named organizers from Lu Shi's speaker role.
The supplied `newton-figure-1.png` and `newton-figure-2.png` appear in the overview
and schedule, with captions drawn from the merged program in `main.tex`; clicking
a diagram opens the original image. The discussion diagram illustrates participation
activities; the provisional timetable remains the source for session order.

## Presentation

The two workshop names and the subtitle (“Open GPU Physics, Differentiable
Simulation, and Multi-Solver Ecosystems…”) share one title size and weight.
The schedule lists the four research clinics by theme and speaker; a note
below the timetable gives the clinic times.

Keep the page text short and say each fact once: the date, time, and room
appear in the hero and the schedule heading only, and figure captions do not
repeat the overview or timetable. Section headings share
one responsive size; profile and program headings share a smaller size. The
layout uses system sans-serif fonts, a white background, thin rules, and restrained
blue accents. Speakers and organizers each appear in one horizontal carousel.
All profiles share a card width and height, with a portrait, name, affiliation,
and one short description; cards carry no role label, since the section heading
already says Speakers or Organizers. Touch swipes, arrow buttons, and keyboard
left/right navigation are supported, including reduced-motion preferences.
Both Newton diagrams retain their original files and aspect ratios, with image links
and inline automatic height to prevent older cached styles from stretching
them. The stylesheet URL is versioned for the presentation update.

When a new program is confirmed, update the hero facts, schedule, speaker status,
attendance text, and social-sharing metadata together. Do not convert proposed
clinic themes into confirmed talk titles or advertise a remote attendance option
without confirmation.

## Publishing

GitHub Pages publishes from `main` through the repository's automatic
“pages build and deployment” workflow. Before pushing, check `git diff --check`,
verify all schedule times against the current organizer source, and review the
page at desktop and mobile widths. After pushing, check the Pages workflow and
the live site.
