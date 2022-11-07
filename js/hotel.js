//for hotel registration
var test = {
    hotelname: "marriot",
    room: 350,
    booked: 120,
    display: function () {
        return this.hotelname;
    }
};

console.log("Name: "+test.hotelname);
console.log("Rooms: "+test.room);
//event
$(function() {
    $('#submit').click(reservation);
    $('#lists').click(displayR);
});

var guestgroup = new Array();
function reservation() {
    var guest = {
        name: $('#name').val(),
        numberOfGuest: $('#numGuest').val(),
        roomType: $('#room').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val()
    };
    $("p:first").html("thank you!");

    guestgroup.push(guest); //store in the array
    //console logs
    console.log(guestgroup + "\n")
    console.log("name: "+ guest.name);
    console.log("Guest number: "+ guest.numberOfGuest);
    console.log("Room Type: "+ guest.roomType);
    console.log("Check in date: "+ guest.checkIn);
    console.log("Check out date: "+ guest.checkOut + "\n");
}

function displayR() {
    $('form').append("<table>");
    for (var i in guestgroup) {
        var theguest = guestgroup[i];
        //console.log call
        console.log("theguest"+"#"+i+": "+theguest)

        var row = "<tr><td>"+theguest.name+"</td><td>"+theguest.checkIn+"</td></tr>";
        $('table').append(row);
        }
    
}