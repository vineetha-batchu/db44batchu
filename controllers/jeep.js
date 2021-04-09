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
exports.jeep_detail = async function (req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Jeep.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};
// Handle Jeep create on POST.
exports.jeep_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Jeep();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {jeepname:"JEEP WRANGLER SPORT",enginemodel:"Intercooled Turbo Premium Unleaded I-4 2.0 L/122",price:44200}
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
exports.jeep_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Jeep.findById( req.params.id)
        // Do updates of properties
        if(req.body.jeepname) toUpdate.jeepname = req.body.jeepname;
        if(req.body.enginemodel) toUpdate.enginemodel = req.body.enginemodel;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

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