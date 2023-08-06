
// Save XMR address
if (localStorage.getItem("monerokey") !== null) {$("input#xmraddress").val(localStorage.getItem("monerokey"))}

$("input#xmraddress").on("change input", function() {localStorage.setItem("monerokey", $(this).val())});

// Save Currency Code
if (localStorage.getItem("currency") !== null) {$("#currencySelect").val(localStorage.getItem("currency"));}

$("#currencySelect").on("change", function() {
    localStorage.setItem("currency", $(this).val());
    // force XMR Price update
    localStorage.setItem("ForcePriceUpdate", true);
});