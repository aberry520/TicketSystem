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

// Create a ticket
exports.createTicket = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }
    const newTicket = { id: nextId++, title, description };
    tickets.push(newTicket);
    res.status(201).json(newTicket);
};