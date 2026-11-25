
alert("Welcome to our webpage!");

const updateBanner = (message, color) => {
    document.getElementById("banner").innerText = message;
    document.getElementById("banner").style.backgroundColor = color;
};

const checkSystem = () => {

    updateBanner("System is Checking...", "orange");

    const check = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random() > 0.5);
        }, 2000);
    });

    check.then((status) => {

        if (status) {
            updateBanner("System is Online", "green");
        } else {
            updateBanner("System is Offline", "red");
        }

    });
};

window.onload = () => {
    checkSystem();
};
