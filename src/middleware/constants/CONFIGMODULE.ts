import { CONFIGTYPE } from "./configType";
import { MODULETYPE } from "./MODULETYPE";

export const CONFIGMODULE = {
  [CONFIGTYPE.IMAGETEXTURE]: MODULETYPE.TEXTURE,
  [CONFIGTYPE.CUBETEXTURE]: MODULETYPE.TEXTURE,
  [CONFIGTYPE.CANVASTEXTURE]: MODULETYPE.TEXTURE,
  [CONFIGTYPE.VIDEOTEXTURE]: MODULETYPE.TEXTURE,

  [CONFIGTYPE.MESHSTANDARDMATERIAL]: MODULETYPE.MATERIAL,
  [CONFIGTYPE.MESHPHONGMATERIAL]: MODULETYPE.MATERIAL,
  [CONFIGTYPE.SPRITEMATERIAL]: MODULETYPE.MATERIAL,
  [CONFIGTYPE.LINEBASICMATERIAL]: MODULETYPE.MATERIAL,
  [CONFIGTYPE.POINTSMATERIAL]: MODULETYPE.MATERIAL,

  [CONFIGTYPE.AMBIENTLIGHT]: MODULETYPE.LIGHT,
  [CONFIGTYPE.SPOTLIGHT]: MODULETYPE.LIGHT,
  [CONFIGTYPE.POINTLIGHT]: MODULETYPE.LIGHT,
  [CONFIGTYPE.DIRECTIONALLIGHT]: MODULETYPE.LIGHT,

  [CONFIGTYPE.BOXGEOMETRY]: MODULETYPE.GEOMETRY,
  [CONFIGTYPE.SPHEREGEOMETRY]: MODULETYPE.GEOMETRY,
  [CONFIGTYPE.LOADGEOMETRY]: MODULETYPE.GEOMETRY,
  [CONFIGTYPE.PLANEGEOMETRY]: MODULETYPE.GEOMETRY,
  [CONFIGTYPE.CIRCLEGEOMETRY]: MODULETYPE.GEOMETRY,
  [CONFIGTYPE.CONEGEOMETRY]: MODULETYPE.GEOMETRY,
  [CONFIGTYPE.CIRCLEGEOMETRY]: MODULETYPE.GEOMETRY,
  [CONFIGTYPE.EDGESGEOMETRY]: MODULETYPE.GEOMETRY,

  [CONFIGTYPE.SPRITE]: MODULETYPE.SPRITE,
  [CONFIGTYPE.LINE]: MODULETYPE.LINE,
  [CONFIGTYPE.MESH]: MODULETYPE.MESH,
  [CONFIGTYPE.POINTS]: MODULETYPE.POINTS,
  [CONFIGTYPE.GROUP]: MODULETYPE.GROUP,

  [CONFIGTYPE.PERSPECTIVECAMERA]: MODULETYPE.CAMERA,
  [CONFIGTYPE.ORTHOGRAPHICCAMERA]: MODULETYPE.CAMERA,

  [CONFIGTYPE.WEBGLRENDERER]: MODULETYPE.RENDERER,

  [CONFIGTYPE.SCENE]: MODULETYPE.SCENE,

  [CONFIGTYPE.TRNASFORMCONTROLS]: MODULETYPE.CONTROLS,
  [CONFIGTYPE.ORBITCONTROLS]: MODULETYPE.CONTROLS,

  [CONFIGTYPE.SMAAPASS]: MODULETYPE.PASS,
  [CONFIGTYPE.UNREALBLOOMPASS]: MODULETYPE.PASS,
};
