jQuery(($) => {
    const numOptionNumber = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue: 0
    };
    
    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '$',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue: 0
    };

    const numOptionPercent = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '%',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 2,
        minimumValue: 0,
        maximumValue: 100
    };

    const numOptionPercent2 = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '%',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 2,
        minimumValue: 0
    };

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    
    const anElement1 = AutoNumeric.multiple('.in-num', numOptionNumber);
    const anElement2 = AutoNumeric.multiple('.in-cur', numOptionCurrency);
    const anElement3 = AutoNumeric.multiple('.in-prcnt', numOptionPercent);
    const anElement4 = AutoNumeric.multiple('.in-prcnt2', numOptionPercent2);

    calcFunc();
    
    $(".cl-input").on("input", function(){
        calcFunc();
    });

    $("#calcBtn").on("click", function(){
        calcFunc();
    });

    function calcFunc(){
        let cr_age = removeSign($("#in_cr_age").val());
        let rt_age = removeSign($("#in_rt_age").val());
        let cr_income = removeSign($("#in_cr_income").val());
        let mn_savings = removeSign($("#in_mn_savings").val());
        let saved_am = removeSign($("#in_saved_am").val());
        let rep_ratio = removeSign($("#in_rep_ratio").val())/100;
        let inv_return = removeSign($("#in_inv_return").val())/100;
        let inflation = removeSign($("#in_inflation").val())/100;

        let equity_mn = Math.pow((1+inv_return),(1/12))-1;

        if(cr_age && rt_age && rt_age > cr_age && cr_income){
            let max_age = 105;
            let rem_yr = rt_age - cr_age;
            let total_months = (105-cr_age) * 12;
            let i = 0;

            let start_age = cr_age;
            let arr_age = [], arr_netValue = [];
            let retirementArr = [];
            let rt_salary = 0, runout_age = 0, runout_mn = 0;

            let pmt_vl = 0, pmt_lump = 0, time_vl_income = 0, income_drawn = 0;

            for(i = 0; i < total_months; i++){
                if(i%12 == 0){
                    arr_age.push(start_age);
                    start_age++;
                }

                if(i == 0){
                    pmt_vl = 0;
                    pmt_lump = saved_am;
                    time_vl_income = 0;
                } else {
                    if(i == 1){
                        pmt_vl = mn_savings;
                    } else {
                        if((i-1)%12 == 0){
                            pmt_vl = pmt_vl*(1+inflation);
                        }

                        if(i/12 > (rt_age - cr_age)){
                            pmt_vl = 0;
                        }
                    }
                    
                    pmt_lump = (pmt_lump+pmt_vl+income_drawn)*(1+equity_mn);
                    
                    if(i == 1){
                        time_vl_income = cr_income * rep_ratio;
                    } else {                               
                        if((cr_age + Math.floor(i/12)) != rt_age){
                            if((i-1)%12 == 0){
                                time_vl_income = time_vl_income*(1+inflation);
                            }
                        }
                    }

                }

                pmt_lump = pmt_lump > 0 ? pmt_lump : 0;

                if((cr_age + (i/12)) >= rt_age){
                    income_drawn = time_vl_income * -1;
                }

                if(start_age - 1 == rt_age && retirementArr.length == 0){
                    retirementArr = [start_age - 1, pmt_lump];
                    rt_salary = time_vl_income;
                }

                
                if(i != 0 && pmt_lump ==  0 && runout_age == 0) {
                    runout_age = cr_age + Math.round(i/12);
                    runout_mn = i;
                }

                arr_netValue.push(pmt_lump);                  
            } 

            $("#rs_1").text("$ "+nft.format(retirementArr[1]));
            $("#rs_2").text("$ "+nft.format(rt_salary));
            $("#rs_3").text(runout_age ? runout_age : "It won't!");
            $("#rs_4").text(runout_age ? (runout_age-rt_age)+" year(s)" : "-");
            $("#sum_text").html(( runout_age ? `Your current plan will allow you <b>${runout_age-rt_age} year(s)</b> in retirement. You will need to adjust your plan to have sufficient provision for a longer retirement.` : 
                            `Your current plan will allow you more than enough years in retirement with the desired replacement ratio.`));

            Highcharts.setOptions({
                lang: {
                    thousandsSep: ','
                }
            });


            Highcharts.chart('growth_graph', {
                chart: {
                    backgroundColor: 'transparent',
                    height: 450
                },
                title: {
                    text: ``,
                    style: {
                        color: '#ffffff'
                    }
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    title: {
                        text: 'Age'
                    },
                    labels: {
                        style: {
                            color: '#000000'
                        }
                    },
                    lineColor: '#000000'
                },
                yAxis: {
                    title: {
                        text: 'Total Capital'
                    },
                    lineWidth: 1,
                    lineColor: '#000000',
                    gridLineColor: '#ffffff',
                    labels: {
                        style: {
                            color: '#000000'
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        let txt = "";
                        return 'Age: '+ this.points.reduce(function (s, point) {
                                txt = ageCalc(s) + '<br/>' + point.series.name + ': ' +
                                    '<b>$'+nft.format(point.y)+'</b>';
                            return txt;
                        }, '<b>' + this.x + '</b>');
                    },
                    shared: true
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        lineWidth: 3,
                        pointStart: cr_age,
                        pointWidth: 4,
                        borderWidth: 0,
                        pointInterval: 0.0833333333333,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        }
                    }
                },
                series: [{
                    type: 'spline',
                    name: 'Net Value',
                    color: '#688BA8',
                    data: arr_netValue

                }, {
                    type: 'column',
                    name: 'Retirement Value',
                    color: '#5D5F64',
                    data: [[retirementArr[0], retirementArr[1]]]
                }]
            });
        }
    }

    function ageCalc(s){
        let age_html = s;
        let age_num = Number($(age_html).text());

        let age = Math.floor(age_num);
        let months = Math.ceil((age_num - age) * 12);

        if(months == 12) age++, months = 0;

        age = age + " year(s)";

        let mn = "";
        if(months){
            mn = " "+months+" month(s)";
        }
        return age + mn;
    }

    function mnToAge(mn_num){
        let yrs = Math.floor(mn_num/12);
        let months = Math.ceil((mn_num/12 - yrs)*12);

        yrs = yrs + " year(s)";

        let mn = "";
        if(months){
            mn = " "+months+" month(s)";
        }

        return yrs + mn;
    }

    function removeSign(vl){
        return Number(vl.replace(/\R|\$|\%|,/g, ''));
    }
});