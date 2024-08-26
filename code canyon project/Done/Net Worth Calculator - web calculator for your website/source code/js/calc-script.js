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

    const anElement1 = AutoNumeric.multiple('.num-in', numOptionCurrency);

    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    calc();
    
    $('.cl-required').on('input', function(e){
        calc();
    });

    function calc(){
        let in_assets = 0, in_liab = 0;
        $(".in-assets").each(function(){
            in_assets = in_assets + removeSign($(this).val());
        });
        $(".in-liab").each(function(){
            in_liab = in_liab + removeSign($(this).val());
        });

        rs_1 = in_assets - in_liab;

        $("#rs_1").text("$"+nftd.format(onlyNum(rs_1)));

    }

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ''));
    }

    function onlyNum(vl){
        return (isFinite(vl)) ? vl : 0;
    }
});