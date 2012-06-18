
<html>
	<head>
		<title>LearningBackbone Project - Tutorials and Examples</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		
		<link rel="stylesheet" type="text/css" href="_libs/bootstrap/css/bootstrap.min.css" />
		
		<style type="text/css">
		html{
			margin:30px;
		}
		a {
			display:block;
			color:#666;
			text-decoration:none;
			padding:4px;
		}
		a:hover {
			background: #93673d;
			color:#fff;
		}
		a.folder {
			background:#eff1a6;
			border: 1px solid #93673d;
		}
		a.folder:hover {
			border: 1px solid #000;
			background: #93673d;
			color:#000;
		}
		</style>
		</head>

<body>

	<div class="container">
		
		<div class="page-header row">
			<h1 class="span12">LearningBackbone Project</h1>
		</div>


		<ul>
		<?
		$rep=opendir('.');
		$bAuMoinsUnRepertoire = false;
		while ($file = readdir($rep)){
			if($file != '..' && $file !='.' && $file !=''){ 
				if (is_dir($file)){
					if ( in_array(substr($file,0,1),array( '.', '_' ))) continue;
					printf('<li><a href="%s">%s</a></li>', $file, $file);
				}
			}
		}
		
		
		closedir($rep);
		clearstatcache();
		?>
		</ul>

	</div>

</body>
</html>
