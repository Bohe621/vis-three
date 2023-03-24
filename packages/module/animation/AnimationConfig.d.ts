import { SymbolConfig } from "../module/common";
import { BasicAniScriptConfig } from "../manager/AniScriptGeneratorManager";
export interface AnimationConfig extends SymbolConfig {
    name: string;
    target: string;
    attribute: string;
    play: boolean;
}
export interface ScriptAnimationConfig extends AnimationConfig {
    script: BasicAniScriptConfig;
}
export interface KeyframeAnimationConfig extends AnimationConfig {
}
export type AnimationAllType = ScriptAnimationConfig | KeyframeAnimationConfig;
export declare const getScriptAnimationConfig: () => ScriptAnimationConfig;
export declare const getKeyframeAnimationConfig: () => KeyframeAnimationConfig;
