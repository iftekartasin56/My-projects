jQuery(document).ready(function($){

    let curr_symbol = "$";

    const ara_nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const ara_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });

    const ara_numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue               : 0
    };

    const ara_anElement1 = AutoNumeric.multiple('#ara .cl-in', ara_numOptionCurrency);

    $("#ara .cl-in").on("click", function(){
        $("#ara .cl-in").removeClass("active");
        $(this).addClass("active");
    });

    $("#ara .cl-in").on("keyup", function(e){
        if(e.which == 13) {
            $("#ara #calc_btn_ara").click();
        }
    });

    $("#ara #calc_btn_ara").on("click", function(){
        ara_calc();
    });

    $(".curr-sign").text(curr_symbol);

    function ara_calc(){
        agingunder30 = ara_removeSign($("#agingunder30").val());
        aging30to60 = ara_removeSign($("#aging30to60").val());
        aging60to90 = ara_removeSign($("#aging60to90").val());
        aging90to120 = ara_removeSign($("#aging90to120").val());
        agingover120 = ara_removeSign($("#agingover120").val());

        let agingresults = agingunder30 + aging30to60 + aging60to90 + aging90to120 + agingover120;
        let agingresultsunder30 =  agingunder30 /  agingresults;
        let agingresults30to60 =  aging30to60 /  agingresults;
        let agingresults60to90 =  aging60to90 /  agingresults;
        let agingresults90to120 =  aging90to120 /  agingresults;
        let agingresultsover120 =  agingover120 /  agingresults;

        $("#agingresults").text(curr_symbol + ara_nft.format(agingresults));
        $("#agingresultsunder30").text(ara_nftd.format(agingresultsunder30*100)+"%");
        $("#agingresults30to60").text(ara_nftd.format(agingresults30to60*100)+"%");
        $("#agingresults60to90").text(ara_nftd.format(agingresults60to90*100)+"%");
        $("#agingresults90to120").text(ara_nftd.format(agingresults90to120*100)+"%");
        $("#agingresultsover120").text(ara_nftd.format(agingresultsover120*100)+"%");
    }

    function ara_removeSign(vl){
        return Number(vl.replace(/\$|,|[^\d.-]/g, ''));
    }
});