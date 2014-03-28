/**
 * Created by jiayingyu on 3/24/14.
 */

var monthDic = {"January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5, "July": 6,
    "August": 7, "September": 8, "October": 9, "November": 10, "December": 11};

function dayNumber() {
    var month = document.forms[0].month.value;
    var dayOption = "";

    if (month == "February") {
        for (var n = 0; n < 28; n++) {
            var d = n + 1;
            dayOption += "<option> " + d + "</option>"
            document.forms[0].day.innerHTML = dayOption;
        }
    }
    else if (month == "April" || month == "June" || month == "September" || month == "November") {
        for (var n = 0; n < 30; n++){
            var d = n + 1;
            dayOption += "<option> " + d + "</option>"
            document.forms[0].day.innerHTML = dayOption;
        }
    }
    else {
        for (var n = 0; n < 31; n++){
            var d = n + 1;
            dayOption += "<option> " + d + "</option>"
            document.forms[0].day.innerHTML = dayOption;
        }
    }
}

function output() {
    var month = document.forms[0].month.value;
    var day = document.forms[0].day.value;
    var year = document.forms[0].year.value;
    var output1;
    var output2;
    var output3;
    var output4;
    var sign;
    var fortune1 = "Someone you have supported and relied on in the past " +
            "will let you down at the last moment. Let them know how you feel about it. " +
            "You need to re-evaluate your emotional state. This may not have anything to do " +
            "with anyone else, but rather the fact that you are not feeling as good as you should be. S" +
            "elf-reflection is your key word today.";
    var fortune2 = "Being disciplined is important as you may feel wasteful right now. There may be" +
            " some additional expenses you need to factor into your budget. Your thinking is slow, " +
            "muddled and imprecise. You may lose things and be forgetful. Try to jot down reminders for yourself.";
    var fortune3 = "Someone younger than yourself has an answer that you've been seeking regarding a " +
        "certain situation. Don't discount their advice just because of their age. You could be made to feel " +
        "the perfect fool for a while, only to find that it's all one big joke. Try not to take things too seriously today.";
    var fortune4 = "What's the point of pursuing an argument if you know you are going to be outnumbered? " +
        "It is a day for making allies, not enemies. Reserve some money, even if you feel confident you have enough. " +
        "An unexpected expense could take you by surprise.";
    var fortune5 = "Finances will be up and down now due to your emotional instability. Try to make decisions based on your head rather than your heart. There's no harm in proving others wrong, but it’s all in the way that you do it. Focus on form rather than content today.";
    var fortune6 = "A question may be posed that you don't have the answer to so you mustn't pretend that you do. Humility is required on your part to get the answer from a third party. Expect some positive news regarding a business or financial situation. However, you may need to curtail your expenses to make the best use of this information.";
    var fortune7 = "Your mate understands your urge to 'lead' and will respond instinctively to your desires, so don't be afraid to be the boss. Your past expenses are now catching up with you. A financial emergency may prevent you from doing other things.";
    var fortune8 = "Unexpected expenses for domestic services may leave you feeling confused. Someone's using more than their fair share of the utilities.You don't need heroic breeding to be brave. Today you may need to do something that requires a certain amount of valour.";
    var fortune9 = "You can share your ideas to improve professional systems and practices with good results. Don't be afraid to challenge others in a friendly way. Your thinking is not clear today, and your imagination is playing tricks on you. Don't make too many assumptions before asking the right questions.";
    var fortune10 = "If you find yourself in the company of someone who is as dull as a dishwasher, you are under no obligation to spend any more time with them. There are ways and means to excuse yourself politely, if necessary. A job offer may seem too good to be true-and probably is. Read between the lines if you are planning an interview and don't be afraid to ask those gnarly questions.";
    var fortune11 = "There may be some problem associated with your pay or money owing to you. Don't jump down the other person's throat when broaching this issue. Diplomacy is the best policy today. You could be trying too hard to radically change a situation or someone's perspective. Be convincing without domination.";
    var fortune12 = "You could feel exasperated maybe even a little down while this phase of your life unravels. Communication may be heavy and the topics a little dark. Spend time only with people who make you feel good today. You are angry over someone's inability to compromise on a money matter. Be articulate in presenting your case as the outcome could financially beneficial for you.";
    var fortuneArray = [fortune1, fortune2, fortune3, fortune4, fortune5, fortune6, fortune7, fortune8, fortune9, fortune10, fortune11,fortune12 ];

    if (year.length != 4) {
        alert("Invalid number. Please input a four digit number.")
    }
    else {
        sign = cal_sign(month, day);

        output1 = "<p>Your Birthday: " + month + " " + day + "</p>";

        //output2
        if (sign.charAt(0) == 'A') {
            output2= "<p>You are an " + sign + "</p>";
        }
        else {
            output2 = "<p>Your are a " + sign + "</p>";
        }

        output3 = "<P>You are " + cal_age(day, month, year) + " years old</P>";
        output4 = "<p class='lead'>&nbsp;<br>Fortune for the day</p><blockquote><p>" + fortuneArray[hashFortune(day, month)] + "</blockquote></p>"

        document.getElementById("output").innerHTML = output1 + output2 + output3;
        document.getElementById("signPic").src = sign + ".jpg";
        document.getElementById("fortune").innerHTML = output4;
    }
}

//calculate the sign according to the date of birth
function cal_sign(month, day) {
    var sign;

    if (month == "January") {
        if (day < 21) sign = "Capricorn";
        else sign = "Aquarius";
    }
    else if (month == "February") {
        if (day < 20) sign = "Aquarius";
        else sign = "Pisces";
    }
    else if (month == "March") {
        if (day < 21) sign = "Pisces";
        else sign = "Aries";
    }
    else if (month == "March") {
        if (day < 21) sign = "Pisces";
        else sign = "Aries";
    }
    else if (month == "April") {
        if (day < 21) sign = "Aries";
        else sign = "Taurus";
    }
    else if (month == "May") {
        if (day < 22) sign = "Taurus";
        else sign = "Gemini";
    }
    else if (month == "June") {
        if (day < 22) sign = "Gemini";
        else sign = "Cancer";
    }
    else if (month == "July") {
        if (day < 23) sign = "Cancer";
        else sign = "Leo";
    }
    else if (month == "August") {
        if (day < 23) sign = "Leo";
        else sign = "Virgo";
    }
    else if (month == "September") {
        if (day < 22) sign = "Virgo";
        else sign = "Libra";
    }
    else if (month == "October") {
        if (day < 23) sign = "Libra";
        else sign = "Scorpio";
    }
    else if (month == "November") {
        if (day < 22) sign = "Scorpio";
        else sign = "Sagittarius";
    }
    else if (month == "December") {
        if (day < 22) sign = "Sagittarius";
        else sign = "Capricorn";
    }

    return sign;
}

//calculate the age
function cal_age(day, month, year) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    var age = yyyy - year;

    if (monthDic[month] == mm) {
        if (dd < day) {
            age = age - 1;
        }
    }
    else if (mm < monthDic[month]) {
        age = age - 1;
    }

    return age;
}

//hash function
function hashFortune (day, month) {
    var hash = 17;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var hashString = "" + dd + mm + day + monthDic[month];

    for (var i = 0; i < hashString.length; i++){
        var char = hashString.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; //hash * 33 + char
    }

    return hash % 12;
}