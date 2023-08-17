import mongoose from "mongoose";

const instrumentCollection = "instrumentos";

const instrumentSchema = new mongoose.Schema({
  nro_inv: { type: Number },
  cod_rec: { type: String },
  tipo: { type: String },
  descripcion: { type: String },
  marca: { type: String },
  modelo: { type: String },
  sn: { type: String },
  ab_rango: { type: String },
  cod_manual: { type: String },
  especificacionnes: { type: String },
  estado: { type: String },
  ubicacion: { type: String },
  adicionales: { type: String },
  fecha_ingreso: { type: String }
});

const instrumentModel = mongoose.model(instrumentCollection, instrumentSchema);

export default instrumentModel;