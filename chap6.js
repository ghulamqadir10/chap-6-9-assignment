// assignment 6
// prompt

let username = prompt("please input your good name");
alert("welcome " + username + " on my page");
let number = prompt("please input a number for multiplication");
if (isNaN(number) || !number) {
  number = 5;
}

let multi = 1;
document.write("<h2 class='underline'> Table Of " + number);
given_num_table = number * multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);
given_num_table = number * ++multi;
document.write("<h3>" + number + " * " + multi + " = " + given_num_table);

let a = 100;
document.write("<h2 class='underline'> RESULT");
document.write("<h3> the value of a is " + a);
document.write("<h3> the value of ++a is " + ++a);
document.write("<h3> now value of a is " + a);
document.write("<h3> the value of a++ is " + a++);
document.write("<h3> now value of a is " + a);
document.write("<h3> the value of a-- is " + a--);
document.write("<h3> now value of a is " + a);
document.write("<h3> the value of --a is " + --a);
document.write("<h3> now value of a is " + a + "<br>" + "<br>" + "<br>");

let increment_decement = (a = 1);
b = 2;
document.write("<h3>a = " + a + "<br>" + "<br>" + " b =" + b + "<h3>");

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + --b;

document.write("<h3> result a = " + a + "<h3>");
document.write("<h3> result b = " + b + "<h3>");

let sub_1 = prompt("enter name of subject no 1");
let sub_2 = prompt("enter name of subject no 2");
let sub_3 = prompt("enter name of subject no 3");
let ob_ms1 = prompt("enter obtained marks of subject 1");
let ob_ms2 = prompt("enter obtained marks of subject 2");
let ob_ms3 = prompt("enter obtained marks of subject 3");
// let num= parseInt(ob_ms1+ob_ms2+ob_ms3);

let total_marks=100;

let subject1 = sub_1;
document.getElementById("sub-1").innerHTML = subject1;

let obtained_marks_subject_1 = ob_ms1;
document.getElementById("ob-ms1").innerHTML = obtained_marks_subject_1;

let percentage1=(obtained_marks_subject_1/total_marks)*100;
document.getElementById("percent-1").innerHTML=percentage1 + "%";

let subject2=sub_2;
document.getElementById("sub-2").innerHTML = subject2;

let obtained_marks_subject_2 = ob_ms2;
document.getElementById("ob-ms2").innerHTML = obtained_marks_subject_2;

let percentage2=(obtained_marks_subject_2/total_marks)*100;
document.getElementById("percent-2").innerHTML=percentage2+"%";


let subject3 = sub_3;
document.getElementById("sub-3").innerHTML = subject3;

let obtained_marks_subject_3=ob_ms3;
document.getElementById("ob-ms3").innerHTML = obtained_marks_subject_3;

let percentage3=(ob_ms3/total_marks)*100;
document.getElementById("percent-3").innerHTML=percentage3+"%";






let total_obtained_marks=percentage1 + percentage2 + percentage3;
document.getElementById("total-ob-m").innerHTML=total_obtained_marks;

let total_percentage=(total_obtained_marks/300)*100 ;
document.getElementById("total-percent").innerHTML=total_percentage +"%";





