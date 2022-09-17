//xuất file excel
$('.btnExcel').on('click', function () {
  $('#table2excel').table2excel({
    name: 'Danh sách sinh viên',
    filename: 'FileExcel',
    fileext: '.xls',
  })
})


var createStudent = function () {
  var mssv = document.getElementById('txtMSSV').value
  let name = document.getElementById('txtName').value
  let email = document.getElementById('txtEmail').value
  let phone = document.getElementById('txtPhone').value
  let address = document.getElementById('txtAddress').value
  let ethnic = document.getElementById('txtEthnic').value
  let department = document.getElementById('txtMSK').value
  let majors = document.getElementById('txtMSN').value
  let classroom = document.getElementById('txtMSL').value
  let date = document.getElementById('txtDate').value
  let gender = document.getElementById('check').value
  for(var i = 0; i< list_students.length; i++) {
    if (list_students[i].mssv === mssv) {
      var check = 1
      break
    }
  }
  if (check === 1) {
    document.getElementById('mssv_bug').style.display = 'block'
    document.querySelector('.alert').style.display = 'none'
  } else {
    var new_list = new Students(
      mssv,
      name,
      email,
      phone,
      date,
      gender,
      address,
      ethnic,
      department,
      majors,
      classroom,
    )
    list_students.push(new_list)
    document.getElementById('mssv_bug').style.display = 'none'
    document.querySelector('.alert').style.display = 'block'
    saveDataStudents()
  }

  
}

var size = 5
var curr = 1

var renderStudent = function (data) {
  data = data || list_students
  let x = ''
  var count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    x += `<tr class="demo-list" id="demo_list">
            <td class="demo-item">${count++}</td>
            <td class="demo-item">${item.mssv}</td>
            <td class="demo-item">${item.name}</td>
            <td class="demo-item">${item.email}</td>
            <td class="demo-item">${item.phone}</td>
            <td class="demo-item">${item.address}</td>
            <td class="demo-btn"><button class='btn btnMore' 
            onclick="detailStudent('${item.mssv}')">Xem thêm</button>
            <button class='btn btnDelete' 
            onclick="deleteStudent('${item.mssv}')">Xóa</button>
            <button class='btn btnRevision'>Sửa</button></td>
          </tr>`
  })
  document.getElementById('tbodySinhVien').innerHTML = x
}


var deleteStudent = function (mssv) {
  let index = findByMSSV(mssv)
  if (index === -1) {
    alert('sinh viên không tồn tại')
    return
  }
  list_students.splice(index, 1)
  renderStudent()
  saveDataStudents()
}

var findByMSSV = function (mssv) {
  for (var i = 0; i < list_students.length; i++) {
    if (list_students[i].mssv === mssv) {
      return i
    }
  }
  return -1
}

var detailStudent = function () {
    document.getElementById('mssv').innerHTML = list_students[0].mssv
    document.getElementById('name').innerHTML = list_students[0].name
    document.getElementById('email').innerHTML = list_students[0].email
    document.getElementById('phone').innerHTML = list_students[0].phone
    document.getElementById('date').innerHTML = list_students[0].date
    document.getElementById('gender').innerHTML = list_students[0].gender
    document.getElementById('ethnic').innerHTML = list_students[0].ethnic
    document.getElementById('department').innerHTML = list_students[0].department
    document.getElementById('majors').innerHTML = list_students[0].majors
    document.getElementById('class').innerHTML = list_students[0].classroom
    document.getElementById('address').innerHTML = list_students[0].address
}

//Tìm kiếm tên sinh viên
var searchStudent = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_students.length; i++) {
    var studentName = list_students[i].name.toLowerCase()
    if (list_students[i].mssv === keyword || studentName.includes(keyword)) {
      results.push(list_students[i])
    }
  }
  renderStudent(results)
}



//Tạo User mới
var addUsers = function () {
  let username = document.getElementById('txtUsername').value
  let password = document.getElementById('txtPassword').value
  let email = document.getElementById('txtEmail').value
  let phone = document.getElementById('txtPhone').value
  var users = new Users(username, password, phone, email)
  
  console.log(users)
  list_users.push(users)
}

