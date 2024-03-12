// Question 32: Checking Usernames: Ensure uniqueness in usernames.
// Explain & TIP: Checking for uniqueness is crucial in user management. 
//Use loops and conditionals to handle case-insensitive comparisons.



let current_users :string[]=['tehreem','arham','ayesha',"taha","sarim"];
let new_users :string[]=['daniyal','arham','zeeshan','tAha','farhan'];

for (let user=0; user<new_users.length; user++){
    if(current_users.includes(new_users[user].toLowerCase())){
        console.log(`${new_users[user]} will need to enter a new username.`);
    }else{
        console.log(`${new_users[user]} is available.` )
    }
}
