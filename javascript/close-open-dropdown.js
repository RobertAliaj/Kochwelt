function dropdownMenu() {

    document.getElementById('dropdown').classList.toggle('dropdown-content-dnone');
    document.getElementById('dropdown').classList.toggle('dropdown-content');

}

function closeDropdown(){
    document.getElementById('dropdown').classList.add('dropdown-content-dnone');
    document.getElementById('dropdown').classList.remove('dropdown-content');
}




