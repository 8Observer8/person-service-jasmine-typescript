(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonService_1 = require("../../src/client/PersonService");
describe("personService tests", function () {
    var validator;
    var dataContext;
    beforeEach(function () {
        validator = jasmine.createSpyObj("validator", ["isValid"]);
        dataContext = jasmine.createSpyObj("dataContext", ["savePerson"]);
    });
    it("save is called if person is valid", function () {
        // Arrange
        validator.isValid.and.returnValue(true);
        var service = new PersonService_1.PersonService(validator, dataContext);
        var validPerson = {};
        // Act
        service.Save(validPerson);
        // Assert
        expect(validator.isValid).toHaveBeenCalledWith(validPerson);
        expect(dataContext.savePerson).toHaveBeenCalledWith(validPerson);
    });
    it("exception is thrown if person is not valid", function () {
        // Arrange
        validator.isValid.and.returnValue(false);
        var service = new PersonService_1.PersonService(validator, dataContext);
        var invalidPerson = {};
        // Act & Assert
        expect(function () {
            service.Save(invalidPerson);
        }).toThrow();
        expect(validator.isValid).toHaveBeenCalledWith(invalidPerson);
        expect(dataContext.savePerson).not.toHaveBeenCalled();
    });
});

},{"../../src/client/PersonService":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonService = /** @class */ (function () {
    function PersonService(validator, dataContext) {
        this._validator = validator;
        this._dataContext = dataContext;
    }
    PersonService.prototype.Save = function (person) {
        if (this._validator.isValid(person)) {
            this._dataContext.savePerson(person);
        }
        else {
            throw new Error("Person is not valid.");
        }
    };
    return PersonService;
}());
exports.PersonService = PersonService;

},{}]},{},[1]);
