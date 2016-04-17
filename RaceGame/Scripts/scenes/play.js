var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        Play.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;

        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {

            carimage = "cloud";
            // Set Cloud Count
            this._cloudCount = 3;
            livesValue = 5;
            scoreValue = 0;
            // Instantiate Cloud array
            this._clouds = new Array();
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added clouds to the scene
            for (var cloud = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label("Lives: " + livesValue, "20px Consolas", "#00ffff", 300, 10, false);
            this.addChild(this._livesLabel);
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "20px Consolas", "#00ffff", 520, 10, false);
            this.addChild(this._scoreLabel);

            this._Level = new objects.Label("Level: " + 1, "20px Consolas", "#00ffff", 400, 10, false);
            this.addChild(this._Level);

            this._logoutBTN = new objects.Button("logout", 100, 30, true);
            this.addChild(this._logoutBTN);

            // Start Button event listener
            this._logoutBTN.on("click", this.LogoutClick, this);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };

      


        Play.prototype.LogoutClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        };

        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._clouds.forEach(function (cloud) {
                cloud.update();
                _this._collision.check(cloud);
            });
            this._collision.check(this._island);
            this._updateScore();
        };

        Play.prototype._BACKBTNClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
