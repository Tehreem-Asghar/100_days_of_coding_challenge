console.log(`***** INTERFACE METHOD AND PARAMETERS *****`);

interface Student {
  name: string;
  present: boolean;
  Action(): void;
}
let student: Student = {
  name: "Tehreem",
  present: true,
  Action() {
    console.log(`${this.name} Attend today class : ${this.present}`);
  },
};
student.Action();// output : Tehreem Attend today class : true