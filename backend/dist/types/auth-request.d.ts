import { Request } from "express";
export interface AuthRequest extends Request {
    user: {
        id: string;
    };
}
//# sourceMappingURL=auth-request.d.ts.map