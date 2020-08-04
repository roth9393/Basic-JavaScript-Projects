function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;


}

var Jack = new Vehicle("Dodge," "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep," "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford," "Pinto", 1971, "Mustard")
function myFunction() {
    document.getElementById("Keywords_and_Constuctors").innerHTML =
    "Erik drives a " + Erik.Vehicle.Color + "-colored" + Erik.Vehicle.Model +
    " created in " + Erik.Vehicle_Year;


}

function New_and_This1() {
	var S = "This is lit";
	var T = "You aint lit";
	var Y = S + T;
	document.getElementById("New_and_This").innerHTML = "This is a test";
	
}