function distance(a,b,c,d){
  if (a==c && b==d){
    return 0;
  }

  else if(a!=c!=0 && b!=d!=0) {
    var x= Math.abs(c-a);
    var y= Math.abs(d-b);
    return Math.sqrt(x*x + y*y);
  }
}
