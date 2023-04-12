let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myfunc(this.responseText);
  }
};
xhttp.open("https://automarine25.ru/");
xhttp.send();
myfunc(10);
function myfunc(data) {
  console.log(data);
}
