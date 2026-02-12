import * as THREE from 'three';

interface OrbitData {
    radius: number;
    angle: number;
    speed: number;
    yOffset: number;
    yOscillationSpeed: number;
    yOscillationAmp: number;
    baseY: number;
}

interface PulseData {
    age: number;
    maxAge: number;
    growthSpeed: number;
}

interface DataFlowParticleData {
    progress: number;
    speed: number;
    nodeIndex: number;
    startPos: THREE.Vector3;
    endPos: THREE.Vector3;
}

export class ThamaniNetwork {
    private renderer: THREE.WebGLRenderer;
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private title: string;
    private description: string;
    private colors: {
        primary: number;
        accent: number;
        secondary: number;
        background: number;
    };
    private nodes: THREE.Mesh[] = [];
    private pulses: THREE.Mesh[] = [];
    private connections!: THREE.LineSegments;
    private particleSystem!: THREE.Points;
    private dataFlowParticles: THREE.Mesh[] = [];
    private centralLogo?: THREE.Sprite;
    private glowSphere!: THREE.Mesh;
    private lastPulseTime: number = 0;
    private nextPulseDelay: number = 0;

    constructor(renderer: THREE.WebGLRenderer) {
        this.renderer = renderer;
        this.title = 'Thamani Pulse Network';
        this.description = 'A sophisticated 3D visualization representing the cardiovascular system as an interconnected network of pulsing nodes and flowing connections.';

        // Configuration
        this.colors = {
            primary: 0xC41E3A,   // Deep Red
            accent: 0xFF3B3B,    // Bright Red
            secondary: 0x1A2332, // Dark Blue-Gray
            background: 0x0A0E14 // Darker Background for contrast
        };
    }

    init(width: number, height: number) {
        // Setup Scene
        this.scene = new THREE.Scene();
        // Add subtle fog for depth
        this.scene.fog = new THREE.FogExp2(this.colors.background, 0.02);

        // Setup Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            width / height,
            0.1,
            1000
        );

        // Responsive camera positioning
        const isPortrait = height > width;
        this.camera.position.z = isPortrait ? 18 : 12;
        this.camera.position.y = 2;
        this.camera.lookAt(0, 0, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const centerLight = new THREE.PointLight(this.colors.accent, 2, 20);
        centerLight.position.set(0, 0, 0);
        this.scene.add(centerLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
        keyLight.position.set(5, 5, 5);
        this.scene.add(keyLight);

        // Create Elements
        this.createCentralLogo();
        this.createOrbitingNodes();
        this.createConnections();
        this.createParticleField();

        // Initial Pulse Creation
        this.lastPulseTime = 0;
        this.nextPulseDelay = 0;
    }

    private createCentralLogo() {
        // Load the Thamani logo
        const textureLoader = new THREE.TextureLoader();
        // Adjust path for GitHub Pages deployment
        const logoPath = process.env.NODE_ENV === 'production'
            ? '/thamani-web/assets/thamani-logo.png'
            : '/assets/thamani-logo.png';

        const texture = textureLoader.load(logoPath);
        const material = new THREE.SpriteMaterial({
            map: texture,
            color: 0xffffff,
            transparent: true,
            opacity: 0.9
        });
        this.centralLogo = new THREE.Sprite(material);
        this.centralLogo.scale.set(3, 3, 1);
        this.scene.add(this.centralLogo);

        // Add a subtle glow behind the logo
        const glowGeometry = new THREE.SphereGeometry(1.2, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: this.colors.primary,
            transparent: true,
            opacity: 0.3,
            side: THREE.BackSide
        });
        this.glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
        this.scene.add(this.glowSphere);
    }

