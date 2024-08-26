jQuery(document).ready(function($){
    let current_fs, next_fs, previous_fs, con_1 = false, con_2 = false;
    let cl_inputs = [], rs_value = 0;

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });

    $(".btn-yn").click(function(){
        if(!$(this).hasClass("sp-btn")){
            let parent = $(this).closest("fieldset");
            parent.find(".f-input").val($(this).data("value"));
            parent.find(".btn-yn").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(".sp-btn").click(function(){
        let parent = $(this).closest("fieldset");

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }

        let t=0;
        $(".sp-btn").each(function(index, elm){
            if($(elm).hasClass("active")){
                t = t + Number($(this).data("value"));
            }
        });
        parent.find(".f-input").val(t);
    });
    $(".con-1-btn").click(function(){
        let parent = $(this).closest("fieldset");
        if($(this).data("value") == "yes"){
            $(".con-1").show();
            parent.find(".form-control").addClass("f-input");
            con_1 = true;
        } else {
            $(".con-1").hide();
            parent.find(".form-control").removeClass("f-input");
            con_1 = false;
        }
        parent.find(".btn-yn").removeClass("active");
        $(this).addClass("active");
    });
    $(".con-2-btn").click(function(){
        let parent = $(this).closest("fieldset");
        if($(this).data("value") == "yes"){
            $(".con-2").show();
            parent.find(".form-control").addClass("f-input");
            con_2 = true;
        } else {
            $(".con-2").hide();
            parent.find(".form-control").removeClass("f-input");
            con_2 = false;
        }
        parent.find(".btn-yn").removeClass("active");
        $(this).addClass("active");
    });

    $(".next").click(function(){            
        current_fs = $(this).parent().parent();
        next_fs = $(this).parent().parent().next();
        
        let vl = current_fs.find(".f-input").val();
        if(vl != "undefined" && vl != "-"){
            next_fs.show();
            current_fs.hide();

            if($(this).attr("id") == "calcBtn"){
                calculateRs();
            }
        }
    });

    $(".prev").click(function(){
        current_fs = $(this).parent().parent();
        previous_fs = $(this).parent().parent().prev();
                    
        previous_fs.show(); 
        current_fs.hide();
    });
    $("#start_over").click(function(){
        current_fs = $(this).parent().parent();
        let first_step = $("#first_step");
                    
        first_step.show(); 
        current_fs.hide();
        $('.f-input').val("-");
        $('#in_7, #in_8').val("");
        $(".btn-yn").removeClass("active");
        $('.chart-gauge').html("");
        $('.con-1, .con-2').hide();
    });

    function calculateRs(){
        let total = 0;
        $('.f-input').each(function(){
            let vl = removeSign($(this).val());
            total = total + vl;
        });

        in_7 = Number($("#in_7").val());
        in_8 = Number($("#in_8").val());

        total = total - in_7 - in_8;

        let dv = in_7/in_8;
        let ext = 0;
        if(dv > 0 && dv <= 1){
            ext = 0;
        } else if(dv > 1 && dv <= 2){
            ext = 4;
        } else if(dv > 2 && dv <= 3){
            ext = 6;
        } else if(dv > 3 && dv <= 4){
            ext = 23;
        } else if(dv > 4 && dv <= 5){
            ext = 24;
        } else if(dv > 5 && dv <= 6){
            ext = 25;
        } else if(dv > 6 && dv <= 8){
            ext = 28;
        } else if(dv > 8 && dv <= 10){
            ext = 29;
        } else if(dv > 10){
            ext = 30;
        }

        if(total < 0) total = 0;
        if(total > 100) total = 100;

        let txt = "", vl = 0;
        if(total > 0 && total < 14){
            txt = "FICO 400 - 550";
            vl = ((100/7) * 1)-((100/7)/2);
        } else if(total >= 14 && total < 30){
            txt = "FICO 550 - 620";
            vl = ((100/7) * 2)-((100/7)/2);
        } else if(total >= 30 && total < 50){
            txt = "FICO 620 - 680";
            vl = ((100/7) * 3)-((100/7)/2);
        } else if(total >= 50 && total < 65){
            txt = "FICO 680 - 720";
            vl = ((100/7) * 4)-((100/7)/2);
        } else if(total >= 65 && total < 77){
            txt = "FICO 720 - 760";
            vl = ((100/7) * 5)-((100/7)/2);
        } else if(total >= 77 && total < 90){
            txt = "FICO 760 - 810";
            vl = ((100/7) * 6)-((100/7)/2);
        } else if(total >= 90){
            txt = "FICO 810 - 850";
            vl = ((100/7) * 7)-((100/7)/2);
        }

        $("#score_rs").text(txt);
        buildChart(vl, txt);
    }

    function removeSign(vl){
        return Number(vl.replace(/,/g,''));
    }

    function buildChart(vl, txt){
        var name = "azerty";

        var value = vl;

        var gaugeMaxValue = 100; 

        var percentValue = value / gaugeMaxValue; 

        var needleClient;

        (function(){

        var barWidth, chart, chartInset, degToRad, repaintGauge,
            height, margin, numSections, padRad, percToDeg, percToRad, 
            percent, radius, sectionIndx, svg, totalPercent, width,
            valueText, formatValue, k;

        percent = percentValue;

        numSections = 1;
        sectionPerc = 1 / numSections / 2;
        padRad = 0.025;
        chartInset = 10;
            
        // Orientation of gauge:
        totalPercent = .75;

        el = d3.select('.chart-gauge');

        margin = {
            top: 30,
            right: 30,
            bottom: 30,
            left: 30
        };

        width = el[0][0].offsetWidth - margin.left - margin.right;
        height = width;
        radius = Math.min(width, height) / 2;
        barWidth = 40 * width / 300;



        //Utility methods 

        percToDeg = function(perc) {
            return perc * 360;
        };

        percToRad = function(perc) {
            return degToRad(percToDeg(perc));
        };

        degToRad = function(deg) {
            return deg * Math.PI / 180;
        };

        // Create SVG element
        svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);

        // Add layer for the panel
        chart = svg.append('g').attr('transform', "translate(" + ((width) / 2 + margin.left) + ", " + ((height + margin.top) / 2) + ")");


        chart.append('path').attr('class', "arc chart-first");
        chart.append('path').attr('class', "arc chart-second");
        chart.append('path').attr('class', "arc chart-third");
        chart.append('path').attr('class', "arc chart-fourth");
        chart.append('path').attr('class', "arc chart-fifth");
        chart.append('path').attr('class', "arc chart-sixth");
        chart.append('path').attr('class', "arc chart-seventh");
            
        valueText = chart.append("text")
                            .attr('id', "Value")
                            .attr("font-size",16)
                            .attr("text-anchor","middle")
                            .attr("dy",".5em")
                            .style("fill", '#000000');
        formatValue = d3.format('1%');

        arc7 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
        arc6 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
        arc5 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
        arc4 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
        arc3 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
        arc2 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
        arc1 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)

        repaintGauge = function () 
        {
            perc = 0.5;
            var next_start = totalPercent;
            arcStartRad = percToRad(next_start);
            arcEndRad = arcStartRad + percToRad(perc / 7);
            next_start += perc / 7;


            arc1.startAngle(arcStartRad).endAngle(arcEndRad);

            arcStartRad = percToRad(next_start);
            arcEndRad = arcStartRad + percToRad(perc / 7);
            next_start += perc / 7;

            arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
            
            arcStartRad = percToRad(next_start);
            arcEndRad = arcStartRad + percToRad(perc / 7);
            next_start += perc / 7;

            arc3.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
            
            arcStartRad = percToRad(next_start);
            arcEndRad = arcStartRad + percToRad(perc / 7);
            next_start += perc / 7;

            arc4.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
            
            arcStartRad = percToRad(next_start);
            arcEndRad = arcStartRad + percToRad(perc / 7);
            next_start += perc / 7;

            arc5.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
            
            arcStartRad = percToRad(next_start);
            arcEndRad = arcStartRad + percToRad(perc / 7);
            next_start += perc / 7;

            arc6.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

            arcStartRad = percToRad(next_start);
            arcEndRad = arcStartRad + percToRad(perc / 7);
            
            arc7.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

            chart.select(".chart-first").attr('d', arc1);
            chart.select(".chart-second").attr('d', arc2);
            chart.select(".chart-third").attr('d', arc3);
            chart.select(".chart-fourth").attr('d', arc4);
            chart.select(".chart-fifth").attr('d', arc5);
            chart.select(".chart-sixth").attr('d', arc6);
            chart.select(".chart-seventh").attr('d', arc7);

        }
            var dataset = [{metric:name, value: value}]

            var texts = svg.selectAll("text")
                        .data(dataset)
                        .enter();
            
            texts.append("text")
                .text(function(){
                    return dataset[0].metric;
                })
                .attr('id', "Name")
                .attr('transform', "translate(" + ((width + margin.left) / 6) + ", " + ((height + margin.top) / 1.5) + ")")
                .attr("font-size",25)
                .style("fill", "#000000");
            

            texts.append("text")
                .text(function(){
                    return 0;
                })
                .attr('id', 'scale0')
                .attr('transform', "translate(" + ((width + margin.left) / 100 ) + ", " + ((height + margin.top) / 2) + ")")
                .attr("font-size", 15)
                .style("fill", "#000000");
                            
            texts.append("text")
                .text(function(){
                    return gaugeMaxValue/2;
                })
                .attr('id', 'scale10')
                .attr('transform', "translate(" + ((width + margin.left) / 2.15 ) + ", " + ((height + margin.top) / 30) + ")")
                .attr("font-size", 15)
                .style("fill", "#000000");
                            
                            
            texts.append("text")
                .text(function(){
                    return gaugeMaxValue;
                })
                .attr('id', 'scale20')
                .attr('transform', "translate(" + ((width + margin.left) / 1.03 ) + ", " + ((height + margin.top) / 2) + ")")
                .attr("font-size", 15)
                .style("fill", "#000000");
            
        var Needle = (function() {

            //Helper function that returns the `d` value for moving the needle
            var recalcPointerPos = function(perc) {
            var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
            thetaRad = percToRad(perc / 2);
            centerX = 0;
            centerY = 0;
            topX = centerX - this.len * Math.cos(thetaRad);
            topY = centerY - this.len * Math.sin(thetaRad);
            leftX = centerX - this.radius * Math.cos(thetaRad - Math.PI / 2);
            leftY = centerY - this.radius * Math.sin(thetaRad - Math.PI / 2);
            rightX = centerX - this.radius * Math.cos(thetaRad + Math.PI / 2);
            rightY = centerY - this.radius * Math.sin(thetaRad + Math.PI / 2);
            
                
                return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
            };

            function Needle(el) {
            this.el = el;
            this.len = width / 2.5;
            this.radius = this.len / 8;
            }

            Needle.prototype.render = function() {
            this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', this.radius);
            return this.el.append('path').attr('class', 'needle').attr('id', 'client-needle').attr('d', recalcPointerPos.call(this, 0));
            };

            Needle.prototype.moveTo = function(perc) {
            var self,
                oldValue = this.perc || 0;

            this.perc = perc;
            self = this;

            // Reset pointer position
            this.el.transition().delay(100).ease('quad').duration(200).select('.needle').tween('reset-progress', function() {
                return function(percentOfPercent) {
                var progress = (1 - percentOfPercent) * oldValue;
                
                    
                        
                    
                repaintGauge(progress);
                return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
                };
            });

            this.el.transition().delay(300).ease('bounce').duration(1500).select('.needle').tween('progress', function() {
                return function(percentOfPercent) {
                var progress = percentOfPercent * perc;
                
                repaintGauge(progress);
                
                var thetaRad = percToRad(progress / 2);
                var textX = - (self.len + 45) * Math.cos(thetaRad);
                var textY = - (self.len + 45) * Math.sin(thetaRad);

                valueText.text("")
                    .attr('transform', "translate("+textX+","+textY+")")

                return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
                };
            });

            };
            return Needle;
        })();
            

            
        needle = new Needle(chart);
        needle.render();
        needle.moveTo(percent);
        })();
    }


   
});