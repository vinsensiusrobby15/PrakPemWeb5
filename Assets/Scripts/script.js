import { Mhs } from './data.js';

let select = document.querySelector('select');
let tableBody = document.querySelector('tbody');
const getResult = (x) => {
    if (x.target.value !== 'all'){
        let number = 1;
        tableBody.innerHTML = "";
        for (let i = 0; i < Mhs.length; i++){
            let tr = document.createElement('tr');
            if (Mhs[i]['prodi'] === x.target.value){
                tr.innerHTML = `<td class="numbering">${number}</td>`;
                tr.innerHTML += `<td>${Mhs[i]['nama']}</td>`;
                tr.innerHTML += `<td>${Mhs[i]['nim']}</td>`;
                tr.innerHTML += `<td class="prodi">${Mhs[i]['prodi']}</td>`;
                number++;
                tableBody.appendChild(tr);
            }
        }
    } else if (x.target.value === 'all'){
        tableBody.innerHTML = "";
        for (let i = 0; i < Mhs.length; i++){
            let tr = document.createElement('tr');
            tr.innerHTML = `<td class="numbering">${i+1}</td>`;
            tr.innerHTML += `<td>${Mhs[i]['nama']}</td>`;
            tr.innerHTML += `<td>${Mhs[i]['nim']}</td>`;
            tr.innerHTML += `<td class="prodi">${Mhs[i]['prodi']}</td>`;
            tableBody.appendChild(tr);
        }
    } else {
        tableBody.innerHTML = "";
    }
}
select.addEventListener('input', getResult);