let copyrightYear = document.getElementById("copyright-year");


let getYear = new Date();
let year = getYear.getUTCFullYear();

copyrightYear.textContent = `${year}`;