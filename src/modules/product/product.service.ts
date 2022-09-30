import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  create(createProductInput: CreateProductInput) {
    try {
      const product = new this.productModel(createProductInput);
      return product.save();
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findAll() {
    try {
      const product = await this.productModel.find();

      if (!product) {
        return 'Product not found';
      }
      return product;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.productModel.findOne({ _id: id }).exec();
      if (!product) {
        return 'Product not found';
      }
      return product;
    } catch (error) {
      return new Error(error.message);
    }
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product with ${updateProductInput}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
