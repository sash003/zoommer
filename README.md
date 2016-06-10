<h2>Как использовать</h2>
Рисуете div (желательно обернуть его) и даёте ему три атрибута:

  Первый аттрибут - основная картинка data-image="img/msi.jpg"
  
  Второй - картинка, которую увеличиваем, можно делать типа рентген  data-image-zoom="img/msi.jpg"
  
  Третий - размер лупы 	data-size="111"

<pre>
// и вешаете метод 
$(".test-plugin").zoommer(); // по умолчанию scale 1.4

// или указав увеличение самостоятельно
$(".test-plugin").zoommer({
    scale : 1.5 
});
	
</pre>
