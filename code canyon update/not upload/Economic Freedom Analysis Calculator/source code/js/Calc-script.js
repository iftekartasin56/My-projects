jQuery(document).ready(function($){

    let curr_symbol = "$";

    let arr_one = [], arr_two = [], arr_three = [], arr_four = [], arr_five = [], arr_six = [], arr_seven = [], arr_eight = [], arr_nine = [], arr_ten = [], arr_elv = [];
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
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 2,
        minimumValue               : 0,
        maximumValue               : 100
    };

    const numOptionAge = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue               : 0,
        maximumValue               : 100
    };

    const anElement1 = AutoNumeric.multiple('.in-curr', numOptionCurrency);
    const anElement2 = AutoNumeric.multiple('.in-prcnt', numOptionPercent);
    const anElement3 = AutoNumeric.multiple('.in-age', numOptionAge);

    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    calc();
    
    $('.cl-required').on('change', function(e){
        calc();
    });
    
    $(".curr-sign").text(curr_symbol);
    function calc(){
        let ins = {};

        $(".cl-required").each(function(ind, elm){
            let vl = removeSign($(elm).val());
            let inID = $(elm).attr('id');

            ins[inID] = vl;
        });

        let i = 0, j = 0;
        arr_one = [], arr_two = [], arr_three = [], arr_four = [], arr_five = [], arr_six = [], arr_seven = [];
        arr_eight = [], arr_nine = [], arr_ten = [], arr_elv = [];

        let current_age = ins["in_9"];
        
        for(i = ins["in_9"]; i < 100; i++){
            let age = i;
            let pl_sv = (ins["in_10"] >= age) ? ins["in_3"] : 0;
            let pr_sv = (ins["in_10"] >= age) ? ins["in_4"] : 0;
            let x = 0, y = 0, pr_ls = 0;
            
            if(j == 0){
                x = ins["in_1"];
                y = ins["in_2"];
                pr_ls = -ins["in_5"];
            } else {
                x = arr_five[j-1];
                y = arr_nine[j-1];
                pr_ls = arr_ten[j-1] * (1+(ins["in_6"]/100));
            }

            let pl_gr = (ins["in_7"]/100)*x;
            let pr_gr = (ins["in_8"]/100)*y;
            let pr_dis = (age <= ins["in_11"]) ? 0 : (y > 0) ? pr_ls : 0;

            let pr_t = pr_sv + pr_gr + pr_dis;
            let pr_vl = (pr_t+y)>0 ? pr_t+y : 0;

            let pl_dis = (pr_vl<0) ? pr_vl : (pr_vl==0) ? pr_ls : 0;

            let pl_t = pl_sv + pl_gr + pl_dis;
            let pl_vl = (pl_t+x>0) ? pl_t+x : 0;
            let total_vl = pl_vl+pr_vl;

            arr_one.push(age);
            arr_two.push(pl_sv);
            arr_three.push(pl_gr);
            arr_four.push(pl_dis);
            arr_five.push(pl_vl);
            arr_six.push(pr_sv);
            arr_seven.push(pr_gr);
            arr_eight.push(pr_dis);
            arr_nine.push(pr_vl);
            arr_ten.push(pr_ls);
            arr_elv.push(total_vl);
            
            j++;
        }
        excGraph();
    }

    function excGraph(){
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        
        Highcharts.chart('my_chart', {
            chart: {
                type: 'spline'
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
                    borderWidth: 0,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">Age: <b>{point.key}</b></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>${point.y:,.0f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            series: [{
                name: 'Personal',
                color:'#43AFB6',
                data: arr_nine
            }, {
                name: 'Retirement Plan',
                color:'#FDB515',
                data: arr_five
            }]
        });
    }

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ''));
    }

    function onlyNum(vl){
        return (isFinite(vl)) ? vl : 0;
    }
});