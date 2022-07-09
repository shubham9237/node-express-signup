const { validationResult } = require('express-validator');

const signupCtrl = {
    signup: (req, res, next) => {
        const body = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let allErrors = errors.array();
            let errorData = {};
            for (let i = 0; i < allErrors.length; i++) {
                errorData[allErrors[i]['param']] = allErrors[i]['msg'];
            }
            return res.status(422).render("index", { errors: errorData, data: { ...body } });
        }
        res.render("signedUp", { data: { ...body } });
    }
}
module.exports = signupCtrl;