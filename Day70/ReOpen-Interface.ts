console.log(`****** ReOPEN INTERDACE *******`);

interface Acount {
  name: string;
  contactNo: number;
}

let Acount: Acount = {
  name: "Arham",
  contactNo: 213565578,
  email: "Arham234@gmail.com",
  Gender : 'male'
};

interface Acount {
  email: string; // add new property in interface
}

interface Acount {
  Gender: string; // add another  property in interface
}


console.log(Acount);
