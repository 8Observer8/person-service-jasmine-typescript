define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Validator = /** @class */ (function () {
        function Validator() {
        }
        Validator.prototype.isValid = function (person) {
            return person.Name !== "Durak";
        };
        return Validator;
    }());
    exports.Validator = Validator;
});
//# sourceMappingURL=Validator.js.map