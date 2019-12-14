function eboyCalculator()

$(function() {

  $("#earring").change(function() {
    var earringString = $("#earring").val();
    var earring = parseInt(earringString);

if ("#earring" >= 3) {
  $("#earring-result").text("Mad Respect, Eboy. You made it.");
} else {"#earring" < 3) {
  $("#earring-result").text("Yikes, you wish.");

}
});
