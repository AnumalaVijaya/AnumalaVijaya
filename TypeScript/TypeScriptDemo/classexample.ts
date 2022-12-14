class Employee{
    empCode:number;
    empName:string;
    constructor(empcode:number,empname:string)
    {
        this.empCode=empcode;
        this.empName=empname;
    }
   
}
let emp=new Employee(101,"abc");
console.log(emp);