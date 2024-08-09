import { CheeseRepositoryPrisma } from "./repository.prisma";
import { getController } from "./controllers/getByUser.controller";
import { createController } from "./controllers/create.controller";
import { updateController } from "./controllers/update.controller";
import { getByUser } from "../application/use-cases/getByUser";
import { create } from "../application/use-cases/create";
import { update } from "../application/use-cases/update";
import { deleteController } from "./controllers/delete.controller";
import { Delete } from "../application/use-cases/delete";
import { getByIdController } from "./controllers/getById.controller";
import { getById } from "../application/use-cases/getById";
import { updateState } from "../application/use-cases/updateState";
import { updateStateController } from "./controllers/updateState.controller";


const cheeseRepository = new CheeseRepositoryPrisma();

const getByUserCase = new getByUser(cheeseRepository);
export const GetByUserController = new getController(getByUserCase);

const getByIdCase = new getById(cheeseRepository);
export const GetByIdController = new getByIdController(getByIdCase);

const createCase = new create(cheeseRepository);
export const CreateController = new createController(createCase);

const updateCase = new update(cheeseRepository);
export const UpdateController = new updateController(updateCase);

const updateStateCase = new updateState(cheeseRepository);
export const UpdateStateController = new updateStateController(updateStateCase);

const deleteByIdCase = new Delete(cheeseRepository);
export const DeleteByIdController = new deleteController(deleteByIdCase);