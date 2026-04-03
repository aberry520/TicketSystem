const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const ticketRoutes = require("./routes/ticketRoutes");
import type { Request, Response} from "express";

// middleware to parse JSON
// app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.use("/tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/* 
- create a ticket
- get all tickets
- get a single ticket
- update a ticket
- delete a ticket
*/

/*
// Create a ticket
app.post("/tickets", (req: Request, res: Response) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }
  const newTicket = { id: nextId++, title, description };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
});
// Get a single ticket
app.get("/tickets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const ticket = tickets.find((t) => t.id === parseInt(id));
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found" });
  }
  res.json(ticket);
});

// Update a ticket
app.put("/tickets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const ticket = tickets.find((t) => t.id === parseInt(id));
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found" });
  }
  if (title) ticket.title = title;
  if (description) ticket.description = description;
  res.json(ticket);
});

// Delete a ticket
app.delete("/tickets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const index = tickets.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Ticket not found" });
  }
  tickets.splice(index, 1);
  res.status(204).send();
});
*/
