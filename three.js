console.log('wordasld');

export default {
  methods: {
    initializeThree() {
      // Initialize scene
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.1,
        60
      );
      console.log('scene', scene);
    },
  },
};
