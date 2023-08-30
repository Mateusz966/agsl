export enum Unit {
    g = 'g',
    ml = 'ml',
    portion = 'portion',
}

export interface Ingredient {
    name: string;
    quantity: number;
    unit: Unit;
}
export interface DishRequest {
    title: string;
    ingredients: Ingredient[];
    photo?: Blob;
}
