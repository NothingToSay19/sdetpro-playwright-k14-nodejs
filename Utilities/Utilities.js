import readLine from 'readline-sync';

export function sendRequest(url){
    return fetch(url).then(function(response){
        return response.json();
    })
}

export function getUserInput(intQuestion){
    return readLine.questionInt(intQuestion);
}



