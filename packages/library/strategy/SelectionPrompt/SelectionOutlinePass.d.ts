import { Color, Matrix4, MeshDepthMaterial, Object3D, OrthographicCamera, PerspectiveCamera, Scene, ShaderMaterial, Texture, Vector2, WebGLRenderTarget, WebGLRenderer } from "three";
import { FullScreenQuad, Pass } from "three/examples/jsm/postprocessing/Pass.js";
export declare class SelectionOutlinePass extends Pass {
    static BlurDirectionX: Vector2;
    static BlurDirectionY: Vector2;
    renderCamera: PerspectiveCamera | OrthographicCamera;
    renderScene: Scene;
    resolution: Vector2;
    selected: Object3D[];
    visibleEdgeColor: Color;
    hiddenEdgeColor: Color;
    edgeGlow: number;
    usePatternTexture: boolean;
    edgeThickness: number;
    edgeStrength: number;
    downSampleRatio: number;
    pulsePeriod: number;
    patternTexture: Texture | null;
    msaa: number;
    _oldClearColor: Color;
    oldClearAlpha: number;
    fsQuad: FullScreenQuad;
    tempPulseColor1: Color;
    tempPulseColor2: Color;
    textureMatrix: Matrix4;
    renderTargetBlurBuffer1: WebGLRenderTarget;
    renderTargetBlurBuffer2: WebGLRenderTarget;
    renderTargetMaskBuffer: WebGLRenderTarget;
    renderTargetDepthBuffer: WebGLRenderTarget;
    renderTargetMaskDownSampleBuffer: WebGLRenderTarget;
    renderTargetEdgeBuffer1: WebGLRenderTarget;
    renderTargetEdgeBuffer2: WebGLRenderTarget;
    depthMaterial: MeshDepthMaterial;
    prepareMaskMaterial: ShaderMaterial;
    edgeDetectionMaterial: ShaderMaterial;
    separableBlurMaterial1: ShaderMaterial;
    separableBlurMaterial2: ShaderMaterial;
    overlayMaterial: ShaderMaterial;
    materialCopy: ShaderMaterial;
    private cacheParents;
    constructor(resolution: Vector2, camera: PerspectiveCamera | OrthographicCamera, selected: Object3D[]);
    private getSeperableBlurMaterial;
    dispose(): void;
    setSize(width: number, height: number): void;
    updateTextureMatrix(): void;
    changeParentOfSelectedObjects(flag: boolean): void;
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, deltaTime: number, maskActive: boolean): void;
}
