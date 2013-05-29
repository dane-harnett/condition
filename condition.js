(function(window){
  function Condition(options) {
    var self = this;
    this.result = true;
    this.options = options;
    this.methods = {
      isDefined: function(value) {
        return (typeof self.subject !== 'undefined') == value;
      }
    };
  }
  // execute the condition, all supplied conditions must pass
  Condition.prototype.exec = function(subject) {
    var self = this;
    this.result = true;
    this.subject = subject;
    for (var key in this.options){
      var val = this.options[key];
      if (typeof self.methods[key] == 'function' && self.methods[key](val) === false) {
        self.result = false;
        break;
      }
    }
    return this;
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
  Condition.prototype.then = function(func) {
    if (this.result) {
      func();
    }
    return this;
  };
  Condition.prototype.otherwise = function(func) {
    if (!this.result) {
      func();
    }
    return this;
  };
  window.Condition = Condition;
})(window);