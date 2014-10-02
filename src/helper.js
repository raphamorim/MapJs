/*
 * Helper = Utils functions
 */
function Helper() {

    this.getAtt = function(selector, value) {
      return document.querySelector(selector).getAttribute(value);
    }

    this.html = function(element, value) {
      document.querySelector(element).innerHTML = value;
    }

    this.getSize = function(value) {
      return value.replace("px", "");
    }
}
