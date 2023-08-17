import proyectorModel from "../models/proyectores.model.js"

class proyectorManager {
    constructor(){
        this.proyectores = [];
    }
    getProyectores = async () => {
        try{
            let result = await proyectorModel.find();
            return result;
        } catch(err) {
            console.log("Cannot get products with mongoose: " + err);
        }
    }
}

const manager = new proyectorManager();


export { manager, proyectorManager };