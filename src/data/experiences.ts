/**
 * Scoma's Experience Curator tunables — deterministic, no AI.
 *
 * Course flow tuned for a seafood-forward Fisherman's Wharf menu.
 * Logic lives in src/lib/curator.ts.
 */
import type { FoodCategory } from "@/lib/food";

/**
 * Course flow when budget allows. Earlier in the list = dropped LAST when
 * budget is tight (so a Starter and a main and Dessert are protected).
 */
export const COURSE_FLOW: FoodCategory[] = [
  "Starters",
  "Soup & Salad",
  "Pastas",
  "Scoma's Classics",
  "Dessert",
];

/** Drop order when the budget is too low to fit the full flow. */
export const DROP_ORDER: FoodCategory[] = ["Pastas", "Soup & Salad"];

/**
 * Premium dish ids — preferred by the "Chef's Catch" option, reserved for
 * the upper end of the budget range. The algorithm also auto-detects
 * premium by price (top 35% in each category).
 */
export const PREMIUM_DISH_IDS: string[] = [
  "whole-dungeness",
  "crab-louie",
  "lazy-mans-cioppino",
  "shellfish-saute-sec",
  "alaskan-halibut",
  "king-salmon",
  "wagyu-bistro-filet",
  "mixed-seafood-grill",
];

/**
 * Keyword rules for restriction filtering. Each rule maps a restriction
 * label to substrings checked against dietaryRestrictions / name /
 * description (case-insensitive).
 */
export const RESTRICTION_RULES: Record<string, { tags?: string[]; keywords?: string[] }> = {
  "Gluten-free": { tags: ["gluten"] },
  "Dairy-free": { tags: ["dairy"] },
  "Nut-free": { tags: ["nuts", "nut"] },
  "No pork": { tags: ["pork"], keywords: ["pancetta", "bacon", "prosciutto", "guanciale"] },
  "No shellfish": { tags: ["shellfish"], keywords: ["shrimp", "lobster", "crab", "scallop", "mussel", "clam", "prawn", "calamari", "oyster"] },
  "No fish": { tags: ["fish"], keywords: ["salmon", "halibut", "snapper", "cod", "sole", "petrale", "flounder", "tuna", "anchovy", "anchovies", "branzino"] },
  "No red meat": {
    keywords: ["beef", "steak", "wagyu", "lamb", "veal", "bolognese", "burger"],
  },
  "Vegetarian": {
    keywords: [
      "beef", "steak", "wagyu", "lamb", "veal", "pork", "chicken", "duck",
      "fish", "salmon", "halibut", "snapper", "cod", "sole", "petrale", "flounder", "tuna", "anchovy", "anchovies",
      "shrimp", "lobster", "crab", "scallop", "mussel", "clam", "prawn", "calamari", "oyster",
      "pancetta", "bacon", "prosciutto",
    ],
  },
  "Vegan": {
    tags: ["dairy", "egg"],
    keywords: [
      "beef", "steak", "wagyu", "lamb", "veal", "pork", "chicken", "duck",
      "fish", "salmon", "halibut", "snapper", "cod", "sole", "petrale", "flounder", "tuna", "anchovy",
      "shrimp", "lobster", "crab", "scallop", "mussel", "clam", "prawn", "calamari", "oyster",
      "pancetta", "bacon", "prosciutto",
      "honey", "butter", "cheese", "cream", "milk", "parmigiano", "parmesan",
      "ricotta", "mascarpone",
    ],
  },
};
