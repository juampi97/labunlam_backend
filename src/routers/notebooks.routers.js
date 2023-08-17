import { Router } from "express";
import { manager } from "../managers/notebooks.manager.js"

const router = Router();

router.get("/", async (req, res) => {
    manager.getNotebooks().then((data) => {
      if (data) {
        // res.status(200).send({ status: "success", paiload: data });
        res.status(200).json(data)
      } else {
        res.status(406).send({ status: "error", paiload: "No hay productos" });
      }
    });
  });
  

export default router;