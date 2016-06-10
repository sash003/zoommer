(function($) {
  /* Опции по умолчанию */
  var defaults = {
    scale: 1.4
  };
  /* Объект методов для работы плагина */
  var methods = {
    init: function(opts) {
      options = $.extend(defaults, opts);
      return this.each(methods.Action);
    },

    Action: function(opts) {
      var th = $(this),
        dataImage = th.data("image"),
        dataImageZoom = th.data("image-zoom"),
        dataSize = th.data("size");

      th.addClass("zoommer")
        .append("<img class='data-image' src='" + dataImage + "'><div class='zoommer-loupe'><img src='" + dataImageZoom + "'>")
        .find(".data-image").css({
          "width": th.width()
        }).parent().find(".zoommer-loupe").css({
          "width": dataSize,
          "height": dataSize,
          transform: 'scale(' + options.scale + ')'
        })
        .find("img").css({
          "position": "absolute",
          "width": th.width()
        });

      th.on('resize.zoommer', function() {
        th.find(".data-image, .zoommer-loupe img").css({
          "width": th.width()
        })
      });

      th.on('mouseover.zoommer', function() {
        th.find(".zoommer-loupe").stop().fadeIn();
      }).on('mouseleave.zoommer', function() {
        th.find(".zoommer-loupe").stop().fadeOut();
      }).on('mousemove.zoommer', function(e) {

        var elemPos = {},
          offset = th.offset();

        elemPos = {
          left: e.pageX - offset.left - dataSize / 2,
          top: e.pageY - offset.top - dataSize / 2
        }

        th
          .find(".zoommer-loupe").css({
            "top": elemPos["top"],
            "left": elemPos["left"]
          })
          .find("img").css({
            "top": -elemPos["top"],
            "left": -elemPos["left"],
            "width": th.width()
          })
      });
      
      $(window).on('resize', function() {
  			$(".zoommer").resize();
  		});
      
    }
  };
  /* Методы для пользователя */
  var publicMethods = {
    on: function() {
      return this.each(function() {
        $(this).on('mouseover.zoommer', function() {
          $(this).find(".zoommer-loupe").stop().fadeIn();
        })
      });
    },
    disable: function() {
      return this.each(function() {
        $(this).off('mouseover.zoommer');
      });
    }
  }
  $.fn.zoommer = function(opts) {
    if (publicMethods[opts]) {
      return publicMethods[opts].apply(this, [].slice.call(arguments, 1));
    } else if (typeof opts === 'object' || !opts) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Метод с именем "' + opts + '" не существует!');
    }
  };

}(jQuery));