const Car = require('./car.js')

const nissan240sx = new Car({
	color: "Blue",
	model: "240sx",
	year: 1975,
	price: 850000,
	kmPerLt: 9.8,
	tank: 80,
	company: "Nissan",
});

test("Car is the correct starting price", () => {
	expect(nissan240sx.price).toBe(850000);
});

test("Car is made by Nissan", () => {
	expect(nissan240sx.company).toBe("Nissan");
});

test("Car color equal to red", () => {
	expect(nissan240sx.color).toBe("Blue");
});

test("Car current gas equal to zero", () => {
	expect(nissan240sx.currentGas()).toBe(0);
});

test("Refill gas", () => {
	expect(nissan240sx.availableGasSpace()).toBeGreaterThanOrEqual(0);
	nissan240sx.addGas(80);
	expect(nissan240sx.currentGas()).toBeLessThanOrEqual(nissan240sx.tank);
});

test("Car kmPerLt equal to nine eight", () => {
	expect(nissan240sx.kmPerLt).toBe(9.8);
});

test("Move car 700 kms", () => {
	const kmBefore = nissan240sx.kms;
	nissan240sx.move(700);
	expect(nissan240sx.currentGas()).toBeLessThanOrEqual(nissan240sx.tank);
	expect(nissan240sx.currentGas()).toBe(0);
	expect(nissan240sx.kms).toBeGreaterThan(kmBefore);
});

test("move car 5 kms", () => {
	const kmBefore = nissan240sx.kms;
	nissan240sx.move(5);
	expect(nissan240sx.kms).toBe(kmBefore);
});

test("car current sale price is lower", () => {
	expect(nissan240sx.currentValue).toBeLessThan(850000);
});