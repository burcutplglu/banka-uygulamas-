let inputs = ['Hoşgeldiniz! ne yapmak istersiniz?', '1- Bakiye sorgulama',"2- Para çekme", "3- Para yatırma", "4- Çıkış"]
let user_name = 'burcu'
let password = 12345
let starting_money = 7000
let money = starting_money

let approve = confirm("Hoşgeldiniz! Devam etmek için tamam'a basınız")
let login_name = prompt('adınız nedir?').toLowerCase()
let login_password = Number(prompt('şifrenizi giriniz'))

if(user_name === login_name && password === login_password){

  while(approve === true){
    let ask = Number(prompt(inputs[0] + '\n' + inputs[1] + '\n' + inputs[2] + '\n' + inputs[3] + '\n' + inputs[4] + '\n'))

    if(ask === 1){
      alert(`Bakiyeniz ${money}₺`)
    }
    else if(ask === 2){
      let withdrow = Number(prompt('Kaç para çekmek istiyorsunuz?'))
      if(withdrow <= money){
        alert(`${withdrow}₺ para çektiniz. Güncel bakiyeniz: ${money - withdrow}₺`)
      }else{
        alert('Yetersiz bakiye')
      }
      money -= withdrow
    }

    else if(ask === 3){
      let deposit = Number(prompt("Kaç para yatırmak istiyorsunuz?"))
      alert(`${deposit}₺ para yatırdınız. Güncel bakiyeniz: ${money + deposit}₺`)
      money += deposit
    }
    else if(ask === 4){
      break
    }
    else{
      alert('Geçersiz işlem')
    }
  }

}
else{
  alert('Giriş yapılamadı')}