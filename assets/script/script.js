// console.log("hello!!")

let scissor = 1;
let rock = 2;
let paper =3;

var myscore =0;
var comscore =0;

var matchhistory = [];
var initiation = 0;
let person;


inititatestart();

function inititatestart(){

    person = prompt("Please enter you player name", "Player 1");
    let text;
    if (person == null || person == "") {
        inititatestart();
    } else {
      text = "Hello " + person + ", Welcome to Jack en poy !";
      
      

      document.getElementById("playernameout").innerHTML = person;
     

    }

}

$(document).on("click","#btnprocess",function(event){

theselectedis = $(this).attr("data-key");



let computeroption = Math.floor(Math.random() * 3);


            if(computeroption == 0){
                computeroption = "scissor";
                document.getElementById("computerimage").src = "assets/images/scissor.png";
            }else if(computeroption == 1){
                computeroption = "paper";
                document.getElementById("computerimage").src = "assets/images/paper.png";
            }else if(computeroption == 2){
                computeroption = "rock";
                document.getElementById("computerimage").src = "assets/images/rock.png";
            }


            alert(""+person+" choose : "+theselectedis+", While Computer Choose : "+computeroption);

                    if(theselectedis == "scissor"){

                        if(computeroption == "paper"){
                   
                            myscore = myscore +1;
                            matchhistory[initiation] = "Round "+initiation+": "+person+" Won!!!"

                        }else if(computeroption == "scissor"){
                   
                            matchhistory[initiation] = "Round "+initiation+": It's A tie"
                        }else if(computeroption == "rock"){
                   

                            matchhistory[initiation] = "Round "+initiation+": Computer Won!!!"
                            comscore = comscore +1;
                        }

                    }else if(theselectedis == "paper"){


                        if(computeroption == "rock"){
                     
                            myscore = myscore +1;
                            matchhistory[initiation] = "Round "+initiation+": "+person+" Won!!!"
                        }else if(computeroption == "paper"){
                    
                            matchhistory[initiation] = "Round "+initiation+": It's A tie"
                        }else if(computeroption == "scissor"){
                
                            comscore = comscore +1;
                            matchhistory[initiation] = "Round "+initiation+": Computer Won!!!"
                        }


                    }else if(theselectedis == "rock"){


                        if(computeroption == "scissor"){
                    
                            myscore = myscore +1;
                            matchhistory[initiation] = "Round "+initiation+": "+person+" Won!!!"
                        }else if(computeroption == "rock"){
                    
                            matchhistory[initiation] = "Round "+initiation+": It's A tie"
                        }else if(computeroption == "paper"){
                        
                            matchhistory[initiation] = "Round "+initiation+": Computer Won!!!"
                            comscore = comscore +1;
                        }
                        
                    }


                    initiation = initiation +1;

                    $("#matchList").empty();

                   
        



                            for (var i = 0; i < initiation ; i++) {

                            
                        

                                $("#matchList").append('<li>'+matchhistory[i] +'</li>');
                               
                            
                            }
                           

             


                    document.getElementById("playerscore").innerHTML = ""+person+" Score : "+myscore;
                    document.getElementById("computerscore").innerHTML = "Computer Score : "+comscore;




});





                    $(document).on("click","#ResetButton",function(event){
                    

                        $("#matchList").empty();
                    myscore = 0;
                    comscore = 0;
                    initiation = 0;
                    document.getElementById("playerscore").innerHTML = ""+person+" Score : "+myscore;
                    document.getElementById("computerscore").innerHTML = "Computer Score : "+comscore;
                    alert("Game Reset!");
                    document.getElementById("computerimage").src = "assets/images/cute.jpg";
                    });



                   