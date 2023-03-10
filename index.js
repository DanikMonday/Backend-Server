const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

const routes = require("./routes/routes");
const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};


app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://jesusocampo1105:Colombia2020**@peliculascrud.cefxvzm.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected successfully"))
.catch((err) => console.error(err));

app.use("/", routes);

app.listen(PORT, ()=>{
  console.log("mi puerto es " + PORT);
});
