// --------------------------------------------------
// ✅ 1. Basic Enum without values
// TS will auto-assign numbers starting from 0

enum StatusCode {
  SUCCESS = 0, // 0
  CLIENT_ERROR = 1, // 1
  SERVER_ERROR = 2 // 2
}

console.log(StatusCode.SUCCESS) // 0
console.log(StatusCode.CLIENT_ERROR) // 1
console.log(StatusCode.SERVER_ERROR) // 2

// Enums are reverse-mapped in JS (can access key by value)
// "use strict";
// var StatusCode;
// (function (StatusCode) {
//     StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
//     StatusCode[StatusCode["CLIENT_ERROR"] = 1] = "CLIENT_ERROR";
//     StatusCode[StatusCode["SERVER_ERROR"] = 2] = "SERVER_ERROR"; // 2
// })(StatusCode || (StatusCode = {}));

console.log(StatusCode[0]) // "SUCCESS"

// --------------------------------------------------
// ✅ 2. Enum with custom string values

enum ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}

// "use strict";
// var ERROR_TYPES;
// (function (ERROR_TYPES) {
//     ERROR_TYPES["NOT_FOUND"] = "notFound";
//     ERROR_TYPES["UNAUTHORIZED"] = "unauthorized";
//     ERROR_TYPES["FORBIDDEN"] = "forbidden";
// })(ERROR_TYPES || (ERROR_TYPES = {}));

// ✅ 3. Function using if (modern way ✨)

function showError(errorType: ERROR_TYPES): void {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log('❌ Error: Not Found')
  }

  if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log('🚫 Error: Unauthorized')
  }

  if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log('🔒 Error: Forbidden')
  }
}

// Usage
showError(ERROR_TYPES.NOT_FOUND)
showError(ERROR_TYPES.UNAUTHORIZED)

// --------------------------------------------------
// ✅ 4. const enum (⚡ inlines values at compile time)

enum CONST_ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}

function showConstError(errorType: CONST_ERROR_TYPES): void {
  if (errorType === CONST_ERROR_TYPES.NOT_FOUND) {
    console.log('❌ (const) Not Found')
  }
}

// Usage
showConstError(CONST_ERROR_TYPES.NOT_FOUND)

//js
// "use strict";
// function showConstError(errorType) {
//     if (errorType === "notFound" /* CONST_ERROR_TYPES.NOT_FOUND */) {
//         console.log('❌ (const) Not Found');
//     }
// }
// // Usage
// showConstError("notFound" /* CONST_ERROR_TYPES.NOT_FOUND */);

// Keep this file as a module to avoid variable conflicts and allow top-level await
export {}
