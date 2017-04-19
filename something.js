var _X_ = function() {

  /* Selectors */
  var get = function(elem) {
    if(elem.constructor === String) {
      var firstChar = elem.substr(0, 1);
      if(firstChar === '#')
        return _getByID(elem.substr(1, elem.length));
      else if(firstChar === '.')
        return _getByClass(elem.substr(1, elem.length));
      else
        return _getByTag(elem);
    }
  };

  var _getByID = function(elemID) {
    return document.getElementById(elemID);
  };

  var _getByClass = function(elemClass) {
    return document.getElementsByClassName(elemClass);
  };

  var _getByTag = function(elemTag) {
    return document.getElementsByTagName(elemTag)
  };






  // return
  return {
    get: get
  }

}();  // self invoking function