var loginUser = function () {
  let username = document.getElementById('Username').value
  let password1 = document.getElementById('Password').value
  let res = list_users.find((i) => i.username.includes(username))
  if (res === undefined) {
    console.log('Tài khoản không tồn tại')
  } else {
    if (password1 === res.password) {
      console.log('Đăng nhập thành công')
    } else {
      console.log('Mật khẩu sai')
    }
  }
}

//Tạo Thông tin các khoa
var createDepart = function (data) { 
  data = data || list_depart
  let msk = document.getElementById('txtMSK').value
  let name_depart = document.getElementById('txtNameDeparte').value
  for(var i = 0; i< data.length; i++) {
    if (data[i].msk === msk) {
      var check = 1
      break
    }
  }
  if (check === 1) {
    document.getElementById('msk_bug').style.display = 'block'
    document.querySelector('.alert').style.display = 'none'
  } else {
    var list_dep = new Departs(msk, name_depart)
    list_depart.push(list_dep)
    document.getElementById('msk_bug').style.display = 'none'
    document.querySelector('.alert').style.display = 'block'
    saveDataDepart()
  }
}


//Hiện thị thông tin các khoa
var renderDepart = function (data) {
  data = data || list_depart
  let d = ''
  let count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    d += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${count++}</td>
    <td class="demo-item">${item.msk}</td>
    <td class="demo-item">${item.name_depart}</td>
    <td><button class='btn btnDelete' onclick="deleteDepart('${
      item.msk
    }')">Xóa</button>
    <button class='btn btnRevision'>Sửa</button></td>
    </tr>`
  })
  document.getElementById('tbodyKhoa').innerHTML = d
}


var deleteDepart = function (msk) {
  let index = findByMSK(msk)
  if (index === -1) {
    alert('Mã khoa không tồn tại')
    return
  }
  list_depart.splice(index, 1)
  saveDataDepart()
  getDataDepart();
}

function findByMSK(msk) {
  for (var i = 0; i < list_depart.length; i++) {
    if (list_depart[i].msk === msk) {
      return i
    }
  }
  return -1
}

//Tìm kiếm khoa
var searchDepart = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_depart.length; i++) {
    var departName = list_depart[i].name_depart.toLowerCase()
    if (list_depart[i].msk === keyword || departName.includes(keyword)) {
      results.push(list_depart[i])
    }
  }
  renderDepart(results)
}

// Tạo thông tin các ngành
var createMajor = function (data) {
  data = data || list_major
  let msk = document.getElementById('txtMSK').value
  let msn = document.getElementById('txtMSN').value
  let name_major = document.getElementById('txtNameMajor').value
  for(var i = 0; i< data.length; i++) {
    if (data[i].msk === msk) {
      if(data[i].msn === msn) {
        var check = 1
        break
      }
    }
  }
  if (check === 1) {
    document.getElementById('msn_bug').style.display = 'block'
    document.querySelector('.alert').style.display = 'none'
  } else {
    var list_maj = new Majors(msk, msn, name_major)
    list_major.push(list_maj)
    document.getElementById('msn_bug').style.display = 'none'
    document.querySelector('.alert').style.display = 'block'
    saveDataMajor()
  }
}

var renderMajor = function (data) {
  data = data || list_major
  let d = ''
  let count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    d += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${count++}</td>
    <td class="demo-item">${item.msk}</td>
    <td class="demo-item">${item.msn}</td>
    <td class="demo-item">${item.name_major}</td>
    <td><button class='btn btnDelete' onclick="deleteMajor('${
      item.msn
    }')">Xóa</button>
    <button class='btn btnRevision'>Sửa</button></td>
    </tr>`
  })
  document.getElementById('tbodyNganh').innerHTML = d
}

var deleteMajor = function (msn) {
  let index = findByMSN(msn)
  if (index === -1) {
    alert('không tìm thấy mã ngành')
    return
  }
  list_major.splice(index, 1)
  saveDataMajor()
  renderMajor()
}

function findByMSN(msn) {
  for (var i = 0; i < list_major.length; i++) {
    if (list_major[i].msn === msn) {
      return i
    }
  }
  return -1
}

//Tìm kiếm thông tin ngành
var searchMajor = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_major.length; i++) {
    var majorName = list_major[i].name_major.toLowerCase()
    if (list_major[i].msn === keyword || majorName.includes(keyword)) {
      results.push(list_major[i])
    }
  }
  renderMajor(results)
}

