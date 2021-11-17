function calculate(){
    let amount = document.getElementById("amount").value;
    let rating = document.getElementById("rating").value;
    let people = document.getElementById("people").value;

    if(amount==="" || rating===0){
        alert("Enter value");
        return;
    }
    if (isNaN(amount)) {
        alert("Amount Accept Only Numeric Data");
        return;
       }
    if(people===""|| people<=0){
    people = 1;
    document.getElementById("each").style.display = "span";
    }
    else{
        document.getElementById("each").style.display = "span";
    }

    let total = (amount*rating)/people;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);
    console.log(total);
    document.getElementById("totaltip").style.display = "span";
    document.getElementById("tip").innerHTML = total;
    
}