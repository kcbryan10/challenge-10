const Engineer = require("../lib/Engineer");

test ("create enjgneer object", () => {
    const engineer = new Engineer ("bryan", 40, "kcbrayn10@gmail.com", "kcbryan10");

    expect(engineer.github).toEqual(expect.any(String));
});

test ("gets github", () => {
    const engineer = new Engineer ("bryan", 40, "kcbrayn10@gmail.com", "kcbryan10");

    expect(engineer.getGit()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("gets role of employee", () => {
    const engineer = new Engineer("bryan", 40, "kcbrayn10@gmail.com", "kcbryan10");

    expect(engineer.getRole()).toEqual("Engineer");
});

