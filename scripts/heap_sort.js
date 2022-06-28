
function heapify(size, i)
{
  var largest = i;
  bar_update(divs[i], div_sizes[i], "yellow");

  var left_index = 2*i+1;
  var right_index = 2*i+2;

  if(left_index < size && div_sizes[largest] < div_sizes[left_index])
  largest = left_index;

  if(right_index < size && div_sizes[largest] < div_sizes[right_index])
  largest = right_index;

  if(largest != i)
  {
    bar_update(divs[i], div_sizes[i], "red");
    bar_update(divs[largest], div_sizes[largest], "red");

    var temp = div_sizes[largest];
    div_sizes[largest] = div_sizes[i];
    div_sizes[i] = temp;

    bar_update(divs[i], div_sizes[i], "red");
    bar_update(divs[largest], div_sizes[largest], "red");

    bar_update(divs[i], div_sizes[i], "#937DC2"); //blue
    //bar_update(divs[largest], div_sizes[largest], "yellow");

    heapify(size, largest);
  }

  bar_update(divs[i], div_sizes[i], "#937DC2"); //blue
}


function heap_sort()
{
  var size = array_Size;

  while(size>0)
  {
    var index = Math.floor(size/2)-1;

    for(var i = index; i>=0 ; i--)
    heapify(size, i);

    bar_update(divs[0], div_sizes[0], "red");
    bar_update(divs[size-1], div_sizes[size-1], "red");

    var temp = div_sizes[0];
    div_sizes[0] = div_sizes[size-1];
    div_sizes[size-1] = temp;

    bar_update(divs[0], div_sizes[0], "#937DC2"); //blue
    bar_update(divs[size-1], div_sizes[size-1], "#6CC4A1"); //green

    size--;

  }

  //bar_update(divs[0], div_sizes[0], "#6CC4A1"); //green
}

function Heap_Sort()
{
    c_delay = 0;
    heap_sort();
}
