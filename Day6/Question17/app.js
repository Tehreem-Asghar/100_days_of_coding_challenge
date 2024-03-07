"use strict";
//Question 17: Shrinking Guest List: Unfortunately,
//your new table won’t arrive in time, and you can only invite two guests.
//Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list.
//Removing guests from your list is straightforward but should be done thoughtfully.
let Guest_list = ['Arham', 'Taha', 'sarim', 'Daniyal'];
//console.log("Great news! I found a bigger dinner table!");
Guest_list.unshift("zeeshan");
Guest_list.splice(3, 0, "Kashan");
Guest_list.push("Farhan");
// for(let i=0; i<Guest_list.length; i++){
//     console.log(`Dear: ${Guest_list[0]}, would you like to join me for dinner?`);
// }
console.log("unfortunately: I can invite only two people for dinner.");
while (Guest_list.length > 2) {
    let removed = Guest_list.pop();
    console.log(`sorry, ${removed}, I can not invite to dinner`);
}
for (let invite of Guest_list) {
    console.log(`Dear: ${invite} you are still invited to dinner`);
}
