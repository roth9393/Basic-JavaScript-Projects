function {
    document.getElementById("Not").innerHTML = ! (20>10);

}

X = 10;
Y = 10;
document.write(X == Y)
document.write(X && Y)

document.write(typeof "Test")

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;

}

document.getElementById("Test").innerHTML = isNaN("This is a string");
document.getElementById("Test").innerHTML = isNaN("007");

document.write(-2E310);
document.write(10 < 2);

console.log(2 + 2);

document.write("10" + 5);
document.write("10" > 5);

document.write(10 == 10);
document.write(5 == 10);