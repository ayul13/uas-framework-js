import Mtk from "../models/MtkModel.js";
 
export const getMtk = async(req, res) =>{
    try {
        const response = await Mtk.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getMtkById = async(req, res) =>{
    try {
        const response = await Mtk.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createMtk = async(req, res) =>{
    try {
        await Mtk.create(req.body);
        res.status(201).json({msg: "Matakuliah Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateMtk = async(req, res) =>{
    try {
        await Mtk.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Matakuliah Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteMtk = async(req, res) =>{
    try {
        await Mtk.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Matakuliah Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}