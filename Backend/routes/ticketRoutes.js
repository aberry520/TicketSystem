const express = require("express");
const router = express.Router();

const { getTicketById, getTickets } = require("../controllers/ticketControllers");

router.get("/", getTickets);
router.get("/:id", getTicketById);

module.exports = router;
