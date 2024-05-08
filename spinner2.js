const spinner = function(value) {
  const delay = value || 200;
  const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   ', '\n'];
  for (let i = 0; i < spinnerArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerArr[i]);
    }, i * delay);
  }
};

spinner(500);