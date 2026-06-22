import { Request, Response } from "express";
export declare const createTrip: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTrips: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTrip: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateTrip: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteTrip: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addActivity: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const removeActivity: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const togglePackingItem: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=trip.controller.d.ts.map