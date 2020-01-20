'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Tabs
var tabsWithContent = function () {
  var tabs = document.querySelectorAll('.tabs li');
  var tabsContent = document.querySelectorAll('.tab-content');

  var deactvateAllTabs = function deactvateAllTabs() {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  var hideTabsContent = function hideTabsContent() {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove('is-active');
    });
  };

  var activateTabsContent = function activateTabsContent(tab) {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  var getIndex = function getIndex(el) {
    return [].concat(_toConsumableArray(el.parentElement.children)).indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  });

  tabs[0].click();
}();

// Mobile Nav
var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
if ($navbarBurgers.length > 0) {
  $navbarBurgers.forEach(function (el) {
    el.addEventListener('click', function () {
      var target = el.dataset.target;
      var $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
}