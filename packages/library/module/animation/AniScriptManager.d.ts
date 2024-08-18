import { RenderEvent } from "@vis-three/plugin-render-manager";
import { EngineSupport } from "@vis-three/tdcm";
export interface BasicAniScriptConfig {
    name: string;
}
export type AniScriptGenerator<C extends BasicAniScriptConfig> = (engine: EngineSupport, target: object, attribute: string, config: C) => (event: RenderEvent) => void;
export declare class AniScriptManager {
    private static configLibrary;
    private static generatorLibrary;
    static register: <C extends BasicAniScriptConfig>({ config, generator, }: {
        config: C;
        generator: AniScriptGenerator<C>;
    }) => AniScriptManager;
    static generateConfig(name: string, merge: object): BasicAniScriptConfig;
    static generateScript(engine: EngineSupport, target: object, attribute: string, config: BasicAniScriptConfig): (event: RenderEvent) => void;
    static has(name: string): boolean;
}
/**
 * @deprecated use AniScriptManager
 */
export declare class AniScriptGeneratorManager extends AniScriptManager {
}