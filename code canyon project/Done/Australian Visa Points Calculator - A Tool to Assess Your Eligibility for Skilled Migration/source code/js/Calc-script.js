jQuery(($) => {
    let total_score =  80;
    let txt_msg = "";

    $(".btn-prev").on("click", function(){
        let parent = $(this).closest(".left-contentbox");

        parent.removeClass("fade-in");
        parent.addClass("slide-right");

        setTimeout(() => {
            parent.removeClass("is-active");
            parent.removeClass("slide-right");
            parent.prev(".left-contentbox").addClass("fade-in");
        }, 300);
    });

    $(".btn-next").on("click", function(){
        let parent = $(this).closest(".left-contentbox");

        parent.removeClass("fade-in");
        parent.addClass("slide-left");

        setTimeout(() => {
            parent.removeClass("is-active");
            parent.removeClass("slide-left");
            parent.next(".left-contentbox").addClass("fade-in");
        }, 300);
    });

    $(".btn-startover").on("click", function(){
        let parent = $(this).closest(".left-contentbox");

        parent.removeClass("fade-in");
        parent.addClass("slide-left");

        setTimeout(() => {
            parent.removeClass("is-active");
            parent.removeClass("slide-left");
            $(".left-contentbox:eq(0)").addClass("fade-in");
        }, 300);
    });

    $(".fr-input").on("input", function(){
        $(this).removeClass("err-input")
    });

    $("#fr_submit_btn").on("click", function(){
        let total_in = $(".fr-input").length;
        let x = 0;

        $(".fr-input").each(function(i, elm){
            let vl = $(elm).val().trim();
            let type = $(elm).attr("type");

            if(type == "email"){
                vl = validateEmailAdd(vl);
            }

            if(vl){
                x++;
                $(elm).removeClass("err-input");
            } else {
                $(elm).addClass("err-input");
            }
        });

        if(total_in == x){
            let fr_name = $("#fr_name").val();
            let fr_email = $("#fr_email").val();
            let fr_phone = $("#fr_phone").val();

            txt_msg = `Full Name: ${fr_name}
Email: ${fr_email}
Phone: ${fr_phone}

`;
        
            $("#rs_table tr").each(function(i, elm){
                let score_title = $(elm).find(".section-title").text();
                let score = $(elm).find(".rs-vl").text();
                txt_msg = txt_msg + `${score_title}: ${score}
`;
            });

        txt_msg = txt_msg + `
Total Score: ${$("#your_score").text()}`;

            $("#form-field-name").val(fr_name);
            $("#form-field-field_14c966a").val(fr_email);
            $("#form-field-field_91db879").val(fr_phone);
            $("#form-field-field_c6d382d").val(txt_msg);
            $("#poin_test_form").find('button[type="submit"]').click();


            setTimeout(() => {
                $("#fr_name").val("");
                $("#fr_email").val("");
                $("#fr_phone").val("");
            }, 500);
        }
    });

    $(".section-title").on("click", function(){
        let parent = $(this).closest("tr");
        var index = parent.index('#rs_table tr');

        $(".left-contentbox").removeClass("is-active");
        $(".left-contentbox").removeClass("fade-in");
        $(".left-contentbox").removeClass("slide-left");
        $(".left-contentbox").removeClass("slide-right");

        $(`.left-contentbox:eq(${index})`).addClass("fade-in");
    });

    $(".check-box").on("click", function(){
        let parent = $(this).closest(".left-contentbox");
        let score = Number($(this).data("value"));

        if($(this).hasClass("con-check")){
            parent.find(".check-box").removeClass("is-active");
            
            if(Number($(this).data("value")) > 0){
                $(".con-2").removeClass("ds-none");
            } else {
                $(".con-2").addClass("ds-none"); 
            }
        } else {                    
            if($(this).hasClass("con-check-2")){
                parent.find(".con-check-2").removeClass("is-active");
                score = Number($(".con-check.is-active").data("value")) + Number($(this).data("value"));
            } else {
                parent.find(".check-box").removeClass("is-active");                                          
            }
        }

        $(this).addClass("is-active");



        parent.find(".section-score").text(score);

        var index = parent.index('div.left-contentbox');
        
        $(`#rs_table tr:eq(${index}) td.rs-vl`).text(score);

        let your_score = 0;
        let con_vl = 0;
        
        $("#rs_table tr").each(function(i, elm){
            let score = $(elm).find(".rs-vl").text();

            if($(elm).find(".rs-vl").hasClass("con-vl")){
                con_vl = con_vl + Number(score);
            } else {
                your_score = your_score + Number(score);
            }
        });

        if(con_vl > 20){
            your_score = your_score + 20;
        } else {
            your_score = your_score + con_vl;
        }

        let x = (100/total_score) * your_score;

        let color = "#1ca1e4";

        if(your_score >= 65){
            color = "#009623";
            $("#success_sec").show();
        } else {
            $("#success_sec").hide();
        }

        $("#your_score").text(your_score);

        $("#progress_bar").css({"background":`radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(${color} ${x}%, #F0F0F0 0)`});
    });

    // Validate email input field
    function validateEmailAdd(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});