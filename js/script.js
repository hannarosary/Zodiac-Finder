$(document).ready(function(){
    $("#birthMonth").on("change", function(){
        var bmValue = $(this).val();
        var mod = parseInt(bmValue) % 2;
        var days = 0;

        switch(mod){
            //if month's remainder is 0
            case 0:
                if(bmValue == 02){
                    days = 29;
                }else if(bmValue >= 08){
                    days = 31;
                }else{
                    days = 30;
                }
                break;
            //if month's remainder is 1
            default:
                if(bmValue > 07){
                    days = 30;
                }else{
                    days = 31;
                }
                break;
        }

        var ctr;
        $("#birthDay").empty();
        $("#birthDay").append("<option>Select Birthday</option>");
        for(ctr = 1; ctr <= days; ctr++){
            var AfterTxt = "<option value = " + ctr + ">" + ctr + "</option>";
            $("#birthDay").append(AfterTxt);
        }
    });

    $("#submitBtn").click(function(){
        var bdValue = $("#birthDay").val();
        var bmValue = $("#birthMonth").val();
        var zodiac = "";

        if(!isNaN(bdValue) && !isNaN(bmValue)){
            //using switch statement
            switch(bmValue){
                case "01":
                    if(bdValue <= 19 && bdValue >= 1){
                        zodiac = "Capricorn";
                    }else{
                        zodiac = "Aquarius";
                    }
                break;
                case "02":
                    if(bdValue <= 19 && bdValue >= 1){
                        zodiac = "Aquarius";
                    }else{
                        zodiac = "Pisces";
                    }
                break;
                case "03":
                    if(bdValue <= 20 && bdValue >= 1){
                        zodiac = "Pisces";
                    }else{
                        zodiac = "Aries";
                    }
                break;
                case "04":
                    if(bdValue <= 20 && bdValue >= 1){
                        zodiac = "Aries";
                    }else{
                        zodiac = "Taurus";
                    }
                break;
                case "05":
                    if(bdValue <= 20 && bdValue >= 1){
                        zodiac = "Taurus";
                    }else{
                        zodiac = "Gemini";
                    }
                break;
                case "06":
                    if(bdValue <= 20 && bdValue >= 1){
                        zodiac = "Gemini";
                    }else{
                        zodiac = "Cancer";
                    }
                break;
                case "07":
                    if(bdValue <= 22 && bdValue >= 1){
                        zodiac = "Cancer";
                    }else{
                        zodiac = "Leo";
                    }
                break;
                case "08":
                    if(bdValue <= 22 && bdValue >= 1){
                        zodiac = "Leo";
                    }else{
                        zodiac = "Virgo";
                    }
                break;
                case "09":
                    if(bdValue <= 22 && bdValue >= 1){
                        zodiac = "Virgo";
                    }else{
                        zodiac = "Libra";
                    }
                break;
                case "10":
                    if(bdValue <= 22 && bdValue >= 1){
                        zodiac = "Libra";
                    }else{
                        zodiac = "Scorpio";
                    }
                break;
                case "11":
                    if(bdValue <= 22 && bdValue >= 1){
                        zodiac = "Scorpio";
                    }else{
                        zodiac = "Sagittarius";
                    }
                break;
                case "12":
                    if(bdValue <= 21 && bdValue >= 1){
                        zodiac = "Sagittarius";
                    }else{
                        zodiac = "Capricorn";
                    }
                break;
            }
        }else{
            zodiac = "Invalid date.";
        }
        $("#zodiacSign").html(zodiac);
    });
});
