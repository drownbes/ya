var mod = (function() {
	'use strict';
	moment.locale('ru');
	var tmpl = $('#clndr-template').html(),
	c_tmpl = _.template(tmpl);

	var mC = $('#container').clndr({
		showAdjacentMonths: true,
		render: function(data) {
			return c_tmpl(data);
		},
		clickEvents: {
			click: function(target) {
				console.log(target.date);
		   	}
		}
	});
	return mC;
})();
