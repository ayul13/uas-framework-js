import express from "express";
import {
    getMtk, 
    getMtkById,
    createMtk,
    updateMtk,
    deleteMtk
} from "../controllers/MtkController.js";
 
const router = express.Router();
 
router.get('/mtk', getMtk);
router.get('/mtk/:id', getMtkById);
router.post('/mtk', createMtk);
router.patch('/mtk/:id', updateMtk);
router.delete('/mtk/:id', deleteMtk);


 
export default router;