function voting() {
    var agenumber = document.getElementById("age").value;
    if (agenumber >= 18 && agenumber <= 100) {
        alert("You Are Eligible For Vote");
    }
    else {
        alert("You are not Eligible for vote");
    }
}