class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

class CarCollection {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
    }


    groupCarsByBrand() {
        const groupedCars = {};

        // Grouping cars by brand
        for (const car of this.cars) {
        // Nếu chưa có nhóm cho thương hiệu này, khởi tạo một mảng rỗng
        if (!groupedCars[car.brand]) {
            groupedCars[car.brand] = [];
        }
        // Thêm xe vào nhóm tương ứng
            groupedCars[car.brand].push(car);
        }

        // Chuyển đổi đối tượng nhóm thành mảng
        return Object.values(groupedCars);
    }
}

// Function to transform input array into Car objects and group them
function transformAndGroupCars(inputArray) {
    const carCollection = new CarCollection();
    
    inputArray.forEach(carData => {
        const car = new Car(carData.brand, carData.model);
        carCollection.addCar(car);
    });
    
    return carCollection.groupCarsByBrand();
}

// Initial array of car objects
const carsArray = [
    { brand: 'Hyundai', model: 'Santafe' },
    { brand: 'Hyundai', model: 'Sonata' },
    { brand: 'Vinfast', model: 'Lux SA' },
    { brand: 'Toyota', model: 'Camry' },
    { brand: 'Vinfast', model: 'Lux A' },
    { brand: 'Toyota', model: 'Vios' }
];

// Transform and group the cars
const groupedCars = transformAndGroupCars(carsArray);

console.log(groupedCars);
