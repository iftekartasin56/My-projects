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

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0
    };

    new AutoNumeric('#cl1_in_1', numOptionCurrency);

    $("#ms123 #calcBtn").on("click", function(){
        cl_getInputs();
    });
    $("#ms123 .cl-in").on("input", function(){
        $("#cl1_rs_1").text("-");
    });

    function cl_getInputs(){
        cl1_in_1 = removeSign($("#cl1_in_1").val());
        cl1_in_2 = removeSign($("#cl1_in_2").val());
        cl1_in_3 = removeSign($("#cl1_in_3").val());
        
        cl_calc();
    }

    $(".curr-sign").text(curr_symbol);

    function cl_calc(){
        if(cl1_in_1 && cl1_in_2 && cl1_in_3){
            cl1_rs_1 = ((cl1_in_1/2)*Math.pow(0.9,cl1_in_2))*cl1_in_3;

            $("#cl1_rs_1").text(curr_symbol + cl_nftd.format(cl1_rs_1));
        } else {
            $("#cl1_rs_1").text("-");
        }
    }

    function removeSign(vl){
        return Number(vl.replace(/\curr_symbol|,/g, ''));
    }
});