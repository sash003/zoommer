<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="dist/jQuery.zoommer.css">
	<link rel="stylesheet" href="demo.css">
</head>
<body>
	<!--
  Первый аттрибут - основная картинка
  Второй - картинка, которую увеличиваем, можно делать типа рентген
  Третий - размер лупы
  -->
    <div class="test-plugin"
		data-image="img/1.png"
		data-image-zoom="img/1.png"
		data-size="111"></div> <!--размер лупы-->
	
    <div class="wrap">
  		<div class="test-plugin"
  		data-image="img/msi.jpg"
  		data-image-zoom="img/msi-open.jpg"
  		data-size="111"></div>
	  </div>
	

	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="dist/jQuery.zoommer.js"></script>
	<script src="demo.js"></script>

</body>
</html>