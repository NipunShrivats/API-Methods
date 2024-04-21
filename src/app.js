const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

require("./db/conn");
const Student = require("./models/students")
const studentRouter = require("./routers/student");

app.use(express.json());//middleware to display post data
app.use(studentRouter);


app.listen(PORT, () => {
    console.log(`working on port no ${PORT}`);
})