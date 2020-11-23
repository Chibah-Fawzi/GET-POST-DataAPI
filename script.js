var box = document.getElementById('box')
var get = document.getElementById('get')
var clear = document.getElementById('clear')
var title = document.getElementById('title')
var body = document.getElementById('body')
url = "https://jsonplaceholder.typicode.com/posts"


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        get.addEventListener('click', (e) => {
            e.preventDefault()
            var obj = JSON.parse(this.responseText);
            obj.forEach(element => {
                /*html*/
                box.innerHTML +=
                    `<br><br>
                    TITLE : ${element.title}
                    <br><br> 
                    BODY : ${element.body}`
            });
        })
        clear.addEventListener('click', (e) => {
            e.preventDefault()
            box.innerHTML = ""
        })
    }
};
xhr.open("GET", url, true);
xhr.send();

var form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var formData = new FormData()

    fetch(url, {
        method: 'post',
        body: formData
    }).then(function (response) {
        console.log(response.json());
    }).catch(function (error) {
        console.error(error)
    })
})






