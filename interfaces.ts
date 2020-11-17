// interface Vehicle {
//   name: string;
//   start(): void;
//   stop(): void;
// }

// let car: Vehicle = {
//   name: "Volvo Car",
//   start() {
//     console.log("Starting .. ", this.name);
//   },
//   stop() {
//     console.log("Stopping .. ", this.name);
//   },
// };
// // car.start();
// // car.stop();

// class Bus implements Vehicle {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
//   start(): void {
//     console.log("Inside Start of Bus");
//     console.log("Stopping .. ", this.name);
//   }
//   stop(): void {
//     console.log("Inside Stop of Bus");
//     console.log("Stopping .. ", this.name);
//   }
// }

// class Car implements Vehicle {
//   name: string;
//   carType: string;
//   constructor(name: string, carType: string) {
//     this.name = name;
//     this.carType = carType;
//   }
//   start(): void {
//     console.log("Inside Start of CAR");
//     console.log("Stopping .. ", this.name);
//   }
//   stop(): void {
//     console.log("Inside Stop of CAR");
//     console.log("Stopping .. ", this.name);
//   }
// }

// let tataCar = new Car("Tata Car", "Sports");
// StratAndStopCharging(tataCar);

// function StratAndStopCharging(vehicle: Vehicle) {
//   console.log("Inside Start and Stop Charging Machine");
//   vehicle.start();
//   vehicle.stop();
// }
