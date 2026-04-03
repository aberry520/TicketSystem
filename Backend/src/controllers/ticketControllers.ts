import type { Request, Response } from "express";
import type { Ticket } from "../types/types";
import { tickets, getNextId } from "../data/tickets";

// Get all tickets
export const getTickets = (req: Request, res: Response) => {
  res.json(tickets);
};

// Get a single ticket
export const getTicketById = (req: Request, res: Response) => {
  const { id } = req.params;
  const ticket = tickets.find((t: Ticket) => t.id === parseInt(id as string));
  if (!ticket) {
    return res.status(404).json({ error: "Ticket not found" });
  }
  res.json(ticket);
};

// Create a ticket
export const createTicket = (req: Request, res: Response) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  // Use getNextId() instead of incrementing imported variable
  const newTicket:Ticket = { id: getNextId(), title, description, status: 'open' };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
};