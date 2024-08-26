jQuery(document).ready(function($){

    let curr_symbol = "$";
    const cl_nft = Intl.NumberFormat("en-US", { 
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });
    const cl_nftd = Intl.NumberFormat("en-US", { 
        minimumFractionDigits:2,
        maximumFractionDigits:2
    });

    let chef = 18.25;
    let head_chef = 23.47;

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0
    };

    const numOptionCurrencyWithDec = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 2
    };

    new AutoNumeric('#cl1_in_1', numOptionCurrency);

    $("#ms123 .cl-in").on("input", function(){
        cl_getInputs();
    });

    $(".curr-sign").text(curr_symbol);

    function cl_getInputs(){
        cl1_in_1 = removeSign($("#cl1_in_1").val());
        cl1_in_2 = removeSign($("#cl1_in_2").val());
        cl_calc();
    }

    function cl_calc(){
        if(cl1_in_1 && cl1_in_2){
            cl1_rs_1 = cl1_in_1/(cl1_in_2*52);
            cl1_rs_2 = (chef*cl1_in_2)*52;
            cl1_rs_3 = (head_chef*cl1_in_2)*52;

            $("#cl1_rs_1").text(curr_symbol + cl_nftd.format(cl1_rs_1));
            $("#cl1_rs_2").text(curr_symbol + cl_nft.format(cl1_rs_2));
            $("#cl1_rs_3").text(curr_symbol + cl_nft.format(cl1_rs_3));
        } else {
            $("#cl1_rs_1, #cl1_rs_2, #cl1_rs_3").text("-");
        }
    }

    function removeSign(vl){
        return Number(vl.replace(/\curr_symbol|,/g, ''));
    }
});