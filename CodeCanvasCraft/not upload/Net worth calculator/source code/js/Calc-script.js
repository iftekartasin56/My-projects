jQuery(document).ready(function ($) {
    const hm_cl4_numOptionCurrency = {
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        decimalCharacterAlternative: ".",
        currencySymbol: "",
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces: 2,
        minimumValue: 0
    };

    AutoNumeric.multiple(".cl-curr", hm_cl4_numOptionCurrency);

    const hm_cl4_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    function hm_cl4_removeComma(num) {
        return Number(num.replace(/[$,%]/g, ""));
    }

    var maxClicks = 3; // Maximum number of allowed clicks

    $("#hm_cl4 .add-line-section").click(function () {
        var button = $(this);
        var type = button.data("type");
        var length = $(`[id^="${type}_value_"]`).length || 0;
        var titleLength = $(`[id^="${type}_title_"]`).length || 0;
        var clicks = button.data("clicks") || 0;
        var targetContainerId = button.data("target");

        if (clicks < maxClicks) {
            var html = `
        <div class="input-row">
            <div class="col-md-8">
            <div class="input-section">
                <div class="mid-left-head extra_input" id="${type}_title_${titleLength + 1
                }"></div>
                <img src="https://i.postimg.cc/KYFwZJbF/x-icon.png" class="delete-line" alt=""/>
                <input type="text" class="form-control2" id="${type}_input_title_${titleLength + 1
                }" value=""/>
            </div>
            </div>
            <div class="col-md-4">
            <div class="input-section form-group">
                <span class="prepend-text">$</span>
                <input type="text" class="form-control cl-input cl-curr"
                placeholder="0" placeholder="0" id="${type}_value_${length + 1
                }" value=""/>
            </div>
            </div>
        </div>
    `;

            $("#" + targetContainerId).append(html);
            button.data("clicks", clicks + 1);
            new AutoNumeric(`#${type}_value_${length + 1}`, hm_cl4_numOptionCurrency);
        }

        hm_cl4_rerender();
    });

    function hm_cl4_calculateNetWorth() {
        var cashLength = $('[id^="cash_value_"]').length;
        var longLength = $('[id^="long_value_"]').length;
        var propertyLength = $('[id^="property_value_"]').length;
        var liabilityLength = $('[id^="liability_value_"]').length;

        const cashValues = [];
        for (let i = 1; i <= cashLength; i++) {
            cashValues.push(hm_cl4_removeComma($(`#cash_value_${i}`).val()));
        }

        const longValues = [];
        for (let i = 1; i <= longLength; i++) {
            longValues.push(hm_cl4_removeComma($(`#long_value_${i}`).val()));
        }

        const propertyValues = [];
        for (let i = 1; i <= propertyLength; i++) {
            propertyValues.push(hm_cl4_removeComma($(`#property_value_${i}`).val()));
        }

        const liabilityValues = [];
        for (let i = 1; i <= liabilityLength; i++) {
            liabilityValues.push(hm_cl4_removeComma($(`#liability_value_${i}`).val()));
        }

        const totalCash = cashValues.reduce((acc, curr) => acc + curr, 0);
        const totalLong = longValues.reduce((acc, curr) => acc + curr, 0);
        const totalProperty = propertyValues.reduce(
            (acc, curr) => acc + curr,
            0
        );
        const totalLiability = liabilityValues.reduce(
            (acc, curr) => acc + curr,
            0
        );

        const totalAssets = totalCash + totalLong + totalProperty;
        const netWorth = totalAssets - totalLiability;

        $("#hm_cl4_total_assets").text("$" + hm_cl4_nftd.format(totalAssets));
        $("#hm_cl4_total_liability").text("$" + hm_cl4_nftd.format(totalLiability));
        $("#hm_cl4_net_worth").text("$" + hm_cl4_nftd.format(netWorth));
    }

    function hm_cl4_rerender() {
        $(
            '[id^="cash_value_"], [id^="long_value_"], [id^="property_value_"], [id^="liability_value_"]'
        ).each(function () {
            $(this).on("input", function () {
                hm_cl4_calculateNetWorth();
            });
        });

        $(
            '[id^="cash_input_title_"], [id^="long_input_title_"], [id^="property_input_title_"], [id^="liability_input_title_"]'
        ).each(function () {
            $(this).on("input", function () {
                var inputValue = $(this).val();
                var elementId = $(this).attr("id");

                // Extract the necessary values from the input element's ID
                var idParts = elementId.split("_");
                var type = idParts[0];
                var titleLength = parseInt(idParts[3]);

                // // Construct the ID of the element where you want to set the value
                var targetElementId = `${type}_title_${titleLength}`;

                // // Set the value on the target element
                $("#" + targetElementId).text(inputValue);
            });
        });
    }

    hm_cl4_rerender();

    $(document).on("click", ".delete-line", function () {
        console.log("test");
        var button = $(this).closest(".mid-section").find(".add-line-section");
        var clicks = button.data("clicks") || 0;
        if (clicks > 0) {
            button.data("clicks", clicks - 1);
        }
        $(this).closest(".input-row").remove();
        hm_cl4_rerender();
        hm_cl4_calculateNetWorth();
    });

    $("#hm_cl4_print").on("click", function () {
        var tableBodies = {
            cash: $("#cash_table"),
            long: $("#long_table"),
            property: $("#property_table"),
            liability: $("#liability_table"),
        };

        var categorySums = {
            cash: 0,
            long: 0,
            property: 0,
            liability: 0,
        };

        // Clear the table bodies before appending new rows
        $.each(tableBodies, function (type, tableBody) {
            tableBody.empty();
        });

        $(
            '[id^="cash_title_"], [id^="long_title_"], [id^="property_title_"], [id^="liability_title_"]'
        ).each(function () {
            var elementId = $(this).attr("id");
            var inputValue = $(`#${elementId.replace("title", "value")}`).val() || "0";
            var titleValue = $(this).text();
            var row = `<tr><td class="left_left_td">${titleValue}</td><td class="left_right_td">$${inputValue}</td></tr>`;

            // Extract the type from the element ID
            var type = elementId.split("_")[0];

            // Append the row to the respective tbody element based on the type
            tableBodies[type].append(row);

            // Calculate the sum for the corresponding category
            // var value = parseFloat(inputValue.replace(/[^0-9.-]+/g, ""));
            categorySums[type] += hm_cl4_removeComma(inputValue);
        });

        // Display the category sums
        $("#cash_total").text("$" + hm_cl4_nftd.format(categorySums.cash));
        $("#long_total").text("$" + hm_cl4_nftd.format(categorySums.long));
        $("#property_total").text("$" + hm_cl4_nftd.format(categorySums.property));
        $("#liability_total").text("$" + hm_cl4_nftd.format(categorySums.liability));

        // Calculate the total assets and net worth
        var totalAssets =
            categorySums.cash + categorySums.long + categorySums.property;
        var netWorth = totalAssets - categorySums.liability;

        // Display the total assets and net worth
        $("#total_net_worth").text("$" + hm_cl4_nftd.format(netWorth));

    });

    $("#hm_cl4_print").on("click", function () {
        $(this).prop("disabled", true);
        $("#hm_cl4_print").text("Generating PDF....");

        setTimeout(() => {
            genPDF();
            $("#hm_cl4_print").prop("disabled", false);
            $("#hm_cl4_print").text("PRINT RESULTS");
        }, 500);
    });

    function genPDF() {
        var d = new Date();
        let date_time = d.getMonth() + 1 + "" + d.getDate() + "" + d.getFullYear() + "" + d.getHours() + "" + d.getMinutes() + "_" + d.getSeconds();
        var element = document.getElementById("pdf_data");
        html2pdf(element, {
            margin: 10,
            enableLinks: true,
            filename: "Net Worth " + date_time + ".pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 4, logging: false },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        });
    }

    let src = $("#com_logo").attr("src");

    toDataUrl(src, function (myBase64) {
        $("#com_logo").attr("src", myBase64);
    });

    function toDataUrl(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
});