
<html>
<head>
<title>Peg's Server</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
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
 



<ul>
<?
$rep=opendir('.');
$bAuMoinsUnRepertoire = false;
while ($file = readdir($rep)){
	if($file != '..' && $file !='.' && $file !=''){ 
		if (is_dir($file)){
			$class='';
			if ( in_array( $file, array( 'tpls' ) ) ) $class = "folder";
			$bAuMoinsUnRepertoire = true;
			printf('<li><a href="%s" class="%s">%s</a></li>', $file, $class, $file);
		}
	}
}


closedir($rep);
clearstatcache();
?>
</ul>

</body>
</html>
