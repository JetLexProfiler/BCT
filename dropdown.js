function toggleDropdown() {
    var subcategoryList = document.getElementById("subcategoryList");
    if (subcategoryList.style.display === 'none') {
        subcategoryList.style.display = 'block';
    } else {
        subcategoryList.style.display = 'none';
    }
}

function toggleDropdown(categoryId) {
    var subcategory = document.getElementById(categoryId);
    if (subcategory.style.display === 'none' || subcategory.style.display === '') {
        subcategory.style.display = 'block';
    } else {
        subcategory.style.display = 'none';
    }
}

function showDescription() {
    document.getElementById('overlay').style.display = 'block';
}

function closeDescription() {
    document.getElementById('overlay').style.display = 'none';
}