import { ValueObject } from '@libs/ddd';
import { Guard } from '@libs/guard';
import {
  ArgumentNotProvidedException,
  ArgumentOutOfRangeException,
} from '@libs/exceptions/exception.codes';

export type IngredientMeasurementUnit = 'g' | 'ml' | 'kg' | 'l';
export class IngredientsProps {
  id: string | undefined;
  name: string;
  amount: number;
  unit: IngredientMeasurementUnit;
}

export class Ingredients extends ValueObject<IngredientsProps[]> {
  get ingredients() {
    return this.ingredients;
  }
  protected validate(props: IngredientsProps[]): void {
    props.forEach((prop) => {
      if (!(prop.name && prop.amount && prop.unit)) {
        throw new ArgumentNotProvidedException(`Missing field in prop`);
      }
    });

    if (!Guard.lengthIsBetween(props.length, 1, 99)) {
      throw new ArgumentOutOfRangeException(' ingredients is ot of range');
    }
  }

  public unpack(): IngredientsProps[] {
    return [...this.props];
  }
}
