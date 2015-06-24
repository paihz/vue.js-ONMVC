new Vue({
	el: '#demo',

	data: {
		names: ['stan', 'jane', 'taylor', 'susan', 'maya', 'john', 'carrick']
	},

	methods: {
		addName: function() {
			this.names.push(this.newName);
		}
	}

});