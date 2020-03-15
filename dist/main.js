/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FaceNormalsHelper, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightProbeHelper, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PositionalAudioHelper, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RectAreaLightHelper, RedFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VertexNormalsHelper, VideoTexture, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var indexOf = function (xs, item) {\n    if (xs.indexOf) return xs.indexOf(item);\n    else for (var i = 0; i < xs.length; i++) {\n        if (xs[i] === item) return i;\n    }\n    return -1;\n};\nvar Object_keys = function (obj) {\n    if (Object.keys) return Object.keys(obj)\n    else {\n        var res = [];\n        for (var key in obj) res.push(key)\n        return res;\n    }\n};\n\nvar forEach = function (xs, fn) {\n    if (xs.forEach) return xs.forEach(fn)\n    else for (var i = 0; i < xs.length; i++) {\n        fn(xs[i], i, xs);\n    }\n};\n\nvar defineProp = (function() {\n    try {\n        Object.defineProperty({}, '_', {});\n        return function(obj, name, value) {\n            Object.defineProperty(obj, name, {\n                writable: true,\n                enumerable: false,\n                configurable: true,\n                value: value\n            })\n        };\n    } catch(e) {\n        return function(obj, name, value) {\n            obj[name] = value;\n        };\n    }\n}());\n\nvar globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',\n'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',\n'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',\n'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',\n'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];\n\nfunction Context() {}\nContext.prototype = {};\n\nvar Script = exports.Script = function NodeScript (code) {\n    if (!(this instanceof Script)) return new Script(code);\n    this.code = code;\n};\n\nScript.prototype.runInContext = function (context) {\n    if (!(context instanceof Context)) {\n        throw new TypeError(\"needs a 'context' argument.\");\n    }\n    \n    var iframe = document.createElement('iframe');\n    if (!iframe.style) iframe.style = {};\n    iframe.style.display = 'none';\n    \n    document.body.appendChild(iframe);\n    \n    var win = iframe.contentWindow;\n    var wEval = win.eval, wExecScript = win.execScript;\n\n    if (!wEval && wExecScript) {\n        // win.eval() magically appears when this is called in IE:\n        wExecScript.call(win, 'null');\n        wEval = win.eval;\n    }\n    \n    forEach(Object_keys(context), function (key) {\n        win[key] = context[key];\n    });\n    forEach(globals, function (key) {\n        if (context[key]) {\n            win[key] = context[key];\n        }\n    });\n    \n    var winKeys = Object_keys(win);\n\n    var res = wEval.call(win, this.code);\n    \n    forEach(Object_keys(win), function (key) {\n        // Avoid copying circular objects like `top` and `window` by only\n        // updating existing context properties or new properties in the `win`\n        // that was only introduced after the eval.\n        if (key in context || indexOf(winKeys, key) === -1) {\n            context[key] = win[key];\n        }\n    });\n\n    forEach(globals, function (key) {\n        if (!(key in context)) {\n            defineProp(context, key, win[key]);\n        }\n    });\n    \n    document.body.removeChild(iframe);\n    \n    return res;\n};\n\nScript.prototype.runInThisContext = function () {\n    return eval(this.code); // maybe...\n};\n\nScript.prototype.runInNewContext = function (context) {\n    var ctx = Script.createContext(context);\n    var res = this.runInContext(ctx);\n\n    if (context) {\n        forEach(Object_keys(ctx), function (key) {\n            context[key] = ctx[key];\n        });\n    }\n\n    return res;\n};\n\nforEach(Object_keys(Script.prototype), function (name) {\n    exports[name] = Script[name] = function (code) {\n        var s = Script(code);\n        return s[name].apply(s, [].slice.call(arguments, 1));\n    };\n});\n\nexports.isContext = function (context) {\n    return context instanceof Context;\n};\n\nexports.createScript = function (code) {\n    return exports.Script(code);\n};\n\nexports.createContext = Script.createContext = function (context) {\n    var copy = new Context();\n    if(typeof context === 'object') {\n        forEach(Object_keys(context), function (key) {\n            copy[key] = context[key];\n        });\n    }\n    return copy;\n};\n\n\n//# sourceURL=webpack:///./node_modules/vm-browserify/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vm */ \"./node_modules/vm-browserify/index.js\");\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\nvar camera =new three__WEBPACK_IMPORTED_MODULE_0__[\"OrthographicCamera\"](-100,100,-100,100,-100,1000)\r\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({antialias:true});\r\n\r\nrenderer.setClearColor(\"#fff\");\r\nrenderer.setSize( 1000,1000 );\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\nvar Robot = new three__WEBPACK_IMPORTED_MODULE_0__[\"Object3D\"]();\r\nscene.add( Robot );\r\nRobot.rotation.y-=Math.PI/4\r\n\r\nvar LeftLeg = new three__WEBPACK_IMPORTED_MODULE_0__[\"Object3D\"]();\r\n\r\n\r\n//Leg Socket\r\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"]( 4, 32, 32 );\r\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( {color: 0xffff00} );\r\nvar LegSocket = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material );\r\nvar edges = new three__WEBPACK_IMPORTED_MODULE_0__[\"EdgesHelper\"](LegSocket, 0x003333);\r\nedges.material.linewidth = 0.5;\r\nLegSocket.add(edges)\r\nLegSocket.translateY(13)\r\n\r\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"ConeGeometry\"]( 10, 20, 4 );\r\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( {color: 0xff8f00} );\r\nvar cone = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material );\r\nscene.add( cone );\r\nvar edges = new three__WEBPACK_IMPORTED_MODULE_0__[\"EdgesHelper\"](cone, 0xff3333);\r\nedges.material.linewidth = 0.5;\r\ncone.add(edges)\r\ncone.translateX(50)\r\n\r\n//Leg Upper\r\nvar Leggeo = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"]( 8,20,8 );\r\nvar Legmat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( { color:0xffbf00,vertexColors: three__WEBPACK_IMPORTED_MODULE_0__[\"FaceColors\"]} );\r\nvar Leg = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( Leggeo, Legmat );\r\nvar edges = new three__WEBPACK_IMPORTED_MODULE_0__[\"EdgesHelper\"](Leg, 0xff3333);\r\nedges.material.linewidth = 0.5;\r\nLeg.add( edges );\r\n\r\n\r\n//Leg Lower\r\nvar Thighgeo = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"]( 8,20,8 );\r\nvar Thighmat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( { color:0xffbf00,vertexColors: three__WEBPACK_IMPORTED_MODULE_0__[\"FaceColors\"]} );\r\nvar Thigh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( Thighgeo, Thighmat );\r\nThigh.position.y+=25\r\nvar edges = new three__WEBPACK_IMPORTED_MODULE_0__[\"EdgesHelper\"](Thigh, 0xff3333);\r\nedges.material.linewidth = 0.5;\r\nThigh.add(edges)\r\n\r\n\r\n//Drawing Leg\r\nLeftLeg.add(LegSocket)\r\nLeftLeg.add(Leg)\r\nLeftLeg.add(Thigh)\r\n\r\n//Right Leg\r\nvar RightLeg=LeftLeg.clone()\r\nRightLeg.position.x+=20\r\n\r\n//Adding Prts in Robot\r\nRobot.add( LeftLeg );\r\nRobot.add( RightLeg );\r\n\r\nRobot.position.x-=20\r\nconsole.log(\"Robot\",Robot)\r\n\r\nvar rotationFactor=0.01\r\nvar rotationQuant=0\r\n\r\nfunction moveLeg(){\r\n  if(rotationQuant<=Math.PI/4){\r\n    // rotationQuant+=0.01\r\n    // LeftLeg.children[2].rotation.x+=rotationFactor\r\n  }else if(rotationQuant>=0){\r\n    // LeftLeg.children[2].rotation.x-=0.01\r\n    \r\n    // rotationQuant=rotationQuant-0.01\r\n    //LeftLeg.position.z+=0.5\r\n  }\r\n}\r\n\r\n\r\n\r\nvar render = function () {\r\n  cone.rotation.y+=0.01\r\n  moveLeg()\r\n  // LeftLeg.children[1].rotation.x+=0.01\r\n  // RightLeg.children[1].rotation.x+=0.01\r\n\r\n  // LeftLeg.children[2].rotation.x+=0.01\r\n  // RightLeg.children[2].rotation.x+=0.01\r\n   // Robot.rotation.x+=0.01\r\n    requestAnimationFrame( render );\r\n    renderer.render(scene, camera);\r\n};\r\n\r\nrender();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });