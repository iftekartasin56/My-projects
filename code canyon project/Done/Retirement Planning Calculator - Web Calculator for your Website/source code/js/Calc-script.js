jQuery(document).ready(function($){
    
    let curr_symbol = "$";

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue               : 0
    };

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    const anElement1 = AutoNumeric.multiple('.custom-in', numOptionCurrency);

    $('.rg-slider').on('input', function(e){
        var min = Number(e.target.min),
            max = Number(e.target.max),
            vl = Number(e.target.value),
            val = Number(e.target.value);
        
        let in_id = $(this).attr("id");

        if(min == 0){
            min = min + 1;
            max = max + 1;
            val = val + 1;
        }
            
        let bg_size = (val - min) * 100 / (max - min);

        $(e.target).css({
            'backgroundSize': bg_size + '% 100%'
        });

        if(in_id == "in_1" || in_id == "in_2"){
            $("#"+in_id+"_vl").val(vl);
            
            if(in_id == "in_1"){
                $("#in_2").attr("min", vl);
                $("#in_2").trigger("input");
            }
        } else {
            $("#"+in_id+"_vl").val(vl + "%");
        }

        calc();

    }).trigger('input');

    $(".custom-in").on("input", function() {
        calc();
    });

    $(".curr-sign").text(curr_symbol);

    function calc() {
        in_1 = removeSign($("#in_1").val());
        in_2 = removeSign($("#in_2").val());
        in_3 = removeSign($("#in_3").val());
        in_4 = removeSign($("#in_4").val());
        in_5 = removeSign($("#in_5").val());
        in_6 = removeSign($("#in_6").val());
        in_7 = removeSign($("#in_7").val())/100;
        in_8 = removeSign($("#in_8").val())/100;

        if(in_7 > 7/100){
            $("#prcnt_1").show();
            $("#prcnt_2").hide();
        } else {
            $("#prcnt_1").hide();
            $("#prcnt_2").show();
        }

        if(in_8 > 7/100){
            $("#prcnt_3").show();
            $("#prcnt_4").hide();
        } else {
            $("#prcnt_3").hide();
            $("#prcnt_4").show();
        }

        output_1 = FV(in_7/12,(12*(in_2-in_1)),-in_4/12,in_3,0);
        output_2 = (NPER(in_8/12,((in_5-in_6)*Math.pow(1.035,(in_2-in_1)))/12,-output_1,0,0))/12;

        $("#output_1").text(curr_symbol+nft.format(onlyNum(output_1)));
        
        if(onlyNum(output_2) == 0){
            $("#output_2").text("Endless");
        } else {
            $("#output_2").text(nft.format(onlyNum(output_2)));
        }

        if(output_2 < 35){
            $("#con_1").show();
            $("#con_2").hide();
        } else {
            $("#con_1").hide();
            $("#con_2").show();
        }
    }

    function FV(rate, nper, pmt, pv, type) {
        var pow = Math.pow(1 + rate, nper),
        fv;
    
        pv = pv || 0;
        type = type || 0;
    
        if (rate) {
        fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
        } else {
        fv = -1 * (pv + pmt * nper);
        }
        return fv;
    }

    function NPER(rate, payment, present, future, type) {
        var type = (typeof type === 'undefined') ? 0 : type;

        var future = (typeof future === 'undefined') ? 0 : future;

        rate = eval(rate);

        var num = payment * (1 + rate * type) - future * rate;
        var den = (present * rate + payment * (1 + rate * type));
        return Math.log(num / den) / Math.log(1 + rate);
    }

    function removeSign(vl){
        return Number(vl.replace(/\curr_symbol|,/g, ''));
    }

    function onlyNum(num){
        return isFinite(num) ? num : 0;
    }
});