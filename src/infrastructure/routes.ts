import { Router } from "express";
import {
  GetByUserController,
  GetByIdController,
  CreateController,
  UpdateController,
  UpdateStateController,
  DeleteByIdController
} from "./dependencies";

const CheeseRouter = Router();

CheeseRouter.get("/:id", GetByUserController.run.bind(GetByUserController));
CheeseRouter.get("/id/:id", GetByIdController.run.bind(GetByIdController));
CheeseRouter.post("/", CreateController.run.bind(CreateController));
CheeseRouter.put("/:id", UpdateController.run.bind(UpdateController));
CheeseRouter.put("/state/:id", UpdateStateController.run.bind(UpdateStateController));
CheeseRouter.delete("/:id", DeleteByIdController.run.bind(DeleteByIdController))

export default CheeseRouter;