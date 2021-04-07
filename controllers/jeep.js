var Jeep = require('../models/jeep');
// List of all Jeeps
exports.jeep_list = async function (req, res) {
    try {
        theJeeps = await Jeep.find();
        res.send(theJeeps);
    }
    catch (err) {
        res.send( `{"error": ${err}}`);
        res.status(500);
    }
};
// for a specific Jeep.
exports.jeep_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Jeep detail: ' + req.params.id);
};
// Handle Jeep create on POST.
exports.jeep_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Jeep();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.jeepname = req.body.jeepname;
    document.enginemodel = req.body.enginemodel;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};// Handle Jeep delete form on DELETE.
exports.jeep_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Jeep delete DELETE ' + req.params.id);
};
// Handle Jeep update form on PUT.
exports.jeep_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Jeep update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.jeep_view_all_Page = async function (req, res) {
    try {
        theJeeps = await Jeep.find();
        console.log("njfndw")
        res.render('jeeps', { title: 'Jeep Search Results', results: theJeeps });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};