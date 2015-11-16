require.config({
	paths: {
		jquery: 'jquery-1.11.3.min'
	}
})

require(['jquery','spinning'],function($,s) {
	var s = new s.Spinning('#container');
	s.render();
})