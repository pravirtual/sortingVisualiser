
//We only have to change background-color and height of the sorting element.


var speed = 1000;
var delay_time = 10000/(Math.floor(array_Size/10)*speed);
inp_aspeed.addEventListener("input",speedRange);

function speedRange()
{
    var x = inp_aspeed.value;
    switch(parseInt(x))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }

    delay_time=10000/(Math.floor(array_Size/10)*speed);        //Decrease numerator to increase speed.
}

//var c_delay = 0;//This is updated ov every div change so that visualization is visible.

function bar_update(cont,height,color)
{
    setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_Size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}
