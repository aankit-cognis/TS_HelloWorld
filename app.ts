// interface IVehicle {
//   name: string;

//   start(): void;
//   stop(): void;
// }

// interface IChargable {
//   chargerType: string;
//   startCharge(): void;
//   stopCharge(): void;
// }

// class Car implements IVehicle, IChargable {
//   name: string;
//   cartype: string;

//   constructor(name: string, cartype: string) {
//     this.name = name;
//     this.cartype = cartype;
//   }

//   start(): void {
//     console.log("Starting Car ...", this.name);
//   }
//   stop(): void {
//     console.log("Stopping Car ...", this.name);
//   }

//   chargerType: string;
//   startCharge(): void {
//     console.log("Charging Car ...", this.name);
//   }
//   stopCharge(): void {
//     console.log("Stopped Charging Car ...", this.name);
//   }
// }

// class Bus implements IVehicle {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   start(): void {
//     console.log("Starting Inside Bus", this.name);
//   }
//   stop(): void {
//     console.log("Stopping Inside Bus", this.name);
//   }
// }

// let car = new Car("Tata Nexon", "SportsCar");
// newMethod(car);
// let bus = new Bus("Volvo Bus");
// newMethod(bus);

// function newMethod(car: IVehicle) {
//   car.start();
//   console.log("Waiting for 5 minutes...");
//   car.stop();
// }

//by URL
// let person: any = {
//   name: "John Smith",
//   age: 25,
//   address: {
//     city: "Bhubaneswar",
//   },
// };

// console.log(person?.address?.state ?? "N/A"); //undefined | null
