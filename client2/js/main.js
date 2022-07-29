const url = "https://cc29-2601-205-380-1c10-8d2c-15cc-97e3-9221.ngrok.io";

fetch(url)
    .then((res) => res.text())
    .then((text) => console.log(text));

document.querySelector("button").addEventListener("click", () => {
    const value = document.querySelector("input").value;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: value }),
    })
        .then((res) => res.json())
        .then((text) => console.log(text.message));
});
