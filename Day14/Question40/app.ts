//Question 40: Album: Create objects for music albums.
// Explain & TIP: Use functions to return objects.
//  This exercise practices creating and manipulating objects, and introducing optional function parameters.

function make_album(artist:string , title:string, track? : number){
    let Album ={artist, title ,track};
    if(track){
       Album.track = track;
    }
    return Album
}

console.log(make_album("Tehreem","Object"));
console.log(make_album('Ed Sheeran', 'Divide', 12));
console.log(make_album('arham','567',90));