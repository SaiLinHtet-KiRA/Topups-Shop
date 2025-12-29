import AuthControllerType from "../interface/controller/Auth.controller.type";
import { Request, Response } from "express";
declare class AuthController implements AuthControllerType {
    TelegramLogin(req: Request<null, null, null, {
        id: string;
    }>, res: Response): Promise<void>;
    getUser(req: Request<null, null, null, {
        id: string;
    }>, res: Response): Promise<void>;
}
declare const _default: AuthController;
export default _default;
