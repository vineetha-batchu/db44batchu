const mongoose = require("mongoose")
const jeepSchema = mongoose.Schema({
    jeepname: {
        type: String,
        required: [true, "JeepName is Required"]
    },
    enginemodel: {
        type: String,
        required: [true, "EngineModel is Required"]
    },
    price: {
        type: Number,
        required: [true, "Price of the Jeep is mandatory"],
        min: [12000, "Price must be minimum of 12000$ "],
        max: [95000, "Price can't be greater than 95000$ "]

    }
})
module.exports = mongoose.model("Jeep", jeepSchema)