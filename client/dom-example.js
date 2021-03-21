(() => {

    const headers = document.getElementsByTagName('header');
    const students = document.getElementsByClassName('student');
    const firstName = document.getElementById('first-name');
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
})();