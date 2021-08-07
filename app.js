var billAmt = document.querySelector("#bill-amount");
var cashInput = document.querySelector("#cash-input");
var btnSubmit = document.querySelector("#btn-submit");
const btnCheck = document.querySelector("#btn-check");
const cashDiv = document.querySelector("#cashGiven");
const notesToReturn = document.querySelectorAll(".tableData");
const table = document.querySelector("#changeTable");
const message = document.querySelector("#error");

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];



btnSubmit.addEventListener("click", function validateBillAmount() {
    hideMessage();    
    const billAmount = Number(billAmt.value);
    const cashGiven = Number(cashInput.value); 
    
    if(billAmount > 0){
        btnSubmit.style.display = "none";
        cashDiv.style.display = "block";       
    }
    else{  
        showMessage("Enter valid bill amount.");
    }
});

btnCheck.addEventListener("click", function validateCashGiven(){
   hideMessage(); 
    const billAmount = Number(billAmt.value);
    const cashGiven = Number(cashInput.value);
    if(cashGiven > billAmount){
    const returnAmount = parseInt(cashGiven) - parseInt(billAmount);
    calculateChange(returnAmount);
    btnCheck.style.display = "none";
    table.style.display = "block";
    //error.innerHTML = "";
   }
    else if(cashGiven === billAmount){
       showMessage("No change to be returned"); 
    }  
    else{
        showMessage("Enter valid cash amount."); 
    }
});

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(returnAmount){
    for(let i = 0;i < notesAvailable.length;i++){
        const numberOfNotes = Math.trunc(returnAmount / notesAvailable[i]);
        returnAmount %= notesAvailable[i];
        notesToReturn[i].innerText = numberOfNotes;
    }
}
 

 



