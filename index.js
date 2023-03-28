liff.init({ liffId: "1660795044-e5Ox5zMj" })
    .then(() => {
        if (!liff.isLoggedIn()) {
            liff.login();
        } else {
            document.getElementById('title').textContent = '';
            liff.openWindow({
                url: 'https://ayano1011.github.io/rabbit-chart/',
                external: false,
            });
        }

    })