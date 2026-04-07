```markdown
# Design System Strategy: The Digital Tactician

## 1. Overview & Creative North Star
The **Creative North Star** for this design system is **"The Digital Tactician."** In the high-stakes environment of an E-sports draft, the UI must function as a high-fidelity tactical HUD (Heads-Up Display). We are moving away from the "web page" look and toward a "command center" aesthetic found in top-tier broadcast packages (GCS/AOG).

This system breaks the standard grid through **Intentional Asymmetry** and **Atmospheric Depth**. By utilizing chamfered edges, sharp geometric silhouettes, and neon light-leaks, we create an experience that feels engineered rather than designed. The layout should prioritize a "data-forward" approach where real-time information feels alive, pulsing with the energy of a live tournament.

---

## 2. Colors: Chromatic Energy
The palette is built on a foundation of "void" space, accented by high-frequency neon signals.

- **Primary Role (Ally):** Use `primary_container` (#00f2ff) for all "friendly" actions and suggestions.
- **Secondary Role (Enemy):** Use `secondary_container` (#ff525c) to signify threats, bans, and opposing team picks.
- **Tertiary Role (AI/Golden Path):** Use `tertiary_fixed_dim` (#f1c100) for the AI "Master" suggestions—this is the most premium signal in the UI.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To separate the "Pick Phase" from the "Ban Phase," use a shift from `surface_container_low` (#181b25) to `surface_container` (#1c1f29). Boundaries are felt through tonal shifts, not drawn with lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of hardware modules. 
- Use `surface_container_lowest` (#0a0e17) for the main background.
- Nest active hero cards using `surface_container_high` (#262a34).
- Use `surface_bright` (#353943) only for momentary "active" states or highlighted tactical alerts.

### The "Glass & Gradient" Rule
For floating overlays (like hero stat pop-ups), use `surface_variant` (#31353f) at 60% opacity with a `20px` backdrop-blur. 
**Signature Texture:** Main CTA buttons must utilize a linear gradient from `primary_fixed_dim` (#00dbe7) to `primary_container` (#00f2ff) at a 135-degree angle to simulate a glowing light-bar.

---

## 3. Typography: Sharp & Functional
Our typography balance reflects a "Military-Grade" intelligence system.

- **The Display Scale (`spaceGrotesk`):** Used for "PICKING," "BANNING," and "MATCH START." This font’s wide, technical stance provides the "E-sports Broadcast" authority.
- **The Body & Title Scale (`inter`):** Used for hero names and descriptions. It is neutral and highly legible to ensure no misreads during a 30-second timer.
- **The Label Scale (`manrope`):** Used for micro-data (Win rates, KDA, Ban frequency). These must be in all-caps with 0.05em letter spacing to maintain a "coded" feel.

---

## 4. Elevation & Depth: Tonal Layering
In a Cyberpunk HUD, depth is created by light and stacking, not shadows.

- **The Layering Principle:** A hero's "suggested build" card should not have a shadow; it should be placed in a `surface_container_highest` (#31353f) container sitting on a `surface_dim` background.
- **Ambient Shadows:** If a card must "float" (e.g., a modal), use a tinted shadow: `0px 20px 40px rgba(0, 242, 255, 0.08)`. This mimics the neon glow of the UI hitting the surface below it.
- **The "Ghost Border" Fallback:** For hero portraits, use a `1px` border with `outline_variant` at 20% opacity. It should look like a faint laser-etching, not a stroke.
- **Chamfered Geometry:** To achieve the "E-sports" look, use CSS `clip-path` to create 8px chamfered (angled) corners on all containers. Do not use standard `border-radius` (set to 0px).

---

## 5. Components: Tactical Modules

### Buttons (Tactical Triggers)
- **Primary (Ally Pick):** 8px chamfered edges, `primary_container` background, `on_primary` text. Add a "neon pulse" animation on the border using a box-shadow spread.
- **Secondary (Enemy Ban):** 8px chamfered edges, `secondary_container` background.
- **Tertiary (AI Suggest):** Outline-only with `tertiary_fixed` (#ffe08b), using a 10% fill.

### Hero Cards & Lists
- **Forbid Dividers:** Do not use lines between heroes in the selection list. Use a `4px` vertical gap and alternating `surface_container_low` and `surface_container` backgrounds.
- **Status Indicators:** Use a `2px` wide vertical "glow bar" on the left edge of a card to indicate the current active player.

### Input Fields (Search)
- **Styling:** Underline-only style using `outline` (#849495). When focused, the underline transitions to `primary_fixed` (#74f5ff) with a faint outer glow.

### Additional Component: The "Draft Pulse" Timer
- A horizontal progress bar that uses `primary_container` for the first 20 seconds, transitioning to `secondary_container` (Crimson) when the timer hits 5 seconds, accompanied by a subtle 10% opacity screen-flicker.

---

## 6. Do's and Don'ts

### Do:
- **Use Intentional Asymmetry:** If the left side of the UI has a heavy data module, leave the right side with more "negative" void space to focus on the hero splash art.
- **Embrace High Contrast:** Ensure `on_background` text (#dfe2ef) is used against the dark surfaces for maximum readability under intense gaming lights.
- **Animate Transitions:** Hero portraits should "glitch-in" or slide from the side rather than simply appearing.

### Don't:
- **No Rounded Corners:** `0px` radius across the board. Use angles/chamfers for "softness," never circles.
- **No Pure Greys:** Every "dark" color in this system is slightly blue-tinted to maintain the "Deep Navy" atmosphere.
- **No Standard Shadows:** Avoid black `rgba(0,0,0,0.5)` shadows. They muddy the neon aesthetic. Use colored "glows" at low opacity.