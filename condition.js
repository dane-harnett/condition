(function(window){
  function Condition(options) {
    this.options = options;
  }
  Condition.prototype.exec = function(subject) {
    this.subject = subject;
  };
  window.Condition = Condition;
})(window);