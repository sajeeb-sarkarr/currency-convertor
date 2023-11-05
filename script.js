fetch("https://v6.exchangerate-api.com/v6/d7c7cef2256c2fe56f3e431f/pair/USD/INR/100")
.then(response => { return response.json() })
.then(data => {
  console.log(data)
  console.log(data.conversion_result)
})