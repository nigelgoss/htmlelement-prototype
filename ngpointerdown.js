(() => {

const store = {};

Object.defineProperties(HTMLElement.prototype, {
	
	ngpointerdown: {
		
		set: function ($d) {
			
			this.classList.add("ngpointerdown");
			
			if (this._ngX === undefined) { this._ngX = {}; }
			
			if (this.onpointerdown === null) {
				
				this.onpointerdown = function ($event) {
					
					if (store.ele === this && new Date() - store.date < this.ngdebounce) {
						console.log("ngpointerdown - Debounced");
						return;
					}
					
					store.date = new Date();
					store.ele = this;
					this._ngX.pointerdown($event);
					
				}
				
			}
			
			this._ngX.pointerdown = $d;
			
		},
		
		get: function () {
			
			return this._ngX.pointerdown;
		
		},
		
	},
	
	ngdebounce: {
		
		set: function ($d) {
			
			if (this._ngX === undefined) { this._ngX = {}; }
			
			this._ngX.debounce = $d;
			
		}, 
		
		get: function () {
			
			return this._ngX.debounce ?? 333;
			
		},
		
	},
	
});

})();
