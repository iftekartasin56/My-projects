jQuery(document).ready(function($){

    let curr_symbol = "$";

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue: 0
    };

    const anElement1 = new AutoNumeric('#in_1', numOptionCurrency);
    const anElement2 = new AutoNumeric('#in_2', numOptionCurrency);
    const anElement3 = new AutoNumeric('#in_3', numOptionCurrency);

    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $('.cl-required').on('input', function(e){
        calc();
    });

    $(".curr-sign").text(curr_symbol);

    function calc(){
        in_1 = removeSign($("#in_1").val());
        in_2 = removeSign($("#in_2").val());
        in_3 = removeSign($("#in_3").val());

        rs_1 = (in_2+in_3)/in_1;

        $("#rs_1").text(curr_symbol + nftd.format(onlyNum(rs_1)));

    }

    function removeSign(vl){
        return Number(vl.replace(/\curr_symbol|,/g, ''));
    }

    function onlyNum(vl){
        return (isFinite(vl)) ? vl : 0;
    }
});