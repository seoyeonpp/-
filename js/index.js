AOS.init();

; const uiCommon = (function (uiCommon, $window) {
    uiCommon.init = () => {
        uiCommon.eventBind.init();
    }

    uiCommon.eventBind = {
        init() {
            const self = uiCommon.eventBind;
            self.accordion.init(); // 아코디언
        },
        accordion : {
            init() {
                $('.descript-area .box-desc').eq(0).fadeIn();
                $(".option").click(function(){
                    let thisIdx = $(this).index();

                    $(".option").removeClass("active");
                    $(this).addClass("active");

                    $('.descript-area .box-desc').hide();
                    $('.descript-area .box-desc').eq(thisIdx).fadeIn();
                });
            }
        },

    }
    
    uiCommon.init();
    return uiCommon;
})(window.uiCommon || {}, $(window));