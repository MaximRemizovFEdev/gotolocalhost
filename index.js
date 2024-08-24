window.onload = function () {
    chrome.tabs.query({active: true}, (tabs) => {
        const tab = tabs[0];
        if (tab) {
            let currentUrl = tab.url.split('');
            currentUrl.splice(8, 0, 'localhost/');
            let newUrl = currentUrl.join('');
            newUrl = newUrl.replace('.greendatasoft.ru', '');
            const currentUrlElem = document.getElementById('currentUrl');
            currentUrlElem.href = newUrl;
        } else {
            alert('Error. There are no active tabs');
        }
    });
};