    private createOrbitingNodes() {
        const nodeCount = 15;
        const geometry = new THREE.SphereGeometry(0.15, 16, 16);
        const material = new THREE.MeshPhongMaterial({
            color: this.colors.accent,
            emissive: this.colors.primary,
            emissiveIntensity: 0.5,
            shininess: 100
        });

        for (let i = 0; i < nodeCount; i++) {
            const node = new THREE.Mesh(geometry, material);

            // Random orbit parameters - REDUCED SPEED
            const orbitData: OrbitData = {
                radius: 4 + Math.random() * 3,
                angle: Math.random() * Math.PI * 2,
                speed: (0.05 + Math.random() * 0.1) * (Math.random() < 0.5 ? 1 : -1),
                yOffset: (Math.random() - 0.5) * 4,
                yOscillationSpeed: 0.2 + Math.random() * 0.3,
                yOscillationAmp: 0.5 + Math.random() * 1.0,
                baseY: (Math.random() - 0.5) * 2
            };

            node.userData = orbitData;

            // Set initial position
            node.position.x = Math.cos(orbitData.angle) * orbitData.radius;
            node.position.z = Math.sin(orbitData.angle) * orbitData.radius;
            node.position.y = orbitData.baseY;

            this.nodes.push(node);
            this.scene.add(node);
        }
    }

    private createConnections() {
        // Create geometry for lines connecting nodes to center
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({
            color: this.colors.primary,
            transparent: true,
            opacity: 0.2,
            blending: THREE.AdditiveBlending
        });

        // 2 points per line (center -> node)
        const positions = new Float32Array(this.nodes.length * 2 * 3);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        this.connections = new THREE.LineSegments(geometry, material);
        this.scene.add(this.connections);
    }

    private createPulseWave() {
        const geometry = new THREE.RingGeometry(0.5, 0.6, 64);

        // Create gradient material using vertex colors
        const colors = new Float32Array(geometry.attributes.position.count * 3);
        for (let i = 0; i < colors.length; i += 3) {
            // Inner ring - bright red
            const ratio = i / colors.length;
            const color = new THREE.Color().lerpColors(
                new THREE.Color(this.colors.accent), // Bright Red (inner)
                new THREE.Color(this.colors.primary), // Deep Red (outer)
                ratio
            );
            colors[i] = color.r;
            colors[i + 1] = color.g;
            colors[i + 2] = color.b;
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.MeshBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });

        const pulse = new THREE.Mesh(geometry, material);
        pulse.rotation.x = Math.PI / 2;
        pulse.rotation.x += (Math.random() - 0.5) * 0.2;
        pulse.rotation.z += (Math.random() - 0.5) * 0.2;

        const pulseData: PulseData = {
            age: 0,
            maxAge: 1.0,
            growthSpeed: 3.5
        };
        pulse.userData = pulseData;

