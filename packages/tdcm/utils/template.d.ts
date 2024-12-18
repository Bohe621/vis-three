import { BasicConfig } from "../module";
import { EngineSupportLoadOptions } from "../engine";
import { LoadOptions } from "../plugin/DataSupportManagerPlugin";
export interface CloneResult {
    config: EngineSupportLoadOptions;
    detail: Record<string, string>;
}
/**
 * 克隆整个配置单
 * @param object EngineSupportLoadOptions
 * @param options 额外选项
 * - detail:bolean 返回clone映射
 * - fillName 是否填充未命名的单位
 * @returns EngineSupportLoadOptions | CloneResult
 */
export declare const clone: (object: EngineSupportLoadOptions, options?: {
    filter?: string[];
    detail?: boolean;
    fillName?: boolean | ((BasicConfig: any) => string);
}) => EngineSupportLoadOptions | CloneResult;
/**
 * 对配置单中的每个配置项做处理
 * @param object
 * @param handler
 * @param options
 */
export declare const handler: (object: EngineSupportLoadOptions, handler: (config: BasicConfig) => BasicConfig, options?: {
    filter?: string[];
    clone?: boolean;
}) => EngineSupportLoadOptions;
export declare const planish: (configs: LoadOptions) => Record<string, BasicConfig>;
export declare const observable: (object: EngineSupportLoadOptions | string, obCallback?: (config: BasicConfig) => BasicConfig) => EngineSupportLoadOptions;
declare const _default: {
    clone: (object: EngineSupportLoadOptions, options?: {
        filter?: string[];
        detail?: boolean;
        fillName?: boolean | ((BasicConfig: any) => string);
    }) => EngineSupportLoadOptions | CloneResult;
    handler: (object: EngineSupportLoadOptions, handler: (config: BasicConfig) => BasicConfig, options?: {
        filter?: string[];
        clone?: boolean;
    }) => EngineSupportLoadOptions;
    planish: (configs: LoadOptions) => Record<string, BasicConfig>;
    observable: (object: EngineSupportLoadOptions | string, obCallback?: (config: BasicConfig) => BasicConfig) => EngineSupportLoadOptions;
};
export default _default;
