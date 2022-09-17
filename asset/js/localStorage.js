// 3. lưu dữ liệu Department  vào localStorage
var saveDataDepart = function () {
  // chuyển sang chuỗi
  var departListJSON = JSON.stringify(list_depart)
  localStorage.setItem('listDepart', departListJSON)
}

// 4.1. lấy dữ liệu từ localStorage khi load trang
var getDataDepart = function () {
  var departListJSON = localStorage.getItem('listDepart')
  if (departListJSON) {
    // parse ra mảng
    list_depart = mapDataDepart(JSON.parse(departListJSON))
    renderDepart()
  }
}

//Lấy dữ liệu sử dụng trong list khoa
var getDepart = function () {
  var departListJSON = localStorage.getItem('listDepart')
  if (departListJSON) {
    // parse ra mảng
    list_depart = mapDataDepart(JSON.parse(departListJSON))
    renderListMSK()
  }
}
// 4.2. lấy mảng từ localStorage chuyển sang mảng student
// do dùng stringify chuyển mảng sang chuỗi JSON => bỏ hết phương thức, chỉ lưu các thuộc tính
var mapDataDepart = function (dataFromLocal) {
  var data = []
  for (var i = 0; i < dataFromLocal.length; i++) {
    var currentDepart = dataFromLocal[i]
    var mappedDepart = new Departs(currentDepart.msk, currentDepart.name_depart)

    data.push(mappedDepart)
  }

  return data
}




// 3. lưu dữ liệu Major  vào localStorage
var saveDataMajor = function () {
  // chuyển sang chuỗi
  var majorListJSON = JSON.stringify(list_major)
  localStorage.setItem('listMajor', majorListJSON)
}

// 4.1. lấy dữ liệu từ localStorage khi load trang
var getDataMajor = function () {
  var majorListJSON = localStorage.getItem('listMajor')
  if (majorListJSON) {
    // parse ra mảng
    list_major = mapDataMajor(JSON.parse(majorListJSON))
    renderMajor()
  }
}

// //Lấy dữ liệu sử dụng trong list khoa
var getMajorCreate = function () {
  var majorListJSON = localStorage.getItem('listMajor')
  if (majorListJSON) {
    // parse ra mảng
    list_major = mapDataMajor(JSON.parse(majorListJSON))
    
  }
}

var getCheckMajor = function () {
  var majorListJSON = localStorage.getItem('listMajor')
  if (majorListJSON) {
    // parse ra mảng
    list_major = mapDataMajor(JSON.parse(majorListJSON))
    checkMajor()
  }
}
//Lấy dữ liệu sử dụng trong list khoa
var getMajor = function () {
  var majorListJSON = localStorage.getItem('listMajor')
  if (majorListJSON) {
    // parse ra mảng
    list_major = mapDataMajor(JSON.parse(majorListJSON))
    renderListMSN()
  }
}

// 4.2. lấy mảng từ localStorage chuyển sang mảng student
// do dùng stringify chuyển mảng sang chuỗi JSON => bỏ hết phương thức, chỉ lưu các thuộc tính
var mapDataMajor = function (dataFromLocal) {
  var data = []
  for (var i = 0; i < dataFromLocal.length; i++) {
    var currentMajor = dataFromLocal[i]
    var mappedMajor = new Majors(
      currentMajor.msk,
      currentMajor.msn,
      currentMajor.name_major,
    )
    data.push(mappedMajor)
  }

  return data
}




// 3. lưu dữ liệu Class  vào localStorage
var saveDataClass = function () {
  // chuyển sang chuỗi
  var classListJSON = JSON.stringify(list_class)
  localStorage.setItem('listClass', classListJSON)
}

// 4.1. lấy dữ liệu từ localStorage khi load trang
var getDataClass = function () {
  var classListJSON = localStorage.getItem('listClass')
  if (classListJSON) {
    // parse ra mảng
    list_class = mapDataClass(JSON.parse(classListJSON))
    renderClass()
  }
}

