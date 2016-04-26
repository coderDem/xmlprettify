'use strict';

angular.module('xmllintApp.auth', [
  'xmllintApp.constants',
  'xmllintApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
