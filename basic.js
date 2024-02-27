

const bout = document.getElementById("sendButton");
bout.addEventListener("click", sendForm);


function sendForm(event){
    
    removeError();
    
    const isValid = checkIfFormIsValid();
    if (!isValid){
        
        displayError()
    }
    else{
        
        postNewComment();

        cleanFrom();

    }

    

}



function checkIfFormIsValid(){
    const firstNameValue = document.getElementById("firstName").value;
    const lastNameValue = document.getElementById("lastName").value;
    const messageValue = document.getElementById("message").value;
    
    return firstNameValue != "" &&  lastNameValue != "" &&  messageValue != "";
  

}


function postNewComment(){
   
    const firstNameValue = document.getElementById("firstName").value;
    const lastNameValue = document.getElementById("lastName").value;
    const messageValue = document.getElementById("message").value;
   
    const div1 = document.createElement("div");
    div1.className = "flex space-x-4 text-sm text-gray-500";
    div1.addEventListener("click", deleteComment);

    const div2 = document.createElement("div");
    div2.className = "flex-1 py-10 border-t border-gray-200";
    div1.appendChild(div2);

    const h3 = document.createElement("h3");
    h3.className = "font-medium text-gray-900";
    h3.innerHTML = firstNameValue + " " + lastNameValue;
    div2.appendChild(h3)

    const div3 = document.createElement("div");
    div3.className = "prose prose-sm mt-4 max-w-none text-gray-500";
    div2.appendChild(div3);

    const para = document.createElement("p");
    para.innerHTML = messageValue;
    div3.appendChild(para);


    const commentList = document.getElementById("comment-list");
    commentList.appendChild(div1);

}


function cleanFrom(){

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("message").value = "";

}

function displayError(){
    const errorElement = document.getElementById("error-message");
    errorElement.style.display = "inline";

}

function removeError(){
    const errorElement = document.getElementById("error-message");
    errorElement.style.display = "none";

}