var getCheckClass = function () {
  var classListJSON = localStorage.getItem('listClass')
  if (classListJSON) {
    // parse ra mảng
    list_class = mapDataClass(JSON.parse(classListJSON))
    checkClass()
  }
}
//Lấy dữ liệu sử dụng trong list khoa
var getClass = function () {
  var classListJSON = localStorage.getItem('listClass')
  if (classListJSON) {
    // parse ra mảng
    list_class = mapDataClass(JSON.parse(classListJSON))
    renderListMSL()
  }
}

// var getCreateClass = function () {
//   var classListJSON = localStorage.getItem('listClass')
//   if (classListJSON) {
//     // parse ra mảng
//     list_class = mapDataClass(JSON.parse(classListJSON))
//   }
// }


// 4.2. lấy mảng từ localStorage chuyển sang mảng student
// do dùng stringify chuyển mảng sang chuỗi JSON => bỏ hết phương thức, chỉ lưu các thuộc tính
var mapDataClass = function (dataFromLocal) {
  var data = []
  for (var i = 0; i < dataFromLocal.length; i++) {
    var currentClass = dataFromLocal[i]
    var mappedClass = new ClassStudents(
      currentClass.msk,
      currentClass.msn,
      currentClass.msl,
      currentClass.name_class,
    )
    data.push(mappedClass)
  }

  return data
}




// 3. lưu dữ liệu Subject  vào localStorage
var saveDataSubjects = function () {
  // chuyển sang chuỗi
  var subjectListJSON = JSON.stringify(list_subject)
  localStorage.setItem('listSubjects', subjectListJSON)
}

// 4.1. lấy dữ liệu từ localStorage khi load trang
var getDataSubjects = function () {
  var subjectListJSON = localStorage.getItem('listSubjects')
  if (subjectListJSON) {
    // parse ra mảng
    list_subject = mapDataSubjects(JSON.parse(subjectListJSON))
    renderSubject()
  }
}

// //Lấy dữ liệu sử dụng trong list khoa
// var getSubjects = function () {
//   var subjectListJSON = localStorage.getItem('listSubjects')
//   if (subjectListJSON) {
//     // parse ra mảng
//     list_subject = mapDataSubjects(JSON.parse(subjectListJSON))
//     renderListMSL()
//   }
// }

// var getSubjectsCreate = function () {
//   var subjectListJSON = localStorage.getItem('listSubjects')
//   if (subjectListJSON) {
//     // parse ra mảng
//     list_subject = mapDataSubjects(JSON.parse(subjectListJSON))
//   }
// }

// 4.2. lấy mảng từ localStorage chuyển sang mảng student
// do dùng stringify chuyển mảng sang chuỗi JSON => bỏ hết phương thức, chỉ lưu các thuộc tính
var mapDataSubjects = function (dataFromLocal) {
  var data = []
  for (var i = 0; i < dataFromLocal.length; i++) {
    var currentSubjects = dataFromLocal[i]
    var mappedSubjects = new Subject(
      currentSubjects.msl,
      currentSubjects.msm,
      currentSubjects.name_subjects,
      currentSubjects.credits,
    )
    data.push(mappedSubjects)
  }

  return data
}




// 3. lưu dữ liệu Teacher  vào localStorage
var saveDataTeachers = function () {
  // chuyển sang chuỗi
  var teacherListJSON = JSON.stringify(list_teachers)
  localStorage.setItem('listTeachers', teacherListJSON)
}

// 4.1. lấy dữ liệu từ localStorage khi load trang
var getDataTeachers = function () {
  var teacherListJSON = localStorage.getItem('listTeachers')
  if (teacherListJSON) {
    // parse ra mảng
    list_teachers = mapDataTeachers(JSON.parse(teacherListJSON))
    renderTeacher()
  }
}// 4.1. lấy dữ liệu từ localStorage khi load trang
var getCreateTeachers = function () {
  var teacherListJSON = localStorage.getItem('listTeachers')
  if (teacherListJSON) {
    // parse ra mảng
    list_teachers = mapDataTeachers(JSON.parse(teacherListJSON))
  }
}

