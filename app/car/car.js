class Car {
	gas = 0;
    company = "not-defined";
    model = "not-defined";
    year = "not-defined";
    wheels = 4;
    kmPerLt = 0;
    color = "not-defined";
    hybrid = false;
    tank = 0;
    kms = 0;

    constructor(props) {
		this.company = props["company"];
		this.color = props["color"];
		this.kmPerLt = props.kmPerLt;
		this.tank = props.tank;
		this.price = props.price;
		this.year = props.year;
	}

    availableGas() {
		return this.tank - this.gas;
	}

	addGas(liters) {
		if (liters > this.availableGas()) {
			this.gas = this.tank;
		} else {
			this.gas += liters;
		}
	}

	currentGas() {
		return this.gas;
	}

	maxDT() {
		return this.gas * this.kmPerLt;
	}

	move(kms) {
		this.maxDT();
		if (kms > this.maxDT()) {
			this.kms += this.maxDT();
			this.gas -= this.maxDT() / this.kmPerLt;
		} else {
			this.kms += kms;
			this.gas -= kms / this.kmPerLt;
		}
	}

	get currentValue() {
		const time = new Date();
		const currentYear = time.getFullYear();
		let newPrice = this.price;

		for (let diff = currentYear - this.year; diff > 0; diff--) {
			newPrice -= newPrice * 0.2;
		}

		return newPrice;
	}
}
export default Car;