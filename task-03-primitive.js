/* STRING TYPE */

const str1 = 'Hello';
const str2 = "Hello";
const str3 = `Hello`;

/* NUMBER TYPE */

const num1 = 1;
const num2 = 1.2
const num3 = 1e3; // 1000
const num4 = 0b01; //1
const num5 = 0o56; //46
const num6 = 0xFFAAEE; //16755438

/* BOOLEAN TYPE */

const bool1 = true;
const bool2 = false;
const bool3 = Boolean('false'); //true
const bool4 = Boolean(null); // false
const bool5 = null >= 0; //true
const bool6 = Boolean(null >=0); //true
const bool7 = null > 0; //false
const bool8 = Boolean(true && 0); //false

/* NULL TYPE */

const some = null;

/* UNDEFINED TYPE */

const item = undefined;
let item1;

/* BIGINT TYPE */

const bigNum1 = 6600995988939992n;
const bigNum2 = BigInt(991982998839987);

/* SYMBOL TYPE */

const sym = Symbol();