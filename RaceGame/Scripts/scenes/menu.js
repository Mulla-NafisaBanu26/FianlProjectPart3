var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            //Add Menu Label
            this._menuLabel = new objects.Label("RACE", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y-50, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50, true);
            this.addChild(this._startButton);

            this._Instr = new objects.Button("instr", config.Screen.CENTER_X, config.Screen.CENTER_Y + 113, true);
            this.addChild(this._Instr);

            this._Exit = new objects.Button("Exit", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._Exit);

            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._Instr.on("click", this._InstrClick, this);
            this._Exit.on("click", this._ExitClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
            this._ocean.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        };

        Menu.prototype._InstrClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INSTR;
            changeScene();
        };
        Menu.prototype._ExitClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.EXIT;
            changeScene();
        };

        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
