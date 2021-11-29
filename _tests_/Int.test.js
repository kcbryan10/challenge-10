const Intern = require("../lib/intern");

test ("creates intern object", () => {
    const intern = new Intern("bryan", 40, "kcbrayn10@gmail.com", "KU");

    expect(intern.school).toEqual(expect.any(String));
})

test ("gets school of intern", () => {
    const intern = new Intern("bryan", 40, "kcbrayn10@gmail.com", "KU");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test ("gets employees role", () => {
    const intern = new Intern("bryan", 40, "kcbrayn10@gmail.com", "KU");

    expect(intern.getRole()).toEqual("Intern");
});