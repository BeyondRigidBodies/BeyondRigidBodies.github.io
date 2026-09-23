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
- December 3 or 4, 2026 is under consideration; the final date is pending.
- 09:00–17:30 Kuala Lumpur time (UTC+8) is provisional: seven hours of programmed
  activity, one hour for lunch, and two 15-minute breaks.
- Individual slots, clinic themes, the room, and speaker delivery arrangements
  remain subject to joint organizer and workshop-chair confirmation.
- Mohammad Mohajerani and Spencer Huang are tentative, unconfirmed speakers.

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
