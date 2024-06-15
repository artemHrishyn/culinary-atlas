export interface Ingredient {
    name: string;
    value: string;
  }

export interface Recept{
    name: string;
    image: string;
    category: string;
    country: string;
    time: number;
    Ingredients: Ingredient[];
    description: string;
}
