define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=PersonService.js.map