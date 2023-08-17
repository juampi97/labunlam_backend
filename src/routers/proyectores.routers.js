import { Router } from "express";
import { manager } from "../managers/proyectores.manager.js"

const router = Router();

router.get("/", async (req, res) => {
    manager.getProyectores().then((data) => {
      if (data) {
        // res.status(200).send({ status: "success", paiload: data });
        res.status(200).json(data)
      } else {
        res.status(406).send({ status: "error", paiload: "No hay productos" });
      }
    });
  });
  

export default router;