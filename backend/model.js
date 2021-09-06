const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        pengarang: { type: String, require: true },
        judul: { type: String, require: true },
        harga: { type: Number, require:true },
        stok: { type: Number, require: true },
    },
    { collection: "koleksiBuku" }
);

module.exports = mongoose.model("BukuModel", BookSchema);