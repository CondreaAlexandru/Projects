// Search Name
function search() {
    const input = document.getElementById('search');
    const filter = input.value.toUpperCase();
    const li = document.getElementsByTagName('li');
  
    for (let list of li) {
      let txtValue = list.textContent || list.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        list.style.display = "";
      } else {
        list.style.display = "none";
      }
    }
  }

  // add new name
  function add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("add").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("add").value = "";
  }