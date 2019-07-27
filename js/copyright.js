let copyrightYear = document.getElementById("year");


let getYear = new Date();
let year = getYear.getUTCFullYear();

copyrightYear.textContent = `${year}`;