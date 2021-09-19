import { getModelForClass, prop } from "@typegoose/typegoose";

class Fruit
{
    @prop()
    name?: string;

    @prop()
    price?: number;

    @prop()
    weight?: number;

    @prop()
    quantityInStock?: number;
}

const FruitModel = getModelForClass(Fruit);

export { Fruit, FruitModel }