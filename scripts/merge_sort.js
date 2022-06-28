
function merge(low, mid, high)
{
  var m = mid - low + 1;
  var n = high - mid;
  var left=[];
  var right=[];

  var i,j;

  for(i=0; i<m; i++)
  left[i] = div_sizes[low+i];


  for(j=0;j<n;j++)
  right[j] = div_sizes[mid+1+j];

  var k = low; i=0; j=0;

  while(i<m && j<n)
  {
    if(left[i]<=right[j])
    {
      div_sizes[k] = left[i];
      bar_update(divs[k], div_sizes[k], "red");
      //bar_update(divs[k], div_sizes[k], "green");
      k++; i++;

    }

    else
    {
      div_sizes[k] = right[j];
      bar_update(divs[k], div_sizes[k], "red");
      //bar_update(divs[k], div_sizes[k], "green");
      k++; j++;
    }

  }

  while(i<m)
  {
    div_sizes[k] = left[i];
    bar_update(divs[k], div_sizes[k], "red");
    //bar_update(divs[k], div_sizes[k], "green");
    k++; i++;
  }

  while(j<n)
  {
    div_sizes[k] = right[j];
    bar_update(divs[k], div_sizes[k], "red");
    //bar_update(divs[k], div_sizes[k], "green");
    k++; j++;
  }

  for(i=low; i<=high; i++)
  bar_update(divs[i], div_sizes[i], "#6CC4A1"); //green

}


function merge_sort(low, high)
{
    if(low<high)
    {
      var mid = low + Math.floor((high-low)/2);
      bar_update(divs[mid], div_sizes[mid], "yellow");
      merge_sort(low, mid);
      merge_sort(mid+1, high);
      merge(low, mid, high);

    }
}


function Merge_Sort()
{
   c_delay = 0;
   merge_sort(0, array_Size-1);
}
