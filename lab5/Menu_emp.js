class Person {
    constructor(FullName, money, sleepMood, healthRate) {
        this.FullName = FullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = "Happy";
        } else if (hours < 7) {
            this.sleepMood = "Tired";
        } else {
            this.sleepMood = "Lazy";
        }
        return this.sleepMood;
    }

    eat(meals) {
        if (meals === 1) {
            this.healthRate = 50;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 3) {
            this.healthRate = 100;
        }
        return this.healthRate;
    }

    buy(item) {
        this.money -= item * 10;
    }
}

class Employee extends Person {
    static id = 0;
    
    constructor(email, workMood,salary,isManager, FullName, money, sleepMood, healthRate) {
        super(FullName, money, sleepMood, Employee.validhealthRate(healthRate));
        this.ID = ++Employee.id;
        this.email = email;
        this.workMood = workMood;
        this.salary = Employee.validSalary(salary);
        this.isManager = isManager === "mngr";
    }

    static validSalary(value) {
        return value >= 1000 ? value : 1000;
    }

    static validhealthRate(value) {
        return value >= 0 && value <= 100 ? value : 0;
    }

    work(hours) {
        if (hours === 8) this.workMood = "happy";
        else if (hours > 8) this.workMood = "tired";
        else this.workMood = "lazy";
    }
}

class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }

    getAllEmployees() {
        return this.employees;
    }

    getEmployee(empId) {
        const employee=this.employees.find(emp => emp.ID === empId);
        let result;
        if(employee)
        { 
            if(employee.isManager === true)
            {
                
                result= `
                Fullname: ${employee.FullName} 
                Email: ${employee.email} 
                workMood: ${employee.workMood}
                salary:undefine 
                isManager: True 
                sleepMood:${employee.sleepMood} 
                healthRate: ${employee.healthRate}`

            }else
            {
                result= `
                Fullname: ${employee.FullName}
                Email: ${employee.email} 
                workMood: ${employee.workMood}
                salary: ${employee.salary} 
                sleepMood:${employee.sleepMood} 
                healthRate: ${employee.healthRate}`
            }
        }
        return result;
    }
    
    hire(employee) {
        this.employees.push(employee);
    }
    
    fire(empId) {
        const employee=this.employees.find(emp => emp.ID === empId);
        if(employee)
        {  
            this.employees.splice(this.employees.indexOf(employee),1);
        }else
        {
            return `the employee of id : ${empId} doesn't Exit`;
        }
    }
}


function Menu(){
    var employees = [];
    var Of1 = new Office("OfficeONe", employees);

while(true)
{
    
  var opation=prompt(
    `Menu:
    1. Add new employee - enter "add"
    2. Get all employees - enter  "get"
    3. Fire an employee - enter "fire"
    4. Quit - enter "q"
    Enter your choice:
     `
);

if(opation ===null || opation === "q")
{
    break;
}


switch(opation)
{
    case "add":
         
          do {
               var FullName=prompt("Enter Employee name:");
               
              } while (FullName === null || isFinite(FullName));
          do {
            var Email=prompt("Enter Employee Email:");
          
        } while (Email === null || Email.length <10);
          do {
            var isManager = prompt(`
            Is the employee a manager?:
            1. If manager - press "mngr"
            2. If normal employee - press "nrml"
            `);
            
        } while (isManager === null);

        do {
            var salary=prompt("Enter Employee Salary:");
            
        } while (salary === null || isNaN(salary));
        do {
            var sleepMood=prompt("Enter Employee SleepMood:").toLocaleLowerCase();

            
        } while (sleepMood === null || isFinite(sleepMood) );
        do {
        

            var healthRate=prompt("Enter Employee HealthRate:");
            
        } while (healthRate === null || isNaN(salary)|| !(healthRate >=0 &&  healthRate<=100 ));
        const emp=new Employee(Email," ",salary,isManager,FullName," ",sleepMood,healthRate);
            Of1.hire(emp);
            
       break;
    case "get":

        do {
          var getemp=prompt(
            `
            1-get AllEmployess- press All
            2-get employee by id-press empid     
            `) ;     
        } while (getemp===null);
          switch(getemp)
          {
            case "All":
                console.log(Of1.getAllEmployees());
                break;
            case "empid":
                do{
                var EmpId=Number(prompt(`Enter the ID of Employee`)) ;   
                } while (EmpId===null || isNaN(EmpId));
                 console.log(Of1.getEmployee(EmpId));
                 break;
            default:
                alert("Invalid Opation") ;   
          }
       break;

    case "fire":
        do{
            var EmpId=Number(prompt(`Enter the ID of Employee`)) ;   
            } while (EmpId===null || isNaN(EmpId));
            Of1.fire(EmpId);
          
       break;

    default:
      alert("Invalid Opation"); 
}
  
  
  }
}

Menu()