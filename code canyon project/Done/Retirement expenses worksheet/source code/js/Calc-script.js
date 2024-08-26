jQuery(document).ready(function($){

    let curr_symbol = "$";

    let exp_type = "Monthly", total_exp = 0, exp_parant = "Housing", exp_con = "con_1";
    let data_obj = {}, ctg_arr = [];

    console.log(exp_type);

    $("#in_6 option").each(function(vl) {
        let ctg = $("#in_6 option").eq(vl).text();

        data_obj[ctg] = 0;
        ctg_arr.push(ctg);
    });

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 2,
        minimumValue               : 0
    };
    const anElement1 = AutoNumeric.multiple('.cl-required', numOptionCurrency);

    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $(".curr-sign").text(curr_symbol);

    $("#in_6").on("change", function(){
        let vl = $(this).val();
        let name = $("#in_6 option:selected").text();

        exp_parant = name;
        exp_con = vl;

        $(".expense-in-sec").addClass("ds-none");
        $("."+exp_con).removeClass("ds-none");
    });

    $(document).on("input", ".ex-in", function(){
        buildExpenseTable();
    });

    $('.option-item').on('click', function(){
        $(".option-item").removeClass("is-active");
        $(this).addClass("is-active");

        exp_type = $(this).data("value");

        $("#exp_type").text(exp_type);

        buildExpenseTable();
    });

    $('#btn_download').on('click', function(){
        $(this).prop('disabled', true);
        $('#btn_download').text("Downloading....");
        let tbl_1 = $("#tbl_1").html();
        $("#pdf_tbl_1").html(tbl_1);

        html2canvas(document.getElementById('exp_graph')).then(function(canvas) {
            $("#pdf_graph").html(canvas);
            $("#pdf_graph canvas").css('width', 700);
            $("#pdf_graph canvas").css('height', 360);
            setTimeout(() => {
                genPDF();
                $('#btn_download').prop('disabled', false);
                $('#btn_download').text("Download");
            }, 500);
        });
    });

    function genPDF(){
        var d = new Date();
        let date_time = d.getMonth() + 1+"_"+ d.getDate() + "_"+d.getFullYear()+"_"+d.getHours()+"_"+d.getMinutes()+"_"+d.getSeconds();
        var element = document.getElementById('pdf_data');
        html2pdf(element, {
            margin:       10,
            enableLinks:  true,
            filename:     'Retirement expenses worksheet'+date_time+".pdf",
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, logging: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });
    }

    function buildExpenseTable(){
        $("#"+exp_con+"_data").html("");
        total_exp = 0;

        let vl = 0, exp_label = "", ex_row = "", total_in = $("."+exp_con+"_input").length, total_vl_in = 0;

        if(total_in > 1){
            let ctg_total = 0;

            $("."+exp_con+"_input").each(function(i, elm){
                vl = removeSign($(elm).val());
                if(vl){
                    exp_label = $(elm).data("label");

                    ex_row = ex_row + `
                        <tr>
                            <td class="brd-left">${exp_label}</td>
                            <td class="text-right exp-value">${curr_symbol}+${nftd.format(vl)}</td>
                        </tr>
                    `;
                    ctg_total = ctg_total + vl;
                    total_vl_in++;
                }
            });

            if(total_vl_in){
                ex_row = `
                    <tr>
                        <th class="text-left" rowspan="${total_in+1}">${exp_parant}</th>
                    </tr>
                ` + ex_row;
            }

            data_obj[exp_parant] = ctg_total;
            
        } else {
            vl = removeSign($("."+exp_con+"_input").val());
            exp_label = $("."+exp_con+"_input").data("label");

            if(vl){
                ex_row = `
                        <tr>
                            <th class="text-left" colspan="2">${exp_label}</th>
                            <td class="text-right exp-value">${curr_symbol}+${nftd.format(vl)}</td>
                        </tr>
                    `;
                total_vl_in++;
            }
        }

        if(total_vl_in){
            $("#"+exp_con+"_data").html(ex_row);
        } else {
            $("#"+exp_con+"_data").html("");
        }

        $(".ex-in").each(function(x, element){
            let ex_vl = removeSign($(element).val());
            total_exp = total_exp + ex_vl;
        });

        $("#rs_6").text(curr_symbol + nftd.format(total_exp));

        if(exp_type == "Annually"){
            total_exp = total_exp/12;
        }
        $("#rs_1, #pdf_rs_1").text(curr_symbol + nftd.format(total_exp));
        
        if(!total_exp){
            $("#no_ex_data").removeClass("ds-none");
            $("#graph_sec").addClass("ds-none");
        } else {
            $("#no_ex_data").addClass("ds-none");
            $("#graph_sec").removeClass("ds-none");
            buildGraph();
        }


    }

    function buildGraph(){
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });

        Highcharts.chart('exp_graph', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ctg_arr,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valuePrefix: '$'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Expense',
                data: [data_obj[ctg_arr[0]], data_obj[ctg_arr[1]], data_obj[ctg_arr[2]], data_obj[ctg_arr[3]], data_obj[ctg_arr[4]], data_obj[ctg_arr[5]], data_obj[ctg_arr[6]], data_obj[ctg_arr[7]]],
                color: "#963BA4" //change color here
            }]
        });
    }

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ""));
    }

    function toDataUrl(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    let src = $("#com_logo").attr("src");
    toDataUrl(src, function(myBase64) {
        $("#com_logo").attr("src", myBase64);
    });
});