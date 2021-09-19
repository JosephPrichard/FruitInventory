import { Request, Response } from "express";
import { Fruit, FruitModel } from "../models/fruits";

const createFruit = async (req: Request, res: Response) => {
    const { _id: id } = await FruitModel.create(req.body as Fruit);
    res.json({ id: id });
}

const getAllFruits = async (req: Request, res: Response) => {
    const fruits = await FruitModel.find().exec();
    res.json(fruits);
}

const getFruitById = async (req: Request, res: Response) => {
    const fruit = await FruitModel.findById(req.body.id).exec();
    res.json(fruit);
}

const updateFruit = async (req: Request, res: Response) => {
    const query = {
        _id: req.body.id
    }
    const body = req.body as Fruit;
    const update = {
        name: body.name,
        weight: body.weight,
        price: body.price,
        quantityInStock: body.quantityInStock
    }
    const fruit = await FruitModel.findByIdAndUpdate(query, update).exec();
    res.json(fruit);
}

const deleteFruitById = async (req: Request, res: Response) => {
    const query = {
        _id: req.body.id
    }
    const fruit = await FruitModel.deleteOne(query).exec();
    res.json(fruit);
}

const controller = {
    createFruit,
    getAllFruits,
    getFruitById,
    updateFruit,
    deleteFruitById
};

export { controller }