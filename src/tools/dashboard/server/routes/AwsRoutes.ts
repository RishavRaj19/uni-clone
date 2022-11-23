import {Request, Response} from "express";

export const UploadFile = (req: Request, res: Response) => {
    try {
        // const {user} = req.params;
        const formData = req.query.formData

        // console.log(user);
        console.log(formData);
        
        // return githubServiceV2.createEmptyCommit(serviceConfig.serviceName, message, authorName, authorEmail, messageBody)
        //     .then(() => res.status(200).json({status: "Ok"}))
        //     .catch((e: Error) => res.status(500).json({error: e.message || e}));
    } catch (e) {
        return res.status(500).json({error: (e as Error).message || e});
    }
}

