let btnEdit = document.getElementById('btn-edit')
let btnSubmit = document.getElementById('btn-submit')

let inputNama = document.getElementById ('input-nama')
let inputRole = document.getElementById ('input-role')
let inputAvailability = document.getElementById ('input-availability')
let inputUsia = document.getElementById ('input-usia')
let inputLokasi = document.getElementById ('input-lokasi')
let inputPengalaman = document.getElementById ('input-pengalaman')
let inputEmail = document.getElementById ('input-email')

let textNama = document.getElementById('text-nama')
let textRole = document.getElementById('text-role')
let textAvailability = document.getElementById('text-availability')
let textUsia = document.getElementById('text-usia')
let textLokasi = document.getElementById('text-lokasi')
let textPengalaman = document.getElementById('text-pengalaman')
let textEmail = document.getElementById('text-email')

let formData = document.getElementById ('form-data')

btnEdit.addEventListener('click', function(event){
    event.preventDefault()
    if (formData.style.display == 'none' ){
        formData.style.display = 'block'
        inputNama.value = textNama.innerHTML
        inputRole.value = textRole.innerHTML
        inputAvailability.value = textAvailability.innerHTML
        inputUsia.value = textUsia.innerHTML
        inputLokasi.value = textLokasi.innerHTML
        inputPengalaman.value = textPengalaman.innerHTML
        inputEmail.value = textEmail.innerHTML
    } else {
        formData.style.display = 'none'
    }
})

btnSubmit.addEventListener('click', function (event){
    event.preventDefault()
    if (inputNama.value == "" || inputRole.value == "" || inputAvailability.value == "" || inputUsia.value == "" || inputLokasi.value == "" || inputPengalaman.value == "" || inputEmail.value == ""){
        alert('Silahkan lengkapi form terlebih dahulu.')
        formData.style.display = 'block'
    } else {
        let konfirmasi = confirm ('Apakah yakin ingin merubah data?')
        if(konfirmasi == true){
        textNama.innerHTML = inputNama.value
        textRole.innerHTML = inputRole.value
        textAvailability.innerHTML = inputAvailability.value
        textUsia.innerHTML = inputUsia.value
        textLokasi.innerHTML = inputLokasi.value
        textPengalaman.innerHTML = inputPengalaman.value
        textEmail.innerHTML = inputEmail.value
        formData.style.display = 'none'
        } else {
        formData.style.display = 'block'
        }
    }
})