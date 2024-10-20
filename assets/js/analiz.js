// Modal ve butonlar
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');

// Modalı açma
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Modalı kapatma
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Modala tıklayınca kapatma (arka plana tıklanırsa kapanır)
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    // Formdan veri al
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productQuantity = document.getElementById('productQuantity').value;

    // Yeni satır oluştur
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productDescription}</td>
        <td>${productQuantity}</td>
    `;

    // Satırı tabloya ekle
    document.querySelector('#productTable tbody').appendChild(newRow);

    // Formu sıfırla
    this.reset();
});
