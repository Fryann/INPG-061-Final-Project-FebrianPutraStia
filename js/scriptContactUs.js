let inputNama = document.getElementById('input-nama')
let nama = inputNama.value
let inputEmail = document.getElementById('input-email')
let email = inputEmail.value
let inputMessage = document.getElementById('input-message')
let message = inputMessage.value
let btnSubmit = document.getElementById('btn-submit')
btnSubmit.addEventListener('click', function(event){
    event.preventDefault()
        Swal.fire({
            title: 'Apakah anda ingin mengirimkan pesan?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Kirim'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Pesan Terkirim!',
                'Pesan anda berhasil dikirim',
                'success'
              )
            }
          })
})