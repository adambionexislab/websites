(function () {
  'use strict';

  var container = document.getElementById('hero-shader');
  if (!container || typeof THREE === 'undefined') return;

  var vertexShader = [
    'void main() {',
    '  gl_Position = vec4( position, 1.0 );',
    '}'
  ].join('\n');

  var fragmentShader = [
    '#define TWO_PI 6.2831853072',
    '#define PI 3.14159265359',
    'precision highp float;',
    'uniform vec2 resolution;',
    'uniform float time;',
    'void main(void) {',
    '  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);',
    '  float t = time * 0.05;',
    '  float lineWidth = 0.002;',
    '  vec3 color = vec3(0.0);',
    '  for(int j = 0; j < 3; j++){',
    '    for(int i = 0; i < 5; i++){',
    '      color[j] += lineWidth * float(i*i) / abs(',
    '        fract(t - 0.01*float(j) + float(i)*0.01) * 5.0',
    '        - length(uv)',
    '        + mod(uv.x + uv.y, 0.2)',
    '      );',
    '    }',
    '  }',
    '  gl_FragColor = vec4(color[0], color[1], color[2], 1.0);',
    '}'
  ].join('\n');

  var camera = new THREE.Camera();
  camera.position.z = 1;

  var scene    = new THREE.Scene();
  var geometry = new THREE.PlaneGeometry(2, 2);

  var uniforms = {
    time:       { type: 'f',  value: 1.0 },
    resolution: { type: 'v2', value: new THREE.Vector2() }
  };

  var material = new THREE.ShaderMaterial({
    uniforms:       uniforms,
    vertexShader:   vertexShader,
    fragmentShader: fragmentShader
  });

  scene.add(new THREE.Mesh(geometry, material));

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  function resize() {
    var w = container.clientWidth;
    var h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    uniforms.resolution.value.set(
      renderer.domElement.width,
      renderer.domElement.height
    );
  }

  resize();
  window.addEventListener('resize', resize, false);

  var animId;
  function animate() {
    animId = requestAnimationFrame(animate);
    uniforms.time.value += 0.05;
    renderer.render(scene, camera);
  }
  animate();

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animate();
    }
  });

}());
