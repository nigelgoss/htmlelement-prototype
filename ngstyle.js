(() => {

	Object.defineProperties(HTMLElement.prototype, {
		
		ngstyle: {
			
			set: function ($d) {
				
				Object.keys($d).forEach(($v) => { this.style.setProperty($v, $d[$v]); });
				
			},
			
		},
		
	});

})();