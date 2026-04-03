import { getTicketById, getTickets, createTicket, updateTicket, deleteTicket } from "../controllers/ticketControllers";
const express = require("express");
const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/", createTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
