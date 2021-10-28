$("img").hide();


$("button").click(function() {
    //var for ip
    let answer;
    answer = $(".ip").val();
	console.log(answer);
	$(".vote-result").text(answer);
    //var for cd
    let answer2;
    answer2 = $(".cd").val();
	console.log(answer2);
	$(".vote-result2").text(answer2);
    //stuff
    $("img").fadeIn();
    alert("Good Job");
    //to clear
    $(".cd").val('');
    $(".ip").val('');
});