//kiểm tra major
function checkMajor(data) {
  data = data || list_major
  let msk = document.getElementById('txtMSK').value
  let MSN = ''
  for(var i = 0; i< data.length; i++) {
    if (data[i].msk === msk) {
      MSN += `<option value=${data[i].msn} selected=”selected”>${data[i].msn}</option>`
    }
    console.log(typeof msk)
    console.log(typeof data[i].msk)
  }
  document.getElementById('txtMSN').innerHTML = MSN
}

//kiểm tra major
function checkClass(data) {
  data = data || list_class
  let msn = document.getElementById('txtMSN').value
  let MSL = ''
  for(var i = 0; i< data.length; i++) {
    if (data[i].msn === msn) {
      MSL += `<option value=${data[i].msl} selected=”selected”>${data[i].msl}</option>`
    }
  }
  document.getElementById('txtMSL').innerHTML = MSL
}


// Tạo thông tin các ngành
var createClass = function () {
  let msk = document.getElementById('txtMSK').value
  let msn = document.getElementById('txtMSN').value
  let msl = document.getElementById('txtMSL').value
  let name_class = document.getElementById('txtNameClass').value
  for(var i = 0; i< list_class.length; i++) {
    if (list_class[i].msk === msk) {
      if (list_class[i].msn === msn) {
        if (list_class[i].msl === msl){
          var check = 1
          break}
      }
    }
  }
  if (check === 1) {
    document.getElementById('msl_bug').style.display = 'block'
    document.querySelector('.alert').style.display = 'none'
  } else {
    var list = new ClassStudents(msk, msn, msl, name_class)
    list_class.push(list)
    document.getElementById('msl_bug').style.display = 'none'
    document.querySelector('.alert').style.display = 'block'
    saveDataClass()
  }
}

var renderClass = function (data) {
  data = data || list_class
  let d = ''
  let count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    d += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${count++}</td>
    <td class="demo-item">${item.msk}</td>
    <td class="demo-item">${item.msn}</td>
    <td class="demo-item">${item.msl}</td>
    <td class="demo-item">${item.name_class}</td>
    <td><button class='btn btnDelete' onclick="deleteClass('${
      item.msl
    }')">Xóa</button>
    <button class='btn btnRevision'>Sửa</button></td>
    </tr>`
  })
  document.getElementById('tbodyLop').innerHTML = d
}

var deleteClass = function (msl) {
  let index = findByMSL(msl)
  if (index === -1) {
    alert('không tìm thấy mã lớp')
    return
  }
  list_class.splice(index, 1)
  renderClass()
  saveDataClass()
}

function findByMSL(msl) {
  for (var i = 0; i < list_class.length; i++) {
    if (list_class[i].msl === msl) {
      return i
    }
  }
  return -1
}

//Tìm kiếm thông tin lớp
var searchClass = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_class.length; i++) {
    var className = list_class[i].name_class.toLowerCase()
    if (list_class[i].msl === keyword || className.includes(keyword)) {
      results.push(list_class[i])
    }
  }
  renderClass(results)
}

//Tạo một điểm mới
var createScores = function () {
  let mssv = document.getElementById('txtMSSV').value
  let name_student = document.getElementById('txtNameStudent').value
  let msm = document.getElementById('txtMSM').value
  let name_subjects = document.getElementById('txtNameSubjects').value
  let group = document.getElementById('txtGroup').value
  let credits = document.getElementById('txtCredits').value
  let midterm = +document.getElementById('txtMidterm').value
  let credits_midterm = +document.getElementById('txtCreditMidterm').value
  let term = +document.getElementById('txtTerm').value
  let credits_term = +document.getElementById('txtTermMidterm').value
  let list = new Scores(
    mssv,
    msm,
    name_student,
    name_subjects,
    group,
    credits,
    midterm,
    credits_midterm,
    term,
    credits_term,
  )
  list_scores.push(list)
  document.querySelector('.alert').style.display = 'block'
}

var renderScores = function (data) {
  data = data || list_scores
  let d = ''
  let count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    var a = item.term * (item.credits_term / 100) +
    item.midterm * (item.credits_midterm / 100)
    console.log(a)
    
    d += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${count++}</td>
    <td class="demo-item">${item.msm}</td>
    <td class="demo-item">${item.group}</td>
    <td class="demo-item">${item.name_subjects}</td>
    <td class="demo-item">${item.credits}</td>
    <td class="demo-item">${item.term}</td>
    <td class="demo-item">${
      item.term * (item.credits_term / 100) +
      item.midterm * (item.credits_midterm / 100)
    }</td>
    <td></td>
    <td></td>
    <td></td>
    <td><button class='btn btnDelete' onclick="deleteScores('${
      item.mssv
    }')">Xóa</button>
    <button class='btn btnRevision'>Sửa</button></td>
    </tr>`
  })
  document.getElementById('tbodyDiem').innerHTML = d
}

