AOS.init();

; const uiCommon = (function (uiCommon, $window) {
    uiCommon.init = () => {
        uiCommon.eventBind.init();
    }

    uiCommon.eventBind = {
        init() {
            const self = uiCommon.eventBind;
            self.accordion.init(); // 아코디언
            self.progress.init(); // 진행률
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
        progress : {
            init() {
                // 이부분 다시하기
                $('#salary').is('.aos-animate') && moveProgressBar();

                function moveProgressBar() {
                    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
                    var getProgressWrapWidth = $('.progress-wrap').width();
                    var progressTotal = getPercent * getProgressWrapWidth;
                    var animationLength = 2500;
                
                    $('.progress-bar').stop().animate({
                        left: progressTotal
                    }, animationLength);
                }
            }
        }

    }
    
    uiCommon.init();
    return uiCommon;
})(window.uiCommon || {}, $(window));