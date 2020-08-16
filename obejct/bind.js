const info = {
    firstName: "shabz",
    lastName: "khan",
    salary: 9000000,
    getFullName: function(){
        console.log(this.firstName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    } 
}

const heroPerson = {
    firstName: " Hero",
    lastName: "Balam",
    salary: 900000
}

const friendlyPerson = {
    firstName: 'zero',
    lastName: 'golam',
    salary: 260000,
}

const heroChargeBill = info.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(6000);
console.log(heroPerson.salary);
console.log(friendlyPerson.salary);