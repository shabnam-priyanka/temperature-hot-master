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
info.chargeBill(150);
info.chargeBill(20000);
console.log(info.salary);

