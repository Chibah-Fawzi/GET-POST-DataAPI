function createPost(obj) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            title: `${title.value}`,
            body: `${body.value}`,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(function (response) {
        console.log(response.json());
    })
}

createPost();

var submit = document.getElementById('submit')
submit.addEventListener('click', createPost);