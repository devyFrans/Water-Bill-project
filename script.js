const users = [
    {
        serial_ID: 505501200365,
        name: "Francis Niog",
        address: "Sta.Maria, Bulacan",
    },

    {
        serial_ID: 12345678912,
        name: "Joshua Ruiz",
        address: "North Caloocan, QC",
    },

    {
        serial_ID: 987560127418,
        name: "Raffy Amosco",
        address: "Sapang Palay, SJDM",
    }
];


const navbar = document.querySelector('#navbar');
const logoutBtn = document.querySelector('#logoutBtn');
const loginSection = document.querySelector('#loginSection');
const serialID = document.querySelector('#serialID');
const serialID_error = document.querySelector('#serialID_error');
const searchBtn = document.querySelector('#searchBtn');
const statusError = document.querySelector('#statusError');
const dashboardSection = document.querySelector('#dashboardSection');
const userInfoTable =  document.querySelector('#userInfoTable');
const computeBTN = document.querySelector('#computeBTN');


searchBtn.addEventListener('click', function(){
    
    if(serialID.value.trim() == ""){
        serialID_error.textContent = "Empty Serial ID";
        serialID_error.style.display = "block";
    } else {
        serialID_error.textContent = "";
        serialID_error.style.display = "none";
    }

    let found = false;
    if(serialID.value.trim() != ""){

        users.forEach( customer => {
            if(serialID.value.trim() === customer.serial_ID || serialID.value.trim() === customer.name){
                found = customer;
            }
        });
    }

    if(found){
        navbar.style,display = "flex";
        
        computeBTN.addEventListener('click', function(){

            
        });

        // userInfoTable.innerHTML = `
        // <tr><td>Full Name</td><td>${found.name}</td></tr>`
    }
});