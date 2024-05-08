const spinner = function () {
  const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   ', '\n']
  for (let i = 0; i < spinnerArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerArr[i])
    }, i * 200) 
  }
}

spinner()