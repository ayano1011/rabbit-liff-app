liff.init({ liffId: "1660795044-e5Ox5zMj" })
.then(() => {
    if (!liff.isLoggedIn()) {
        liff.login();
    } else {
        document.getElementById('title').textContent = 'ログイン済み';
    }
})