function findByScores(mssv) {
  for (var i = 0; i < list_scores.length; i++) {
    if (list_scores[i].mssv === mssv) {
      return i
    }
  }
  return -1
}

var deleteScores = function (mssv) {
  let index = findByScores(mssv)
  if (index === -1) {
    alert('Không tìm thấy MSSV')
    return
  }
  list_scores.splice(index, 1)
  renderScores()
}
//Tìm kiếm thông tin lớp
var searchScores = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_scores.length; i++) {
    var scoresName = list_scores[i].name_student.toLowerCase()
    if (list_scores[i].mssv === keyword || scoresName.includes(keyword)) {
      results.push(list_scores[i])
    }
  }
  renderScores(results)
}

var createSubj = function () {
  let msl = document.getElementById('txtMSL').value
  let msm = document.getElementById('txtMSM').value
  let credits = document.getElementById('txtCredits').value
  let name_subjects = document.getElementById('txtNameSubjects').value
  for(var i = 0; i< list_subject.length; i++) {
    if (list_subject[i].msl === msl) {
      if (list_subject[i].msm === msm) {
        var check = 1
        break
      }
    }
  }
  if (check === 1) {
    document.getElementById('msm_bug').style.display = 'block'
    document.querySelector('.alert').style.display = 'none'
  } else {
    let list = new Subject(msl, msm, name_subjects, credits)
    list_subject.push(list)
    document.getElementById('msm_bug').style.display = 'none'
    document.querySelector('.alert').style.display = 'block'
    saveDataSubjects()
  }
}

var renderSubject = function (data) {
  data = data || list_subject
  let d = ''
  let count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    d += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${count++}</td>
    <td class="demo-item">${item.msl}</td>
    <td class="demo-item">${item.msm}</td>
    <td class="demo-item">${item.name_subjects}</td>
    <td class="demo-item">${item.credits}</td>
    <td><button class='btn btnDelete' onclick="deleteSubj('${
      item.msm
    }')">Xóa</button>
    <button class='btn btnRevision'>Sửa</button></td>
    </tr>`
  })
  document.getElementById('tbodyMon').innerHTML = d
}

function findBySubj(msm) {
  for (var i = 0; i < list_subject.length; i++) {
    if (list_subject[i].msm === msm) {
      return i
    }
  }
  return -1
}

var deleteSubj = function (msm) {
  let index = findBySubj(msm)
  if (index === -1) {
    alert('không tìm thấy mã số môn')
    return
  }
  list_subject.splice(index, 1)
  renderSubject()
  saveDataSubjects()
}

//Tìm kiếm thông tin môn học
var searchSubject = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_subject.length; i++) {
    var subjectName = list_subject[i].name_subjects.toLowerCase()
    if (list_subject[i].msm === keyword || subjectName.includes(keyword)) {
      results.push(list_subject[i])
    }
  }
  renderSubject(results)
}

var render = function () {
  let count_student = 1
  let count_users = 1
  let count_major = 1
  let count_teachers = 1
  for (var i = 0; i < list_students.length; i++) {
    document.getElementById('number_student').innerHTML = count_student++
  }
  for (var i = 0; i < list_users.length; i++) {
    document.getElementById('number_users').innerHTML = count_users++
  }
  for (var i = 0; i < list_major.length; i++) {
    document.getElementById('number_major').innerHTML = count_major++
  }
  for (var i = 0; i < list_teachers.length; i++) {
    document.getElementById('number_teachers').innerHTML = count_teachers++
  }
}

var renderTeacher = function (data) {
  data = data || list_teachers
  let d = ''
  let count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    d += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${count++}</td>
    <td class="demo-item">${item.msgv}</td>
    <td class="demo-item">${item.name}</td>
    <td class="demo-item">${item.email}</td>
    <td class="demo-item">${item.phone}</td>
    <td class="demo-item">${item.degree}</td>
    <td class="demo-btn"><button class='btn btnMore' onclick="detailTeacher('${item.msgv}')">Xem thêm</button>
    <button class='btn btnDelete' onclick="deleteTeacher('${
      item.msgv
    }')">Xóa</button>
    <button class='btn btnRevision'>Sửa</button></td>
    </tr>`
  })
  document.getElementById('tbodyTeacher').innerHTML = d
}


