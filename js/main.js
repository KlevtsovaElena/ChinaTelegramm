    let userName = window.localStorage.getItem('username');
    if(userName == null || userName == ''){
        setUsername();
    } 
console.log(userName);
    function setUsername(){
        let username = prompt("Введите Ваш никнейм:");
        localStorage.setItem('username', username);
    }
renderposts();
    function addPost(){
        let message = document.getElementById('usertext').value;
        let date = new Date().toLocaleString();
        let url = 'https://ChinaTelegram.perfectpink.repl.co/?addpost&name=' + userName + '&message=' + message + '&date=' + date;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
    }

    function renderposts(){
        let url = 'https://ChinaTelegram.perfectpink.repl.co/?getposts';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send()
        let response = xhr.responseText;
        let db = JSON.parse(response);
        let container = document.getElementById('message');
        let template = document.getElementById('text-message').innerHTML;
        container.innerHTML = "";
        for(let i = 0; i < db.length; i++){
            if(window.localStorage.username == db[i]['name']){
                container.innerHTML += template.replace('${name}',db[i]['name'])
                .replace('${text}',db[i]['message'])
                .replace('${time}',db[i]['date'])
                .replace('${}','right')
            }else{
                container.innerHTML += template.replace('',)
                .replace('${name}',db[i]['name'])
                .replace('${text}',db[i]['message'])
                .replace('${time}',db[i]['date'])
                .replace('${}','left')
            }
        }
    }