$(window).scroll(function() {
            $('.fade-in').each(function() {
                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
        
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
                    $(this).addClass('is-visible');
                }
            });
        });

        $(window).scroll(function() {
            $('.slide-in-fromright').each(function() {
                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
        
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
                    $(this).addClass('is-visible');
                }
            });
        });

        $(window).scroll(function() {
            $('.slide-in-fromleft').each(function() {
                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
        
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
                    $(this).addClass('is-visible');
                }
            });
        });

        $(window).scroll(function() {
            $('.stillfade-in').each(function() {
                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
        
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
                    $(this).addClass('is-visible');
                }
            });
        });