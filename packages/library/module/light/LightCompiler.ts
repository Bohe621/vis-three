import { ObjectCompiler } from "@vis-three/module-object";
import { AmbientLight, Light } from "three";
import { LightConfigAllType } from "./LightConfig";

export class LightCompiler extends ObjectCompiler<
  LightConfigAllType,
  Light | AmbientLight
> {
  constructor() {
    super();
  }
}