import * as THREE from 'three';

export class Fish {
    constructor(x, y, z, color, initialDirection) {
        this.object = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 24, 24),
            new THREE.MeshStandardMaterial({ color: color })
        );
        this.x = x;
        this.y = y;
        this.z = z;
        this.object.position.set(this.x, this.y, this.z);
        this.name = "fish";
        this.speed = 0.05;
        this.direction = new THREE.Vector3(0, 0, THREE.MathUtils.degToRad(initialDirection || 0)); // Convert to radians
        this.velocity = new THREE.Vector3();
        this.updateVelocity();
    }

    setDirection(x, y, z) {
        this.direction.set(x, y, z);

        // Normalize the direction vector to ensure consistent speed in any direction
        this.direction.normalize();

        // Update the velocity based on the new direction
        this.updateVelocity();
    }

    updateVelocity() {
        this.velocity.set(Math.cos(this.direction.x), Math.sin(this.direction.y), Math.sin(this.direction.z));
    }

    move() {
        // Update the fish's position based on its current velocity
        this.object.position.add(this.velocity.clone().multiplyScalar(this.speed));
    }
}

