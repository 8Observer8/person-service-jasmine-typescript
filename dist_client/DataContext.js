define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataContext = /** @class */ (function () {
        function DataContext() {
        }
        DataContext.prototype.savePerson = function (person) {
            console.log("Person with name \"" + person.Name + "\" was saved.");
        };
        return DataContext;
    }());
    exports.DataContext = DataContext;
});
//# sourceMappingURL=DataContext.js.map