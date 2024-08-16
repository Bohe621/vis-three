import { LoadUnit } from "@vis-three/plugin-loader-manager";
import { EngineSupport } from "../../engine";
import { Compiler } from "../compiler";
import { Rule, Ruler } from "../ruler";
import { Converter } from "../converter";
import { BasicConfig } from "../common";
import { ModelOption } from "../model";

export interface ModuleOptions<
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>
> {
  type: string;
  compiler?: new (...args) => O;
  rule?: Rule[];
  /**
   * @deprecated use models
   */
  processors?: ModelOption<any, any, any, any>[];
  models: ModelOption<any, any, any, E, O>[];
  resources?: LoadUnit[];
  object?: boolean;
  extend?: (engine: E) => void;
  lifeOrder?: number;
  // expand?: {
  //   module: string[] | RegExp;
  //   command: ProcessorCommands<any, any, any, any>;
  // }[];
}

export class Moduler<
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>
> {
  module: ModuleOptions<E, O>;

  type: string = "";
  converter: Converter<any, E, O>;
  compiler: O;
  ruler: Ruler;

  constructor(module: ModuleOptions<E, O>) {
    this.module = module;

    this.type = module.type;

    this.ruler = new Ruler(module.rule);

    this.compiler = module.compiler
      ? new module.compiler({
          module: module.type,
          models: module.models,
        })
      : (new Compiler<E>({
          module: module.type,
          models: module.models as ModelOption<any, any, any, E, Compiler<E>>[],
        }) as O);

    this.converter = new Converter<any, E, O>({
      module: module.type,
      ruler: this.ruler,
    }).addCompiler(this.compiler);
  }
}

export const defineModule = function <
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>
>(module: ModuleOptions<E, O>) {
  return module;
};
