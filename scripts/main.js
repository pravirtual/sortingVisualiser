/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as = document.getElementById("a_size");
var array_Size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos=document.querySelectorAll(".algos .btn");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
//cont.style="flex-direction:row";

//Array generation and updation.

inp_as.addEventListener("input",update_Array_Size);
inp_gen.addEventListener("click",generate_Array);


function generate_Array()
{
    cont.innerHTML="";

    for(var i=0;i<array_Size;i++)
    {
        div_sizes[i] = Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i] = document.createElement("div");
        margin_size = 0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#937DC2; width:" + (100/array_Size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        cont.appendChild(divs[i]);
    }
}

function update_Array_Size()
{
    array_Size = inp_as.value;
    generate_Array();
}

window.onload = update_Array_Size(); //loads array bars when page is freshly loaded

//adding EventListeners to each sorting Button
for(var i=0; i<butts_algos.length; i++)
{
  butts_algos[i].addEventListener("click", runAlgo);
}

function runAlgo()
{
  switch(this.innerHTML)
  {
    case "Bubble": Bubble_Sort(); break;
    case "Selection" : Selection_Sort(); break;
    case "Insertion" : Insertion_Sort(); break;
    case "Merge" : Merge_Sort(); break;
    case "Quick" : Quick_Sort(); break;
    case "Heap" : Heap_Sort();
  }
}
