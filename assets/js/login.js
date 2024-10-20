// .env yerine, geçici olarak şifreleri burada saklıyoruz (ancak güvenli değil)
const emails = [
    'fevri.duman@dualiletisim.com.tr',
    'gonul.duman@dualiletisim.com.tr',
    'eda.kuzu@dualiletisim.com.tr',
    'erkan.toren@dualiletisim.com.tr',
    'kerim.kurt@dualiletisim.com.tr',
    'hasim.kaygisiz@dualiletisim.com.tr'
];

const passwords = [
    'Fevri123.',
    'Gonul123.',
    'EdaKuzu123.',
    'Erkan123.',
    'Kerim123.',
    'Hasim123.'
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    // Kullanıcıdan gelen verileri al
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Email ve şifreyi dizi içindeki değerlerle kontrol et
    let isAuthenticated = false;

    for (let i = 0; i < emails.length; i++) {
        if (email === emails[i] && password === passwords[i]) {
            isAuthenticated = true;
            break; // Eşleşme bulundu, döngüden çık
        }
    }

    if (isAuthenticated) {
        window.location.replace('../pages/home.html'); 
        alert("Yönlendiriliyorsunuz...");
    } else {
        alert('Hatalı giriş.'); // Konsolda yerine kullanıcıya uyarı göster
    }
});
