import mongoose from "mongoose";

const proyectorCollection = "proyectores";

const proyectorSchema = new mongoose.Schema({
  nro_inv: { type: Number },
  cod_rec: { type: String },
  marca: { type: String },
  modelo: { type: String },
  sn: { type: String },
  estado: { type: String },
  ubicacion: { type: String },
  fecha_ingreso: { type: String },
  vga: { type: Boolean },
  hdmi: { type: Boolean },
  adicionales: { type: String },
});

const proyectorModel = mongoose.model(proyectorCollection, proyectorSchema);

export default proyectorModel;