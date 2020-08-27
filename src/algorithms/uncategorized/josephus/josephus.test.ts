import { assertEquals } from "https://deno.land/std@0.66.0/testing/asserts.ts";

import Josephus from "./Josephus.js";

const knights1 = new Josephus(-1);
const knights2 = new Josephus(6);
const knights3 = new Josephus(8);
const knight4 = new Josephus(40);

//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

//    RUN: deno test josephus.test.ts

Deno.test({
  name: "Test Negative Input",
  fn() {
    assertEquals(knights1, 0);
  }
});

Deno.test({
  name: "Test: 6 Knights",
  fn() {
    assertEquals(knights1, 4);
  }
});

Deno.test({
  name: "Test: 8 Knights",
  fn() {
    assertEquals(knights2, 5);
  }
});

Deno.test({
  name: "Test: 40 Knights",
  fn() {
    assertEquals(knights4, 6);
  }
});