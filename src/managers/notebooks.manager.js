import notebookModel from "../models/notebooks.model.js"

class notebookManager {
    constructor(){
        this.proyectores = [];
    }
    getNotebooks = async () => {
        try{
            let result = await notebookModel.find();
            return result;
        } catch(err) {
            console.log("Cannot get products with mongoose: " + err);
        }
    }
}

const manager = new notebookManager();


export { manager, notebookManager };