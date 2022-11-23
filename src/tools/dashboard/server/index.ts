import {Router} from "express"
import { UploadFile } from "./routes/AwsRoutes";

export const FileUploaderRoutes = (): Router => {
    console.log("fupl routes");
    
    const router = Router();
    router.get("/aws/upload-file", UploadFile);

    return router;
}