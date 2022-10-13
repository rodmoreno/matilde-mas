/*
Create endpoints for the paciente resource based on the slides specs
*/

const express = require("express");
const router = express.Router();
const pacienteController = require("./controller");

router.post("/signup", pacienteController.signup);
router.post("/login", pacienteController.login);
router.post("/logout", pacienteController.logout);

router.get("/home", pacienteController.home);
router.post(
  "/home/consult-prescriptions",
  pacienteController.consultPrescriptions
);
router.post(
  "/home/view-vital-signs-history",
  pacienteController.viewVitalSignsHistory
);

router.get("/profile", pacienteController.profile);
router.post("/profile/edit-information", pacienteController.editInformation);
