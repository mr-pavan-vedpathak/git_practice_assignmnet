let st=nrupul;
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