/**
 * Food domain types + search helpers for the Food tab.
 *
 * Data lives in `src/data/food.ts` (hand-edited).
 * Display lives in `src/components/DishCard.tsx`.
 * Page route lives in `src/routes/food.tsx`.
 *
 * preparation / ingredients are OPTIONAL — Scoma's publishes menu
 * descriptions only, not full kitchen specs.
 */

import { DISHES } from "@/data/food";

export type FoodCategory =
  | "Starters"
  | "Soup & Salad"
  | "Scoma's Classics"
  | "Seafood & Meat"
  | "Pastas"
  | "Sandwiches"
  | "Sides"
  | "Dessert";

export const FOOD_CATEGORIES: FoodCategory[] = [
  "Starters",
  "Soup & Salad",
  "Scoma's Classics",
  "Seafood & Meat",
  "Pastas",
  "Sandwiches",
  "Sides",
  "Dessert",
];

export type IngredientNote = { name: string; note: string };

export type Dish = {
  id: string;
  name: string;
  category: FoodCategory;
  description: string;
  /** Optional — Scoma's menu doesn't publish prep notes. */
  preparation?: string;
  /** Optional sub-recipes. */
  ingredients?: IngredientNote[];
  info?: string;
  fireTime?: string;
  /** Tags like "gf" (gluten-free), "v" (vegan), "Shellfish", "Dairy". */
  dietaryRestrictions: string[];
  modifications?: string;
  mark?: string;
  /** Menu price line. String to allow "Cup $12 / Bowl $14" exactly. */
  price: string;
};

export const ALL_DISHES: Dish[] = DISHES;

export function searchHaystack(d: Dish): string {
  return [
    d.name,
    d.category,
    d.description,
    d.preparation ?? "",
    d.info ?? "",
    d.modifications ?? "",
    ...(d.ingredients ?? []).flatMap((i) => [i.name, i.note]),
    ...d.dietaryRestrictions,
  ]
    .join(" \u0001 ")
    .toLowerCase();
}

export function filterDishes(query: string, list: Dish[] = ALL_DISHES): Dish[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  const tokens = q.split(/\s+/).filter(Boolean);
  return list.filter((d) => {
    const hay = searchHaystack(d);
    return tokens.every((t) => hay.includes(t));
  });
}

export function groupByCategory(list: Dish[]): Array<{ category: FoodCategory; dishes: Dish[] }> {
  const map = new Map<FoodCategory, Dish[]>();
  for (const c of FOOD_CATEGORIES) map.set(c, []);
  for (const d of list) map.get(d.category)?.push(d);
  return FOOD_CATEGORIES.filter((c) => (map.get(c) ?? []).length > 0).map((c) => ({
    category: c,
    dishes: map.get(c) ?? [],
  }));
}

export function allDietaryTags(list: Dish[] = ALL_DISHES): string[] {
  const set = new Set<string>();
  for (const d of list) for (const t of d.dietaryRestrictions) set.add(t);
  return [...set].sort((a, b) => a.localeCompare(b));
}
