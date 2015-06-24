new Vue({
	el: '#demo',

	data: {
		name: ['stan', 'jane', 'taylor', 'susan', 'maya', 'john', 'carrick']
	},

	ready:  function() {
		var that = this;

		setInterval(function() {
			that.name = 'Updated'; 
		}, 5000);

	}

});