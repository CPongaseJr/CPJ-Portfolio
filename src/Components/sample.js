class Person {
	constructor(name) {
		this.name = name;
}

greet () {
console.log(`Hello ${this.name}`);
}
}

class Applicant extends Person {
}
let applicant1 = new Applicant('Catalino Jr.');
applicant1.greet();

