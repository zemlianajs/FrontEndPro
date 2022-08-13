let firstName,
    lastName,
    email,
    yearOfBirth,
    age;

do{
    firstName = prompt(`What is your name?`);    
    if(firstName){
        firstName = firstName.trim();
        firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
        if (firstName.includes(` `)){
        let whiteSpace = firstName.indexOf(` `);
        let secondName = firstName[whiteSpace+1].toUpperCase();
        firstName = firstName.slice(0, whiteSpace+1) + secondName + firstName.slice(whiteSpace+2);   
        }
    }    
} while(!firstName);

do{
    lastName = prompt(`Please enter your last name`);
    if(lastName){
        lastName = lastName.replaceAll(` `, ``)
        lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
        if (lastName.includes(`-`)){
            let dash = lastName.indexOf(`-`);
            let secondLastName = lastName[dash+1].toUpperCase();
            lastName = lastName.slice(0, dash+1) + secondLastName + lastName.slice(dash+2);
        }
    }
} while(!lastName);

do{
    email = prompt(`Please enter your email`); 
    if(email) email = email.replaceAll(` `, ``).toLowerCase();
} while(!email || !email.includes(`@`) || !email.includes(`.`) || email.startsWith(`@`) || email.endsWith(`@`));

do{
    yearOfBirth = prompt(`Please enter your year of birth`);
    if(yearOfBirth){
        yearOfBirth = yearOfBirth.replaceAll(` `, ``);
        age = new Date().getFullYear() - yearOfBirth;
    } 
} while(isNaN(yearOfBirth) || !yearOfBirth);

document.write(
   ` <ul>
        <li>Full name: ${firstName} ${lastName}</li>
        <li>Email: ${email}</li>
        <li>Age: ${age}</li>
    </ul>`
)