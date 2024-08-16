import { BasicConfig } from "../common";
import { EngineSupport } from "../../engine";
import { CtnNotice } from "../container";
import { Model, ModelOption } from "../model";
export interface CompilerParameters<E extends EngineSupport = EngineSupport> {
    module: string;
    models: ModelOption<any, any, any, E>[];
}
export declare class Compiler<E extends EngineSupport = EngineSupport> {
    MODULE: string;
    builders: Map<string, ModelOption<any, any, any, E, Compiler<E>>>;
    target: Record<string, BasicConfig>;
    map: Map<BasicConfig["vid"], Model<any, any, E, this>>;
    symbolMap: WeakMap<Model<any, any, E, this>["puppet"], BasicConfig["vid"]>;
    engine: E;
    constructor(params: CompilerParameters<E>);
    /**
     * @deprecated
     * @returns
     */
    getMap(): null;
    useEngine(engine: E): this;
    setTarget(target: Record<string, BasicConfig>): this;
    add(config: BasicConfig): any | null;
    remove(config: BasicConfig): this;
    cover(config: BasicConfig): this;
    compile(vid: BasicConfig["vid"], notice: CtnNotice): this;
    compileAll(): this;
    dispose(): this;
    getObjectSymbol(object: object): string | null;
    getObjectBySymbol(vid: string): BasicConfig | null;
    getModelBySymbol(vid: string): Model<any, any, E, this> | null;
    useModel(option: ModelOption<any, any, any, E>, callback?: (compiler: this) => void): this;
    /**
     * @deprecated use useModel
     * @param processor
     * @param callback
     * @returns
     */
    useProcessor(processor: ModelOption<any, any, any, E>, callback?: (compiler: this) => void): this;
}
