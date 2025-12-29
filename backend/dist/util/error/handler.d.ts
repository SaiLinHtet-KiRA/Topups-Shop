import { Request, Response, NextFunction } from "express";
export declare const HandleErrorWithLogger: (error: Error, req: Request<any>, res: Response<any>, next: NextFunction) => Response<any, Record<string, any>>;
export declare const HandleUnCaughtException: (error: Error) => Promise<never>;
