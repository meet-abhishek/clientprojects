/*-----------UPPER CASE---------------*/
document.getElementById("ubtn").addEventListener("click", function(){
    let text = document.getElementById("text").value; //
    let upperText = text.toUpperCase();
    document.getElementById("result").value = upperText;
});

/*-----------LOWER CASE---------------*/
document.getElementById("lbtn").addEventListener("click", function(){
    let text = document.getElementById("text").value;
    let lowerText = text.toLowerCase();
    document.getElementById("result").value = lowerText;
});

/*-----------COPY---------------*/
document.getElementById("copy").addEventListener("click", function(){
    let text = document.getElementById("result").value;
    
    navigator.clipboard.writeText(text)
    .then(() => {
        let notification = document.createElement("div");
        notification.textContent = "Text copied!";
        notification.style.position = "fixed";
        notification.style.top = "5px";
        notification.style.right = "50px";
        notification.style.backgroundColor = "black";
        notification.style.color = "white";
        notification.style.padding = "10px";
        notification.style.borderRadius = "5px";
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);  // Blinks for 1 second
    })
    .catch(err => {
        console.error("could not copy text : ", err);
    });
});

/*-----------CLEAR---------------*/
document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("text").value = "";
    document.getElementById("result").value = "";
});
