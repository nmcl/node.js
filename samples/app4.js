function sleep(milliseconds) {
    var start = new Date().getTime();
    while ((new Date().getTime() - start) < milliseconds) {
    }
}

function fetchPage() {
    console.log('fetching page');
    sleep(2000);
    console.log('data returned from requesting page');
}

function fetchApi () {
    console.log('fetching api');
    sleep(2000);
    console.log('data returned from the api');
}

fetchPage();
fetchApi();