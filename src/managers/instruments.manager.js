import instrumentModel from "../models/instruments.model.js"

class instrumentManager {
    constructor(){
        this.proyectores = [];
    }
    getInstruments = async () => {
        try{
            let result = await instrumentModel.find();
            return result;
        } catch(err) {
            console.log("Cannot get products with mongoose: " + err);
        }
    }
}

const manager = new instrumentManager();


export { manager, instrumentManager };