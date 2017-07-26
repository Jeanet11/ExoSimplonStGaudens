$(".link1").click(function (){
	alert("Qu'est-ce qui est jaune et qui attend ?");
});

$(".link2").click(function (){
	alert("Jonathan !");
});

var taMere = {
	1 : "Leo Fact #1 : Error 404",
	2 : "Leo Fact #2 : Un bon .git est un .git /home/",
	3 : "Leo Fact #3 : Qu'est-ce qui est jaune et qui attend ?",
	4 : "Leo Fact #4 : Jonathan !",
	5 : "Leo Fact #5 : J'arrive pas à push !",
	6 : "Leo Fact #6 : J'arrive pas à pull !",
	7 : "Leo Fact #7 : J'arrive pas à merge !",
	8 : "Leo Fact #8 : J'arrive pas à .git init...",
	9 : "Leo Fact #9 : .git commit-m 'Pourquoi ça marche pas ?'",
};

$("li").children("img").click(function(){
	$("li").children("img").removeClass("imgSur");
	$(this).addClass("imgSur");	
	$(".content").children("p").text(taMere[$(this).data("desc")]);
})

$('#cbox1').click(function(){
	if ($(this).is(":checked"))
	{ 
		$('.scroll').addClass('scrollRev');

	}
	else{
		$('.scroll').removeClass('scrollRev');
	};
})

$("#cbox2").click(function (){
	var ul = document.querySelector('ul');
	if ($(this).is(":checked"))
	{
		
		for (var i = ul.children.length; i >= 0; i--) {
			ul.appendChild(ul.children[Math.random() * i | 0]);
		}
	} else 
	{
		location.reload();
		
	}
});





