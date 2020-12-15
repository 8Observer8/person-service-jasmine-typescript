define(["require", "exports", "./PersonService", "./Validator", "./DataContext", "./Person"], function (require, exports, PersonService_1, Validator_1, DataContext_1, Person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            // Get input elements
            var inputId = document.getElementById("inputId");
            var inputName = document.getElementById("inputName");
            // Get the "result" element
            var result = document.getElementById("result");
            // Get the btnResult button
            var btnResult = document.getElementById("btnResult");
            var validator = new Validator_1.Validator();
            var dataContext = new DataContext_1.DataContext();
            var personService = new PersonService_1.PersonService(validator, dataContext);
            var person = new Person_1.Person();
            btnResult.onclick = function () {
                person.Id = parseInt(inputId.value);
                person.Name = inputName.value;
                try {
                    personService.Save(person);
                }
                catch (error) {
                    var e = error;
                    result.innerHTML = e.message;
                    return;
                }
                console.log("Finaly");
                result.innerHTML = "Person \"" + person.Name + "\" with id = " + person.Id + " was saved.";
            };
        };
        return Program;
    }());
    window.onload = function () { return Program.Main(); };
});
//# sourceMappingURL=Program.js.map