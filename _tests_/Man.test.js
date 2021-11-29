const Manager = require ("../lib/Manager");

test ("gets manager object", () => {
    const manager = new Manager ("bryan", 40, "kcbryan10@gmail.com", 8)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test ("gets manager roles", () => {
    const manager = new Manager ("bryan", 40, "kcbryan10@gmail.com",)

    expect(manager.getRole()).toEqual("Manager")
})