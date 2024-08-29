import { MagnificationTextureFilter, Mapping, PixelFormat, Texture, TextureDataType, TextureFilter, Wrapping } from "three";
export declare class VideoTexture extends Texture {
    isVideoTexture: boolean;
    constructor(video: HTMLVideoElement, mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: MagnificationTextureFilter, minFilter?: TextureFilter, format?: PixelFormat, type?: TextureDataType, anisotropy?: number);
    clone(): any;
    update(): void;
}
