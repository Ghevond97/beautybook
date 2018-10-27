function phoneNumberValidator(inputtxt)
{
  const phoneno = /^\+?^\+374?[-]?(41|43|44|47|49|55|77|91|93|94|95|96|97|98|99)[-]?([0-9]{2})[-]?([0-9]{2})[-]?([0-9]{2})$/;
  if((inputtxt.match(phoneno)))
  {
    alert("correct number format");
    return true;
  }
  else if(inputtxt.length>12){
    alert("wrong number format");
    return false;
  }
  else
  {
    alert("wrong number format");
    return false;
  }
}

export default phoneNumberValidator;