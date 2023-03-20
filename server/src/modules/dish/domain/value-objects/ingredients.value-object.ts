import { ValueObject } from '@libs/ddd';
import { Guard } from '@libs/guard';
import { ArgumentOutOfRangeException } from '@libs/exceptions/exception.codes';

export type IngredientMeasurementUnit = 'g' | 'ml' | 'kg' | 'l';
export interface IngredientsProps {
  name: string;
  amount: string;
  unit: IngredientMeasurementUnit;
}

export class Ingredients extends ValueObject<IngredientsProps[]> {
  get ingredients() {
    return this.ingredients;
  }
  protected validate(props: IngredientsProps[]): void {
    if (!Guard.lengthIsBetween(props.length, 1, 99)) {
      throw new ArgumentOutOfRangeException(' ingredients is ot of range');
    }
  }
}
