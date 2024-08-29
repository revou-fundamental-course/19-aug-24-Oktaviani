// ini Java Script 
// Welcome message
 function setUserName() {
     const UserName = prompt("please enter your name:");
     if (UserName) {
         document.getElementById("UserName").textContent = UserName;
    
    }
}

setUserName ();

// Form Validation
 document.getElementById("ContactForm").addEventListener("sumbit", function(event) {
     event.preventDefault();

     const name = document.getElementById("Name").value;
     const email = document.getElementById("email").value;
     const  gender = document.getElementById("gender").value;
     const phone = document.getElementById("phone").value;
     const message = document.getElementById("message").value;

     if (name && email && gender && phone && message) {
         const result = `
         <h3>Form Submitted Successfully!</h3>

         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Message:</strong> ${message}</p>
     `;
     document.getElementById("formResult").innerHTML = result;
     document.getElementById("contactForm").reset();
 } else {
     alert("Please fill in all fields.");
 }
});