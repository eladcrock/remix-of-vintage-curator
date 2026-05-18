/**
 * Scoma's San Francisco, Bar Program (from scomas.com/bar-menu and after-dinner).
 * Cocktails, mocktails (Free Spirited / N/A), and beer.
 */
import type { Cocktail } from "@/lib/cocktails";

export const COCKTAILS: Cocktail[] = [
  // ---- Seasonal house cocktails ----
  { id: "vintage-eggnog", name: "Scoma's Vintage Eggnog", kind: "cocktail", menuDescription: "Aged one year. Diplomatico Mantuano, Yuste Amontillado, Vecchia Romagna, house-made crème, anglaise, vanilla, cinnamon, clove, nutmeg.", character: "Decadent year-aged eggnog, silky, spiced, festive.", dietaryRestrictions: ["Dairy", "Egg"], price: 22, tags: ["Seasonal", "Aged"] },
  { id: "il-burro-caldo", name: "Il Burro Caldo", kind: "cocktail", menuDescription: "Pierre Ferrand Cognac, cultured butter, brown sugar, aromatic baking spices, whipped cream. Served hot.", character: "Warm, buttery cognac toddy with baking spice.", dietaryRestrictions: ["Dairy"], price: 17, tags: ["Seasonal", "Hot"] },
  { id: "blood-orange-margarita", name: "Blood Orange Margarita", kind: "cocktail", menuDescription: "Milagro Blanco, Cointreau, fresh lime, agave syrup, fresh blood orange juice.", character: "Bright citrus-forward margarita with blood orange depth.", dietaryRestrictions: ["Citrus"], price: 17, tags: ["Tequila", "Citrus"] },
  { id: "smoked-maple-old-fashioned", name: "Smoked Maple Old Fashioned", kind: "cocktail", menuDescription: "Old Forester 100pf Rye, Teeling Blackpitts Irish (Lapsang infused), Angostura bitters, maple syrup.", character: "Smoky, sweet, spirit-forward old fashioned.", dietaryRestrictions: [], price: 19, tags: ["Whiskey", "Smoky"] },
  { id: "nebbia-e-fuoco", name: "Nebbia e Fuoco", kind: "cocktail", menuDescription: "4Cathedral Mezcal Joven Espadín, Giffard Cassis Noir de Bourgogne, Ancho Reyes, lime, ginger beer.", character: "Smoky, spicy, fruity highball.", dietaryRestrictions: ["Citrus", "Ginger"], price: 17, tags: ["Mezcal", "Spicy"] },
  { id: "espresso-martini-bar", name: "Espresso Martini", kind: "cocktail", menuDescription: "Hangar One Vodka, Borghetti coffee liqueur, De Madagascar vanilla, fresh espresso, pinch of salt.", character: "Rich, smooth, awake.", dietaryRestrictions: ["Coffee"], price: 18, tags: ["Vodka", "Coffee"] },

  // ---- House favorites ----
  { id: "bloody-mary", name: "Scoma's Famous Bloody Mary", kind: "cocktail", menuDescription: "Ketel One vodka, house-made Bloody Mary mix, celery, lime.", character: "Classic Scoma's brunch staple.", dietaryRestrictions: ["Tomato", "Citrus"], price: 16, tags: ["Vodka", "Savory"] },
  { id: "bloody-mary-oyster-shooter", name: "Bloody Mary Oyster Shooter", kind: "cocktail", menuDescription: "Fresh oyster, Ketel One vodka, Bloody Mary mix, shallot mignonette, cilantro, lime, poblano oil.", character: "Briny one-bite shooter.", dietaryRestrictions: ["Shellfish", "Tomato"], price: 9, tags: ["Shooter"] },
  { id: "mai-tardi", name: "Mai Tardi", kind: "cocktail", menuDescription: "Real McCoy rum 3yr, Frangelico, house-made pistachio orgeat, pineapple, lime, Myer's dark rum.", character: "Tropical, nutty riff on the Mai Tai.", dietaryRestrictions: ["Nuts", "Citrus"], price: 18, tags: ["Rum", "Tropical"] },
  { id: "lychee-martini", name: "Scoma's Lychee Martini", kind: "cocktail", menuDescription: "Barr Hill Honey Vodka, Giffard Lichi-Li, sake, Giffard Elderflower, citrus, salt.", character: "Floral, delicate, gently sweet.", dietaryRestrictions: ["Honey", "Citrus"], price: 20, tags: ["Vodka", "Floral"] },
  { id: "pepe-tonica", name: "Pepe e Tonica", kind: "cocktail", menuDescription: "St George Terroir gin, black pepper, green Chartreuse, lime, tonic, cucumber bitters.", character: "Botanical, peppery, refreshing.", dietaryRestrictions: ["Citrus"], price: 16, tags: ["Gin", "Refreshing"] },

  // ---- Craft on Draft ----
  { id: "manhattan-1965", name: "1965 Manhattan", kind: "cocktail", menuDescription: "Redemption rye, Punt e Mes, Angostura bitters. Aged 1,965 hours in charred oak barrels.", character: "Barrel-aged signature Manhattan honoring Scoma's founding year.", story: "Launched as part of Scoma's 50th-anniversary bar program. Aged 1,965 hours in oak, one hour for every year since 1965.", dietaryRestrictions: [], price: 18, tags: ["Whiskey", "Barrel-aged", "Signature"] },
  { id: "house-mule", name: "House Mule", kind: "cocktail", menuDescription: "Tito's vodka, Fever Tree ginger beer, citrus peel, mint, lime.", character: "Crisp, bright, easy.", dietaryRestrictions: ["Citrus", "Ginger"], price: 16, tags: ["Vodka", "Highball"] },
  { id: "limoncello-spritz", name: "Limoncello Spritz", kind: "cocktail", menuDescription: "House-made Limoncello, sparkling water, prosecco. Decanter (serves 3) $42.", character: "Bright lemon spritz, made for the patio.", dietaryRestrictions: ["Citrus"], price: 16, tags: ["Spritz", "Citrus"] },

  // ---- After Dinner Cocktails ----
  { id: "sgroppino", name: "Sgroppino", kind: "cocktail", menuDescription: "Sicilian bergamot liqueur, Carpano Bianco, strawberry sorbetto, prosecco.", character: "Frothy dessert sipper.", dietaryRestrictions: ["Dairy"], price: 14, tags: ["After-dinner"] },
  { id: "drunken-affogato", name: "Drunken Affogato", kind: "cocktail", menuDescription: "Diplomatico rum, Montenegro, fresh espresso, caramel & sea salt gelato.", character: "Dessert-cocktail hybrid.", dietaryRestrictions: ["Dairy", "Coffee"], price: 14, tags: ["After-dinner"] },
  { id: "espresso-martini-after", name: "Espresso Martini (After Dinner)", kind: "cocktail", menuDescription: "Grey Goose vodka, Mr. Black coffee liqueur, vanilla, fresh espresso.", character: "Classic espresso martini.", dietaryRestrictions: ["Coffee"], price: 15, tags: ["After-dinner", "Coffee"] },

  // ---- Mocktails (Free Spirited N/A) ----
  { id: "maria-innocente", name: "Maria Innocente", kind: "mocktail", menuDescription: "Seedlip Garden, fresh lime, house-made Bloody Mary mix.", character: "Savory, herbaceous N/A bloody mary.", dietaryRestrictions: ["Tomato", "Citrus"], price: 14, tags: ["N/A"] },
  { id: "spritz-agrumato", name: "Spritz Agrumato", kind: "mocktail", menuDescription: "Wilderton citrus, fresh lemon, simple syrup, orange twist.", character: "Bright N/A spritz.", dietaryRestrictions: ["Citrus"], price: 15, tags: ["N/A", "Spritz"] },
  { id: "pica-no-pica", name: "Pica, No Pica", kind: "mocktail", menuDescription: "Seedlip Notas de Agave, fresh lime, roasted poblano, cucumber, agave syrup.", character: "Smoky, spicy, refreshing, agave alternative.", dietaryRestrictions: ["Citrus"], price: 14, tags: ["N/A", "Spicy"] },
  { id: "nojito-bene", name: "Nojito Bene", kind: "mocktail", menuDescription: "Lyre's N/A rum, orange mint shrub, lime, simple syrup, pinch of salt, mint.", character: "Herbal N/A take on a mojito.", dietaryRestrictions: ["Citrus"], price: 13, tags: ["N/A"] },
  { id: "negroni-allegro", name: "Negroni Allegro", kind: "mocktail", menuDescription: "Lyre's N/A gin, Wilderton Aperitivo, orange shrub, orange twist.", character: "Bitter, citrus-forward N/A negroni.", dietaryRestrictions: ["Citrus"], price: 13, tags: ["N/A", "Bitter"] },
  { id: "virgin-mary", name: "Virgin Mary", kind: "mocktail", menuDescription: "Seedlip Garden, house-made Bloody Mary mix, celery, lime.", dietaryRestrictions: ["Tomato", "Citrus"], price: 13, tags: ["N/A"] },
  { id: "mule-no-kick", name: "Mule Without the Kick", kind: "mocktail", menuDescription: "Seedlip Spice, Fever Tree ginger beer, lime.", dietaryRestrictions: ["Citrus", "Ginger"], price: 13, tags: ["N/A"] },

  // ---- Beer (Draft) ----
  { id: "fort-point-sfizio", name: "Fort Point, Sfizio Pilsner", kind: "beer", menuDescription: "Pilsner, San Francisco. 4.9% ABV.", dietaryRestrictions: ["Gluten"], price: 11, tags: ["Draft", "Pilsner", "Local"] },
  { id: "farmers-valle", name: "Farmers Brewing, Valle", kind: "beer", menuDescription: "Mexican Style Lager, Princeton. 5.5% ABV.", dietaryRestrictions: ["Gluten"], price: 10, tags: ["Draft", "Lager"] },
  { id: "firestone-805", name: "Firestone Walker, 805", kind: "beer", menuDescription: "Blonde Ale. 4.7% ABV.", dietaryRestrictions: ["Gluten"], price: 10, tags: ["Draft", "Blonde Ale"] },
  { id: "sierra-hazy", name: "Sierra Nevada, Hazy Little Thing", kind: "beer", menuDescription: "Hazy IPA, Chico. 6.7% ABV.", dietaryRestrictions: ["Gluten"], price: 11, tags: ["Draft", "IPA"] },
  { id: "fieldwork-wcipa", name: "Fieldwork Brewing, West Coast IPA", kind: "beer", menuDescription: "West Coast IPA, Berkeley. 6.8% ABV.", dietaryRestrictions: ["Gluten"], price: 14, tags: ["Draft", "IPA"] },
  { id: "standard-deviant-hef", name: "Standard Deviant, Hefeweizen", kind: "beer", menuDescription: "Hefeweizen, San Francisco. 4.4% ABV.", dietaryRestrictions: ["Gluten"], price: 11, tags: ["Draft", "Wheat", "Local"] },
  { id: "east-brother-red", name: "East Brother Beer Co., Red Lager", kind: "beer", menuDescription: "Red Lager, Richmond. 4.6% ABV.", dietaryRestrictions: ["Gluten"], price: 10, tags: ["Draft", "Lager"] },
  { id: "mare-island-coal-shed", name: "Mare Island Brewing, Coal Shed Stout", kind: "beer", menuDescription: "Stout, Vallejo. 6.7% ABV.", dietaryRestrictions: ["Gluten"], price: 11, tags: ["Draft", "Stout"] },

  // ---- Beer (Bottles & Cans) ----
  { id: "budweiser", name: "Budweiser", kind: "beer", menuDescription: "Lager. 5% ABV.", dietaryRestrictions: ["Gluten"], price: 7, tags: ["Bottle", "Lager"] },
  { id: "bud-light", name: "Bud Light", kind: "beer", menuDescription: "Light Lager. 4.2% ABV.", dietaryRestrictions: ["Gluten"], price: 7, tags: ["Bottle", "Light Lager"] },
  { id: "tag-and-jug-cider", name: "Tag and Jug, Cold Coldie", kind: "beer", menuDescription: "Brut Cider, 7.1% ABV (12oz). Gluten-free.", dietaryRestrictions: ["gf"], price: 13, tags: ["Cider", "Gluten-free"] },
  { id: "athletic-na", name: "Athletic Brewing, N/A", kind: "beer", menuDescription: "Non-alcoholic IPA or Lager. 0.5% ABV.", dietaryRestrictions: ["Gluten"], price: 8, tags: ["N/A", "Non-Alcoholic"] },
  { id: "sierra-hop-splash", name: "Sierra Nevada, Hop Splash", kind: "beer", menuDescription: "Sparkling water, 0.0% ABV.", dietaryRestrictions: [], price: 8, tags: ["N/A", "Sparkling Water"] },

  // ---- Other Beverages ----
  { id: "alameda-cola", name: "Alameda Point Craft Cola", kind: "other", menuDescription: "Cola, diet cola, lemon & lime, root beer, ginger ale, cranberry, lemonade.", dietaryRestrictions: [], price: 4.25, tags: ["Soda"] },
  { id: "fresh-juice", name: "Fresh Squeezed Juice", kind: "other", menuDescription: "Orange or grapefruit.", dietaryRestrictions: ["Citrus"], price: 7, tags: ["Juice"] },
  { id: "peerless-coffee", name: "Peerless Organic Italian Roast Coffee", kind: "other", menuDescription: "Regular or decaf.", dietaryRestrictions: ["Coffee"], price: 4.5, tags: ["Coffee"] },
  { id: "tazo-tea", name: "Tazo Tea", kind: "other", menuDescription: "Green, black, earl grey, chamomile.", dietaryRestrictions: [], price: 4.5, tags: ["Tea"] },
  { id: "fever-tree", name: "Fever Tree", kind: "other", menuDescription: "Ginger beer, sparkling lemon soda, sparkling grapefruit soda.", dietaryRestrictions: ["Ginger"], price: 7, tags: ["Soda"] },
  { id: "latte", name: "Latte", kind: "other", menuDescription: "Espresso with steamed milk.", dietaryRestrictions: ["Dairy", "Coffee"], price: 6, tags: ["Coffee"] },
  { id: "cappuccino", name: "Cappuccino", kind: "other", menuDescription: "Espresso with foamed milk.", dietaryRestrictions: ["Dairy", "Coffee"], price: 5.5, tags: ["Coffee"] },
  { id: "lavazza-espresso", name: "Lavazza Espresso", kind: "other", menuDescription: "Italian-roast espresso.", dietaryRestrictions: ["Coffee"], price: 4, tags: ["Coffee"] },
];
