//event
$('#message').keyup(showKey);
document.addEventListener('mousemove', showPosition);
//messageE.addEventListener('keyup', showkey);


//event handler
function showKey(e) {
    console.log(e.key);
    $('#lastKey').text("The key is " + e.key);
    //document.getElementById('lastKey').textContent = "The key is "+ e;
}

function showPosition(e) {
    console.log("The mouse position is: " + e.pageX + ", " + e.pageY);
    $('#charactersLeft').text("The mouse position is: " + e.pageX + ", " + e.pageY);
    //if (e.pageX > 500) {
      //  ctx.fillStyle = "blue";
    //}
}

//canvas testing
const canvas = document.getElementById("sandbox");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);