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
