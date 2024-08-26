
jQuery(($) => {
    const nftd = Intl.NumberFormat("en-US",{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    $(".in-finance").on("click", function(){
        $(".in-finance").removeClass("is-active");
        $(this).addClass("is-active");

        Calc()
    });
    $(".in-children").on("click", function(){
        $(".in-children").removeClass("is-active");
        $(this).addClass("is-active");

        Calc();
    });
    $(".in-employe").on("click", function(){
        $(".in-employe").removeClass("is-active");
        $(this).addClass("is-active");

        Calc();
    });
    $(".in-equity").on("click", function(){
        $(".in-equity").removeClass("is-active");
        $(this).addClass("is-active");

        Calc();
    });
    $(".in-retirement").on("click", function(){
        $(".in-retirement").removeClass("is-active");
        $(this).addClass("is-active");

        Calc();
    });
    $('#in_1').on('input', function (e) {
        var min = e.target.min,
            max = e.target.max,
            vl = e.target.value,
            val = e.target.value;

        if(min == 0){
            min = min + 1,
            max = max + 1,
            val = val + 1;
        }
        let bg_size = (val - min) * 100 / (max - min);

        $(e.target).css({
            'backgroundSize': bg_size + '% 100%'
        });
        if(vl == 5){
            $("#range_vl").text( vl + "+");
        } else if(vl == 0) {
            $("#range_vl").text("None");
        } else {
            $("#range_vl").text(vl);
        }

        Calc();

    }).trigger('input');

    function Calc(){
        let in_finance = $('.in-finance.is-active').data("value") ? Number($('.in-finance.is-active').data("value")) : 0;
        let in_children = $('.in-children.is-active').data("value") ? Number($('.in-children.is-active').data("value")) : 0;
        let in_employe = $('.in-employe.is-active').data("value") ? Number($('.in-employe.is-active').data("value")) : 0;
        let in_equity = $('.in-equity.is-active').data("value") ? Number($('.in-equity.is-active').data("value")) : 0;

        in_1 = Number($('#in_1').val());

        let in_retirement = $('.in-retirement.is-active').data("value") ? Number($('.in-retirement.is-active').data("value")) : 0;

        let total_annual_price = in_finance + in_children + in_employe + in_equity + in_retirement + (in_1 * 500);

        $('#rs_1').text("$" + nftd.format(total_annual_price));

        let total_monthly_price = total_annual_price / 12;
        $('#rs_2').text("$" + nftd.format(total_monthly_price));
    }

});