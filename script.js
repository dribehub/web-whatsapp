const msg = document.getElementById("msg");

msg.addEventListener("keyup", (e)=> {
    if (e.keyCode === 13) {
        e.preventDefault();
        openLink();
    }
})

function openLink() {
    var phone = document.getElementById("phone").value;
    var query = encodeURIComponent(msg.value);
    var url = "https://web.whatsapp.com/send?";
    if (phone != "") url += "phone=" + phone.match(/\d/g).join("");
    url += "&text=" + query;
    // window.location.href = url;
    window.open(url, "_top");
}