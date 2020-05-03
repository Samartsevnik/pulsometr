$(document).ready(function(){
  $('.carousel_inner').slick({
  	autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt=""/></button>',
    
  });
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function() {
    $(this)
      .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
   function toggleSlider(item){
   	$(item).each(function(i){
   		$(this).on('click', function(g){
   			g.preventDefault();
   			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
   			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
   		})
   });
   }
   toggleSlider ('.catalog-item__link')
   toggleSlider ('.catalog-item_back')

  // Modals

  	$('[data-modal=consultation ]').on('click', function(){
  		$('.overplay, #consultation').fadeIn();

  	});
  	$('.modals__close').on('click', function(){
  		$('.overplay, #consultation , #order , #thanks').fadeOut();
  	});
  	
  	$('.catalog-item__btn').each(function(i){
  		$(this).on('click' , function(){
  			$('#order .modals__descr').text($('.catalog-item__subtitle').eq(i).text());
  			$('.overplay , #order').fadeIn();
  		})
  	});
  	// $('.button_submit').on('click', function(){
  	// 	$('#thanks , .overplay').fadeIn();
  	// })
    function validateforms(form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true , 
          email: true
      }
      },
      messages: {
          name: "Введите Ваше имя",
          phone: "Введите Ваш номер телефона",
          email: {
          required: "Введите Ваш электронный адрес",
           email: "Введите верный адрес электронной почты"}
        }
    });
   }
   validateforms('#consult-form')
   validateforms('#consultation form')
   validateforms('#order form') 

   $('input[name=phone]').mask("+ 996(333) 333-333");
   $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: 'mailer/smart.php',
      data: $(this).serialize()
    }).done(function(){
      $(this).find('input').val('');
      $('form').trigger('reset');
    });
      return false;
  });

   
   $(window).scroll(function(){
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    }else{
      $('.pageup').fadeOut();
    }
   });
});

// let catalog__tab = document.getElementsByClassName('catalog__tab')[0]
// catalog__tab.addEventListener('click', ()=>{
// catalog__tab.classList.toggle('catalog__tab__active')
// });

