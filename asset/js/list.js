//Thông tin Sinh Viên
function Students(
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
) {
  this.mssv = mssv
  this.name = name
  this.email = email
  this.phone = phone
  this.date = date
  this.gender = gender
  this.address = address
  this.ethnic = ethnic
  this.department = department
  this.majors = majors
  this.classroom = classroom
}

var list_students = [
  {
    mssv: '20080032',
    name: 'Ngoc Ánh',
    email: '20080032@gmail.com',
    phone: '0378556945',
    date: '2002-03-12',
    gender: 'nữ',
    address: 'bình dương',
    ethnic: 'kinh',
    info: 'Tôi tên là.....',
    department: 'GD',
    majors: 'Giáo dục',
    classroom: '23GD01',
  },
  {
    mssv: '21050019',
    name: 'Long Ho',
    email: '20050019@gmail.com',
    phone: '0378556945',
    date: '2003-20-12',
    gender: 'nam',
    address: 'bình dương',
    ethnic: 'hoa',
    info: 'Tôi tên là.....',
    department: 'TH',
    majors: 'Công nghệ thông tin',
    classroom: '24TH01',
  },
  {
    mssv: '20050013',
    name: 'Ngoc Mai',
    email: '20050013@gmail.com',
    phone: '0378556945',
    date: '2002-06-02',
    gender: 'nữ',
    address: 'bình dương',
    ethnic: 'kinh',
    info: 'Tôi tên là.....',
    department: 'TH',
    majors: 'Công nghệ thông tin',
    classroom: '23TH01',
  },
  {
    mssv: '19030001',
    name: 'Văn Linh',
    email: '19030001@gmail.com',
    phone: '0378556945',
    date: '2001-28-01',
    gender: 'nam',
    address: 'bình dương',
    ethnic: 'kinh',
    info: 'Tôi tên là.....',
    department: 'SH',
    majors: 'Công nghệ sinh học',
    classroom: '22SH01',
  },
]

//Thông tin tài khoản
function Users(mdd, username, password, phone, email, position) {
  this.mdd = mdd
  this.username = username
  this.password = password
  this.phone = phone
  this.email = email
  this.position = position
}

var list_users = [
  {
    mdd: '10000001',
    username: 'ngocmai',
    password: '123456',
    phone: '0378448674',
    email: 'ngocmai262626@gmail.com',
    position: 'Admin',
  },
  {
    mdd: '20050013',
    username: '2000013',
    password: '12345678',
    phone: '0378448673',
    email: '20050013@gmail.com',
    position: 'người dùng'
  },
  {
    mdd: '21050019',
    username: '21050019',
    password: '123456',
    phone: '0378448674',
    email: '21050019@gmail.com',
    position: 'người dùng',
  },
  {
    mdd: '19030001',
    username: '19030001',
    password: '12345678',
    phone: '0378448673',
    email: '19030001@gmail.com',
    position: 'người dùng'
  },
]

//Tạo một danh sách thông tin các khoa
function Departs(msk, name_depart) {
  this.msk = msk
  this.name_depart = name_depart
}

var list_depart = [
  {
    msk: 'TH',
    name_depart: 'Công nghệ thông tin',
  },
  {
    msk: 'KT',
    name_depart: 'Kinh Tế',
  },
  {
    msk: 'NNA',
    name_depart: 'Ngôn ngữ anh',
  },
  {
    msk: 'SH',
    name_depart: 'Công nghệ sinh học',
  },
  {
    msk: 'VNH',
    name_depart: 'Việt nam học',
  },
  {
    msk: 'TT',
    name_depart: 'Truyền thông đa phương tiện',
  },
  {
    msk: 'GD',
    name_depart: 'Giáo dục',
  },
]

//Tạo một danh sách thông tin các ngành
function Majors(msk, msn, name_major) {
  this.msk = msk
  this.msn = msn
  this.name_major = name_major
}

var list_major = [
  {
    msk: 'TH',
    msn: '01',
    name_major: 'Kỹ Thuật Phần Mềm',
  },
  {
    msk: 'KT',
    msn: '01',
    name_major: 'Bảo mật thông tin',
  },
  {
    msk: 'TH',
    msn: '02',
    name_major: 'Kỹ Thuật Phần Mềm',
  },
  {
    msk: 'KT',
    msn: '02',
    name_major: 'Bảo mật thông tin',
  },
  {
    msk: 'TH',
    msn: '03',
    name_major: 'Kỹ Thuật Phần Mềm',
  },
  {
    msk: 'KT',
    msn: '03',
    name_major: 'Bảo mật thông tin',
  },
]

//Tạo một danh sách thông tin các lớp
function ClassStudents(msk, msn, msl, name_class) {
  this.msk = msk
  this.msn = msn
  this.msl = msl
  this.name_class = name_class
}
var list_class = [
  {
    msk: 'TH',
    msn: '01',
    msl: '23TH01',
    name_class: 'Kỹ Thuật Phần Mềm',
  },
  {
    msk: 'TH',
    msn: '02',
    msl: '23TH01',
    name_class: 'An toàn bảo mật',
  },
  {
    msk: 'SH',
    msn: '01',
    msl: '22TH01',
    name_class: 'Công nghệ sinh học',
  },
  {
    msk: 'KT',
    msn: '01',
    msl: '21KT01',
    name_class: 'Kế toán',
  },
]

