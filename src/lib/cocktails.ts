/**
 * Cocktail domain types + search helpers for the Bar Program tab.
 *
 * Data lives in `src/data/cocktails.ts` (hand-edited).
 *
 * `kind` lets the page group cocktails / mocktails / beer / other beverages.
 * Beer entries typically have empty aLaMinute/batched/ingredients arrays.
 */

import { COCKTAILS } from "@/data/cocktails";

export type RecipeLine = string;
export type IngredientNote = { name: string; note: string };
export type CocktailKind = "cocktail" | "mocktail" | "beer" | "other";

export const COCKTAIL_KINDS: CocktailKind[] = ["cocktail", "mocktail", "beer", "other"];

export const KIND_LABELS: Record<CocktailKind, string> = {
  cocktail: "Cocktails",
  mocktail: "Mocktails (N/A)",
  beer: "Beer",
  other: "Other Beverages",
};

export type Cocktail = {
  id: string;
  name: string;
  menuDescription: string;
  kind?: CocktailKind;
  /** Optional — short flavor / vibe summary. */
  character?: string;
  aLaMinute?: RecipeLine[];
  batched?: RecipeLine[];
  ingredients?: IngredientNote[];
  story?: string;
  garnish?: string;
  dietaryRestrictions: string[];
  modifications?: string;
  price: number | null;
  tags?: string[];
};

export const ALL_COCKTAILS: Cocktail[] = COCKTAILS;

export function searchHaystack(c: Cocktail): string {
  return [
    c.name,
    c.menuDescription,
    c.character ?? "",
    c.story ?? "",
    c.garnish ?? "",
    c.modifications ?? "",
    c.kind ?? "",
    ...(c.aLaMinute ?? []),
    ...(c.batched ?? []),
    ...(c.ingredients ?? []).flatMap((i) => [i.name, i.note]),
    ...c.dietaryRestrictions,
    ...(c.tags ?? []),
  ]
    .join(" \u0001 ")
    .toLowerCase();
}

export function filterCocktails(query: string, list: Cocktail[] = ALL_COCKTAILS): Cocktail[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  const tokens = q.split(/\s+/).filter(Boolean);
  return list.filter((c) => {
    const hay = searchHaystack(c);
    return tokens.every((t) => hay.includes(t));
  });
}

export function formatCocktailPrice(c: Cocktail): string {
  return c.price == null ? "—" : `$${c.price}`;
}

export function allDietaryTags(list: Cocktail[] = ALL_COCKTAILS): string[] {
  const set = new Set<string>();
  for (const c of list) for (const d of c.dietaryRestrictions) set.add(d);
  return [...set].sort((a, b) => a.localeCompare(b));
}

export function groupByKind(list: Cocktail[]): Array<{ kind: CocktailKind; items: Cocktail[] }> {
  const map = new Map<CocktailKind, Cocktail[]>();
  for (const k of COCKTAIL_KINDS) map.set(k, []);
  for (const c of list) map.get(c.kind ?? "cocktail")?.push(c);
  return COCKTAIL_KINDS
    .filter((k) => (map.get(k) ?? []).length > 0)
    .map((k) => ({ kind: k, items: map.get(k) ?? [] }));
}
