const express = require("express");
const router = express.Router();

const { getTicketById, getTickets, createTicket } = require("../controllers/ticketControllers");

router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/", createTicket);

module.exports = router;
