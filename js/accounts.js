function createNewAccount(iban, name) {
    let url = BACKEND_URL + '/BudgetPlanner/api/accounts';
    let data = {'iban': iban, 'name': name};

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


function removeAccount(id) {
    let url = BACKEND_URL + '/BudgetPlanner/api/accounts/' + id;

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
