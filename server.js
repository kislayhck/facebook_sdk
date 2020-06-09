const express = require("express");
const app = express();

// init Middleware
app.use(express.json({ extended: false }));
app.use("/api/create", require("./routes/fbad"));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
