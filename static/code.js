new Vue({
	el: '#app',
  data: {
  	title: 'Hello there!'
  },
  methods: {
  	changeTitle: function() {
    	this.title = event.target.value;
    }
  }
});