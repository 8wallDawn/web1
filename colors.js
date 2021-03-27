var Links = {
  SetColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //   alist[i].style.color=color;
    //   i++;
    //   }
    $('a').css('color', color);
    }
  }

var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color= color;
    $('body').css('color', color);
  },

  setBgColor:function (color){
    // document.querySelector('body').style.backgroundColor= color;
    $('body').css('backgroundColor', color);
  }
}

function themeChanger(self){
  if(self.value==='day'){
    Body.setBgColor('white');
    Body.setColor('black');
    Links.SetColor('black');
    self.value='night';
  }
  else{
    Body.setBgColor('black');
    Body.setColor('white');
    Links.SetColor('powderblue');
    self.value='day';
  }
}
