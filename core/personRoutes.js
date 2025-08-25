const express = require("express");
const router = express.Router();
const personController = require("./personController");

router.get("/person", personController.getAllPersons);
router.post("/person", personController.createPerson);
router.put("/person/:id", personController.updatePerson);
router.delete("/person/:id", personController.deletePerson);

module.exports = router;
