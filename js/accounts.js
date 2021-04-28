
function sendData(file) {
    let url = BACKEND_URL + '/accounts/upload';
    const formData  = new FormData();

    formData.append('file', file);

    return fetch(url, {
        method: 'POST',
        body: formData
    })
    .then((response) => {
        if (response.status === 202) {
            return response;
        } else {
            throw response;
        }
    });
}


function createNewAccount(iban, name, firstname) {
    let url = BACKEND_URL + '/accounts';
    let data = {'iban': iban, 'name': name, 'firstName': firstname};

    return fetch(url,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 201) {
                return response;
            } else {
                throw response;
            }
        });
}

function allAccounts() {
    let url = BACKEND_URL + '/accounts';

    return fetch(url,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        });
}


function removeAccount(id) {
    let url = BACKEND_URL + '/accounts/' + id;

    fetch(url,
        {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 202) {
                return response;
            }
        })
}
