var billAmount = document.querySelector("#bill-amount");
var cashGivenInput = document.querySelector("#cash-given");
var cashInput = document.querySelector("#cash-input");
var btnSubmit = document.querySelector("#btn-submit");
var btnCheck = document.querySelector("#btn-check");
var cashDiv = document.querySelector("#cashGiven");
var notesToReturn = document.querySelectorAll(".tableData");
var table = document.querySelector("#changeTable");
var error = document.querySelector("#error");

let noOfNotes = [];
let notesAvailable = [2000,500,100,20,10,5,1];


btnSubmit.addEventListener("click",()=>{
    billAmount = Number(billAmount.value);
    
    if(billAmount <= 0){
        error.innerHTML = "Enter valid amount.";
    }
    else{  
        btnSubmit.style.display = "none";
        cashDiv.style.display = "block";   
    }
});

btnCheck.addEventListener("click", ()=>{
    
   cashInput = Number(cashInput.value);
   if(cashInput <= 0){
    error.innerHTML = "Enter valid bill amount & cash given to continue";
   }
    else{
        btnCheck.style.display = "none";
        table.style.display = "block";
        
    }
    


 let returnAmount = parseInt(cashInput) - parseInt(billAmount);
 //console.log(returnAmount);
 
 for(let i = 0;i < notesAvailable.length;i++){
     noOfNotes[i] = Math.floor(returnAmount/notesAvailable[i]);
     returnAmount = returnAmount - notesAvailable[i] * noOfNotes[i];
     notesToReturn[i].innerHTML = noOfNotes[i];
     //console.log(noOfNotes[i]);
    if(returnAmount === 0){
        break;
    }
 }

 for(const notesAvailable of notesToReturn){
     if(notesAvailable.innerHTML == "0"){
         notesAvailable.innerHTML = "";
     }
 }

 noOfNotes = [];

});


