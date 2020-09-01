const APIurl = 'http://localhost:8080';

export async function getWords(number) {
    return await fetch(`${APIurl}/words/${number}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response);
            throw new Error('Issue occured, check console...');
        }
    });
}

export async function getValidWords(number) {
    return await fetch(`${APIurl}/validWords/${number}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response);
            throw new Error('Issue occured, check console...');
        }
    });
}

export async function addNewWord(word) {
    return await fetch(`${APIurl}/newWord/${word}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response);
            throw new Error('Issue occured, check console...');
        }
    });
}

export async function encode(word) {
    return await fetch(`${APIurl}/encode/${word}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response);
            throw new Error('Issue occured, check console...');
        }
    });
}