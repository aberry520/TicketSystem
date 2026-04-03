// In-memory ticket storage (for demonstration purposes)
let tickets = [
  { id: 1, title: "Sample Ticket", description: "This is a sample ticket" },
  { id: 2, title: "Another Ticket", description: "This is another sample ticket" },
  { id: 3, title: "Third Ticket", description: "This is the third sample ticket" },
];

let nextId = tickets.length + 1;
module.exports = { tickets, nextId };
