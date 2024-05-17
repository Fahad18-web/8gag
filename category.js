//nav-bar dropdown-list 
document.getElementById("dropdownIcon").addEventListener("click", function () {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
    }
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#dropdownIcon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
//end


document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.add-btn');
    const editDeleteButtons = document.querySelectorAll('.edit-btn, .delete-btn');
    const categoryInputs = document.querySelectorAll('.contentcategories input');

    // Function to add a new category
    addButton.addEventListener('click', function () {
        const categoryName = document.querySelector('.search').value.trim();
        if (categoryName !== '') {
            const newCategory = document.createElement('div');
            newCategory.classList.add('contentcategories');
            newCategory.innerHTML = `
                <div class="cool">${categoryName}
                    <div class="button-group">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>`;
            document.querySelector('.categories').appendChild(newCategory);
            document.querySelector('.search').value = '';
            attachButtonListeners();
        } else {
            alert('Please enter a category name.');
        }
    });
    // Function to edit or delete a category
    function attachButtonListeners() {
        editDeleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const category = this.closest('.contentcategories');
                const categoryName = category.querySelector('.cool').textContent.trim();
                if (this.classList.contains('edit-btn')) {
                    const newCategoryName = prompt('Enter the new category name:', categoryName);
                    if (newCategoryName !== null) {
                        category.querySelector('.cool').textContent = newCategoryName;
                    }
                } else if (this.classList.contains('delete-btn')) {
                    if (confirm(`Are you sure you want to delete the category "${categoryName}"?`)) {
                        category.remove();
                    }
                }
            });
        });
    }
    // Attach listeners initially
    attachButtonListeners();
});