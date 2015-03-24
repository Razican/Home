$(document).ready(function()
	{
		$.post("checker.php?server=kate", function(data) {
			if (data.online)
			{
				$('#kate').removeClass('panel-red');
				$('#kate').addClass('panel-green');
			}
		}, 'json');

		$.post("checker.php?server=jack", function(data) {
			if (data.online)
			{
				$('#jack').removeClass('panel-red');
				$('#jack').addClass('panel-green');
			}
		}, 'json');

		$.post("checker.php?server=claudia", function(data) {
			if (data.online)
			{
				$('#claudia').removeClass('panel-red');
				$('#claudia').addClass('panel-green');
			}
		}, 'json');

		updateAquarium = function() {
			d = new Date();
			$('#aquarium img').attr('src', 'claudia/aquarium.jpg?'+d.getTime());
		}

		$('#aquarium img').bind("load", function(){setTimeout(updateAquarium, 150)});
		updateAquarium();
	});
