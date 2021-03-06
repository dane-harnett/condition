var condition = new Condition({isDefined:true});
// or
var condition = new Condition('do');

var myVar = '';
condition.exec(myVar)
  .then(doSomething)
  .otherwise(doSomethingElse);



var condition = new Condition({isDefined:true, isObject:true});

// custom wrapper API
Util.isDefined(myVar).then(func);


var myObj = {
      name:{
        first:'Dane',
        last:'Harnett'
      }
    };
var condition = new Condition({
      isDefined:true,
      isObject:true,
      props:[
      {
        key:'name',
        isDefined:true,
        isOneOf:['a','b'],
        props:[
        {
          key:'first'
          isDefined:true
        },
        {
          key:'last',
          isDefined:true
        }
      }
      ]
    });


condition.exec(myObj).then(func);






var c = new Condition({isDefined:true});

// all subjects must pass the condition
c.all(myObj, name, anotherVar).then(func);

// only one of the subjects must pass the condition
c.one(myObj, name).then();


var c1 = new Condition({isDefined:true});
var c2 = new Condition({isDefined:false});

// myObj must pass c1 AND myOtherObj must pass c2
c1.exec(myObj)
  .and(c2, myOtherObj)
  .then(func);



c1.exec(myOb)
  .then(func)
  .otherwise(function(){
    c2.exec(otherobj)
      .then(func);
  });

condition.eval(myObj) // returns boolean

// possible facades to the options object
var x = new Condition('isDefined,isNotEmptyString,in([1,2,3])');
var y = new Condition('defined,notEmptyString,in(1,2,3)');
















