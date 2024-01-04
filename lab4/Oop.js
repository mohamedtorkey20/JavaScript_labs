
//----------------------------------------Constructor functions------------------------------

function Person_constructor(FullName,money,sleepMood,healthRate)
{

    this.FullName=FullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
}
Person_constructor.prototype.sleep=function(hours)
 {
    if(hours===7)
    {
        this.sleepMood="Happy";
    }else if(hours<7)
    {
      this.sleepMood="Tired";
    }else
    {
        this.sleepMood="Lazy";
    }

 };
 
  
 Person_constructor.prototype.eat=function(meals)
  {
   if(meals===1)
   {
    this.healthRate=50;
   }else if(meals=== 2)
   {
    this.healthRate=75;
   }else if(meals===3)
   {
    this.healthRate=100;
   }

  };

  Person_constructor.prototype.Buy=function(item)
  {
    this.money-=item*10;
  };


const Person1=new Person_constructor("mohamed torkey",400,"Tired",100);

Person1.sleep(8);
Person1.eat(2);
Person1.Buy(3);

console.log(Person1);




//-------------------------------------------Using Classes-----------------------------------

class Person 
{
    Person(FullName,money,sleepMood,healthRate)
   {
    this.FullName=FullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
   }

  sleep=function(hours)
 {
    if(hours===7)
    {
        this.sleepMood="Happy";
    }else if(hours<7)
    {
      this.sleepMood="Tired";
    }else
    {
        this.sleepMood="Lazy";
    }

 };
 
  
 eat=function(meals)
  {
   if(meals===1)
   {
    this.healthRate=50;
   }else if(meals=== 2)
   {
    this.healthRate=75;
   }else if(meals===3)
   {
    this.healthRate=100;
   }

  };

 Buy=function(item)
  {
    this.money-=item*10;
  };

}

const Person2=new Person("mohamed torkey",400,"Lazy",100);

Person2.sleep(6);
Person2.eat(4);
Person2.Buy(1);

console.log(Person2);


//--------------------------------Using Objects Linking to Other Objects (OLOO)-------------------------------------
const PersonOloo={  
    init(FullName,money,sleepMood,healthRate)
   {

    this.FullName=FullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
    return this; 
  },

sleep(hours)
 {
    if(hours===7)
    {
        this.sleepMood="Happy";
    }else if(hours<7)
    {
      this.sleepMood="Tried";
    }else
    {
        this.sleepMood="Lazy";
    }

 },
 
  
  eat(meals)
  {
   if(meals===1)
   {
    this.healthRate=50;
   }else if(meals=== 2)
   {
    this.healthRate=75;
   }else if(meals===3)
   {
    this.healthRate=100;
   }

  },

  Buy(item)
  {
    this.money-=item*10;
  },
};

const Person3 = Object.create(PersonOloo).init("mohamed torkey",300,"happy",100);

Person3.sleep(6);
Person3.eat(2);
Person3.Buy(2);

console.log(Person3);

//------------------------------------- Using Factory functions-------------------------------------
function PersonFactory(FullName,money,sleepMood,healthRate)
{
    return{

    FullName,
    money,
    sleepMood,
    healthRate,
    

    sleep(hours)
    {
        if(hours===7)
        {
            this.sleepMood="Happy";
        }else if(hours<7)
        {
        this.sleepMood="Tried";
        }else
        {
            this.sleepMood="Lazy";
        }

    },
 
  
    eat(meals)
    {
    if(meals===1)
    {
        this.healthRate=50;
    }else if(meals=== 2)
    {
        this.healthRate=75;
    }else if(meals===3)
    {
        this.healthRate=100;
    }

    },

    Buy(item)
    {
        this.money-=item*10;
    },
  };
}

const Person4=new PersonFactory("mohamed torkey",400,"happy",100);

Person4.sleep(6);
Person4.eat(2);
Person4.Buy(2);

console.log(Person4);


