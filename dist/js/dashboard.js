$(document).ready(function()
	{
		$.post("checker.php?server=kate", function(data) {
			if (data.online)
			{
				$('#kate').removeClass('panel-red');
				$('#kate').addClass('panel-green');
				$('#kate a').show();
			}
		}, 'json');

		$.post("checker.php?server=jacob", function(data) {
			if (data.online)
			{
				$('#jacob').removeClass('panel-red');
				$('#jacob').addClass('panel-green');
				$('#jacob a').show();
			}
		}, 'json');

		$.post("checker.php?server=claudia", function(data) {
			if (data.online)
			{
				$('#claudia').removeClass('panel-red');
				$('#claudia').addClass('panel-green');
				$('#claudia a').show();
			}
		}, 'json');

		updateAquarium = function() {
			d = new Date();
			$('#aquarium img').attr('src', 'claudia/aquarium.jpg?'+d.getTime());
		}

		$('#aquarium img').bind("load", function(){setTimeout(updateAquarium, 150)});
		updateAquarium();
	});
