## Rebuild for Scoma's San Francisco

Repurpose the app from Bottega (Napa) to **Scoma's** — the historic seafood restaurant on Fisherman's Wharf. Replace all content data, keep the existing architecture (Wines / Bar / Food / Experiences / Education tabs, AI curator, search, filters).

### Research phase (online sources)

I'll pull from Scoma's official site (scomas.com), their published PDF menus, and reputable San Francisco history sources:

1. **Wines** — Scoma's wine list (by-the-glass + bottles, white/red/sparkling/rosé, vintages, prices).
2. **Food menu** — appetizers, salads/soups, pasta, seafood entrées, sides, desserts. Menu descriptions only (no ingredient/prep deep-dive — they don't publish that).
3. **Bar program** — house cocktails, mocktails, beer list. Replaces the current Bottega cocktails entirely.
4. **Education content** — pulled from web research:
   - **Fish & seafood** species Scoma's serves (Dungeness crab, petrale sole, salmon, etc.) — seasonality, how to talk about them
   - **Sustainability** — Scoma's "Pier-to-Plate" program (own fish-receiving station on Pier 47, the only restaurant with one), Monterey Bay Aquarium Seafood Watch alignment
   - **Fisherman's Wharf history** — Italian-immigrant fishing community, Pier 47, the fleet
   - **Scoma's history** — founded 1965 by Al & Joe Scoma, evolution from coffee shop to landmark

### Data file changes

```
src/data/wines.json         Replace with Scoma's wine list
src/data/food.ts            Replace with Scoma's menu (menuDescription only;
                            leave preparation/ingredients empty or remove)
src/data/cocktails.ts       Replace with Scoma's cocktails + mocktails + beer
src/data/education.ts       Replace with fish/sustainability/history modules
src/data/experiences.ts     Re-tune AI curator prompt for Scoma's flow
                            (seafood-forward, not 5-course Italian)
```

### Schema adjustments

- **Food**: Scoma's doesn't publish ingredient/prep details. Make `preparation` and `ingredients` optional in the `Dish` type and hide those sections in `DishCard` when empty. Categories shift to Scoma's actual menu structure: **Appetizers, Soups & Salads, Pasta, From the Sea (entrées), Sides, Dessert**.
- **Cocktails**: Add a `kind` field (`"cocktail" | "mocktail" | "beer"`) so the Bar Program tab can group them. Beer entries skip `aLaMinute`/`batched`/`ingredients` and just show name + style + price.

### Experiences tab — adapted for Scoma's

Current curator assumes Italian 5-course (Antipasto → Pasta → Secondo → Contorno → Dolce). Scoma's is a seafood house with a different rhythm. New flow:

- **Default arc**: Appetizer → (optional Soup or Salad) → Pasta or Entrée (or both for indulgent) → Dessert
- **Inference rules** in the prompt: lean into seafood; reserve premium items (whole Dungeness crab, cioppino, lobster) for the upper budget; always offer a non-seafood option when restrictions include "shellfish allergy" or "no fish"; suggest a chilled white or sparkling pairing note in the rationale (no full wine pairing yet — that's a later feature)
- Two contrasting menu options: one **"Wharf Classic"** (traditional Scoma's hits — Dungeness, cioppino, petrale), one **"Chef's Catch"** (more adventurous or premium)
- Update validation: categories match new Scoma's structure; required courses = Appetizer + main (entrée or pasta) + Dessert; Soup/Salad and second main are optional

### UI/branding touch-ups

- `SiteNav` title: "Scoma's · Server Quick Reference" (or similar)
- `README.md` updated to reflect the new restaurant
- Keep the existing dark theme + semantic tokens — no visual redesign

### Out of scope (flag for later)

- Wine pairing per dish (still a great next step)
- Live menu sync from scomas.com
- Photos of dishes
- Allergen tags beyond what Scoma's publicly notes

### How I'll execute

1. Research Scoma's wine list, food menu, bar program, and history from their site + reputable sources (Firecrawl/web fetches).
2. Generate the four data files.
3. Adjust the `Dish` / `Cocktail` types and the two affected cards.
4. Rewrite the curator prompt + validation for Scoma's flow.
5. Update nav title + README.
6. Verify in the preview that each tab renders cleanly.

This is a meaningful rewrite — expect a long single turn. If you'd rather I do it in stages (e.g. wines + food first, then bar + education + experiences), say the word.