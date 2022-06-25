AOS.init();

; const uiCommon = (function (uiCommon, $window) {
    uiCommon.init = () => {
        uiCommon.eventBind.init();
    }

    uiCommon.eventBind = {
        init() {
            const self = uiCommon.eventBind;
            self.accordion.init(); // 아코디언
            self.test.init(); 
        },
        accordion: {
            init() {
                const $btn = $('.accordion-head button'),
                    $body = $('.accordion-body');

                $btn.on('click', function () {

                    if (!$(this).hasClass('open')) {
                        $btn.removeClass('open');
                        $body.stop().slideUp('fast');
                        $(this).addClass('open');
                        $(this).closest('.accordion-wrap').find('.accordion-body').stop().slideDown('fast');
                    } else {
                        $btn.removeClass('open');
                        $body.stop().slideUp('fast');
                    }
                });
            },
        },
        test : {
            init() {
                $(".option").click(function(){
                    $(".option").removeClass("active");
                    $(this).addClass("active");
                    
                });
            }
        }

    }
    
    uiCommon.init();
    return uiCommon;
})(window.uiCommon || {}, $(window));