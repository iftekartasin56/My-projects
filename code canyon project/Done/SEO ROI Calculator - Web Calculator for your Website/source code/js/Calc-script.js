jQuery(document).ready(function($){

    let curr_symbol = "$";

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0
    };
    const numOptionPercent = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 2,
        minimumValue: 0,
        maximumValue: 100
    };

    const anElement1 = new AutoNumeric('#cl_in_1', numOptionCurrency);
    const anElement2 = new AutoNumeric('#cl_in_2', numOptionCurrency);
    const anElement3 = new AutoNumeric('#cl_in_3', numOptionCurrency);
    const anElement4 = new AutoNumeric('#cl_in_4', numOptionPercent);
    const anElement5 = new AutoNumeric('#cl_in_5', numOptionCurrency);

    $(".curr-sign").text(curr_symbol);

    $("#calculate_btn").on("click", function(){
        cl_in_1 = removeSign($("#cl_in_1").val());
        cl_in_2 = removeSign($("#cl_in_2").val());
        cl_in_3 = removeSign($("#cl_in_3").val());
        cl_in_4 = removeSign($("#cl_in_4").val())/100;
        cl_in_5 = removeSign($("#cl_in_5").val());
        

        let conversion = cl_in_3*cl_in_4;
        let add_rev = conversion*cl_in_5;
        let monthly_roi = add_rev-cl_in_1;
        let total_seo_spend = cl_in_1*cl_in_2;
        let add_rev_genrate = add_rev*6;
        let total_seo = add_rev_genrate-total_seo_spend;

        $("#rs_1").text(nft.format(conversion));
        $("#rs_2").text(curr_symbol + nftd.format(add_rev)).css({"color":"#00a900"});
        $("#rs_3").text(curr_symbol + nftd.format(monthly_roi));
        $("#rs_4").text(curr_symbol + nftd.format(total_seo_spend)).css({"color":"red"});
        $("#rs_5").text(curr_symbol + nftd.format(add_rev_genrate)).css({"color":"#00a900"});
        $("#rs_6").text(curr_symbol + nftd.format(total_seo));

        if(monthly_roi < 0){
            $("#rs_3").css({"color":"red"});
        } else {
            $("#rs_3").css({"color":"#00a900"});
        }
        if(total_seo < 0){
            $("#rs_6").css({"color":"red"});
        } else {
            $("#rs_6").css({"color":"#00a900"});
        }


    });

    $("#clear_btn").on("click", function(){
        anElement1.set("");
        anElement2.set("");
        anElement3.set("");
        anElement4.set("");
        anElement5.set("");

        $("#rs_1").text("-");
        $("#rs_2").text("-");
        $("#rs_3").text("-");
        $("#rs_4").text("-");
        $("#rs_5").text("-");
        $("#rs_6").text("-");

    });

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ''));
    }
});