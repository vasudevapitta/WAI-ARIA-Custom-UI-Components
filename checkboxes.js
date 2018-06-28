$(()=> {
      //Arrow functions with concise and block body syntax
  
      const anyCheckBox = $('.checkbox');//Selects any div with the class name checkbox
  
      //Event listener for any div with the class name checkbox
      anyCheckBox.click(function() {
        toggle.call(this); //invokes the toggle function and sets the value of 'this' inside the toggle function to the element which is clicked using call() method
      });
  
  //invokes the toggle function IF the keypressed is either Spacebar(32) OR Enter(13) and sets the value of 'this' inside the toggle function to the element on which the key is pressed using call() method
  anyCheckBox.keypress(function(ev) {
    if(ev.keyCode===32 || 13){
      toggle.call(this);
    }
  });
  
  function toggle(){
                //'this' is set to the div element which is clicked or keypressed. We are finding the checkmark element within that div and toggling the class to either show or hide the checkmark
                $(this).find('.checkmark').toggleClass('show');
                  
  //attributes aria-checked and checked in Sync with checkmark icon being visible or invisible
                 if(this.hasAttribute('checked')){
                   this.removeAttribute('checked');
                   this.setAttribute('aria-checked', false);
                 }
                  else {
                    this.setAttribute('checked', "");
                    this.setAttribute('aria-checked', true);
                  }
  }
});