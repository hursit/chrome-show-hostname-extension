window.onload = function () {
    fetchHostname();
};

function fetchHostname() {
    chrome.cookies.get({url: 'https://www.enuygun.com', name: 'SERVERID-SH'},
        function (cookie) {
            if (cookie) {
                displayHostname('hostname-sh', 'green', cookie.value);
            } else {
                displayHostname('hostname-sh', 'red', '');
            }
        });
    chrome.cookies.get({url: 'https://www.enuygun.com', name: 'SERVERID-SAG'},
        function (cookie) {
            if (cookie) {
                displayHostname('hostname-sag', 'green', cookie.value);
            } else {
                displayHostname('hostname-sag', 'red', '');
            }
        });
}

function displayHostname(id, color, text) {
    document.getElementById(id).style.color = color;
    document.getElementById(id).innerText = text;
}


document.getElementById("refresh-btn").addEventListener("click", clearCookies, false);

function clearCookies() {
    chrome.cookies.remove({"url": "https://www.enuygun.com", "name": "SERVERID-SH"});
    chrome.cookies.remove({"url": "https://www.enuygun.com", "name": "SERVERID-SAG"});

    window.close();

    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.reload(tab.id);
    });

    window.close();
}