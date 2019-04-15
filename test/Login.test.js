/**
  *  use Jest library and vue-utils-jest-example
  *  test login template to error.
  */

import Vue from 'vue';
import { mount } from "@vue/test-utils";

import Login from '../src/components/Login.vue';

describe('Login.test.js', () => {
  let loginCmp;
  beforeEach(() => {
    loginCmp = mount(Login, {
        propsData: {
          dialogContentText: null
        }
    })
  })
});

