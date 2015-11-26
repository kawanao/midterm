function distance(a,b,c,d){
  if (a==c && b==d){
    return 0;
  }

  else if(a==0 && b==0 && c==0 && d==0) {
    return undifine;
  }
  else {
    var x=  a-b;
    var y = c-d;
    var inroot = (x*x) + (y*y);
    return Math.sqrt(inroot);
  }
}
