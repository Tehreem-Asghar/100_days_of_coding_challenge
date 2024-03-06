//Question 15: Changing Guest List: One of your guests can't make it to the dinner,
//so you need to send out a new set of invitations with a replacement guest.

let Guest_list :string[] =['Arham','Taha','sarim','Daniyal'];

for(let Guest of Guest_list){
    console.log(`Dear ${Guest}: would you like to join me for dinner?`);
}

console.log(`Arham can't make it to dinner.`);

let new_guest :string="Zeshan";
Guest_list[0]=new_guest;

for(let guest of Guest_list){
    console.log(`Dear ${guest} would you like to join me for dinner?`);
}