import { EngineSupport } from "@vis-three/middleware";
import { ObjectCommands } from "@vis-three/module-object";
import { IgnoreAttribute } from "@vis-three/utils";
import { BoxBufferGeometry, ShaderMaterial } from "three";
import { SolidObject3D } from "./SolidObjectCompiler";
import { SolidObjectConfig } from "./SolidObjectConfig";
export declare const replaceMaterial: ShaderMaterial;
export declare const replaceGeometry: BoxBufferGeometry;
export declare const geometryHandler: <C extends SolidObjectConfig, O extends SolidObject3D>({ target, value, engine }: {
    target: any;
    value: any;
    engine: any;
}) => void;
export declare const materialHandler: <C extends SolidObjectConfig, O extends SolidObject3D>({ target, config, engine }: {
    target: any;
    config: any;
    engine: any;
}) => void;
export declare const solidObjectCreate: <C extends SolidObjectConfig, O extends SolidObject3D>(object: O, config: C, filter: import("@vis-three/utils").DeepUnion<import("@vis-three/utils").DeepPartial<import("@vis-three/utils").DeepRecord<C, boolean>>, boolean>, engine: EngineSupport) => O;
export declare const solidObjectDispose: <O extends SolidObject3D>(target: O) => void;
export type SolidObjectCommands<C extends SolidObjectConfig, T extends SolidObject3D> = ObjectCommands<C, T>;
export declare const solidObjectCommands: SolidObjectCommands<SolidObjectConfig, SolidObject3D>;