        this.scene.add(pulse);
        this.pulses.push(pulse);
    }

    private createParticleField() {
        const particleCount = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 30;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            color: this.colors.secondary,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        this.particleSystem = new THREE.Points(geometry, material);
        this.scene.add(this.particleSystem);
    }

    private createDataFlowParticle(nodeIndex: number) {
        const geometry = new THREE.SphereGeometry(0.08, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: this.colors.accent,
            transparent: true,
            opacity: 0.8
        });

        const particle = new THREE.Mesh(geometry, material);

        // Start at node position
        const node = this.nodes[nodeIndex];
        particle.position.copy(node.position);

        const particleData: DataFlowParticleData = {
            progress: 0,
            speed: 0.015 + Math.random() * 0.01,
            nodeIndex: nodeIndex,
            startPos: node.position.clone(),
            endPos: new THREE.Vector3(0, 0, 0)
        };
        particle.userData = particleData;

        this.scene.add(particle);
        this.dataFlowParticles.push(particle);
    }

    animate() {
        const now = Date.now() * 0.001;

        // 1. Animate Central Logo (Heartbeat)
        if (this.centralLogo) {
            const beatCycle = now % 0.5;
            let beatIntensity = 0;

            if (beatCycle < 0.1) {
                beatIntensity = Math.sin((beatCycle / 0.1) * Math.PI);
            } else if (beatCycle < 0.2) {
                beatIntensity = Math.sin(((beatCycle - 0.1) / 0.1) * Math.PI) * 0.3;
            }

            const beatScale = 3 + beatIntensity * 0.15;
            this.centralLogo.scale.set(beatScale, beatScale, 1);

            if (this.glowSphere) {
                const glowScale = 1.0 + beatIntensity * 0.2;
                this.glowSphere.scale.set(glowScale, glowScale, glowScale);
            }
        }

        // 2. Animate Orbiting Nodes
        const positions = this.connections.geometry.attributes.position.array as Float32Array;

        this.nodes.forEach((node, index) => {
            const data = node.userData as OrbitData;

            // Update angle
            data.angle += data.speed * 0.01;

            // Update Position
            node.position.x = Math.cos(data.angle) * data.radius;
            node.position.z = Math.sin(data.angle) * data.radius;
            node.position.y = data.baseY + Math.sin(now * data.yOscillationSpeed) * data.yOscillationAmp;

            // Update Connection Lines
            positions[index * 6] = 0;
            positions[index * 6 + 1] = 0;
            positions[index * 6 + 2] = 0;

            positions[index * 6 + 3] = node.position.x;
            positions[index * 6 + 4] = node.position.y;
            positions[index * 6 + 5] = node.position.z;
        });

        this.connections.geometry.attributes.position.needsUpdate = true;

        // 3. Pulse Wave Pattern: 1 ring per second
        const timeSinceLastPulse = now - this.lastPulseTime;

        if (timeSinceLastPulse >= 1.0) {
            this.createPulseWave();
            this.lastPulseTime = now;
        }

        // Update existing pulses
        for (let i = this.pulses.length - 1; i >= 0; i--) {
            const pulse = this.pulses[i];
            const data = pulse.userData as PulseData;
            const age = data.age + 0.016;

            if (age > data.maxAge) {
                this.scene.remove(pulse);
                pulse.geometry.dispose();
                (pulse.material as THREE.Material).dispose();
                this.pulses.splice(i, 1);
            } else {
                data.age = age;
                const scale = 1 + age * data.growthSpeed;
                pulse.scale.set(scale, scale, 1);

                // Fade out
                (pulse.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - age / data.maxAge);
            }
        }

        // 4. Create data flow particles periodically
        if (Math.random() < 0.03) {
            const randomNodeIndex = Math.floor(Math.random() * this.nodes.length);
            this.createDataFlowParticle(randomNodeIndex);
        }

        // 5. Animate data flow particles
        for (let i = this.dataFlowParticles.length - 1; i >= 0; i--) {
            const particle = this.dataFlowParticles[i];
            const data = particle.userData as DataFlowParticleData;

            data.progress += data.speed;

            if (data.progress >= 1.0) {
                // Remove particle
                this.scene.remove(particle);
                particle.geometry.dispose();
                (particle.material as THREE.Material).dispose();
                this.dataFlowParticles.splice(i, 1);
            } else {
                // Update position along the line from node to center
                const startPos = this.nodes[data.nodeIndex].position;
                particle.position.lerpVectors(startPos, data.endPos, data.progress);

                // Fade out as it reaches center
                (particle.material as THREE.MeshBasicMaterial).opacity = 0.8 * (1 - data.progress);
            }
        }

        // 6. Animate Particle Field
        if (this.particleSystem) {
            this.particleSystem.rotation.y += 0.0005;
        }
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    onResize(width: number, height: number) {
        this.camera.aspect = width / height;

        // Adjust camera distance for mobile/portrait
        const isPortrait = height > width;
        this.camera.position.z = isPortrait ? 18 : 12;

        this.camera.updateProjectionMatrix();
    }

    dispose() {
        // Cleanup geometries and materials
        if (this.centralLogo) {
            this.centralLogo.material.map?.dispose();
            this.centralLogo.material.dispose();
        }
        if (this.glowSphere) {
            this.glowSphere.geometry.dispose();
            (this.glowSphere.material as THREE.Material).dispose();
        }
        if (this.connections) {
            this.connections.geometry.dispose();
            (this.connections.material as THREE.Material).dispose();
        }
        if (this.particleSystem) {
            this.particleSystem.geometry.dispose();
            (this.particleSystem.material as THREE.Material).dispose();
        }
        this.nodes.forEach(node => {
            node.geometry.dispose();
            (node.material as THREE.Material).dispose();
        });
        this.pulses.forEach(pulse => {
            pulse.geometry.dispose();
            (pulse.material as THREE.Material).dispose();
        });
        this.dataFlowParticles.forEach(particle => {
            particle.geometry.dispose();
            (particle.material as THREE.Material).dispose();
        });
    }
}
