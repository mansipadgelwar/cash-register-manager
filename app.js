var billAmount = document.querySelector("#bill-amount");
var cashGivenInput = document.querySelector("#cash-given");
var cashInput = document.querySelector("#cash-input");
var btnSubmit = document.querySelector("#btn-submit");
var btnCheck = document.querySelector("#btn-check");
var cashDiv = document.querySelector("#cashGiven");
var table = document.querySelector("#changeTable");
var error = document.querySelector("#error");


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
    
});

    
