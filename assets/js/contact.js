function submitData(){
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let phone = document.getElementById("phone").value ;
    let subject = document.getElementById("subject").value ;
    let message = document.getElementById("message").value ;

    if (name == ''){
        return alert('nama harus di isi')
    }else if (email == ''){
        return alert('email harus di isi')
    }else if (phone == ''){
        return alert('nomor harus di isi')
    }else if (subject == ''){
        return alert('subject harus di isi')
    }else if (message == ''){
        return alert('message harus di isi')
    } ;

    let emailReciver = "rizqyandriansyah617@gmail.com" ;

    let link = document.createElement('a') ;
    link.href = `mailto: ${emailReciver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya di nomer ${phone}`
    link.click() ;
} ;