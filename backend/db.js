const moongose = require("mongoose");

moongose.connect("mongodb://localhost:27017/db_buku", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: true,
   useCreateIndex: true, 
});

const db = moongose.connection;
db.on("error", console.error.bind(console, "Koneksi database gagal ..."));

db.once("open", () => {
    console.log("Koneksi database berhasil !")
});