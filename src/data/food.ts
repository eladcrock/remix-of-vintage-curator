/**
 * Scoma's San Francisco, food menu (from scomas.com, updated March 2025).
 * Menu descriptions only. gf = gluten-free, v = vegan, veg = vegetarian.
 */
import type { Dish } from "@/lib/food";

export const DISHES: Dish[] = [
  // ---- Starters ----
  { id: "dungeness-crab-cocktail", name: "Dungeness Crab Cocktail", category: "Starters", description: "With Scoma's cocktail sauce.", dietaryRestrictions: ["gf", "Shellfish"], price: "$30" },
  { id: "shrimp-cocktail", name: "Wild Gulf Shrimp Cocktail", category: "Starters", description: "With Scoma's cocktail sauce.", dietaryRestrictions: ["gf", "Shellfish"], price: "$26" },
  { id: "oysters-half-shell", name: "Oysters on the Half Shell", category: "Starters", description: "Half dozen Pacific oysters on ice.", dietaryRestrictions: ["gf", "Shellfish"], price: "$26" },
  { id: "oysters-a-la-scoma", name: "Oysters a la Scoma", category: "Starters", description: "'Rockefeller'-inspired Pacific oysters with spinach, brandy-garlic aioli, topped with Asiago.", dietaryRestrictions: ["Shellfish", "Dairy"], price: "$27" },
  { id: "crispy-zucchini", name: "Crispy Zucchini", category: "Starters", description: "With marinara and Parmesan.", dietaryRestrictions: ["veg", "Dairy", "Gluten"], price: "$17" },
  { id: "calamari-fritti", name: "Calamari Fritti", category: "Starters", description: "Lemon, oregano.", dietaryRestrictions: ["Shellfish", "Gluten"], price: "$24" },
  { id: "steamed-clams", name: "Steamed Manila Clams", category: "Starters", description: "Steamed in white wine and herbs.", dietaryRestrictions: ["gf", "Shellfish"], price: "$22" },
  { id: "steamed-mussels", name: "Steamed Mediterranean Mussels", category: "Starters", description: "Steamed in white wine and herbs.", dietaryRestrictions: ["gf", "Shellfish"], price: "$22" },
  { id: "truffle-fries", name: "Truffle & Parmesan Fries", category: "Starters", description: "Crispy fries, white truffle oil, black truffle salt, shaved Parmigiano-Reggiano.", dietaryRestrictions: ["gf", "Dairy"], price: "$17" },

  // ---- Soup & Salad ----
  { id: "clam-chowder", name: "Scoma's Famous Clam Chowder", category: "Soup & Salad", description: "Creamy New England-style chowder.", dietaryRestrictions: ["Shellfish", "Dairy"], price: "Cup $12 / Bowl $14" },
  { id: "mushroom-soup", name: "Creamy Mushroom Soup", category: "Soup & Salad", description: "Truffle butter, crème fraîche, croutons.", dietaryRestrictions: ["veg", "Dairy", "Gluten"], price: "Cup $12 / Bowl $14" },
  { id: "shrimp-bisque", name: "Wild Gulf Shrimp Bisque", category: "Soup & Salad", description: "Chives, crème fraîche.", dietaryRestrictions: ["Shellfish", "Dairy"], price: "Cup $12 / Bowl $14" },
  { id: "iceberg-wedge", name: "Iceberg Wedge Salad", category: "Soup & Salad", description: "Bacon, radish, fresh herbs, blue cheese dressing.", dietaryRestrictions: ["gf", "Pork", "Dairy"], price: "$17" },
  { id: "brussels-salad", name: "Warm Brussels Sprouts Salad", category: "Soup & Salad", description: "Pancetta, eggs, onions, croutons, red wine vinaigrette.", dietaryRestrictions: ["Pork", "Egg", "Gluten"], price: "$19" },
  { id: "caesar-salad", name: "Caesar Salad", category: "Soup & Salad", description: "Romaine spears, Caesar dressing, sourdough croutons.", dietaryRestrictions: ["Dairy", "Gluten", "Anchovy"], price: "$18" },
  { id: "beet-salad", name: "Organic Roasted Beet Salad", category: "Soup & Salad", description: "Salt-roasted red & golden beets, avocado, orange, aged balsamic, fresh horseradish.", dietaryRestrictions: ["gf", "v"], price: "$17" },

  // ---- Scoma's Classics ----
  { id: "crab-cakes", name: "Dungeness Crab Cakes Appetizer", category: "Scoma's Classics", description: "Scoma's signature crab cakes, popular since 1965.", dietaryRestrictions: ["Shellfish", "Gluten"], price: "$26" },
  { id: "whole-dungeness", name: "Whole Dungeness Crab", category: "Scoma's Classics", description: "Your choice of chilled or whole roasted.", dietaryRestrictions: ["gf", "Shellfish"], price: "$75" },
  { id: "crab-louie", name: "Scoma's Dungeness Crab Louie Salad", category: "Scoma's Classics", description: "Half pound of crabmeat over greens with Louie dressing.", dietaryRestrictions: ["gf", "Shellfish", "Egg"], price: "$72" },
  { id: "shrimp-louie", name: "Wild Gulf Shrimp Louis Salad", category: "Scoma's Classics", description: "Half pound of shrimp over greens with Louie dressing.", dietaryRestrictions: ["gf", "Shellfish", "Egg"], price: "$43" },
  { id: "combo-louie", name: "Combo Louie Salad", category: "Scoma's Classics", description: "Half pound combination of Dungeness crab and Gulf shrimp.", dietaryRestrictions: ["gf", "Shellfish", "Egg"], price: "$59" },
  { id: "lazy-mans-cioppino", name: "Lazy Man's Cioppino", category: "Scoma's Classics", description: "A Fisherman's Wharf original: Dungeness crabmeat, scallops, shrimp, clams, mussels, calamari, market fish, served in Mama Scoma's tomato broth.", dietaryRestrictions: ["Shellfish", "Fish"], price: "$55" },
  { id: "shrimp-scallops-gannon", name: "Wild Gulf Shrimp & Scallops a la Gannon", category: "Scoma's Classics", description: "Pan seared, lemon butter.", dietaryRestrictions: ["gf", "Shellfish", "Dairy"], price: "$42" },
  { id: "pasta-diplomatica", name: "Pasta Diplomatica", category: "Scoma's Classics", description: "Scallops, shrimp, clams, mushrooms, onions, cream sauce over linguini.", dietaryRestrictions: ["Shellfish", "Dairy", "Gluten"], price: "$49" },
  { id: "shellfish-saute-sec", name: "Shellfish Sauté Sec", category: "Scoma's Classics", description: "Dungeness crab legs, scallops, shrimp, mushrooms, onions, garlic-white wine sauce served with seasonal vegetables and a warm grain salad.", dietaryRestrictions: ["Shellfish", "Gluten"], price: "$72" },

  // ---- Seafood & Meat ----
  { id: "alaskan-halibut", name: "Alaskan Halibut", category: "Seafood & Meat", description: "Sweet potato hash, smothered chard, onions.", dietaryRestrictions: ["Fish"], price: "$46" },
  { id: "pacific-snapper", name: "Pacific Snapper", category: "Seafood & Meat", description: "Wild mushroom spätzle, green garlic Meyer lemon butter.", dietaryRestrictions: ["Fish", "Dairy", "Gluten"], price: "$38" },
  { id: "king-salmon", name: "Pacific King Salmon", category: "Seafood & Meat", description: "Farro, truffle butter, wild chanterelles, onion rings.", dietaryRestrictions: ["Fish", "Dairy", "Gluten"], price: "$42" },
  { id: "black-cod-calabrese", name: "Wild Black Cod Calabrese", category: "Seafood & Meat", description: "Spicy tomato sauce, orecchiette pasta, vegetables, pangrattato.", dietaryRestrictions: ["Fish", "Gluten"], price: "$40" },
  { id: "petrale-dore", name: "Petrale Doré", category: "Seafood & Meat", description: "Egg-battered local sole, garlic lemon butter, Scoma's tartar sauce.", dietaryRestrictions: ["Fish", "Egg", "Dairy"], price: "$39" },
  { id: "mixed-seafood-grill", name: "Mixed Seafood Grill", category: "Seafood & Meat", description: "Three types of grilled seasonal fish and grilled wild gulf shrimp. Ask your server for today's selection.", dietaryRestrictions: ["Fish", "Shellfish"], price: "$52" },
  { id: "fried-combo", name: "Fried Combo", category: "Seafood & Meat", description: "Wild gulf shrimp, scallops, wild cod; with fries, pickles, mixed greens.", dietaryRestrictions: ["Fish", "Shellfish", "Gluten"], price: "$39" },
  { id: "fish-n-chips", name: "Beer Battered Fish 'N' Chips", category: "Seafood & Meat", description: "Crispy Firestone 805 beer-batter, fresh Pacific cod.", dietaryRestrictions: ["Fish", "Gluten"], price: "$29" },
  { id: "wagyu-bistro-filet", name: "Wagyu Bistro Filet", category: "Seafood & Meat", description: "American Wagyu center-cut sirloin, wild mushrooms, smoky roast potatoes, garlic-truffle butter, wild arugula.", dietaryRestrictions: ["gf", "Beef", "Dairy"], price: "$41" },

  // ---- Pastas ----
  { id: "shrimp-lumachini", name: "Gulf Shrimp Lumachini", category: "Pastas", description: "Sautéed gulf shrimp, fresh herbs, garlic and gremolata.", dietaryRestrictions: ["Shellfish", "Gluten"], price: "$36" },
  { id: "linguini-vongole", name: "Linguini con Vongole", category: "Pastas", description: "Pasta a la Scoma, Manila clams, garlic, onions, white wine, butter.", dietaryRestrictions: ["Shellfish", "Dairy", "Gluten"], price: "$36" },
  { id: "pasta-puttanesca", name: "Pasta Puttanesca", category: "Pastas", description: "Daily catch, shrimp, mussels, Manila clams, anchovies, Castelvetrano olives, capers, San Marzano tomato sauce over linguini.", dietaryRestrictions: ["Fish", "Shellfish", "Gluten", "Anchovy"], price: "$42" },
  { id: "pappardelle-bolognese", name: "Scoma's Pappardelle Bolognese", category: "Pastas", description: "Traditional Italian tomato meat sauce.", dietaryRestrictions: ["Beef", "Pork", "Gluten", "Dairy"], price: "$29" },
  { id: "winter-risotto", name: "Winter Vegetable Risotto", category: "Pastas", description: "Toasted pepitas, pomegranate seeds, Reggiano Parmigiano.", dietaryRestrictions: ["veg", "gf", "Dairy"], price: "$32" },

  // ---- Sandwiches (lunch crossover) ----
  { id: "flounder-sandwich", name: "Fresh Filet o' Flounder Sandwich", category: "Sandwiches", description: "Panko-breaded flounder, shaved fresh fennel slaw, tartar sauce, salad and fries.", dietaryRestrictions: ["Fish", "Gluten"], price: "$23" },
  { id: "spicy-chicken-sandwich", name: "Spicy Chicken Sandwich", category: "Sandwiches", description: "Pickled red onion rings, mixed greens salad, fries.", dietaryRestrictions: ["Gluten"], price: "$23" },
  { id: "double-cheeseburger", name: "Double Double Cheese Burger", category: "Sandwiches", description: "Double meat, double cheese, pickles, Thousand Island, and fries.", dietaryRestrictions: ["Beef", "Dairy", "Gluten"], price: "$19" },

  // ---- Sides ----
  { id: "farro", name: "Farro", category: "Sides", description: "Wild chanterelles, truffle butter.", dietaryRestrictions: ["veg", "Dairy", "Gluten"], price: "$12" },
  { id: "spatzle", name: "Spätzle", category: "Sides", description: "Wild mushroom, fennel, lemon, green garlic lemon butter.", dietaryRestrictions: ["veg", "Dairy", "Gluten"], price: "$12" },
  { id: "parmesan-polenta", name: "Parmesan Polenta", category: "Sides", description: "Creamy polenta finished with Parmigiano-Reggiano.", dietaryRestrictions: ["gf", "veg", "Dairy"], price: "$9" },

  // ---- Dessert ----
  { id: "cannoli", name: "Cannoli Alla Siciliana", category: "Dessert", description: "Hand-rolled pastry, ricotta, mascarpone, preserved orange, pistachio. Suggested pairing: Ben Ryé Passito di Pantelleria.", dietaryRestrictions: ["Dairy", "Gluten", "Nuts"], price: "$11" },
  { id: "torta-setteveli", name: "Torta Setteveli (Seven Layer Cake)", category: "Dessert", description: "Chocolate cake, hazelnut Bavarian cream, chocolate mousse, praline crunch. Suggested pairing: Dashe Late Harvest Zinfandel.", dietaryRestrictions: ["Dairy", "Gluten", "Nuts"], price: "$11" },
  { id: "tiramisu", name: "Classic Tiramisu", category: "Dessert", description: "Mascarpone, espresso, lady fingers, cocoa. Suggested pairing: Averna.", dietaryRestrictions: ["Dairy", "Gluten", "Egg", "Coffee"], price: "$11" },
  { id: "gelato", name: "'Latest Scoop' Gelato", category: "Dessert", description: "Ask your server about our seasonal flavors.", dietaryRestrictions: ["Dairy"], price: "$9" },
];
