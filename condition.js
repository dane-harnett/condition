(function(window){
  function Condition(options) {
    var self     = this;
    self.result  = true;
    self.options = options;
    self.methods = {
      isDefined: function(value) {
        return (typeof self.subject !== 'undefined') === value;
      },
      isFunction: function(value) {
        return (typeof self.subject === 'function') === value;
      },
      isFalse: function(value) {
        return self.subject === false;
      },
      isTrue: function(value) {
        return self.subject === true;
      }
    };
  }
  // execute the condition, all supplied conditions must pass
  Condition.prototype.exec = function(subject) {
    var self     = this;
    self.result  = true;
    self.subject = subject;
    for (var key in self.options){
      var val = self.options[key];
      if (self.execMethod(key, val) === false) {
        self.result = false;
        break;
      }
    }
    return self;
  };

  Condition.prototype.execMethod = function(key, value) {
    var self            = this,
        returnValue     = true,
        isFunction      = new Condition({isFunction:true}),
        isFalse         = new Condition({isFalse:true}),
        potentialMethod = self.methods[key];
    
    isFunction.exec(potentialMethod)
      .and(isFalse, potentialMethod(value))
      .then(function(){
        returnValue = false;
      });
    
    return returnValue;
  };

  //
  // @param array of subjects
  // all subjects must pass all conditions 
  //
  Condition.prototype.all = function() {
    // gotta do this
  };
  //
  //@param array of subjects
  // at least one subject must pass all conditions
  //
  Condition.prototype.one = function() {
    // gotta do this
  };
  Condition.prototype.and = function(conditionObj, subject) {
    var self = this;
    if (self.result === true) {
      // evaluate the "and"
      return conditionObj.exec(subject);
    }
    return self;
  };
  Condition.prototype.andAll = function(conditionObj, subjects) {
  };
  Condition.prototype.or = function(conditionObj, subject) {
    var self = this;
    if (self.result === false) {
      // evaluate the "or"
      return conditionObj.exec(subject);
    }
    return self;
  };
  Condition.prototype.orAll = function(conditionObj, subjects) {
  };
  Condition.prototype.then = function(func) {
    var self = this;
    if (self.result) {
      func();
    }
    return self;
  };
  Condition.prototype.otherwise = function(func) {
    var self = this;
    if (!self.result) {
      func();
    }
    return self;
  };
  window.Condition = Condition;
})(window);