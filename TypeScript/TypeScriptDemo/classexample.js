var Employee = /** @class */ (function () {
    function Employee(empcode, empname) {
        this.empCode = empcode;
        this.empName = empname;
    }
    return Employee;
}());
var emp = new Employee(101, "abc");
console.log(emp);
