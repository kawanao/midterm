function toOrdinalNumber(value){
if (value ==1){
  return value + "st";
}
else if(value ==2){
  return value + "nd";
}
else if (value ==3) {
  return value + "rd";
}
else if (value <= 20){
  return value + "th";
}
else if (value%10 ==1){
  return value + "st";
}
else if (value%10 ==2){
  return value + "nd";
}
else if (value%10 ==3){
  return value + "rd";
}
else {
  return value + "th";
}
}
