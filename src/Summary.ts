import { MatchData } from './MatchData'
import { WinsAnalysis } from './analysers/WinsAnalysis'
import { HTMLReport } from './reportTargets/HTMLReports'

export interface Analyser {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HTMLReport
        )
    }

    constructor(
        public analyser: Analyser,
        public outputTarget: OutputTarget) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyser.run(matches)
        this.outputTarget.print(output)
    }
}


