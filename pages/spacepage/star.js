import * as THREE from 'three';

//star class. has a position and a mesh
export class Star {
    constructor() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        // green color
        this.color = 0x00ff00;
        const material = new THREE.MeshStandardMaterial({ color: this.color });
        const star = new THREE.Mesh(geometry, material);
        this.mesh = star;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.position = [this.x, this.y, this.z];
    }
}