/**
 *  Assert class check the type for handle params
 *  author: xyh
 *  Date: 2018/7/24 14:19
 *  describe: write assert some type
 */

import _ from 'lodash';
const lodash = _;

import Vue from 'vue';

export function assert (condition, msg) {
  if (!condition) {
    throw  new Error('[wife assert]' + msg);
  }
}

export function isNumber (value, msg) {
  assert(lodash.isNumber(value), msg || `${value}` + 'is not number type, number is expected.' )
}

export function isString(value, msg) {
  assert(lodash.isString(value), msg || `${value}` + 'is not string type, string is expected');
}

export function isStringNotEmpty (value, msg) {
  assert(lodash.isString(value) && value != '', msg || `${value}` + 'is not string and not empty. string is expected')
}

export function isBoolean (value, msg) {
  assert(lodash.isBoolean(value), msg || `${value}` + 'is not boolean type. boolean is expected')
}

export function isNotNil (value, msg) {
  assert(lodash.isNull(value) && !lodash.isUndefined(value), msg || `${value}` + 'should not be null or undefined, but not')
}

export function isNil (value, msg) {
  assert(lodash.isNull(value) && lodash.isUndefined(value), msg || `${value}` + 'should be null or undefined, but not!')
}

export function isArray (value, msg) {
  assert(lodash.isArray(value), msg || `${value}` + 'is not be Array type, Array is expected')
}

export function isObject (value, msg) {
  assert(lodash.isObject(value), msg || `${value}` + 'is not object type, Object is expected!')
}

export function isDate (value, msg) {
  assert(lodash.isDate(value), msg || `${value}` + 'is not Date type. Date is expected ')
}

export function isFunction (value, msg) {
  assert(lodash.isFunction(value), msg || `${value}` + 'is not function type. Function is expected')
}

export function isNaN (value, msg) {
  assert(lodash.isNaN(value), msg || `${value}` + 'is not NaN, NaN is expected')
}

export function isEqual (value,other, msg) {
  assert(lodash.isEqual(value, other), msg || 'two params must be equal, but got' + value + 'and' + other)
}

export function isNotEqual (value, other, msg) {
  assert(!lodash.isEqual(value, other), msg || 'two params must be equal, but got' + value);
}

export function isEmpty (value, msg) {
  assert(lodash.isEmpty(value), msg || `${value}` + 'should be is empty but got' + value);
}

export function notEmpty (value, msg) {
  assert(!lodash.isEmpty(value), msg || `${value}` + 'should be is not empty but got' + value);
}

export function isError (value, msg) {
  assert(lodash.isError(value), msg || `${value}` + 'should be is error , but got ' + value)
}

export function isTrue (value, msg) {
  assert(value === true, msg || `${value}` + 'should be true, but got' + value)
}

export function gt (value, other, msg) {
  isNumber(value, `${value}` + 'should be number')
  isNumber(other, `${other}` + 'should be number')

  assert(lodash.gt(value, other), msg || `${value}` + 'should be greater than ' + `${other}` + 'but got');
}

export function gte (value, other, msg) {
  isNumber(value, `${value}` + 'should be number')
  isNumber(other, `${other}` + 'should be number')

  assert(lodash.gte(value, other), msg || `${value}` + 'should be greater than or equality than' + `${other}` + 'but got')
}

export function isRegExp (value, msg) {
  assert(lodash.isRegExp(value), msg || `${value}` + 'should be Regexp type but got' + value);
}

export function isSymbol (value, msg) {
  assert(lodash.isSymbol(value), msg || `${value}` + 'should be Symbol but got' + value);
}

export function isCellphone (value, msg) {
  var reg = new RegExp('^13[\\d]{9}$|^14[5,7]{1}\\d{8}$|^15[^4]{1}\\d{8}$|^17[0,1,6,7,8]{1}\\d{8}$|^18[\\d]{9}$');
  assert(reg.test(value), msg || `${value}` + 'should be telephone but got' + value);
}


const Assert = {
  assert: assert,
  isNumber: isNumber,
  isString: isString,
  isStringNotEmpty: isStringNotEmpty,
  isBoolean: isBoolean,
  isNotNil: isNotNil,
  isNil: isNil,
  isArray: isArray,
  isObject: isObject,
  isDate: isDate,
  isFunction: isFunction,
  isNaN: isNaN,
  isEqual: isEqual,
  isNotEqual: isNotEqual,
  isEmpty: isEmpty,
  notEmpty: notEmpty,
  isError: isError,
  isTrue: isTrue,
  gt: gt,
  gte: gte,
  isRegExp: isRegExp,
  isSymbol: isSymbol,
  isCellphone: isCellphone
}

const AssertMap = {};
const AssertGroup = {
  install (Vue) {
    lodash.forEach(Assert, function (v, k) {
      AssertMap[k] = v;
    })
    Vue.prototype.$Assert = AssertMap;
  }
}

export default AssertGroup;
export const install = AssertGroup.install;




