module objects {
    // stone CLASS ++++++++++++++++++++++++++++++++++++
    export class stone extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("stone");
            
           this._speed.y = 5; //stone speed
           this._reset(this._topBounds);
           this.name = "stone";
           this.soundString = "yay";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the stone 
            // is outside the viewport         
            if(this.y >= value) {
                this._reset(this._topBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {          
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the stone 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        }
    }
}