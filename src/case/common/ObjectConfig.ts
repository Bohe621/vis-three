import { Vector2Config, Vector3Config, SymbolConfig } from "./CommonConfig"

export interface Object3DConfig extends SymbolConfig {
  type: string
  castShadow: boolean
  receiveShadow: boolean
  lookAt: string
  position: Vector3Config
  rotation: Vector3Config
  scale: Vector3Config
}

export const getObject3DConfig = (): Object3DConfig => {
  return {
    vid: '',
    type: 'Object3D',
    castShadow: true,
    receiveShadow: true,
    lookAt: '',
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      x: 1,
      y: 1,
      z: 1
    }
  }
}