function fridayTheThirteenths(start, end) {

 https://www.codewars.com/kata/540954232a3259755d000039/train/javascript
  // 5 is friday
 output=[]
  space  = ' ';
  year_start = start;
  year_end =  (end)? end:year_start;
  months = 12;
  day = 13
  count = 0 
 for (i=year_start;i<=year_end;i++ )
   { 
     for(j = 1;j<=months;j++)
       {
         if(new Date(`${j}/${day}/`+i).getDay() === 5)
           { count++;
            
            if(count=1)
              {
                output.push(`${j}/${day}/${i}`);
              }
            else{
              output.push(`${j}/${day}/${i}`);
            }
            console.log(output)
           }
       }
    
   }
  
//   console.log(new Date(`${10}/${13}/`+2000).getDay() === 5)
   return output.join(" ");
  
  }
  
  
