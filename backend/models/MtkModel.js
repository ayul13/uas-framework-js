import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Mtk = db.define('matakuliahs',{
    matakuliah: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default Mtk;
 
(async()=>{
    await db.sync();
})();