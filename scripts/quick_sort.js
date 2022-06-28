
function partition(low, high)
{
  var pivot = div_sizes[high];
  bar_update(divs[high], div_sizes[high], "yellow");
  var i= low-1; var j;
  for(j=low; j<=high-1; j++)
  {
    bar_update(divs[j], div_sizes[j], "yellow");
    if(div_sizes[j] < pivot)
    {
      i++;
      bar_update(divs[j], div_sizes[j], "red");
      bar_update(divs[i], div_sizes[i], "red");


      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;

      bar_update(divs[i], div_sizes[i], "red");
      bar_update(divs[j], div_sizes[j], "red");

      bar_update(divs[i], div_sizes[i], "#937DC2");//blue
      bar_update(divs[j], div_sizes[j], "#937DC2");//blue

    }
    bar_update(divs[j], div_sizes[j], "#937DC2"); //blue
  }

  i++;
  var temp = div_sizes[i];
  div_sizes[i] = div_sizes[high];
  div_sizes[high] = temp;

  bar_update(divs[high], div_sizes[high], "#937DC2"); //blue
  bar_update(divs[i], div_sizes[i], "#6CC4A1"); //green

  return i;
}

function quick_sort(low, high)
{
  if(low == high)
  bar_update(divs[low], div_sizes[low], "#6CC4A1")

  if(low < high)
  {
    var p = partition(low, high);
    quick_sort(low,p-1);
    quick_sort(p+1,high);
  }
}

function Quick_Sort()
{
  c_delay = 0;
  quick_sort(0, array_Size-1);
}
