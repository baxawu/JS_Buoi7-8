let inputNumber = document.getElementById("array-value");
let numberArray = [];

//Tao mang
function createArray() {
  let value = parseInt(inputNumber.value);

  if (!isNaN(value)) {
    numberArray.push(value);

    document.getElementById("result").textContent = numberArray.join(",");
  }

  inputNumber.value = "";
  console.log(numberArray);

  return numberArray;
}

//Tinh tong so duong

function sumNumber() {
  let result = createArray();
  let sum = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] > 0) {
      sum += result[i];
    }
  }
  document.getElementById("lbl-sum").textContent = "Tong cac so duong=" + sum;
}

//Dem cac so duong
function countNumber() {
  let result = createArray();
  let countNum = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] > 0) {
      countNum++;
    }
  }
  document.getElementById("lbl-count").textContent =
    "Dem cac so duong=" + countNum;
  document.getElementById("lbl-count").textContent =
    "Khong the dem cac so duong";
}

//Tim so nho nhat trong mang\

function findMin() {
  let result = createArray();
  let findMin = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] < findMin) {
      findMin = result[i];
    }
  }
  document.getElementById("lbl-min").textContent =
    "Tim so nho nhat trong mang" + findMin;
  document.getElementById("lbl-min").textContent =
    "khong tim thay so nho nhat trong mang";
}

// Tim so duong nho nhat
function findMinPos() {
  let result = createArray();
  let findMinPos = 0;

  for (let i = 1; i < result.length; i++) {
    if (result[i] < findMinPos && result[i] < 0) {
      findMinPos = result[i];
    }
  }
  document.getElementById("lbl-minNumber").textContent =
    "Tim so duong nho nhat trong mang =" + findMinPos;
  document.getElementById("lbl-minNumber").textContent =
    "Khong tim thay so duong nho nhat trong mang";
}

//Tim so chan cuoi cung
function lastPositive() {
  let result = createArray();
  let lastPositive = null;
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] % 2 == 0) {
      lastPositive = result[i];
      break;
    }
  }
  if (lastPositive !== null) {
    document.getElementById("lbl-lastNumber").textContent =
      " Số chẵn cuối cùng trong mảng là " + lastPositive;
  } else {
    document.getElementById("lbl-lastNumber").textContent =
      " Không tìm thấy số chẵn trong mảng";
  }
}

// Doi cho
function swapEl() {
  el1 = +document.getElementById("inputSwap1").value;
  el2 = +document.getElementById("inputSwap2").value;
  let result = createArray();
  let temp = result[el1];
  result[el1] = result[el2];
  result[el2] = temp;

  document.getElementById("lbl-swapNumber").textContent =
    "Mảng sau khi đổi chỗ" + result;
}

//Sap xep thu tu
function sort() {
  let result = createArray();

  let sortArray = result.sort();
  document.getElementById("lbl-sortNumber").textContent =
    "Mang sau khi sap xep" + sortArray;
}

//so nguyen to
function checkPrime(n) {
  if (n < 2) return false;
  for (let r = 2; r <= Math.sqrt(n); r++) {
    if (n % r === 0) return false;
  }
  return true;
}

function firstPrime() {
  let result = createArray();
  let foundPrime = false;
  let primeNumber;

  for (let i = 0; i < result.length; i++) {
    if (checkPrime(result[i])) {
      primeNumber = result[i];
      foundPrime = true;
      break;
    }
  }

  if (foundPrime) {
    document.getElementById("lbl-ntNumber").textContent =
      "Số nguyên tốt đầu tiên trong mảng : " + primeNumber;
  } else {
    document.getElementById("lbl-ntNumber").textContent =
      "Không có số nguyên tố nào trong mảng !";
  }
}

// so dang float
let arrayCount = [];
function numberFloat() {
  let number = +document.getElementById("inputCount").value;
  arrayCount.push(number);
  document.getElementById("lbl-arrayCount").textContent = arrayCount;
}

function findInt() {
  let n = 0;
  for (let i = 0; i < arrayCount.length; i++)
    Number.isInteger(arrayCount[i]) && n++;
  document.getElementById("lbl-countNumber").textContent = "Số nguyên: " + n;
  document.getElementById("lbl-countNumber").textContent = "Khong co số nguyên: ";
}

/// So sánh số nguyên dương và âm
function compareNumber() {
  let result = createArray();
  let n = 0;
  let m = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] > 0) {
      n++;
    } else if (result[i] < 0) {
      m++;
    }
  }
  if (m > n) {
    document.getElementById("lbl-compNumber").textContent =
      "Số âm " + m + " > Số dương " + n;
  } else if (m < n) {
    document.getElementById("lbl-compNumber").textContent =
      "Số âm " + m + " < Số dương " + n;
  } else {
    document.getElementById("lbl-compNumber").textContent =
      "Số âm " + m + "= Số dương " + n;
  }
}
