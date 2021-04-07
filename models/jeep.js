const mongoose = require("mongoose")
const jeepSchema = mongoose.Schema({
jeepname: String,
enginemodel: String,
price: Number
})
module.exports = mongoose.model("Jeep", jeepSchema)