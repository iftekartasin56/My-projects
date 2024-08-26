jQuery(document).ready(function($){
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
        decimalPlaces              : 0,   
        minimumValue               : 0
    };
    
    const numOptionPercent = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 2,        
        minimumValue               : 0,
        maximumValue               : 100
    };
    
    const numOptionNum = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 0,        
        minimumValue               : 0
    };

    const element1 = new AutoNumeric('#in_1', numOptionCurrency);
    const element2 = new AutoNumeric('#in_2', numOptionCurrency);
    const element3 = new AutoNumeric('#in_3', numOptionCurrency);
    const element5 = new AutoNumeric('#in_5', numOptionPercent);
    
    calc();

    $('#up_arrow_in_4').on("click", function(){
        let vl = removeSign($("#in_4").val());
        vl = vl + 5;

        if(vl < 0){
            vl = 0;
        } else if(vl > 100) {
            vl = 100;
        }
        $("#in_4").val(vl);
        calc();
    });

    $('#down_arrow_in_4').on("click", function(){
        let vl = removeSign($("#in_4").val());
        vl = vl - 5;

        if(vl < 0){
            vl = 0;
        } else if(vl > 100) {
            vl = 100;
        }
        $("#in_4").val(vl);
        calc();
    });
    
    $('#in_4').on("input", function(){
        let vl = removeSign($(this).val());

        if(vl < 0){
            vl = 0;
            $(this).val(vl);
        } else if(vl > 100) {
            vl = 100;
            $(this).val(vl);
        }
    });

    $(".cl-required").on("input", function(){
        calc();
    });

    function calc(){
        in_1 = removeSign($("#in_1").val());
        in_2 = removeSign($("#in_2").val());
        in_3 = removeSign($("#in_3").val());
        in_4 = removeSign($("#in_4").val())/100;
        in_5 = removeSign($("#in_5").val())/100;

        let sv_time = in_3 * in_4;
        
        rs_1 = in_2/30;
        rs_2 = in_1*in_5;
        rs_3 = (in_2/30)*sv_time;
        rs_4 = sv_time*rs_1*rs_2/12;
        rs_5 = rs_4*12;
        rs_6 = in_1*1*12;
        rs_7 = rs_5-rs_6;
        rs_8 = rs_7/rs_6;
        
        $("#rs_2").text(nft.format(onlyNum(rs_2)));
        $("#rs_3").text("$"+nft.format(onlyNum(rs_3)));
        $("#rs_4").text("$"+nft.format(onlyNum(rs_4)));
        $("#rs_5").text("$"+nft.format(onlyNum(rs_5)));
        $("#rs_6").text("$"+nft.format(onlyNum(rs_6)));
        $("#rs_7").text("$"+nft.format(onlyNum(rs_7)));
        $("#rs_8").text(nft.format(onlyNum(rs_8*100))+"%");
    }

    function onlyNum(vl){
        return isFinite(vl) ? vl : 0;
    }
    function removeSign(vl){
        return Number(vl.replace(/,/g, ''));
    }
});