const { tickets, nextId } = require("../data/tickets");

// Get all tickets
exports.getTickets = (req, res) => {
  res.json(tickets);
};

// Get a single ticket
exports.getTicketById = (req, res) => {
  const { id } = req.params;
  const ticket = tickets.find((t) => t.id === parseInt(id));
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found" });
  }
  res.json(ticket);
};
