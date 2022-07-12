import { DoubleSide, MeshBasicMaterial, Mesh } from "three";

export class ImagePanel {
  constructor(info) {
    const texture = info.textureLoader.load(info.imgSrc);
    const material = new MeshBasicMaterial({
      map: texture,
      side: DoubleSide,
    });

    this.mesh = new Mesh(info.geometry, material);
    this.mesh.position.set(info.x, info.y, info.z);
    this.mesh.lookAt(0, 0, 0);

    // sphere 상태의 회전각을 저장해두자
    this.sphereRotationX = this.mesh.rotation.x;
    this.sphereRotationY = this.mesh.rotation.y;
    this.sphereRotationZ = this.mesh.rotation.z;

    info.scene.add(this.mesh);
  }
}
