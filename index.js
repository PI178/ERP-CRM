
const fname = document.getElementById('name');
const cname = document.getElementById('cname');
const business = document.getElementById('business');
const email = document.getElementById('email');
const city = document.getElementById('city');
const zipcode = document.getElementById('zipcode');
const mobile = document.getElementById('phone');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(validation() === true){
    alert('Form Submitted');
  }

});

const setError = (element, message) => {
 const inputControl = element.parentElement;
 const errorDisplay = inputControl.querySelector('.error');
 errorDisplay.innerText = message;
 inputControl.classList.add('error');
 // inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';
  // inputControl.classList.add('success');
  inputControl.classList.remove('error');
};


const isValidEmail = email => {
  const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rex.test(String(email).toLowerCase());
}

function createMask(){
  var a = String(mobile.value);
  if(a.length < 10){
    setError(mobile, 'Please enter 10 digit number');
  }
  else{
  mobile.value = mobile.value.replace(/(\d{4})(\d{3})(\d{3})/,"$1-$2-$3");}
    
}

const validation = () => {

 const fnameValue =  fname.value.trim();
 const cnameValue =  cname.value.trim();
 const businessValue =  business.value.trim();
 const emailValue =  email.value.trim();
 const mobileValue = mobile.value.trim();
 var result = true;

if(fnameValue === ''){
  setError(fname, 'Full name is required');
  result = false;
} else {
  setSuccess(fname);
  
}
if(cnameValue === ''){
  setError(cname, 'Company name is required');
  result = false;
} else {
  setSuccess(cname);
  
}
if(businessValue === ''){
  setError(business, 'Name of Business is required');
  result = false;
} else {
  setSuccess(business);
  
}
if(emailValue === ''){
  setError(email, 'Email is required');
  
} else if (!isValidEmail(emailValue)) {
  setError(email, 'Provide a valid email address');
  result = false;
} else {
  setSuccess(email);
  
}

if(mobileValue === ''){
  setError(mobile, 'Phone no is required');
  result = false;
}
else {
  setSuccess(mobile);
  
}
return result;
}






/*$("input-control#name", "input-control#cname")(function(){

          if(this.value.trim() === ''){
            console.log(this.value.trim());
            $(this).css("border-color", "#ff3860");
            $(".error").text("This field is required.");
          }
          else{
            $(this).css("border-color", "");
            $(".error").css("display", "none");
            alert('Form Submitted');
          }
        /*var inputval = $("input").value;
        console.log(inputval);
        console.log("hi");
        if(inputval !== ''){
          
          $(".error").text("This field is required.");
          event.preventDefault();

        }
        else{
          $(".error").css("display", "none");
          alert('Form Submitted');
        }*/
      //});
        
       /* if(validation() === true){
          alert('Form Submitted');
        }*/
        


/*

$("input#name").mouseout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Full name is required");
          result = false;
        }
        else{
          $(this).css("border-color", "");
        }
        return result;
      });

      $("input#cname").mouseout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Company name is required");
          result = false;
        }
        else{
          $(this).css("border-color", "");
        }
        return result;
      });

      $("input#business").mouseout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Nature of Business is required");
          
          result = false;
        }
        else{
          $(this).css("border-color", "");
         
        }
        return result;
      });

      $("input#email").mouseout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Email address is required");
          
          result = false;
        }
       
        else{
          $(this).css("border-color", "");
         
        }
        return result;
      });

      $("input#phone").mouseout(function(element){
        var mobile = String(this.value.trim());
        if(mobile === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Phone number is required");
          
        }
        else if(mobile.length < 10){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Please enter 10 digit number");
          result = false;
        }
        else{
          $(this).css("border-color", "");
          this.value = this.value.replace(/(\d{4})(\d{3})(\d{3})/,"$1-$2-$3");
         
        }
        return result;
      });


      */



     /* $(document).ready(function(){
        $("button.send-message").click(function(event){
          event.preventDefault();
         // var fname = $("input#name").val();
          var cname = $("input#cname").val();
          var business = $("input#business").val();
          var email = $("input#email").val();
          var phone = $("input#phone").val();
  
          //$(".input").focusout(function(){
  
           if($("input#name").val() === ''){
             $("input#name").css("border-color", "#ff3860");
             $("input#name").attr("placeholder", "Full name is required");
           }else{
             $("input").css("border-color", "");
           }
           if($("input#cname").val() === ''){
             $("input#cname").css("border-color", "#ff3860");
             $("input#cname").attr("placeholder", "Company name is required");
           }else{
             $("input").css("border-color", "");
           }
           if($("input#business").val() === ''){
             $("input#business").css("border-color", "#ff3860");
             $("input#business").attr("placeholder", "Nature of business is required");
           }else{
             $("input#name").css("border-color", "");
           }
           if($("input#email").val() === ''){
             $("input#email").css("border-color", "#ff3860");
             $("input#email").attr("placeholder", "Email is required");
           }else{
             $("input#name").css("border-color", "");
           }
           if($("input#phone").val() === ''){
             $("input#phone").css("border-color", "#ff3860");
             $("input#phone").attr("placeholder", "Phone number is required");
           }else{
             $("input#name").css("border-color", "");
           }
         // });
  
        });
  
      });
  
      */  


      /* 

      $("button.send-message").click(function(event){
        event.preventDefault();
        
        $("input#name").focus(function(element){
        
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Full name is required");
          result = false;
        
        
        
        });

       $("input#cname").focus(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Company name is required");
          result = false;
        }
        else{
          $(this).css("border-color", "");
          //result = true;
        }
        return result;
       });

      $("input#business").focus(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Nature of Business is required");
          
          result = false;
        }
        else{
          $(this).css("border-color", "");
          //result = true;
        }
        return result;
      });

      $("input#email").focus(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Email address is required");
          
          result = false;
        }
        
        else{
          $(this).css("border-color", "");
          //result = true;
        }
        return result;
      });

      $("input#phone").focus(function(element){
        var mobile = String(this.value.trim());
        if(mobile === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Phone number is required");
          
        }
        else if(mobile.length < 10){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Please enter 10 digit number");
          result = false;
        }
        else{
          $(this).css("border-color", "");
          this.value = this.value.replace(/(\d{4})(\d{3})(\d{3})/,"$1-$2-$3");
          //result = true;
        }
        return result;
      });

      });
*/
     
     /*
     
     
      $("input#name").focusout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Full name is required");
          result = false;
        }
        else{
          $(this).css("border-color", "");
          //result = true;
        }
        return result;
      });

      $("input#cname").focusout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Company name is required");
          result = false;
        }
        else{
          $(this).css("border-color", "");
          //result = true;
        }
        return result;
      });

      $("input#business").focusout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Nature of Business is required");
          
          result = false;
        }
        else{
          $(this).css("border-color", "");
          //result = true;
        }
        return result;
      });

      $("input#email").focusout(function(element){
        if(this.value.trim() === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Email address is required");
          
          result = false;
        }
        
        else{
          $(this).css("border-color", "");
          //result = true;
        }
        return result;
      });

      $("input#phone").focusout(function(element){
        var mobile = String(this.value.trim());
        if(mobile === ''){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Phone number is required");
          
        }
        else if(mobile.length < 10){
          $(this).css("border-color", "#ff3860");
          $(this).attr("placeholder", "Please enter 10 digit number");
          result = false;
        }
        else{
          $(this).css("border-color", "");
          this.value = this.value.replace(/(\d{4})(\d{3})(\d{3})/,"$1-$2-$3");
          //result = true;
        }
        return result;
      });

      */

      
    

      
      
