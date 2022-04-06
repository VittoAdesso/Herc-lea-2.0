// i use yup, is  a library to validate
const yup = require('yup'); 
// helper or funtion i use into the route, is type of skeleton
function validate(validation){
    return (req, res, next) => {
        try {
            // take all i put into body in form
            validation(req.body); 
            next();
        } catch (err) {
            next(err);
        }
    }
}
// i want to validate data, the user submit
function createSwimmerValidation(data){
    // created guía = library is an object and sahpe is waht types of fields i want or model ... 
    const schema = yup.object().shape({
        swimmerId: yup.string().min(2).max(5).required(), // if i want required
        name: yup.string().min(3).required(),
        sex: yup.string().min(3).required(),
    });
    schema.validateSync(data);
}
// if i want to use outside this file, i have to export it
module.exports = {
    validate, 
    createSwimmerValidation,
}; 