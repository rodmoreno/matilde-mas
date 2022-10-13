/*  
Endpoints for the medico resource based on the slides specs
*/

const express = require("express");
const router = express.Router();
const medicoController = require("./controller");

router.post("/signup", medicoController.signup);
router.post("/login", medicoController.login);
router.post("/logout", medicoController.logout);

router.get("/home", medicoController.home);
router.post("/home/start-consultation", medicoController.startConsultation);

//maybe get instead of post?
router.post("/home/list-of-my-patients", medicoController.listOfMyPatients);
router.post("/home/remove-patient", medicoController.removePatient);

router.post("/home/attach-files", medicoController.attachFiles);
