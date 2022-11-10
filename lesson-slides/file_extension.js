// getting the user file

// Eg userFile = name.js

// Get the extension
// so that the name of the file will be split into two items in an array['name','js']
//To get ext from the array use pop()
//the last item is always the file extension

// ie 'js'

let userFile = prompt('What is the name of your file? Please include the file extension');

const splited = userFile.split(".");

function ext(){
    let extension = splited.pop();
    if (extension == "html"){
        console.log("This is a html file");
    }

    else if(extension == "py"){
        console.log("This is a Python file");
    }
    else if(extension == "java"){
        console.log("This is a Java file");
    }
    else if(extension == "c"){
        console.log("This is a C file");
    }
    else if(extension == "cs"){
        console.log("This is a C## file");
    }
    else if(extension == "cpp"){
        console.log("This is a C++ file");
    }
    else if(extension == "cgi"){
        console.log("This is a Pearl file");
    }
    else if(extension == "php"){
        console.log("This is a PHP file");
    }
    else if(extension == "swift"){
        console.log("This is a Swift file");
    }
    else if(extension == "f"){
        console.log("This is a FORTRAN file");
    }
    else if(extension == "cob"){
        console.log("This is a COBOL file");
    }
    else if(extension == "kt"){
        console.log("This is a Kotlin file");
    }
    else if(extension == "r"){
        console.log("This is a R file");
    }
    else if(extension == "rb"){
        console.log("This is a Ruby file");
    }
    else if(extension == "sage"){
        console.log("This is a Sage file");
    }
    else if(extension == "sh"){
        console.log("This is a Shell file");
    }
    else if(extension == "js"){
        console.log("This is a Javascript file");
    }
        
    else if(extension == "vb"){
        console.log("This is a Visual Basic file");
    }
    else{
        console.log("Your programming language is rare!");
    }

}

ext()
