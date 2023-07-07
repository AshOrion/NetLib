$(document).ready(function(){
	$('#search').click(function(){
		$('.menu-item').addClass('hide-item')
		$('.search-form').addClass('active')
		$('.close').addClass('active')
		$('#search').hide()
	})
	$('.close').click(function(){
		$('.menu-item').removeClass('hide-item')
		$('.search-form').removeClass('active')
		$('.close').removeClass('active')
		$('#search').show()
	})
})

$(document).ready(function(){
			$('#box').mouseenter(function(){
				$('#box').attr("src","openbox.png");
				$('#box').mouseleave(function(){
					$('#box').attr("src","closedbox.png");
				});
			});
		});

