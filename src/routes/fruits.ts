import * as express from "express";
import { controller } from "../controllers/fruit";
import { fruitValidator } from "../validator/fruit";

const fruitRouter = express.Router();

fruitRouter.get("/", fruitValidator.validateThenCall(controller.getAllFruits));

fruitRouter.get("/byId", fruitValidator.id, fruitValidator.validateThenCall(controller.getFruitById));

fruitRouter.post("/", fruitValidator.create, fruitValidator.validateThenCall(controller.createFruit));

fruitRouter.put("/", fruitValidator.update, fruitValidator.validateThenCall(controller.updateFruit));

fruitRouter.delete("/byId", fruitValidator.id, fruitValidator.validateThenCall(controller.deleteFruitById));

export { fruitRouter };