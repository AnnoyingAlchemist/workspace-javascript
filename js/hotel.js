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
    $('submit').click(reservation);
});

function reservation() {
    var guest = {
        name: $('name').val(),
        numberofGuest: $('#num').val(),
        roomType: $('room').val(),
    };
}