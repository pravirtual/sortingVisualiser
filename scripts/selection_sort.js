function Selection_Sort()
{
  var i;
  c_delay=0;

   for(i=0; i<array_Size-1;i++)
   {
     bar_update(divs[i], div_sizes[i],"red");
     var minIndex = i;
     for(var j=i+1; j<array_Size; j++)
     {

       bar_update(divs[j],div_sizes[j],"yellow");

       if(div_sizes[j] < div_sizes[minIndex])
       {
         if(minIndex!=i)
         bar_update(divs[minIndex],div_sizes[minIndex],"#937DC2"); //blue
         minIndex = j;
         bar_update(divs[minIndex],div_sizes[minIndex],"red");
       }

       else
       bar_update(divs[j],div_sizes[j],"#937DC2"); //blue
     }

     if(minIndex!=i)
     {
       var temp = div_sizes[i];
       div_sizes[i] = div_sizes[minIndex];
       div_sizes[minIndex] = temp;

       bar_update(divs[i],div_sizes[i],"#6CC4A1");  //green
       bar_update(divs[minIndex],div_sizes[minIndex],"#937DC2"); //blue
     }

     else
     bar_update(divs[i], div_sizes[i], "#6CC4A1"); //green

   }
   //to handle last bar
   bar_update(divs[i],div_sizes[i],"#6CC4A1"); //green
}
