import { IDataContext } from "../../src/client/IDataContext";
import { IPersonValidator } from "../../src/client/IPersonValidator";
import { PersonService } from "../../src/client/PersonService";
import { IPerson } from "../../src/client/IPerson";

describe("personService tests", () =>
{
    let validator: any;
    let dataContext: any;

    beforeEach(() =>
    {
        validator = jasmine.createSpyObj("validator", ["isValid"]);
        dataContext = jasmine.createSpyObj("dataContext", ["savePerson"]);
    });

    it("save is called if person is valid", () =>
    {
        // Arrange
        validator.isValid.and.returnValue(true);
        let service = new PersonService(<IPersonValidator>validator, <IDataContext>dataContext);

        let validPerson = <IPerson>{};

        // Act
        service.Save(validPerson);

        // Assert
        expect(validator.isValid).toHaveBeenCalledWith(validPerson);
        expect(dataContext.savePerson).toHaveBeenCalledWith(validPerson);
    });

    it("exception is thrown if person is not valid", () =>
    {
        // Arrange
        validator.isValid.and.returnValue(false);
        let service = new PersonService(<IPersonValidator>validator, <IDataContext>dataContext);

        let invalidPerson = <IPerson>{};

        // Act & Assert
        expect(() =>
        {
            service.Save(invalidPerson);
        }).toThrow();

        expect(validator.isValid).toHaveBeenCalledWith(invalidPerson);
        expect(dataContext.savePerson).not.toHaveBeenCalled();
    });
});
