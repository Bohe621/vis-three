import { Line } from "three";
import { CompilerTarget } from "../../core/Compiler";
import { IgnoreAttribute } from "../../core/ProxyBroadcast";
import { MODULETYPE } from "../constants/MODULETYPE";
import { SolidObjectDataSupport } from "../solidObject/SolidDataSupport";
import { LineCompiler } from "./LineCompiler";
import { LineConfig } from "./LineConfig";
import { LineRule } from "./LineRule";

export class LineDataSupport extends SolidObjectDataSupport<
  LineConfig,
  Line,
  LineCompiler
> {
  MODULE: MODULETYPE = MODULETYPE.LINE;

  constructor(data?: CompilerTarget<LineConfig>, ignore?: IgnoreAttribute) {
    !data && (data = {});
    super(LineRule, data, ignore);
  }
}
