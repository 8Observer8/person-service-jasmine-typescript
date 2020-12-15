define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Person = /** @class */ (function () {
        function Person() {
        }
        Object.defineProperty(Person.prototype, "Name", {
            get: function () {
                return this._name;
            },
            set: function (v) {
                this._name = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "Id", {
            get: function () {
                return this._id;
            },
            set: function (v) {
                this._id = v;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    exports.Person = Person;
});
//# sourceMappingURL=Person.js.map