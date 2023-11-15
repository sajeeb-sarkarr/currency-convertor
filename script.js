const clickButton = document.getElementById("button1")
    const amount = document.getElementById("amount")
    
    let selectedValue1;
    function getSelectedValue() {
      var selectElement = document.getElementById("mySelect");
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      selectedValue1 = selectedOption.textContent;
      console.log("Selected value: " + selectedValue1);
    }

    let selectedValue2;
    function getSelectedValueTextcontent() {
      var selectElement = document.getElementById("mySelect1");
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      selectedValue2 = selectedOption.textContent;
      console.log("Selected value: " + selectedValue2);
    }

    clickButton.addEventListener("click", ()=>{
      console.log(selectedValue1, selectedValue2)
      console.log(amount)
    
       var apiId = "d7c7cef2256c2fe56f3e431f"
       var url = `https://v6.exchangerate-api.com/v6/d7c7cef2256c2fe56f3e431f/pair/${selectedValue1}/${selectedValue2}/${amount.value}`
       fetch(url)
       .then(response => { return response.json() })
       .then(data => {
         // console.log(data)
         console.log(data.conversion_result)
       })
    })