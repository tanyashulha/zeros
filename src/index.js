module.exports = function zeros(expression) {

  function fact(expr, arg) {
  let caption = expr.split('').filter(item => item == '!');
  let num = expr.split('').filter(item => item != '!').join('');
  if (caption.length == 1) {
    let total = 0;
    let j;
    for (let i = num; i > 1; i--) {
      for (j = i; j > 1; j = j / arg) {
        if (j % arg == 0) {
          total++;
        }
      }
    }
    return total;
  }
  if (caption.length == 2) {
    if (num % 2 == 1 && arg == 2) {
      return 0;
    } else {
      let total = 0;
      let j;
      for (let i = num; i > 1; i = i - 2) {
        for (j = i; j > 1; j = j / arg) {
          if (j % arg == 0) {
            total++;
          }
        }
      }
      return total;
      }
    }
  }


  let output1 = expression.split('*').map(item => item = fact(item, 5)).reduce((acc, item) => acc = acc + item, 0);
  let output2 = expression.split('*').map(item => item = fact(item, 2)).reduce((acc, item) => acc = acc + item, 0);
  if (output1 < output2) 
  return output1;
  else return output2;

}
