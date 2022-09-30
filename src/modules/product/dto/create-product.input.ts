import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Product name' })
  name: string;

  @Field(() => Number, { description: 'Product price' })
  price: number;

  @Field(() => String, { description: 'Produce description' })
  description: string;

  @Field(() => String, { description: 'Product category' })
  category: string;

  @Field(() => String, { description: 'Product image' })
  image: string;

  @Field(() => Number, { description: 'Product available quantity' })
  quantityAvailable: number;
}
