/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('flow-control', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'flow-control.js'), 'utf-8')
  })



function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!"
 }
}



function teenager (age) {
  if (age > 12 && age <= 20) {
  return "You are a teenager!"
} else {
  return "You are not a teenager"
}
}

function ageChecker(age) {
   if (age < 20 && age > 12) {
   return "You are a teenager"
 } else if (age <=12) {
   return "You are a kid"
 }  else {
   return "You are a grownup"
 }
 }



function ternaryTeenager(age) {
  if(age => 13 && age <= 19) {
  return "You are a teenager"
} else {
  return "You are not a teenager"
}
}


    function switchAge (age) {
      switch (age) {
      case 13:
      return "You are a teenager"
      break;
      case 14:
      return "You are a teenager"
      break;
      case 15:
      return "You are a teenager"
      break;
      case 16:
      return "You are a teenager"
      break;
      case 17:
      return "You are a teenager"
      break;
      case 18:
      return "You are a teenager"
      break;
      case 19:
      return "You are a teenager"
      break;
    default:
    return "You are not a teenager"
  }}
