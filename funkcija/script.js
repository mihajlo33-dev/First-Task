var numberGrid = [
    [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10],
    [11,12,13,14,15,16,17,18,19,20],
    [21,22,23,24,25,26,27,28,29,30],
    [31,32,33,34,35,36,37,38,39,40],
    [41,42,43,44,45,46,47,48,49,50],
    [51,52,53,54,55,56,57,58,59,60],
    [61,62,63,64,65,66,67,68,69,70],
    [71,72,73,74,75,76,77,78,79,80],
    [81,82,83,84,85,86,87,88,89,90],
    [91,92,93,94,95,96,97,98,99,100],
    
];
document.write('[<br>');
document.write('[',numberGrid[0],']','<br>');
document.write('[',numberGrid[1],']','<br>');
document.write('[',numberGrid[2],']','<br>');
document.write('[',numberGrid[3],']','<br>');
document.write('[',numberGrid[4],']','<br>');
document.write('[',numberGrid[5],']','<br>');
document.write('[',numberGrid[6],']','<br>');
document.write('[',numberGrid[7],']','<br>');
document.write('[',numberGrid[8],']','<br>');
document.write('[',numberGrid[9],']','<br>');
document.write(']');
// Making a grid for two-dimensional array

function myFunction() {
    var x = parseInt(document.getElementById("myInput").value);
    var y =  x + 10; // example : 45 + 10 = 55
    var z =  x - 10; // example : 45 - 10 = 35
    var k =  x + 11; // example : 45 + 11 = 56
    var m =  x - 11; // example : 45 - 11 = 34
    var f =  x + 9;  // example : 45 + 9 = 54
    var q =  x - 9;  // example : 45 - 9 = 36
    var o =  x + 1;  // example : 45 + 1 = 46
    var b =  x - 1;  // example : 45 - 1 = 44
    
    var sum = y + z + k + m + f + q + o + b; // example: 360
    var sumplus = x + y + z + k + m + f + q + o + b; // example : 405
    
    if(x > 10 && x < 91) // numbers between 1 and 10 don't have 8 numbers around them and also number that are under bigger than 91
    {
        
        if(x % 10 != 0 && x % 10 != 1) // numbers that end with 0 or 1 don't have 8 numbers around them
        {
            document.getElementById("suma").append(sumplus);
            document.getElementById("poruka").style.visibility = "visible";
        } 
    }
}