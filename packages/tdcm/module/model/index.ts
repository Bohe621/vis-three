import { EventDispatcher } from "@vis-three/core";
import { BasicConfig } from "../common";
import { EngineSupport } from "../../engine";
import { CtnNotice } from "../container";
import {
  DeepIntersection,
  DeepPartial,
  DeepRecord,
  DeepUnion,
} from "@vis-three/utils";
import { SYMBOL_MODEL } from "../../utils/obTool";
import { Compiler } from "../compiler";

export interface CommandParameters<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>,
  M extends Model<C, P, E, O> = Model<C, P, E, O>
> extends CtnNotice {
  model: M;
  ctx: M;
  puppet: P;
  target: P;
  config: C;
  engine: E;
  compiler: O;
}

export type RegCommand<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>,
  M extends Model<C, P, E, O> = Model<C, P, E, O>
> = {
  reg: RegExp;
  handler: (this: M, params: CommandParameters<C, P, E, O, M>) => void;
};

export type KeyCommand<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>,
  M extends Model<C, P, E, O> = Model<C, P, E, O>
> = (this: M, params: CommandParameters<C, P, E, O, M>) => void;

export type CommandStructure<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>,
  M extends Model<C, P, E, O> = Model<C, P, E, O>
> = DeepIntersection<
  DeepPartial<
    DeepRecord<
      DeepUnion<C, KeyCommand<C, P, E, O, M>>,
      KeyCommand<C, P, E, O, M>
    >
  >,
  { $reg?: RegCommand<C, P, E, O, M>[] }
>;

export interface ModelCommands<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>,
  M extends Model<C, P, E, O> = Model<C, P, E, O>
> {
  add?: CommandStructure<C, P, E, O, M>;
  set?: CommandStructure<C, P, E, O, M>;
  delete?: CommandStructure<C, P, E, O, M>;
}

export interface ModelParameters<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>
> {
  config: C;
  engine: E;
  compiler: O;
}

export class Model<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>
> extends EventDispatcher {
  puppet!: P;
  config: C;
  engine: E;
  compiler: O;
  commands?: ModelCommands<C, P, E, O>;

  createPuppet!: (
    this: any,
    params: { model: any; config: C; engine: E; compiler: O }
  ) => P;
  disposePuppet!: (
    this: any,
    params: { model: any; config: C; engine: E; compiler: O }
  ) => void;

  constructor(params: ModelParameters<C, P, E, O>) {
    super();
    this.config = params.config;
    this.engine = params.engine;
    this.compiler = params.compiler;
  }

  toConfig<CO extends BasicConfig>(vid: string): CO | null {
    return this.engine.getConfigBySymbol<CO>(vid);
  }

  toModel<MO extends Model<any, any, any>>(vid: string) {
    return this.engine.compilerManager.getModelBySymbol<MO>(vid);
  }

  toObject<OB extends object>(vid: string) {
    return this.engine.getObjectBySymbol(vid) as OB;
  }

  toPuppet<OB extends object>(vid: string) {
    return this.toObject<OB>(vid);
  }

  process(params: CtnNotice) {
    if (!this.commands || !this.commands[params.operate]) {
      this[params.operate](params);
      return;
    }
    let commands = this.commands[params.operate]!;

    const keyPath = params.path
      ? params.path.split(".").concat(params.key)
      : [params.key];

    for (const key of keyPath) {
      if (!commands[key] && !commands.$reg) {
        this[params.operate](params);
        return;
      } else if (commands[key]) {
        if (typeof commands[key] === "function") {
          commands[key].call(this, params);
          return;
        } else {
          commands = commands[key];
        }
      } else if (commands.$reg) {
        for (const item of commands.$reg) {
          if (item.reg.test(key)) {
            item.handler.call(this, {
              model: this,
              ctx: this,
              config: this.config,
              target: this.puppet,
              puppet: this.puppet,
              engine: this.engine,
              compiler: this.compiler,
              ...params,
            });
            return;
          }
        }
      }
    }

    this[params.operate](params);
  }

  private add(params: CtnNotice) {
    let target = this.puppet;
    const path = params.path;

    for (const key of path) {
      if (typeof target[key] !== undefined) {
        target = target[key];
      } else {
        console.warn(`processor can not exec default add operate.`, params);
        return;
      }
    }

    target[params.key] = params.value;
  }

  private set(params: CtnNotice) {
    let target = this.puppet;
    const path = params.path;

    for (const key of path) {
      if (typeof target[key] !== undefined) {
        target = target[key];
      } else {
        console.warn(`processor can not exec default set operate.`, params);
        return;
      }
    }

    target[params.key] = params.value;
  }

  private delete(params: CtnNotice) {
    let target = this.puppet;
    const path = params.path;

    for (const key of path) {
      if (typeof target[key] !== undefined) {
        target = target[key];
      } else {
        console.warn(`processor can not exec default delete operate.`, params);
        return;
      }
    }

    delete target[params.key];
  }

  create() {
    this.config[Symbol.for(SYMBOL_MODEL)] = this;
    this.puppet = this.createPuppet.call(this, {
      model: this,
      config: this.config,
      engine: this.engine,
      compiler: this.compiler,
    });
  }

  dispose() {
    this.disposePuppet.call(this, {
      model: this,
      config: this.config,
      engine: this.engine,
      compiler: this.compiler,
    });
    this.config[Symbol.for(SYMBOL_MODEL)] = undefined;
    this.clear();
  }
}

export interface ModelOption<
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  D extends object = object,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>
> {
  type: string;
  config: () => C;
  context?: (
    this: Model<C, P, E> & D,
    params: { model: Model<C, P, E> & D }
  ) => D;
  commands?: ModelCommands<C, P, E, O, Model<C, P, E, O> & D>;
  create: (
    this: Model<C, P, E> & D,
    params: { model: Model<C, P, E> & D; config: C; engine: E; compiler: O }
  ) => P;
  dispose: (
    this: Model<C, P, E> & D,
    params: {
      model: Model<C, P, E> & D;
      config: C;
      engine: E;
      compiler: O;
    }
  ) => void;
}

export const defineModel = function <
  C extends BasicConfig = BasicConfig,
  P extends object = object,
  D extends object = any,
  E extends EngineSupport = EngineSupport,
  O extends Compiler<E> = Compiler<E>
>(option: ModelOption<C, P, D, E, O>) {
  return option;
};

/**
 * @deprecated use defineModel
 */
export const defineProcessor = defineModel;