var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INST SCENE
var scenes;
(function (scenes) {
    var INST = (function (_super) {
        __extends(INST, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function INST() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        INST.prototype._updateScore = function () {
           
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        INST.prototype.start = function () {
            // Set Cloud Count

            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

           
            this._INST = new objects.Label("\n\n1.Collect the Object from the Road for getting Score.\n\n 2.If Player car will touch the stone or Car \nthen loss the life. \n", "20px black", "#00ffff", 200, 10, false);
            this.addChild(this._INST);
            stage.addChild(this);


            this._BACKBTN = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y , true);
            this.addChild(this._BACKBTN);

            // Start Button event listener
            this._BACKBTN.on("click", this._BACKBTNClick, this);
          
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INST Scene updates here
        INST.prototype.update = function () {
        };
        INST.prototype._BACKBTNClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        };



        return INST;
    }(objects.Scene));
    scenes.INST = INST;
})(scenes || (scenes = {}));

//# sourceMappingURL=INST.js.map
