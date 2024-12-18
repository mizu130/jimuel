function newFunction(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("myId").innerHTML = "Please enter valid numbers.";
    } else {
        let total;
  
        switch (operator) {
            case '+':
            total = num1 + num2;
                break;
            case '-':
            total = num1 - num2;
                break;
            case '*':
            total = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    document.getElementById("myId").innerHTML = "Division by zero is not allowed.";
                    return;
                }
                total = num1 / num2;
                break;
            default:
                document.getElementById("myId").innerHTML = "Invalid operator.";
                return;
        }
  
        document.getElementById("myId").innerHTML = "total: " + total;
    }
  }
  