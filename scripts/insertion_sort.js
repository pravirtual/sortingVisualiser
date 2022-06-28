function Insertion_Sort()
{

  c_delay=0;

   for(var i=1; i<array_Size; i++)
   {
     var key = div_sizes[i];
     var j = i-1;
     bar_update(divs[i], div_sizes[i], "yellow");
     while(j>=0 && div_sizes[j] > key)
     {
       bar_update(divs[j+1], div_sizes[j+1], "yellow");
       bar_update(divs[j+1], div_sizes[j+1], "red");
       bar_update(divs[j], div_sizes[j], "red");
       div_sizes[j+1] = div_sizes[j];
       bar_update(divs[j+1], div_sizes[j+1], "red");
       div_sizes[j] = key;
       bar_update(divs[j], div_sizes[j], "red");
       bar_update(divs[j+1], div_sizes[j+1], "#6CC4A1"); //green
       j--;
     }

     j++;
     bar_update(divs[j], div_sizes[j], "yellow");
     div_sizes[j] = key;
     bar_update(divs[j], div_sizes[j], "#6CC4A1"); //green
   }
}
