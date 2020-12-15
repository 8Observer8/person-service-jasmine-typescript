requirejs.config({
    baseUrl: "./dist_specs",
    paths: {
        "jasmine": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.min",
        "jasmine-html": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.min",
        "jasmine-boot": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.min"
    },
    shim: {
        "jasmine": {
            exports: "window.jasmineRequire"
        },
        "jasmine-html": {
            deps: ["jasmine"],
            exports: "window.jasmineRequire"
        },
        'jasmine-boot': {
            deps: ["jasmine-html"],
            exports: "window.jasmineRequire"
        }
    }
});
var specs = [
    "src_specs/PersonService.spec"
];
require(["jasmine-boot"], function (jasmineBoot) {
    require(specs, function () {
        window.onload();
    });
});
//# sourceMappingURL=RequireConfigSpecRunner.js.map