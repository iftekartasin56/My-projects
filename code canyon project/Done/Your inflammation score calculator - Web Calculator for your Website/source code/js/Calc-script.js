jQuery(document).ready(function($){
    $(".radio-option").on("click", function(){
        let pr = $(this).closest(".optios-sec");
            pr.find(".radio-option").removeClass("active");
            $(this).addClass("active");

            calc();
    });

    function calc(){
        let score = 0;
        $(".radio-option.active").each(function(){
            let vl = Number($(this).data("value"));
            score = score + vl;
        });
        animate_counter("#rs_1", score);
    }

    function animate_counter(id,value) {
        $(id).text(value);

        $(id).each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).html(now.toFixed(0));
                }
            });
        });
    }
});