jQuery(($) => {
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
    
    $('.cl-range').on('input', function(e){
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

    }).trigger('input');
});

document.addEventListener('DOMContentLoaded', () => { 
    function tag(type, value = undefined, klass = undefined, id = undefined) {
       let el = document.createElement(type);
       if (klass) {
          el.setAttribute('class', klass);
       }
       if (id) {
          el.setAttribute('id', id);
       }
       if (value) {
          el.innerText = value;
       }
       return el;
    }
 
    function toCurrency(value) {
       if (value == 0) {
          return '-';
       } else {
          return '$' + value.toLocaleString(undefined, {
             maximumFractionDigits: 0
          });
       }
    }
 
    function parseCurrencyToFloat(value) {
       result = parseFloat(value.replace(/[($) ._-]+/g, '').replace(/,/g, ''));
       if (isNaN(result)) {
          return 0;
       } else {
          return result;
       }
    }
 
    function toAge(months) {
       const ageYears = Math.floor(months / 12);
       const ageMonths = months - ageYears * 12;
       result = ageYears.toFixed(0) + ' years';
       if (ageMonths != 0) {
          result += ' ' + ageMonths.toFixed(0) + ' months';
       }
       return result;
    }
 
    function convertToCurrency(value) {
       return value.toLocaleString();
    }
    const calculator = document.querySelector('#fire-calculator');
    let results = [];
    if (calculator) {
       let chartsInitialized = false;
       let chartsProcessing = false;
       const inputs = document.querySelectorAll('.cl-required');
       const currencyInputs = calculator.querySelectorAll('input.currency-input');
       const currentStatusNumbersPortfolioBalanceInput = calculator.querySelector('input#current-status-numbers-portfolio-balance');
       const currentStatusNumbersPortfolioBalanceLabel = calculator.querySelector('#current-status-numbers-portfolio-balance-label');
       const currentStatusNumbersMonthlyInvestmentInput = calculator.querySelector('input#current-status-numbers-monthly-investment');
       const currentStatusNumbersMonthlyInvestmentLabel = calculator.querySelector('#current-status-numbers-monthly-investment-label');
       const ageYearsInput = calculator.querySelector('input#age-years');
       const ageYearsLabel = calculator.querySelector('#age-years-label');
       const ageMonthsInput = calculator.querySelector('input#age-months');
       const ageMonthsLabel = calculator.querySelector('#age-months-label');
       const assumptionsMonthlyExpensesInput = calculator.querySelector('input#assumptions-monthly-expenses');
       const assumptionsMonthlyExpensesLabel = calculator.querySelector('#assumptions-monthly-expenses-label');
       const assumptionsPortfolioGrowthRateInput = calculator.querySelector('input#assumptions-portfolio-growth-rate');
       const assumptionsPortfolioGrowthRateLabel = calculator.querySelector('#assumptions-portfolio-growth-rate-label');
       const assumptionsInflationRateInput = calculator.querySelector('input#assumptions-inflation-rate');
       const assumptionsInflationRateLabel = calculator.querySelector('#assumptions-inflation-rate-label');
       const assumptionsSafeWithdrawalRateInput = calculator.querySelector('input#assumptions-safe-withdrawal-rate');
       const assumptionsSafeWithdrawalRateLabel = calculator.querySelector('#assumptions-safe-withdrawal-rate-label');
       const outputDiv = calculator.querySelector('#fire-calculator .calculator-result');

       for (let i = 0; i < inputs.length; i += 1) {
          inputs[i].addEventListener('input', () => {
             updateResults();
             drawCharts();
          });
       }
 
       function updateResults() {
          results = [];
          const currentStatusNumbersPortfolioBalance = parseCurrencyToFloat(currentStatusNumbersPortfolioBalanceInput.value) || 0;
          const currentStatusNumbersMonthlyInvestment = parseCurrencyToFloat(currentStatusNumbersMonthlyInvestmentInput.value) || 0;
          const ageYears = parseInt(ageYearsInput.value) || 0;
          const ageMonths = parseInt(ageMonthsInput.value) || 0;
          const ageTotalMonths = ageYears * 12 + ageMonths;
          const assumptionsMonthlyExpenses = parseCurrencyToFloat(assumptionsMonthlyExpensesInput.value) || 0;
          const assumptionsPortfolioGrowthRate = parseFloat(assumptionsPortfolioGrowthRateInput.value) || 0;
          const assumptionsInflationRate = parseFloat(assumptionsInflationRateInput.value) || 0;
          const assumptionsSafeWithdrawalRate = parseFloat(assumptionsSafeWithdrawalRateInput.value) || 0;
          ageYearsLabel.innerHTML = ageYears.toFixed(0) + ' years';
          ageMonthsLabel.innerHTML = ageMonths.toFixed(0) + ' months';
          assumptionsPortfolioGrowthRateLabel.innerHTML = (assumptionsPortfolioGrowthRate * 100).toFixed(2) + '% Portfolio Growth Rate';
          assumptionsInflationRateLabel.innerHTML = (assumptionsInflationRate * 100).toFixed(2) + '% Inflation Rate';
          assumptionsSafeWithdrawalRateLabel.innerHTML = (assumptionsSafeWithdrawalRate * 100).toFixed(2) + '% Safe Withdrawal Rate';
          if (outputDiv) {
             if (currentStatusNumbersPortfolioBalance < 0) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set portfolio balance greater than 0', 'result-error'));
                return;
             }
             if (currentStatusNumbersMonthlyInvestment < 0) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set monthly investment greater than 0', 'result-error'));
                return;
             }
             if (assumptionsMonthlyExpenses < 0) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set monthly expenses greater than 0', 'result-error'));
                return;
             }
             if (assumptionsPortfolioGrowthRate < 0.01) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set portfolio growth rate greater than 1.0%', 'result-error'));
                return;
             }
             if (assumptionsPortfolioGrowthRate > 0.1) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set portfolio growth rate less than 10.0%', 'result-error'));
                return;
             }
             if (assumptionsInflationRate < 0.01) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set inflation rate greater than 1.0%', 'result-error'));
                return;
             }
             if (assumptionsInflationRate > 0.1) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set inflation rate less than 10.0%', 'result-error'));
                return;
             }
             if (assumptionsSafeWithdrawalRate < 0.01) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set safe withdrawal rate greater than 1.0%', 'result-error'));
                return;
             }
             if (assumptionsSafeWithdrawalRate > 0.1) {
                outputDiv.innerHTML = '';
                outputDiv.appendChild(tag('span', 'Set safe withdrawal rate less than 10.0%', 'result-error'));
                return;
             }
 
             function futureValue(scenario, month) {
                const b0 = scenario.startingBalance;
                const r = scenario.growth;
                const n = month;
                const p = scenario.monthlyInvestment;
                const gf = Math.pow(1 + r, n);
                return (b0 * gf) + (p / r) * (gf - 1)
             }
 
             function futureTarget(scenario, month) {
                const e0 = scenario.annualExpenses;
                const r = scenario.inflation;
                const s = scenario.safeWithdrawalRate;
                const n = month;
                const gf = Math.pow(1 + r, n);
                return (e0 * gf) / s;
             }
 
             function projectMonth(month, invBump = 0, expDrop = 0) {
                const balanceScenario = {
                   startingBalance: currentStatusNumbersPortfolioBalance,
                   monthlyInvestment: currentStatusNumbersMonthlyInvestment,
                   growth: Math.pow((1 + assumptionsPortfolioGrowthRate), 1.0 / 12.0) - 1
                };
                const invBumpScenario = {
                   startingBalance: currentStatusNumbersPortfolioBalance,
                   monthlyInvestment: currentStatusNumbersMonthlyInvestment + invBump,
                   growth: Math.pow((1 + assumptionsPortfolioGrowthRate), 1.0 / 12.0) - 1
                };
                const targetScenario = {
                   annualExpenses: (assumptionsMonthlyExpenses) * 12,
                   safeWithdrawalRate: assumptionsSafeWithdrawalRate,
                   inflation: Math.pow((1 + assumptionsInflationRate), 1.0 / 12.0) - 1
                };
                const expDropScenario = {
                   annualExpenses: (assumptionsMonthlyExpenses - expDrop) * 12,
                   safeWithdrawalRate: assumptionsSafeWithdrawalRate,
                   inflation: Math.pow((1 + assumptionsInflationRate), 1.0 / 12.0) - 1
                };
                let balance = futureValue(balanceScenario, month);
                let bumpBalance = futureValue(invBumpScenario, month);
                let target = futureTarget(targetScenario, month);
                let dropTarget = futureTarget(expDropScenario, month);
                return {
                   month: month,
                   age: ageTotalMonths + month,
                   balance: balance,
                   bumpBalance: bumpBalance,
                   target: target,
                   dropTarget: dropTarget,
                   expDrop: target - dropTarget,
                   progress: balance / target,
                   bumpProgress: bumpBalance / target,
                   dropProgress: balance / dropTarget,
                   bothProgress: bumpBalance / dropTarget
                };
             }
 
             function outputResult() {
                let invBumpResults = [];
                let expDropResults = [];
                let invBump = currentStatusNumbersMonthlyInvestment * 0.25;
                let expDrop = assumptionsMonthlyExpenses * 0.25;
                let achievedMonths = [];
                let bumpAchievedMonths = [];
                let dropAchievedMonths = [];
                let bothAchievedMonths = [];
                let outputText = document.createDocumentFragment();
                let resultsList = document.createElement('ul');
                let result = projectMonth(0, invBump, expDrop);
                if (result.progress >= 1.0) {
                   achievedMonths.push(0);
                }
                if (result.bumpProgress >= 1.0) {
                   bumpAchievedMonths.push(0);
                }
                if (result.dropProgress >= 1.0) {
                   dropAchievedMonths.push(0);
                }
                if (result.bothProgress >= 1.0) {
                   bothAchievedMonths.push(0);
                }
                results.push(result);
                let expDropValue = result.expDrop;
                let fireText = document.createElement('li');
                fireText.appendChild(tag('span', 'FIRE Number: ', 'result-value'));
                fireText.appendChild(document.createTextNode("You'd need "));
                fireText.appendChild(tag('span', toCurrency(result.target), 'result-value'));
                fireText.appendChild(document.createTextNode(" to achieve FIRE today."));
                resultsList.appendChild(fireText);
                let progressText = document.createElement('li');
                progressText.appendChild(tag('span', 'Progress: ', 'result-value'));
                if (result.progress < 1) {
                   progressText.appendChild(document.createTextNode("You are currently "));
                   progressText.appendChild(tag('span', (result.progress * 100).toFixed(2) + '% ', 'result-value'));
                   progressText.appendChild(document.createTextNode("of the way to your target."));
                } else {
                   progressText.appendChild(document.createTextNode("You've already hit your target! Great job!"));
                }
                resultsList.appendChild(progressText);
                let month = 0;
                while ((ageTotalMonths + month) < 960) {
                   if (result.progress >= 1.0) {
                      break;
                   }
                   month += 1;
                   result = projectMonth(month, invBump, expDrop);
                   if (result.progress >= 1.0) {
                      achievedMonths.push(month);
                   }
                   if (bumpAchievedMonths.length == 0) {
                      if (result.bumpProgress >= 1.0) {
                         bumpAchievedMonths.push(month);
                      }
                   }
                   if (dropAchievedMonths.length == 0) {
                      if (result.dropProgress >= 1.0) {
                         dropAchievedMonths.push(month);
                      }
                   }
                   if (bothAchievedMonths.length == 0) {
                      if (result.bothProgress >= 1.0) {
                         bothAchievedMonths.push(month);
                      }
                   }
                   results.push(result)
                }
                if (achievedMonths.length == 0 || achievedMonths[0] > 0) {
                   if (result.progress >= 1.0) {
                      for (i = 1; i <= 5; i += 1) {
                         res = projectMonth(month + i, invBump, expDrop);
                         results.push(res);
                      }
                      endAge = ageTotalMonths + result.month;
                      let baseText = document.createElement('li');
                      baseText.appendChild(tag('span', 'FIRE Age: ', 'result-value'));
                      baseText.appendChild(document.createTextNode("You're on track to achieve fire in "));
                      baseText.appendChild(tag('span', achievedMonths[0].toFixed(0) + ' months, ', 'result-value'));
                      baseText.appendChild(document.createTextNode("when you're "));
                      baseText.appendChild(tag('span', toAge(endAge) + " old.", 'result-value'));
                      resultsList.appendChild(baseText);
                      outputText.appendChild(resultsList);
                      let chartDiv = tag('div', '', 'calculator-chart', 'base-chart');
                      outputText.appendChild(chartDiv);
                   } else {
                      let baseText = document.createElement('li');
                      baseText.appendChild(tag('span', 'Time to FIRE: ', 'result-value'));
                      baseText.appendChild(document.createTextNode("You're not on track to achieve FIRE by age 80."));
                      resultsList.appendChild(baseText);
                      outputText.appendChild(resultsList);
                   }
                   let recoHeading = document.createElement('h4');
                   recoHeading.innerHTML = 'Recommendations';
                   outputText.appendChild(recoHeading);
                   let recoList = document.createElement('ol');
                   let invBumpText = document.createElement('li');
                   let expDropText = document.createElement('li');
                   let bothText = document.createElement('li');
                   invBumpText.appendChild(tag('span', 'Increase Your Investing: ', 'result-value'));
                   expDropText.appendChild(tag('span', 'Decrease Your Spending: ', 'result-value'));
                   bothText.appendChild(tag('span', 'Do Both: ', 'result-value'));
                   if (result.progress >= 1.0) {
                      invBumpText.appendChild(document.createTextNode('If you '));
                      invBumpText.appendChild(tag('span', 'invest ' + toCurrency(invBump) + ' more ', 'result-value'));
                      invBumpText.appendChild(document.createTextNode("each month, you'll reach FIRE "));
                      invBumpText.appendChild(tag('span', (achievedMonths[0] - bumpAchievedMonths[0]).toFixed(0) + ' months ', 'result-value'));
                      invBumpText.appendChild(document.createTextNode('sooner.'));
                      invBumpText.appendChild(tag('div', '', 'calculator-chart', 'bump-chart'));
                      expDropText.appendChild(document.createTextNode('If you '));
                      expDropText.appendChild(tag('span', 'spend ' + toCurrency(expDrop) + ' less ', 'result-value'));
                      expDropText.appendChild(document.createTextNode("each month, you'll reduce your FIRE target by "));
                      expDropText.appendChild(tag('span', toCurrency(expDropValue), 'result-value'));
                      expDropText.appendChild(document.createTextNode(' and reach FIRE '));
                      expDropText.appendChild(tag('span', (achievedMonths[0] - dropAchievedMonths[0]).toFixed(0) + ' months ', 'result-value'));
                      expDropText.appendChild(document.createTextNode('sooner.'));
                      expDropText.appendChild(tag('div', '', 'calculator-chart', 'drop-chart'));
                      bothText.appendChild(document.createTextNode("If you do both, you'll reach FIRE "));
                      bothText.appendChild(tag('span', (achievedMonths[0] - bothAchievedMonths[0]).toFixed(0) + ' months ', 'result-value'));
                      bothText.appendChild(document.createTextNode('sooner.'));
                      bothText.appendChild(tag('div', '', 'calculator-chart', 'both-chart'));
                      recoList.appendChild(invBumpText);
                      recoList.appendChild(expDropText);
                      recoList.appendChild(bothText);
                      outputText.appendChild(recoList);
                   } else {
                      invBumpText.appendChild(document.createTextNode('Invest more each month to bring FIRE within reach.'));
                      expDropText.appendChild(document.createTextNode('Spend less each month to bring FIRE within reach.'));
                      recoList.appendChild(invBumpText);
                      recoList.appendChild(expDropText);
                      outputText.appendChild(recoList);
                   }
                } else {
                   outputText.appendChild(resultsList);
                }
                return outputText;
             }
             outputDiv.innerHTML = '';
             let outputHeading = document.createElement('h4');
             outputHeading.innerText = 'Results';
             outputDiv.appendChild(outputHeading);
             outputDiv.appendChild(outputResult());
          }
       } /* Set calculator to auto-update on input changes */
 
       function drawCharts() {
          data = results;
          if (chartsInitialized) {
             if (data[data.length - 1].progress >= 1) {
                dataStart = data[0].age / 12.0;
                dataEnd = data[data.length - 1].age / 12.0;
                let baseTable = new google.visualization.DataTable();
                baseTable.addColumn('number', 'Month');
                baseTable.addColumn('number', 'FIRE Balance');
                baseTable.addColumn('number', 'FIRE Target');
                let bumpTable = new google.visualization.DataTable();
                bumpTable.addColumn('number', 'Month');
                bumpTable.addColumn('number', 'FIRE Balance');
                bumpTable.addColumn('number', 'FIRE Target');
                let dropTable = new google.visualization.DataTable();
                dropTable.addColumn('number', 'Month');
                dropTable.addColumn('number', 'FIRE Balance');
                dropTable.addColumn('number', 'FIRE Target');
                let bothTable = new google.visualization.DataTable();
                bothTable.addColumn('number', 'Month');
                bothTable.addColumn('number', 'FIRE Balance');
                bothTable.addColumn('number', 'FIRE Target');
                let baseOptions = {
                   animation: {
                      duration: 100,
                      startup: true,
                      easing: 'inAndOut'
                   },
                   colors: ['#569D3A', 'black'],
                   hAxis: {
                      maxValue: dataEnd,
                      minValue: dataStart
                   },
                   legend: {
                      position: 'bottom'
                   },
                   vAxis: {
                     format: 'short',
                     gridlines: { count: 4 } 
                   },
                   width: '100%'
                };
                const dataSpan = (dataEnd - dataStart) * 12.0;
                let chartSample = Math.floor(dataSpan / 40.0);
                if(!chartSample) chartSample = 1;

                if(chartSample){
                  for (let i = 0; i < data.length; i += chartSample) {
                     baseTable.addRows([
                        [{
                           v: (data[i].age / 12.0),
                           f: toAge(data[i].age)
                        }, {
                           v: Math.round(data[i].balance),
                           f: abbreviateNumber(Math.round(data[i].balance))
                        }, {
                           v: Math.round(data[i].target),
                           f: abbreviateNumber(Math.round(data[i].target))
                        }, ]
                     ]);
                     bumpTable.addRows([
                        [{
                           v: (data[i].age / 12.0),
                           f: toAge(data[i].age)
                        }, {
                           v: Math.round(data[i].bumpBalance),
                           f: abbreviateNumber(Math.round(data[i].bumpBalance))
                        }, {
                           v: Math.round(data[i].target),
                           f: abbreviateNumber(Math.round(data[i].target))
                        }, ]
                     ]);
                     dropTable.addRows([
                        [{
                           v: (data[i].age / 12.0),
                           f: toAge(data[i].age)
                        }, {
                           v: Math.round(data[i].balance),
                           f: abbreviateNumber(Math.round(data[i].balance))
                        }, {
                           v: Math.round(data[i].dropTarget),
                           f: abbreviateNumber(Math.round(data[i].dropTarget))
                        }, ]
                     ]);
                     bothTable.addRows([
                        [{
                           v: (data[i].age / 12.0),
                           f: toAge(data[i].age)
                        }, {
                           v: Math.round(data[i].bumpBalance),
                           f: abbreviateNumber(Math.round(data[i].bumpBalance))
                        }, {
                           v: Math.round(data[i].dropTarget),
                           f: abbreviateNumber(Math.round(data[i].dropTarget))
                        }, ]
                     ]);
                  }
                }
                baseTable.addRows([
                   [{
                      v: (data[data.length - 1].age / 12.0),
                      f: toAge(data[data.length - 1].age)
                   }, {
                      v: Math.round(data[data.length - 1].balance),
                      f: abbreviateNumber(Math.round(data[data.length - 1].balance))
                   }, {
                      v: Math.round(data[data.length - 1].target),
                      f: abbreviateNumber(Math.round(data[data.length - 1].target))
                   }, ]
                ]);
                bumpTable.addRows([
                   [{
                      v: (data[data.length - 1].age / 12.0),
                      f: toAge(data[data.length - 1].age)
                   }, {
                      v: Math.round(data[data.length - 1].bumpBalance),
                      f: abbreviateNumber(Math.round(data[data.length - 1].bumpBalance))
                   }, {
                      v: Math.round(data[data.length - 1].target),
                      f: abbreviateNumber(Math.round(data[data.length - 1].target))
                   }, ]
                ]);
                dropTable.addRows([
                   [{
                      v: (data[data.length - 1].age / 12.0),
                      f: toAge(data[data.length - 1].age)
                   }, {
                      v: Math.round(data[data.length - 1].balance),
                      f: abbreviateNumber(Math.round(data[data.length - 1].balance))
                   }, {
                      v: Math.round(data[data.length - 1].dropTarget),
                      f: abbreviateNumber(Math.round(data[data.length - 1].dropTarget))
                   }, ]
                ]);
                bothTable.addRows([
                   [{
                      v: (data[data.length - 1].age / 12.0),
                      f: toAge(data[data.length - 1].age)
                   }, {
                      v: Math.round(data[data.length - 1].bumpBalance),
                      f: abbreviateNumber(Math.round(data[data.length - 1].bumpBalance))
                   }, {
                      v: Math.round(data[data.length - 1].dropTarget),
                      f: abbreviateNumber(Math.round(data[data.length - 1].dropTarget))
                   }, ]
                ]);

                baseChartElement = new google.visualization.LineChart(document.getElementById('base-chart'));
                baseChartElement.draw(baseTable, baseOptions);
                bumpChartElement = new google.visualization.LineChart(document.getElementById('bump-chart'));
                bumpChartElement.draw(bumpTable, baseOptions);
                dropChartElement = new google.visualization.LineChart(document.getElementById('drop-chart'));
                dropChartElement.draw(dropTable, baseOptions);
                bothChartElement = new google.visualization.LineChart(document.getElementById('both-chart'));
                bothChartElement.draw(bothTable, baseOptions);
             }
          }
       }

      function abbreviateNumber (num) {
         if (num >= 1000000000) {
             return '$' + (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
         }
         if (num >= 1000000) {
             return '$' + (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
         }
         if (num >= 1000) {
             return '$' + (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
         }
         return '$' + num;
     }
 
       function chartReady() {
          chartsInitialized = true;
          updateResults();
          drawCharts();
       }
       google.charts.load('current', {
          'packages': ['corechart']
       });
       google.charts.setOnLoadCallback(chartReady);
       updateResults();
    }
 });