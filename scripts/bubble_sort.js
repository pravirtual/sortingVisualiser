function Bubble_Sort()
{

  c_delay=0;

  var j;
  for(var i=0; i<array_Size; i++)
  {
    for(j=0; j<array_Size-i-1; j++)
    {

      bar_update(divs[j], div_sizes[j],"yellow"); //looking onto current array index

      if(div_sizes[j] > div_sizes[j+1])
      {

        bar_update(divs[j], div_sizes[j],"red");//red
        bar_update(divs[j+1], div_sizes[j+1],"red"); //red

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j+1];
        div_sizes[j+1] = temp;

        bar_update(divs[j], div_sizes[j],"red"); //red
        bar_update(divs[j+1], div_sizes[j+1],"red");//red

      }

      bar_update(divs[j],div_sizes[j], "#937DC2"); //blue

    }

    bar_update(divs[j], div_sizes[j], "#6CC4A1"); //green

  }

}