function findByMSGV(msgv) {
  for (var i = 0; i < list_teachers.length; i++) {
    if (list_teachers[i].msgv === msgv) {
      return i
    }
  }
  return -1
}

var deleteTeacher = function (msgv) {
  let index = findByMSGV(msgv)
  if (index === -1) {
    alert('không tìm thấy mã số giảng viên')
    return
  }
  list_teachers.splice(index, 1)
  renderTeacher()
  saveDataTeachers()
}

var createTeacher = function () {
  let msgv = document.getElementById('txtMSGV').value
  let name = document.getElementById('txtName').value
  let email = document.getElementById('txtEmail').value
  let phone = document.getElementById('txtPhone').value
  let address = document.getElementById('txtAddress').value
  let ethnic = document.getElementById('txtEthnic').value
  let degree = document.getElementById('txtDegree').value
  let date = document.getElementById('txtDate').value
  let gender = document.getElementById('check').value
  for(var i = 0; i< list_teachers.length; i++) {
    if (list_teachers[i].msgv === msgv) {
      var check = 1
      break
    }
  }
  if (check === 1) {
    document.getElementById('msgv_bug').style.display = 'block'
    document.querySelector('.alert').style.display = 'none'
  } else {
    var new_list = new Teachers(
      msgv,
      name,
      email,
      phone,
      date,
      gender,
      address,
      ethnic,
      degree,
    )
    list_teachers.push(new_list)
    document.getElementById('msgv_bug').style.display = 'none'
    document.querySelector('.alert').style.display = 'block'
    saveDataTeachers()
  }
  
}

var detailTeacher = function (msgv) {
  var list_detail = ""
  document.getElementById('detail').style.display = 'block'
  for (var i = 0; i<list_teachers.length; i++) {
    if (list_teachers[i].msgv === msgv) {
      console.log(list_teachers[i])
      list_detail += `<button class="btn btn-close" onclick="Close()" style="float: right;"></button>
                    <form action="" class="group-detail">
                      <h3 class="text-center">Chi tiết thông tin</h3>
                      <div class="">
                        <div class="row">
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Mã Số Giảng Viên:</label>
                            <span class="detail_text" id="msgv">${list_teachers[i].msgv}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Họ và tên:</label>
                            <span class="detail_text" id="name">${list_teachers[i].name}</span>
                          </div>
                          <div class="col-6 group-item ">
                            <label for="" class="detail-label">Email:</label>
                            <span class="detail_text" id="email">${list_teachers[i].email}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">SDT:</label>
                            <span class="detail_text" id="phone">${list_teachers[i].phone}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Năm sinh:</label>
                            <span class="detail_text" id="date">${list_teachers[i].date}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Giới tính:</label>
                            <span class="detail_text" id="gender">${list_teachers[i].gender}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Dân tộc:</label>
                            <span class="detail_text" id="ethnic">${list_teachers[i].ethnic}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Học Vị:</label>
                            <span class="detail_text" id="degree">${list_teachers[i].degree}</span>
                          </div>
                          <div class="col-12 group-item">
                            <label for="" class="detail-label">Địa chỉ:</label>
                            <span class="detail_text" id="address">${list_teachers[i].address}</span>
                          </div>
                        </div>
                      </div>
                    </form>`
    }
  }
  document.querySelector('.detail-item').innerHTML = list_detail
  
}


