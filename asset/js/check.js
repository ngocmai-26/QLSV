//Register

var checkLogin = function () {
  document.querySelector('.login').classList.add('register-block')
  document.querySelector('.register').classList.remove('register-block')
}

var checkRegister = function () {
  document.querySelector('.login').classList.remove('register-block')
  document.querySelector('.register').classList.add('register-block')
}
//Kiểm tra các input nhập vào
var checkValue = function () {
  let mssv = document.getElementById('txtMSSV').value
  let name = document.getElementById('txtName').value
  let email = document.getElementById('txtEmail').value
  let phone = document.getElementById('txtPhone').value
  let address = document.getElementById('txtAddress').value
  let ethnic = document.getElementById('txtEthnic').value
  if (
    mssv != '' &&
    name != '' &&
    email != '' &&
    phone != '' &&
    address != '' &&
    ethnic != ''
  ) {
    document.getElementById('submit').disabled = false
  } else {
    document.getElementById('submit').disabled = true
  }
}


var checkName = function () {
  var text = /[A-Za-z0-9_-]$/
  let name = document.getElementById('txtName').value
  for (var i = 0; i < name.length; i++) {
    if (!text.test(name) || name.length > 35) {
      document.querySelector('.name_bug').style.display = 'block'
    } else {
      document.querySelector('.name_bug').style.display = 'none'
    }
  }
}

var checkEmail = function () {
  var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  let email = document.getElementById('txtEmail').value
  for (var i = 0; i < email.length; i++) {
    if (!check_email.test(email)) {
      document.querySelector('.email_bug').style.display = 'block'
    } else {
      document.querySelector('.email_bug').style.display = 'none'
    }
  }
}

var checkPhone = function () {
  var regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
  var phone = document.getElementById('txtPhone').value
  for (var i = 0; i < phone.length; i++) {
    if (!regex.test(phone)) {
      document.querySelector('.phone_bug').style.display = 'block'
    } else {
      document.querySelector('.phone_bug').style.display = 'none'
    }
  }
}

function renderListMSK(data) {
  data = data || list_depart
  let html = ''
  for (var i = 0; i < data.length; i++) {
    html += `<option value=${data[i].msk} selected=”selected”>${data[i].msk}</option>`
  }
  document.getElementById('txtMSK').innerHTML = html
}

function renderListMSN(data) {
  data = data || list_major
  let MSN = ''
  for (var i = 0; i < data.length; i++) {
    MSN += `<option value=${data[i].msn} selected=”selected”>${data[i].msn}</option>`
  }
  document.getElementById('txtMSN').innerHTML = MSN
}

function renderListMSL(data) {
  data = data || list_class
  let MSL = ''
  for (var i = 0; i < data.length; i++) {
    MSL += `<option value=${data[i].msl} selected=”selected”>${data[i].msl}</option>`
  }
  document.getElementById('txtMSL').innerHTML = MSL
}


