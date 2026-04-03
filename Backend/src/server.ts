const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const ticketRoutes = require("./routes/ticketRoutes");
import type { Request, Response} from "express";

// middleware to parse JSON
app.use(express.json());

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