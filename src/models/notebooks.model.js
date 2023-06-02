import mongoose from "mongoose";

const notebookCollection = "notebooks";

const notebookSchema = new mongoose.Schema({
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
  s_op: { type: String },
  lectora_DVD: { type: Boolean }
});

const notebookModel = mongoose.model(notebookCollection, notebookSchema);

export default notebookModel;