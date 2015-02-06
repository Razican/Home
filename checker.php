<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST')
{
	header("HTTP/1.0 404 Not Found");
	echo "<h1>404 Not Found</h1>";
	echo "The page that you have requested could not be found.";
	exit();
}

function is_online($host)
{
	$retval = -1;
	switch ($host)
	{
		case 'kate':
			system("ping kate -c1 -q -w1 > /dev/null", $retval);
		break;
		case 'jacob':
			system("ping jacob -c1 -q -w1 > /dev/null", $retval);
		break;
		case 'claudia':
			system("ping claudia -c1 -q -w1 > /dev/null", $retval);
		break;
	}
	return $retval == 0;
}

switch ($_GET['server'])
{
	case 'kate':
		echo json_encode(array('online' => is_online('kate')));
	break;
	case 'jacob':
		echo json_encode(array('online' => is_online('jacob')));
	break;
	case 'claudia':
		echo json_encode(array('online' => is_online('claudia')));
	break;
}