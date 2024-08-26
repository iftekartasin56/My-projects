jQuery(document).ready(function($){
        
    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue: 0
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

    const anElement1 = new AutoNumeric('#in_1', numOptionCurrency);
    const anElement2 = new AutoNumeric('#in_2', numOptionPercent);

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    calc();
    
    $('.cl-required').on('input', function(e){
        calc();
    });

    function calc(){
        in_1 = removeSign($("#in_1").val());
        in_2 = removeSign($("#in_2").val());

        rs_1 = (in_1*(in_2/100));

        $("#rs_1").text("$"+nft.format(onlyNum(rs_1)));

    }

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ''));
    }

    function onlyNum(vl){
        return (isFinite(vl)) ? vl : 0;
    }
});