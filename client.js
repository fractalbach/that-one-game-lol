(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'client'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'client'.");
    }
    root.client = factory(typeof client === 'undefined' ? {} : client, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var getCallableRef = Kotlin.getCallableRef;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwUPAE = Kotlin.throwUPAE;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var padEnd = Kotlin.kotlin.text.padEnd_vrc1nu$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Exception = Kotlin.kotlin.Exception;
  var Scene = THREE.Scene;
  var WebGLRenderer_init = THREE.WebGLRenderer;
  var Fog = THREE.Fog;
  var Color_init = THREE.Color;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Vector3 = THREE.Vector3;
  var Light = THREE.Light;
  var PerspectiveCamera_init = THREE.PerspectiveCamera;
  var Euler = THREE.Euler;
  var equals = Kotlin.equals;
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.text.slice_fc3b62$;
  var Object3D = THREE.Object3D;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Pair = Kotlin.kotlin.Pair;
  var toString = Kotlin.toString;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var PlaneBufferGeometry = THREE.PlaneBufferGeometry;
  var MeshStandardMaterial = THREE.MeshStandardMaterial;
  var Mesh_init = THREE.Mesh;
  var Quaternion = THREE.Quaternion;
  var BoxGeometry = THREE.BoxGeometry;
  var Material = THREE.Material;
  InputHandler$Key.prototype = Object.create(Enum.prototype);
  InputHandler$Key.prototype.constructor = InputHandler$Key;
  InputHandler$Command.prototype = Object.create(Enum.prototype);
  InputHandler$Command.prototype.constructor = InputHandler$Command;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  Response.prototype = Object.create(GameEvent.prototype);
  Response.prototype.constructor = Response;
  DocumentError.prototype = Object.create(Exception.prototype);
  DocumentError.prototype.constructor = DocumentError;
  CException.prototype = Object.create(Exception.prototype);
  CException.prototype.constructor = CException;
  GameException.prototype = Object.create(Exception.prototype);
  GameException.prototype.constructor = GameException;
  DMatrixColumn.prototype = Object.create(Enum.prototype);
  DMatrixColumn.prototype.constructor = DMatrixColumn;
  DVectorComponent.prototype = Object.create(Enum.prototype);
  DVectorComponent.prototype.constructor = DVectorComponent;
  MatrixColumn.prototype = Object.create(Enum.prototype);
  MatrixColumn.prototype.constructor = MatrixColumn;
  Vec3.prototype = Object.create(Vector3.prototype);
  Vec3.prototype.constructor = Vec3;
  VectorComponent.prototype = Object.create(Enum.prototype);
  VectorComponent.prototype.constructor = VectorComponent;
  AmbientLight.prototype = Object.create(GameObject.prototype);
  AmbientLight.prototype.constructor = AmbientLight;
  Camera.prototype = Object.create(GameObject.prototype);
  Camera.prototype.constructor = Camera;
  FollowCamera.prototype = Object.create(Camera.prototype);
  FollowCamera.prototype.constructor = FollowCamera;
  SunLight.prototype = Object.create(GameObject.prototype);
  SunLight.prototype.constructor = SunLight;
  Terrain.prototype = Object.create(GameObject.prototype);
  Terrain.prototype.constructor = Terrain;
  Tile.prototype = Object.create(GameObject.prototype);
  Tile.prototype.constructor = Tile;
  TerrestrialMover.prototype = Object.create(GameObject.prototype);
  TerrestrialMover.prototype.constructor = TerrestrialMover;
  TestCube.prototype = Object.create(GameObject.prototype);
  TestCube.prototype.constructor = TestCube;
  TestMover.prototype = Object.create(TerrestrialMover.prototype);
  TestMover.prototype.constructor = TestMover;
  var LOGIC_HZ;
  var STEP_DELTA_MS;
  var DELTA_T_LIMIT_MS;
  function Core() {
    Core$Companion_getInstance();
    var tmp$;
    tmp$ = document.getElementById('container');
    if (tmp$ == null) {
      throw new DocumentError("Could not find 'container' for game Core.");
    }
    this.container = tmp$;
    this.scene_do08cd$_0 = new Scene_0('Main Scene', this);
    this.input = new InputHandler(this.container);
    this.connection = new ServerConnection();
    this.eventHandler = new EventHandler();
    this.deltaTMs_0 = 0.0;
    this.lastFrameTimeMs_0 = 0.0;
    Core$Companion_getInstance().logger_0.info_ukk7tb$('Initializing Core');
    this.scene = this.scene;
  }
  function Core$Tic(timeStamp, timeStep, core) {
    this.timeStamp = timeStamp;
    this.timeStep = timeStep;
    this.core = core;
  }
  Core$Tic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tic',
    interfaces: []
  };
  Core$Tic.prototype.component1 = function () {
    return this.timeStamp;
  };
  Core$Tic.prototype.component2 = function () {
    return this.timeStep;
  };
  Core$Tic.prototype.component3 = function () {
    return this.core;
  };
  Core$Tic.prototype.copy_3yhz4r$ = function (timeStamp, timeStep, core) {
    return new Core$Tic(timeStamp === void 0 ? this.timeStamp : timeStamp, timeStep === void 0 ? this.timeStep : timeStep, core === void 0 ? this.core : core);
  };
  Core$Tic.prototype.toString = function () {
    return 'Tic(timeStamp=' + Kotlin.toString(this.timeStamp) + (', timeStep=' + Kotlin.toString(this.timeStep)) + (', core=' + Kotlin.toString(this.core)) + ')';
  };
  Core$Tic.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.timeStamp) | 0;
    result = result * 31 + Kotlin.hashCode(this.timeStep) | 0;
    result = result * 31 + Kotlin.hashCode(this.core) | 0;
    return result;
  };
  Core$Tic.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.timeStamp, other.timeStamp) && Kotlin.equals(this.timeStep, other.timeStep) && Kotlin.equals(this.core, other.core)))));
  };
  function Core$Companion() {
    Core$Companion_instance = this;
    this.logger_0 = Logger$Companion_getInstance().getLogger_61zpoe$('Core');
  }
  Core$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Core$Companion_instance = null;
  function Core$Companion_getInstance() {
    if (Core$Companion_instance === null) {
      new Core$Companion();
    }
    return Core$Companion_instance;
  }
  Object.defineProperty(Core.prototype, 'scene', {
    get: function () {
      return this.scene_do08cd$_0;
    },
    set: function (scene) {
      scene.core = this;
      this.container.innerHTML = '';
      this.container.appendChild(scene.renderer.domElement);
      this.scene_do08cd$_0 = scene;
      Core$Companion_getInstance().logger_0.info_ukk7tb$('Set new scene: ' + scene);
    }
  });
  function Core$update$lambda(this$Core) {
    return function (it) {
      this$Core.update_14dthe$(it);
      return Unit;
    };
  }
  Core.prototype.update_14dthe$ = function (timeStamp) {
    if (timeStamp === void 0)
      timeStamp = 0.0;
    if (this.lastFrameTimeMs_0 > 0) {
      this.deltaTMs_0 += timeStamp - this.lastFrameTimeMs_0;
    }
    this.lastFrameTimeMs_0 = timeStamp;
    if (this.deltaTMs_0 > DELTA_T_LIMIT_MS) {
      throw new GameException('Update DeltaT exceeded limit: 10000.0 ms.\n' + 'This is likely caused by a timing death spiral, in ' + 'which simulation time is passing faster than the time ' + 'required to update logic');
    }
    while (this.deltaTMs_0 >= STEP_DELTA_MS) {
      this.input.startTic();
      var tic = new Core$Tic(timeStamp - this.deltaTMs_0, STEP_DELTA_MS, this);
      this.scene.update_6oc7r5$(tic);
      this.deltaTMs_0 -= STEP_DELTA_MS;
    }
    this.scene.render_j54m07$();
    window.requestAnimationFrame(Core$update$lambda(this));
  };
  Core.prototype.toString = function () {
    return 'GameCore';
  };
  Core.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Core',
    interfaces: []
  };
  function startCore$lambda(closure$args) {
    return function () {
      startCore(closure$args);
      return Unit;
    };
  }
  function startCore(args) {
    if (Module.ready != true) {
      Logger$Companion_getInstance().getLogger_61zpoe$('Core').info_ukk7tb$('Module not yet ready.');
      window.setTimeout(startCore$lambda(args), 500);
      return;
    }
    var core = new Core();
    Logger$Companion_getInstance().getLogger_61zpoe$('Core').info_ukk7tb$('Began main loop');
    core.update_14dthe$(0.0);
  }
  function EventHandler() {
  }
  EventHandler.prototype.addObserver_cl8ej4$ = function (observer) {
    return false;
  };
  EventHandler.prototype.handleEvent_21ugod$ = function (event) {
  };
  EventHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventHandler',
    interfaces: []
  };
  function EventObserver() {
  }
  EventObserver.prototype.notify_21ugod$ = function (event) {
    return false;
  };
  EventObserver.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EventObserver',
    interfaces: []
  };
  var KEY_ARR_SIZE;
  function InputHandler(container) {
    this.container_0 = container;
    this.keyStates_0 = Kotlin.booleanArray(KEY_ARR_SIZE);
    this.keyPresses_0 = Kotlin.booleanArray(KEY_ARR_SIZE);
    this.keyPressBuffer_0 = Kotlin.booleanArray(KEY_ARR_SIZE);
    this.keyReleases_0 = Kotlin.booleanArray(KEY_ARR_SIZE);
    this.keyReleaseBuffer_0 = Kotlin.booleanArray(KEY_ARR_SIZE);
    this.pointerCaptured_0 = false;
    this.mouseMotion = new Double2();
    this.mouseMotionBuffer_0 = new Double2();
    window.addEventListener('keydown', InputHandler_init$lambda(this));
    window.addEventListener('keyup', InputHandler_init$lambda_0(this));
    var el = this.container_0;
    var onclickFunc = getCallableRef('capturePointer', function ($receiver) {
      return $receiver.capturePointer_0(), Unit;
    }.bind(null, this));
    el.onclick = onclickFunc;
    document.addEventListener('pointerlockchange', getCallableRef('onPointerLockChange', function ($receiver, e) {
      return $receiver.onPointerLockChange_0(e), Unit;
    }.bind(null, this)), false);
    document.addEventListener('mozpointerlockchange', getCallableRef('onPointerLockChange', function ($receiver, e) {
      return $receiver.onPointerLockChange_0(e), Unit;
    }.bind(null, this)), false);
    document.addEventListener('webkitpointerlockchange', getCallableRef('onPointerLockChange', function ($receiver, e) {
      return $receiver.onPointerLockChange_0(e), Unit;
    }.bind(null, this)), false);
    this.bindKey_9g7flk$(InputHandler$Key$W_getInstance(), InputHandler$Command$MOVE_UP_getInstance());
    this.bindKey_9g7flk$(InputHandler$Key$A_getInstance(), InputHandler$Command$MOVE_LEFT_getInstance());
    this.bindKey_9g7flk$(InputHandler$Key$S_getInstance(), InputHandler$Command$MOVE_DOWN_getInstance());
    this.bindKey_9g7flk$(InputHandler$Key$D_getInstance(), InputHandler$Command$MOVE_RIGHT_getInstance());
  }
  function InputHandler$Key(name, ordinal, i) {
    Enum.call(this);
    this.i = i;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputHandler$Key_initFields() {
    InputHandler$Key_initFields = function () {
    };
    InputHandler$Key$LEFT_instance = new InputHandler$Key('LEFT', 0, 37);
    InputHandler$Key$UP_instance = new InputHandler$Key('UP', 1, 38);
    InputHandler$Key$RIGHT_instance = new InputHandler$Key('RIGHT', 2, 39);
    InputHandler$Key$DOWN_instance = new InputHandler$Key('DOWN', 3, 40);
    InputHandler$Key$A_instance = new InputHandler$Key('A', 4, 65);
    InputHandler$Key$B_instance = new InputHandler$Key('B', 5, 66);
    InputHandler$Key$C_instance = new InputHandler$Key('C', 6, 67);
    InputHandler$Key$D_instance = new InputHandler$Key('D', 7, 68);
    InputHandler$Key$E_instance = new InputHandler$Key('E', 8, 69);
    InputHandler$Key$F_instance = new InputHandler$Key('F', 9, 70);
    InputHandler$Key$G_instance = new InputHandler$Key('G', 10, 71);
    InputHandler$Key$H_instance = new InputHandler$Key('H', 11, 72);
    InputHandler$Key$I_instance = new InputHandler$Key('I', 12, 73);
    InputHandler$Key$J_instance = new InputHandler$Key('J', 13, 74);
    InputHandler$Key$K_instance = new InputHandler$Key('K', 14, 75);
    InputHandler$Key$L_instance = new InputHandler$Key('L', 15, 76);
    InputHandler$Key$M_instance = new InputHandler$Key('M', 16, 77);
    InputHandler$Key$N_instance = new InputHandler$Key('N', 17, 78);
    InputHandler$Key$O_instance = new InputHandler$Key('O', 18, 79);
    InputHandler$Key$P_instance = new InputHandler$Key('P', 19, 80);
    InputHandler$Key$Q_instance = new InputHandler$Key('Q', 20, 81);
    InputHandler$Key$R_instance = new InputHandler$Key('R', 21, 82);
    InputHandler$Key$S_instance = new InputHandler$Key('S', 22, 83);
    InputHandler$Key$T_instance = new InputHandler$Key('T', 23, 84);
    InputHandler$Key$U_instance = new InputHandler$Key('U', 24, 85);
    InputHandler$Key$V_instance = new InputHandler$Key('V', 25, 86);
    InputHandler$Key$W_instance = new InputHandler$Key('W', 26, 87);
    InputHandler$Key$X_instance = new InputHandler$Key('X', 27, 88);
    InputHandler$Key$Y_instance = new InputHandler$Key('Y', 28, 89);
    InputHandler$Key$Z_instance = new InputHandler$Key('Z', 29, 90);
    InputHandler$Key$KEY0_instance = new InputHandler$Key('KEY0', 30, 48);
    InputHandler$Key$KEY1_instance = new InputHandler$Key('KEY1', 31, 49);
    InputHandler$Key$KEY2_instance = new InputHandler$Key('KEY2', 32, 50);
    InputHandler$Key$KEY3_instance = new InputHandler$Key('KEY3', 33, 51);
    InputHandler$Key$KEY4_instance = new InputHandler$Key('KEY4', 34, 52);
    InputHandler$Key$KEY5_instance = new InputHandler$Key('KEY5', 35, 53);
    InputHandler$Key$KEY6_instance = new InputHandler$Key('KEY6', 36, 54);
    InputHandler$Key$KEY7_instance = new InputHandler$Key('KEY7', 37, 55);
    InputHandler$Key$KEY8_instance = new InputHandler$Key('KEY8', 38, 56);
    InputHandler$Key$KEY9_instance = new InputHandler$Key('KEY9', 39, 57);
    InputHandler$Key$BACK_instance = new InputHandler$Key('BACK', 40, 8);
    InputHandler$Key$TAB_instance = new InputHandler$Key('TAB', 41, 9);
    InputHandler$Key$ENTER_instance = new InputHandler$Key('ENTER', 42, 13);
    InputHandler$Key$SHIFT_instance = new InputHandler$Key('SHIFT', 43, 16);
    InputHandler$Key$CTRL_instance = new InputHandler$Key('CTRL', 44, 17);
    InputHandler$Key$ALT_instance = new InputHandler$Key('ALT', 45, 18);
    InputHandler$Key$SPACE_instance = new InputHandler$Key('SPACE', 46, 32);
  }
  var InputHandler$Key$LEFT_instance;
  function InputHandler$Key$LEFT_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$LEFT_instance;
  }
  var InputHandler$Key$UP_instance;
  function InputHandler$Key$UP_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$UP_instance;
  }
  var InputHandler$Key$RIGHT_instance;
  function InputHandler$Key$RIGHT_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$RIGHT_instance;
  }
  var InputHandler$Key$DOWN_instance;
  function InputHandler$Key$DOWN_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$DOWN_instance;
  }
  var InputHandler$Key$A_instance;
  function InputHandler$Key$A_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$A_instance;
  }
  var InputHandler$Key$B_instance;
  function InputHandler$Key$B_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$B_instance;
  }
  var InputHandler$Key$C_instance;
  function InputHandler$Key$C_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$C_instance;
  }
  var InputHandler$Key$D_instance;
  function InputHandler$Key$D_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$D_instance;
  }
  var InputHandler$Key$E_instance;
  function InputHandler$Key$E_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$E_instance;
  }
  var InputHandler$Key$F_instance;
  function InputHandler$Key$F_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$F_instance;
  }
  var InputHandler$Key$G_instance;
  function InputHandler$Key$G_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$G_instance;
  }
  var InputHandler$Key$H_instance;
  function InputHandler$Key$H_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$H_instance;
  }
  var InputHandler$Key$I_instance;
  function InputHandler$Key$I_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$I_instance;
  }
  var InputHandler$Key$J_instance;
  function InputHandler$Key$J_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$J_instance;
  }
  var InputHandler$Key$K_instance;
  function InputHandler$Key$K_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$K_instance;
  }
  var InputHandler$Key$L_instance;
  function InputHandler$Key$L_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$L_instance;
  }
  var InputHandler$Key$M_instance;
  function InputHandler$Key$M_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$M_instance;
  }
  var InputHandler$Key$N_instance;
  function InputHandler$Key$N_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$N_instance;
  }
  var InputHandler$Key$O_instance;
  function InputHandler$Key$O_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$O_instance;
  }
  var InputHandler$Key$P_instance;
  function InputHandler$Key$P_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$P_instance;
  }
  var InputHandler$Key$Q_instance;
  function InputHandler$Key$Q_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$Q_instance;
  }
  var InputHandler$Key$R_instance;
  function InputHandler$Key$R_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$R_instance;
  }
  var InputHandler$Key$S_instance;
  function InputHandler$Key$S_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$S_instance;
  }
  var InputHandler$Key$T_instance;
  function InputHandler$Key$T_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$T_instance;
  }
  var InputHandler$Key$U_instance;
  function InputHandler$Key$U_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$U_instance;
  }
  var InputHandler$Key$V_instance;
  function InputHandler$Key$V_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$V_instance;
  }
  var InputHandler$Key$W_instance;
  function InputHandler$Key$W_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$W_instance;
  }
  var InputHandler$Key$X_instance;
  function InputHandler$Key$X_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$X_instance;
  }
  var InputHandler$Key$Y_instance;
  function InputHandler$Key$Y_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$Y_instance;
  }
  var InputHandler$Key$Z_instance;
  function InputHandler$Key$Z_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$Z_instance;
  }
  var InputHandler$Key$KEY0_instance;
  function InputHandler$Key$KEY0_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY0_instance;
  }
  var InputHandler$Key$KEY1_instance;
  function InputHandler$Key$KEY1_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY1_instance;
  }
  var InputHandler$Key$KEY2_instance;
  function InputHandler$Key$KEY2_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY2_instance;
  }
  var InputHandler$Key$KEY3_instance;
  function InputHandler$Key$KEY3_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY3_instance;
  }
  var InputHandler$Key$KEY4_instance;
  function InputHandler$Key$KEY4_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY4_instance;
  }
  var InputHandler$Key$KEY5_instance;
  function InputHandler$Key$KEY5_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY5_instance;
  }
  var InputHandler$Key$KEY6_instance;
  function InputHandler$Key$KEY6_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY6_instance;
  }
  var InputHandler$Key$KEY7_instance;
  function InputHandler$Key$KEY7_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY7_instance;
  }
  var InputHandler$Key$KEY8_instance;
  function InputHandler$Key$KEY8_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY8_instance;
  }
  var InputHandler$Key$KEY9_instance;
  function InputHandler$Key$KEY9_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$KEY9_instance;
  }
  var InputHandler$Key$BACK_instance;
  function InputHandler$Key$BACK_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$BACK_instance;
  }
  var InputHandler$Key$TAB_instance;
  function InputHandler$Key$TAB_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$TAB_instance;
  }
  var InputHandler$Key$ENTER_instance;
  function InputHandler$Key$ENTER_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$ENTER_instance;
  }
  var InputHandler$Key$SHIFT_instance;
  function InputHandler$Key$SHIFT_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$SHIFT_instance;
  }
  var InputHandler$Key$CTRL_instance;
  function InputHandler$Key$CTRL_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$CTRL_instance;
  }
  var InputHandler$Key$ALT_instance;
  function InputHandler$Key$ALT_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$ALT_instance;
  }
  var InputHandler$Key$SPACE_instance;
  function InputHandler$Key$SPACE_getInstance() {
    InputHandler$Key_initFields();
    return InputHandler$Key$SPACE_instance;
  }
  InputHandler$Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function InputHandler$Key$values() {
    return [InputHandler$Key$LEFT_getInstance(), InputHandler$Key$UP_getInstance(), InputHandler$Key$RIGHT_getInstance(), InputHandler$Key$DOWN_getInstance(), InputHandler$Key$A_getInstance(), InputHandler$Key$B_getInstance(), InputHandler$Key$C_getInstance(), InputHandler$Key$D_getInstance(), InputHandler$Key$E_getInstance(), InputHandler$Key$F_getInstance(), InputHandler$Key$G_getInstance(), InputHandler$Key$H_getInstance(), InputHandler$Key$I_getInstance(), InputHandler$Key$J_getInstance(), InputHandler$Key$K_getInstance(), InputHandler$Key$L_getInstance(), InputHandler$Key$M_getInstance(), InputHandler$Key$N_getInstance(), InputHandler$Key$O_getInstance(), InputHandler$Key$P_getInstance(), InputHandler$Key$Q_getInstance(), InputHandler$Key$R_getInstance(), InputHandler$Key$S_getInstance(), InputHandler$Key$T_getInstance(), InputHandler$Key$U_getInstance(), InputHandler$Key$V_getInstance(), InputHandler$Key$W_getInstance(), InputHandler$Key$X_getInstance(), InputHandler$Key$Y_getInstance(), InputHandler$Key$Z_getInstance(), InputHandler$Key$KEY0_getInstance(), InputHandler$Key$KEY1_getInstance(), InputHandler$Key$KEY2_getInstance(), InputHandler$Key$KEY3_getInstance(), InputHandler$Key$KEY4_getInstance(), InputHandler$Key$KEY5_getInstance(), InputHandler$Key$KEY6_getInstance(), InputHandler$Key$KEY7_getInstance(), InputHandler$Key$KEY8_getInstance(), InputHandler$Key$KEY9_getInstance(), InputHandler$Key$BACK_getInstance(), InputHandler$Key$TAB_getInstance(), InputHandler$Key$ENTER_getInstance(), InputHandler$Key$SHIFT_getInstance(), InputHandler$Key$CTRL_getInstance(), InputHandler$Key$ALT_getInstance(), InputHandler$Key$SPACE_getInstance()];
  }
  InputHandler$Key.values = InputHandler$Key$values;
  function InputHandler$Key$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return InputHandler$Key$LEFT_getInstance();
      case 'UP':
        return InputHandler$Key$UP_getInstance();
      case 'RIGHT':
        return InputHandler$Key$RIGHT_getInstance();
      case 'DOWN':
        return InputHandler$Key$DOWN_getInstance();
      case 'A':
        return InputHandler$Key$A_getInstance();
      case 'B':
        return InputHandler$Key$B_getInstance();
      case 'C':
        return InputHandler$Key$C_getInstance();
      case 'D':
        return InputHandler$Key$D_getInstance();
      case 'E':
        return InputHandler$Key$E_getInstance();
      case 'F':
        return InputHandler$Key$F_getInstance();
      case 'G':
        return InputHandler$Key$G_getInstance();
      case 'H':
        return InputHandler$Key$H_getInstance();
      case 'I':
        return InputHandler$Key$I_getInstance();
      case 'J':
        return InputHandler$Key$J_getInstance();
      case 'K':
        return InputHandler$Key$K_getInstance();
      case 'L':
        return InputHandler$Key$L_getInstance();
      case 'M':
        return InputHandler$Key$M_getInstance();
      case 'N':
        return InputHandler$Key$N_getInstance();
      case 'O':
        return InputHandler$Key$O_getInstance();
      case 'P':
        return InputHandler$Key$P_getInstance();
      case 'Q':
        return InputHandler$Key$Q_getInstance();
      case 'R':
        return InputHandler$Key$R_getInstance();
      case 'S':
        return InputHandler$Key$S_getInstance();
      case 'T':
        return InputHandler$Key$T_getInstance();
      case 'U':
        return InputHandler$Key$U_getInstance();
      case 'V':
        return InputHandler$Key$V_getInstance();
      case 'W':
        return InputHandler$Key$W_getInstance();
      case 'X':
        return InputHandler$Key$X_getInstance();
      case 'Y':
        return InputHandler$Key$Y_getInstance();
      case 'Z':
        return InputHandler$Key$Z_getInstance();
      case 'KEY0':
        return InputHandler$Key$KEY0_getInstance();
      case 'KEY1':
        return InputHandler$Key$KEY1_getInstance();
      case 'KEY2':
        return InputHandler$Key$KEY2_getInstance();
      case 'KEY3':
        return InputHandler$Key$KEY3_getInstance();
      case 'KEY4':
        return InputHandler$Key$KEY4_getInstance();
      case 'KEY5':
        return InputHandler$Key$KEY5_getInstance();
      case 'KEY6':
        return InputHandler$Key$KEY6_getInstance();
      case 'KEY7':
        return InputHandler$Key$KEY7_getInstance();
      case 'KEY8':
        return InputHandler$Key$KEY8_getInstance();
      case 'KEY9':
        return InputHandler$Key$KEY9_getInstance();
      case 'BACK':
        return InputHandler$Key$BACK_getInstance();
      case 'TAB':
        return InputHandler$Key$TAB_getInstance();
      case 'ENTER':
        return InputHandler$Key$ENTER_getInstance();
      case 'SHIFT':
        return InputHandler$Key$SHIFT_getInstance();
      case 'CTRL':
        return InputHandler$Key$CTRL_getInstance();
      case 'ALT':
        return InputHandler$Key$ALT_getInstance();
      case 'SPACE':
        return InputHandler$Key$SPACE_getInstance();
      default:throwISE('No enum constant InputHandler.Key.' + name);
    }
  }
  InputHandler$Key.valueOf_61zpoe$ = InputHandler$Key$valueOf;
  function InputHandler$Command(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.boundKeys_lhxdrt$_0 = HashSet_init();
  }
  function InputHandler$Command_initFields() {
    InputHandler$Command_initFields = function () {
    };
    InputHandler$Command$MOVE_LEFT_instance = new InputHandler$Command('MOVE_LEFT', 0);
    InputHandler$Command$MOVE_UP_instance = new InputHandler$Command('MOVE_UP', 1);
    InputHandler$Command$MOVE_RIGHT_instance = new InputHandler$Command('MOVE_RIGHT', 2);
    InputHandler$Command$MOVE_DOWN_instance = new InputHandler$Command('MOVE_DOWN', 3);
  }
  var InputHandler$Command$MOVE_LEFT_instance;
  function InputHandler$Command$MOVE_LEFT_getInstance() {
    InputHandler$Command_initFields();
    return InputHandler$Command$MOVE_LEFT_instance;
  }
  var InputHandler$Command$MOVE_UP_instance;
  function InputHandler$Command$MOVE_UP_getInstance() {
    InputHandler$Command_initFields();
    return InputHandler$Command$MOVE_UP_instance;
  }
  var InputHandler$Command$MOVE_RIGHT_instance;
  function InputHandler$Command$MOVE_RIGHT_getInstance() {
    InputHandler$Command_initFields();
    return InputHandler$Command$MOVE_RIGHT_instance;
  }
  var InputHandler$Command$MOVE_DOWN_instance;
  function InputHandler$Command$MOVE_DOWN_getInstance() {
    InputHandler$Command_initFields();
    return InputHandler$Command$MOVE_DOWN_instance;
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  InputHandler$Command.prototype.isPressed_6a0vkt$ = function (input) {
    var $receiver = this.boundKeys_lhxdrt$_0;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (input.keyPresses_0[element.i]) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  InputHandler$Command.prototype.isActive_6a0vkt$ = function (input) {
    var $receiver = this.boundKeys_lhxdrt$_0;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (input.keyStates_0[element.i]) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  InputHandler$Command.prototype.isReleased_6a0vkt$ = function (input) {
    var $receiver = this.boundKeys_lhxdrt$_0;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (input.keyReleases_0[element.i]) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  InputHandler$Command.prototype.bindKey_vso2i6$ = function (key) {
    return this.boundKeys_lhxdrt$_0.add_11rb$(key);
  };
  InputHandler$Command.prototype.removeKey_vso2i6$ = function (key) {
    return this.boundKeys_lhxdrt$_0.remove_11rb$(key);
  };
  InputHandler$Command.prototype.clearKeys_8be2vx$ = function () {
    this.boundKeys_lhxdrt$_0.clear();
  };
  InputHandler$Command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Command',
    interfaces: [Enum]
  };
  function InputHandler$Command$values() {
    return [InputHandler$Command$MOVE_LEFT_getInstance(), InputHandler$Command$MOVE_UP_getInstance(), InputHandler$Command$MOVE_RIGHT_getInstance(), InputHandler$Command$MOVE_DOWN_getInstance()];
  }
  InputHandler$Command.values = InputHandler$Command$values;
  function InputHandler$Command$valueOf(name) {
    switch (name) {
      case 'MOVE_LEFT':
        return InputHandler$Command$MOVE_LEFT_getInstance();
      case 'MOVE_UP':
        return InputHandler$Command$MOVE_UP_getInstance();
      case 'MOVE_RIGHT':
        return InputHandler$Command$MOVE_RIGHT_getInstance();
      case 'MOVE_DOWN':
        return InputHandler$Command$MOVE_DOWN_getInstance();
      default:throwISE('No enum constant InputHandler.Command.' + name);
    }
  }
  InputHandler$Command.valueOf_61zpoe$ = InputHandler$Command$valueOf;
  InputHandler.prototype.onKeyPressed_0 = function (event) {
    var keyCode = event.keyCode;
    this.keyPressBuffer_0[keyCode] = true;
    this.keyStates_0[keyCode] = true;
  };
  InputHandler.prototype.onKeyReleased_0 = function (event) {
    var keyCode = event.keyCode;
    this.keyReleaseBuffer_0[keyCode] = true;
    this.keyStates_0[keyCode] = false;
  };
  InputHandler.prototype.keyPressed_17kgof$ = function (key) {
    return this.keyPresses_0[key.i];
  };
  InputHandler.prototype.keyActive_17kgof$ = function (key) {
    return this.keyStates_0[key.i];
  };
  InputHandler.prototype.keyReleased_17kgof$ = function (key) {
    return this.keyReleases_0[key.i];
  };
  InputHandler.prototype.cmdPressed_o16n3x$ = function (cmd) {
    return cmd.isPressed_6a0vkt$(this);
  };
  InputHandler.prototype.cmdActive_o16n3x$ = function (cmd) {
    return cmd.isActive_6a0vkt$(this);
  };
  InputHandler.prototype.cmdReleased_o16n3x$ = function (cmd) {
    return cmd.isReleased_6a0vkt$(this);
  };
  InputHandler.prototype.bindKey_9g7flk$ = function (key, cmd) {
    return cmd.bindKey_vso2i6$(key);
  };
  InputHandler.prototype.removeKey_9g7flk$ = function (key, cmd) {
    return cmd.removeKey_vso2i6$(key);
  };
  InputHandler.prototype.clearKeys = function () {
    var $receiver = InputHandler$Command$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.clearKeys_8be2vx$();
    }
  };
  InputHandler.prototype.capturePointer_0 = function () {
    var el = this.container_0;
    el.requestPointerLock = el.requestPointerLock || el.mozRequestPointerLock || el.webkitRequestPointerLock;
    el.requestPointerLock();
  };
  InputHandler.prototype.onPointerLockChange_0 = function (e) {
    var tmp$;
    var el = this.container_0;
    if (typeof (tmp$ = document.pointerLockElement === el || document.mozPointerLockElement === el || document.webkitPointerLockElement === el) === 'boolean' ? tmp$ : throwCCE()) {
      this.pointerCaptured_0 = true;
      document.addEventListener('mousemove', getCallableRef('onMouseMove', function ($receiver, e) {
        return $receiver.onMouseMove_0(e), Unit;
      }.bind(null, this)), false);
    }
     else {
      this.pointerCaptured_0 = false;
      document.removeEventListener('mousemove', getCallableRef('onMouseMove', function ($receiver, e) {
        return $receiver.onMouseMove_0(e), Unit;
      }.bind(null, this)), false);
    }
  };
  InputHandler.prototype.onMouseMove_0 = function (e) {
    var tmp$, tmp$_0;
    if (!this.pointerCaptured_0) {
      return;
    }
    this.mouseMotionBuffer_0 = new Double2(typeof (tmp$ = e.movementX || e.mozMovementX || e.webkitMovementX || 0.0) === 'number' ? tmp$ : throwCCE(), typeof (tmp$_0 = e.movementY || e.mozMovementY || e.webkitMovementY || 0.0) === 'number' ? tmp$_0 : throwCCE());
  };
  InputHandler.prototype.startTic = function () {
    var oldKeyPresses = this.keyPresses_0;
    var oldKeyReleases = this.keyReleases_0;
    this.keyPresses_0 = this.keyPressBuffer_0;
    this.keyReleases_0 = this.keyReleaseBuffer_0;
    for (var i = 0; i < oldKeyPresses.length; i++) {
      oldKeyPresses[i] = false;
      oldKeyReleases[i] = false;
    }
    this.keyPressBuffer_0 = oldKeyPresses;
    this.keyReleaseBuffer_0 = oldKeyReleases;
    var oldMouseMotion = this.mouseMotion;
    oldMouseMotion.x = 0.0;
    oldMouseMotion.y = 0.0;
    this.mouseMotion = this.mouseMotionBuffer_0;
    this.mouseMotionBuffer_0 = oldMouseMotion;
  };
  function InputHandler_init$lambda(this$InputHandler) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
      this$InputHandler.onKeyPressed_0(tmp$_0);
      return Unit;
    };
  }
  function InputHandler_init$lambda_0(this$InputHandler) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
      this$InputHandler.onKeyReleased_0(tmp$_0);
      return Unit;
    };
  }
  InputHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputHandler',
    interfaces: []
  };
  function LogLevel(name, ordinal, i) {
    Enum.call(this);
    this.i = i;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LogLevel_initFields() {
    LogLevel_initFields = function () {
    };
    LogLevel$FINE_instance = new LogLevel('FINE', 0, 0);
    LogLevel$DEBUG_instance = new LogLevel('DEBUG', 1, 1);
    LogLevel$INFO_instance = new LogLevel('INFO', 2, 2);
    LogLevel$WARN_instance = new LogLevel('WARN', 3, 3);
    LogLevel$ERROR_instance = new LogLevel('ERROR', 4, 4);
    LogLevel$WTF_instance = new LogLevel('WTF', 5, 5);
  }
  var LogLevel$FINE_instance;
  function LogLevel$FINE_getInstance() {
    LogLevel_initFields();
    return LogLevel$FINE_instance;
  }
  var LogLevel$DEBUG_instance;
  function LogLevel$DEBUG_getInstance() {
    LogLevel_initFields();
    return LogLevel$DEBUG_instance;
  }
  var LogLevel$INFO_instance;
  function LogLevel$INFO_getInstance() {
    LogLevel_initFields();
    return LogLevel$INFO_instance;
  }
  var LogLevel$WARN_instance;
  function LogLevel$WARN_getInstance() {
    LogLevel_initFields();
    return LogLevel$WARN_instance;
  }
  var LogLevel$ERROR_instance;
  function LogLevel$ERROR_getInstance() {
    LogLevel_initFields();
    return LogLevel$ERROR_instance;
  }
  var LogLevel$WTF_instance;
  function LogLevel$WTF_getInstance() {
    LogLevel_initFields();
    return LogLevel$WTF_instance;
  }
  LogLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogLevel',
    interfaces: [Enum]
  };
  function LogLevel$values() {
    return [LogLevel$FINE_getInstance(), LogLevel$DEBUG_getInstance(), LogLevel$INFO_getInstance(), LogLevel$WARN_getInstance(), LogLevel$ERROR_getInstance(), LogLevel$WTF_getInstance()];
  }
  LogLevel.values = LogLevel$values;
  function LogLevel$valueOf(name) {
    switch (name) {
      case 'FINE':
        return LogLevel$FINE_getInstance();
      case 'DEBUG':
        return LogLevel$DEBUG_getInstance();
      case 'INFO':
        return LogLevel$INFO_getInstance();
      case 'WARN':
        return LogLevel$WARN_getInstance();
      case 'ERROR':
        return LogLevel$ERROR_getInstance();
      case 'WTF':
        return LogLevel$WTF_getInstance();
      default:throwISE('No enum constant LogLevel.' + name);
    }
  }
  LogLevel.valueOf_61zpoe$ = LogLevel$valueOf;
  function Logger(name) {
    Logger$Companion_getInstance();
    this.name = name;
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
    this.loggers_0 = HashMap_init();
    this.logger_0 = this.getLogger_61zpoe$('Logger');
    this.logLevel_34gi56$_0 = LogLevel$FINE_getInstance();
  }
  Object.defineProperty(Logger$Companion.prototype, 'logLevel', {
    get: function () {
      return this.logLevel_34gi56$_0;
    },
    set: function (level) {
      this.logLevel_34gi56$_0 = level;
      this.logger_0.info_ukk7tb$('Log level changed to: ' + this.logLevel.name);
    }
  });
  Logger$Companion.prototype.getLogger_61zpoe$ = function (name) {
    var logger;
    if (this.loggers_0.keys.contains_11rb$(name)) {
      logger = ensureNotNull(this.loggers_0.get_11rb$(name));
    }
     else {
      logger = new Logger(name);
      var $receiver = this.loggers_0;
      var value = logger == null ? throwUPAE('logger') : logger;
      $receiver.put_xwzc9p$(name, value);
    }
    return logger == null ? throwUPAE('logger') : logger;
  };
  Logger$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  Logger.prototype.log_mtgecj$ = function (level, msg, e) {
    if (e === void 0)
      e = null;
    if (level.i < Logger$Companion_getInstance().logLevel.i) {
      return;
    }
    println('[' + padEnd(level.name, 5) + '] ' + this.name + ':  ' + msg);
    if (e != null) {
      println(e);
    }
  };
  Logger.prototype.fine_ukk7tb$ = function (msg, e) {
    if (e === void 0)
      e = null;
    this.log_mtgecj$(LogLevel$FINE_getInstance(), msg, e);
  };
  Logger.prototype.debug_ukk7tb$ = function (msg, e) {
    if (e === void 0)
      e = null;
    this.log_mtgecj$(LogLevel$DEBUG_getInstance(), msg, e);
  };
  Logger.prototype.info_ukk7tb$ = function (msg, e) {
    if (e === void 0)
      e = null;
    this.log_mtgecj$(LogLevel$INFO_getInstance(), msg, e);
  };
  Logger.prototype.warn_ukk7tb$ = function (msg, e) {
    if (e === void 0)
      e = null;
    this.log_mtgecj$(LogLevel$WARN_getInstance(), msg, e);
  };
  Logger.prototype.error_ukk7tb$ = function (msg, e) {
    if (e === void 0)
      e = null;
    this.log_mtgecj$(LogLevel$ERROR_getInstance(), msg, e);
  };
  Logger.prototype.wtf_ukk7tb$ = function (msg, e) {
    if (e === void 0)
      e = null;
    this.log_mtgecj$(LogLevel$WTF_getInstance(), msg, e);
  };
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
  function ProceduralWorker() {
  }
  ProceduralWorker.prototype.onMessage_za3rmp$ = function (msg) {
  };
  ProceduralWorker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProceduralWorker',
    interfaces: []
  };
  function startProceduralWorker(args) {
  }
  function Scene_0(name, core) {
    Scene$Companion_getInstance();
    if (name === void 0)
      name = 'Unnamed';
    if (core === void 0)
      core = null;
    this.name = name;
    this.core = core;
    this.gameObjects_0 = HashMap_init();
    this.removalQueue_0 = HashSet_init();
    this.threeScene = new Scene();
    this.renderer = new WebGLRenderer_init();
    this.renderWidth = (window.innerWidth * 9 | 0) / 10 | 0;
    this.renderHeight = (this.renderWidth * 7 | 0) / 10 | 0;
    this.terrain = new Terrain();
    this.camera = new FollowCamera();
    this.sunLight = new SunLight('SunLight');
    this.ambientLight = new AmbientLight('AmbientLight');
    var tmp$;
    var r = this.renderer;
    Scene$Companion_getInstance().logger_0.info_ukk7tb$('Initializing ' + this);
    r.setClearAlpha(1);
    r.setClearColor(16775930, 1);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.setSize(this.renderWidth, this.renderHeight);
    this.threeScene.fog = new Fog();
    this.threeScene.fog.color = new Color_init(15794160);
    this.threeScene.fog.near = 500;
    this.threeScene.fog.far = 120000;
    this.sunLight.position = new Double3(1.0E9, 1.0E9, 30.0);
    this.add_cectmz$(this.terrain);
    this.add_cectmz$(this.camera);
    this.add_cectmz$(this.sunLight);
    this.add_cectmz$(this.ambientLight);
    var mover = new TestMover();
    mover.position = new Double3(6.0, 0.0, 0.0);
    this.add_cectmz$(mover);
    (Kotlin.isType(tmp$ = this.camera, FollowCamera) ? tmp$ : throwCCE()).follow_cectmz$(mover);
  }
  function Scene$Companion() {
    Scene$Companion_instance = this;
    this.logger_0 = Logger$Companion_getInstance().getLogger_61zpoe$('Scene');
  }
  Scene$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Scene$Companion_instance = null;
  function Scene$Companion_getInstance() {
    if (Scene$Companion_instance === null) {
      new Scene$Companion();
    }
    return Scene$Companion_instance;
  }
  Scene_0.prototype.update_6oc7r5$ = function (tic) {
    var tmp$;
    var tmp$_0;
    tmp$_0 = this.removalQueue_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.removeHard_0(element);
    }
    tmp$ = this.gameObjects_0.values.iterator();
    while (tmp$.hasNext()) {
      var o = tmp$.next();
      try {
        o.update_6oc7r5$(tic);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          Scene$Companion_getInstance().logger_0.error_ukk7tb$('Error occurred calling ' + o + ' .update() method.');
          throw e;
        }
         else
          throw e;
      }
    }
  };
  Scene_0.prototype.render_j54m07$ = function (camera) {
    if (camera === void 0)
      camera = this.camera.threeCamera;
    this.renderer.render(this.threeScene, camera);
  };
  Scene_0.prototype.add_cectmz$ = function (gameObject) {
    var tmp$;
    try {
      Scene$Companion_getInstance().logger_0.fine_ukk7tb$('Adding ' + gameObject + ' to ' + this);
      if (this.removalQueue_0.contains_11rb$(gameObject)) {
        this.removalQueue_0.remove_11rb$(gameObject);
      }
       else if (this.gameObjects_0.keys.contains_11rb$(gameObject.id)) {
        return false;
      }
       else {
        var $receiver = this.gameObjects_0;
        var key = gameObject.id;
        $receiver.put_xwzc9p$(key, gameObject);
        this.threeScene.add(gameObject.threeObject);
      }
      gameObject.scene = this;
      tmp$ = gameObject.childObjects.iterator();
      while (tmp$.hasNext()) {
        var childObject = tmp$.next();
        this.add_cectmz$(childObject);
      }
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        Scene$Companion_getInstance().logger_0.error_ukk7tb$('Error occurred while attempting to add ' + (gameObject.toString() + ' to ' + this), e);
        throw e;
      }
       else
        throw e;
    }
  };
  Scene_0.prototype.contains_cectmz$ = function (gameObject) {
    return this.gameObjects_0.containsKey_11rb$(gameObject.id);
  };
  Scene_0.prototype.get_61zpoe$ = function (id) {
    return this.gameObjects_0.get_11rb$(id);
  };
  Scene_0.prototype.remove_cectmz$ = function (gameObject) {
    try {
      Scene$Companion_getInstance().logger_0.fine_ukk7tb$('Removing ' + gameObject + ' from ' + this);
      if (!this.gameObjects_0.keys.contains_11rb$(gameObject.id)) {
        return false;
      }
      if (this.removalQueue_0.contains_11rb$(gameObject)) {
        return false;
      }
      this.removalQueue_0.add_11rb$(gameObject);
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        Scene$Companion_getInstance().logger_0.error_ukk7tb$('Error occurred while attempting to remove ' + (gameObject.toString() + ' from ' + this), e);
        throw e;
      }
       else
        throw e;
    }
  };
  Scene_0.prototype.removeHard_0 = function (gameObject) {
    var tmp$;
    gameObject.scene = null;
    this.gameObjects_0.remove_11rb$(gameObject.id);
    this.threeScene.remove(gameObject.threeObject);
    tmp$ = gameObject.childObjects.iterator();
    while (tmp$.hasNext()) {
      var childObject = tmp$.next();
      this.removeHard_0(childObject);
    }
  };
  Scene_0.prototype.toString = function () {
    return 'Scene[' + this.name + ']';
  };
  Scene_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scene',
    interfaces: []
  };
  function ServerConnection() {
  }
  ServerConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerConnection',
    interfaces: []
  };
  function GameEvent(sourceId, sourceType, eventType) {
    this.sourceId = sourceId;
    this.sourceType = sourceType;
    this.eventType = eventType;
    var tmp$;
    this.id = typeof (tmp$ = uuid()) === 'string' ? tmp$ : throwCCE();
    if (this.sourceId.length === 0) {
      throw IllegalArgumentException_init('GameEvent sourceId passed at initialization was empty');
    }
    if (this.sourceType.length === 0) {
      throw IllegalArgumentException_init('GameEvent constructor was passed an empty sourceType');
    }
    if (this.eventType.length === 0) {
      throw IllegalArgumentException_init('GameEvent constructor was passed an empty eventType str');
    }
  }
  GameEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameEvent',
    interfaces: []
  };
  function Response(sourceId, sourceType, eventType, event) {
    GameEvent.call(this, sourceId, sourceType, eventType);
    this.responseId = event.id;
  }
  Response.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Response',
    interfaces: [GameEvent]
  };
  function DocumentError(message, cause) {
    if (cause === void 0)
      cause = null;
    Exception.call(this, message, cause);
    this.message_upj07n$_0 = message;
    this.cause_fjybtb$_0 = cause;
    this.name = 'DocumentError';
  }
  Object.defineProperty(DocumentError.prototype, 'message', {
    get: function () {
      return this.message_upj07n$_0;
    },
    set: function (message) {
      this.message_upj07n$_0 = message;
    }
  });
  Object.defineProperty(DocumentError.prototype, 'cause', {
    get: function () {
      return this.cause_fjybtb$_0;
    },
    set: function (cause) {
      this.cause_fjybtb$_0 = cause;
    }
  });
  DocumentError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocumentError',
    interfaces: [Exception]
  };
  function CException(message, cause) {
    if (cause === void 0)
      cause = null;
    Exception.call(this, message, cause);
    this.message_ll9jrq$_0 = message;
    this.cause_ov7kdw$_0 = cause;
    this.name = 'CException';
  }
  Object.defineProperty(CException.prototype, 'message', {
    get: function () {
      return this.message_ll9jrq$_0;
    },
    set: function (message) {
      this.message_ll9jrq$_0 = message;
    }
  });
  Object.defineProperty(CException.prototype, 'cause', {
    get: function () {
      return this.cause_ov7kdw$_0;
    },
    set: function (cause) {
      this.cause_ov7kdw$_0 = cause;
    }
  });
  CException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CException',
    interfaces: [Exception]
  };
  function GameException(message, cause) {
    if (cause === void 0)
      cause = null;
    Exception.call(this, message, cause);
    this.message_wff8jh$_0 = message;
    this.cause_91hzq7$_0 = cause;
    this.name = 'GameException';
  }
  Object.defineProperty(GameException.prototype, 'message', {
    get: function () {
      return this.message_wff8jh$_0;
    },
    set: function (message) {
      this.message_wff8jh$_0 = message;
    }
  });
  Object.defineProperty(GameException.prototype, 'cause', {
    get: function () {
      return this.cause_91hzq7$_0;
    },
    set: function (cause) {
      this.cause_91hzq7$_0 = cause;
    }
  });
  GameException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameException',
    interfaces: [Exception]
  };
  function DMatrixColumn(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DMatrixColumn_initFields() {
    DMatrixColumn_initFields = function () {
    };
    DMatrixColumn$X_instance = new DMatrixColumn('X', 0);
    DMatrixColumn$Y_instance = new DMatrixColumn('Y', 1);
    DMatrixColumn$Z_instance = new DMatrixColumn('Z', 2);
    DMatrixColumn$W_instance = new DMatrixColumn('W', 3);
  }
  var DMatrixColumn$X_instance;
  function DMatrixColumn$X_getInstance() {
    DMatrixColumn_initFields();
    return DMatrixColumn$X_instance;
  }
  var DMatrixColumn$Y_instance;
  function DMatrixColumn$Y_getInstance() {
    DMatrixColumn_initFields();
    return DMatrixColumn$Y_instance;
  }
  var DMatrixColumn$Z_instance;
  function DMatrixColumn$Z_getInstance() {
    DMatrixColumn_initFields();
    return DMatrixColumn$Z_instance;
  }
  var DMatrixColumn$W_instance;
  function DMatrixColumn$W_getInstance() {
    DMatrixColumn_initFields();
    return DMatrixColumn$W_instance;
  }
  DMatrixColumn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMatrixColumn',
    interfaces: [Enum]
  };
  function DMatrixColumn$values() {
    return [DMatrixColumn$X_getInstance(), DMatrixColumn$Y_getInstance(), DMatrixColumn$Z_getInstance(), DMatrixColumn$W_getInstance()];
  }
  DMatrixColumn.values = DMatrixColumn$values;
  function DMatrixColumn$valueOf(name) {
    switch (name) {
      case 'X':
        return DMatrixColumn$X_getInstance();
      case 'Y':
        return DMatrixColumn$Y_getInstance();
      case 'Z':
        return DMatrixColumn$Z_getInstance();
      case 'W':
        return DMatrixColumn$W_getInstance();
      default:throwISE('No enum constant com.curiouscreature.kotlin.math.DMatrixColumn.' + name);
    }
  }
  DMatrixColumn.valueOf_61zpoe$ = DMatrixColumn$valueOf;
  function DMat2(x, y) {
    DMat2$Companion_getInstance();
    if (x === void 0)
      x = new Double2(1.0);
    if (y === void 0)
      y = new Double2(void 0, 1.0);
    this.x = x;
    this.y = y;
  }
  function DMat2$Companion() {
    DMat2$Companion_instance = this;
  }
  DMat2$Companion.prototype.of_yqxtqz$ = function (a) {
    if (!(a.length >= 4)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return new DMat2(new Double2(a[0], a[2]), new Double2(a[1], a[3]));
  };
  DMat2$Companion.prototype.identity = function () {
    return new DMat2();
  };
  DMat2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DMat2$Companion_instance = null;
  function DMat2$Companion_getInstance() {
    if (DMat2$Companion_instance === null) {
      new DMat2$Companion();
    }
    return DMat2$Companion_instance;
  }
  DMat2.prototype.get_za3lpa$ = function (column) {
    switch (column) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:throw IllegalArgumentException_init('column must be in 0..1');
    }
  };
  DMat2.prototype.get_vux9f0$ = function (column, row) {
    return this.get_za3lpa$(column).get_za3lpa$(row);
  };
  DMat2.prototype.get_usshg8$ = function (column) {
    switch (column.name) {
      case 'X':
        return this.x;
      case 'Y':
        return this.y;
      default:throw IllegalArgumentException_init('column must be X or Y');
    }
  };
  DMat2.prototype.get_8svv2y$ = function (column, row) {
    return this.get_usshg8$(column).get_za3lpa$(row);
  };
  DMat2.prototype.invoke_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(column - 1 | 0).get_za3lpa$(row - 1 | 0);
  };
  DMat2.prototype.invoke_224j3y$ = function (row, column, v) {
    this.set_224j3y$(column - 1 | 0, row - 1 | 0, v);
  };
  DMat2.prototype.set_72qx7e$ = function (column, v) {
    var $this = this.get_za3lpa$(column);
    $this.x = v.x;
    $this.y = v.y;
  };
  DMat2.prototype.set_224j3y$ = function (column, row, v) {
    this.get_za3lpa$(column).set_5wr77w$(row, v);
  };
  DMat2.prototype.unaryMinus = function () {
    return new DMat2(this.x.unaryMinus(), this.y.unaryMinus());
  };
  DMat2.prototype.inc = function () {
    this.x = this.x.inc();
    this.y = this.y.inc();
    return this;
  };
  DMat2.prototype.dec = function () {
    this.x = this.x.dec();
    this.y = this.y.dec();
    return this;
  };
  DMat2.prototype.plus_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new DMat2(new Double2($this.x + v, $this.y + v), new Double2($this_0.x + v, $this_0.y + v));
  };
  DMat2.prototype.minus_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new DMat2(new Double2($this.x - v, $this.y - v), new Double2($this_0.x - v, $this_0.y - v));
  };
  DMat2.prototype.times_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new DMat2(new Double2($this.x * v, $this.y * v), new Double2($this_0.x * v, $this_0.y * v));
  };
  DMat2.prototype.div_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new DMat2(new Double2($this.x / v, $this.y / v), new Double2($this_0.x / v, $this_0.y / v));
  };
  DMat2.prototype.times_5g0se3$ = function (m) {
    var t = transpose(this);
    var a = t.x;
    var b = m.x;
    var a_0 = t.y;
    var b_0 = m.x;
    var a_1 = t.x;
    var b_1 = m.y;
    var a_2 = t.y;
    var b_2 = m.y;
    return new DMat2(new Double2(a.x * b.x + a.y * b.y, a_0.x * b_0.x + a_0.y * b_0.y), new Double2(a_1.x * b_1.x + a_1.y * b_1.y, a_2.x * b_2.x + a_2.y * b_2.y));
  };
  DMat2.prototype.times_v1l2s0$ = function (v) {
    var t = transpose(this);
    var a = t.x;
    var a_0 = t.y;
    return new Double2(a.x * v.x + a.y * v.y, a_0.x * v.x + a_0.y * v.y);
  };
  DMat2.prototype.toDoubleArray = function () {
    return new Float64Array([this.x.x, this.y.x, this.x.y, this.y.y]);
  };
  DMat2.prototype.toString = function () {
    return trimIndent('\n' + '            |' + this.x.x + ' ' + this.y.x + '|' + '\n' + '            |' + this.x.y + ' ' + this.y.y + '|' + '\n' + '            ');
  };
  DMat2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMat2',
    interfaces: []
  };
  function DMat2_init(m, $this) {
    $this = $this || Object.create(DMat2.prototype);
    DMat2.call($this, m.x.copy_lu1900$(), m.y.copy_lu1900$());
    return $this;
  }
  DMat2.prototype.component1 = function () {
    return this.x;
  };
  DMat2.prototype.component2 = function () {
    return this.y;
  };
  DMat2.prototype.copy_pkk790$ = function (x, y) {
    return new DMat2(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  DMat2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  DMat2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function DMat3(x, y, z) {
    DMat3$Companion_getInstance();
    if (x === void 0)
      x = new Double3(1.0);
    if (y === void 0)
      y = new Double3(void 0, 1.0);
    if (z === void 0)
      z = new Double3(void 0, void 0, 1.0);
    this.x = x;
    this.y = y;
    this.z = z;
  }
  function DMat3$Companion() {
    DMat3$Companion_instance = this;
  }
  DMat3$Companion.prototype.of_yqxtqz$ = function (a) {
    if (!(a.length >= 9)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return new DMat3(new Double3(a[0], a[3], a[6]), new Double3(a[1], a[4], a[7]), new Double3(a[2], a[5], a[8]));
  };
  DMat3$Companion.prototype.identity = function () {
    return new DMat3();
  };
  DMat3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DMat3$Companion_instance = null;
  function DMat3$Companion_getInstance() {
    if (DMat3$Companion_instance === null) {
      new DMat3$Companion();
    }
    return DMat3$Companion_instance;
  }
  DMat3.prototype.get_za3lpa$ = function (column) {
    switch (column) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:throw IllegalArgumentException_init('column must be in 0..2');
    }
  };
  DMat3.prototype.get_vux9f0$ = function (column, row) {
    return this.get_za3lpa$(column).get_za3lpa$(row);
  };
  DMat3.prototype.get_usshg8$ = function (column) {
    switch (column.name) {
      case 'X':
        return this.x;
      case 'Y':
        return this.y;
      case 'Z':
        return this.z;
      default:throw IllegalArgumentException_init('column must be X, Y or Z');
    }
  };
  DMat3.prototype.get_8svv2y$ = function (column, row) {
    return this.get_usshg8$(column).get_za3lpa$(row);
  };
  DMat3.prototype.invoke_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(column - 1 | 0).get_za3lpa$(row - 1 | 0);
  };
  DMat3.prototype.invoke_224j3y$ = function (row, column, v) {
    this.set_224j3y$(column - 1 | 0, row - 1 | 0, v);
  };
  DMat3.prototype.set_72qx7d$ = function (column, v) {
    var $this = this.get_za3lpa$(column);
    $this.x = v.x;
    $this.y = v.y;
    $this.z = v.z;
  };
  DMat3.prototype.set_224j3y$ = function (column, row, v) {
    this.get_za3lpa$(column).set_5wr77w$(row, v);
  };
  DMat3.prototype.unaryMinus = function () {
    return new DMat3(this.x.unaryMinus(), this.y.unaryMinus(), this.z.unaryMinus());
  };
  DMat3.prototype.inc = function () {
    this.x = this.x.inc();
    this.y = this.y.inc();
    this.z = this.z.inc();
    return this;
  };
  DMat3.prototype.dec = function () {
    this.x = this.x.dec();
    this.y = this.y.dec();
    this.z = this.z.dec();
    return this;
  };
  DMat3.prototype.plus_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new DMat3(new Double3($this.x + v, $this.y + v, $this.z + v), new Double3($this_0.x + v, $this_0.y + v, $this_0.z + v), new Double3($this_1.x + v, $this_1.y + v, $this_1.z + v));
  };
  DMat3.prototype.minus_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new DMat3(new Double3($this.x - v, $this.y - v, $this.z - v), new Double3($this_0.x - v, $this_0.y - v, $this_0.z - v), new Double3($this_1.x - v, $this_1.y - v, $this_1.z - v));
  };
  DMat3.prototype.times_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new DMat3(new Double3($this.x * v, $this.y * v, $this.z * v), new Double3($this_0.x * v, $this_0.y * v, $this_0.z * v), new Double3($this_1.x * v, $this_1.y * v, $this_1.z * v));
  };
  DMat3.prototype.div_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new DMat3(new Double3($this.x / v, $this.y / v, $this.z / v), new Double3($this_0.x / v, $this_0.y / v, $this_0.z / v), new Double3($this_1.x / v, $this_1.y / v, $this_1.z / v));
  };
  DMat3.prototype.times_5g0se2$ = function (m) {
    var t = transpose_0(this);
    var a = t.x;
    var b = m.x;
    var a_0 = t.y;
    var b_0 = m.x;
    var a_1 = t.z;
    var b_1 = m.x;
    var a_2 = t.x;
    var b_2 = m.y;
    var a_3 = t.y;
    var b_3 = m.y;
    var a_4 = t.z;
    var b_4 = m.y;
    var a_5 = t.x;
    var b_5 = m.z;
    var a_6 = t.y;
    var b_6 = m.z;
    var a_7 = t.z;
    var b_7 = m.z;
    return new DMat3(new Double3(a.x * b.x + a.y * b.y + a.z * b.z, a_0.x * b_0.x + a_0.y * b_0.y + a_0.z * b_0.z, a_1.x * b_1.x + a_1.y * b_1.y + a_1.z * b_1.z), new Double3(a_2.x * b_2.x + a_2.y * b_2.y + a_2.z * b_2.z, a_3.x * b_3.x + a_3.y * b_3.y + a_3.z * b_3.z, a_4.x * b_4.x + a_4.y * b_4.y + a_4.z * b_4.z), new Double3(a_5.x * b_5.x + a_5.y * b_5.y + a_5.z * b_5.z, a_6.x * b_6.x + a_6.y * b_6.y + a_6.z * b_6.z, a_7.x * b_7.x + a_7.y * b_7.y + a_7.z * b_7.z));
  };
  DMat3.prototype.times_v1l2rz$ = function (v) {
    var t = transpose_0(this);
    var a = t.x;
    var a_0 = t.y;
    var a_1 = t.z;
    return new Double3(a.x * v.x + a.y * v.y + a.z * v.z, a_0.x * v.x + a_0.y * v.y + a_0.z * v.z, a_1.x * v.x + a_1.y * v.y + a_1.z * v.z);
  };
  DMat3.prototype.toDoubleArray = function () {
    return new Float64Array([this.x.x, this.y.x, this.z.x, this.x.y, this.y.y, this.z.y, this.x.z, this.y.z, this.z.z]);
  };
  DMat3.prototype.toString = function () {
    return trimIndent('\n' + '            |' + this.x.x + ' ' + this.y.x + ' ' + this.z.x + '|' + '\n' + '            |' + this.x.y + ' ' + this.y.y + ' ' + this.z.y + '|' + '\n' + '            |' + this.x.z + ' ' + this.y.z + ' ' + this.z.z + '|' + '\n' + '            ');
  };
  DMat3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMat3',
    interfaces: []
  };
  function DMat3_init(m, $this) {
    $this = $this || Object.create(DMat3.prototype);
    DMat3.call($this, m.x.copy_yvo9jy$(), m.y.copy_yvo9jy$(), m.z.copy_yvo9jy$());
    return $this;
  }
  DMat3.prototype.component1 = function () {
    return this.x;
  };
  DMat3.prototype.component2 = function () {
    return this.y;
  };
  DMat3.prototype.component3 = function () {
    return this.z;
  };
  DMat3.prototype.copy_ktiq11$ = function (x, y, z) {
    return new DMat3(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  DMat3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  DMat3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function DMat4(x, y, z, w) {
    DMat4$Companion_getInstance();
    if (x === void 0)
      x = new Double4(1.0);
    if (y === void 0)
      y = new Double4(void 0, 1.0);
    if (z === void 0)
      z = new Double4(void 0, void 0, 1.0);
    if (w === void 0)
      w = new Double4(void 0, void 0, void 0, 1.0);
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  function DMat4$Companion() {
    DMat4$Companion_instance = this;
  }
  DMat4$Companion.prototype.of_yqxtqz$ = function (a) {
    if (!(a.length >= 16)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return new DMat4(new Double4(a[0], a[4], a[8], a[12]), new Double4(a[1], a[5], a[9], a[13]), new Double4(a[2], a[6], a[10], a[14]), new Double4(a[3], a[7], a[11], a[15]));
  };
  DMat4$Companion.prototype.identity = function () {
    return new DMat4();
  };
  DMat4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DMat4$Companion_instance = null;
  function DMat4$Companion_getInstance() {
    if (DMat4$Companion_instance === null) {
      new DMat4$Companion();
    }
    return DMat4$Companion_instance;
  }
  Object.defineProperty(DMat4.prototype, 'right', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.get_right', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        var $this = this.x;
        return new Double3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.set_right_v1l2rz$', function (value) {
      var $this = this.x;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(DMat4.prototype, 'up', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.get_up', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        var $this = this.y;
        return new Double3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.set_up_v1l2rz$', function (value) {
      var $this = this.y;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(DMat4.prototype, 'forward', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.get_forward', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        var $this = this.z;
        return new Double3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.set_forward_v1l2rz$', function (value) {
      var $this = this.z;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(DMat4.prototype, 'position', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.get_position', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        var $this = this.w;
        return new Double3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.set_position_v1l2rz$', function (value) {
      var $this = this.w;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(DMat4.prototype, 'scale', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.get_scale', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      var Math_0 = Math;
      return function () {
        var $this = this.x;
        var v = new Double3_init($this.x, $this.y, $this.z);
        var x = v.x * v.x + v.y * v.y + v.z * v.z;
        var tmp$ = Math_0.sqrt(x);
        var $this_0 = this.y;
        var v_0 = new Double3_init($this_0.x, $this_0.y, $this_0.z);
        var x_0 = v_0.x * v_0.x + v_0.y * v_0.y + v_0.z * v_0.z;
        var tmp$_0 = Math_0.sqrt(x_0);
        var $this_1 = this.z;
        var v_1 = new Double3_init($this_1.x, $this_1.y, $this_1.z);
        var x_1 = v_1.x * v_1.x + v_1.y * v_1.y + v_1.z * v_1.z;
        return new Double3_init(tmp$, tmp$_0, Math_0.sqrt(x_1));
      };
    }))
  });
  Object.defineProperty(DMat4.prototype, 'translation', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.get_translation', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        var $this = this.w;
        return new Double3_init($this.x, $this.y, $this.z);
      };
    }))
  });
  var Math_0 = Math;
  Object.defineProperty(DMat4.prototype, 'rotation', {
    get: function () {
      var tmp$;
      var $this = this.x;
      var x = normalize_0(new Double3($this.x, $this.y, $this.z));
      var $this_0 = this.y;
      var y = normalize_0(new Double3($this_0.x, $this_0.y, $this_0.z));
      var $this_1 = this.z;
      var z = normalize_0(new Double3($this_1.x, $this_1.y, $this_1.z));
      if (z.y <= -1.0) {
        var tmp$_0 = -HALF_PI * (180.0 * package$math.INV_PI);
        var y_0 = x.z;
        var x_0 = y.z;
        tmp$ = new Double3(tmp$_0, 0.0, Math_0.atan2(y_0, x_0) * (180.0 * package$math.INV_PI));
      }
       else if (z.y >= 1.0) {
        var tmp$_1 = HALF_PI * (180.0 * package$math.INV_PI);
        var y_1 = -x.z;
        var x_1 = -y.z;
        tmp$ = new Double3(tmp$_1, 0.0, Math_0.atan2(y_1, x_1) * (180.0 * package$math.INV_PI));
      }
       else {
        var x_2 = z.y;
        var tmp$_2 = -Math_0.asin(x_2) * (180.0 * package$math.INV_PI);
        var y_2 = z.x;
        var x_3 = z.z;
        var tmp$_3 = -Math_0.atan2(y_2, x_3) * (180.0 * package$math.INV_PI);
        var y_3 = x.y;
        var x_4 = y.y;
        tmp$ = new Double3(tmp$_2, tmp$_3, Math_0.atan2(y_3, x_4) * (180.0 * package$math.INV_PI));
      }
      return tmp$;
    }
  });
  Object.defineProperty(DMat4.prototype, 'upperLeft', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.DMat4.get_upperLeft', wrapFunction(function () {
      var DMat3_init = _.com.curiouscreature.kotlin.math.DMat3;
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        var $this = this.x;
        var $this_0 = this.y;
        var $this_1 = this.z;
        return new DMat3_init(new Double3_init($this.x, $this.y, $this.z), new Double3_init($this_0.x, $this_0.y, $this_0.z), new Double3_init($this_1.x, $this_1.y, $this_1.z));
      };
    }))
  });
  DMat4.prototype.get_za3lpa$ = function (column) {
    switch (column) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:throw IllegalArgumentException_init('column must be in 0..3');
    }
  };
  DMat4.prototype.get_vux9f0$ = function (column, row) {
    return this.get_za3lpa$(column).get_za3lpa$(row);
  };
  DMat4.prototype.get_usshg8$ = function (column) {
    switch (column.name) {
      case 'X':
        return this.x;
      case 'Y':
        return this.y;
      case 'Z':
        return this.z;
      case 'W':
        return this.w;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  DMat4.prototype.get_8svv2y$ = function (column, row) {
    return this.get_usshg8$(column).get_za3lpa$(row);
  };
  DMat4.prototype.invoke_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(column - 1 | 0).get_za3lpa$(row - 1 | 0);
  };
  DMat4.prototype.invoke_224j3y$ = function (row, column, v) {
    this.set_224j3y$(column - 1 | 0, row - 1 | 0, v);
  };
  DMat4.prototype.set_72qx7c$ = function (column, v) {
    var $this = this.get_za3lpa$(column);
    $this.x = v.x;
    $this.y = v.y;
    $this.z = v.z;
    $this.w = v.w;
  };
  DMat4.prototype.set_224j3y$ = function (column, row, v) {
    this.get_za3lpa$(column).set_5wr77w$(row, v);
  };
  DMat4.prototype.unaryMinus = function () {
    return new DMat4(this.x.unaryMinus(), this.y.unaryMinus(), this.z.unaryMinus(), this.w.unaryMinus());
  };
  DMat4.prototype.inc = function () {
    this.x = this.x.inc();
    this.y = this.y.inc();
    this.z = this.z.inc();
    this.w = this.w.inc();
    return this;
  };
  DMat4.prototype.dec = function () {
    this.x = this.x.dec();
    this.y = this.y.dec();
    this.z = this.z.dec();
    this.w = this.w.dec();
    return this;
  };
  DMat4.prototype.plus_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new DMat4(new Double4($this.x + v, $this.y + v, $this.z + v, $this.w + v), new Double4($this_0.x + v, $this_0.y + v, $this_0.z + v, $this_0.w + v), new Double4($this_1.x + v, $this_1.y + v, $this_1.z + v, $this_1.w + v), new Double4($this_2.x + v, $this_2.y + v, $this_2.z + v, $this_2.w + v));
  };
  DMat4.prototype.minus_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new DMat4(new Double4($this.x - v, $this.y - v, $this.z - v, $this.w - v), new Double4($this_0.x - v, $this_0.y - v, $this_0.z - v, $this_0.w - v), new Double4($this_1.x - v, $this_1.y - v, $this_1.z - v, $this_1.w - v), new Double4($this_2.x - v, $this_2.y - v, $this_2.z - v, $this_2.w - v));
  };
  DMat4.prototype.times_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new DMat4(new Double4($this.x * v, $this.y * v, $this.z * v, $this.w * v), new Double4($this_0.x * v, $this_0.y * v, $this_0.z * v, $this_0.w * v), new Double4($this_1.x * v, $this_1.y * v, $this_1.z * v, $this_1.w * v), new Double4($this_2.x * v, $this_2.y * v, $this_2.z * v, $this_2.w * v));
  };
  DMat4.prototype.div_14dthe$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new DMat4(new Double4($this.x / v, $this.y / v, $this.z / v, $this.z / v), new Double4($this_0.x / v, $this_0.y / v, $this_0.z / v, $this_0.z / v), new Double4($this_1.x / v, $this_1.y / v, $this_1.z / v, $this_1.z / v), new Double4($this_2.x / v, $this_2.y / v, $this_2.z / v, $this_2.z / v));
  };
  DMat4.prototype.times_5g0se1$ = function (m) {
    var t = transpose_1(this);
    var a = t.x;
    var b = m.x;
    var a_0 = t.y;
    var b_0 = m.x;
    var a_1 = t.z;
    var b_1 = m.x;
    var a_2 = t.w;
    var b_2 = m.x;
    var a_3 = t.x;
    var b_3 = m.y;
    var a_4 = t.y;
    var b_4 = m.y;
    var a_5 = t.z;
    var b_5 = m.y;
    var a_6 = t.w;
    var b_6 = m.y;
    var a_7 = t.x;
    var b_7 = m.z;
    var a_8 = t.y;
    var b_8 = m.z;
    var a_9 = t.z;
    var b_9 = m.z;
    var a_10 = t.w;
    var b_10 = m.z;
    var a_11 = t.x;
    var b_11 = m.w;
    var a_12 = t.y;
    var b_12 = m.w;
    var a_13 = t.z;
    var b_13 = m.w;
    var a_14 = t.w;
    var b_14 = m.w;
    return new DMat4(new Double4(a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w, a_0.x * b_0.x + a_0.y * b_0.y + a_0.z * b_0.z + a_0.w * b_0.w, a_1.x * b_1.x + a_1.y * b_1.y + a_1.z * b_1.z + a_1.w * b_1.w, a_2.x * b_2.x + a_2.y * b_2.y + a_2.z * b_2.z + a_2.w * b_2.w), new Double4(a_3.x * b_3.x + a_3.y * b_3.y + a_3.z * b_3.z + a_3.w * b_3.w, a_4.x * b_4.x + a_4.y * b_4.y + a_4.z * b_4.z + a_4.w * b_4.w, a_5.x * b_5.x + a_5.y * b_5.y + a_5.z * b_5.z + a_5.w * b_5.w, a_6.x * b_6.x + a_6.y * b_6.y + a_6.z * b_6.z + a_6.w * b_6.w), new Double4(a_7.x * b_7.x + a_7.y * b_7.y + a_7.z * b_7.z + a_7.w * b_7.w, a_8.x * b_8.x + a_8.y * b_8.y + a_8.z * b_8.z + a_8.w * b_8.w, a_9.x * b_9.x + a_9.y * b_9.y + a_9.z * b_9.z + a_9.w * b_9.w, a_10.x * b_10.x + a_10.y * b_10.y + a_10.z * b_10.z + a_10.w * b_10.w), new Double4(a_11.x * b_11.x + a_11.y * b_11.y + a_11.z * b_11.z + a_11.w * b_11.w, a_12.x * b_12.x + a_12.y * b_12.y + a_12.z * b_12.z + a_12.w * b_12.w, a_13.x * b_13.x + a_13.y * b_13.y + a_13.z * b_13.z + a_13.w * b_13.w, a_14.x * b_14.x + a_14.y * b_14.y + a_14.z * b_14.z + a_14.w * b_14.w));
  };
  DMat4.prototype.times_v1l2ry$ = function (v) {
    var t = transpose_1(this);
    var a = t.x;
    var a_0 = t.y;
    var a_1 = t.z;
    var a_2 = t.w;
    return new Double4(a.x * v.x + a.y * v.y + a.z * v.z + a.w * v.w, a_0.x * v.x + a_0.y * v.y + a_0.z * v.z + a_0.w * v.w, a_1.x * v.x + a_1.y * v.y + a_1.z * v.z + a_1.w * v.w, a_2.x * v.x + a_2.y * v.y + a_2.z * v.z + a_2.w * v.w);
  };
  DMat4.prototype.toDoubleArray = function () {
    return new Float64Array([this.x.x, this.y.x, this.z.x, this.w.x, this.x.y, this.y.y, this.z.y, this.w.y, this.x.z, this.y.z, this.z.z, this.w.z, this.x.w, this.y.w, this.z.w, this.w.w]);
  };
  DMat4.prototype.toString = function () {
    return trimIndent('\n' + '            |' + this.x.x + ' ' + this.y.x + ' ' + this.z.x + ' ' + this.w.x + '|' + '\n' + '            |' + this.x.y + ' ' + this.y.y + ' ' + this.z.y + ' ' + this.w.y + '|' + '\n' + '            |' + this.x.z + ' ' + this.y.z + ' ' + this.z.z + ' ' + this.w.z + '|' + '\n' + '            |' + this.x.w + ' ' + this.y.w + ' ' + this.z.w + ' ' + this.w.w + '|' + '\n' + '            ');
  };
  DMat4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMat4',
    interfaces: []
  };
  function DMat4_init(right, up, forward, position, $this) {
    if (position === void 0)
      position = new Double3();
    $this = $this || Object.create(DMat4.prototype);
    DMat4.call($this, Double4_init_0(right), Double4_init_0(up), Double4_init_0(forward), Double4_init_0(position, 1.0));
    return $this;
  }
  function DMat4_init_0(m, $this) {
    $this = $this || Object.create(DMat4.prototype);
    DMat4.call($this, m.x.copy_6y0v78$(), m.y.copy_6y0v78$(), m.z.copy_6y0v78$(), m.w.copy_6y0v78$());
    return $this;
  }
  DMat4.prototype.component1 = function () {
    return this.x;
  };
  DMat4.prototype.component2 = function () {
    return this.y;
  };
  DMat4.prototype.component3 = function () {
    return this.z;
  };
  DMat4.prototype.component4 = function () {
    return this.w;
  };
  DMat4.prototype.copy_8ppf44$ = function (x, y, z, w) {
    return new DMat4(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  DMat4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  DMat4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  function transpose(m) {
    return new DMat2(new Double2(m.x.x, m.y.x), new Double2(m.x.y, m.y.y));
  }
  function transpose_0(m) {
    return new DMat3(new Double3(m.x.x, m.y.x, m.z.x), new Double3(m.x.y, m.y.y, m.z.y), new Double3(m.x.z, m.y.z, m.z.z));
  }
  function inverse(m) {
    var a = m.x.x;
    var b = m.x.y;
    var c = m.x.z;
    var d = m.y.x;
    var e = m.y.y;
    var f = m.y.z;
    var g = m.z.x;
    var h = m.z.y;
    var i = m.z.z;
    var A = e * i - f * h;
    var B = f * g - d * i;
    var C = d * h - e * g;
    var det = a * A + b * B + c * C;
    return DMat3$Companion_getInstance().of_yqxtqz$(new Float64Array([A / det, B / det, C / det, (c * h - b * i) / det, (a * i - c * g) / det, (b * g - a * h) / det, (b * f - c * e) / det, (c * d - a * f) / det, (a * e - b * d) / det]));
  }
  function transpose_1(m) {
    return new DMat4(new Double4(m.x.x, m.y.x, m.z.x, m.w.x), new Double4(m.x.y, m.y.y, m.z.y, m.w.y), new Double4(m.x.z, m.y.z, m.z.z, m.w.z), new Double4(m.x.w, m.y.w, m.z.w, m.w.w));
  }
  function inverse_0(m) {
    throw new NotImplementedError('An operation is not implemented: ' + 'Implement inverse(DMat4)');
  }
  function scale(s) {
    return new DMat4(new Double4(s.x), new Double4(void 0, s.y), new Double4(void 0, void 0, s.z));
  }
  function scale_0(m) {
    var $this = m.x;
    var v = new Double3($this.x, $this.y, $this.z);
    var x = v.x * v.x + v.y * v.y + v.z * v.z;
    var tmp$ = Math_0.sqrt(x);
    var $this_0 = m.y;
    var v_0 = new Double3($this_0.x, $this_0.y, $this_0.z);
    var x_0 = v_0.x * v_0.x + v_0.y * v_0.y + v_0.z * v_0.z;
    var tmp$_0 = Math_0.sqrt(x_0);
    var $this_1 = m.z;
    var v_1 = new Double3($this_1.x, $this_1.y, $this_1.z);
    var x_1 = v_1.x * v_1.x + v_1.y * v_1.y + v_1.z * v_1.z;
    return scale(new Double3(tmp$, tmp$_0, Math_0.sqrt(x_1)));
  }
  function translation(t) {
    return new DMat4(void 0, void 0, void 0, Double4_init_0(t, 1.0));
  }
  function translation_0(m) {
    var $this = m.w;
    return translation(new Double3($this.x, $this.y, $this.z));
  }
  function rotation(m) {
    var $this = m.x;
    var $this_0 = m.y;
    var $this_1 = m.z;
    return DMat4_init(normalize_0(new Double3($this.x, $this.y, $this.z)), normalize_0(new Double3($this_0.x, $this_0.y, $this_0.z)), normalize_0(new Double3($this_1.x, $this_1.y, $this_1.z)));
  }
  function rotation_0(d) {
    var $this = d.copy_yvo9jy$();
    $this.x = $this.x * (package$math.PI / 180.0);
    $this.y = $this.y * (package$math.PI / 180.0);
    $this.z = $this.z * (package$math.PI / 180.0);
    var r = $this;
    var $this_0 = r.copy_yvo9jy$();
    var x = $this_0.x;
    $this_0.x = Math_0.cos(x);
    var x_0 = $this_0.y;
    $this_0.y = Math_0.cos(x_0);
    var x_1 = $this_0.z;
    $this_0.z = Math_0.cos(x_1);
    var c = $this_0;
    var $this_1 = r.copy_yvo9jy$();
    var x_2 = $this_1.x;
    $this_1.x = Math_0.sin(x_2);
    var x_3 = $this_1.y;
    $this_1.y = Math_0.sin(x_3);
    var x_4 = $this_1.z;
    $this_1.z = Math_0.sin(x_4);
    var s = $this_1;
    return DMat4$Companion_getInstance().of_yqxtqz$(new Float64Array([c.y * c.z, -c.x * s.z + s.x * s.y * c.z, s.x * s.z + c.x * s.y * c.z, 0.0, c.y * s.z, c.x * c.z + s.x * s.y * s.z, -s.x * c.z + c.x * s.y * s.z, 0.0, -s.y, s.x * c.y, c.x * c.y, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function rotation_1(axis, angle) {
    var x = axis.x;
    var y = axis.y;
    var z = axis.z;
    var r = angle * (package$math.PI / 180.0);
    var c = Math_0.cos(r);
    var s = Math_0.sin(r);
    var d = 1.0 - c;
    return DMat4$Companion_getInstance().of_yqxtqz$(new Float64Array([x * x * d + c, x * y * d - z * s, x * y * d + y * s, 0.0, y * x * d + z * s, y * y * d + c, y * z * d - x * s, 0.0, z * x * d - y * s, z * y * d + x * s, z * z * d + c, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function normal(m) {
    var $this = m.x;
    var v = new Double3($this.x, $this.y, $this.z);
    var tmp$ = v.x * v.x + v.y * v.y + v.z * v.z;
    var $this_0 = m.y;
    var v_0 = new Double3($this_0.x, $this_0.y, $this_0.z);
    var tmp$_0 = v_0.x * v_0.x + v_0.y * v_0.y + v_0.z * v_0.z;
    var $this_1 = m.z;
    var v_1 = new Double3($this_1.x, $this_1.y, $this_1.z);
    var v_2 = new Double3(tmp$, tmp$_0, v_1.x * v_1.x + v_1.y * v_1.y + v_1.z * v_1.z);
    return scale(new Double3(1.0 / v_2.x, 1.0 / v_2.y, 1.0 / v_2.z)).times_5g0se1$(m);
  }
  function lookAt(eye, target, up) {
    if (up === void 0)
      up = new Double3(void 0, void 0, 1.0);
    return lookTowards(eye, new Double3(target.x - eye.x, target.y - eye.y, target.z - eye.z), up);
  }
  function lookTowards(eye, forward, up) {
    if (up === void 0)
      up = new Double3(void 0, void 0, 1.0);
    var f = normalize_0(forward);
    var r = normalize_0(new Double3(f.y * up.z - f.z * up.y, f.z * up.x - f.x * up.z, f.x * up.y - f.y * up.x));
    var u = normalize_0(new Double3(r.y * f.z - r.z * f.y, r.z * f.x - r.x * f.z, r.x * f.y - r.y * f.x));
    return new DMat4(Double4_init_0(r), Double4_init_0(u), Double4_init_0(f), Double4_init_0(eye, 1.0));
  }
  function perspective(fov, ratio, near, far) {
    var x = fov * (package$math.PI / 180.0) * 0.5;
    var t = 1.0 / Math_0.tan(x);
    var a = (far + near) / (far - near);
    var b = 2.0 * far * near / (far - near);
    var c = t / ratio;
    return new DMat4(new Double4(c), new Double4(void 0, t), new Double4(void 0, void 0, a, 1.0), new Double4(void 0, void 0, -b));
  }
  function ortho(l, r, b, t, n, f) {
    return new DMat4(new Double4(2.0 / (r - 1.0)), new Double4(void 0, 2.0 / (t - b)), new Double4(void 0, void 0, -2.0 / (f - n)), new Double4(-(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1.0));
  }
  function DRay(origin, direction) {
    if (origin === void 0)
      origin = new Double3();
    this.origin = origin;
    this.direction = direction;
  }
  DRay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DRay',
    interfaces: []
  };
  DRay.prototype.component1 = function () {
    return this.origin;
  };
  DRay.prototype.component2 = function () {
    return this.direction;
  };
  DRay.prototype.copy_6fvpsa$ = function (origin, direction) {
    return new DRay(origin === void 0 ? this.origin : origin, direction === void 0 ? this.direction : direction);
  };
  DRay.prototype.toString = function () {
    return 'DRay(origin=' + Kotlin.toString(this.origin) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  DRay.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  DRay.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.origin, other.origin) && Kotlin.equals(this.direction, other.direction)))));
  };
  function pointAt(r, t) {
    var tmp$ = r.origin;
    var $this = r.direction;
    var v = new Double3($this.x * t, $this.y * t, $this.z * t);
    return new Double3(tmp$.x + v.x, tmp$.y + v.y, tmp$.z + v.z);
  }
  var PI;
  var HALF_PI;
  var TWO_PI;
  var FOUR_PI;
  var INV_PI;
  var INV_TWO_PI;
  var INV_FOUR_PI;
  var clamp = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_yvo9jy$', function (x, min, max) {
    return x < min ? min : x > max ? max : x;
  });
  var mix = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_yvo9jy$', function (a, b, x) {
    return a * (1.0 - x) + b * x;
  });
  var degrees = defineInlineFunction('client.com.curiouscreature.kotlin.math.degrees_14dthe$', wrapFunction(function () {
    var math = _.com.curiouscreature.kotlin.math;
    return function (v) {
      return v * (180.0 * math.INV_PI);
    };
  }));
  var radians = defineInlineFunction('client.com.curiouscreature.kotlin.math.radians_14dthe$', wrapFunction(function () {
    var math = _.com.curiouscreature.kotlin.math;
    return function (v) {
      return v * (math.PI / 180.0);
    };
  }));
  var fract = defineInlineFunction('client.com.curiouscreature.kotlin.math.fract_14dthe$', function (v) {
    return v % 1;
  });
  var sqr = defineInlineFunction('client.com.curiouscreature.kotlin.math.sqr_14dthe$', function (v) {
    return v * v;
  });
  function DVectorComponent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DVectorComponent_initFields() {
    DVectorComponent_initFields = function () {
    };
    DVectorComponent$X_instance = new DVectorComponent('X', 0);
    DVectorComponent$Y_instance = new DVectorComponent('Y', 1);
    DVectorComponent$Z_instance = new DVectorComponent('Z', 2);
    DVectorComponent$W_instance = new DVectorComponent('W', 3);
    DVectorComponent$R_instance = new DVectorComponent('R', 4);
    DVectorComponent$G_instance = new DVectorComponent('G', 5);
    DVectorComponent$B_instance = new DVectorComponent('B', 6);
    DVectorComponent$A_instance = new DVectorComponent('A', 7);
    DVectorComponent$S_instance = new DVectorComponent('S', 8);
    DVectorComponent$T_instance = new DVectorComponent('T', 9);
    DVectorComponent$P_instance = new DVectorComponent('P', 10);
    DVectorComponent$Q_instance = new DVectorComponent('Q', 11);
  }
  var DVectorComponent$X_instance;
  function DVectorComponent$X_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$X_instance;
  }
  var DVectorComponent$Y_instance;
  function DVectorComponent$Y_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$Y_instance;
  }
  var DVectorComponent$Z_instance;
  function DVectorComponent$Z_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$Z_instance;
  }
  var DVectorComponent$W_instance;
  function DVectorComponent$W_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$W_instance;
  }
  var DVectorComponent$R_instance;
  function DVectorComponent$R_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$R_instance;
  }
  var DVectorComponent$G_instance;
  function DVectorComponent$G_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$G_instance;
  }
  var DVectorComponent$B_instance;
  function DVectorComponent$B_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$B_instance;
  }
  var DVectorComponent$A_instance;
  function DVectorComponent$A_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$A_instance;
  }
  var DVectorComponent$S_instance;
  function DVectorComponent$S_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$S_instance;
  }
  var DVectorComponent$T_instance;
  function DVectorComponent$T_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$T_instance;
  }
  var DVectorComponent$P_instance;
  function DVectorComponent$P_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$P_instance;
  }
  var DVectorComponent$Q_instance;
  function DVectorComponent$Q_getInstance() {
    DVectorComponent_initFields();
    return DVectorComponent$Q_instance;
  }
  DVectorComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DVectorComponent',
    interfaces: [Enum]
  };
  function DVectorComponent$values() {
    return [DVectorComponent$X_getInstance(), DVectorComponent$Y_getInstance(), DVectorComponent$Z_getInstance(), DVectorComponent$W_getInstance(), DVectorComponent$R_getInstance(), DVectorComponent$G_getInstance(), DVectorComponent$B_getInstance(), DVectorComponent$A_getInstance(), DVectorComponent$S_getInstance(), DVectorComponent$T_getInstance(), DVectorComponent$P_getInstance(), DVectorComponent$Q_getInstance()];
  }
  DVectorComponent.values = DVectorComponent$values;
  function DVectorComponent$valueOf(name) {
    switch (name) {
      case 'X':
        return DVectorComponent$X_getInstance();
      case 'Y':
        return DVectorComponent$Y_getInstance();
      case 'Z':
        return DVectorComponent$Z_getInstance();
      case 'W':
        return DVectorComponent$W_getInstance();
      case 'R':
        return DVectorComponent$R_getInstance();
      case 'G':
        return DVectorComponent$G_getInstance();
      case 'B':
        return DVectorComponent$B_getInstance();
      case 'A':
        return DVectorComponent$A_getInstance();
      case 'S':
        return DVectorComponent$S_getInstance();
      case 'T':
        return DVectorComponent$T_getInstance();
      case 'P':
        return DVectorComponent$P_getInstance();
      case 'Q':
        return DVectorComponent$Q_getInstance();
      default:throwISE('No enum constant com.curiouscreature.kotlin.math.DVectorComponent.' + name);
    }
  }
  DVectorComponent.valueOf_61zpoe$ = DVectorComponent$valueOf;
  function Double2(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  Object.defineProperty(Double2.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.set_r_14dthe$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Double2.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.set_g_14dthe$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Double2.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.set_s_14dthe$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Double2.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.set_t_14dthe$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Double2.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.get_xy', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.set_xy_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double2.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.get_rg', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.set_rg_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double2.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.get_st', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.set_st_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Double2.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      default:throw IllegalArgumentException_init('index must be X, Y, R, G, S or T');
    }
  };
  Double2.prototype.get_p1ayli$ = function (index1, index2) {
    return new Double2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Double2.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:throw IllegalArgumentException_init('index must be in 0..1');
    }
  };
  Double2.prototype.get_vux9f0$ = function (index1, index2) {
    return new Double2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Double2.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Double2.prototype.set_5wr77w$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..1');
    }
  };
  Double2.prototype.set_224j3y$ = function (index1, index2, v) {
    this.set_5wr77w$(index1, v);
    this.set_5wr77w$(index2, v);
  };
  Double2.prototype.set_irxtqd$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      default:throw IllegalArgumentException_init('index must be X, Y, R, G, S or T');
    }
  };
  Double2.prototype.set_8i5p88$ = function (index1, index2, v) {
    this.set_irxtqd$(index1, v);
    this.set_irxtqd$(index2, v);
  };
  Double2.prototype.unaryMinus = function () {
    return new Double2(-this.x, -this.y);
  };
  Double2.prototype.inc = function () {
    this.x += 1.0;
    this.y += 1.0;
    return this;
  };
  Double2.prototype.dec = function () {
    this.x -= 1.0;
    this.y -= 1.0;
    return this;
  };
  Double2.prototype.plus_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.plus_14dthe$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x + v, this.y + v);
    };
  }));
  Double2.prototype.minus_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.minus_14dthe$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x - v, this.y - v);
    };
  }));
  Double2.prototype.times_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.times_14dthe$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x * v, this.y * v);
    };
  }));
  Double2.prototype.div_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.div_14dthe$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x / v, this.y / v);
    };
  }));
  Double2.prototype.plus_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.plus_v1l2s0$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x + v.x, this.y + v.y);
    };
  }));
  Double2.prototype.minus_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.minus_v1l2s0$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x - v.x, this.y - v.y);
    };
  }));
  Double2.prototype.times_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.times_v1l2s0$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x * v.x, this.y * v.y);
    };
  }));
  Double2.prototype.div_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.div_v1l2s0$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v) {
      return new Double2_init(this.x / v.x, this.y / v.y);
    };
  }));
  Double2.prototype.transform_7fnk9s$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double2.transform_7fnk9s$', function (block) {
    this.x = block(this.x);
    this.y = block(this.y);
    return this;
  });
  Double2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Double2',
    interfaces: []
  };
  function Double2_init(v, $this) {
    $this = $this || Object.create(Double2.prototype);
    Double2.call($this, v.x, v.y);
    return $this;
  }
  function Double2_init_0(v, $this) {
    $this = $this || Object.create(Double2.prototype);
    Double2.call($this, v.x, v.y);
    return $this;
  }
  Double2.prototype.component1 = function () {
    return this.x;
  };
  Double2.prototype.component2 = function () {
    return this.y;
  };
  Double2.prototype.copy_lu1900$ = function (x, y) {
    return new Double2(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Double2.prototype.toString = function () {
    return 'Double2(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Double2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Double2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Double3(x, y, z) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  Object.defineProperty(Double3.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_r_14dthe$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Double3.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_g_14dthe$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Double3.prototype, 'b', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_b', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_b_14dthe$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Double3.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_s_14dthe$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Double3.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_t_14dthe$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Double3.prototype, 'p', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_p', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_p_14dthe$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Double3.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_xy', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_xy_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double3.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_rg', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_rg_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double3.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_st', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_st_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double3.prototype, 'rgb', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_rgb', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        return new Double3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_rgb_v1l2rz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Double3.prototype, 'xyz', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_xyz', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        return new Double3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_xyz_v1l2rz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Double3.prototype, 'stp', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.get_stp', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        return new Double3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.set_stp_v1l2rz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Double3.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      case 'Z':
      case 'B':
      case 'P':
        return this.z;
      default:throw IllegalArgumentException_init('index must be X, Y, Z, R, G, B, S, T or P');
    }
  };
  Double3.prototype.get_p1ayli$ = function (index1, index2) {
    return new Double2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Double3.prototype.get_6n7u8t$ = function (index1, index2, index3) {
    return new Double3(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3));
  };
  Double3.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:throw IllegalArgumentException_init('index must be in 0..2');
    }
  };
  Double3.prototype.get_vux9f0$ = function (index1, index2) {
    return new Double2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Double3.prototype.get_qt1dr2$ = function (index1, index2, index3) {
    return new Double3(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3));
  };
  Double3.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Double3.prototype.set_5wr77w$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      case 2:
        this.z = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..2');
    }
  };
  Double3.prototype.set_224j3y$ = function (index1, index2, v) {
    this.set_5wr77w$(index1, v);
    this.set_5wr77w$(index2, v);
  };
  Double3.prototype.set_gb4hak$ = function (index1, index2, index3, v) {
    this.set_5wr77w$(index1, v);
    this.set_5wr77w$(index2, v);
    this.set_5wr77w$(index3, v);
  };
  Double3.prototype.set_irxtqd$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      case 'Z':
      case 'B':
      case 'P':
        this.z = v;
        break;
      default:throw IllegalArgumentException_init('index must be X, Y, Z, R, G, B, S, T or P');
    }
  };
  Double3.prototype.set_8i5p88$ = function (index1, index2, v) {
    this.set_irxtqd$(index1, v);
    this.set_irxtqd$(index2, v);
  };
  Double3.prototype.set_rquenp$ = function (index1, index2, index3, v) {
    this.set_irxtqd$(index1, v);
    this.set_irxtqd$(index2, v);
    this.set_irxtqd$(index3, v);
  };
  Double3.prototype.unaryMinus = function () {
    return new Double3(-this.x, -this.y, -this.z);
  };
  Double3.prototype.inc = function () {
    this.x += 1.0;
    this.y += 1.0;
    this.z += 1.0;
    return this;
  };
  Double3.prototype.dec = function () {
    this.x -= 1.0;
    this.y -= 1.0;
    this.z -= 1.0;
    return this;
  };
  Double3.prototype.plus_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.plus_14dthe$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x + v, this.y + v, this.z + v);
    };
  }));
  Double3.prototype.minus_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.minus_14dthe$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x - v, this.y - v, this.z - v);
    };
  }));
  Double3.prototype.times_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.times_14dthe$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x * v, this.y * v, this.z * v);
    };
  }));
  Double3.prototype.div_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.div_14dthe$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x / v, this.y / v, this.z / v);
    };
  }));
  Double3.prototype.plus_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.plus_v1l2s0$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x + v.x, this.y + v.y, this.z);
    };
  }));
  Double3.prototype.minus_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.minus_v1l2s0$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x - v.x, this.y - v.y, this.z);
    };
  }));
  Double3.prototype.times_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.times_v1l2s0$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x * v.x, this.y * v.y, this.z);
    };
  }));
  Double3.prototype.div_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.div_v1l2s0$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x / v.x, this.y / v.y, this.z);
    };
  }));
  Double3.prototype.plus_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.plus_v1l2rz$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x + v.x, this.y + v.y, this.z + v.z);
    };
  }));
  Double3.prototype.minus_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.minus_v1l2rz$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x - v.x, this.y - v.y, this.z - v.z);
    };
  }));
  Double3.prototype.times_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.times_v1l2rz$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x * v.x, this.y * v.y, this.z * v.z);
    };
  }));
  Double3.prototype.div_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.div_v1l2rz$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v) {
      return new Double3_init(this.x / v.x, this.y / v.y, this.z / v.z);
    };
  }));
  Double3.prototype.transform_7fnk9s$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double3.transform_7fnk9s$', function (block) {
    this.x = block(this.x);
    this.y = block(this.y);
    this.z = block(this.z);
    return this;
  });
  Double3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Double3',
    interfaces: []
  };
  function Double3_init(v, z, $this) {
    if (z === void 0)
      z = 0.0;
    $this = $this || Object.create(Double3.prototype);
    Double3.call($this, v.x, v.y, z);
    return $this;
  }
  function Double3_init_0(v, $this) {
    $this = $this || Object.create(Double3.prototype);
    Double3.call($this, v.x, v.y, v.z);
    return $this;
  }
  function Double3_init_1(v, $this) {
    $this = $this || Object.create(Double3.prototype);
    Double3.call($this, v.x, v.y, v.z);
    return $this;
  }
  Double3.prototype.component1 = function () {
    return this.x;
  };
  Double3.prototype.component2 = function () {
    return this.y;
  };
  Double3.prototype.component3 = function () {
    return this.z;
  };
  Double3.prototype.copy_yvo9jy$ = function (x, y, z) {
    return new Double3(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  Double3.prototype.toString = function () {
    return 'Double3(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + ')';
  };
  Double3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  Double3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Double4(x, y, z, w) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    if (w === void 0)
      w = 0.0;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  Object.defineProperty(Double4.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_r_14dthe$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Double4.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_g_14dthe$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Double4.prototype, 'b', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_b', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_b_14dthe$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Double4.prototype, 'a', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_a', function () {
      return this.w;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_a_14dthe$', function (value) {
      this.w = value;
    })
  });
  Object.defineProperty(Double4.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_s_14dthe$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Double4.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_t_14dthe$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Double4.prototype, 'p', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_p', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_p_14dthe$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Double4.prototype, 'q', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_q', function () {
      return this.w;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_q_14dthe$', function (value) {
      this.w = value;
    })
  });
  Object.defineProperty(Double4.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_xy', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_xy_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double4.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_rg', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_rg_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double4.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_st', wrapFunction(function () {
      var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
      return function () {
        return new Double2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_st_v1l2s0$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Double4.prototype, 'rgb', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_rgb', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        return new Double3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_rgb_v1l2rz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Double4.prototype, 'xyz', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_xyz', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        return new Double3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_xyz_v1l2rz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Double4.prototype, 'stp', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_stp', wrapFunction(function () {
      var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
      return function () {
        return new Double3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_stp_v1l2rz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Double4.prototype, 'rgba', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_rgba', wrapFunction(function () {
      var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
      return function () {
        return new Double4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_rgba_v1l2ry$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Object.defineProperty(Double4.prototype, 'xyzw', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_xyzw', wrapFunction(function () {
      var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
      return function () {
        return new Double4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_xyzw_v1l2ry$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Object.defineProperty(Double4.prototype, 'stpq', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.get_stpq', wrapFunction(function () {
      var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
      return function () {
        return new Double4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.set_stpq_v1l2ry$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Double4.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      case 'Z':
      case 'B':
      case 'P':
        return this.z;
      case 'W':
      case 'A':
      case 'Q':
        return this.w;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Double4.prototype.get_p1ayli$ = function (index1, index2) {
    return new Double2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Double4.prototype.get_6n7u8t$ = function (index1, index2, index3) {
    return new Double3(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3));
  };
  Double4.prototype.get_e872hs$ = function (index1, index2, index3, index4) {
    return new Double4(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3), this.get_avfk89$(index4));
  };
  Double4.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:throw IllegalArgumentException_init('index must be in 0..3');
    }
  };
  Double4.prototype.get_vux9f0$ = function (index1, index2) {
    return new Double2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Double4.prototype.get_qt1dr2$ = function (index1, index2, index3) {
    return new Double3(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3));
  };
  Double4.prototype.get_tjonv8$ = function (index1, index2, index3, index4) {
    return new Double4(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3), this.get_za3lpa$(index4));
  };
  Double4.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Double4.prototype.set_5wr77w$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      case 2:
        this.z = v;
        break;
      case 3:
        this.w = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..3');
    }
  };
  Double4.prototype.set_224j3y$ = function (index1, index2, v) {
    this.set_5wr77w$(index1, v);
    this.set_5wr77w$(index2, v);
  };
  Double4.prototype.set_gb4hak$ = function (index1, index2, index3, v) {
    this.set_5wr77w$(index1, v);
    this.set_5wr77w$(index2, v);
    this.set_5wr77w$(index3, v);
  };
  Double4.prototype.set_sln7cy$ = function (index1, index2, index3, index4, v) {
    this.set_5wr77w$(index1, v);
    this.set_5wr77w$(index2, v);
    this.set_5wr77w$(index3, v);
    this.set_5wr77w$(index4, v);
  };
  Double4.prototype.set_irxtqd$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      case 'Z':
      case 'B':
      case 'P':
        this.z = v;
        break;
      case 'W':
      case 'A':
      case 'Q':
        this.w = v;
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Double4.prototype.set_8i5p88$ = function (index1, index2, v) {
    this.set_irxtqd$(index1, v);
    this.set_irxtqd$(index2, v);
  };
  Double4.prototype.set_rquenp$ = function (index1, index2, index3, v) {
    this.set_irxtqd$(index1, v);
    this.set_irxtqd$(index2, v);
    this.set_irxtqd$(index3, v);
  };
  Double4.prototype.set_bt1b4e$ = function (index1, index2, index3, index4, v) {
    this.set_irxtqd$(index1, v);
    this.set_irxtqd$(index2, v);
    this.set_irxtqd$(index3, v);
    this.set_irxtqd$(index4, v);
  };
  Double4.prototype.unaryMinus = function () {
    return new Double4(-this.x, -this.y, -this.z, -this.w);
  };
  Double4.prototype.inc = function () {
    this.x += 1.0;
    this.y += 1.0;
    this.z += 1.0;
    this.w += 1.0;
    return this;
  };
  Double4.prototype.dec = function () {
    this.x -= 1.0;
    this.y -= 1.0;
    this.z -= 1.0;
    this.w -= 1.0;
    return this;
  };
  Double4.prototype.plus_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.plus_14dthe$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x + v, this.y + v, this.z + v, this.w + v);
    };
  }));
  Double4.prototype.minus_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.minus_14dthe$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x - v, this.y - v, this.z - v, this.w - v);
    };
  }));
  Double4.prototype.times_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.times_14dthe$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x * v, this.y * v, this.z * v, this.w * v);
    };
  }));
  Double4.prototype.div_14dthe$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.div_14dthe$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x / v, this.y / v, this.z / v, this.z / v);
    };
  }));
  Double4.prototype.plus_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.plus_v1l2s0$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x + v.x, this.y + v.y, this.z, this.w);
    };
  }));
  Double4.prototype.minus_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.minus_v1l2s0$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x - v.x, this.y - v.y, this.z, this.w);
    };
  }));
  Double4.prototype.times_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.times_v1l2s0$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x * v.x, this.y * v.y, this.z, this.w);
    };
  }));
  Double4.prototype.div_v1l2s0$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.div_v1l2s0$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x / v.x, this.y / v.y, this.z, this.w);
    };
  }));
  Double4.prototype.plus_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.plus_v1l2rz$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x + v.x, this.y + v.y, this.z + v.z, this.w);
    };
  }));
  Double4.prototype.minus_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.minus_v1l2rz$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x - v.x, this.y - v.y, this.z - v.z, this.w);
    };
  }));
  Double4.prototype.times_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.times_v1l2rz$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x * v.x, this.y * v.y, this.z * v.z, this.w);
    };
  }));
  Double4.prototype.div_v1l2rz$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.div_v1l2rz$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x / v.x, this.y / v.y, this.z / v.z, this.w);
    };
  }));
  Double4.prototype.plus_v1l2ry$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.plus_v1l2ry$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
    };
  }));
  Double4.prototype.minus_v1l2ry$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.minus_v1l2ry$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
    };
  }));
  Double4.prototype.times_v1l2ry$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.times_v1l2ry$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x * v.x, this.y * v.y, this.z * v.z, this.w * v.w);
    };
  }));
  Double4.prototype.div_v1l2ry$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.div_v1l2ry$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v) {
      return new Double4_init(this.x / v.x, this.y / v.y, this.z / v.z, this.w / v.w);
    };
  }));
  Double4.prototype.transform_7fnk9s$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Double4.transform_7fnk9s$', function (block) {
    this.x = block(this.x);
    this.y = block(this.y);
    this.z = block(this.z);
    this.w = block(this.w);
    return this;
  });
  Double4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Double4',
    interfaces: []
  };
  function Double4_init(v, z, w, $this) {
    if (z === void 0)
      z = 0.0;
    if (w === void 0)
      w = 0.0;
    $this = $this || Object.create(Double4.prototype);
    Double4.call($this, v.x, v.y, z, w);
    return $this;
  }
  function Double4_init_0(v, w, $this) {
    if (w === void 0)
      w = 0.0;
    $this = $this || Object.create(Double4.prototype);
    Double4.call($this, v.x, v.y, v.z, w);
    return $this;
  }
  function Double4_init_1(v, $this) {
    $this = $this || Object.create(Double4.prototype);
    Double4.call($this, v.x, v.y, v.z, v.w);
    return $this;
  }
  function Double4_init_2(v, $this) {
    $this = $this || Object.create(Double4.prototype);
    Double4.call($this, v.x, v.y, v.z, v.w);
    return $this;
  }
  Double4.prototype.component1 = function () {
    return this.x;
  };
  Double4.prototype.component2 = function () {
    return this.y;
  };
  Double4.prototype.component3 = function () {
    return this.z;
  };
  Double4.prototype.component4 = function () {
    return this.w;
  };
  Double4.prototype.copy_6y0v78$ = function (x, y, z, w) {
    return new Double4(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Double4.prototype.toString = function () {
    return 'Double4(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + (', w=' + Kotlin.toString(this.w)) + ')';
  };
  Double4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Double4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  var plus = defineInlineFunction('client.com.curiouscreature.kotlin.math.plus_x4yc4h$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function ($receiver, v) {
      return new Double2_init($receiver + v.x, $receiver + v.y);
    };
  }));
  var minus = defineInlineFunction('client.com.curiouscreature.kotlin.math.minus_x4yc4h$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function ($receiver, v) {
      return new Double2_init($receiver - v.x, $receiver - v.y);
    };
  }));
  var times = defineInlineFunction('client.com.curiouscreature.kotlin.math.times_x4yc4h$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function ($receiver, v) {
      return new Double2_init($receiver * v.x, $receiver * v.y);
    };
  }));
  var div = defineInlineFunction('client.com.curiouscreature.kotlin.math.div_x4yc4h$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function ($receiver, v) {
      return new Double2_init($receiver / v.x, $receiver / v.y);
    };
  }));
  var abs = defineInlineFunction('client.com.curiouscreature.kotlin.math.abs_v1l2s0$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    var Math_0 = Math;
    return function (v) {
      var x = v.x;
      var tmp$ = Math_0.abs(x);
      var x_0 = v.y;
      return new Double2_init(tmp$, Math_0.abs(x_0));
    };
  }));
  var length = defineInlineFunction('client.com.curiouscreature.kotlin.math.length_v1l2s0$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var x = v.x * v.x + v.y * v.y;
      return Math_0.sqrt(x);
    };
  }));
  var length2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length2_v1l2s0$', function (v) {
    return v.x * v.x + v.y * v.y;
  });
  var distance = defineInlineFunction('client.com.curiouscreature.kotlin.math.distance_pkk790$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    var Math_0 = Math;
    return function (a, b) {
      var v = new Double2_init(a.x - b.x, a.y - b.y);
      var x = v.x * v.x + v.y * v.y;
      return Math_0.sqrt(x);
    };
  }));
  var dot = defineInlineFunction('client.com.curiouscreature.kotlin.math.dot_pkk790$', function (a, b) {
    return a.x * b.x + a.y * b.y;
  });
  function normalize(v) {
    var x = v.x * v.x + v.y * v.y;
    var l = 1.0 / Math_0.sqrt(x);
    return new Double2(v.x * l, v.y * l);
  }
  var reflect = defineInlineFunction('client.com.curiouscreature.kotlin.math.reflect_pkk790$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (i, n) {
      var $receiver = 2.0 * (n.x * i.x + n.y * i.y);
      var v = new Double2_init($receiver * n.x, $receiver * n.y);
      return new Double2_init(i.x - v.x, i.y - v.y);
    };
  }));
  function refract(i, n, eta) {
    var d = n.x * i.x + n.y * i.y;
    var k = 1.0 - eta * eta * (1.0 - d * d);
    var tmp$;
    if (k < 0.0)
      tmp$ = new Double2(0.0);
    else {
      var tmp$_0 = new Double2(eta * i.x, eta * i.y);
      var $receiver = eta * d + Math_0.sqrt(k);
      var v = new Double2($receiver * n.x, $receiver * n.y);
      tmp$ = new Double2(tmp$_0.x - v.x, tmp$_0.y - v.y);
    }
    return tmp$;
  }
  var clamp_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_dseq7g$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v, min, max) {
      var x = v.x;
      var x_0 = v.y;
      return new Double2_init(x < min ? min : x > max ? max : x, x_0 < min ? min : x_0 > max ? max : x_0);
    };
  }));
  var clamp_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_jxtrjs$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (v, min, max) {
      var x = v.x;
      var min_0 = min.x;
      var max_0 = max.x;
      var x_0 = v.y;
      var min_1 = min.y;
      var max_1 = max.y;
      return new Double2_init(x < min_0 ? min_0 : x > max_0 ? max_0 : x, x_0 < min_1 ? min_1 : x_0 > max_1 ? max_1 : x_0);
    };
  }));
  var mix_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_prj3ie$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (a, b, x) {
      return new Double2_init(a.x * (1.0 - x) + b.x * x, a.y * (1.0 - x) + b.y * x);
    };
  }));
  var mix_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_jxtrjs$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    return function (a, b, x) {
      var x_0 = x.x;
      var x_1 = x.y;
      return new Double2_init(a.x * (1.0 - x_0) + b.x * x_0, a.y * (1.0 - x_1) + b.y * x_1);
    };
  }));
  var min = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_v1l2s0$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var a = v.x;
      var b = v.y;
      return Math_0.min(a, b);
    };
  }));
  var min_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_pkk790$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.min(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      return new Double2_init(tmp$, Math_0.min(a_1, b_1));
    };
  }));
  var max = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_v1l2s0$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var a = v.x;
      var b = v.y;
      return Math_0.max(a, b);
    };
  }));
  var max_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_pkk790$', wrapFunction(function () {
    var Double2_init = _.com.curiouscreature.kotlin.math.Double2;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.max(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      return new Double2_init(tmp$, Math_0.max(a_1, b_1));
    };
  }));
  var transform = defineInlineFunction('client.com.curiouscreature.kotlin.math.transform_4p7vqc$', function (v, block) {
    var $this = v.copy_lu1900$();
    $this.x = block($this.x);
    $this.y = block($this.y);
    return $this;
  });
  var lessThan = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_i2yrge$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x < b, a.y < b);
    };
  }));
  var lessThan_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_pkk790$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x < b.x, a.y < b.y);
    };
  }));
  var lessThanEqual = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_i2yrge$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x <= b, a.y <= b);
    };
  }));
  var lessThanEqual_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_pkk790$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x <= b.x, a.y <= b.y);
    };
  }));
  var greaterThan = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_i2yrge$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x > b, a.y > b);
    };
  }));
  var greaterThan_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_pkk790$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x > b.y, a.y > b.y);
    };
  }));
  var greaterThanEqual = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_i2yrge$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x >= b, a.y >= b);
    };
  }));
  var greaterThanEqual_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_pkk790$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x >= b.x, a.y >= b.y);
    };
  }));
  var equal = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_i2yrge$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x === b, a.y === b);
    };
  }));
  var equal_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_pkk790$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x === b.x, a.y === b.y);
    };
  }));
  var notEqual = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_i2yrge$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x !== b, a.y !== b);
    };
  }));
  var notEqual_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_pkk790$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x !== b.x, a.y !== b.y);
    };
  }));
  var plus_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.plus_x4yc4g$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function ($receiver, v) {
      return new Double3_init($receiver + v.x, $receiver + v.y, $receiver + v.z);
    };
  }));
  var minus_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.minus_x4yc4g$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function ($receiver, v) {
      return new Double3_init($receiver - v.x, $receiver - v.y, $receiver - v.z);
    };
  }));
  var times_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.times_x4yc4g$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function ($receiver, v) {
      return new Double3_init($receiver * v.x, $receiver * v.y, $receiver * v.z);
    };
  }));
  var div_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.div_x4yc4g$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function ($receiver, v) {
      return new Double3_init($receiver / v.x, $receiver / v.y, $receiver / v.z);
    };
  }));
  var abs_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.abs_v1l2rz$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    var Math_0 = Math;
    return function (v) {
      var x = v.x;
      var tmp$ = Math_0.abs(x);
      var x_0 = v.y;
      var tmp$_0 = Math_0.abs(x_0);
      var x_1 = v.z;
      return new Double3_init(tmp$, tmp$_0, Math_0.abs(x_1));
    };
  }));
  var length_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length_v1l2rz$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var x = v.x * v.x + v.y * v.y + v.z * v.z;
      return Math_0.sqrt(x);
    };
  }));
  var length2_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length2_v1l2rz$', function (v) {
    return v.x * v.x + v.y * v.y + v.z * v.z;
  });
  var distance_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.distance_6fvpsa$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    var Math_0 = Math;
    return function (a, b) {
      var v = new Double3_init(a.x - b.x, a.y - b.y, a.z - b.z);
      var x = v.x * v.x + v.y * v.y + v.z * v.z;
      return Math_0.sqrt(x);
    };
  }));
  var dot_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.dot_6fvpsa$', function (a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  });
  var cross = defineInlineFunction('client.com.curiouscreature.kotlin.math.cross_6fvpsa$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (a, b) {
      return new Double3_init(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
    };
  }));
  var x = defineInlineFunction('client.com.curiouscreature.kotlin.math.x_4yfkq5$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function ($receiver, v) {
      return new Double3_init($receiver.y * v.z - $receiver.z * v.y, $receiver.z * v.x - $receiver.x * v.z, $receiver.x * v.y - $receiver.y * v.x);
    };
  }));
  function normalize_0(v) {
    var x = v.x * v.x + v.y * v.y + v.z * v.z;
    var l = 1.0 / Math_0.sqrt(x);
    return new Double3(v.x * l, v.y * l, v.z * l);
  }
  var reflect_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.reflect_6fvpsa$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (i, n) {
      var $receiver = 2.0 * (n.x * i.x + n.y * i.y + n.z * i.z);
      var v = new Double3_init($receiver * n.x, $receiver * n.y, $receiver * n.z);
      return new Double3_init(i.x - v.x, i.y - v.y, i.z - v.z);
    };
  }));
  function refract_0(i, n, eta) {
    var d = n.x * i.x + n.y * i.y + n.z * i.z;
    var k = 1.0 - eta * eta * (1.0 - d * d);
    var tmp$;
    if (k < 0.0)
      tmp$ = new Double3(0.0);
    else {
      var tmp$_0 = new Double3(eta * i.x, eta * i.y, eta * i.z);
      var $receiver = eta * d + Math_0.sqrt(k);
      var v = new Double3($receiver * n.x, $receiver * n.y, $receiver * n.z);
      tmp$ = new Double3(tmp$_0.x - v.x, tmp$_0.y - v.y, tmp$_0.z - v.z);
    }
    return tmp$;
  }
  var clamp_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_2br5ij$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v, min, max) {
      var x = v.x;
      var x_0 = v.y;
      var x_1 = v.z;
      return new Double3_init(x < min ? min : x > max ? max : x, x_0 < min ? min : x_0 > max ? max : x_0, x_1 < min ? min : x_1 > max ? max : x_1);
    };
  }));
  var clamp_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_ktiq11$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (v, min, max) {
      var x = v.x;
      var min_0 = min.x;
      var max_0 = max.x;
      var x_0 = v.y;
      var min_1 = min.y;
      var max_1 = max.y;
      var x_1 = v.z;
      var min_2 = min.z;
      var max_2 = max.z;
      return new Double3_init(x < min_0 ? min_0 : x > max_0 ? max_0 : x, x_0 < min_1 ? min_1 : x_0 > max_1 ? max_1 : x_0, x_1 < min_2 ? min_2 : x_1 > max_2 ? max_2 : x_1);
    };
  }));
  var mix_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_8v72t4$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (a, b, x) {
      return new Double3_init(a.x * (1.0 - x) + b.x * x, a.y * (1.0 - x) + b.y * x, a.z * (1.0 - x) + b.z * x);
    };
  }));
  var mix_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_ktiq11$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    return function (a, b, x) {
      var x_0 = x.x;
      var x_1 = x.y;
      var x_2 = x.z;
      return new Double3_init(a.x * (1.0 - x_0) + b.x * x_0, a.y * (1.0 - x_1) + b.y * x_1, a.z * (1.0 - x_2) + b.z * x_2);
    };
  }));
  var min_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_v1l2rz$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var a = v.y;
      var b = v.z;
      var b_0 = Math_0.min(a, b);
      return Math_0.min(tmp$, b_0);
    };
  }));
  var min_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_6fvpsa$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.min(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.min(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      return new Double3_init(tmp$, tmp$_0, Math_0.min(a_2, b_2));
    };
  }));
  var max_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_v1l2rz$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var a = v.y;
      var b = v.z;
      var b_0 = Math_0.max(a, b);
      return Math_0.max(tmp$, b_0);
    };
  }));
  var max_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_6fvpsa$', wrapFunction(function () {
    var Double3_init = _.com.curiouscreature.kotlin.math.Double3;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.max(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.max(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      return new Double3_init(tmp$, tmp$_0, Math_0.max(a_2, b_2));
    };
  }));
  var transform_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.transform_4klkkl$', function (v, block) {
    var $this = v.copy_yvo9jy$();
    $this.x = block($this.x);
    $this.y = block($this.y);
    $this.z = block($this.z);
    return $this;
  });
  var lessThan_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_6ulayr$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x < b, a.y < b, a.z < b);
    };
  }));
  var lessThan_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_6fvpsa$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x < b.x, a.y < b.y, a.z < b.z);
    };
  }));
  var lessThanEqual_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_6ulayr$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x <= b, a.y <= b, a.z <= b);
    };
  }));
  var lessThanEqual_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_6fvpsa$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x <= b.x, a.y <= b.y, a.z <= b.z);
    };
  }));
  var greaterThan_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_6ulayr$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x > b, a.y > b, a.z > b);
    };
  }));
  var greaterThan_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_6fvpsa$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x > b.y, a.y > b.y, a.z > b.z);
    };
  }));
  var greaterThanEqual_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_6ulayr$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x >= b, a.y >= b, a.z >= b);
    };
  }));
  var greaterThanEqual_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_6fvpsa$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x >= b.x, a.y >= b.y, a.z >= b.z);
    };
  }));
  var equal_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_6ulayr$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x === b, a.y === b, a.z === b);
    };
  }));
  var equal_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_6fvpsa$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x === b.x, a.y === b.y, a.z === b.z);
    };
  }));
  var notEqual_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_6ulayr$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x !== b, a.y !== b, a.z !== b);
    };
  }));
  var notEqual_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_6fvpsa$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x !== b.x, a.y !== b.y, a.z !== b.z);
    };
  }));
  var plus_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.plus_x4yc4f$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function ($receiver, v) {
      return new Double4_init($receiver + v.x, $receiver + v.y, $receiver + v.z, $receiver + v.w);
    };
  }));
  var minus_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.minus_x4yc4f$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function ($receiver, v) {
      return new Double4_init($receiver - v.x, $receiver - v.y, $receiver - v.z, $receiver - v.w);
    };
  }));
  var times_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.times_x4yc4f$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function ($receiver, v) {
      return new Double4_init($receiver * v.x, $receiver * v.y, $receiver * v.z, $receiver * v.w);
    };
  }));
  var div_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.div_x4yc4f$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function ($receiver, v) {
      return new Double4_init($receiver / v.x, $receiver / v.y, $receiver / v.z, $receiver / v.w);
    };
  }));
  var abs_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.abs_v1l2ry$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    var Math_0 = Math;
    return function (v) {
      var x = v.x;
      var tmp$ = Math_0.abs(x);
      var x_0 = v.y;
      var tmp$_0 = Math_0.abs(x_0);
      var x_1 = v.z;
      var tmp$_1 = Math_0.abs(x_1);
      var x_2 = v.w;
      return new Double4_init(tmp$, tmp$_0, tmp$_1, Math_0.abs(x_2));
    };
  }));
  var length_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length_v1l2ry$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var x = v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
      return Math_0.sqrt(x);
    };
  }));
  var length2_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length2_v1l2ry$', function (v) {
    return v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
  });
  var distance_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.distance_wksf5k$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    var Math_0 = Math;
    return function (a, b) {
      var v = new Double4_init(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
      var x = v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
      return Math_0.sqrt(x);
    };
  }));
  var dot_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.dot_wksf5k$', function (a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
  });
  function normalize_1(v) {
    var x = v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
    var l = 1.0 / Math_0.sqrt(x);
    return new Double4(v.x * l, v.y * l, v.z * l, v.w * l);
  }
  var clamp_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_94wf6e$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v, min, max) {
      var x = v.x;
      var x_0 = v.y;
      var x_1 = v.z;
      var x_2 = v.w;
      return new Double4_init(x < min ? min : x > max ? max : x, x_0 < min ? min : x_0 > max ? max : x_0, x_1 < min ? min : x_1 > max ? max : x_1, x_2 < min ? min : x_2 > max ? max : x_2);
    };
  }));
  var clamp_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_9g8uda$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (v, min, max) {
      var x = v.x;
      var min_0 = min.x;
      var max_0 = max.x;
      var x_0 = v.y;
      var min_1 = min.y;
      var max_1 = max.y;
      var x_1 = v.z;
      var min_2 = min.z;
      var max_2 = max.z;
      var x_2 = v.w;
      var min_3 = min.z;
      var max_3 = max.w;
      return new Double4_init(x < min_0 ? min_0 : x > max_0 ? max_0 : x, x_0 < min_1 ? min_1 : x_0 > max_1 ? max_1 : x_0, x_1 < min_2 ? min_2 : x_1 > max_2 ? max_2 : x_1, x_2 < min_3 ? min_3 : x_2 > max_3 ? max_3 : x_2);
    };
  }));
  var mix_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_rj6sui$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (a, b, x) {
      return new Double4_init(a.x * (1.0 - x) + b.x * x, a.y * (1.0 - x) + b.y * x, a.z * (1.0 - x) + b.z * x, a.w * (1.0 - x) + b.w * x);
    };
  }));
  var mix_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_9g8uda$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    return function (a, b, x) {
      var x_0 = x.x;
      var x_1 = x.y;
      var x_2 = x.z;
      var x_3 = x.w;
      return new Double4_init(a.x * (1.0 - x_0) + b.x * x_0, a.y * (1.0 - x_1) + b.y * x_1, a.z * (1.0 - x_2) + b.z * x_2, a.w * (1.0 - x_3) + b.w * x_3);
    };
  }));
  var min_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_v1l2ry$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var tmp$_0 = v.y;
      var a = v.z;
      var b = v.w;
      var b_0 = Math_0.min(a, b);
      var b_1 = Math_0.min(tmp$_0, b_0);
      return Math_0.min(tmp$, b_1);
    };
  }));
  var min_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_wksf5k$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.min(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.min(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      var tmp$_1 = Math_0.min(a_2, b_2);
      var a_3 = a.w;
      var b_3 = b.w;
      return new Double4_init(tmp$, tmp$_0, tmp$_1, Math_0.min(a_3, b_3));
    };
  }));
  var max_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_v1l2ry$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var tmp$_0 = v.y;
      var a = v.z;
      var b = v.w;
      var b_0 = Math_0.max(a, b);
      var b_1 = Math_0.max(tmp$_0, b_0);
      return Math_0.max(tmp$, b_1);
    };
  }));
  var max_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_wksf5k$', wrapFunction(function () {
    var Double4_init = _.com.curiouscreature.kotlin.math.Double4;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.max(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.max(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      var tmp$_1 = Math_0.max(a_2, b_2);
      var a_3 = a.w;
      var b_3 = b.w;
      return new Double4_init(tmp$, tmp$_0, tmp$_1, Math_0.max(a_3, b_3));
    };
  }));
  var transform_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.transform_4fz9eu$', function (v, block) {
    var $this = v.copy_6y0v78$();
    $this.x = block($this.x);
    $this.y = block($this.y);
    $this.z = block($this.z);
    $this.w = block($this.w);
    return $this;
  });
  function MatrixColumn(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MatrixColumn_initFields() {
    MatrixColumn_initFields = function () {
    };
    MatrixColumn$X_instance = new MatrixColumn('X', 0);
    MatrixColumn$Y_instance = new MatrixColumn('Y', 1);
    MatrixColumn$Z_instance = new MatrixColumn('Z', 2);
    MatrixColumn$W_instance = new MatrixColumn('W', 3);
  }
  var MatrixColumn$X_instance;
  function MatrixColumn$X_getInstance() {
    MatrixColumn_initFields();
    return MatrixColumn$X_instance;
  }
  var MatrixColumn$Y_instance;
  function MatrixColumn$Y_getInstance() {
    MatrixColumn_initFields();
    return MatrixColumn$Y_instance;
  }
  var MatrixColumn$Z_instance;
  function MatrixColumn$Z_getInstance() {
    MatrixColumn_initFields();
    return MatrixColumn$Z_instance;
  }
  var MatrixColumn$W_instance;
  function MatrixColumn$W_getInstance() {
    MatrixColumn_initFields();
    return MatrixColumn$W_instance;
  }
  MatrixColumn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatrixColumn',
    interfaces: [Enum]
  };
  function MatrixColumn$values() {
    return [MatrixColumn$X_getInstance(), MatrixColumn$Y_getInstance(), MatrixColumn$Z_getInstance(), MatrixColumn$W_getInstance()];
  }
  MatrixColumn.values = MatrixColumn$values;
  function MatrixColumn$valueOf(name) {
    switch (name) {
      case 'X':
        return MatrixColumn$X_getInstance();
      case 'Y':
        return MatrixColumn$Y_getInstance();
      case 'Z':
        return MatrixColumn$Z_getInstance();
      case 'W':
        return MatrixColumn$W_getInstance();
      default:throwISE('No enum constant com.curiouscreature.kotlin.math.MatrixColumn.' + name);
    }
  }
  MatrixColumn.valueOf_61zpoe$ = MatrixColumn$valueOf;
  function Mat2(x, y) {
    Mat2$Companion_getInstance();
    if (x === void 0)
      x = new Float2(1.0);
    if (y === void 0)
      y = new Float2(void 0, 1.0);
    this.x = x;
    this.y = y;
  }
  function Mat2$Companion() {
    Mat2$Companion_instance = this;
  }
  Mat2$Companion.prototype.of_8cqhcw$ = function (a) {
    if (!(a.length >= 4)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return new Mat2(new Float2(a[0], a[2]), new Float2(a[1], a[3]));
  };
  Mat2$Companion.prototype.identity = function () {
    return new Mat2();
  };
  Mat2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Mat2$Companion_instance = null;
  function Mat2$Companion_getInstance() {
    if (Mat2$Companion_instance === null) {
      new Mat2$Companion();
    }
    return Mat2$Companion_instance;
  }
  Mat2.prototype.get_za3lpa$ = function (column) {
    switch (column) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:throw IllegalArgumentException_init('column must be in 0..1');
    }
  };
  Mat2.prototype.get_vux9f0$ = function (column, row) {
    return this.get_za3lpa$(column).get_za3lpa$(row);
  };
  Mat2.prototype.get_usshg8$ = function (column) {
    switch (column.name) {
      case 'X':
        return this.x;
      case 'Y':
        return this.y;
      default:throw IllegalArgumentException_init('column must be X or Y');
    }
  };
  Mat2.prototype.get_8svv2y$ = function (column, row) {
    return this.get_usshg8$(column).get_za3lpa$(row);
  };
  Mat2.prototype.invoke_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(column - 1 | 0).get_za3lpa$(row - 1 | 0);
  };
  Mat2.prototype.invoke_n0b4r3$ = function (row, column, v) {
    this.set_n0b4r3$(column - 1 | 0, row - 1 | 0, v);
  };
  Mat2.prototype.set_67ch0v$ = function (column, v) {
    var $this = this.get_za3lpa$(column);
    $this.x = v.x;
    $this.y = v.y;
  };
  Mat2.prototype.set_n0b4r3$ = function (column, row, v) {
    this.get_za3lpa$(column).set_24o109$(row, v);
  };
  Mat2.prototype.unaryMinus = function () {
    return new Mat2(this.x.unaryMinus(), this.y.unaryMinus());
  };
  Mat2.prototype.inc = function () {
    this.x = this.x.inc();
    this.y = this.y.inc();
    return this;
  };
  Mat2.prototype.dec = function () {
    this.x = this.x.dec();
    this.y = this.y.dec();
    return this;
  };
  Mat2.prototype.plus_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new Mat2(new Float2($this.x + v, $this.y + v), new Float2($this_0.x + v, $this_0.y + v));
  };
  Mat2.prototype.minus_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new Mat2(new Float2($this.x - v, $this.y - v), new Float2($this_0.x - v, $this_0.y - v));
  };
  Mat2.prototype.times_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new Mat2(new Float2($this.x * v, $this.y * v), new Float2($this_0.x * v, $this_0.y * v));
  };
  Mat2.prototype.div_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    return new Mat2(new Float2($this.x / v, $this.y / v), new Float2($this_0.x / v, $this_0.y / v));
  };
  Mat2.prototype.times_kg8hdv$ = function (m) {
    var t = transpose_2(this);
    var a = t.x;
    var b = m.x;
    var a_0 = t.y;
    var b_0 = m.x;
    var a_1 = t.x;
    var b_1 = m.y;
    var a_2 = t.y;
    var b_2 = m.y;
    return new Mat2(new Float2(a.x * b.x + a.y * b.y, a_0.x * b_0.x + a_0.y * b_0.y), new Float2(a_1.x * b_1.x + a_1.y * b_1.y, a_2.x * b_2.x + a_2.y * b_2.y));
  };
  Mat2.prototype.times_pb2vnd$ = function (v) {
    var t = transpose_2(this);
    var a = t.x;
    var a_0 = t.y;
    return new Float2(a.x * v.x + a.y * v.y, a_0.x * v.x + a_0.y * v.y);
  };
  Mat2.prototype.toFloatArray = function () {
    return new Float32Array([this.x.x, this.y.x, this.x.y, this.y.y]);
  };
  Mat2.prototype.toString = function () {
    return trimIndent('\n' + '            |' + this.x.x + ' ' + this.y.x + '|' + '\n' + '            |' + this.x.y + ' ' + this.y.y + '|' + '\n' + '            ');
  };
  Mat2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mat2',
    interfaces: []
  };
  function Mat2_init(m, $this) {
    $this = $this || Object.create(Mat2.prototype);
    Mat2.call($this, m.x.copy_dleff0$(), m.y.copy_dleff0$());
    return $this;
  }
  Mat2.prototype.component1 = function () {
    return this.x;
  };
  Mat2.prototype.component2 = function () {
    return this.y;
  };
  Mat2.prototype.copy_ibf3jo$ = function (x, y) {
    return new Mat2(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Mat2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Mat2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Mat3(x, y, z) {
    Mat3$Companion_getInstance();
    if (x === void 0)
      x = new Float3(1.0);
    if (y === void 0)
      y = new Float3(void 0, 1.0);
    if (z === void 0)
      z = new Float3(void 0, void 0, 1.0);
    this.x = x;
    this.y = y;
    this.z = z;
  }
  function Mat3$Companion() {
    Mat3$Companion_instance = this;
  }
  Mat3$Companion.prototype.of_8cqhcw$ = function (a) {
    if (!(a.length >= 9)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return new Mat3(new Float3(a[0], a[3], a[6]), new Float3(a[1], a[4], a[7]), new Float3(a[2], a[5], a[8]));
  };
  Mat3$Companion.prototype.identity = function () {
    return new Mat3();
  };
  Mat3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Mat3$Companion_instance = null;
  function Mat3$Companion_getInstance() {
    if (Mat3$Companion_instance === null) {
      new Mat3$Companion();
    }
    return Mat3$Companion_instance;
  }
  Mat3.prototype.get_za3lpa$ = function (column) {
    switch (column) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:throw IllegalArgumentException_init('column must be in 0..2');
    }
  };
  Mat3.prototype.get_vux9f0$ = function (column, row) {
    return this.get_za3lpa$(column).get_za3lpa$(row);
  };
  Mat3.prototype.get_usshg8$ = function (column) {
    switch (column.name) {
      case 'X':
        return this.x;
      case 'Y':
        return this.y;
      case 'Z':
        return this.z;
      default:throw IllegalArgumentException_init('column must be X, Y or Z');
    }
  };
  Mat3.prototype.get_8svv2y$ = function (column, row) {
    return this.get_usshg8$(column).get_za3lpa$(row);
  };
  Mat3.prototype.invoke_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(column - 1 | 0).get_za3lpa$(row - 1 | 0);
  };
  Mat3.prototype.invoke_n0b4r3$ = function (row, column, v) {
    this.set_n0b4r3$(column - 1 | 0, row - 1 | 0, v);
  };
  Mat3.prototype.set_67ch0u$ = function (column, v) {
    var $this = this.get_za3lpa$(column);
    $this.x = v.x;
    $this.y = v.y;
    $this.z = v.z;
  };
  Mat3.prototype.set_n0b4r3$ = function (column, row, v) {
    this.get_za3lpa$(column).set_24o109$(row, v);
  };
  Mat3.prototype.unaryMinus = function () {
    return new Mat3(this.x.unaryMinus(), this.y.unaryMinus(), this.z.unaryMinus());
  };
  Mat3.prototype.inc = function () {
    this.x = this.x.inc();
    this.y = this.y.inc();
    this.z = this.z.inc();
    return this;
  };
  Mat3.prototype.dec = function () {
    this.x = this.x.dec();
    this.y = this.y.dec();
    this.z = this.z.dec();
    return this;
  };
  Mat3.prototype.plus_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new Mat3(new Float3($this.x + v, $this.y + v, $this.z + v), new Float3($this_0.x + v, $this_0.y + v, $this_0.z + v), new Float3($this_1.x + v, $this_1.y + v, $this_1.z + v));
  };
  Mat3.prototype.minus_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new Mat3(new Float3($this.x - v, $this.y - v, $this.z - v), new Float3($this_0.x - v, $this_0.y - v, $this_0.z - v), new Float3($this_1.x - v, $this_1.y - v, $this_1.z - v));
  };
  Mat3.prototype.times_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new Mat3(new Float3($this.x * v, $this.y * v, $this.z * v), new Float3($this_0.x * v, $this_0.y * v, $this_0.z * v), new Float3($this_1.x * v, $this_1.y * v, $this_1.z * v));
  };
  Mat3.prototype.div_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    return new Mat3(new Float3($this.x / v, $this.y / v, $this.z / v), new Float3($this_0.x / v, $this_0.y / v, $this_0.z / v), new Float3($this_1.x / v, $this_1.y / v, $this_1.z / v));
  };
  Mat3.prototype.times_kg8hdw$ = function (m) {
    var t = transpose_3(this);
    var a = t.x;
    var b = m.x;
    var a_0 = t.y;
    var b_0 = m.x;
    var a_1 = t.z;
    var b_1 = m.x;
    var a_2 = t.x;
    var b_2 = m.y;
    var a_3 = t.y;
    var b_3 = m.y;
    var a_4 = t.z;
    var b_4 = m.y;
    var a_5 = t.x;
    var b_5 = m.z;
    var a_6 = t.y;
    var b_6 = m.z;
    var a_7 = t.z;
    var b_7 = m.z;
    return new Mat3(new Float3(a.x * b.x + a.y * b.y + a.z * b.z, a_0.x * b_0.x + a_0.y * b_0.y + a_0.z * b_0.z, a_1.x * b_1.x + a_1.y * b_1.y + a_1.z * b_1.z), new Float3(a_2.x * b_2.x + a_2.y * b_2.y + a_2.z * b_2.z, a_3.x * b_3.x + a_3.y * b_3.y + a_3.z * b_3.z, a_4.x * b_4.x + a_4.y * b_4.y + a_4.z * b_4.z), new Float3(a_5.x * b_5.x + a_5.y * b_5.y + a_5.z * b_5.z, a_6.x * b_6.x + a_6.y * b_6.y + a_6.z * b_6.z, a_7.x * b_7.x + a_7.y * b_7.y + a_7.z * b_7.z));
  };
  Mat3.prototype.times_pb2vnc$ = function (v) {
    var t = transpose_3(this);
    var a = t.x;
    var a_0 = t.y;
    var a_1 = t.z;
    return new Float3(a.x * v.x + a.y * v.y + a.z * v.z, a_0.x * v.x + a_0.y * v.y + a_0.z * v.z, a_1.x * v.x + a_1.y * v.y + a_1.z * v.z);
  };
  Mat3.prototype.toFloatArray = function () {
    return new Float32Array([this.x.x, this.y.x, this.z.x, this.x.y, this.y.y, this.z.y, this.x.z, this.y.z, this.z.z]);
  };
  Mat3.prototype.toString = function () {
    return trimIndent('\n' + '            |' + this.x.x + ' ' + this.y.x + ' ' + this.z.x + '|' + '\n' + '            |' + this.x.y + ' ' + this.y.y + ' ' + this.z.y + '|' + '\n' + '            |' + this.x.z + ' ' + this.y.z + ' ' + this.z.z + '|' + '\n' + '            ');
  };
  Mat3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mat3',
    interfaces: []
  };
  function Mat3_init(m, $this) {
    $this = $this || Object.create(Mat3.prototype);
    Mat3.call($this, m.x.copy_y2kzbl$(), m.y.copy_y2kzbl$(), m.z.copy_y2kzbl$());
    return $this;
  }
  Mat3.prototype.component1 = function () {
    return this.x;
  };
  Mat3.prototype.component2 = function () {
    return this.y;
  };
  Mat3.prototype.component3 = function () {
    return this.z;
  };
  Mat3.prototype.copy_ebx22w$ = function (x, y, z) {
    return new Mat3(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  Mat3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  Mat3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Mat4(x, y, z, w) {
    Mat4$Companion_getInstance();
    if (x === void 0)
      x = new Float4(1.0);
    if (y === void 0)
      y = new Float4(void 0, 1.0);
    if (z === void 0)
      z = new Float4(void 0, void 0, 1.0);
    if (w === void 0)
      w = new Float4(void 0, void 0, void 0, 1.0);
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  function Mat4$Companion() {
    Mat4$Companion_instance = this;
  }
  Mat4$Companion.prototype.of_8cqhcw$ = function (a) {
    if (!(a.length >= 16)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return new Mat4(new Float4(a[0], a[4], a[8], a[12]), new Float4(a[1], a[5], a[9], a[13]), new Float4(a[2], a[6], a[10], a[14]), new Float4(a[3], a[7], a[11], a[15]));
  };
  Mat4$Companion.prototype.identity = function () {
    return new Mat4();
  };
  Mat4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Mat4$Companion_instance = null;
  function Mat4$Companion_getInstance() {
    if (Mat4$Companion_instance === null) {
      new Mat4$Companion();
    }
    return Mat4$Companion_instance;
  }
  Object.defineProperty(Mat4.prototype, 'right', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.get_right', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        var $this = this.x;
        return new Float3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.set_right_pb2vnc$', function (value) {
      var $this = this.x;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(Mat4.prototype, 'up', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.get_up', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        var $this = this.y;
        return new Float3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.set_up_pb2vnc$', function (value) {
      var $this = this.y;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(Mat4.prototype, 'forward', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.get_forward', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        var $this = this.z;
        return new Float3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.set_forward_pb2vnc$', function (value) {
      var $this = this.z;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(Mat4.prototype, 'position', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.get_position', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        var $this = this.w;
        return new Float3_init($this.x, $this.y, $this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.set_position_pb2vnc$', function (value) {
      var $this = this.w;
      $this.x = value.x;
      $this.y = value.y;
      $this.z = value.z;
    })
  });
  Object.defineProperty(Mat4.prototype, 'scale', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.get_scale', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      var Math_0 = Math;
      return function () {
        var $this = this.x;
        var v = new Float3_init($this.x, $this.y, $this.z);
        var x = v.x * v.x + v.y * v.y + v.z * v.z;
        var tmp$ = Math_0.sqrt(x);
        var $this_0 = this.y;
        var v_0 = new Float3_init($this_0.x, $this_0.y, $this_0.z);
        var x_0 = v_0.x * v_0.x + v_0.y * v_0.y + v_0.z * v_0.z;
        var tmp$_0 = Math_0.sqrt(x_0);
        var $this_1 = this.z;
        var v_1 = new Float3_init($this_1.x, $this_1.y, $this_1.z);
        var x_1 = v_1.x * v_1.x + v_1.y * v_1.y + v_1.z * v_1.z;
        return new Float3_init(tmp$, tmp$_0, Math_0.sqrt(x_1));
      };
    }))
  });
  Object.defineProperty(Mat4.prototype, 'translation', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.get_translation', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        var $this = this.w;
        return new Float3_init($this.x, $this.y, $this.z);
      };
    }))
  });
  Object.defineProperty(Mat4.prototype, 'rotation', {
    get: function () {
      var tmp$;
      var $this = this.x;
      var x = normalize_3(new Float3($this.x, $this.y, $this.z));
      var $this_0 = this.y;
      var y = normalize_3(new Float3($this_0.x, $this_0.y, $this_0.z));
      var $this_1 = this.z;
      var z = normalize_3(new Float3($this_1.x, $this_1.y, $this_1.z));
      if (z.y <= -1.0) {
        var tmp$_0 = -HALF_PI_32 * (180.0 * package$math.INV_PI_32);
        var y_0 = x.z;
        var x_0 = y.z;
        tmp$ = new Float3(tmp$_0, 0.0, Math_0.atan2(y_0, x_0) * (180.0 * package$math.INV_PI_32));
      }
       else if (z.y >= 1.0) {
        var tmp$_1 = HALF_PI_32 * (180.0 * package$math.INV_PI_32);
        var y_1 = -x.z;
        var x_1 = -y.z;
        tmp$ = new Float3(tmp$_1, 0.0, Math_0.atan2(y_1, x_1) * (180.0 * package$math.INV_PI_32));
      }
       else {
        var x_2 = z.y;
        var tmp$_2 = -Math_0.asin(x_2) * (180.0 * package$math.INV_PI_32);
        var y_2 = z.x;
        var x_3 = z.z;
        var tmp$_3 = -Math_0.atan2(y_2, x_3) * (180.0 * package$math.INV_PI_32);
        var y_3 = x.y;
        var x_4 = y.y;
        tmp$ = new Float3(tmp$_2, tmp$_3, Math_0.atan2(y_3, x_4) * (180.0 * package$math.INV_PI_32));
      }
      return tmp$;
    }
  });
  Object.defineProperty(Mat4.prototype, 'upperLeft', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Mat4.get_upperLeft', wrapFunction(function () {
      var Mat3_init = _.com.curiouscreature.kotlin.math.Mat3;
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        var $this = this.x;
        var $this_0 = this.y;
        var $this_1 = this.z;
        return new Mat3_init(new Float3_init($this.x, $this.y, $this.z), new Float3_init($this_0.x, $this_0.y, $this_0.z), new Float3_init($this_1.x, $this_1.y, $this_1.z));
      };
    }))
  });
  Mat4.prototype.get_za3lpa$ = function (column) {
    switch (column) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:throw IllegalArgumentException_init('column must be in 0..3');
    }
  };
  Mat4.prototype.get_vux9f0$ = function (column, row) {
    return this.get_za3lpa$(column).get_za3lpa$(row);
  };
  Mat4.prototype.get_usshg8$ = function (column) {
    switch (column.name) {
      case 'X':
        return this.x;
      case 'Y':
        return this.y;
      case 'Z':
        return this.z;
      case 'W':
        return this.w;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Mat4.prototype.get_8svv2y$ = function (column, row) {
    return this.get_usshg8$(column).get_za3lpa$(row);
  };
  Mat4.prototype.invoke_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(column - 1 | 0).get_za3lpa$(row - 1 | 0);
  };
  Mat4.prototype.invoke_n0b4r3$ = function (row, column, v) {
    this.set_n0b4r3$(column - 1 | 0, row - 1 | 0, v);
  };
  Mat4.prototype.set_67ch0t$ = function (column, v) {
    var $this = this.get_za3lpa$(column);
    $this.x = v.x;
    $this.y = v.y;
    $this.z = v.z;
    $this.w = v.w;
  };
  Mat4.prototype.set_n0b4r3$ = function (column, row, v) {
    this.get_za3lpa$(column).set_24o109$(row, v);
  };
  Mat4.prototype.unaryMinus = function () {
    return new Mat4(this.x.unaryMinus(), this.y.unaryMinus(), this.z.unaryMinus(), this.w.unaryMinus());
  };
  Mat4.prototype.inc = function () {
    this.x = this.x.inc();
    this.y = this.y.inc();
    this.z = this.z.inc();
    this.w = this.w.inc();
    return this;
  };
  Mat4.prototype.dec = function () {
    this.x = this.x.dec();
    this.y = this.y.dec();
    this.z = this.z.dec();
    this.w = this.w.dec();
    return this;
  };
  Mat4.prototype.plus_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new Mat4(new Float4($this.x + v, $this.y + v, $this.z + v, $this.w + v), new Float4($this_0.x + v, $this_0.y + v, $this_0.z + v, $this_0.w + v), new Float4($this_1.x + v, $this_1.y + v, $this_1.z + v, $this_1.w + v), new Float4($this_2.x + v, $this_2.y + v, $this_2.z + v, $this_2.w + v));
  };
  Mat4.prototype.minus_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new Mat4(new Float4($this.x - v, $this.y - v, $this.z - v, $this.w - v), new Float4($this_0.x - v, $this_0.y - v, $this_0.z - v, $this_0.w - v), new Float4($this_1.x - v, $this_1.y - v, $this_1.z - v, $this_1.w - v), new Float4($this_2.x - v, $this_2.y - v, $this_2.z - v, $this_2.w - v));
  };
  Mat4.prototype.times_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new Mat4(new Float4($this.x * v, $this.y * v, $this.z * v, $this.w * v), new Float4($this_0.x * v, $this_0.y * v, $this_0.z * v, $this_0.w * v), new Float4($this_1.x * v, $this_1.y * v, $this_1.z * v, $this_1.w * v), new Float4($this_2.x * v, $this_2.y * v, $this_2.z * v, $this_2.w * v));
  };
  Mat4.prototype.div_mx4ult$ = function (v) {
    var $this = this.x;
    var $this_0 = this.y;
    var $this_1 = this.z;
    var $this_2 = this.w;
    return new Mat4(new Float4($this.x / v, $this.y / v, $this.z / v, $this.z / v), new Float4($this_0.x / v, $this_0.y / v, $this_0.z / v, $this_0.z / v), new Float4($this_1.x / v, $this_1.y / v, $this_1.z / v, $this_1.z / v), new Float4($this_2.x / v, $this_2.y / v, $this_2.z / v, $this_2.z / v));
  };
  Mat4.prototype.times_kg8hdx$ = function (m) {
    var t = transpose_4(this);
    var a = t.x;
    var b = m.x;
    var a_0 = t.y;
    var b_0 = m.x;
    var a_1 = t.z;
    var b_1 = m.x;
    var a_2 = t.w;
    var b_2 = m.x;
    var a_3 = t.x;
    var b_3 = m.y;
    var a_4 = t.y;
    var b_4 = m.y;
    var a_5 = t.z;
    var b_5 = m.y;
    var a_6 = t.w;
    var b_6 = m.y;
    var a_7 = t.x;
    var b_7 = m.z;
    var a_8 = t.y;
    var b_8 = m.z;
    var a_9 = t.z;
    var b_9 = m.z;
    var a_10 = t.w;
    var b_10 = m.z;
    var a_11 = t.x;
    var b_11 = m.w;
    var a_12 = t.y;
    var b_12 = m.w;
    var a_13 = t.z;
    var b_13 = m.w;
    var a_14 = t.w;
    var b_14 = m.w;
    return new Mat4(new Float4(a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w, a_0.x * b_0.x + a_0.y * b_0.y + a_0.z * b_0.z + a_0.w * b_0.w, a_1.x * b_1.x + a_1.y * b_1.y + a_1.z * b_1.z + a_1.w * b_1.w, a_2.x * b_2.x + a_2.y * b_2.y + a_2.z * b_2.z + a_2.w * b_2.w), new Float4(a_3.x * b_3.x + a_3.y * b_3.y + a_3.z * b_3.z + a_3.w * b_3.w, a_4.x * b_4.x + a_4.y * b_4.y + a_4.z * b_4.z + a_4.w * b_4.w, a_5.x * b_5.x + a_5.y * b_5.y + a_5.z * b_5.z + a_5.w * b_5.w, a_6.x * b_6.x + a_6.y * b_6.y + a_6.z * b_6.z + a_6.w * b_6.w), new Float4(a_7.x * b_7.x + a_7.y * b_7.y + a_7.z * b_7.z + a_7.w * b_7.w, a_8.x * b_8.x + a_8.y * b_8.y + a_8.z * b_8.z + a_8.w * b_8.w, a_9.x * b_9.x + a_9.y * b_9.y + a_9.z * b_9.z + a_9.w * b_9.w, a_10.x * b_10.x + a_10.y * b_10.y + a_10.z * b_10.z + a_10.w * b_10.w), new Float4(a_11.x * b_11.x + a_11.y * b_11.y + a_11.z * b_11.z + a_11.w * b_11.w, a_12.x * b_12.x + a_12.y * b_12.y + a_12.z * b_12.z + a_12.w * b_12.w, a_13.x * b_13.x + a_13.y * b_13.y + a_13.z * b_13.z + a_13.w * b_13.w, a_14.x * b_14.x + a_14.y * b_14.y + a_14.z * b_14.z + a_14.w * b_14.w));
  };
  Mat4.prototype.times_pb2vnb$ = function (v) {
    var t = transpose_4(this);
    var a = t.x;
    var a_0 = t.y;
    var a_1 = t.z;
    var a_2 = t.w;
    return new Float4(a.x * v.x + a.y * v.y + a.z * v.z + a.w * v.w, a_0.x * v.x + a_0.y * v.y + a_0.z * v.z + a_0.w * v.w, a_1.x * v.x + a_1.y * v.y + a_1.z * v.z + a_1.w * v.w, a_2.x * v.x + a_2.y * v.y + a_2.z * v.z + a_2.w * v.w);
  };
  Mat4.prototype.toFloatArray = function () {
    return new Float32Array([this.x.x, this.y.x, this.z.x, this.w.x, this.x.y, this.y.y, this.z.y, this.w.y, this.x.z, this.y.z, this.z.z, this.w.z, this.x.w, this.y.w, this.z.w, this.w.w]);
  };
  Mat4.prototype.toString = function () {
    return trimIndent('\n' + '            |' + this.x.x + ' ' + this.y.x + ' ' + this.z.x + ' ' + this.w.x + '|' + '\n' + '            |' + this.x.y + ' ' + this.y.y + ' ' + this.z.y + ' ' + this.w.y + '|' + '\n' + '            |' + this.x.z + ' ' + this.y.z + ' ' + this.z.z + ' ' + this.w.z + '|' + '\n' + '            |' + this.x.w + ' ' + this.y.w + ' ' + this.z.w + ' ' + this.w.w + '|' + '\n' + '            ');
  };
  Mat4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mat4',
    interfaces: []
  };
  function Mat4_init(right, up, forward, position, $this) {
    if (position === void 0)
      position = new Float3();
    $this = $this || Object.create(Mat4.prototype);
    Mat4.call($this, Float4_init_0(right), Float4_init_0(up), Float4_init_0(forward), Float4_init_0(position, 1.0));
    return $this;
  }
  function Mat4_init_0(m, $this) {
    $this = $this || Object.create(Mat4.prototype);
    Mat4.call($this, m.x.copy_7b5o5w$(), m.y.copy_7b5o5w$(), m.z.copy_7b5o5w$(), m.w.copy_7b5o5w$());
    return $this;
  }
  Mat4.prototype.component1 = function () {
    return this.x;
  };
  Mat4.prototype.component2 = function () {
    return this.y;
  };
  Mat4.prototype.component3 = function () {
    return this.z;
  };
  Mat4.prototype.component4 = function () {
    return this.w;
  };
  Mat4.prototype.copy_2ht6r0$ = function (x, y, z, w) {
    return new Mat4(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Mat4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Mat4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  function transpose_2(m) {
    return new Mat2(new Float2(m.x.x, m.y.x), new Float2(m.x.y, m.y.y));
  }
  function transpose_3(m) {
    return new Mat3(new Float3(m.x.x, m.y.x, m.z.x), new Float3(m.x.y, m.y.y, m.z.y), new Float3(m.x.z, m.y.z, m.z.z));
  }
  function inverse_1(m) {
    var a = m.x.x;
    var b = m.x.y;
    var c = m.x.z;
    var d = m.y.x;
    var e = m.y.y;
    var f = m.y.z;
    var g = m.z.x;
    var h = m.z.y;
    var i = m.z.z;
    var A = e * i - f * h;
    var B = f * g - d * i;
    var C = d * h - e * g;
    var det = a * A + b * B + c * C;
    return Mat3$Companion_getInstance().of_8cqhcw$(new Float32Array([A / det, B / det, C / det, (c * h - b * i) / det, (a * i - c * g) / det, (b * g - a * h) / det, (b * f - c * e) / det, (c * d - a * f) / det, (a * e - b * d) / det]));
  }
  function transpose_4(m) {
    return new Mat4(new Float4(m.x.x, m.y.x, m.z.x, m.w.x), new Float4(m.x.y, m.y.y, m.z.y, m.w.y), new Float4(m.x.z, m.y.z, m.z.z, m.w.z), new Float4(m.x.w, m.y.w, m.z.w, m.w.w));
  }
  function inverse_2(m) {
    throw new NotImplementedError('An operation is not implemented: ' + 'Implement inverse(Mat4)');
  }
  function scale_1(s) {
    return new Mat4(new Float4(s.x), new Float4(void 0, s.y), new Float4(void 0, void 0, s.z));
  }
  function scale_2(m) {
    var $this = m.x;
    var v = new Float3($this.x, $this.y, $this.z);
    var x = v.x * v.x + v.y * v.y + v.z * v.z;
    var tmp$ = Math_0.sqrt(x);
    var $this_0 = m.y;
    var v_0 = new Float3($this_0.x, $this_0.y, $this_0.z);
    var x_0 = v_0.x * v_0.x + v_0.y * v_0.y + v_0.z * v_0.z;
    var tmp$_0 = Math_0.sqrt(x_0);
    var $this_1 = m.z;
    var v_1 = new Float3($this_1.x, $this_1.y, $this_1.z);
    var x_1 = v_1.x * v_1.x + v_1.y * v_1.y + v_1.z * v_1.z;
    return scale_1(new Float3(tmp$, tmp$_0, Math_0.sqrt(x_1)));
  }
  function translation_1(t) {
    return new Mat4(void 0, void 0, void 0, Float4_init_0(t, 1.0));
  }
  function translation_2(m) {
    var $this = m.w;
    return translation_1(new Float3($this.x, $this.y, $this.z));
  }
  function rotation_2(m) {
    var $this = m.x;
    var $this_0 = m.y;
    var $this_1 = m.z;
    return Mat4_init(normalize_3(new Float3($this.x, $this.y, $this.z)), normalize_3(new Float3($this_0.x, $this_0.y, $this_0.z)), normalize_3(new Float3($this_1.x, $this_1.y, $this_1.z)));
  }
  function rotation_3(d) {
    var $this = d.copy_y2kzbl$();
    $this.x = $this.x * (package$math.PI_32 / 180.0);
    $this.y = $this.y * (package$math.PI_32 / 180.0);
    $this.z = $this.z * (package$math.PI_32 / 180.0);
    var r = $this;
    var $this_0 = r.copy_y2kzbl$();
    var x = $this_0.x;
    $this_0.x = Math_0.cos(x);
    var x_0 = $this_0.y;
    $this_0.y = Math_0.cos(x_0);
    var x_1 = $this_0.z;
    $this_0.z = Math_0.cos(x_1);
    var c = $this_0;
    var $this_1 = r.copy_y2kzbl$();
    var x_2 = $this_1.x;
    $this_1.x = Math_0.sin(x_2);
    var x_3 = $this_1.y;
    $this_1.y = Math_0.sin(x_3);
    var x_4 = $this_1.z;
    $this_1.z = Math_0.sin(x_4);
    var s = $this_1;
    return Mat4$Companion_getInstance().of_8cqhcw$(new Float32Array([c.y * c.z, -c.x * s.z + s.x * s.y * c.z, s.x * s.z + c.x * s.y * c.z, 0.0, c.y * s.z, c.x * c.z + s.x * s.y * s.z, -s.x * c.z + c.x * s.y * s.z, 0.0, -s.y, s.x * c.y, c.x * c.y, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function rotation_4(axis, angle) {
    var x = axis.x;
    var y = axis.y;
    var z = axis.z;
    var r = angle * (package$math.PI_32 / 180.0);
    var c = Math_0.cos(r);
    var s = Math_0.sin(r);
    var d = 1.0 - c;
    return Mat4$Companion_getInstance().of_8cqhcw$(new Float32Array([x * x * d + c, x * y * d - z * s, x * y * d + y * s, 0.0, y * x * d + z * s, y * y * d + c, y * z * d - x * s, 0.0, z * x * d - y * s, z * y * d + x * s, z * z * d + c, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function normal_0(m) {
    var $this = m.x;
    var v = new Float3($this.x, $this.y, $this.z);
    var tmp$ = v.x * v.x + v.y * v.y + v.z * v.z;
    var $this_0 = m.y;
    var v_0 = new Float3($this_0.x, $this_0.y, $this_0.z);
    var tmp$_0 = v_0.x * v_0.x + v_0.y * v_0.y + v_0.z * v_0.z;
    var $this_1 = m.z;
    var v_1 = new Float3($this_1.x, $this_1.y, $this_1.z);
    var v_2 = new Float3(tmp$, tmp$_0, v_1.x * v_1.x + v_1.y * v_1.y + v_1.z * v_1.z);
    return scale_1(new Float3(1.0 / v_2.x, 1.0 / v_2.y, 1.0 / v_2.z)).times_kg8hdx$(m);
  }
  function lookAt_0(eye, target, up) {
    if (up === void 0)
      up = new Float3(void 0, void 0, 1.0);
    return lookTowards_0(eye, new Float3(target.x - eye.x, target.y - eye.y, target.z - eye.z), up);
  }
  function lookTowards_0(eye, forward, up) {
    if (up === void 0)
      up = new Float3(void 0, void 0, 1.0);
    var f = normalize_3(forward);
    var r = normalize_3(new Float3(f.y * up.z - f.z * up.y, f.z * up.x - f.x * up.z, f.x * up.y - f.y * up.x));
    var u = normalize_3(new Float3(r.y * f.z - r.z * f.y, r.z * f.x - r.x * f.z, r.x * f.y - r.y * f.x));
    return new Mat4(Float4_init_0(r), Float4_init_0(u), Float4_init_0(f), Float4_init_0(eye, 1.0));
  }
  function perspective_0(fov, ratio, near, far) {
    var x = fov * (package$math.PI_32 / 180.0) * 0.5;
    var t = 1.0 / Math_0.tan(x);
    var a = (far + near) / (far - near);
    var b = 2.0 * far * near / (far - near);
    var c = t / ratio;
    return new Mat4(new Float4(c), new Float4(void 0, t), new Float4(void 0, void 0, a, 1.0), new Float4(void 0, void 0, -b));
  }
  function ortho_0(l, r, b, t, n, f) {
    return new Mat4(new Float4(2.0 / (r - 1.0)), new Float4(void 0, 2.0 / (t - b)), new Float4(void 0, void 0, -2.0 / (f - n)), new Float4(-(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1.0));
  }
  function Ray(origin, direction) {
    if (origin === void 0)
      origin = new Float3();
    this.origin = origin;
    this.direction = direction;
  }
  Ray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ray',
    interfaces: []
  };
  Ray.prototype.component1 = function () {
    return this.origin;
  };
  Ray.prototype.component2 = function () {
    return this.direction;
  };
  Ray.prototype.copy_5urmss$ = function (origin, direction) {
    return new Ray(origin === void 0 ? this.origin : origin, direction === void 0 ? this.direction : direction);
  };
  Ray.prototype.toString = function () {
    return 'Ray(origin=' + Kotlin.toString(this.origin) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  Ray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  Ray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.origin, other.origin) && Kotlin.equals(this.direction, other.direction)))));
  };
  function pointAt_0(r, t) {
    var tmp$ = r.origin;
    var $this = r.direction;
    var v = new Float3($this.x * t, $this.y * t, $this.z * t);
    return new Float3(tmp$.x + v.x, tmp$.y + v.y, tmp$.z + v.z);
  }
  var PI_32;
  var HALF_PI_32;
  var TWO_PI_32;
  var FOUR_PI_32;
  var INV_PI_32;
  var INV_TWO_PI_32;
  var INV_FOUR_PI_32;
  var clamp_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_y2kzbl$', function (x, min, max) {
    return x < min ? min : x > max ? max : x;
  });
  var mix_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_y2kzbl$', function (a, b, x) {
    return a * (1.0 - x) + b * x;
  });
  var degrees_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.degrees_mx4ult$', wrapFunction(function () {
    var math = _.com.curiouscreature.kotlin.math;
    return function (v) {
      return v * (180.0 * math.INV_PI_32);
    };
  }));
  var radians_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.radians_mx4ult$', wrapFunction(function () {
    var math = _.com.curiouscreature.kotlin.math;
    return function (v) {
      return v * (math.PI_32 / 180.0);
    };
  }));
  var fract_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.fract_mx4ult$', function (v) {
    return v % 1;
  });
  var sqr_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.sqr_mx4ult$', function (v) {
    return v * v;
  });
  function Vec3(x, y, z) {
    Vector3.call(this, x, y, z);
  }
  Vec3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec3',
    interfaces: []
  };
  function Vec3_init($this) {
    $this = $this || Object.create(Vec3.prototype);
    Vec3.call($this, 0.0, 0.0, 0.0);
    return $this;
  }
  function Vec3_init_0(double3, $this) {
    $this = $this || Object.create(Vec3.prototype);
    Vec3.call($this, double3.x, double3.y, double3.z);
    return $this;
  }
  function VectorComponent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VectorComponent_initFields() {
    VectorComponent_initFields = function () {
    };
    VectorComponent$X_instance = new VectorComponent('X', 0);
    VectorComponent$Y_instance = new VectorComponent('Y', 1);
    VectorComponent$Z_instance = new VectorComponent('Z', 2);
    VectorComponent$W_instance = new VectorComponent('W', 3);
    VectorComponent$R_instance = new VectorComponent('R', 4);
    VectorComponent$G_instance = new VectorComponent('G', 5);
    VectorComponent$B_instance = new VectorComponent('B', 6);
    VectorComponent$A_instance = new VectorComponent('A', 7);
    VectorComponent$S_instance = new VectorComponent('S', 8);
    VectorComponent$T_instance = new VectorComponent('T', 9);
    VectorComponent$P_instance = new VectorComponent('P', 10);
    VectorComponent$Q_instance = new VectorComponent('Q', 11);
  }
  var VectorComponent$X_instance;
  function VectorComponent$X_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$X_instance;
  }
  var VectorComponent$Y_instance;
  function VectorComponent$Y_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$Y_instance;
  }
  var VectorComponent$Z_instance;
  function VectorComponent$Z_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$Z_instance;
  }
  var VectorComponent$W_instance;
  function VectorComponent$W_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$W_instance;
  }
  var VectorComponent$R_instance;
  function VectorComponent$R_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$R_instance;
  }
  var VectorComponent$G_instance;
  function VectorComponent$G_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$G_instance;
  }
  var VectorComponent$B_instance;
  function VectorComponent$B_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$B_instance;
  }
  var VectorComponent$A_instance;
  function VectorComponent$A_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$A_instance;
  }
  var VectorComponent$S_instance;
  function VectorComponent$S_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$S_instance;
  }
  var VectorComponent$T_instance;
  function VectorComponent$T_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$T_instance;
  }
  var VectorComponent$P_instance;
  function VectorComponent$P_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$P_instance;
  }
  var VectorComponent$Q_instance;
  function VectorComponent$Q_getInstance() {
    VectorComponent_initFields();
    return VectorComponent$Q_instance;
  }
  VectorComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VectorComponent',
    interfaces: [Enum]
  };
  function VectorComponent$values() {
    return [VectorComponent$X_getInstance(), VectorComponent$Y_getInstance(), VectorComponent$Z_getInstance(), VectorComponent$W_getInstance(), VectorComponent$R_getInstance(), VectorComponent$G_getInstance(), VectorComponent$B_getInstance(), VectorComponent$A_getInstance(), VectorComponent$S_getInstance(), VectorComponent$T_getInstance(), VectorComponent$P_getInstance(), VectorComponent$Q_getInstance()];
  }
  VectorComponent.values = VectorComponent$values;
  function VectorComponent$valueOf(name) {
    switch (name) {
      case 'X':
        return VectorComponent$X_getInstance();
      case 'Y':
        return VectorComponent$Y_getInstance();
      case 'Z':
        return VectorComponent$Z_getInstance();
      case 'W':
        return VectorComponent$W_getInstance();
      case 'R':
        return VectorComponent$R_getInstance();
      case 'G':
        return VectorComponent$G_getInstance();
      case 'B':
        return VectorComponent$B_getInstance();
      case 'A':
        return VectorComponent$A_getInstance();
      case 'S':
        return VectorComponent$S_getInstance();
      case 'T':
        return VectorComponent$T_getInstance();
      case 'P':
        return VectorComponent$P_getInstance();
      case 'Q':
        return VectorComponent$Q_getInstance();
      default:throwISE('No enum constant com.curiouscreature.kotlin.math.VectorComponent.' + name);
    }
  }
  VectorComponent.valueOf_61zpoe$ = VectorComponent$valueOf;
  function Float2(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  Object.defineProperty(Float2.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.set_r_mx4ult$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Float2.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.set_g_mx4ult$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Float2.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.set_s_mx4ult$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Float2.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.set_t_mx4ult$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Float2.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.get_xy', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.set_xy_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float2.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.get_rg', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.set_rg_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float2.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.get_st', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.set_st_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Float2.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      default:throw IllegalArgumentException_init('index must be X, Y, R, G, S or T');
    }
  };
  Float2.prototype.get_p1ayli$ = function (index1, index2) {
    return new Float2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Float2.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:throw IllegalArgumentException_init('index must be in 0..1');
    }
  };
  Float2.prototype.get_vux9f0$ = function (index1, index2) {
    return new Float2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Float2.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Float2.prototype.set_24o109$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..1');
    }
  };
  Float2.prototype.set_n0b4r3$ = function (index1, index2, v) {
    this.set_24o109$(index1, v);
    this.set_24o109$(index2, v);
  };
  Float2.prototype.set_wnl45q$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      default:throw IllegalArgumentException_init('index must be X, Y, R, G, S or T');
    }
  };
  Float2.prototype.set_imthlh$ = function (index1, index2, v) {
    this.set_wnl45q$(index1, v);
    this.set_wnl45q$(index2, v);
  };
  Float2.prototype.unaryMinus = function () {
    return new Float2(-this.x, -this.y);
  };
  Float2.prototype.inc = function () {
    this.x += 1.0;
    this.y += 1.0;
    return this;
  };
  Float2.prototype.dec = function () {
    this.x -= 1.0;
    this.y -= 1.0;
    return this;
  };
  Float2.prototype.plus_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.plus_mx4ult$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x + v, this.y + v);
    };
  }));
  Float2.prototype.minus_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.minus_mx4ult$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x - v, this.y - v);
    };
  }));
  Float2.prototype.times_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.times_mx4ult$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x * v, this.y * v);
    };
  }));
  Float2.prototype.div_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.div_mx4ult$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x / v, this.y / v);
    };
  }));
  Float2.prototype.plus_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.plus_pb2vnd$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x + v.x, this.y + v.y);
    };
  }));
  Float2.prototype.minus_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.minus_pb2vnd$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x - v.x, this.y - v.y);
    };
  }));
  Float2.prototype.times_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.times_pb2vnd$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x * v.x, this.y * v.y);
    };
  }));
  Float2.prototype.div_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.div_pb2vnd$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v) {
      return new Float2_init(this.x / v.x, this.y / v.y);
    };
  }));
  Float2.prototype.transform_a32mzo$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float2.transform_a32mzo$', function (block) {
    this.x = block(this.x);
    this.y = block(this.y);
    return this;
  });
  Float2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Float2',
    interfaces: []
  };
  function Float2_init(v, $this) {
    $this = $this || Object.create(Float2.prototype);
    Float2.call($this, v.x, v.y);
    return $this;
  }
  Float2.prototype.component1 = function () {
    return this.x;
  };
  Float2.prototype.component2 = function () {
    return this.y;
  };
  Float2.prototype.copy_dleff0$ = function (x, y) {
    return new Float2(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Float2.prototype.toString = function () {
    return 'Float2(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Float2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Float2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Float3(x, y, z) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  Object.defineProperty(Float3.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_r_mx4ult$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Float3.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_g_mx4ult$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Float3.prototype, 'b', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_b', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_b_mx4ult$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Float3.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_s_mx4ult$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Float3.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_t_mx4ult$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Float3.prototype, 'p', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_p', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_p_mx4ult$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Float3.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_xy', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_xy_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float3.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_rg', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_rg_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float3.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_st', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_st_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float3.prototype, 'rgb', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_rgb', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        return new Float3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_rgb_pb2vnc$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Float3.prototype, 'xyz', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_xyz', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        return new Float3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_xyz_pb2vnc$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Float3.prototype, 'stp', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.get_stp', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        return new Float3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.set_stp_pb2vnc$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Float3.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      case 'Z':
      case 'B':
      case 'P':
        return this.z;
      default:throw IllegalArgumentException_init('index must be X, Y, Z, R, G, B, S, T or P');
    }
  };
  Float3.prototype.get_p1ayli$ = function (index1, index2) {
    return new Float2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Float3.prototype.get_6n7u8t$ = function (index1, index2, index3) {
    return new Float3(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3));
  };
  Float3.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:throw IllegalArgumentException_init('index must be in 0..2');
    }
  };
  Float3.prototype.get_vux9f0$ = function (index1, index2) {
    return new Float2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Float3.prototype.get_qt1dr2$ = function (index1, index2, index3) {
    return new Float3(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3));
  };
  Float3.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Float3.prototype.set_24o109$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      case 2:
        this.z = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..2');
    }
  };
  Float3.prototype.set_n0b4r3$ = function (index1, index2, v) {
    this.set_24o109$(index1, v);
    this.set_24o109$(index2, v);
  };
  Float3.prototype.set_hu04m1$ = function (index1, index2, index3, v) {
    this.set_24o109$(index1, v);
    this.set_24o109$(index2, v);
    this.set_24o109$(index3, v);
  };
  Float3.prototype.set_wnl45q$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      case 'Z':
      case 'B':
      case 'P':
        this.z = v;
        break;
      default:throw IllegalArgumentException_init('index must be X, Y, Z, R, G, B, S, T or P');
    }
  };
  Float3.prototype.set_imthlh$ = function (index1, index2, v) {
    this.set_wnl45q$(index1, v);
    this.set_wnl45q$(index2, v);
  };
  Float3.prototype.set_a37p4o$ = function (index1, index2, index3, v) {
    this.set_wnl45q$(index1, v);
    this.set_wnl45q$(index2, v);
    this.set_wnl45q$(index3, v);
  };
  Float3.prototype.unaryMinus = function () {
    return new Float3(-this.x, -this.y, -this.z);
  };
  Float3.prototype.inc = function () {
    this.x += 1.0;
    this.y += 1.0;
    this.z += 1.0;
    return this;
  };
  Float3.prototype.dec = function () {
    this.x -= 1.0;
    this.y -= 1.0;
    this.z -= 1.0;
    return this;
  };
  Float3.prototype.plus_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.plus_mx4ult$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x + v, this.y + v, this.z + v);
    };
  }));
  Float3.prototype.minus_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.minus_mx4ult$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x - v, this.y - v, this.z - v);
    };
  }));
  Float3.prototype.times_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.times_mx4ult$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x * v, this.y * v, this.z * v);
    };
  }));
  Float3.prototype.div_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.div_mx4ult$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x / v, this.y / v, this.z / v);
    };
  }));
  Float3.prototype.plus_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.plus_pb2vnd$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x + v.x, this.y + v.y, this.z);
    };
  }));
  Float3.prototype.minus_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.minus_pb2vnd$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x - v.x, this.y - v.y, this.z);
    };
  }));
  Float3.prototype.times_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.times_pb2vnd$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x * v.x, this.y * v.y, this.z);
    };
  }));
  Float3.prototype.div_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.div_pb2vnd$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x / v.x, this.y / v.y, this.z);
    };
  }));
  Float3.prototype.plus_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.plus_pb2vnc$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x + v.x, this.y + v.y, this.z + v.z);
    };
  }));
  Float3.prototype.minus_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.minus_pb2vnc$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x - v.x, this.y - v.y, this.z - v.z);
    };
  }));
  Float3.prototype.times_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.times_pb2vnc$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x * v.x, this.y * v.y, this.z * v.z);
    };
  }));
  Float3.prototype.div_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.div_pb2vnc$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v) {
      return new Float3_init(this.x / v.x, this.y / v.y, this.z / v.z);
    };
  }));
  Float3.prototype.transform_a32mzo$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float3.transform_a32mzo$', function (block) {
    this.x = block(this.x);
    this.y = block(this.y);
    this.z = block(this.z);
    return this;
  });
  Float3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Float3',
    interfaces: []
  };
  function Float3_init(v, z, $this) {
    if (z === void 0)
      z = 0.0;
    $this = $this || Object.create(Float3.prototype);
    Float3.call($this, v.x, v.y, z);
    return $this;
  }
  function Float3_init_0(v, $this) {
    $this = $this || Object.create(Float3.prototype);
    Float3.call($this, v.x, v.y, v.z);
    return $this;
  }
  Float3.prototype.component1 = function () {
    return this.x;
  };
  Float3.prototype.component2 = function () {
    return this.y;
  };
  Float3.prototype.component3 = function () {
    return this.z;
  };
  Float3.prototype.copy_y2kzbl$ = function (x, y, z) {
    return new Float3(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  Float3.prototype.toString = function () {
    return 'Float3(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + ')';
  };
  Float3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  Float3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Float4(x, y, z, w) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    if (w === void 0)
      w = 0.0;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  Object.defineProperty(Float4.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_r_mx4ult$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Float4.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_g_mx4ult$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Float4.prototype, 'b', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_b', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_b_mx4ult$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Float4.prototype, 'a', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_a', function () {
      return this.w;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_a_mx4ult$', function (value) {
      this.w = value;
    })
  });
  Object.defineProperty(Float4.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_s_mx4ult$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Float4.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_t_mx4ult$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Float4.prototype, 'p', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_p', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_p_mx4ult$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Float4.prototype, 'q', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_q', function () {
      return this.w;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_q_mx4ult$', function (value) {
      this.w = value;
    })
  });
  Object.defineProperty(Float4.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_xy', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_xy_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float4.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_rg', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_rg_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float4.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_st', wrapFunction(function () {
      var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
      return function () {
        return new Float2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_st_pb2vnd$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Float4.prototype, 'rgb', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_rgb', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        return new Float3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_rgb_pb2vnc$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Float4.prototype, 'xyz', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_xyz', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        return new Float3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_xyz_pb2vnc$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Float4.prototype, 'stp', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_stp', wrapFunction(function () {
      var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
      return function () {
        return new Float3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_stp_pb2vnc$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Float4.prototype, 'rgba', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_rgba', wrapFunction(function () {
      var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
      return function () {
        return new Float4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_rgba_pb2vnb$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Object.defineProperty(Float4.prototype, 'xyzw', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_xyzw', wrapFunction(function () {
      var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
      return function () {
        return new Float4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_xyzw_pb2vnb$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Object.defineProperty(Float4.prototype, 'stpq', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.get_stpq', wrapFunction(function () {
      var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
      return function () {
        return new Float4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.set_stpq_pb2vnb$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Float4.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      case 'Z':
      case 'B':
      case 'P':
        return this.z;
      case 'W':
      case 'A':
      case 'Q':
        return this.w;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Float4.prototype.get_p1ayli$ = function (index1, index2) {
    return new Float2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Float4.prototype.get_6n7u8t$ = function (index1, index2, index3) {
    return new Float3(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3));
  };
  Float4.prototype.get_e872hs$ = function (index1, index2, index3, index4) {
    return new Float4(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3), this.get_avfk89$(index4));
  };
  Float4.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:throw IllegalArgumentException_init('index must be in 0..3');
    }
  };
  Float4.prototype.get_vux9f0$ = function (index1, index2) {
    return new Float2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Float4.prototype.get_qt1dr2$ = function (index1, index2, index3) {
    return new Float3(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3));
  };
  Float4.prototype.get_tjonv8$ = function (index1, index2, index3, index4) {
    return new Float4(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3), this.get_za3lpa$(index4));
  };
  Float4.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Float4.prototype.set_24o109$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      case 2:
        this.z = v;
        break;
      case 3:
        this.w = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..3');
    }
  };
  Float4.prototype.set_n0b4r3$ = function (index1, index2, v) {
    this.set_24o109$(index1, v);
    this.set_24o109$(index2, v);
  };
  Float4.prototype.set_hu04m1$ = function (index1, index2, index3, v) {
    this.set_24o109$(index1, v);
    this.set_24o109$(index2, v);
    this.set_24o109$(index3, v);
  };
  Float4.prototype.set_ak9kzz$ = function (index1, index2, index3, index4, v) {
    this.set_24o109$(index1, v);
    this.set_24o109$(index2, v);
    this.set_24o109$(index3, v);
    this.set_24o109$(index4, v);
  };
  Float4.prototype.set_wnl45q$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      case 'Z':
      case 'B':
      case 'P':
        this.z = v;
        break;
      case 'W':
      case 'A':
      case 'Q':
        this.w = v;
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Float4.prototype.set_imthlh$ = function (index1, index2, v) {
    this.set_wnl45q$(index1, v);
    this.set_wnl45q$(index2, v);
  };
  Float4.prototype.set_a37p4o$ = function (index1, index2, index3, v) {
    this.set_wnl45q$(index1, v);
    this.set_wnl45q$(index2, v);
    this.set_wnl45q$(index3, v);
  };
  Float4.prototype.set_vq5nrv$ = function (index1, index2, index3, index4, v) {
    this.set_wnl45q$(index1, v);
    this.set_wnl45q$(index2, v);
    this.set_wnl45q$(index3, v);
    this.set_wnl45q$(index4, v);
  };
  Float4.prototype.unaryMinus = function () {
    return new Float4(-this.x, -this.y, -this.z, -this.w);
  };
  Float4.prototype.inc = function () {
    this.x += 1.0;
    this.y += 1.0;
    this.z += 1.0;
    this.w += 1.0;
    return this;
  };
  Float4.prototype.dec = function () {
    this.x -= 1.0;
    this.y -= 1.0;
    this.z -= 1.0;
    this.w -= 1.0;
    return this;
  };
  Float4.prototype.plus_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.plus_mx4ult$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x + v, this.y + v, this.z + v, this.w + v);
    };
  }));
  Float4.prototype.minus_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.minus_mx4ult$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x - v, this.y - v, this.z - v, this.w - v);
    };
  }));
  Float4.prototype.times_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.times_mx4ult$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x * v, this.y * v, this.z * v, this.w * v);
    };
  }));
  Float4.prototype.div_mx4ult$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.div_mx4ult$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x / v, this.y / v, this.z / v, this.z / v);
    };
  }));
  Float4.prototype.plus_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.plus_pb2vnd$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x + v.x, this.y + v.y, this.z, this.w);
    };
  }));
  Float4.prototype.minus_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.minus_pb2vnd$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x - v.x, this.y - v.y, this.z, this.w);
    };
  }));
  Float4.prototype.times_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.times_pb2vnd$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x * v.x, this.y * v.y, this.z, this.w);
    };
  }));
  Float4.prototype.div_pb2vnd$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.div_pb2vnd$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x / v.x, this.y / v.y, this.z, this.w);
    };
  }));
  Float4.prototype.plus_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.plus_pb2vnc$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x + v.x, this.y + v.y, this.z + v.z, this.w);
    };
  }));
  Float4.prototype.minus_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.minus_pb2vnc$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x - v.x, this.y - v.y, this.z - v.z, this.w);
    };
  }));
  Float4.prototype.times_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.times_pb2vnc$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x * v.x, this.y * v.y, this.z * v.z, this.w);
    };
  }));
  Float4.prototype.div_pb2vnc$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.div_pb2vnc$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x / v.x, this.y / v.y, this.z / v.z, this.w);
    };
  }));
  Float4.prototype.plus_pb2vnb$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.plus_pb2vnb$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
    };
  }));
  Float4.prototype.minus_pb2vnb$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.minus_pb2vnb$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
    };
  }));
  Float4.prototype.times_pb2vnb$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.times_pb2vnb$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x * v.x, this.y * v.y, this.z * v.z, this.w * v.w);
    };
  }));
  Float4.prototype.div_pb2vnb$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.div_pb2vnb$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v) {
      return new Float4_init(this.x / v.x, this.y / v.y, this.z / v.z, this.w / v.w);
    };
  }));
  Float4.prototype.transform_a32mzo$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Float4.transform_a32mzo$', function (block) {
    this.x = block(this.x);
    this.y = block(this.y);
    this.z = block(this.z);
    this.w = block(this.w);
    return this;
  });
  Float4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Float4',
    interfaces: []
  };
  function Float4_init(v, z, w, $this) {
    if (z === void 0)
      z = 0.0;
    if (w === void 0)
      w = 0.0;
    $this = $this || Object.create(Float4.prototype);
    Float4.call($this, v.x, v.y, z, w);
    return $this;
  }
  function Float4_init_0(v, w, $this) {
    if (w === void 0)
      w = 0.0;
    $this = $this || Object.create(Float4.prototype);
    Float4.call($this, v.x, v.y, v.z, w);
    return $this;
  }
  function Float4_init_1(v, $this) {
    $this = $this || Object.create(Float4.prototype);
    Float4.call($this, v.x, v.y, v.z, v.w);
    return $this;
  }
  Float4.prototype.component1 = function () {
    return this.x;
  };
  Float4.prototype.component2 = function () {
    return this.y;
  };
  Float4.prototype.component3 = function () {
    return this.z;
  };
  Float4.prototype.component4 = function () {
    return this.w;
  };
  Float4.prototype.copy_7b5o5w$ = function (x, y, z, w) {
    return new Float4(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Float4.prototype.toString = function () {
    return 'Float4(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + (', w=' + Kotlin.toString(this.w)) + ')';
  };
  Float4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Float4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  var plus_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.plus_qpfjuv$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function ($receiver, v) {
      return new Float2_init($receiver + v.x, $receiver + v.y);
    };
  }));
  var minus_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.minus_qpfjuv$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function ($receiver, v) {
      return new Float2_init($receiver - v.x, $receiver - v.y);
    };
  }));
  var times_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.times_qpfjuv$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function ($receiver, v) {
      return new Float2_init($receiver * v.x, $receiver * v.y);
    };
  }));
  var div_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.div_qpfjuv$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function ($receiver, v) {
      return new Float2_init($receiver / v.x, $receiver / v.y);
    };
  }));
  var abs_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.abs_pb2vnd$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    var Math_0 = Math;
    return function (v) {
      var x = v.x;
      var tmp$ = Math_0.abs(x);
      var x_0 = v.y;
      return new Float2_init(tmp$, Math_0.abs(x_0));
    };
  }));
  var length_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length_pb2vnd$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var x = v.x * v.x + v.y * v.y;
      return Math_0.sqrt(x);
    };
  }));
  var length2_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length2_pb2vnd$', function (v) {
    return v.x * v.x + v.y * v.y;
  });
  var distance_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.distance_ibf3jo$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    var Math_0 = Math;
    return function (a, b) {
      var v = new Float2_init(a.x - b.x, a.y - b.y);
      var x = v.x * v.x + v.y * v.y;
      return Math_0.sqrt(x);
    };
  }));
  var dot_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.dot_ibf3jo$', function (a, b) {
    return a.x * b.x + a.y * b.y;
  });
  function normalize_2(v) {
    var x = v.x * v.x + v.y * v.y;
    var l = 1.0 / Math_0.sqrt(x);
    return new Float2(v.x * l, v.y * l);
  }
  var reflect_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.reflect_ibf3jo$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (i, n) {
      var $receiver = 2.0 * (n.x * i.x + n.y * i.y);
      var v = new Float2_init($receiver * n.x, $receiver * n.y);
      return new Float2_init(i.x - v.x, i.y - v.y);
    };
  }));
  function refract_1(i, n, eta) {
    var d = n.x * i.x + n.y * i.y;
    var k = 1.0 - eta * eta * (1.0 - d * d);
    var tmp$;
    if (k < 0.0)
      tmp$ = new Float2(0.0);
    else {
      var tmp$_0 = new Float2(eta * i.x, eta * i.y);
      var $receiver = eta * d + Math_0.sqrt(k);
      var v = new Float2($receiver * n.x, $receiver * n.y);
      tmp$ = new Float2(tmp$_0.x - v.x, tmp$_0.y - v.y);
    }
    return tmp$;
  }
  var clamp_7 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_x6tymx$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v, min, max) {
      var x = v.x;
      var x_0 = v.y;
      return new Float2_init(x < min ? min : x > max ? max : x, x_0 < min ? min : x_0 > max ? max : x_0);
    };
  }));
  var clamp_8 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_bts9cp$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (v, min, max) {
      var x = v.x;
      var min_0 = min.x;
      var max_0 = max.x;
      var x_0 = v.y;
      var min_1 = min.y;
      var max_1 = max.y;
      return new Float2_init(x < min_0 ? min_0 : x > max_0 ? max_0 : x, x_0 < min_1 ? min_1 : x_0 > max_1 ? max_1 : x_0);
    };
  }));
  var mix_7 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_sbwi9b$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (a, b, x) {
      return new Float2_init(a.x * (1.0 - x) + b.x * x, a.y * (1.0 - x) + b.y * x);
    };
  }));
  var mix_8 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_bts9cp$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    return function (a, b, x) {
      var x_0 = x.x;
      var x_1 = x.y;
      return new Float2_init(a.x * (1.0 - x_0) + b.x * x_0, a.y * (1.0 - x_1) + b.y * x_1);
    };
  }));
  var min_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_pb2vnd$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var a = v.x;
      var b = v.y;
      return Math_0.min(a, b);
    };
  }));
  var min_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_ibf3jo$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.min(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      return new Float2_init(tmp$, Math_0.min(a_1, b_1));
    };
  }));
  var max_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_pb2vnd$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var a = v.x;
      var b = v.y;
      return Math_0.max(a, b);
    };
  }));
  var max_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_ibf3jo$', wrapFunction(function () {
    var Float2_init = _.com.curiouscreature.kotlin.math.Float2;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.max(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      return new Float2_init(tmp$, Math_0.max(a_1, b_1));
    };
  }));
  var transform_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.transform_nrn2gv$', function (v, block) {
    var $this = v.copy_dleff0$();
    $this.x = block($this.x);
    $this.y = block($this.y);
    return $this;
  });
  var lessThan_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_j4v164$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x < b, a.y < b);
    };
  }));
  var lessThan_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_ibf3jo$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x < b.x, a.y < b.y);
    };
  }));
  var lessThanEqual_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_j4v164$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x <= b, a.y <= b);
    };
  }));
  var lessThanEqual_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_ibf3jo$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x <= b.x, a.y <= b.y);
    };
  }));
  var greaterThan_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_j4v164$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x > b, a.y > b);
    };
  }));
  var greaterThan_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_ibf3jo$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x > b.y, a.y > b.y);
    };
  }));
  var greaterThanEqual_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_j4v164$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x >= b, a.y >= b);
    };
  }));
  var greaterThanEqual_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_ibf3jo$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x >= b.x, a.y >= b.y);
    };
  }));
  var equal_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_j4v164$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x === b, a.y === b);
    };
  }));
  var equal_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_ibf3jo$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x === b.x, a.y === b.y);
    };
  }));
  var notEqual_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_j4v164$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x !== b, a.y !== b);
    };
  }));
  var notEqual_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_ibf3jo$', wrapFunction(function () {
    var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
    return function (a, b) {
      return new Bool2_init(a.x !== b.x, a.y !== b.y);
    };
  }));
  var plus_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.plus_qpfjuw$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function ($receiver, v) {
      return new Float3_init($receiver + v.x, $receiver + v.y, $receiver + v.z);
    };
  }));
  var minus_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.minus_qpfjuw$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function ($receiver, v) {
      return new Float3_init($receiver - v.x, $receiver - v.y, $receiver - v.z);
    };
  }));
  var times_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.times_qpfjuw$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function ($receiver, v) {
      return new Float3_init($receiver * v.x, $receiver * v.y, $receiver * v.z);
    };
  }));
  var div_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.div_qpfjuw$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function ($receiver, v) {
      return new Float3_init($receiver / v.x, $receiver / v.y, $receiver / v.z);
    };
  }));
  var abs_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.abs_pb2vnc$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    var Math_0 = Math;
    return function (v) {
      var x = v.x;
      var tmp$ = Math_0.abs(x);
      var x_0 = v.y;
      var tmp$_0 = Math_0.abs(x_0);
      var x_1 = v.z;
      return new Float3_init(tmp$, tmp$_0, Math_0.abs(x_1));
    };
  }));
  var length_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length_pb2vnc$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var x = v.x * v.x + v.y * v.y + v.z * v.z;
      return Math_0.sqrt(x);
    };
  }));
  var length2_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length2_pb2vnc$', function (v) {
    return v.x * v.x + v.y * v.y + v.z * v.z;
  });
  var distance_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.distance_5urmss$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    var Math_0 = Math;
    return function (a, b) {
      var v = new Float3_init(a.x - b.x, a.y - b.y, a.z - b.z);
      var x = v.x * v.x + v.y * v.y + v.z * v.z;
      return Math_0.sqrt(x);
    };
  }));
  var dot_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.dot_5urmss$', function (a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  });
  var cross_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.cross_5urmss$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (a, b) {
      return new Float3_init(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
    };
  }));
  var x_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.x_v3ur5b$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function ($receiver, v) {
      return new Float3_init($receiver.y * v.z - $receiver.z * v.y, $receiver.z * v.x - $receiver.x * v.z, $receiver.x * v.y - $receiver.y * v.x);
    };
  }));
  function normalize_3(v) {
    var x = v.x * v.x + v.y * v.y + v.z * v.z;
    var l = 1.0 / Math_0.sqrt(x);
    return new Float3(v.x * l, v.y * l, v.z * l);
  }
  var reflect_2 = defineInlineFunction('client.com.curiouscreature.kotlin.math.reflect_5urmss$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (i, n) {
      var $receiver = 2.0 * (n.x * i.x + n.y * i.y + n.z * i.z);
      var v = new Float3_init($receiver * n.x, $receiver * n.y, $receiver * n.z);
      return new Float3_init(i.x - v.x, i.y - v.y, i.z - v.z);
    };
  }));
  function refract_2(i, n, eta) {
    var d = n.x * i.x + n.y * i.y + n.z * i.z;
    var k = 1.0 - eta * eta * (1.0 - d * d);
    var tmp$;
    if (k < 0.0)
      tmp$ = new Float3(0.0);
    else {
      var tmp$_0 = new Float3(eta * i.x, eta * i.y, eta * i.z);
      var $receiver = eta * d + Math_0.sqrt(k);
      var v = new Float3($receiver * n.x, $receiver * n.y, $receiver * n.z);
      tmp$ = new Float3(tmp$_0.x - v.x, tmp$_0.y - v.y, tmp$_0.z - v.z);
    }
    return tmp$;
  }
  var clamp_9 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_hab8ig$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v, min, max) {
      var x = v.x;
      var x_0 = v.y;
      var x_1 = v.z;
      return new Float3_init(x < min ? min : x > max ? max : x, x_0 < min ? min : x_0 > max ? max : x_0, x_1 < min ? min : x_1 > max ? max : x_1);
    };
  }));
  var clamp_10 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_ebx22w$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (v, min, max) {
      var x = v.x;
      var min_0 = min.x;
      var max_0 = max.x;
      var x_0 = v.y;
      var min_1 = min.y;
      var max_1 = max.y;
      var x_1 = v.z;
      var min_2 = min.z;
      var max_2 = max.z;
      return new Float3_init(x < min_0 ? min_0 : x > max_0 ? max_0 : x, x_0 < min_1 ? min_1 : x_0 > max_1 ? max_1 : x_0, x_1 < min_2 ? min_2 : x_1 > max_2 ? max_2 : x_1);
    };
  }));
  var mix_9 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_bvi8a9$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (a, b, x) {
      return new Float3_init(a.x * (1.0 - x) + b.x * x, a.y * (1.0 - x) + b.y * x, a.z * (1.0 - x) + b.z * x);
    };
  }));
  var mix_10 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_ebx22w$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    return function (a, b, x) {
      var x_0 = x.x;
      var x_1 = x.y;
      var x_2 = x.z;
      return new Float3_init(a.x * (1.0 - x_0) + b.x * x_0, a.y * (1.0 - x_1) + b.y * x_1, a.z * (1.0 - x_2) + b.z * x_2);
    };
  }));
  var min_7 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_pb2vnc$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var a = v.y;
      var b = v.z;
      var b_0 = Math_0.min(a, b);
      return Math_0.min(tmp$, b_0);
    };
  }));
  var min_8 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_5urmss$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.min(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.min(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      return new Float3_init(tmp$, tmp$_0, Math_0.min(a_2, b_2));
    };
  }));
  var max_7 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_pb2vnc$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var a = v.y;
      var b = v.z;
      var b_0 = Math_0.max(a, b);
      return Math_0.max(tmp$, b_0);
    };
  }));
  var max_8 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_5urmss$', wrapFunction(function () {
    var Float3_init = _.com.curiouscreature.kotlin.math.Float3;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.max(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.max(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      return new Float3_init(tmp$, tmp$_0, Math_0.max(a_2, b_2));
    };
  }));
  var transform_3 = defineInlineFunction('client.com.curiouscreature.kotlin.math.transform_eo0ww0$', function (v, block) {
    var $this = v.copy_y2kzbl$();
    $this.x = block($this.x);
    $this.y = block($this.y);
    $this.z = block($this.z);
    return $this;
  });
  var lessThan_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_rhuwp9$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x < b, a.y < b, a.z < b);
    };
  }));
  var lessThan_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThan_5urmss$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x < b.x, a.y < b.y, a.z < b.z);
    };
  }));
  var lessThanEqual_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_rhuwp9$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x <= b, a.y <= b, a.z <= b);
    };
  }));
  var lessThanEqual_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.lessThanEqual_5urmss$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x <= b.x, a.y <= b.y, a.z <= b.z);
    };
  }));
  var greaterThan_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_rhuwp9$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x > b, a.y > b, a.z > b);
    };
  }));
  var greaterThan_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThan_5urmss$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x > b.y, a.y > b.y, a.z > b.z);
    };
  }));
  var greaterThanEqual_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_rhuwp9$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x >= b, a.y >= b, a.z >= b);
    };
  }));
  var greaterThanEqual_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.greaterThanEqual_5urmss$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x >= b.x, a.y >= b.y, a.z >= b.z);
    };
  }));
  var equal_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_rhuwp9$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x === b, a.y === b, a.z === b);
    };
  }));
  var equal_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.equal_5urmss$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x === b.x, a.y === b.y, a.z === b.z);
    };
  }));
  var notEqual_5 = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_rhuwp9$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x !== b, a.y !== b, a.z !== b);
    };
  }));
  var notEqual_6 = defineInlineFunction('client.com.curiouscreature.kotlin.math.notEqual_5urmss$', wrapFunction(function () {
    var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
    return function (a, b) {
      return new Bool3_init(a.x !== b.x, a.y !== b.y, a.z !== b.z);
    };
  }));
  var plus_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.plus_qpfjux$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function ($receiver, v) {
      return new Float4_init($receiver + v.x, $receiver + v.y, $receiver + v.z, $receiver + v.w);
    };
  }));
  var minus_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.minus_qpfjux$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function ($receiver, v) {
      return new Float4_init($receiver - v.x, $receiver - v.y, $receiver - v.z, $receiver - v.w);
    };
  }));
  var times_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.times_qpfjux$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function ($receiver, v) {
      return new Float4_init($receiver * v.x, $receiver * v.y, $receiver * v.z, $receiver * v.w);
    };
  }));
  var div_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.div_qpfjux$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function ($receiver, v) {
      return new Float4_init($receiver / v.x, $receiver / v.y, $receiver / v.z, $receiver / v.w);
    };
  }));
  var abs_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.abs_pb2vnb$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    var Math_0 = Math;
    return function (v) {
      var x = v.x;
      var tmp$ = Math_0.abs(x);
      var x_0 = v.y;
      var tmp$_0 = Math_0.abs(x_0);
      var x_1 = v.z;
      var tmp$_1 = Math_0.abs(x_1);
      var x_2 = v.w;
      return new Float4_init(tmp$, tmp$_0, tmp$_1, Math_0.abs(x_2));
    };
  }));
  var length_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length_pb2vnb$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var x = v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
      return Math_0.sqrt(x);
    };
  }));
  var length2_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.length2_pb2vnb$', function (v) {
    return v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
  });
  var distance_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.distance_u0yd58$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    var Math_0 = Math;
    return function (a, b) {
      var v = new Float4_init(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
      var x = v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
      return Math_0.sqrt(x);
    };
  }));
  var dot_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.dot_u0yd58$', function (a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
  });
  function normalize_4(v) {
    var x = v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w;
    var l = 1.0 / Math_0.sqrt(x);
    return new Float4(v.x * l, v.y * l, v.z * l, v.w * l);
  }
  var clamp_11 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_1dsidz$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v, min, max) {
      var x = v.x;
      var x_0 = v.y;
      var x_1 = v.z;
      var x_2 = v.w;
      return new Float4_init(x < min ? min : x > max ? max : x, x_0 < min ? min : x_0 > max ? max : x_0, x_1 < min ? min : x_1 > max ? max : x_1, x_2 < min ? min : x_2 > max ? max : x_2);
    };
  }));
  var clamp_12 = defineInlineFunction('client.com.curiouscreature.kotlin.math.clamp_ujhogn$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (v, min, max) {
      var x = v.x;
      var min_0 = min.x;
      var max_0 = max.x;
      var x_0 = v.y;
      var min_1 = min.y;
      var max_1 = max.y;
      var x_1 = v.z;
      var min_2 = min.z;
      var max_2 = max.z;
      var x_2 = v.w;
      var min_3 = min.z;
      var max_3 = max.w;
      return new Float4_init(x < min_0 ? min_0 : x > max_0 ? max_0 : x, x_0 < min_1 ? min_1 : x_0 > max_1 ? max_1 : x_0, x_1 < min_2 ? min_2 : x_1 > max_2 ? max_2 : x_1, x_2 < min_3 ? min_3 : x_2 > max_3 ? max_3 : x_2);
    };
  }));
  var mix_11 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_iy735b$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (a, b, x) {
      return new Float4_init(a.x * (1.0 - x) + b.x * x, a.y * (1.0 - x) + b.y * x, a.z * (1.0 - x) + b.z * x, a.w * (1.0 - x) + b.w * x);
    };
  }));
  var mix_12 = defineInlineFunction('client.com.curiouscreature.kotlin.math.mix_ujhogn$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    return function (a, b, x) {
      var x_0 = x.x;
      var x_1 = x.y;
      var x_2 = x.z;
      var x_3 = x.w;
      return new Float4_init(a.x * (1.0 - x_0) + b.x * x_0, a.y * (1.0 - x_1) + b.y * x_1, a.z * (1.0 - x_2) + b.z * x_2, a.w * (1.0 - x_3) + b.w * x_3);
    };
  }));
  var min_9 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_pb2vnb$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var tmp$_0 = v.y;
      var a = v.z;
      var b = v.w;
      var b_0 = Math_0.min(a, b);
      var b_1 = Math_0.min(tmp$_0, b_0);
      return Math_0.min(tmp$, b_1);
    };
  }));
  var min_10 = defineInlineFunction('client.com.curiouscreature.kotlin.math.min_u0yd58$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.min(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.min(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      var tmp$_1 = Math_0.min(a_2, b_2);
      var a_3 = a.w;
      var b_3 = b.w;
      return new Float4_init(tmp$, tmp$_0, tmp$_1, Math_0.min(a_3, b_3));
    };
  }));
  var max_9 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_pb2vnb$', wrapFunction(function () {
    var Math_0 = Math;
    return function (v) {
      var tmp$ = v.x;
      var tmp$_0 = v.y;
      var a = v.z;
      var b = v.w;
      var b_0 = Math_0.max(a, b);
      var b_1 = Math_0.max(tmp$_0, b_0);
      return Math_0.max(tmp$, b_1);
    };
  }));
  var max_10 = defineInlineFunction('client.com.curiouscreature.kotlin.math.max_u0yd58$', wrapFunction(function () {
    var Float4_init = _.com.curiouscreature.kotlin.math.Float4;
    var Math_0 = Math;
    return function (a, b) {
      var a_0 = a.x;
      var b_0 = b.x;
      var tmp$ = Math_0.max(a_0, b_0);
      var a_1 = a.y;
      var b_1 = b.y;
      var tmp$_0 = Math_0.max(a_1, b_1);
      var a_2 = a.z;
      var b_2 = b.z;
      var tmp$_1 = Math_0.max(a_2, b_2);
      var a_3 = a.w;
      var b_3 = b.w;
      return new Float4_init(tmp$, tmp$_0, tmp$_1, Math_0.max(a_3, b_3));
    };
  }));
  var transform_4 = defineInlineFunction('client.com.curiouscreature.kotlin.math.transform_hxf5q9$', function (v, block) {
    var $this = v.copy_7b5o5w$();
    $this.x = block($this.x);
    $this.y = block($this.y);
    $this.z = block($this.z);
    $this.w = block($this.w);
    return $this;
  });
  function Bool2(x, y) {
    if (x === void 0)
      x = false;
    if (y === void 0)
      y = false;
    this.x = x;
    this.y = y;
  }
  Object.defineProperty(Bool2.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.set_r_6taknv$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Bool2.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.set_g_6taknv$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Bool2.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.set_s_6taknv$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Bool2.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.set_t_6taknv$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Bool2.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.get_xy', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.set_xy_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool2.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.get_rg', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.set_rg_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool2.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.get_st', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.set_st_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Bool2.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      default:throw IllegalArgumentException_init('index must be X, Y, R, G, S or T');
    }
  };
  Bool2.prototype.get_p1ayli$ = function (index1, index2) {
    return new Bool2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Bool2.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:throw IllegalArgumentException_init('index must be in 0..1');
    }
  };
  Bool2.prototype.get_vux9f0$ = function (index1, index2) {
    return new Bool2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Bool2.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool2.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Bool2.prototype.set_fzusl$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..1');
    }
  };
  Bool2.prototype.set_ydzd23$ = function (index1, index2, v) {
    this.set_fzusl$(index1, v);
    this.set_fzusl$(index2, v);
  };
  Bool2.prototype.set_rrysqm$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      default:throw IllegalArgumentException_init('index must be X, Y, R, G, S or T');
    }
  };
  Bool2.prototype.set_l3ngtd$ = function (index1, index2, v) {
    this.set_rrysqm$(index1, v);
    this.set_rrysqm$(index2, v);
  };
  Bool2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bool2',
    interfaces: []
  };
  function Bool2_init(v, $this) {
    $this = $this || Object.create(Bool2.prototype);
    Bool2.call($this, v.x, v.y);
    return $this;
  }
  Bool2.prototype.component1 = function () {
    return this.x;
  };
  Bool2.prototype.component2 = function () {
    return this.y;
  };
  Bool2.prototype.copy_dqye30$ = function (x, y) {
    return new Bool2(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Bool2.prototype.toString = function () {
    return 'Bool2(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Bool2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Bool2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Bool3(x, y, z) {
    if (x === void 0)
      x = false;
    if (y === void 0)
      y = false;
    if (z === void 0)
      z = false;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  Object.defineProperty(Bool3.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_r_6taknv$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Bool3.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_g_6taknv$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Bool3.prototype, 'b', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_b', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_b_6taknv$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Bool3.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_s_6taknv$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Bool3.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_t_6taknv$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Bool3.prototype, 'p', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_p', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_p_6taknv$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Bool3.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_xy', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_xy_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool3.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_rg', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_rg_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool3.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_st', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_st_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool3.prototype, 'rgb', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_rgb', wrapFunction(function () {
      var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
      return function () {
        return new Bool3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_rgb_5gidu0$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Bool3.prototype, 'xyz', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_xyz', wrapFunction(function () {
      var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
      return function () {
        return new Bool3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_xyz_5gidu0$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Bool3.prototype, 'stp', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.get_stp', wrapFunction(function () {
      var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
      return function () {
        return new Bool3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.set_stp_5gidu0$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Bool3.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      case 'Z':
      case 'B':
      case 'P':
        return this.z;
      default:throw IllegalArgumentException_init('index must be X, Y, Z, R, G, B, S, T or P');
    }
  };
  Bool3.prototype.get_p1ayli$ = function (index1, index2) {
    return new Bool2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Bool3.prototype.get_6n7u8t$ = function (index1, index2, index3) {
    return new Bool3(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3));
  };
  Bool3.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:throw IllegalArgumentException_init('index must be in 0..2');
    }
  };
  Bool3.prototype.get_vux9f0$ = function (index1, index2) {
    return new Bool2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Bool3.prototype.get_qt1dr2$ = function (index1, index2, index3) {
    return new Bool3(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3));
  };
  Bool3.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool3.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Bool3.prototype.set_fzusl$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      case 2:
        this.z = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..2');
    }
  };
  Bool3.prototype.set_ydzd23$ = function (index1, index2, v) {
    this.set_fzusl$(index1, v);
    this.set_fzusl$(index2, v);
  };
  Bool3.prototype.set_x84gdh$ = function (index1, index2, index3, v) {
    this.set_fzusl$(index1, v);
    this.set_fzusl$(index2, v);
    this.set_fzusl$(index3, v);
  };
  Bool3.prototype.set_rrysqm$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      case 'Z':
      case 'B':
      case 'P':
        this.z = v;
        break;
      default:throw IllegalArgumentException_init('index must be X, Y, Z, R, G, B, S, T or P');
    }
  };
  Bool3.prototype.set_l3ngtd$ = function (index1, index2, v) {
    this.set_rrysqm$(index1, v);
    this.set_rrysqm$(index2, v);
  };
  Bool3.prototype.set_lp34n0$ = function (index1, index2, index3, v) {
    this.set_rrysqm$(index1, v);
    this.set_rrysqm$(index2, v);
    this.set_rrysqm$(index3, v);
  };
  Bool3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bool3',
    interfaces: []
  };
  function Bool3_init(v, z, $this) {
    if (z === void 0)
      z = false;
    $this = $this || Object.create(Bool3.prototype);
    Bool3.call($this, v.x, v.y, z);
    return $this;
  }
  function Bool3_init_0(v, $this) {
    $this = $this || Object.create(Bool3.prototype);
    Bool3.call($this, v.x, v.y, v.z);
    return $this;
  }
  Bool3.prototype.component1 = function () {
    return this.x;
  };
  Bool3.prototype.component2 = function () {
    return this.y;
  };
  Bool3.prototype.component3 = function () {
    return this.z;
  };
  Bool3.prototype.copy_ws0pad$ = function (x, y, z) {
    return new Bool3(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  Bool3.prototype.toString = function () {
    return 'Bool3(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + ')';
  };
  Bool3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  Bool3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Bool4(x, y, z, w) {
    if (x === void 0)
      x = false;
    if (y === void 0)
      y = false;
    if (z === void 0)
      z = false;
    if (w === void 0)
      w = false;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  Object.defineProperty(Bool4.prototype, 'r', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_r', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_r_6taknv$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 'g', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_g', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_g_6taknv$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 'b', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_b', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_b_6taknv$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 'a', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_a', function () {
      return this.w;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_a_6taknv$', function (value) {
      this.w = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 's', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_s', function () {
      return this.x;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_s_6taknv$', function (value) {
      this.x = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 't', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_t', function () {
      return this.y;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_t_6taknv$', function (value) {
      this.y = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 'p', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_p', function () {
      return this.z;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_p_6taknv$', function (value) {
      this.z = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 'q', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_q', function () {
      return this.w;
    }),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_q_6taknv$', function (value) {
      this.w = value;
    })
  });
  Object.defineProperty(Bool4.prototype, 'xy', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_xy', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_xy_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool4.prototype, 'rg', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_rg', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_rg_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool4.prototype, 'st', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_st', wrapFunction(function () {
      var Bool2_init = _.com.curiouscreature.kotlin.math.Bool2;
      return function () {
        return new Bool2_init(this.x, this.y);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_st_5gidu1$', function (value) {
      this.x = value.x;
      this.y = value.y;
    })
  });
  Object.defineProperty(Bool4.prototype, 'rgb', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_rgb', wrapFunction(function () {
      var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
      return function () {
        return new Bool3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_rgb_5gidu0$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Bool4.prototype, 'xyz', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_xyz', wrapFunction(function () {
      var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
      return function () {
        return new Bool3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_xyz_5gidu0$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Bool4.prototype, 'stp', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_stp', wrapFunction(function () {
      var Bool3_init = _.com.curiouscreature.kotlin.math.Bool3;
      return function () {
        return new Bool3_init(this.x, this.y, this.z);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_stp_5gidu0$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
    })
  });
  Object.defineProperty(Bool4.prototype, 'rgba', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_rgba', wrapFunction(function () {
      var Bool4_init = _.com.curiouscreature.kotlin.math.Bool4;
      return function () {
        return new Bool4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_rgba_5gidtz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Object.defineProperty(Bool4.prototype, 'xyzw', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_xyzw', wrapFunction(function () {
      var Bool4_init = _.com.curiouscreature.kotlin.math.Bool4;
      return function () {
        return new Bool4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_xyzw_5gidtz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Object.defineProperty(Bool4.prototype, 'stpq', {
    get: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.get_stpq', wrapFunction(function () {
      var Bool4_init = _.com.curiouscreature.kotlin.math.Bool4;
      return function () {
        return new Bool4_init(this.x, this.y, this.z, this.w);
      };
    })),
    set: defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.set_stpq_5gidtz$', function (value) {
      this.x = value.x;
      this.y = value.y;
      this.z = value.z;
      this.w = value.w;
    })
  });
  Bool4.prototype.get_avfk89$ = function (index) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        return this.x;
      case 'Y':
      case 'G':
      case 'T':
        return this.y;
      case 'Z':
      case 'B':
      case 'P':
        return this.z;
      case 'W':
      case 'A':
      case 'Q':
        return this.w;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Bool4.prototype.get_p1ayli$ = function (index1, index2) {
    return new Bool2(this.get_avfk89$(index1), this.get_avfk89$(index2));
  };
  Bool4.prototype.get_6n7u8t$ = function (index1, index2, index3) {
    return new Bool3(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3));
  };
  Bool4.prototype.get_e872hs$ = function (index1, index2, index3, index4) {
    return new Bool4(this.get_avfk89$(index1), this.get_avfk89$(index2), this.get_avfk89$(index3), this.get_avfk89$(index4));
  };
  Bool4.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:throw IllegalArgumentException_init('index must be in 0..3');
    }
  };
  Bool4.prototype.get_vux9f0$ = function (index1, index2) {
    return new Bool2(this.get_za3lpa$(index1), this.get_za3lpa$(index2));
  };
  Bool4.prototype.get_qt1dr2$ = function (index1, index2, index3) {
    return new Bool3(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3));
  };
  Bool4.prototype.get_tjonv8$ = function (index1, index2, index3, index4) {
    return new Bool4(this.get_za3lpa$(index1), this.get_za3lpa$(index2), this.get_za3lpa$(index3), this.get_za3lpa$(index4));
  };
  Bool4.prototype.invoke_za3lpa$ = defineInlineFunction('client.com.curiouscreature.kotlin.math.Bool4.invoke_za3lpa$', function (index) {
    return this.get_za3lpa$(index - 1 | 0);
  });
  Bool4.prototype.set_fzusl$ = function (index, v) {
    switch (index) {
      case 0:
        this.x = v;
        break;
      case 1:
        this.y = v;
        break;
      case 2:
        this.z = v;
        break;
      case 3:
        this.w = v;
        break;
      default:throw IllegalArgumentException_init('index must be in 0..3');
    }
  };
  Bool4.prototype.set_ydzd23$ = function (index1, index2, v) {
    this.set_fzusl$(index1, v);
    this.set_fzusl$(index2, v);
  };
  Bool4.prototype.set_x84gdh$ = function (index1, index2, index3, v) {
    this.set_fzusl$(index1, v);
    this.set_fzusl$(index2, v);
    this.set_fzusl$(index3, v);
  };
  Bool4.prototype.set_7bka6z$ = function (index1, index2, index3, index4, v) {
    this.set_fzusl$(index1, v);
    this.set_fzusl$(index2, v);
    this.set_fzusl$(index3, v);
    this.set_fzusl$(index4, v);
  };
  Bool4.prototype.set_rrysqm$ = function (index, v) {
    switch (index.name) {
      case 'X':
      case 'R':
      case 'S':
        this.x = v;
        break;
      case 'Y':
      case 'G':
      case 'T':
        this.y = v;
        break;
      case 'Z':
      case 'B':
      case 'P':
        this.z = v;
        break;
      case 'W':
      case 'A':
      case 'Q':
        this.w = v;
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Bool4.prototype.set_l3ngtd$ = function (index1, index2, v) {
    this.set_rrysqm$(index1, v);
    this.set_rrysqm$(index2, v);
  };
  Bool4.prototype.set_lp34n0$ = function (index1, index2, index3, v) {
    this.set_rrysqm$(index1, v);
    this.set_rrysqm$(index2, v);
    this.set_rrysqm$(index3, v);
  };
  Bool4.prototype.set_uqmnqf$ = function (index1, index2, index3, index4, v) {
    this.set_rrysqm$(index1, v);
    this.set_rrysqm$(index2, v);
    this.set_rrysqm$(index3, v);
    this.set_rrysqm$(index4, v);
  };
  Bool4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bool4',
    interfaces: []
  };
  function Bool4_init(v, z, w, $this) {
    if (z === void 0)
      z = false;
    if (w === void 0)
      w = false;
    $this = $this || Object.create(Bool4.prototype);
    Bool4.call($this, v.x, v.y, z, w);
    return $this;
  }
  function Bool4_init_0(v, w, $this) {
    if (w === void 0)
      w = false;
    $this = $this || Object.create(Bool4.prototype);
    Bool4.call($this, v.x, v.y, v.z, w);
    return $this;
  }
  function Bool4_init_1(v, $this) {
    $this = $this || Object.create(Bool4.prototype);
    Bool4.call($this, v.x, v.y, v.z, v.w);
    return $this;
  }
  Bool4.prototype.component1 = function () {
    return this.x;
  };
  Bool4.prototype.component2 = function () {
    return this.y;
  };
  Bool4.prototype.component3 = function () {
    return this.z;
  };
  Bool4.prototype.component4 = function () {
    return this.w;
  };
  Bool4.prototype.copy_nyyhg$ = function (x, y, z, w) {
    return new Bool4(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Bool4.prototype.toString = function () {
    return 'Bool4(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + (', w=' + Kotlin.toString(this.w)) + ')';
  };
  Bool4.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Bool4.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  var any = defineInlineFunction('client.com.curiouscreature.kotlin.math.any_5gidu1$', function (v) {
    return v.x | v.y;
  });
  var all = defineInlineFunction('client.com.curiouscreature.kotlin.math.all_5gidu1$', function (v) {
    return v.x & v.y;
  });
  var any_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.any_5gidu0$', function (v) {
    return v.x | v.y | v.z;
  });
  var all_0 = defineInlineFunction('client.com.curiouscreature.kotlin.math.all_5gidu0$', function (v) {
    return v.x & v.y & v.z;
  });
  var any_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.any_5gidtz$', function (v) {
    return v.x | v.y | v.z | v.w;
  });
  var all_1 = defineInlineFunction('client.com.curiouscreature.kotlin.math.all_5gidtz$', function (v) {
    return v.x & v.y & v.z & v.w;
  });
  function AmbientLight(name, id) {
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    GameObject.call(this, name, id);
    var tmp$;
    this.light = Kotlin.isType(tmp$ = new THREE.AmbientLight(16627731, 0.5), Light) ? tmp$ : throwCCE();
    this.threeObject_5f9q43$_0 = this.light;
    this.light.castShadow = false;
  }
  Object.defineProperty(AmbientLight.prototype, 'threeObject', {
    get: function () {
      return this.threeObject_5f9q43$_0;
    },
    set: function (threeObject) {
      this.threeObject_5f9q43$_0 = threeObject;
    }
  });
  AmbientLight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AmbientLight',
    interfaces: [GameObject]
  };
  var DEFAULT_FAR_PLANE;
  var DEFAULT_NEAR_PLANE;
  function Camera(name, id) {
    Camera$Companion_getInstance();
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    GameObject.call(this, name, id);
    this.threeCamera = new PerspectiveCamera_init(60, 1 / 0.7, DEFAULT_NEAR_PLANE, DEFAULT_FAR_PLANE);
    this.threeObject_vx2lw$_0 = this.threeCamera;
  }
  function Camera$Companion() {
    Camera$Companion_instance = this;
    this.logger = Logger$Companion_getInstance().getLogger_61zpoe$('Camera');
  }
  Camera$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Camera$Companion_instance = null;
  function Camera$Companion_getInstance() {
    if (Camera$Companion_instance === null) {
      new Camera$Companion();
    }
    return Camera$Companion_instance;
  }
  Object.defineProperty(Camera.prototype, 'threeObject', {
    get: function () {
      return this.threeObject_vx2lw$_0;
    },
    set: function (threeObject) {
      this.threeObject_vx2lw$_0 = threeObject;
    }
  });
  Camera.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Camera',
    interfaces: [GameObject]
  };
  var MOUSE_ELEVATION_COEF;
  function FollowCamera(name, id) {
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    Camera.call(this, name, id);
    this.followDistance = 3.0;
    this.followed = null;
  }
  FollowCamera.prototype.follow_cectmz$ = function (followed) {
    followed.threeObject.add(this.threeObject);
    this.followed = followed;
    this.position = new Double3(0.0, -this.followDistance, this.followDistance / 2);
    this.rotation = new Euler(60.0 * (package$math.PI / 180.0), 0.0, 0.0);
    Camera$Companion_getInstance().logger.debug_ukk7tb$(this.toString() + ' (pos: ' + this.position + ') now following ' + (followed.toString() + ' (pos: ' + followed.position + ')'));
  };
  FollowCamera.prototype.update_6oc7r5$ = function (tic) {
    Camera.prototype.update_6oc7r5$.call(this, tic);
    var traverse = tic.core.input.mouseMotion.x;
    if (traverse !== 0.0) {
      var euler = this.rotation;
      euler.x = euler.x - MOUSE_ELEVATION_COEF * tic.core.input.mouseMotion.y;
      this.rotation = euler;
    }
  };
  FollowCamera.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FollowCamera',
    interfaces: [Camera]
  };
  function GameObject(name, id) {
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    this.name = name;
    var tmp$;
    this.id = id.length === 0 ? typeof (tmp$ = uuid()) === 'string' ? tmp$ : throwCCE() : id;
    this.childObjects = HashSet_init();
    this.scene_rekuq7$_0 = null;
    this.motion = new Double3();
  }
  Object.defineProperty(GameObject.prototype, 'scene', {
    get: function () {
      return this.scene_rekuq7$_0;
    },
    set: function (scene) {
      var tmp$;
      if (equals(scene, this.scene_rekuq7$_0)) {
        return;
      }
      this.scene_rekuq7$_0 = scene;
      (tmp$ = scene != null ? scene.threeScene : null) != null ? (tmp$.add(this.threeObject), Unit) : null;
      var tmp$_0;
      tmp$_0 = this.childObjects.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        element.scene = scene;
      }
    }
  });
  Object.defineProperty(GameObject.prototype, 'position', {
    get: function () {
      return Double3_init_1(this.threeObject.position);
    },
    set: function (pos) {
      this.threeObject.position.x = pos.x;
      this.threeObject.position.y = pos.y;
      this.threeObject.position.z = pos.z;
    }
  });
  Object.defineProperty(GameObject.prototype, 'worldPosition', {
    get: function () {
      return Double3_init_1(this.threeObject.getWorldPosition());
    },
    set: function (v) {
      throw new NotImplementedError();
    }
  });
  Object.defineProperty(GameObject.prototype, 'rotation', {
    get: function () {
      return this.threeObject.rotation;
    },
    set: function (rot) {
      this.threeObject.setRotationFromEuler(rot);
    }
  });
  Object.defineProperty(GameObject.prototype, 'visible', {
    get: function () {
      return this.threeObject.visible;
    },
    set: function (b) {
      this.threeObject.visible = b;
    }
  });
  GameObject.prototype.translateX_14dthe$ = function (value) {
    this.threeObject.translateX(value);
  };
  GameObject.prototype.translateY_14dthe$ = function (value) {
    this.threeObject.translateY(value);
  };
  GameObject.prototype.translateZ_14dthe$ = function (value) {
    this.threeObject.translateZ(value);
  };
  GameObject.prototype.update_6oc7r5$ = function (tic) {
  };
  GameObject.prototype.addChild_cectmz$ = function (child) {
    return this.childObjects.add_11rb$(child);
  };
  GameObject.prototype.distance_cectmz$ = function (other) {
    var $this = other.worldPosition;
    var v = this.worldPosition;
    var v_0 = new Double3($this.x - v.x, $this.y - v.y, $this.z - v.z);
    var x = v_0.x * v_0.x + v_0.y * v_0.y + v_0.z * v_0.z;
    return Math_0.sqrt(x);
  };
  GameObject.prototype.toString = function () {
    var className = ensureNotNull(Kotlin.getKClassFromExpression(this).simpleName);
    var abbreviatedID = slice(this.id, new IntRange(this.id.length - 8 | 0, this.id.length));
    return className + "['" + abbreviatedID + ']';
  };
  GameObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameObject',
    interfaces: []
  };
  var DEFAULT_SHADOW_MAP_SIZE;
  function SunLight(name, id) {
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    GameObject.call(this, name, id);
    var tmp$;
    this.light = Kotlin.isType(tmp$ = new THREE.DirectionalLight(16627731, 0.7), Light) ? tmp$ : throwCCE();
    this.threeObject_biao61$_0 = this.light;
    this.light.castShadow = true;
  }
  Object.defineProperty(SunLight.prototype, 'threeObject', {
    get: function () {
      return this.threeObject_biao61$_0;
    },
    set: function (threeObject) {
      this.threeObject_biao61$_0 = threeObject;
    }
  });
  SunLight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SunLight',
    interfaces: [GameObject]
  };
  var TERRAIN_SEED;
  var RADIUS;
  var HEIGHT_SCALE;
  var MAX_LOD;
  var MAX_ENCODED_LOD;
  var REL_SUBDIVISION_DIST;
  var TILE_POLYGON_WIDTH;
  var TILE_HEIGHT_ROW_SIZE;
  var TILE_VERTICES_ROW_SIZE;
  var N_TILE_HEIGHTS;
  var N_TILE_VERTICES;
  var TILE_LIP_BASE_SCALE;
  var MAX_TILE_DIVISIONS_PER_TIC;
  var Array_0 = Array;
  function Terrain(id) {
    Terrain$Companion_getInstance();
    if (id === void 0)
      id = '';
    GameObject.call(this, 'Terrain', id);
    this.threeObject_8hxmb4$_0 = new Object3D();
    this.radius = RADIUS;
    var array = Array_0(6);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Tile(this, i);
    }
    this.faces = array;
    this.tilePile_qzdwlj$_0 = ArrayList_init();
    this.tileCounter_5qciht$_0 = 0;
    this.subdivisionCounter = MAX_TILE_DIVISIONS_PER_TIC;
    this.gravity = 9.806;
    var tmp$_0;
    Module.terrain = this;
    var $receiver = this.faces;
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var element = $receiver[tmp$_1];
      this.addChild_cectmz$(element);
    }
    var echo = typeof (tmp$_0 = _ter_TestEcho(4)) === 'number' ? tmp$_0 : throwCCE();
    if (echo !== 4) {
      throw new CException('Test Function call to C failed. ' + 'Is Module set up?');
    }
    _ter_Init(124, 6371000.0, 10000.0);
  }
  function Terrain$Companion() {
    Terrain$Companion_instance = this;
    this.logger_0 = Logger$Companion_getInstance().getLogger_61zpoe$('Terrain');
  }
  Terrain$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Terrain$Companion_instance = null;
  function Terrain$Companion_getInstance() {
    if (Terrain$Companion_instance === null) {
      new Terrain$Companion();
    }
    return Terrain$Companion_instance;
  }
  Object.defineProperty(Terrain.prototype, 'threeObject', {
    get: function () {
      return this.threeObject_8hxmb4$_0;
    },
    set: function (threeObject) {
      this.threeObject_8hxmb4$_0 = threeObject;
    }
  });
  Terrain.prototype.update_6oc7r5$ = function (tic) {
    this.subdivisionCounter = MAX_TILE_DIVISIONS_PER_TIC;
  };
  Terrain.prototype.get_za3lpa$ = function (index) {
    return this.faces[index];
  };
  Terrain.prototype.addTileToBin_74koew$ = function (tile) {
    this.tilePile_qzdwlj$_0.add_11rb$(tile);
  };
  Terrain.prototype.getTile_g3zu9q$ = function (face, parent, quadrant) {
    if (parent === void 0)
      parent = null;
    if (quadrant === void 0)
      quadrant = null;
    var tile;
    if (this.tilePile_qzdwlj$_0.isEmpty()) {
      tile = new Tile(this, face, parent, quadrant);
      this.tileCounter_5qciht$_0 = this.tileCounter_5qciht$_0 + 1 | 0;
      Terrain$Companion_getInstance().logger_0.debug_ukk7tb$('Generated Tile #' + this.tileCounter_5qciht$_0);
    }
     else {
      tile = this.tilePile_qzdwlj$_0.removeAt_za3lpa$(this.tilePile_qzdwlj$_0.size - 1 | 0);
      tile.setGeometry_g3zu9q$(face, parent, quadrant);
      Terrain$Companion_getInstance().logger_0.fine_ukk7tb$('recycled Tile #' + this.tileCounter_5qciht$_0);
    }
    return tile;
  };
  Terrain.prototype.heightAtVector_v1l2rz$ = function (vector) {
    var tmp$;
    return (typeof (tmp$ = _ter_GetHeight(vector.x, vector.y, vector.z, 24)) === 'number' ? tmp$ : throwCCE()) * HEIGHT_SCALE;
  };
  Terrain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Terrain',
    interfaces: [GameObject]
  };
  function Tile(terrain, face, parent, quadrant) {
    Tile$Companion_getInstance();
    if (parent === void 0)
      parent = null;
    if (quadrant === void 0)
      quadrant = null;
    GameObject.call(this);
    this.terrain_0 = terrain;
    this.parent = null;
    this.face = -1;
    this.quadrant = null;
    this.lod_0 = -1;
    this.shape = new Double2();
    this.relativeWidth_0 = -1.0;
    this.subTiles_0 = Kotlin.newArray(4, null);
    this.subdivisionDistance_0 = -1.0;
    this.recombinationDistance_0 = -1.0;
    this.geometry = null;
    this.quadrants_u0eb9z$_0 = this.quadrants_u0eb9z$_0;
    this.p1 = new Double2();
    this.p2 = new Double2();
    this.threeObject_fyb6zn$_0 = this.makeThreeTile_0();
    this.setGeometry_g3zu9q$(face, parent, quadrant);
    this.terrain_0.threeObject.add(this.threeObject);
    if (parent != null && quadrant == null) {
      throw IllegalArgumentException_init('If parent arg is passed, quadrant must also be passed.');
    }
  }
  function Tile$Companion() {
    Tile$Companion_instance = this;
    this.logger_0 = Logger$Companion_getInstance().getLogger_61zpoe$('Tile');
  }
  Tile$Companion.prototype.tilePosFromHeightIndex_za3lpa$ = function (i) {
    if (i < 0 || i >= N_TILE_HEIGHTS) {
      throw IllegalArgumentException_init('index ' + i + ' outside ' + until(0, N_TILE_HEIGHTS));
    }
    return new Double2(i % TILE_HEIGHT_ROW_SIZE / TILE_POLYGON_WIDTH, (i / TILE_HEIGHT_ROW_SIZE | 0) / TILE_POLYGON_WIDTH);
  };
  Tile$Companion.prototype.vertexData_za3lpa$ = function (i) {
    if (i < 0 || i >= N_TILE_VERTICES) {
      throw IllegalArgumentException_init('index ' + i + ' outside ' + until(0, N_TILE_VERTICES));
    }
    var x = i % TILE_VERTICES_ROW_SIZE;
    var y = i / TILE_VERTICES_ROW_SIZE | 0;
    var isLip = false;
    if (x === 0) {
      x = x + 1 | 0;
      isLip = true;
    }
     else if (x === (TILE_VERTICES_ROW_SIZE - 1 | 0)) {
      x = x - 1 | 0;
      isLip = true;
    }
    if (y === 0) {
      y = y + 1 | 0;
      isLip = true;
    }
     else if (y === (TILE_VERTICES_ROW_SIZE - 1 | 0)) {
      y = y - 1 | 0;
      isLip = true;
    }
    x = x - 1 | 0;
    y = y - 1 | 0;
    return new Pair(Kotlin.imul(y, TILE_HEIGHT_ROW_SIZE) + x | 0, isLip);
  };
  Tile$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tile$Companion_instance = null;
  function Tile$Companion_getInstance() {
    if (Tile$Companion_instance === null) {
      new Tile$Companion();
    }
    return Tile$Companion_instance;
  }
  Object.defineProperty(Tile.prototype, 'quadrants_0', {
    get: function () {
      if (this.quadrants_u0eb9z$_0 == null)
        return throwUPAE('quadrants');
      return this.quadrants_u0eb9z$_0;
    },
    set: function (quadrants) {
      this.quadrants_u0eb9z$_0 = quadrants;
    }
  });
  Object.defineProperty(Tile.prototype, 'threeObject', {
    get: function () {
      return this.threeObject_fyb6zn$_0;
    },
    set: function (threeObject) {
      this.threeObject_fyb6zn$_0 = threeObject;
    }
  });
  Tile.prototype.setGeometry_g3zu9q$ = function (face, parent, quadrant) {
    if (parent === void 0)
      parent = null;
    if (quadrant === void 0)
      quadrant = null;
    var tmp$;
    try {
      Tile$Companion_getInstance().logger_0.fine_ukk7tb$('creating tile geometry, face: ' + face + ', ' + ('quad: ' + toString(quadrant) + ', pos: ' + this.position));
      this.face = face;
      this.parent = parent;
      this.quadrant = quadrant;
      this.lod_0 = parent == null ? 1 : parent.lod_0 + 1 | 0;
      var array = Array_0(this.lod_0);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        var init$result;
        if (i < (this.lod_0 - 1 | 0)) {
          init$result = ensureNotNull(parent).quadrants_0[i];
        }
         else if (i === 0) {
          init$result = face;
        }
         else {
          init$result = ensureNotNull(quadrant);
        }
        array[i] = init$result;
      }
      this.quadrants_0 = array;
      var tmp$_1;
      if (parent != null) {
        var $this = parent.shape;
        tmp$_1 = new Double2($this.x / 2.0, $this.y / 2.0);
      }
       else
        tmp$_1 = new Double2(2.0, 2.0);
      this.shape = tmp$_1;
      this.relativeWidth_0 = this.shape.x / 2;
      this.subdivisionDistance_0 = REL_SUBDIVISION_DIST * this.relativeWidth_0;
      this.recombinationDistance_0 = REL_SUBDIVISION_DIST * this.relativeWidth_0 * 1.2;
      this.p1 = this.findP1_0(parent, this.shape);
      var $this_0 = this.p1;
      var v = this.shape;
      this.p2 = new Double2($this_0.x + v.x, $this_0.y + v.y);
      tmp$ = this.geometry;
      if (tmp$ == null) {
        throw IllegalStateException_init('Geometry is null');
      }
      var geometry = tmp$;
      geometry.verticesNeedUpdate = true;
      geometry.attributes.position.needsUpdate = true;
      var pos = this.setVertices_0();
      this.threeObject.position.set(pos.x, pos.y, pos.z);
      this.threeObject.updateMatrix();
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        Tile$Companion_getInstance().logger_0.error_ukk7tb$('Error occurred in Tile.setGeometry() method', e);
        throw e;
      }
       else
        throw e;
    }
  };
  Tile.prototype.setVertices_0 = function () {
    var tmp$;
    try {
      var array = Array_0(N_TILE_HEIGHTS);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        var tmp$_1;
        try {
          var tileRelPos = Tile$Companion_getInstance().tilePosFromHeightIndex_za3lpa$(i);
          var tmp$_2 = this.p1;
          var v = this.shape;
          var v_0 = new Double2(tileRelPos.x * v.x, tileRelPos.y * v.y);
          var facePos = new Double2(tmp$_2.x + v_0.x, tmp$_2.y + v_0.y);
          var cubeRelPos = this.facePosTo3d_0(facePos);
          var normPos = normalize_0(cubeRelPos);
          var x = normPos.x;
          var y = normPos.y;
          var z = normPos.z;
          var height = typeof (tmp$_1 = _ter_GetHeight(x, y, z, 24)) === 'number' ? tmp$_1 : throwCCE();
          var v_1 = RADIUS + height * HEIGHT_SCALE;
          var pos = new Double3(normPos.x * v_1, normPos.y * v_1, normPos.z * v_1);
        }
         catch (e) {
          if (Kotlin.isType(e, Exception)) {
            Tile$Companion_getInstance().logger_0.error_ukk7tb$('Error converting height index: ' + i);
            throw e;
          }
           else
            throw e;
        }
        array[i] = pos;
      }
      var spherePositions = array;
      var array_0 = Array_0(N_TILE_VERTICES);
      var tmp$_3;
      tmp$_3 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_3; i_0++) {
        var tmp$_4 = Tile$Companion_getInstance().vertexData_za3lpa$(i_0);
        var heightIndex = tmp$_4.component1()
        , isLip = tmp$_4.component2();
        if (heightIndex < 0 || heightIndex >= N_TILE_HEIGHTS) {
          throw IllegalStateException_init('bad height index: ' + heightIndex + '. vert: ' + i_0);
        }
        var heightRatio = isLip ? 1.0 - this.shape.x * TILE_LIP_BASE_SCALE : 1.0;
        var $this = spherePositions[heightIndex];
        var vertexPosition = new Double3($this.x * heightRatio, $this.y * heightRatio, $this.z * heightRatio);
        array_0[i_0] = vertexPosition;
      }
      var vertPositions = array_0;
      var relativeCenter = vertPositions[N_TILE_VERTICES / 2 | 0];
      var geometry = this.geometry;
      var positionsArray = geometry.getAttribute('position').array;
      tmp$ = N_TILE_VERTICES;
      for (var i_1 = 0; i_1 < tmp$; i_1++) {
        var pos_0 = vertPositions[i_1];
        var $this_0 = pos_0;
        pos_0 = new Double3($this_0.x - relativeCenter.x, $this_0.y - relativeCenter.y, $this_0.z - relativeCenter.z);
        var vertexStartIndex = i_1 * 3 | 0;
        positionsArray[vertexStartIndex] = pos_0.x;
        positionsArray[vertexStartIndex + 1] = pos_0.y;
        positionsArray[vertexStartIndex + 2] = pos_0.z;
      }
      return relativeCenter;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        Tile$Companion_getInstance().logger_0.error_ukk7tb$('Error setting ' + this + ' vertices');
        throw e;
      }
       else
        throw e;
    }
  };
  Tile.prototype.update_6oc7r5$ = function (tic) {
    var tmp$;
    var dist = this.distance_cectmz$(ensureNotNull(this.scene).camera);
    if (dist < this.subdivisionDistance_0 && this.subTiles_0[0] == null && this.lod_0 < MAX_LOD && this.terrain_0.subdivisionCounter > 0) {
      this.subdivide_0();
      tmp$ = this.terrain_0;
      tmp$.subdivisionCounter = tmp$.subdivisionCounter - 1 | 0;
    }
     else if (dist > this.recombinationDistance_0 && this.subTiles_0[0] != null) {
      this.recombine_0();
    }
  };
  Tile.prototype.findP1_0 = function (parent, shape) {
    var tmp$, tmp$_0;
    if (parent == null) {
      return new Double2(-1.0, -1.0);
    }
    tmp$ = this.quadrant;
    if (tmp$ == null) {
      throw new NullPointerException('Tile.findP1() called when Tile quadrant is null');
    }
    var quadrant = tmp$;
    switch (quadrant) {
      case 0:
        var $this = parent.p1;
        tmp$_0 = new Double2($this.x + shape.x, $this.y + shape.y);
        break;
      case 1:
        tmp$_0 = new Double2(parent.p1.x, parent.p1.y + shape.y);
        break;
      case 2:
        tmp$_0 = parent.p1;
        break;
      case 3:
        tmp$_0 = new Double2(parent.p1.x + shape.x, parent.p1.y);
        break;
      default:throw IllegalArgumentException_init_0();
    }
    return tmp$_0;
  };
  Tile.prototype.subdivide_0 = function () {
    var tmp$, tmp$_0;
    try {
      var tile;
      tmp$ = this.scene;
      if (tmp$ == null) {
        throw IllegalStateException_init('Tile.subdivide(): No scene set.');
      }
      var scene = tmp$;
      tmp$_0 = this.subTiles_0;
      for (var i = 0; i !== tmp$_0.length; ++i) {
        tile = this.terrain_0.getTile_g3zu9q$(this.face, this, i);
        tile.setGeometry_g3zu9q$(this.face, this, i);
        tile.visible = true;
        if (!scene.contains_cectmz$(tile)) {
          scene.add_cectmz$(tile);
        }
        this.subTiles_0[i] = tile;
      }
      this.visible = false;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        Tile$Companion_getInstance().logger_0.error_ukk7tb$('Error occurred while subdividing ' + this, e);
        throw e;
      }
       else
        throw e;
    }
  };
  Tile.prototype.recombine_0 = function () {
    var tmp$;
    try {
      tmp$ = this.subTiles_0;
      for (var i = 0; i !== tmp$.length; ++i) {
        var tile = tmp$[i];
        if (tile != null) {
          tile.recombine_0();
          tile.visible = false;
          tile.position = new Double3();
          this.terrain_0.addTileToBin_74koew$(tile);
        }
        this.subTiles_0[i] = null;
      }
      this.visible = true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        Tile$Companion_getInstance().logger_0.error_ukk7tb$('Error occurred while recombining ' + this, e);
        throw e;
      }
       else
        throw e;
    }
  };
  function Tile$makeThreeTile$makeGeometry() {
    return new PlaneBufferGeometry(1, 1, 10, 10);
  }
  function Tile$makeThreeTile$makeMaterial() {
    var planeMaterial = new MeshStandardMaterial();
    planeMaterial.color = new Color_init(3997440);
    planeMaterial.side = THREE.BackSide;
    planeMaterial.flatShading = true;
    return planeMaterial;
  }
  Tile.prototype.makeThreeTile_0 = function () {
    var makeGeometry = Tile$makeThreeTile$makeGeometry;
    var makeMaterial = Tile$makeThreeTile$makeMaterial;
    var geometry = makeGeometry();
    this.geometry = geometry;
    var material = makeMaterial();
    var mesh = new Mesh_init(geometry, material);
    mesh.matrixAutoUpdate = false;
    return mesh;
  };
  Tile.prototype.facePosTo3d_0 = function (facePos) {
    var tmp$;
    switch (this.face) {
      case 0:
        tmp$ = new Double3(1.0, facePos.x, facePos.y);
        break;
      case 1:
        tmp$ = new Double3(-facePos.x, 1.0, facePos.y);
        break;
      case 2:
        tmp$ = new Double3(-1.0, -facePos.x, facePos.y);
        break;
      case 3:
        tmp$ = new Double3(facePos.x, -1.0, facePos.y);
        break;
      case 4:
        tmp$ = new Double3(-facePos.y, facePos.x, 1.0);
        break;
      case 5:
        tmp$ = new Double3(facePos.y, facePos.x, -1.0);
        break;
      default:throw IllegalStateException_init('Face: ' + this.face);
    }
    return tmp$;
  };
  Tile.prototype.getPositionCode = function () {
    var tmp$;
    if (this.lod_0 > MAX_ENCODED_LOD) {
      throw IllegalStateException_init('Too many LOD to encode: ' + this.lod_0);
    }
    var faceBits = Kotlin.Long.fromInt(this.face).shiftLeft(5);
    var positionCode = faceBits.or(Kotlin.Long.fromInt(this.lod_0));
    tmp$ = this.lod_0;
    for (var i = 1; i < tmp$; i++) {
      var shift = 8 + (2 * i | 0) | 0;
      var quadrant = this.quadrants_0[i];
      positionCode = Kotlin.Long.fromInt(quadrant).shiftLeft(shift).or(positionCode);
    }
    return positionCode;
  };
  Tile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tile',
    interfaces: [GameObject]
  };
  function getPositionFromCode(encodedPos) {
    var nQuadrants = encodedPos.and(Kotlin.Long.fromInt(31)).toInt();
    var face = encodedPos.shiftRight(5).and(Kotlin.Long.fromInt(7)).toInt();
    var array = Array_0(nQuadrants);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = encodedPos.shiftRight(8 + (2 * i | 0) | 0).and(Kotlin.Long.fromInt(3)).toInt();
    }
    var quadrants = array;
    return new Pair(face, quadrants);
  }
  function TerrestrialMover(name, id) {
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    GameObject.call(this, name, id);
    this.scene_m2noe0$_0 = null;
    this.terrain = null;
    this.sphereNormal_wdn4nw$_0 = new Double3();
  }
  Object.defineProperty(TerrestrialMover.prototype, 'scene', {
    get: function () {
      return this.scene_m2noe0$_0;
    },
    set: function (scene) {
      Kotlin.callSetter(this, GameObject.prototype, 'scene', scene);
      this.terrain = scene != null ? scene.terrain : null;
    }
  });
  Object.defineProperty(TerrestrialMover.prototype, 'sphereNormal', {
    get: function () {
      var tmp$;
      tmp$ = this.terrain;
      if (tmp$ == null) {
        throw IllegalStateException_init(this.toString() + ' terrain property not set');
      }
      var terrain = tmp$;
      var $this = this.worldPosition;
      var v = terrain.worldPosition;
      return normalize_0(new Double3($this.x - v.x, $this.y - v.y, $this.z - v.z));
    },
    set: function (sphereNormal) {
      this.sphereNormal_wdn4nw$_0 = sphereNormal;
    }
  });
  TerrestrialMover.prototype.right = function () {
    var axis = new Vector3(0.0, 0.0, 1.0);
    var v = new Vector3();
    var normal = this.sphereNormal;
    var normalVector = new Vector3();
    normalVector.x = normal.x;
    normalVector.y = normal.y;
    normalVector.z = normal.z;
    var worldQuat = new Quaternion();
    this.threeObject.getWorldQuaternion(worldQuat);
    v.copy(axis).applyQuaternion(worldQuat);
    var adjustment = new Quaternion();
    adjustment.setFromUnitVectors(v, normalVector);
    this.threeObject.applyQuaternion(adjustment);
  };
  TerrestrialMover.prototype.snapToSurface = function () {
    try {
      var norm_position = normalize_0(this.sphereNormal);
      var v = ensureNotNull(this.terrain).radius + ensureNotNull(this.terrain).heightAtVector_v1l2rz$(norm_position);
      this.position = new Double3(norm_position.x * v, norm_position.y * v, norm_position.z * v);
    }
     catch (e) {
      if (Kotlin.isType(e, NullPointerException)) {
        throw IllegalStateException_init(this.toString() + ' terrain property was not set');
      }
       else
        throw e;
    }
  };
  TerrestrialMover.prototype.applyGravity_6oc7r5$ = function (tic) {
    var tmp$;
    tmp$ = this.terrain;
    if (tmp$ == null) {
      throw IllegalStateException_init(this.toString() + ' has no terrain set towards which gravitational ' + 'acceleration can be applied.');
    }
    var terrain = tmp$;
    var gravity = terrain.gravity;
    var $this = this.sphereNormal;
    var v = -gravity;
    var $this_0 = new Double3($this.x * v, $this.y * v, $this.z * v);
    var v_0 = tic.timeStep;
    var $this_1 = new Double3($this_0.x * v_0, $this_0.y * v_0, $this_0.z * v_0);
    var deltaVelocities = new Double3($this_1.x / 1000.0, $this_1.y / 1000.0, $this_1.z / 1000.0);
    var $this_2 = this.motion;
    this.motion = new Double3($this_2.x + deltaVelocities.x, $this_2.y + deltaVelocities.y, $this_2.z + deltaVelocities.z);
  };
  TerrestrialMover.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TerrestrialMover',
    interfaces: [GameObject]
  };
  function TestCube(name, id) {
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    GameObject.call(this, name, id);
    this.threeObject_bl21sa$_0 = this.makeMesh_0();
    this.threeObject.castShadow = true;
    this.threeObject.receiveShadows = true;
  }
  Object.defineProperty(TestCube.prototype, 'threeObject', {
    get: function () {
      return this.threeObject_bl21sa$_0;
    },
    set: function (threeObject) {
      this.threeObject_bl21sa$_0 = threeObject;
    }
  });
  TestCube.prototype.makeMesh_0 = function () {
    var tmp$;
    var geometry = new BoxGeometry(1, 1, 1, 1);
    var material = new MeshStandardMaterial();
    material.color = new Color_init(65280);
    var mesh = new Mesh_init(geometry, Kotlin.isType(tmp$ = material, Material) ? tmp$ : throwCCE());
    return mesh;
  };
  TestCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestCube',
    interfaces: [GameObject]
  };
  var MOUSE_TRAVERSE_COEF;
  function TestMover(name, id) {
    if (name === void 0)
      name = '';
    if (id === void 0)
      id = '';
    TerrestrialMover.call(this, name, id);
    this.threeObject_a52b4m$_0 = this.makeMesh_0();
    this.threeObject.castShadow = true;
    this.threeObject.receiveShadows = true;
  }
  Object.defineProperty(TestMover.prototype, 'threeObject', {
    get: function () {
      return this.threeObject_a52b4m$_0;
    },
    set: function (threeObject) {
      this.threeObject_a52b4m$_0 = threeObject;
    }
  });
  Object.defineProperty(TestMover.prototype, 'scene', {
    get: function () {
      return Kotlin.callGetter(this, TerrestrialMover.prototype, 'scene');
    },
    set: function (scene) {
      Kotlin.callSetter(this, TerrestrialMover.prototype, 'scene', scene);
      this.snapToSurface();
      this.right();
    }
  });
  TestMover.prototype.makeMesh_0 = function () {
    var tmp$;
    var geometry = new BoxGeometry(1, 1, 1, 1);
    var material = new MeshStandardMaterial();
    material.color = new Color_init(65280);
    var mesh = new Mesh_init(geometry, Kotlin.isType(tmp$ = material, Material) ? tmp$ : throwCCE());
    return mesh;
  };
  TestMover.prototype.update_6oc7r5$ = function (tic) {
    TerrestrialMover.prototype.update_6oc7r5$.call(this, tic);
    var moved = false;
    if (tic.core.input.cmdActive_o16n3x$(InputHandler$Command$MOVE_UP_getInstance())) {
      var movement = 8.0 * tic.timeStep / 1000.0;
      this.translateY_14dthe$(movement);
      moved = true;
    }
    if (tic.core.input.cmdActive_o16n3x$(InputHandler$Command$MOVE_DOWN_getInstance())) {
      var movement_0 = -8.0 * tic.timeStep / 1000.0;
      this.translateY_14dthe$(movement_0);
      moved = true;
    }
    if (moved) {
      this.snapToSurface();
      this.right();
    }
    var traverse = tic.core.input.mouseMotion.x;
    if (traverse !== 0.0) {
      var euler = this.rotation;
      euler.z = euler.z - MOUSE_TRAVERSE_COEF * tic.core.input.mouseMotion.x;
      this.rotation = euler;
    }
  };
  TestMover.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestMover',
    interfaces: [TerrestrialMover]
  };
  Object.defineProperty(_, 'LOGIC_HZ', {
    get: function () {
      return LOGIC_HZ;
    }
  });
  Object.defineProperty(_, 'STEP_DELTA_MS', {
    get: function () {
      return STEP_DELTA_MS;
    }
  });
  Object.defineProperty(_, 'DELTA_T_LIMIT_MS', {
    get: function () {
      return DELTA_T_LIMIT_MS;
    }
  });
  Core.Tic = Core$Tic;
  Object.defineProperty(Core, 'Companion', {
    get: Core$Companion_getInstance
  });
  _.Core = Core;
  _.startCore = startCore;
  _.EventHandler = EventHandler;
  _.EventObserver = EventObserver;
  Object.defineProperty(InputHandler$Key, 'LEFT', {
    get: InputHandler$Key$LEFT_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'UP', {
    get: InputHandler$Key$UP_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'RIGHT', {
    get: InputHandler$Key$RIGHT_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'DOWN', {
    get: InputHandler$Key$DOWN_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'A', {
    get: InputHandler$Key$A_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'B', {
    get: InputHandler$Key$B_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'C', {
    get: InputHandler$Key$C_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'D', {
    get: InputHandler$Key$D_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'E', {
    get: InputHandler$Key$E_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'F', {
    get: InputHandler$Key$F_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'G', {
    get: InputHandler$Key$G_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'H', {
    get: InputHandler$Key$H_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'I', {
    get: InputHandler$Key$I_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'J', {
    get: InputHandler$Key$J_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'K', {
    get: InputHandler$Key$K_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'L', {
    get: InputHandler$Key$L_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'M', {
    get: InputHandler$Key$M_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'N', {
    get: InputHandler$Key$N_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'O', {
    get: InputHandler$Key$O_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'P', {
    get: InputHandler$Key$P_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'Q', {
    get: InputHandler$Key$Q_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'R', {
    get: InputHandler$Key$R_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'S', {
    get: InputHandler$Key$S_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'T', {
    get: InputHandler$Key$T_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'U', {
    get: InputHandler$Key$U_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'V', {
    get: InputHandler$Key$V_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'W', {
    get: InputHandler$Key$W_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'X', {
    get: InputHandler$Key$X_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'Y', {
    get: InputHandler$Key$Y_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'Z', {
    get: InputHandler$Key$Z_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY0', {
    get: InputHandler$Key$KEY0_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY1', {
    get: InputHandler$Key$KEY1_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY2', {
    get: InputHandler$Key$KEY2_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY3', {
    get: InputHandler$Key$KEY3_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY4', {
    get: InputHandler$Key$KEY4_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY5', {
    get: InputHandler$Key$KEY5_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY6', {
    get: InputHandler$Key$KEY6_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY7', {
    get: InputHandler$Key$KEY7_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY8', {
    get: InputHandler$Key$KEY8_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'KEY9', {
    get: InputHandler$Key$KEY9_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'BACK', {
    get: InputHandler$Key$BACK_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'TAB', {
    get: InputHandler$Key$TAB_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'ENTER', {
    get: InputHandler$Key$ENTER_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'SHIFT', {
    get: InputHandler$Key$SHIFT_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'CTRL', {
    get: InputHandler$Key$CTRL_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'ALT', {
    get: InputHandler$Key$ALT_getInstance
  });
  Object.defineProperty(InputHandler$Key, 'SPACE', {
    get: InputHandler$Key$SPACE_getInstance
  });
  InputHandler.Key = InputHandler$Key;
  Object.defineProperty(InputHandler$Command, 'MOVE_LEFT', {
    get: InputHandler$Command$MOVE_LEFT_getInstance
  });
  Object.defineProperty(InputHandler$Command, 'MOVE_UP', {
    get: InputHandler$Command$MOVE_UP_getInstance
  });
  Object.defineProperty(InputHandler$Command, 'MOVE_RIGHT', {
    get: InputHandler$Command$MOVE_RIGHT_getInstance
  });
  Object.defineProperty(InputHandler$Command, 'MOVE_DOWN', {
    get: InputHandler$Command$MOVE_DOWN_getInstance
  });
  InputHandler.Command = InputHandler$Command;
  _.InputHandler = InputHandler;
  Object.defineProperty(LogLevel, 'FINE', {
    get: LogLevel$FINE_getInstance
  });
  Object.defineProperty(LogLevel, 'DEBUG', {
    get: LogLevel$DEBUG_getInstance
  });
  Object.defineProperty(LogLevel, 'INFO', {
    get: LogLevel$INFO_getInstance
  });
  Object.defineProperty(LogLevel, 'WARN', {
    get: LogLevel$WARN_getInstance
  });
  Object.defineProperty(LogLevel, 'ERROR', {
    get: LogLevel$ERROR_getInstance
  });
  Object.defineProperty(LogLevel, 'WTF', {
    get: LogLevel$WTF_getInstance
  });
  _.LogLevel = LogLevel;
  Object.defineProperty(Logger, 'Companion', {
    get: Logger$Companion_getInstance
  });
  _.Logger = Logger;
  _.ProceduralWorker = ProceduralWorker;
  _.startProceduralWorker = startProceduralWorker;
  Object.defineProperty(Scene_0, 'Companion', {
    get: Scene$Companion_getInstance
  });
  _.Scene = Scene_0;
  _.ServerConnection = ServerConnection;
  var package$events = _.events || (_.events = {});
  package$events.GameEvent = GameEvent;
  package$events.Response = Response;
  var package$exception = _.exception || (_.exception = {});
  package$exception.DocumentError = DocumentError;
  package$exception.CException = CException;
  package$exception.GameException = GameException;
  Object.defineProperty(DMatrixColumn, 'X', {
    get: DMatrixColumn$X_getInstance
  });
  Object.defineProperty(DMatrixColumn, 'Y', {
    get: DMatrixColumn$Y_getInstance
  });
  Object.defineProperty(DMatrixColumn, 'Z', {
    get: DMatrixColumn$Z_getInstance
  });
  Object.defineProperty(DMatrixColumn, 'W', {
    get: DMatrixColumn$W_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$curiouscreature = package$com.curiouscreature || (package$com.curiouscreature = {});
  var package$kotlin = package$curiouscreature.kotlin || (package$curiouscreature.kotlin = {});
  var package$math = package$kotlin.math || (package$kotlin.math = {});
  package$math.DMatrixColumn = DMatrixColumn;
  Object.defineProperty(DMat2, 'Companion', {
    get: DMat2$Companion_getInstance
  });
  $$importsForInline$$.client = _;
  package$math.DMat2_init_5g0se3$ = DMat2_init;
  package$math.DMat2 = DMat2;
  Object.defineProperty(DMat3, 'Companion', {
    get: DMat3$Companion_getInstance
  });
  package$math.DMat3_init_5g0se2$ = DMat3_init;
  package$math.DMat3 = DMat3;
  Object.defineProperty(DMat4, 'Companion', {
    get: DMat4$Companion_getInstance
  });
  package$math.length_v1l2rz$ = length_0;
  package$math.DMat4_init_9x7lxc$ = DMat4_init;
  package$math.DMat4_init_5g0se1$ = DMat4_init_0;
  package$math.DMat4 = DMat4;
  package$math.transpose_5g0se3$ = transpose;
  package$math.transpose_5g0se2$ = transpose_0;
  package$math.inverse_5g0se2$ = inverse;
  package$math.transpose_5g0se1$ = transpose_1;
  package$math.inverse_5g0se1$ = inverse_0;
  package$math.scale_v1l2rz$ = scale;
  package$math.scale_5g0se1$ = scale_0;
  package$math.translation_v1l2rz$ = translation;
  package$math.translation_5g0se1$ = translation_0;
  package$math.rotation_5g0se1$ = rotation;
  package$math.rotation_v1l2rz$ = rotation_0;
  package$math.rotation_6ulayr$ = rotation_1;
  package$math.normal_5g0se1$ = normal;
  package$math.lookAt_ktiq11$ = lookAt;
  package$math.lookTowards_ktiq11$ = lookTowards;
  package$math.perspective_6y0v78$ = perspective;
  package$math.ortho_15yvbs$ = ortho;
  package$math.DRay = DRay;
  package$math.pointAt_ejlp0p$ = pointAt;
  Object.defineProperty(package$math, 'PI', {
    get: function () {
      return PI;
    }
  });
  Object.defineProperty(package$math, 'HALF_PI', {
    get: function () {
      return HALF_PI;
    }
  });
  Object.defineProperty(package$math, 'TWO_PI', {
    get: function () {
      return TWO_PI;
    }
  });
  Object.defineProperty(package$math, 'FOUR_PI', {
    get: function () {
      return FOUR_PI;
    }
  });
  Object.defineProperty(package$math, 'INV_PI', {
    get: function () {
      return INV_PI;
    }
  });
  Object.defineProperty(package$math, 'INV_TWO_PI', {
    get: function () {
      return INV_TWO_PI;
    }
  });
  Object.defineProperty(package$math, 'INV_FOUR_PI', {
    get: function () {
      return INV_FOUR_PI;
    }
  });
  package$math.clamp_yvo9jy$ = clamp;
  package$math.mix_yvo9jy$ = mix;
  package$math.degrees_14dthe$ = degrees;
  package$math.radians_14dthe$ = radians;
  package$math.fract_14dthe$ = fract;
  package$math.sqr_14dthe$ = sqr;
  Object.defineProperty(DVectorComponent, 'X', {
    get: DVectorComponent$X_getInstance
  });
  Object.defineProperty(DVectorComponent, 'Y', {
    get: DVectorComponent$Y_getInstance
  });
  Object.defineProperty(DVectorComponent, 'Z', {
    get: DVectorComponent$Z_getInstance
  });
  Object.defineProperty(DVectorComponent, 'W', {
    get: DVectorComponent$W_getInstance
  });
  Object.defineProperty(DVectorComponent, 'R', {
    get: DVectorComponent$R_getInstance
  });
  Object.defineProperty(DVectorComponent, 'G', {
    get: DVectorComponent$G_getInstance
  });
  Object.defineProperty(DVectorComponent, 'B', {
    get: DVectorComponent$B_getInstance
  });
  Object.defineProperty(DVectorComponent, 'A', {
    get: DVectorComponent$A_getInstance
  });
  Object.defineProperty(DVectorComponent, 'S', {
    get: DVectorComponent$S_getInstance
  });
  Object.defineProperty(DVectorComponent, 'T', {
    get: DVectorComponent$T_getInstance
  });
  Object.defineProperty(DVectorComponent, 'P', {
    get: DVectorComponent$P_getInstance
  });
  Object.defineProperty(DVectorComponent, 'Q', {
    get: DVectorComponent$Q_getInstance
  });
  package$math.DVectorComponent = DVectorComponent;
  package$math.Double2_init_v1l2s0$ = Double2_init;
  package$math.Double2_init_as37vh$ = Double2_init_0;
  package$math.Double2 = Double2;
  package$math.Double3_init_i2yrge$ = Double3_init;
  package$math.Double3_init_v1l2rz$ = Double3_init_0;
  package$math.Double3_init_as37vi$ = Double3_init_1;
  package$math.Double3 = Double3;
  package$math.Double4_init_dseq7g$ = Double4_init;
  package$math.Double4_init_6ulayr$ = Double4_init_0;
  package$math.Double4_init_v1l2ry$ = Double4_init_1;
  package$math.Double4_init_as37vj$ = Double4_init_2;
  package$math.Double4 = Double4;
  package$math.plus_x4yc4h$ = plus;
  package$math.minus_x4yc4h$ = minus;
  package$math.times_x4yc4h$ = times;
  package$math.div_x4yc4h$ = div;
  package$math.abs_v1l2s0$ = abs;
  package$math.length_v1l2s0$ = length;
  package$math.length2_v1l2s0$ = length2;
  package$math.distance_pkk790$ = distance;
  package$math.dot_pkk790$ = dot;
  package$math.normalize_v1l2s0$ = normalize;
  package$math.reflect_pkk790$ = reflect;
  package$math.refract_prj3ie$ = refract;
  package$math.clamp_dseq7g$ = clamp_0;
  package$math.clamp_jxtrjs$ = clamp_1;
  package$math.mix_prj3ie$ = mix_0;
  package$math.mix_jxtrjs$ = mix_1;
  package$math.min_v1l2s0$ = min;
  package$math.min_pkk790$ = min_0;
  package$math.max_v1l2s0$ = max;
  package$math.max_pkk790$ = max_0;
  package$math.transform_4p7vqc$ = transform;
  package$math.lessThan_i2yrge$ = lessThan;
  package$math.lessThan_pkk790$ = lessThan_0;
  package$math.lessThanEqual_i2yrge$ = lessThanEqual;
  package$math.lessThanEqual_pkk790$ = lessThanEqual_0;
  package$math.greaterThan_i2yrge$ = greaterThan;
  package$math.greaterThan_pkk790$ = greaterThan_0;
  package$math.greaterThanEqual_i2yrge$ = greaterThanEqual;
  package$math.greaterThanEqual_pkk790$ = greaterThanEqual_0;
  package$math.equal_i2yrge$ = equal;
  package$math.equal_pkk790$ = equal_0;
  package$math.notEqual_i2yrge$ = notEqual;
  package$math.notEqual_pkk790$ = notEqual_0;
  package$math.plus_x4yc4g$ = plus_0;
  package$math.minus_x4yc4g$ = minus_0;
  package$math.times_x4yc4g$ = times_0;
  package$math.div_x4yc4g$ = div_0;
  package$math.abs_v1l2rz$ = abs_0;
  package$math.length2_v1l2rz$ = length2_0;
  package$math.distance_6fvpsa$ = distance_0;
  package$math.dot_6fvpsa$ = dot_0;
  package$math.cross_6fvpsa$ = cross;
  package$math.x_4yfkq5$ = x;
  package$math.normalize_v1l2rz$ = normalize_0;
  package$math.reflect_6fvpsa$ = reflect_0;
  package$math.refract_8v72t4$ = refract_0;
  package$math.clamp_2br5ij$ = clamp_2;
  package$math.clamp_ktiq11$ = clamp_3;
  package$math.mix_8v72t4$ = mix_2;
  package$math.mix_ktiq11$ = mix_3;
  package$math.min_v1l2rz$ = min_1;
  package$math.min_6fvpsa$ = min_2;
  package$math.max_v1l2rz$ = max_1;
  package$math.max_6fvpsa$ = max_2;
  package$math.transform_4klkkl$ = transform_0;
  package$math.lessThan_6ulayr$ = lessThan_1;
  package$math.lessThan_6fvpsa$ = lessThan_2;
  package$math.lessThanEqual_6ulayr$ = lessThanEqual_1;
  package$math.lessThanEqual_6fvpsa$ = lessThanEqual_2;
  package$math.greaterThan_6ulayr$ = greaterThan_1;
  package$math.greaterThan_6fvpsa$ = greaterThan_2;
  package$math.greaterThanEqual_6ulayr$ = greaterThanEqual_1;
  package$math.greaterThanEqual_6fvpsa$ = greaterThanEqual_2;
  package$math.equal_6ulayr$ = equal_1;
  package$math.equal_6fvpsa$ = equal_2;
  package$math.notEqual_6ulayr$ = notEqual_1;
  package$math.notEqual_6fvpsa$ = notEqual_2;
  package$math.plus_x4yc4f$ = plus_1;
  package$math.minus_x4yc4f$ = minus_1;
  package$math.times_x4yc4f$ = times_1;
  package$math.div_x4yc4f$ = div_1;
  package$math.abs_v1l2ry$ = abs_1;
  package$math.length_v1l2ry$ = length_1;
  package$math.length2_v1l2ry$ = length2_1;
  package$math.distance_wksf5k$ = distance_1;
  package$math.dot_wksf5k$ = dot_1;
  package$math.normalize_v1l2ry$ = normalize_1;
  package$math.clamp_94wf6e$ = clamp_4;
  package$math.clamp_9g8uda$ = clamp_5;
  package$math.mix_rj6sui$ = mix_4;
  package$math.mix_9g8uda$ = mix_5;
  package$math.min_v1l2ry$ = min_3;
  package$math.min_wksf5k$ = min_4;
  package$math.max_v1l2ry$ = max_3;
  package$math.max_wksf5k$ = max_4;
  package$math.transform_4fz9eu$ = transform_1;
  Object.defineProperty(MatrixColumn, 'X', {
    get: MatrixColumn$X_getInstance
  });
  Object.defineProperty(MatrixColumn, 'Y', {
    get: MatrixColumn$Y_getInstance
  });
  Object.defineProperty(MatrixColumn, 'Z', {
    get: MatrixColumn$Z_getInstance
  });
  Object.defineProperty(MatrixColumn, 'W', {
    get: MatrixColumn$W_getInstance
  });
  package$math.MatrixColumn = MatrixColumn;
  Object.defineProperty(Mat2, 'Companion', {
    get: Mat2$Companion_getInstance
  });
  package$math.Mat2_init_kg8hdv$ = Mat2_init;
  package$math.Mat2 = Mat2;
  Object.defineProperty(Mat3, 'Companion', {
    get: Mat3$Companion_getInstance
  });
  package$math.Mat3_init_kg8hdw$ = Mat3_init;
  package$math.Mat3 = Mat3;
  Object.defineProperty(Mat4, 'Companion', {
    get: Mat4$Companion_getInstance
  });
  package$math.length_pb2vnc$ = length_3;
  package$math.Mat4_init_r357zg$ = Mat4_init;
  package$math.Mat4_init_kg8hdx$ = Mat4_init_0;
  package$math.Mat4 = Mat4;
  package$math.transpose_kg8hdv$ = transpose_2;
  package$math.transpose_kg8hdw$ = transpose_3;
  package$math.inverse_kg8hdw$ = inverse_1;
  package$math.transpose_kg8hdx$ = transpose_4;
  package$math.inverse_kg8hdx$ = inverse_2;
  package$math.scale_pb2vnc$ = scale_1;
  package$math.scale_kg8hdx$ = scale_2;
  package$math.translation_pb2vnc$ = translation_1;
  package$math.translation_kg8hdx$ = translation_2;
  package$math.rotation_kg8hdx$ = rotation_2;
  package$math.rotation_pb2vnc$ = rotation_3;
  package$math.rotation_rhuwp9$ = rotation_4;
  package$math.normal_kg8hdx$ = normal_0;
  package$math.lookAt_ebx22w$ = lookAt_0;
  package$math.lookTowards_ebx22w$ = lookTowards_0;
  package$math.perspective_7b5o5w$ = perspective_0;
  package$math.ortho_w8lrqs$ = ortho_0;
  package$math.Ray = Ray;
  package$math.pointAt_ckmdby$ = pointAt_0;
  Object.defineProperty(package$math, 'PI_32', {
    get: function () {
      return PI_32;
    }
  });
  Object.defineProperty(package$math, 'HALF_PI_32', {
    get: function () {
      return HALF_PI_32;
    }
  });
  Object.defineProperty(package$math, 'TWO_PI_32', {
    get: function () {
      return TWO_PI_32;
    }
  });
  Object.defineProperty(package$math, 'FOUR_PI_32', {
    get: function () {
      return FOUR_PI_32;
    }
  });
  Object.defineProperty(package$math, 'INV_PI_32', {
    get: function () {
      return INV_PI_32;
    }
  });
  Object.defineProperty(package$math, 'INV_TWO_PI_32', {
    get: function () {
      return INV_TWO_PI_32;
    }
  });
  Object.defineProperty(package$math, 'INV_FOUR_PI_32', {
    get: function () {
      return INV_FOUR_PI_32;
    }
  });
  package$math.clamp_y2kzbl$ = clamp_6;
  package$math.mix_y2kzbl$ = mix_6;
  package$math.degrees_mx4ult$ = degrees_0;
  package$math.radians_mx4ult$ = radians_0;
  package$math.fract_mx4ult$ = fract_0;
  package$math.sqr_mx4ult$ = sqr_0;
  var package$lib = _.lib || (_.lib = {});
  var package$math_0 = package$lib.math || (package$lib.math = {});
  package$math_0.Vec3_init = Vec3_init;
  package$math_0.Vec3_init_v1l2rz$ = Vec3_init_0;
  package$math_0.Vec3 = Vec3;
  Object.defineProperty(VectorComponent, 'X', {
    get: VectorComponent$X_getInstance
  });
  Object.defineProperty(VectorComponent, 'Y', {
    get: VectorComponent$Y_getInstance
  });
  Object.defineProperty(VectorComponent, 'Z', {
    get: VectorComponent$Z_getInstance
  });
  Object.defineProperty(VectorComponent, 'W', {
    get: VectorComponent$W_getInstance
  });
  Object.defineProperty(VectorComponent, 'R', {
    get: VectorComponent$R_getInstance
  });
  Object.defineProperty(VectorComponent, 'G', {
    get: VectorComponent$G_getInstance
  });
  Object.defineProperty(VectorComponent, 'B', {
    get: VectorComponent$B_getInstance
  });
  Object.defineProperty(VectorComponent, 'A', {
    get: VectorComponent$A_getInstance
  });
  Object.defineProperty(VectorComponent, 'S', {
    get: VectorComponent$S_getInstance
  });
  Object.defineProperty(VectorComponent, 'T', {
    get: VectorComponent$T_getInstance
  });
  Object.defineProperty(VectorComponent, 'P', {
    get: VectorComponent$P_getInstance
  });
  Object.defineProperty(VectorComponent, 'Q', {
    get: VectorComponent$Q_getInstance
  });
  package$math.VectorComponent = VectorComponent;
  package$math.Float2_init_pb2vnd$ = Float2_init;
  package$math.Float2 = Float2;
  package$math.Float3_init_j4v164$ = Float3_init;
  package$math.Float3_init_pb2vnc$ = Float3_init_0;
  package$math.Float3 = Float3;
  package$math.Float4_init_x6tymx$ = Float4_init;
  package$math.Float4_init_rhuwp9$ = Float4_init_0;
  package$math.Float4_init_pb2vnb$ = Float4_init_1;
  package$math.Float4 = Float4;
  package$math.plus_qpfjuv$ = plus_2;
  package$math.minus_qpfjuv$ = minus_2;
  package$math.times_qpfjuv$ = times_2;
  package$math.div_qpfjuv$ = div_2;
  package$math.abs_pb2vnd$ = abs_2;
  package$math.length_pb2vnd$ = length_2;
  package$math.length2_pb2vnd$ = length2_2;
  package$math.distance_ibf3jo$ = distance_2;
  package$math.dot_ibf3jo$ = dot_2;
  package$math.normalize_pb2vnd$ = normalize_2;
  package$math.reflect_ibf3jo$ = reflect_1;
  package$math.refract_sbwi9b$ = refract_1;
  package$math.clamp_x6tymx$ = clamp_7;
  package$math.clamp_bts9cp$ = clamp_8;
  package$math.mix_sbwi9b$ = mix_7;
  package$math.mix_bts9cp$ = mix_8;
  package$math.min_pb2vnd$ = min_5;
  package$math.min_ibf3jo$ = min_6;
  package$math.max_pb2vnd$ = max_5;
  package$math.max_ibf3jo$ = max_6;
  package$math.transform_nrn2gv$ = transform_2;
  package$math.lessThan_j4v164$ = lessThan_3;
  package$math.lessThan_ibf3jo$ = lessThan_4;
  package$math.lessThanEqual_j4v164$ = lessThanEqual_3;
  package$math.lessThanEqual_ibf3jo$ = lessThanEqual_4;
  package$math.greaterThan_j4v164$ = greaterThan_3;
  package$math.greaterThan_ibf3jo$ = greaterThan_4;
  package$math.greaterThanEqual_j4v164$ = greaterThanEqual_3;
  package$math.greaterThanEqual_ibf3jo$ = greaterThanEqual_4;
  package$math.equal_j4v164$ = equal_3;
  package$math.equal_ibf3jo$ = equal_4;
  package$math.notEqual_j4v164$ = notEqual_3;
  package$math.notEqual_ibf3jo$ = notEqual_4;
  package$math.plus_qpfjuw$ = plus_3;
  package$math.minus_qpfjuw$ = minus_3;
  package$math.times_qpfjuw$ = times_3;
  package$math.div_qpfjuw$ = div_3;
  package$math.abs_pb2vnc$ = abs_3;
  package$math.length2_pb2vnc$ = length2_3;
  package$math.distance_5urmss$ = distance_3;
  package$math.dot_5urmss$ = dot_3;
  package$math.cross_5urmss$ = cross_0;
  package$math.x_v3ur5b$ = x_0;
  package$math.normalize_pb2vnc$ = normalize_3;
  package$math.reflect_5urmss$ = reflect_2;
  package$math.refract_bvi8a9$ = refract_2;
  package$math.clamp_hab8ig$ = clamp_9;
  package$math.clamp_ebx22w$ = clamp_10;
  package$math.mix_bvi8a9$ = mix_9;
  package$math.mix_ebx22w$ = mix_10;
  package$math.min_pb2vnc$ = min_7;
  package$math.min_5urmss$ = min_8;
  package$math.max_pb2vnc$ = max_7;
  package$math.max_5urmss$ = max_8;
  package$math.transform_eo0ww0$ = transform_3;
  package$math.lessThan_rhuwp9$ = lessThan_5;
  package$math.lessThan_5urmss$ = lessThan_6;
  package$math.lessThanEqual_rhuwp9$ = lessThanEqual_5;
  package$math.lessThanEqual_5urmss$ = lessThanEqual_6;
  package$math.greaterThan_rhuwp9$ = greaterThan_5;
  package$math.greaterThan_5urmss$ = greaterThan_6;
  package$math.greaterThanEqual_rhuwp9$ = greaterThanEqual_5;
  package$math.greaterThanEqual_5urmss$ = greaterThanEqual_6;
  package$math.equal_rhuwp9$ = equal_5;
  package$math.equal_5urmss$ = equal_6;
  package$math.notEqual_rhuwp9$ = notEqual_5;
  package$math.notEqual_5urmss$ = notEqual_6;
  package$math.plus_qpfjux$ = plus_4;
  package$math.minus_qpfjux$ = minus_4;
  package$math.times_qpfjux$ = times_4;
  package$math.div_qpfjux$ = div_4;
  package$math.abs_pb2vnb$ = abs_4;
  package$math.length_pb2vnb$ = length_4;
  package$math.length2_pb2vnb$ = length2_4;
  package$math.distance_u0yd58$ = distance_4;
  package$math.dot_u0yd58$ = dot_4;
  package$math.normalize_pb2vnb$ = normalize_4;
  package$math.clamp_1dsidz$ = clamp_11;
  package$math.clamp_ujhogn$ = clamp_12;
  package$math.mix_iy735b$ = mix_11;
  package$math.mix_ujhogn$ = mix_12;
  package$math.min_pb2vnb$ = min_9;
  package$math.min_u0yd58$ = min_10;
  package$math.max_pb2vnb$ = max_9;
  package$math.max_u0yd58$ = max_10;
  package$math.transform_hxf5q9$ = transform_4;
  package$math.Bool2_init_5gidu1$ = Bool2_init;
  package$math.Bool2 = Bool2;
  package$math.Bool3_init_5fzztc$ = Bool3_init;
  package$math.Bool3_init_5gidu0$ = Bool3_init_0;
  package$math.Bool3 = Bool3;
  package$math.Bool4_init_67xvah$ = Bool4_init;
  package$math.Bool4_init_dvyii9$ = Bool4_init_0;
  package$math.Bool4_init_5gidtz$ = Bool4_init_1;
  package$math.Bool4 = Bool4;
  package$math.any_5gidu1$ = any;
  package$math.all_5gidu1$ = all;
  package$math.any_5gidu0$ = any_0;
  package$math.all_5gidu0$ = all_0;
  package$math.any_5gidtz$ = any_1;
  package$math.all_5gidtz$ = all_1;
  var package$objects = _.objects || (_.objects = {});
  package$objects.AmbientLight = AmbientLight;
  Object.defineProperty(package$objects, 'DEFAULT_FAR_PLANE', {
    get: function () {
      return DEFAULT_FAR_PLANE;
    }
  });
  Object.defineProperty(package$objects, 'DEFAULT_NEAR_PLANE', {
    get: function () {
      return DEFAULT_NEAR_PLANE;
    }
  });
  Object.defineProperty(Camera, 'Companion', {
    get: Camera$Companion_getInstance
  });
  package$objects.Camera = Camera;
  package$objects.FollowCamera = FollowCamera;
  package$objects.GameObject = GameObject;
  package$objects.SunLight = SunLight;
  Object.defineProperty(Terrain, 'Companion', {
    get: Terrain$Companion_getInstance
  });
  package$objects.Terrain = Terrain;
  Object.defineProperty(Tile, 'Companion', {
    get: Tile$Companion_getInstance
  });
  package$objects.Tile = Tile;
  package$objects.getPositionFromCode_s8cxhz$ = getPositionFromCode;
  package$objects.TerrestrialMover = TerrestrialMover;
  package$objects.TestCube = TestCube;
  package$objects.TestMover = TestMover;
  LOGIC_HZ = 60.0;
  STEP_DELTA_MS = 1000.0 / LOGIC_HZ;
  DELTA_T_LIMIT_MS = 10000.0;
  KEY_ARR_SIZE = 223;
  PI = 3.141592653589793;
  HALF_PI = PI * 0.5;
  TWO_PI = PI * 2.0;
  FOUR_PI = PI * 4.0;
  INV_PI = 1.0 / PI;
  INV_TWO_PI = INV_PI * 0.5;
  INV_FOUR_PI = INV_PI * 0.25;
  PI_32 = 3.1415927;
  HALF_PI_32 = PI_32 * 0.5;
  TWO_PI_32 = PI_32 * 2.0;
  FOUR_PI_32 = PI_32 * 4.0;
  INV_PI_32 = 1.0 / PI_32;
  INV_TWO_PI_32 = INV_PI_32 * 0.5;
  INV_FOUR_PI_32 = INV_PI_32 * 0.25;
  DEFAULT_FAR_PLANE = 200000.0;
  DEFAULT_NEAR_PLANE = 0.25;
  MOUSE_ELEVATION_COEF = 0.0015;
  DEFAULT_SHADOW_MAP_SIZE = 256;
  TERRAIN_SEED = 124;
  RADIUS = 6371000.0;
  HEIGHT_SCALE = 10000.0;
  MAX_LOD = 24;
  MAX_ENCODED_LOD = 28;
  REL_SUBDIVISION_DIST = 2 * RADIUS;
  TILE_POLYGON_WIDTH = 8;
  TILE_HEIGHT_ROW_SIZE = TILE_POLYGON_WIDTH + 1 | 0;
  TILE_VERTICES_ROW_SIZE = TILE_HEIGHT_ROW_SIZE + 2 | 0;
  N_TILE_HEIGHTS = Kotlin.imul(TILE_HEIGHT_ROW_SIZE, TILE_HEIGHT_ROW_SIZE);
  N_TILE_VERTICES = Kotlin.imul(TILE_VERTICES_ROW_SIZE, TILE_VERTICES_ROW_SIZE);
  TILE_LIP_BASE_SCALE = 1.0 / TILE_POLYGON_WIDTH;
  MAX_TILE_DIVISIONS_PER_TIC = 32;
  MOUSE_TRAVERSE_COEF = 0.003;
  Kotlin.defineModule('client', _);
  return _;
}));

//# sourceMappingURL=client.js.map
