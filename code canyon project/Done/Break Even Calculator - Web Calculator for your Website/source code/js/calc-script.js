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

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    $('#in_4').on('input', function(e){
        var min = Number(e.target.min),
            max = Number(e.target.max),
            vl = Number(e.target.value),
            val = Number(e.target.value); ; 
        
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

        $("#in_4_vl").text(vl+"%");

    }).trigger('input');

    $('#in_2').on('input', function(e){
        in_2 = removeSign($("#in_2").val());
        let yearly = in_2*40*52;
        anElement3.set(yearly);
    });
    $('#in_3').on('input', function(e){
        in_3 = removeSign($("#in_3").val());
        let monthly = in_3/(40*52);
        anElement2.set(monthly);
    });
    
    $(".curr-sign").text(curr_symbol);

    calc();
    
    $('.cl-required').on('input', function(e){
        calc();
    });

    function calc(){
        in_1 = removeSign($("#in_1").val());
        in_2 = removeSign($("#in_2").val());
        in_3 = removeSign($("#in_3").val());
        in_4 = removeSign($("#in_4").val())/100;



        rs_1 = in_1/(in_2-(in_2*in_4));
        
        let days = rs_1/8;

        rs_2 = Math.ceil(days);

        let months = Math.ceil(days/30);
        
        let x = 0, i = 0, count_day = 0;

        let cl_dates = "", isOffDay = false, isSunDay = false, y = 1;
        $("#cl_sec").html("");

        for(x = 0; x < months; x++) {
            for(i=0; i<35; i++) {
                if(y > 5 && y < 8) { 
                    isOffDay = true; 
                    if(y == 7)  y = 0;
                } else { 
                    isOffDay = false;
                }

                let day = i - 3;

                if(i < 3 || i > 33){
                    cl_dates = cl_dates + `<span class="date-cell bg-none">&nbsp;</span>`;
                } else {
                    if(isOffDay){
                        cl_dates = cl_dates + `<span class="date-cell off-day">${day+1}</span>`;
                    } else {
                        cl_dates = cl_dates + `<span class="date-cell ${count_day < days ? "cross-date" : ""}">${day+1}</span>`;
                        count_day++;
                    }
                }
                y++;
            }
            $("#cl_sec").append(buildMonthTemp(cl_dates));
            cl_dates = "";
        }

        $("#rs_1").text(nftd.format(onlyNum(rs_1)));
        $("#rs_2").text(nft.format(onlyNum(rs_2)));

    }

    function removeSign(vl){
        return Number(vl.replace(/\curr_symbol|,/g, ''));
    }

    function onlyNum(vl){
        return (isFinite(vl)) ? vl : 0;
    }

    function buildMonthTemp(dates){
        let html = `
            <div class="calendar-upper-sec">
                <span class="inner-dots"></span>
                <span class="inner-dots"></span>
                <span class="inner-dots"></span>
                <span class="inner-dots"></span>
                <span class="inner-dots"></span>
            </div>
            <div class="calendar-sec">
                <span class="date-cell top-row">Mon</span>
                <span class="date-cell top-row">Tue</span>
                <span class="date-cell top-row">Wed</span>
                <span class="date-cell top-row">Thu</span>
                <span class="date-cell top-row">Fri</span>
                <span class="date-cell top-row off-day">Sat</span>
                <span class="date-cell top-row off-day">Sun</span>
                ${dates}
            </div>
        `;

        return html;
    }
});