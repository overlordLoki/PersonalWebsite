import * as THREE from 'three';


export class Star {
    constructor(x,y,z ,color) {
        this.object = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 24, 24),
            new THREE.MeshStandardMaterial({ color: color })
        );
        this.object.position.set(x,y,z);
        this.pulsateDelay = Math.random() * 2 * Math.PI;
        this.pulsateSpeed = 0.5 + Math.random() * 1;
        this.name="star";
    }
    update() {
        const pulsate = Math.sin(this.object.pulsateSpeed * (Date.now() * 0.001 + this.object.pulsateDelay));
        this.object.scale.setScalar(0.25 + pulsate * 0.1);
    }
}

export function connectStars(star1, star2) {
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(star1.object.position);
    points.push(star2.object.position);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    return line;
}

export class tile{
    constructor(x,y,z, color){
        this.object = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshStandardMaterial({ color: color })
        );
        this.object.position.set(x,y,z);
    }
}