function kayitFonksiyonu(e){
    event.preventDefault();

    var email = document.getElementById('email1').value;
    var kadi = document.getElementById('kadi1').value;
    var pass = document.getElementById('pass1').value;
    var sonuc = document.getElementById('sonuc1');

    var kullanici = { 
        email: email,
        kadi: kadi,
        pass: pass
    };

    var kullanici1;
    var json = JSON.stringify(kullanici); 
    localStorage.setItem(kullanici1, json); 
    console.log('Kullanici Kaydedildi.'); 
    console.log(json); 
    sonuc1.innerHTML = 'Kullanici Kaydedildi.' 
}

function girisFonksiyonu(e){
    event.preventDefault();
    
    var kadi2 = document.getElementById('kadi2').value;
    var pass2 = document.getElementById('pass2').value;
    var sonuc2 = document.getElementById('sonuc2');

    var kullanici2 = { 
        kadi: kadi2,
        pass: pass2
    }
    console.log(kullanici2);

    var data = JSON.parse(localStorage.getItem(undefined)); 

    if(kadi2 != data.kadi){
        sonuc2.innerHTML = 'Geçersiz Kullanıcı Adı';
    }else if(pass2 != data.pass) {
        sonuc2.innerHTML = 'Geçersiz Parola';
    }
    else{
        console.log('giris yaptı');
        sonuc2.innerHTML = 'Giriş Yapıldı';
    }
}