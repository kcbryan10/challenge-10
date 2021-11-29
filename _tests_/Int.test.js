const intern = require("../lib/intern");

test ("creates intern object", () => {
    const intern = new intern("bryan", 40, "kcbrayn10@gmail.com", "KU");

    expect(intern.school).toEqual(expect.any(String));
})

test ("gets school of intern", () => {
    const intern = new intern("bryan", 40, "kcbrayn10@gmail.com", "KU");

    expect(intern.getschool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test ("gets employees role", () => {
    const intern = new intern("bryan", 40, "kcbrayn10@gmail.com", "KU");

    expect(intern.getRole).toEqual("intern");
});