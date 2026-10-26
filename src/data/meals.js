// Your food, as plain data. Edit freely: the app reads everything from here.
// `[...]` is an array (like a List) and `{...}` an object (like a Map / struct
// literal). No classes or types needed: JS is happy with any shape.
//
// leftovers: true  -> it becomes tomorrow's lunch
// leftovers: false -> doesn't keep well, so the next day gets a lunch to pick
//
// ingredients: quantities are for SERVINGS portions (below). Kept simple:
// cupboard basics like oil, salt, pepper and stock aren't listed.
//   { item: 'Spaghetti', qty: 500, unit: 'g' }
//   { item: 'Chopped tomatoes', qty: 2, unit: 'tin' }   -> "2 tins"
//   { item: 'Eggs', qty: 4 }                             -> no unit, just a count

export const SERVINGS = 4

export const themes = [
  {
    day: 'Mon',
    name: 'Pasta Monday',
    meals: [
      {
        name: 'Catia’s tomato & mushroom mozzarella spaghetti',
        leftovers: true,
        ingredients: [
          { item: 'Spaghetti', qty: 500, unit: 'g' },
          { item: 'Mushrooms', qty: 250, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Mozzarella', qty: 1, unit: 'ball' },
          { item: 'Onion', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
        ],
      },
      {
        name: 'Hayden’s fine green bean linguine',
        leftovers: true,
        ingredients: [
          { item: 'Linguine', qty: 500, unit: 'g' },
          { item: 'Fine green beans', qty: 300, unit: 'g' },
          { item: 'Garlic', qty: 3, unit: 'clove' },
          { item: 'Parmesan', qty: 60, unit: 'g' },
          { item: 'Lemon', qty: 1 },
        ],
      },
      {
        name: 'Lasagna & garlic bread',
        leftovers: true,
        ingredients: [
          { item: 'Beef mince', qty: 500, unit: 'g' },
          { item: 'Lasagne sheets', qty: 250, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'White sauce', qty: 1, unit: 'jar' },
          { item: 'Cheddar', qty: 100, unit: 'g' },
          { item: 'Garlic bread', qty: 1 },
        ],
      },
      {
        name: 'Lasagna & salad',
        leftovers: true,
        ingredients: [
          { item: 'Beef mince', qty: 500, unit: 'g' },
          { item: 'Lasagne sheets', qty: 250, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'White sauce', qty: 1, unit: 'jar' },
          { item: 'Cheddar', qty: 100, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
          { item: 'Tomatoes', qty: 4 },
        ],
      },
      {
        name: 'Beef bolognese',
        leftovers: true,
        ingredients: [
          { item: 'Spaghetti', qty: 500, unit: 'g' },
          { item: 'Beef mince', qty: 500, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Carrot', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
        ],
      },
      {
        name: 'Veggie bolognese',
        leftovers: true,
        ingredients: [
          { item: 'Spaghetti', qty: 500, unit: 'g' },
          { item: 'Veggie mince', qty: 500, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Carrot', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
        ],
      },
      {
        name: 'Meatball spaghetti',
        leftovers: true,
        ingredients: [
          { item: 'Spaghetti', qty: 500, unit: 'g' },
          { item: 'Beef meatballs', qty: 24 },
          { item: 'Passata', qty: 500, unit: 'g' },
          { item: 'Onion', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Parmesan', qty: 40, unit: 'g' },
        ],
      },
      {
        name: 'Veggie meatball spaghetti',
        leftovers: true,
        ingredients: [
          { item: 'Spaghetti', qty: 500, unit: 'g' },
          { item: 'Veggie meatballs', qty: 24 },
          { item: 'Passata', qty: 500, unit: 'g' },
          { item: 'Onion', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Parmesan', qty: 40, unit: 'g' },
        ],
      },
      {
        name: 'Creamy salmon linguine & cherry tomatoes',
        leftovers: true,
        ingredients: [
          { item: 'Linguine', qty: 500, unit: 'g' },
          { item: 'Salmon fillets', qty: 4 },
          { item: 'Double cream', qty: 300, unit: 'ml' },
          { item: 'Cherry tomatoes', qty: 250, unit: 'g' },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Lemon', qty: 1 },
        ],
      },
      {
        name: 'Macaroni cheese with leeks & mushrooms',
        leftovers: true,
        ingredients: [
          { item: 'Macaroni', qty: 500, unit: 'g' },
          { item: 'Cheddar', qty: 250, unit: 'g' },
          { item: 'Milk', qty: 600, unit: 'ml' },
          { item: 'Butter', qty: 50, unit: 'g' },
          { item: 'Plain flour', qty: 50, unit: 'g' },
          { item: 'Leeks', qty: 2 },
          { item: 'Mushrooms', qty: 250, unit: 'g' },
        ],
      },
      {
        name: 'Tuna pasta salad',
        leftovers: true,
        ingredients: [
          { item: 'Pasta', qty: 500, unit: 'g' },
          { item: 'Tuna', qty: 3, unit: 'tin' },
          { item: 'Sweetcorn', qty: 1, unit: 'tin' },
          { item: 'Mayonnaise', qty: 4, unit: 'tbsp' },
          { item: 'Cucumber', qty: 1 },
          { item: 'Cherry tomatoes', qty: 250, unit: 'g' },
        ],
      },
      {
        name: 'Carbonara',
        leftovers: false,
        ingredients: [
          { item: 'Spaghetti', qty: 500, unit: 'g' },
          { item: 'Pancetta or bacon', qty: 200, unit: 'g' },
          { item: 'Eggs', qty: 4 },
          { item: 'Parmesan', qty: 80, unit: 'g' },
        ],
      },
    ],
  },
  {
    day: 'Tue',
    name: 'Portuguese Tuesday',
    note: 'With salad: mixed, tomato, cucumber…',
    meals: [
      {
        name: 'Mum’s chicken spaghetti',
        leftovers: true,
        ingredients: [
          { item: 'Chicken thighs', qty: 600, unit: 'g' },
          { item: 'Spaghetti', qty: 500, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
          { item: 'Tomatoes', qty: 4 },
        ],
      },
      {
        name: 'Pataniscas & loose rice',
        leftovers: true,
        ingredients: [
          { item: 'Salt cod (bacalhau)', qty: 400, unit: 'g' },
          { item: 'Plain flour', qty: 200, unit: 'g' },
          { item: 'Eggs', qty: 2 },
          { item: 'Milk', qty: 200, unit: 'ml' },
          { item: 'Onion', qty: 1 },
          { item: 'Parsley', qty: 1, unit: 'bunch' },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
          { item: 'Tomatoes', qty: 4 },
        ],
      },
      {
        name: 'Breaded chicken & loose rice',
        leftovers: true,
        ingredients: [
          { item: 'Chicken breasts', qty: 4 },
          { item: 'Breadcrumbs', qty: 100, unit: 'g' },
          { item: 'Eggs', qty: 2 },
          { item: 'Plain flour', qty: 50, unit: 'g' },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
          { item: 'Tomatoes', qty: 4 },
        ],
      },
      {
        name: 'Turkey steaks, tomato mushroom sauce & rice',
        leftovers: true,
        ingredients: [
          { item: 'Turkey steaks', qty: 4 },
          { item: 'Mushrooms', qty: 250, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 1, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
          { item: 'Cucumber', qty: 1 },
        ],
      },
      {
        name: 'Beef steaks, tomato mushroom sauce & rice',
        leftovers: true,
        ingredients: [
          { item: 'Beef steaks', qty: 4 },
          { item: 'Mushrooms', qty: 250, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 1, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
          { item: 'Cucumber', qty: 1 },
        ],
      },
      {
        name: 'Chicken steaks, tomato mushroom sauce & rice',
        leftovers: true,
        ingredients: [
          { item: 'Chicken steaks', qty: 4 },
          { item: 'Mushrooms', qty: 250, unit: 'g' },
          { item: 'Chopped tomatoes', qty: 1, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
          { item: 'Cucumber', qty: 1 },
        ],
      },
    ],
  },
  {
    day: 'Wed',
    name: 'Potato & Rice Wednesday',
    meals: [
      {
        name: 'Butternut squash risotto & salad',
        leftovers: true,
        ingredients: [
          { item: 'Risotto rice', qty: 300, unit: 'g' },
          { item: 'Butternut squash', qty: 1 },
          { item: 'Onion', qty: 1 },
          { item: 'Parmesan', qty: 60, unit: 'g' },
          { item: 'Butter', qty: 30, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Tuna & courgette risotto bake & salad',
        leftovers: true,
        ingredients: [
          { item: 'Risotto rice', qty: 300, unit: 'g' },
          { item: 'Tuna', qty: 2, unit: 'tin' },
          { item: 'Courgettes', qty: 2 },
          { item: 'Onion', qty: 1 },
          { item: 'Parmesan', qty: 60, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Fennel risotto & salad',
        leftovers: true,
        ingredients: [
          { item: 'Risotto rice', qty: 300, unit: 'g' },
          { item: 'Fennel bulbs', qty: 2 },
          { item: 'Onion', qty: 1 },
          { item: 'Parmesan', qty: 60, unit: 'g' },
          { item: 'Butter', qty: 30, unit: 'g' },
          { item: 'Lemon', qty: 1 },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Sausage & mash & peas',
        leftovers: true,
        ingredients: [
          { item: 'Sausages', qty: 8 },
          { item: 'Potatoes', qty: 1, unit: 'kg' },
          { item: 'Butter', qty: 30, unit: 'g' },
          { item: 'Milk', qty: 100, unit: 'ml' },
          { item: 'Frozen peas', qty: 300, unit: 'g' },
          { item: 'Gravy granules', qty: 1, unit: 'tub' },
        ],
      },
      {
        name: 'Fish pie & salad',
        leftovers: true,
        ingredients: [
          { item: 'Fish pie mix', qty: 400, unit: 'g' },
          { item: 'Potatoes', qty: 1, unit: 'kg' },
          { item: 'Milk', qty: 500, unit: 'ml' },
          { item: 'Butter', qty: 50, unit: 'g' },
          { item: 'Plain flour', qty: 40, unit: 'g' },
          { item: 'Cheddar', qty: 50, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Chicken fajitas, sour cream, salsa & guac',
        leftovers: true,
        ingredients: [
          { item: 'Chicken breasts', qty: 3 },
          { item: 'Peppers', qty: 3 },
          { item: 'Onion', qty: 1 },
          { item: 'Tortilla wraps', qty: 8 },
          { item: 'Fajita seasoning', qty: 1, unit: 'sachet' },
          { item: 'Sour cream', qty: 1, unit: 'pot' },
          { item: 'Salsa', qty: 1, unit: 'jar' },
          { item: 'Guacamole', qty: 1, unit: 'pot' },
          { item: 'Cheddar', qty: 100, unit: 'g' },
        ],
      },
      {
        name: 'Veggie fajitas, sour cream, salsa & guac',
        leftovers: true,
        ingredients: [
          { item: 'Peppers', qty: 4 },
          { item: 'Black beans', qty: 1, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Tortilla wraps', qty: 8 },
          { item: 'Fajita seasoning', qty: 1, unit: 'sachet' },
          { item: 'Sour cream', qty: 1, unit: 'pot' },
          { item: 'Salsa', qty: 1, unit: 'jar' },
          { item: 'Guacamole', qty: 1, unit: 'pot' },
          { item: 'Cheddar', qty: 100, unit: 'g' },
        ],
      },
      {
        name: 'Jacket potato & beans',
        leftovers: false,
        ingredients: [
          { item: 'Baking potatoes', qty: 4 },
          { item: 'Baked beans', qty: 2, unit: 'tin' },
          { item: 'Cheddar', qty: 100, unit: 'g' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Jacket potato & tuna mayo',
        leftovers: false,
        ingredients: [
          { item: 'Baking potatoes', qty: 4 },
          { item: 'Tuna', qty: 2, unit: 'tin' },
          { item: 'Mayonnaise', qty: 3, unit: 'tbsp' },
          { item: 'Sweetcorn', qty: 1, unit: 'tin' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Jacket potato & chilli',
        leftovers: false,
        ingredients: [
          { item: 'Baking potatoes', qty: 4 },
          { item: 'Beef mince', qty: 400, unit: 'g' },
          { item: 'Kidney beans', qty: 1, unit: 'tin' },
          { item: 'Chopped tomatoes', qty: 1, unit: 'tin' },
          { item: 'Chilli powder', qty: 2, unit: 'tsp' },
          { item: 'Cheddar', qty: 100, unit: 'g' },
        ],
      },
      {
        name: 'Jacket potato, thyme mushrooms & feta',
        leftovers: false,
        ingredients: [
          { item: 'Baking potatoes', qty: 4 },
          { item: 'Mushrooms', qty: 300, unit: 'g' },
          { item: 'Feta', qty: 200, unit: 'g' },
          { item: 'Fresh thyme', qty: 1, unit: 'pack' },
          { item: 'Garlic', qty: 2, unit: 'clove' },
          { item: 'Salad leaves', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Fish & new potatoes',
        leftovers: false,
        ingredients: [
          { item: 'White fish fillets', qty: 4 },
          { item: 'New potatoes', qty: 750, unit: 'g' },
          { item: 'Broccoli', qty: 1, unit: 'head' },
          { item: 'Lemon', qty: 1 },
          { item: 'Butter', qty: 30, unit: 'g' },
        ],
      },
    ],
  },
  {
    day: 'Thu',
    name: 'Adventure Thursday',
    meals: [
      {
        name: 'Ramen',
        leftovers: false,
        ingredients: [
          { item: 'Ramen noodles', qty: 4, unit: 'nest' },
          { item: 'Chicken breasts', qty: 2 },
          { item: 'Eggs', qty: 4 },
          { item: 'Pak choi', qty: 2 },
          { item: 'Mushrooms', qty: 150, unit: 'g' },
          { item: 'Spring onions', qty: 1, unit: 'bunch' },
          { item: 'Soy sauce', qty: 3, unit: 'tbsp' },
        ],
      },
      {
        name: 'Chilli con carne',
        leftovers: true,
        ingredients: [
          { item: 'Beef mince', qty: 500, unit: 'g' },
          { item: 'Kidney beans', qty: 1, unit: 'tin' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Peppers', qty: 1 },
          { item: 'Chilli powder', qty: 2, unit: 'tsp' },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Sour cream', qty: 1, unit: 'pot' },
        ],
      },
      {
        name: 'Veggie chilli',
        leftovers: true,
        ingredients: [
          { item: 'Veggie mince', qty: 500, unit: 'g' },
          { item: 'Kidney beans', qty: 1, unit: 'tin' },
          { item: 'Chopped tomatoes', qty: 2, unit: 'tin' },
          { item: 'Onion', qty: 1 },
          { item: 'Peppers', qty: 1 },
          { item: 'Chilli powder', qty: 2, unit: 'tsp' },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Sour cream', qty: 1, unit: 'pot' },
        ],
      },
    ],
  },
  {
    day: 'Fri',
    name: 'Fakeaway Friday',
    meals: [
      {
        name: 'Pizza',
        leftovers: true,
        ingredients: [
          { item: 'Pizza bases', qty: 2 },
          { item: 'Passata', qty: 250, unit: 'g' },
          { item: 'Mozzarella', qty: 2, unit: 'ball' },
          { item: 'Ham', qty: 100, unit: 'g' },
          { item: 'Mushrooms', qty: 150, unit: 'g' },
          { item: 'Peppers', qty: 1 },
        ],
      },
      {
        name: 'Fish & chips',
        leftovers: false,
        ingredients: [
          { item: 'Breaded fish fillets', qty: 4 },
          { item: 'Oven chips', qty: 1, unit: 'kg' },
          { item: 'Frozen peas', qty: 300, unit: 'g' },
          { item: 'Lemon', qty: 1 },
        ],
      },
      {
        name: 'Indian',
        leftovers: true,
        ingredients: [
          { item: 'Chicken thighs', qty: 600, unit: 'g' },
          { item: 'Curry sauce', qty: 1, unit: 'jar' },
          { item: 'Onion', qty: 1 },
          { item: 'Rice', qty: 300, unit: 'g' },
          { item: 'Naan breads', qty: 4 },
        ],
      },
      {
        name: 'Chinese',
        leftovers: true,
        ingredients: [
          { item: 'Chicken breasts', qty: 3 },
          { item: 'Egg noodles', qty: 4, unit: 'nest' },
          { item: 'Stir-fry vegetables', qty: 1, unit: 'bag' },
          { item: 'Stir-fry sauce', qty: 1, unit: 'jar' },
          { item: 'Spring onions', qty: 1, unit: 'bunch' },
        ],
      },
      {
        name: 'Picky tea',
        leftovers: false,
        ingredients: [
          { item: 'Cheese', qty: 200, unit: 'g' },
          { item: 'Crackers', qty: 1, unit: 'pack' },
          { item: 'Ham', qty: 150, unit: 'g' },
          { item: 'Baguette', qty: 1 },
          { item: 'Hummus', qty: 1, unit: 'pot' },
          { item: 'Cherry tomatoes', qty: 250, unit: 'g' },
          { item: 'Grapes', qty: 300, unit: 'g' },
          { item: 'Crisps', qty: 1, unit: 'bag' },
        ],
      },
      {
        name: 'Nuggets & chips',
        leftovers: false,
        ingredients: [
          { item: 'Chicken nuggets', qty: 24 },
          { item: 'Oven chips', qty: 1, unit: 'kg' },
          { item: 'Baked beans', qty: 1, unit: 'tin' },
        ],
      },
    ],
  },
  // No Saturday / Sunday entries = freestyle weekends.
]

export const breakfasts = [
  'Cereal',
  'Toast',
  'Pastries',
  'Avocado toast',
  'Porridge & fruit',
  'Granola, fruit & yoghurt',
  'Scrambled egg on toast',
  'Scrambled egg & salmon on toast',
  'Pancakes & fruit',
]

// Starter ideas, fruit first. Swap in your own.
export const snacks = [
  'Apple & peanut butter',
  'Banana',
  'Grapes & a few nuts',
  'Satsumas',
  'Berries & yoghurt',
  'Pear & cheese',
  'Carrot & cucumber sticks with hummus',
]

// To choose from when there are no leftovers from the night before.
export const quickLunches = [
  'Sandwich Land',
  'Home sandwich',
  'Pasta & cheese',
  'Fish finger sandwich',
  'Cheese sandwich',
]

// Saturday & Sunday lunches: there's time to cook. Shown above the quick lunches.
export const weekendLunches = [
  'Roast',
  'Stew',
  'Soup',
]

export const FRUIT_GOAL = 5
