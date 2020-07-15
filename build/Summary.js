"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var HTMLReports_1 = require("./reportTargets/HTMLReports");
var Summary = /** @class */ (function () {
    function Summary(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReports_1.HTMLReport);
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyser.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
