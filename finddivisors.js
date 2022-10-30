solution1
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
solution2
function divisors(integer) {
  var output= [];
  var count = 0;
  for (var i=2;i<integer;i++)
    {
     
      if(integer%i == 0)
        {
          count++;
          
          output.push(i)
        }
//       console.log(i)
     
    }
//   console.log(count)
     if(count ==0)
        {
          return `${integer} is prime`;
        }
  return output;
}

solution3

function divisors(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};

solution4
function divisors( int ) {
  const arr = Array.from({length: int-1}, (_, i)=> i+1).slice(1).filter(el => int % el === 0)
  return arr.length ? arr : `${int} is prime`;
};

solition5
function divisors(x) {
  var result = [];
  for (var a = 2; a*a <= x; ++a) {
    if (x%a == 0) {
      var b = x/a;
      result.push(a);
      if (b != a) {
        result.push(b);
      }
    }
  }
  if (result.length == 0) {
    return x+' is prime';
  }
  result.sort(function (a, b) {
    return a - b;
  });
  return result;
};

solution6
