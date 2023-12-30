// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    constructor(name) {
      this.name = name;
    }
  
    displayInfo() {
      console.log(Employee `${this.name}`);
    }
  }
  
  class Manager extends Employee {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
  
    displayInfo() {
      console.log(Manager `${this.name}, Department: ${this.department}`);
    }
  }
  
  // Пример использования классов
  const emp = new Employee("John");
  emp.displayInfo(); // Выводит "Employee: John"
  
  const manager = new Manager("Alice", "Sales");
  manager.displayInfo(); // Выводит "Manager: Alice, Department: Sales"
  

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    static orderCounter = 0;
  
    constructor() {
      this.orderNumber = ++Order.orderCounter;
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getTotalPrice() {
      let totalPrice = 0;
      for (const product of this.products) {
        totalPrice += product.price;
      }
      return totalPrice;
    }
  }
  
  // Пример использования класса Order
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const order = new Order();
  order.addProduct(new Product("Shoes", 50));
  order.addProduct(new Product("Shirt", 30));
  console.log(order.getTotalPrice()); // Выводит общую стоимость заказа (80)
  