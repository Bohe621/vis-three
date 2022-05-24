import { BoxBufferGeometry, Mesh, MeshBasicMaterial, } from "three";
import { MODULETYPE } from "../constants/MODULETYPE";
import { SolidObjectCompiler, } from "../solidObject/SolidObjectCompiler";
export class MeshCompiler extends SolidObjectCompiler {
    COMPILER_NAME = MODULETYPE.MESH;
    replaceMaterial = new MeshBasicMaterial({
        color: "rgb(150, 150, 150)",
    });
    replaceGeometry = new BoxBufferGeometry(10, 10, 10);
    constructor() {
        super();
    }
    getReplaceMaterial() {
        return this.replaceMaterial;
    }
    getReplaceGeometry() {
        return this.replaceGeometry;
    }
    add(vid, config) {
        const object = new Mesh();
        this.map.set(vid, object);
        this.weakMap.set(object, vid);
        super.add(vid, config);
        return this;
    }
    dispose() {
        super.dispose();
        this.replaceGeometry.dispose();
        this.replaceMaterial.dispose();
        return this;
    }
}
//# sourceMappingURL=MeshCompiler.js.map