// 4.2. lấy mảng từ localStorage chuyển sang mảng student
// do dùng stringify chuyển mảng sang chuỗi JSON => bỏ hết phương thức, chỉ lưu các thuộc tính
var mapDataTeachers = function (dataFromLocal) {
  var data = []
  for (var i = 0; i < dataFromLocal.length; i++) {
    var currentTeachers = dataFromLocal[i]
    var mappedTeachers = new Teachers(
      currentTeachers.msgv,
      currentTeachers.name,
      currentTeachers.email,
      currentTeachers.phone,
      currentTeachers.date,
      currentTeachers.gender,
      currentTeachers.address,
      currentTeachers.ethnic,
      currentTeachers.degree,
    )
    data.push(mappedTeachers)
  }

  return data
}




// 3. lưu dữ liệu Users  vào localStorage
var saveDataUsers = function () {
  // chuyển sang chuỗi
  var teacherListJSON = JSON.stringify(list_users)
  localStorage.setItem('listUsers', teacherListJSON)
}

// 4.1. lấy dữ liệu từ localStorage khi load trang
var getDataUsers = function () {
  var teacherListJSON = localStorage.getItem('listUsers')
  if (teacherListJSON) {
    // parse ra mảng
    list_users = mapDataUsers(JSON.parse(teacherListJSON))
    renderUser()
  }
}
// 4.1. lấy dữ liệu từ localStorage khi load trang
var getCreateUsers = function () {
  var teacherListJSON = localStorage.getItem('listUsers')
  if (teacherListJSON) {
    // parse ra mảng
    list_users = mapDataUsers(JSON.parse(teacherListJSON))
  }
}



// 4.2. lấy mảng từ localStorage chuyển sang mảng student
// do dùng stringify chuyển mảng sang chuỗi JSON => bỏ hết phương thức, chỉ lưu các thuộc tính
var mapDataUsers = function (dataFromLocal) {
  var data = []
  for (var i = 0; i < dataFromLocal.length; i++) {
    var currentUsers = dataFromLocal[i]
    var mappedUsers = new Users(
      currentUsers.mdd,
      currentUsers.username,
      currentUsers.password,
      currentUsers.phone,
      currentUsers.email,
      currentUsers.position,
    )
    data.push(mappedUsers)
  }

  return data
}



// 3. lưu dữ liệu Students  vào localStorage
var saveDataStudents = function () {
  // chuyển sang chuỗi
  var teacherListJSON = JSON.stringify(list_students)
  localStorage.setItem('listStudents', teacherListJSON)
}

// 4.1. lấy dữ liệu từ localStorage khi load trang
var getDataStudents = function () {
  var studentListJSON = localStorage.getItem('listStudents')
  if (studentListJSON) {
    // parse ra mảng
    list_students = mapDataStudents(JSON.parse(studentListJSON))
    renderStudent()
  }
}

//Lấy dữ liệu sử dụng trong list khoa
var getStudents = function () {
  var studentListJSON = localStorage.getItem('listStudents')
  if (studentListJSON) {
    // parse ra mảng
    list_students = mapDataStudents(JSON.parse(studentListJSON))
    renderListMSK()
  }
}

// var getStudentsCreate = function () {
//   var studentListJSON = localStorage.getItem('listStudents')
//   if (studentListJSON) {
//     // parse ra mảng
//     list_students = mapDataStudents(JSON.parse(studentListJSON))
//   }
// }

// 4.2. lấy mảng từ localStorage chuyển sang mảng student
// do dùng stringify chuyển mảng sang chuỗi JSON => bỏ hết phương thức, chỉ lưu các thuộc tính
var mapDataStudents = function (dataFromLocal) {
  var data = []
  for (var i = 0; i < dataFromLocal.length; i++) {
    var currentStudents = dataFromLocal[i]
    var mappedStudents = new Students(
      currentStudents.mssv,
      currentStudents.name,
      currentStudents.email,
      currentStudents.phone,
      currentStudents.date,
      currentStudents.gender,
      currentStudents.address,
      currentStudents.ethnic,
      currentStudents.department,
      currentStudents.majors,
      currentStudents.classroom,
    )
    data.push(mappedStudents)
  }

  return data
}