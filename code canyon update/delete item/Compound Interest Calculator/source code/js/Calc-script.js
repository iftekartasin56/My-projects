jQuery(document).ready(function($){
    let con_1 = 12, comp_freq = 1;
    let arr_one = [], arr_two = [], arr_three = [], arr_four = [], arr_five = [], arr_six = [], blnc_arr = [], rows = "";
    let garr_one = [], garr_three = [], garr_five = [];

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

    const anElement1 = AutoNumeric.multiple('.num-in', numOptionCurrency);
    const anElement2 = AutoNumeric.multiple('.pr-in', numOptionPercent);

    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    calc();
    
    $('.contri-opt').on('click', function(e){
        $('.contri-opt').removeClass("active");
        $(this).addClass("active");
        con_1 = Number($(this).data("value"));

        if(con_1 == 12){
            $("#con_1").text("Monthly");
        } else {
            $("#con_1").text("Annual");
        }
        calc();
    });
    $('.freq-opt').on('click', function(e){
        $('.freq-opt').removeClass("active");
        $(this).addClass("active");
        comp_freq = Number($(this).data("value"));

        calc();
    });

    $('.cl-required').on('input', function(e){
        calc();
    });

    function calc(){
        in_1 = removeSign($("#in_1").val());
        in_2 = removeSign($("#in_2").val());
        in_3 = removeSign($("#in_3").val());
        in_4 = removeSign($("#in_4").val())/100;
        
        let i = in_4;       // Annual return rate // 3.75
        let n = comp_freq;  // Frequecy // 365
        let p = con_1;      // contribution Frequecy // 12
        let A = in_2;       // contribution amount // 100
        let PV = in_1;      // Initial Balance  // 10,000
        let t = in_3;       // terms // 5

        if(con_1 == 1){
            A = A/12;
            p = 12;
        }
        
        let fv;
        
        arr_one = [], arr_two = [], arr_three = [], arr_four = [], x = 0;
        let final_value = 0;

        for(x = 0; x < t; x++){
            let yr = x + 1;
            fv = -1 * FV( (Math.pow((1+i/n),(n/p)))-1, 12*yr, A, PV);
            
            let annual_dep = in_1  + (A * 12 * yr);
            let annual_int = fv - annual_dep;

            arr_one.push(yr);
            arr_two.push(annual_int);
            arr_three.push(annual_dep);
            arr_four.push(in_1);
        }

        $("#rs_1").text("$ "+nftd.format(onlyNum(fv)));
        excGraph();
    }

    function excGraph(){
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        
        Highcharts.chart('balance_chart', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: arr_one
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                },
                series: {
                    borderWidth: 0
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>${point.y:,.2f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            series: [{
                name: 'Total Interest',
                color:'#FF8F3D',
                data: arr_two
            }, {
                name: 'Annual Deposits',
                color:'#2C8FA0',
                data: arr_three
            },{
                name: 'Initial Deposit',
                color:'#00515F',
                data: arr_four
            } ]
        });
    }

    function pmt(rate, nperiod, pv, fv, type) {
        if (!fv) fv = 0;
        if (!type) type = 0;

        if (rate == 0) return -(pv + fv)/nperiod;

        var pvif = Math.pow(1 + rate, nperiod);
        var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

        if (type == 1) {
            pmt /= (1 + rate);
        };

        return pmt;
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

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ''));
    }

    function onlyNum(vl){
        return (isFinite(vl)) ? vl : 0;
    }
});