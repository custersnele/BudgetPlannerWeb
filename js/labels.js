function findLabels() {
    let url = BACKEND_URL + '/categories';

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


function linkPayment(paymentId, categoryId) {
    let url = BACKEND_URL + '/payments/' + paymentId + "/link/" + categoryId;

    return fetch(url,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response;
            }
        });
}
