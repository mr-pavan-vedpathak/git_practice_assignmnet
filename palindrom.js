//here is one mistake in privious code author dont write variable name correctly it was st. it not st it is str.
let str="nayan";
let palin=str;
     let bag="";
    for(i=str.length-1;i>=0;i--){
         bag=bag+str[i];
        // console.log(str[i])
    }
  if(bag===palin){
      console.log("Yes");
  }else{
      console.log("No");
  }