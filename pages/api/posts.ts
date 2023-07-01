import { NextApiHandler } from "next";
import { readPostsInfo } from "@/lib/helper";


const handler:NextApiHandler = (req, res) => {

    const {method} = req;
    switch(method) {
        case 'GET': {
            const data = readPostsInfo();
            return res.json({postInfo: data});
        }
        default: return res.status(404).send("Not Found");
    }
    

    console.log(req.method);
    res.json({ok: true});
}



export default handler;