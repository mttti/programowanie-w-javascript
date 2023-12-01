// interval();

// function interval() {
//   let timer = 1
//   setInterval(
//     () => {
//       // mamy coupling - interval ma na sztywno zaszyte w sobie C i D
//       //(..i logger)
//       saveCToSessionStorage(timer)
//       discoverPowerBallNumber(timer)
//       timer++
//     }
//     , 2000)
// }

function getTimer() {
  const timer = 1;
  return timer;
}

const functionsToLog = [saveCToSessionStorage];

function setIntervalForFunctionsWithLog(data, ...functions) {
  setInterval(() => {
    functions.forEach((element) => {
      element(data);
      functionsToLog.includes(element) && Logger.log(`[log from C] ${data}`);
    });
    data++;
  }, 2000);
}

class Logger {
  static log(data) {
    console.log(data);
  }
}

function saveCToSessionStorage(data) {
  console.log("[reader C]", data);
  const storageData = { data };
  sessionStorage.setItem("C", JSON.stringify(storageData));
  // brudzimy funkcję loggerem - to nie jest jej funkcjonalność!
  //Logger.log(`[log from C] ${data}`);
  //console.log(JSON.parse(sessionStorage.getItem("C")).data);
}

function discoverPowerBallNumber(data) {
  const number = Math.floor(Math.random() * data * 100);
  console.log("[powerball number]", number);
}

setIntervalForFunctionsWithLog(
  getTimer(),
  saveCToSessionStorage,
  discoverPowerBallNumber
);
