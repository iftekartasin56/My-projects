jQuery(document).ready(function($){

    let curr_symbol = "$";

    const acp_nft = Intl.NumberFormat("en-US");
    const acp_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4
    });

    const acp_numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue               : 0
    };

    const acp_anElement1 = AutoNumeric.multiple('#acp .cl-in', acp_numOptionCurrency);

    $("#acp .cl-in").on("click", function(){
        $("#acp .cl-in").removeClass("active");
        $(this).addClass("active");
    });

    $("#acp .cl-in").on("keyup", function(e){
        if(e.which == 13) {
            $("#acp #calc_btn_acp").click();
        }
    });

    $("#acp #calc_btn_acp").on("click", function(){
        acp_calc();
    });

    $(".curr-sign").text(curr_symbol);

    function acp_calc(){
        average_accounts_receivable = acp_removeSign($("#average_accounts_receivable").val());
        total_credit_sales = acp_removeSign($("#total_credit_sales").val());
        duration = acp_removeSign($("#duration").val());

        let average_collection_period = (average_accounts_receivable * duration) / total_credit_sales;

        $("#average_collection_period").text(acp_nft.format(average_collection_period)+" days");
    }

    function acp_removeSign(vl){
        return Number(vl.replace(/\curr_symbol|,|[^\d.-]/g, ''));
    }
});