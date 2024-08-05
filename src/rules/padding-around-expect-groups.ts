import { getFilename } from "../utils/msc";
import { Config, PaddingType, StatementType, createPaddingRule } from "../utils/padding";

export const RULE_NAME = getFilename(import.meta.url)

export const config: Config[] = [
  {
    paddingType: PaddingType.Always,
    prevStatementType: StatementType.Any,
    nextStatementType: StatementType.ExpectToken,
  },
  {
    paddingType: PaddingType.Always,
    prevStatementType: StatementType.ExpectToken,
    nextStatementType: StatementType.Any,
  },
  {
    paddingType: PaddingType.Any,
    prevStatementType: StatementType.ExpectToken,
    nextStatementType: StatementType.ExpectToken,
  },
];

export default createPaddingRule(
  RULE_NAME,
  'Enforce padding around `expect` groups',
  config,
);
