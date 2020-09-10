window.onload = function() {
    fetchHostname();
};


document.getElementById("refresh-btn").addEventListener("click", fetchClientIP, false);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard, false);


function fetchHostname() {
    displayContent("1453");
}

function displayContent(hostname) {
    document.getElementById("ip-address").style.color = "green";
    document.getElementById("ip-address").innerText = hostname;
}