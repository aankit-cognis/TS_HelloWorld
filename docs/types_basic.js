// // console.log("Hello Types");
// // let bar: string = "Swagat";
// // console.log(bar.toUpperCase());
// // let foo: number = 10.4;
// // console.log(foo.toFixed(2));
// // const bar = 2.4;
// // console.log(typeof bar);
// // var bar: boolean = true;
// // if (bar) {
// //   console.log("inside if ");
// // } else {
// //   console.log("inside else");
// // }
// // let bar: any;
// // //Magic coding
// // bar = 25.5;
// // console.log((<number>bar).toFixed(2));
// // console.log((bar as number).toFixed(2));
// //Admin = 10, Read_Only_User = 2;
// //ENUMS
// // enum Role {
// //   Admin = 1,
// //   Read_Only_User = 10,
// //   PublicUser = 20,
// // }
// // let person: {
// //   name: string;
// //   age: number;
// //   email?: string;
// //   departments: string[];
// //   role: Role;
// // } = {
// //   name: "John",
// //   age: 25,
// //   departments: ["Computers", "Physics"],
// //   role: Role.Admin,
// // };
// // if (person.role === Role.Admin) {
// //   //Special Codes
// //   console.log("For Admins");
// // }
// //TUPLES
// // let person: {
// //   name: string;
// //   age: number;
// //   departments: string[];
// //   role: [number, string][];
// // } = {
// //   name: "John",
// //   age: 25,
// //   departments: ["Computers", "Physics"],
// //   role: [[5, "Read_Only"]],
// // };
// // person.role = [
// //   [32, "Registered User"],
// //   [11, "Normal User"],
// // ];
// // console.log(person);
// // console.log(person);
// //Admin - 0 - 'ADMIN'
// //Public User - 1 - "PUBLIC_USER"
// //Registered User - 20 -  "REGISTERED_USER"
// //----------------------------
// enum Role {
//   ADMINISTRATOR = "admin",
//   PUBLIC_USER = 30,
//   REGISTERED_USER = 40,
// }
// let rahul = {
//   name: "Rahul",
//   role: Role.ADMINISTRATOR,
// };
// if (rahul.role == Role.ADMINISTRATOR) {
//   console.log("Rahuls is an Admin");
// } else if (rahul.role == Role.REGISTERED_USER) {
//   console.log("Rahuls is an Registered User");
// } else if (rahul.role == Role.PUBLIC_USER) {
//   console.log("Rahuls is an Public User");
// }
// // let bar: Role = Role.ADMINISTRATOR;
// // if (bar === Role.PUBLIC_USER) {
// // }
// let foo: number | string;
// if (typeof foo == "string") {
//   console.log("String", foo);
// } else if (typeof foo == "number") {
//   console.log("String", foo);
// }
