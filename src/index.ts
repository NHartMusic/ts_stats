import { MatchReader } from './MatchReader'
import { CSVFileReader } from './CSVFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReports'
import { WinsAnalysis } from './analysers/WinsAnalysis'
import { Summary } from './Summary'
import { HTMLReport } from './reportTargets/HTMLReports'

const csvFileReader = new CSVFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches)