var detailStudent = function (mssv) {
  var list_detail = ""
  document.getElementById('detail').style.display = 'block'
  for (var i = 0; i<list_students.length; i++) {
    if (list_students[i].mssv === mssv) {
      list_detail += `<button class="btn btn-close" onclick="Close()" style="float: right;"></button>
                    <form action="" class="group-detail">
                      <h3 class="text-center">Chi tiết thông tin</h3>
                      <div class="">
                        <div class="row">
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Mã Sinh Viên:</label>
                            <span class="detail_text" id="mssv">${list_students[i].mssv}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Họ và tên:</label>
                            <span class="detail_text" id="name">${list_students[i].name}</span>
                          </div>
                          <div class="col-6 group-item ">
                            <label for="" class="detail-label">Email:</label>
                            <span class="detail_text" id="email">${list_students[i].email}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">SDT:</label>
                            <span class="detail_text" id="phone">${list_students[i].phone}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Năm sinh:</label>
                            <span class="detail_text" id="date">${list_students[i].date}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Giới tính:</label>
                            <span class="detail_text" id="gender">${list_students[i].gender}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Dân tộc:</label>
                            <span class="detail_text" id="ethnic">${list_students[i].ethnic}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Khoa:</label>
                            <span class="detail_text" id="department">${list_students[i].department}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Ngành:</label>
                            <span class="detail_text" id="majors">${list_students[i].majors}</span>
                          </div>
                          <div class="col-6 group-item">
                            <label for="" class="detail-label">Lớp:</label>
                            <span class="detail_text" id="class">${list_students[i].classroom}</span>
                          </div>
                          <div class="col-12 group-item">
                            <label for="" class="detail-label">Địa chỉ:</label>
                            <span class="detail_text" id="address">${list_students[i].address}</span>
                          </div>
                        </div>
                      </div>
                    </form>`
    }
  }
  document.querySelector('.detail-item').innerHTML = list_detail
  
}

var Close = function () {
  document.getElementById('detail').style.display = 'none'
}
//Tìm kiếm tên sinh viên
var searchTeacher = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_teachers.length; i++) {
    var teacherName = list_teachers[i].name.toLowerCase()
    if (list_teachers[i].msgv === keyword || teacherName.includes(keyword)) {
      results.push(list_teachers[i])
    }
  }
  renderTeacher(results)
}

//Tài khoản
var renderUser = function (data) {
  data = data || list_users
  let d = ''
  let count = 1
  var list_new = data.filter(function (value, index) {
    let start = (curr - 1) * size
    let end = curr * size
    if (index >= start && index < end) {
      return true
    }
  })
  list_new.map(function (item) {
    d += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${count++}</td>
    <td class="demo-item">${item.mdd}</td>
    <td class="demo-item">${item.username}</td>
    <td class="demo-item">${item.email}</td>
    <td class="demo-item">${item.phone}</td>
    <td class="demo-item">${item.position}</td>
    <td class="demo-btn">
    <button class='btn btnDelete' onclick="deleteUser('${
      item.mdd
    }')">Xóa</button>
    <button class='btn btnRevision'>Sửa</button></td>
    </tr>`
  })
  document.getElementById('tbodyUsers').innerHTML = d
}

var createUsers = function () {
  mdd = document.getElementById('txtMDD').value
  username = document.getElementById('txtUsername').value
  password = document.getElementById('txtPassword').value
  email = document.getElementById('txtEmail').value
  phone = document.getElementById('txtPhone').value
  position = document.getElementById('txtPosition').value

  for(var i = 0; i< list_users.length; i++) {
    if (list_users[i].mdd === mdd) {
      var check = 1
      break
    }
  }
  if (check === 1) {
    document.getElementById('mdd_bug').style.display = 'block'
    document.querySelector('.alert').style.display = 'none'
  } else {
    let list = new Users(mdd, username, password, email, phone, position)
    console.log(typeof list)
    list_users.push(list)
    document.getElementById('mdd_bug').style.display = 'none'
    document.querySelector('.alert').style.display = 'block'
    saveDataUsers()
  }
}

function findByMDD(mdd) {
  for (var i = 0; i < list_users.length; i++) {
    if (list_users[i].mdd === mdd) {
      return i
    }
  }
  return -1
}

var deleteUser = function (mdd) {
  let index = findByMDD(mdd)
  if (index === -1) {
    alert(' Không tồn tại mã định danh này')
  }
  list_users.splice(index, 1)
  renderUser()
  saveDataUsers()
}

var searchUser = function () {
  let results = []
  let keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  for (var i = 0; i < list_users.length; i++) {
    var teacherName = list_users[i].mdd.toLowerCase()
    if (teacherName.includes(keyword)) {
      results.push(list_users[i])
      console.log(results)
    }
  }
  renderUser(results)
}
