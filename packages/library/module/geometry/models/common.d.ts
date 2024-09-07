import { Compiler, EngineSupport } from "@vis-three/tdcm";
import { BufferGeometry } from "three";
import { GeometryConfig } from "../GeometryInterface";
export declare const transfromAnchor: <T extends BufferGeometry, C extends GeometryConfig>(geometry: T, config: C) => T;
export declare const defineGeometryModel: {
    <ACf extends GeometryConfig = GeometryConfig, AObj extends BufferGeometry<import("three").NormalBufferAttributes> = BufferGeometry<import("three").NormalBufferAttributes>, ACtx extends object = object, ASrd extends object = object, AEg extends EngineSupport = EngineSupport, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<GeometryConfig, BufferGeometry<import("three").NormalBufferAttributes>, {}, {}, EngineSupport, Compiler<EngineSupport>, <C extends GeometryConfig, T extends BufferGeometry>(target: T, config: C) => T, Function>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>;
    extend<ECf extends GeometryConfig = GeometryConfig, EObj extends BufferGeometry<import("three").NormalBufferAttributes> = BufferGeometry<import("three").NormalBufferAttributes>, ECtx extends object = object, ESrd extends object = object, EEg extends EngineSupport = EngineSupport, ECpl extends Compiler<EEg> = Compiler<EEg>, ECra extends Function = Function, EDsp extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<GeometryConfig, BufferGeometry<import("three").NormalBufferAttributes>, {}, {}, EngineSupport, Compiler<EngineSupport>, <C extends GeometryConfig, T extends BufferGeometry>(target: T, config: C) => T, Function>) => import("@vis-three/tdcm").AbstractModelOption<ECf, EObj, ECtx, ESrd, EEg, ECpl, ECra, EDsp>): {
        <ACf extends ECf = ECf, AObj extends EObj = EObj, ACtx extends object = object, ASrd extends object = object, AEg extends EEg = EEg, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf, EObj, ECtx, ESrd, EEg, ECpl, ECra, EDsp>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ACtx, ESrd & ASrd, AEg, ACpl>;
        extend<ECf_1 extends ECf = ECf, EObj_1 extends EObj = EObj, ECtx_1 extends object = object, ESrd_1 extends object = object, EEg_1 extends EEg = EEg, ECpl_1 extends Compiler<EEg_1> = Compiler<EEg_1>, ECra_1 extends Function = Function, EDsp_1 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf, EObj, ECtx, ESrd, EEg, ECpl, ECra, EDsp>) => import("@vis-three/tdcm").AbstractModelOption<ECf_1, EObj_1, ECtx_1, ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>): {
            <ACf extends ECf_1 = ECf_1, AObj extends EObj_1 = EObj_1, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_1 = EEg_1, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_1, EObj_1, ECtx & ECtx_1, ESrd & ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ACtx, ESrd & ESrd_1 & ASrd, AEg, ACpl>;
            extend<ECf_2 extends ECf_1 = ECf_1, EObj_2 extends EObj_1 = EObj_1, ECtx_2 extends object = object, ESrd_2 extends object = object, EEg_2 extends EEg_1 = EEg_1, ECpl_2 extends Compiler<EEg_2> = Compiler<EEg_2>, ECra_2 extends Function = Function, EDsp_2 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_1, EObj_1, ECtx & ECtx_1, ESrd & ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>) => import("@vis-three/tdcm").AbstractModelOption<ECf_2, EObj_2, ECtx_2, ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>): {
                <ACf extends ECf_2 = ECf_2, AObj extends EObj_2 = EObj_2, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_2 = EEg_2, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_2, EObj_2, ECtx & ECtx_1 & ECtx_2, ESrd & ESrd_1 & ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ACtx, ESrd & ESrd_1 & ESrd_2 & ASrd, AEg, ACpl>;
                extend<ECf_3 extends ECf_2 = ECf_2, EObj_3 extends EObj_2 = EObj_2, ECtx_3 extends object = object, ESrd_3 extends object = object, EEg_3 extends EEg_2 = EEg_2, ECpl_3 extends Compiler<EEg_3> = Compiler<EEg_3>, ECra_3 extends Function = Function, EDsp_3 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_2, EObj_2, ECtx & ECtx_1 & ECtx_2, ESrd & ESrd_1 & ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>) => import("@vis-three/tdcm").AbstractModelOption<ECf_3, EObj_3, ECtx_3, ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>): {
                    <ACf extends ECf_3 = ECf_3, AObj extends EObj_3 = EObj_3, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_3 = EEg_3, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_3, EObj_3, ECtx & ECtx_1 & ECtx_2 & ECtx_3, ESrd & ESrd_1 & ESrd_2 & ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ACtx, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ASrd, AEg, ACpl>;
                    extend<ECf_4 extends ECf_3 = ECf_3, EObj_4 extends EObj_3 = EObj_3, ECtx_4 extends object = object, ESrd_4 extends object = object, EEg_4 extends EEg_3 = EEg_3, ECpl_4 extends Compiler<EEg_4> = Compiler<EEg_4>, ECra_4 extends Function = Function, EDsp_4 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_3, EObj_3, ECtx & ECtx_1 & ECtx_2 & ECtx_3, ESrd & ESrd_1 & ESrd_2 & ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>) => import("@vis-three/tdcm").AbstractModelOption<ECf_4, EObj_4, ECtx_4, ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>): {
                        <ACf extends ECf_4 = ECf_4, AObj extends EObj_4 = EObj_4, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_4 = EEg_4, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_4, EObj_4, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ACtx, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ASrd, AEg, ACpl>;
                        extend<ECf_5 extends ECf_4 = ECf_4, EObj_5 extends EObj_4 = EObj_4, ECtx_5 extends object = object, ESrd_5 extends object = object, EEg_5 extends EEg_4 = EEg_4, ECpl_5 extends Compiler<EEg_5> = Compiler<EEg_5>, ECra_5 extends Function = Function, EDsp_5 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_4, EObj_4, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>) => import("@vis-three/tdcm").AbstractModelOption<ECf_5, EObj_5, ECtx_5, ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>): {
                            <ACf extends ECf_5 = ECf_5, AObj extends EObj_5 = EObj_5, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_5 = EEg_5, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_5, EObj_5, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ACtx, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ASrd, AEg, ACpl>;
                            extend<ECf_6 extends ECf_5 = ECf_5, EObj_6 extends EObj_5 = EObj_5, ECtx_6 extends object = object, ESrd_6 extends object = object, EEg_6 extends EEg_5 = EEg_5, ECpl_6 extends Compiler<EEg_6> = Compiler<EEg_6>, ECra_6 extends Function = Function, EDsp_6 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_5, EObj_5, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>) => import("@vis-three/tdcm").AbstractModelOption<ECf_6, EObj_6, ECtx_6, ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>): {
                                <ACf extends ECf_6 = ECf_6, AObj extends EObj_6 = EObj_6, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_6 = EEg_6, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_6, EObj_6, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ACtx, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ASrd, AEg, ACpl>;
                                extend<ECf_7 extends ECf_6 = ECf_6, EObj_7 extends EObj_6 = EObj_6, ECtx_7 extends object = object, ESrd_7 extends object = object, EEg_7 extends EEg_6 = EEg_6, ECpl_7 extends Compiler<EEg_7> = Compiler<EEg_7>, ECra_7 extends Function = Function, EDsp_7 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_6, EObj_6, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>) => import("@vis-three/tdcm").AbstractModelOption<ECf_7, EObj_7, ECtx_7, ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>): {
                                    <ACf extends ECf_7 = ECf_7, AObj extends EObj_7 = EObj_7, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_7 = EEg_7, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_7, EObj_7, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ACtx, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ASrd, AEg, ACpl>;
                                    extend<ECf_8 extends ECf_7 = ECf_7, EObj_8 extends EObj_7 = EObj_7, ECtx_8 extends object = object, ESrd_8 extends object = object, EEg_8 extends EEg_7 = EEg_7, ECpl_8 extends Compiler<EEg_8> = Compiler<EEg_8>, ECra_8 extends Function = Function, EDsp_8 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_7, EObj_7, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>) => import("@vis-three/tdcm").AbstractModelOption<ECf_8, EObj_8, ECtx_8, ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>): {
                                        <ACf extends ECf_8 = ECf_8, AObj extends EObj_8 = EObj_8, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_8 = EEg_8, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_8, EObj_8, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ACtx, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ASrd, AEg, ACpl>;
                                        extend<ECf_9 extends ECf_8 = ECf_8, EObj_9 extends EObj_8 = EObj_8, ECtx_9 extends object = object, ESrd_9 extends object = object, EEg_9 extends EEg_8 = EEg_8, ECpl_9 extends Compiler<EEg_9> = Compiler<EEg_9>, ECra_9 extends Function = Function, EDsp_9 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_8, EObj_8, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>) => import("@vis-three/tdcm").AbstractModelOption<ECf_9, EObj_9, ECtx_9, ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>): {
                                            <ACf extends ECf_9 = ECf_9, AObj extends EObj_9 = EObj_9, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_9 = EEg_9, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_9, EObj_9, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>) => import("@vis-three/tdcm").ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): import("@vis-three/tdcm").ModelOption<ACf, AObj, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9 & ACtx, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9 & ASrd, AEg, ACpl>;
                                            extend<ECf_10 extends ECf_9 = ECf_9, EObj_10 extends EObj_9 = EObj_9, ECtx_10 extends object = object, ESrd_10 extends object = object, EEg_10 extends EEg_9 = EEg_9, ECpl_10 extends Compiler<EEg_10> = Compiler<EEg_10>, ECra_10 extends Function = Function, EDsp_10 extends Function = Function>(fun: (abstract: import("@vis-three/tdcm").AbstractModelOption<ECf_9, EObj_9, ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9, ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>) => import("@vis-three/tdcm").AbstractModelOption<ECf_10, EObj_10, ECtx_10, ESrd_10, EEg_10, ECpl_10, ECra_10, EDsp_10>): any;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
