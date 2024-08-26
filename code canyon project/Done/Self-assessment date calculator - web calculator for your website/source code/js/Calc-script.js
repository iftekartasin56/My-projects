jQuery(document).ready(function ($) {
    let dt, isValid = false;
    $("#cl_date").datepicker({
        autoClose: true,
        viewStart: 2,
        format: 'dd/mm/yyyy'
    });

    $("#cl_date").on("change", function(){
        $("#cl_error_2").hide();
        let cl_date = $(this).val();

        if(cl_date){
            let dateArr = cl_date.split("/");
            if(dateArr.length == 3){
                let d = new Date(dateArr[2]+'-'+dateArr[1]+'-'+dateArr[0]);
                dt = d;
                calc(d);
            }
        } else {
            calc(null);
        }
    });
    let rsArr = [];
    function calc(date){
        rsArr = [];
        if(date){
            let year = date.getFullYear();
            let df_date = new Date(year+'-4-5');
            let first_year, last_year;

            if(date <= df_date){
                first_year = (year-1);
                last_year = year;
            } else {
                first_year = year;
                last_year = (year+1);
            }

            rsArr[0] = first_year+"/"+last_year;
            rsArr[1] = "5 October "+last_year;
            rsArr[2] = "6 April "+first_year+" and 5th April "+last_year;
            rsArr[3] = "31 January "+(last_year+1);
            rsArr[4] = "31 January "+(last_year+1);
            rsArr[5] = "31 July "+(last_year+1);
            rsArr[6] = "31 January "+(last_year+2);
            
            $("#rs_1").text(rsArr[0]);
            $("#rs_2").text(rsArr[1]);
            $("#rs_3").text(rsArr[2]);
            $("#rs_4").text(rsArr[3]);
            $("#rs_5").text(rsArr[4]);
            $("#rs_6").text(rsArr[5]);
            $("#rs_7").text(rsArr[6]);

            isValid = true;
        } else {
            $(".cl-vl").text("-");
            isValid = false;
        }
    }

    $("#genPDF").on("click", function(){
        if(isValid){
            $("#cl_error_2").hide();
            $("#cl_alert").slideDown();
            setPDFData();
            genPDF();
        } else {
            $("#cl_error_2").slideDown();
        }
    });

    function setPDFData(){
        $("#pdf_data").html(
            `
                <tr>
                    <td>The year end date for your business</td>
                    <td>${$("#cl_date").val()}</td>
                </tr>
                <tr>
                    <td>Your accounting period runs in the tax year</td>
                    <td>${rsArr[0]}</td>
                </tr>
                <tr>
                    <td>If you have not already registered for self-assessment, you may do this by</td>
                    <td>${rsArr[1]}</td>
                </tr>
                <tr>
                    <td>Any income made during this period will be assessed in your self-assessment</td>
                    <td>${rsArr[2]}</td>
                </tr>
                <tr>
                    <td>Your self assessment for this tax year is due by</td>
                    <td>${rsArr[3]}</td>
                </tr>
                <tr>
                    <td>Your 1st Payment on Account (POA) for this tax year is due.</td>
                    <td>${rsArr[4]}</td>
                </tr>
                <tr>
                    <td>Your 2nd POA for this tax year is due</td>
                    <td>${rsArr[5]}</td>
                </tr>
                <tr>
                    <td>Balancing charge: If your have under/overpaid tax for this tax year, you should claim this by</td>
                    <td>${rsArr[6]}</td>
                </tr>
            `
        );
    }

    function genPDF(){
        var d = new Date();
        let date_time = 'Self-assessment-date-calculator_'+d.getMonth() + 1+"_"+ d.getDate() + "_"+d.getFullYear()+"_"+d.getHours()+"_"+d.getMinutes()+"_"+d.getSeconds();
        var element = document.getElementById('pdf_sec');
        html2pdf(element, {
            margin:       10,
            filename:     'report_'+date_time+".pdf",
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, logging: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });
    }

});