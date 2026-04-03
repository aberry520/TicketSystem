import type { Ticket } from "../types/types";

// In-memory ticket storage (for demonstration purposes)
export let tickets:Ticket[] = [
  { 
    id: 1, 
    title: "Sample Ticket", 
    description: "This is a sample ticket", 
    status: "open"
  },
  { 
    id: 2, 
    title: "Another Ticket", 
    description: "This is another sample ticket", 
    status: "closed" 
  },
  { 
    id: 3, 
    title: "Third Ticket", 
    description: "This is the third sample ticket", 
    status: "in-progress" 
  },
];


// Function to get the next ID safely
let nextId:number = tickets.length + 1;
export const getNextId = () => nextId++;
