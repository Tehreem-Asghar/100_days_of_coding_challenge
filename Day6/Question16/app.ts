//Question 16: More Guests: You've found a bigger dinner table, so there's room 
//for more guests.

let Guest_list :string[] =['Arham','Taha','sarim','Daniyal'];

console.log("Great news! I found a bigger dinner table!");

Guest_list.unshift("zeeshan");
Guest_list.splice(3,0, "Kashan");
Guest_list.push("Farhan");

for(let i=0; i<Guest_list.length; i++){
    console.log(`Dear: ${Guest_list[0]}, would you like to join me for dinner?`);
}
