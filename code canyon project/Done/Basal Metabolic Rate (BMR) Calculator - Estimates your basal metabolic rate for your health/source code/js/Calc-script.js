jQuery(document).ready(function($){
    let cl_gender, cl_age, cl_height_1, cl_weight_1, cl_height_2, cl_height_22, cl_weight_2, cl_activity, 
    cl_goal, cl_activity_txt, cl_goal_txt, txt_msg = "";
    let rs_vl, cl_unit = 2;

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });

    $("#calc_btn").on("click", function(){
        let valid = validate();
        if(valid){
            $("#err_msg").hide();
            calc();
        } else {
            $("#err_msg").slideDown();
        }
    });

    $(".cl-required").on("input", function(){
        $("#err_msg").hide();
    });

    $(".gen_check").on("click", function(){
        $("#err_msg").hide();
        cl_gender = $(this).data("value");
        $(".gen_check").removeClass("active");
        $(this).addClass("active");
    });

    $(".unit_check").on("click", function(){
        $("#err_msg").hide();
        cl_unit = Number($(this).data("value"));
        $(".unit_check").removeClass("active");
        $(this).addClass("active");
        if(cl_unit == 1){
            $("#metric_inp").css({"display":"flex"});
            $("#imperial_inp").hide();
        } else {
            $("#metric_inp").hide();
            $("#imperial_inp").css({"display":"flex"});
        }
    });

    function calc(){
        rs_vl_1 = 0;
        if(cl_gender == "Male"){
            rs_vl_1 = 10 * cl_weight + 6.25 * cl_height - 5 * cl_age + 5;
        } else {
            rs_vl_1 = 10 * cl_weight + 6.25 * cl_height - 5 * cl_age - 161;
        }

        rs_vl_2 = rs_vl_1 * cl_activity;

        animate_counter('#rs_vl_1',(rs_vl_1));
        animate_counter('#rs_vl_2',(rs_vl_2));
    }

    function validate(){
        cl_age = Number($("#cl_age").val());

        if(cl_unit == 1){
            cl_height = Number($("#cl_height_1").val());
            cl_weight = Number($("#cl_weight_1").val());
        } else {
            cl_height = ((Number($("#cl_height_2").val())*12) + Number($("#cl_height_22").val())) * 2.54;
            cl_weight = Number($("#cl_weight_2").val()) * 0.45359237;
        }
        cl_activity = Number($("#cl_activity").val());

        if(cl_gender && cl_age && cl_height &&cl_weight && cl_activity){
            return true;
        } else {
            return false;
        }
    }
    function animate_counter(id,value) {
        $(id).text(value);

        $(id).each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).html(nft.format(now)+"<span style='font-size:20px;'>kcal</span>");
                }
            });
        });
    }
});