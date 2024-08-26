jQuery(document).ready(function($){

    let curr_symbol = "$";

    const art_nft = Intl.NumberFormat("en-US");
    const art_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4
    });

    const art_numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue               : 0
    };

    const art_anElement1 = AutoNumeric.multiple('#art .cl-in', art_numOptionCurrency);

    $("#art .cl-in").on("click", function(){
        $("#art .cl-in").removeClass("active");
        $(this).addClass("active");
    });

    $("#art .cl-in").on("keyup", function(e){
        if(e.which == 13) {
            $("#art #calc_btn_art").click();
        }
    });

    $("#art #calc_btn_art").on("click", function(){
        art_calc();
    });

    $(".curr-sign").text(curr_symbol);

    function art_calc(){
        net_credit_sales = art_removeSign($("#net_credit_sales").val());
        average_receivables = art_removeSign($("#average_receivables").val());

        let art_amount = net_credit_sales / average_receivables;

        $("#art_amount").text(art_nft.format(art_amount));
    }

    function art_removeSign(vl){
        return Number(vl.replace(/\$|,|[^\d.-]/g, ''));
    }
});