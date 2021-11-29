const Employee = require("../lib/Employee");

test ("create employee object", () => {
    const employee = new Employee ("bryan", 40, "kcbryan10@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employees name", () => {
    const employee = new Employee("bryan", 40, "kcbryan10@gmail.com")

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employees id", () => {
    const employee = new Employee("bryan", 40, "kcbryan10@gmail.com")

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employees email", () => {
    const employee = new Employee("bryan", 40, "kcbryan10@gmail.com")

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets employees role", () => {
    const employee = new Employee("bryan", 40, "kcbryan10@gmail.com")

    expect(employee.getRole()).toEqual("Employee");
});