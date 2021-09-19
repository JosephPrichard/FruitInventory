import { body, ValidationChain, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

const create: ValidationChain[] = [
    body("name").isString().isLength({ min: 5, max: 50}),
    body("price").isFloat(), //in USD
    body("weight").isFloat(), //in grams
    body("quantityInStock").isInt()
];

const id: ValidationChain[] = [
    body("id").isString()
];

const update: ValidationChain[] = create.concat(id);

const validateThenCall = (call: (req: Request, res: Response) => Promise<void>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            next(err.mapped());
        } else {
            await call(req, res);
        }
    };
}

const fruitValidator = {
    create,
    id,
    update,
    validateThenCall
}

export { fruitValidator }