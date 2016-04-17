var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// nextlevel SCENE
var scenes;
(function (scenes) {
    var nextlevel = (function (_super) {
        __extends(nextlevel, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function nextlevel() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        nextlevel.prototype._updateScore = function () {
           
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        nextlevel.prototype.start = function () {
            // Set Cloud Count
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            this._nextlevel = new objects.Label("\n\n Level Completed", "30px black", "#00ffff", 200, 10, false);
            this.addChild(this._nextlevel);
            stage.addChild(this);

            if (scoreValue == 500) {
                this._nextlevel.text = this._nextlevel.text + "\n\n\t    LEVEL 2";

            }
            if (scoreValue == 900) {
                this._nextlevel.text = this._nextlevel.text + "\n\n\t    LEVEL 3";

            }


            this._BACKBTN = new objects.Button("NextButton", config.Screen.CENTER_X, config.Screen.CENTER_Y+100 , true);
            this.addChild(this._BACKBTN);

            // Start Button event listener
            this._BACKBTN.on("click", this._BACKBTNClick, this);
          
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // nextlevel Scene updates here
        nextlevel.prototype.update = function () {
        };
        nextlevel.prototype._BACKBTNClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            if (scoreValue == 500) {
                scoreValue = 600;
                scene = config.Scene.SL2;
                changeScene();
            }
            if (scoreValue == 900) {
                scoreValue = 1000;
                scene = config.Scene.SL3;
                changeScene();
            }
        };



        return nextlevel;
    }(objects.Scene));
    scenes.nextlevel = nextlevel;
})(scenes || (scenes = {}));

//# sourceMappingURL=nextlevel.js.map
