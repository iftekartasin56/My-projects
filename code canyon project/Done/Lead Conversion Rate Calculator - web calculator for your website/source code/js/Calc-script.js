jQuery(document).ready(function($){

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0
    };

    const anElement1 = new AutoNumeric('#cl_in_1', numOptionCurrency);
    const anElement2 = new AutoNumeric('#cl_in_2', numOptionCurrency);

    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });

    $("#calculate_btn").on("click", function(){
        cl_in_1 = removeSign($("#cl_in_1").val());
        cl_in_2 = removeSign($("#cl_in_2").val());

        if(cl_in_1 && cl_in_2){
            let conversion_rate = cl_in_2/cl_in_1;
            $("#rs_1").text(nftd.format(conversion_rate*100)+"%");
        } else {
            $("#rs_1").text("-");
        }
        
    });

    $("#clear_btn").on("click", function(){
        anElement1.set("");
        anElement2.set("");

        $("#rs_1").text("-");
    });

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ''));
    }
});