const signupCtrl = require("../controller/signup-controller");
const expect = require("chai").expect;
var sinon = require('sinon');
const { validationResult } = require('express-validator/check');

var errorsResponse = {
    isEmpty: function () {
        return false;
    },
    array: [{
        param: 'email',
        msg: 'Invalid Email',
        value: undefined
    }]
};

describe("Signup controller test cases.", () => {

    it("should run render because of validation success", () => {
        const req = {
            body: {
                first_name: 'shubham',
                last_name: 'landge',
                email: 'l.shubham@gmail.com',
                password: '12345678',
                phone_number: '1221'
            }
        }
        const res = {
            render: sinon.spy()
        }
        signupCtrl.signup(req, res, () => { });
        expect(res.render.calledOnce).to.be.true;
    })

    it("should run if block because of validation error", () => {

        const req = {
            body: {
                first_name: 'shubham',
                last_name: 'landge',
                email: 'l.shubham@gmail',
                password: '12345678',
                phone_number: '1221'
            },
        }

        const res = {
            _status: null,
            _json: null,
            status: function (code) {
                this._status = code
                return this
            },
            render: sinon.spy()
        }
        const result = validationResult(req).errors;

        signupCtrl.signup(req, res, () => { });
        expect(result).to.be.an('array');

    })

})

