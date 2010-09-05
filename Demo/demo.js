window.addEvent('domready', function() {
	new Request.HTML({
		url: '/gh/get/response.html/zalun/jsFiddleGithubDemo/tree/master/Demo/',
		data: {'delay': 1},
		method: 'post',
		update: 'demo',
		onSuccess: function(response) {
			$('demo').highlight();
		}
	}).send();
})
