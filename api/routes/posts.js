import express from "express"
import { createPost,fetchPost,deletePost,updatePost} from "../controllers/post.js"

const router = express.Router();
export default router;

router.get("/getposts", fetchPost ); //gets data from database
router.post("/createpost", createPost ); //send data from database
router.put("/updatepost", updatePost);
router.delete("/deletepost", deletePost);

