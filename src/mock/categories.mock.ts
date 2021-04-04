interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 0, name: "Beverage" },
  { id: 1, name: "Starters" },
  { id: 2, name: "Main Course" },
  { id: 3, name: "Side dishes" },
  { id: 4, name: "Italian" },
  { id: 5, name: "Indian" },
  { id: 6, name: "Chinese" }
];

export function getAllCategories() {
  return categories;
}

export function getCategory(id: number): Category {
  return categories[id];
}
