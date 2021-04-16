(() => {

    const headers = document.getElementsByTagName('header');
    const students = document.getElementsByClassName('student');
    const firstName = document.getElementById('first-name');
    console.log(document.nodeType);
    // firstName.innerText ='<strong>Ivan</strong>'; 
    // firstName.innerHTML = '<strong>Ivan</strong>';
//  diff beteween innerHtml
    // console.log(firstName.innerHTML);
    // console.log(firstName.innerText);
    headers[0].innerText += ' table';

    const th = document.createElement('th');

    const thText = document.createTextNode('Mark');
    // // Append child to th
    th.append(thText);
    const deleteHeader = document.getElementById('delete-header');
    deleteHeader.before(th);

    const deleteTd = document.getElementById('delete');
    console.log(deleteTd);
    const markTd = document.createElement('td');
    markTd.setAttribute('id', 'mark');
    markTd.innerText = 6;
    deleteTd.before(markTd);

    const deleteButton = document.getElementById('delete-button');
    deleteButton.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        deleteTableRow(event.currentTarget);
    });

    function deleteTableRow(deleteButtonElement) {
        deleteButtonElement.parentElement.parentElement.remove();
    }

    const sectionElement = document.getElementById('section-example');
    sectionElement.addEventListener('click', event => {
        console.log(event);
    })

    const submitFormButton = document.getElementById('submit')
    submitFormButton.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const personToBeAdded = extractInputValues();
        if(!personToBeAdded.firstName || personToBeAdded.lasttName 
            || !personToBeAdded.mark || !personToBeAdded.fn) {
                alert('Enter all of the fields');
                return;
            }
        addStudentInTable(personToBeAdded);

    });

    function extractInputValues() {
        const firstName = extractInputValueByName('first-name');
        const lastName = extractInputValueByName('last-name');
        const fn = extractInputValueByName('fn');
        const mark = extractInputValueByName('mark');

        return {
            firstName,
            lastName,
            fn,
            mark
        }
    }

    function clearInputForm() {
        const inputs = document.getElementsByTagName('input');
        for (const input of inputs) {
            input.value = '';
        }
    }

    function extractInputValueByName(name) {
        return document.getElementsByName(name)[0].value;
    }

    function addStudentInTable(student) {
        const tBodyElement = document.querySelector('tbody');
        const lastLine = tBodyElement.lastChild;
        const tr = document.createElement('tr');
        tr.setAttribute('class', 'student');
        const firstNameTd = document.createElement('td');
        firstNameTd.innerText = student.firstName;
        const lastNameTd = document.createElement('td');
        lastNameTd.innerText = student.lastName;

        const fnTd = document.createElement('td');
        fnTd.innerText = student.fn;
        
        const markTd = document.createElement('td');
        markTd.innerText = student.mark;

        const buttonTd = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            deleteTableRow(event.currentTarget);
        });
        buttonTd.appendChild(deleteButton);
        if (lastLine) {
            lastLine.before(tr);
        }
        else {
            tBodyElement.appendChild(tr);
        }
        tr.append(firstNameTd, lastNameTd, fnTd, markTd, buttonTd);
        clearInputForm();
    }

})();

async function getData(url='localhost:3000') {
    // Default options are marked with *
    const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response)
    return response.json(); // parses JSON response into native JavaScript objects
}

async function post(url, obj) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj)
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json();
}

const getButton = document.getElementById('get-data-button');
getButton.addEventListener('click', async () => {
    const res = await post('http://localhost:3000', {
        a: 10
    });
    console.log(res);
})