//Tạo 1 list danh sách thông tin điểm của sính viên
function Scores(
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
  semester,
  scholastic,
) {
  this.mssv = mssv
  this.msm = msm
  this.name_student = name_student
  this.name_subjects = name_subjects
  this.group = group
  this.midterm = midterm
  this.credits = credits
  this.credits_midterm = credits_midterm
  this.term = term
  this.credits_midterm = credits_term
  this.semester = semester
  this.scholastic = scholastic
}
var list_scores = [
  {
    mssv: '20050013',
    msm: 'INF0073',
    name_student: 'Ngọc Mai',
    name_subjects: 'Kiểm thử phần mềm',
    group: '02',
    credits: 2,
    midterm: 9,
    credits_midterm: 50,
    term: 8,
    credits_term: 50,
    semester: 3,
    scholastic: '2020-2021'
  },
  {
    mssv: '20050013',
    msm: 'INF0073',
    name_student: 'Ngọc Mai',
    name_subjects: 'Kiểm thử phần mềm',
    group: '02',
    credits: 3,
    midterm: 9,
    credits_midterm: 50,
    term: 10,
    credits_term: 50,
    semester: 2,
    scholastic: '2021-2022'
  },
  {
    mssv: '20050013',
    msm: 'INF0073',
    name_student: 'Ngọc Mai',
    name_subjects: 'Kiểm thử phần mềm',
    group: '02',
    credits: 2,
    midterm: 9,
    credits_midterm: 50,
    term: 9,
    credits_term: 50,
    semester: 3,
    scholastic: '2020-2021'
  },
  {
    mssv: '20050013',
    msm: 'INF0073',
    name_student: 'Ngọc Mai',
    name_subjects: 'Kiểm thử phần mềm',
    group: '02',
    credits: 3,
    midterm: 7,
    credits_midterm: 50,
    term: 9,
    credits_term: 50,
    semester: 2,
    scholastic: '2021-2022'
  },
  {
    mssv: '20050013',
    msm: 'INF0073',
    name_student: 'Ngọc Mai',
    name_subjects: 'Kiểm thử phần mềm',
    group: '02',
    credits: 2,
    midterm: 5,
    credits_midterm: 50,
    term: 8,
    credits_term: 50,
    semester: 3,
    scholastic: '2020-2021'
  },
  {
    mssv: '20050013',
    msm: 'INF0073',
    name_student: 'Ngọc Mai',
    name_subjects: 'Kiểm thử phần mềm',
    group: '02',
    credits: 3,
    midterm: 8,
    credits_midterm: 50,
    term: 7,
    credits_term: 50,
    semester: 2,
    scholastic: '2021-2022'
  },
]

//Tạo 1 list danh sách thông tin của môn học
function Subject(msl, msm, name_subjects, credits) {
  this.msl = msl
  this.msm = msm
  this.name_subjects = name_subjects
  this.credits = credits
}
var list_subject = [
  {
    msl: '23TH01',
    msm: 'INF0073',
    name_subjects: 'Kiểm thử phần mềm',
    credits: 2,
  },
  {
    msl: '23TH01',
    msm: 'INF0074',
    name_subjects: 'Cấu trúc dữ liệu và giải thuật',
    credits: 2,
  },
]

function Teachers(
  msgv,
  name,
  email,
  phone,
  date,
  gender,
  address,
  ethnic,
  degree,
) {
  this.msgv = msgv
  this.name = name
  this.email = email
  this.phone = phone
  this.date = date
  this.gender = gender
  this.address = address
  this.ethnic = ethnic
  this.degree = degree
}
var list_teachers = [
  {
    msgv: 'NM06',
    name: 'Ngoc Mai',
    email: 'NM06@gmail.com',
    phone: '0378556945',
    date: '1899-03-12',
    gender: 'nữ',
    address: 'bình dương',
    ethnic: 'Kinh',
    degree: 'Tiến Sĩ',
  },
  {
    msgv: 'LH02',
    name: 'Long Hồ',
    email: 'LH02@gmail.com',
    phone: '0378458614',
    date: '1986-03-12',
    gender: 'nam',
    address: 'bình dương',
    ethnic: 'Hoa',
    degree: 'Tiến Sĩ',
  },
  {
    msgv: 'AT05',
    name: 'Bích Thúy',
    email: 'AT05@gmail.com',
    phone: '034578956',
    date: '1975-03-12',
    gender: 'nữ',
    address: 'bình dương',
    ethnic: 'Kinh',
    degree: 'Thạc Sĩ',
  },
]

function SLSV(
  msk,
  slsv
) {
  this.msk = msk
  this.slsv = slsv
}

list_sv = []

