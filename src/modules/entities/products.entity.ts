import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Product {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Product name' })
  name: string;

  @Prop()
  @Field(() => Number, { description: 'Product price' })
  price: number;

  @Prop()
  @Field(() => String, { description: 'Produce description' })
  description: string;

  @Prop()
  @Field(() => String, { description: 'Product category' })
  category: string;

  @Prop()
  @Field(() => String, { description: 'Product image' })
  image: string;

  @Prop()
  @Field(() => Number, { description: 'Product available quantity' })
  quantityAvailable: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
