import {
  Engine, Scene, SceneLoader, FreeCamera, Vector3, PointLight,
} from '@babylonjs/core';

const createScene = async (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  // eslint-disable-next-line no-new
  const light = new PointLight('Omni', new Vector3(20, 20, 100), scene);

  const url = 'https://raw.githubusercontent.com/n0b-coder/MeshLibrary/main/';
  const model = JSON.parse(window.localStorage.getItem('modelData'));

  SceneLoader.ImportMesh(
    '',
    url, model.model,
    scene,
    () => {
      scene.createDefaultCameraOrLight(true, true, true);
      scene.activeCamera.alpha += Math.PI;
      console.log('scene loader after');
    },
  );

  scene.registerBeforeRender(() => {
    light.position = camera.position;
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };

export default {};
