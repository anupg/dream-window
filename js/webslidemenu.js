/* global $ */
/* global document */
/* global wsfun2 */
/* global abc4 */
/* global setTimeout */

(function() {
  'use strict';
  $(document).ready(function() {
    $('#wsftoggleopen').on('click', function() {
      $("body").addClass('wsfvisible');
      setTimeout(function() {
        wsfun1();
      }, 300);
      return false;
    });

    function wsfun1() {
      $("body").addClass('wsfanimated');
      setTimeout(function() {
        wsfun2();
      }, 300);
      return false;
    }
    $('#wsftoggleclose').on('click', function() {
      $("body").removeClass('wsfanimated');
      setTimeout(function() {
        wsfun3();
      }, 400);
      return false;
    });

    function wsfun3() {
      $("body").removeClass('wsfvisible');
      setTimeout(function() {
        abc4();
      }, 400);
      return false;
    }
  });
}());