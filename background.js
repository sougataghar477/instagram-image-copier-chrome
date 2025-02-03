chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            width: 800,
            height: 600
        });
    }
});
