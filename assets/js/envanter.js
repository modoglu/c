document.getElementById('addProduct').addEventListener('click', function() {
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const productCategory = document.getElementById('productCategory').value;

    if (productName && productQuantity && productPrice && productCategory) {
        const productList = document.getElementById('productList');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${productName}</td>
            <td>${productQuantity}</td>
            <td>${productCategory}</td>
            <td>
                <button class="btn edit" onclick="editProduct(this)">Düzenle</button>
                <button class="btn delete" onclick="deleteProduct(this)">Sil</button>
            </td>
        `;

        productList.appendChild(row);

        // Formu temizle
        document.getElementById('productName').value = '';
        document.getElementById('productQuantity').value = '';
        document.getElementById('productCategory').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun!');
    }
});

function deleteProduct(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editProduct(btn) {
    const row = btn.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');
    
    document.getElementById('productName').value = cells[0].innerText;
    document.getElementById('productQuantity').value = cells[1].innerText;
    document.getElementById('productCategory').value = cells[2].innerText;

    // Satırı sil
    row.parentNode.removeChild(row);
}
