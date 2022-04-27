import {
  getAmbientLightConfig,
  getSpotLightConfig,
  getPointLightConfig,
  getDirectionalLightConfig,
} from "../light/LightConfig";
import {
  getBoxGeometryConfig,
  getSphereGeometryConfig,
  getLoadGeometryConfig,
  getPlaneGeometryConfig,
  getCircleGeometryConfig,
  getConeGeometryConfig,
  getCylinderGeometryConfig,
  getEdgesGeometryConfig,
} from "../geometry/GeometryConfig";
import {
  getCanvasTextureConfig,
  getCubeTextureConfig,
  getImageTextureConfig,
  getVideoTextureConfig,
} from "../texture/TextureConfig";
import {
  getLineBasicMaterialConfig,
  getMeshPhongMaterialConfig,
  getMeshStandardMaterialConfig,
  getPointsMaterialConfig,
  getSpriteMaterialConfig,
} from "../material/MaterialConfig";
import {
  getOrthographicCameraConfig,
  getPerspectiveCameraConfig,
} from "../camera/CameraConfig";
import { getWebGLRendererConfig } from "../renderer/RendererConfig";
import { getSceneConfig } from "../scene/SceneConfig";
import {
  getOrbitControlsConfig,
  getTransformControlsConfig,
} from "../controls/ControlsConfig";
import { getSpriteConfig } from "../sprite/SpriteConfig";
import { getMeshConfig } from "../mesh/MeshConfig";
import { getPointsConfig } from "../points/PointsConfig";
import { getLineConfig } from "../line/LineConfig";
import { getGroupConfig } from "../group/GroupConfig";
import {
  getSMAAPassConfig,
  getUnrealBloomPassConfig,
} from "../pass/PassConfig";
import { CONFIGTYPE } from "./configType";

export const CONFIGFACTORY = {
  [CONFIGTYPE.IMAGETEXTURE]: getImageTextureConfig,
  [CONFIGTYPE.CUBETEXTURE]: getCubeTextureConfig,
  [CONFIGTYPE.CANVASTEXTURE]: getCanvasTextureConfig,
  [CONFIGTYPE.VIDEOTEXTURE]: getVideoTextureConfig,

  [CONFIGTYPE.MESHSTANDARDMATERIAL]: getMeshStandardMaterialConfig,
  [CONFIGTYPE.MESHPHONGMATERIAL]: getMeshPhongMaterialConfig,
  [CONFIGTYPE.SPRITEMATERIAL]: getSpriteMaterialConfig,
  [CONFIGTYPE.LINEBASICMATERIAL]: getLineBasicMaterialConfig,
  [CONFIGTYPE.POINTSMATERIAL]: getPointsMaterialConfig,

  [CONFIGTYPE.AMBIENTLIGHT]: getAmbientLightConfig,
  [CONFIGTYPE.SPOTLIGHT]: getSpotLightConfig,
  [CONFIGTYPE.POINTLIGHT]: getPointLightConfig,
  [CONFIGTYPE.DIRECTIONALLIGHT]: getDirectionalLightConfig,

  [CONFIGTYPE.BOXGEOMETRY]: getBoxGeometryConfig,
  [CONFIGTYPE.SPHEREGEOMETRY]: getSphereGeometryConfig,
  [CONFIGTYPE.LOADGEOMETRY]: getLoadGeometryConfig,
  [CONFIGTYPE.PLANEGEOMETRY]: getPlaneGeometryConfig,
  [CONFIGTYPE.CIRCLEGEOMETRY]: getCircleGeometryConfig,
  [CONFIGTYPE.CONEGEOMETRY]: getConeGeometryConfig,
  [CONFIGTYPE.CYLINDERGEOMETRY]: getCylinderGeometryConfig,
  [CONFIGTYPE.EDGESGEOMETRY]: getEdgesGeometryConfig,

  [CONFIGTYPE.SPRITE]: getSpriteConfig,
  [CONFIGTYPE.LINE]: getLineConfig,
  [CONFIGTYPE.MESH]: getMeshConfig,
  [CONFIGTYPE.POINTS]: getPointsConfig,
  [CONFIGTYPE.GROUP]: getGroupConfig,

  [CONFIGTYPE.PERSPECTIVECAMERA]: getPerspectiveCameraConfig,
  [CONFIGTYPE.ORTHOGRAPHICCAMERA]: getOrthographicCameraConfig,

  [CONFIGTYPE.WEBGLRENDERER]: getWebGLRendererConfig,

  [CONFIGTYPE.SCENE]: getSceneConfig,

  [CONFIGTYPE.TRNASFORMCONTROLS]: getTransformControlsConfig,
  [CONFIGTYPE.ORBITCONTROLS]: getOrbitControlsConfig,

  [CONFIGTYPE.SMAAPASS]: getSMAAPassConfig,
  [CONFIGTYPE.UNREALBLOOMPASS]: getUnrealBloomPassConfig,
};
