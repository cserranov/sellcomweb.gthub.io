/*
 * Controladores de validación y envio de formulario
 */
;(function(){
  var controllerForm = function(){
    var downloadForm = $('#downloadForm'),
        labelForm = $('#downloadForm label'),
        inputForm = $('#downloadForm input'),
        textareaForm = $('#downloadForm textarea');
    downloadForm.validate({
      errorPlacement: function(error,element) {
       return true;
      },
      rules: {
        name:"required",
        surname:"required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 8,
          maxlength: 10,
          number: true,
        },
        company:"required",
        job:"required",
        terms: "required"
      },
      submitHandler: function(form) {
        $("#txtName").attr( "name", "First Name");
        $("#txtSurName").attr("name", "Last Name");
        $("#txtMail").attr("name", "Email");
        $("#txtPhone").attr("name", "Mobile");
        $("#txtCompany").attr("name", "Company");
        $("#txtJob").attr("name", "LEADCF2");
        $("#txtComment").attr("name", "Description");
        $("#enviarbtn").attr('disabled', 'disabled');
        $.ajax({
          url: form.action,
          type: form.method,
          data: $(form).serialize(),
          success: function (response) {
            $("#enviarbtn").removeAttr("disabled");
            if (response === "captcha") {
              Swal({
                  type: "error",
                  title: "Oops...",
                  text: "Verifica que no eres un robot.",
              })
            } else if (response === "error") {
              Swal({
                type: "error",
                title: "Oops...",
                text: "Algo salio mal, reintentalo."
              })
            } else if (response === "ok") {
              Swal({
                  title: "Correcto",
                  text: "Gracias por tu tiempo.",
                  type: "success",
                  allowOutsideClick: false
              }).then(result => {
                  if (result.value) {
                      location.reload()
                  }
              })
            }
          },
          error: function () {
            $("#enviarbtn").removeAttr("disabled");
            Swal({
              type: "error",
              title: "Oops...",
              text: "Algo salio mal, reintentalo."
            })
          }
        })
      }
    });

  };
  controllerForm();
})();
/*
 * formulario ayudanos a mejorar
 */
;(function(){
  var controllerFormH = function(){
    var downloadFormH = $('#downloadFormH'),
        labelForm = $('#downloadFormH label'),
        inputForm = $('#downloadFormH input'),
        textareaForm = $('#downloadFormH textarea');
    downloadFormH.validate({
      errorPlacement: function(error,element) {
       return true;
      },
      rules: {
        name:"required",
        surname:"required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 8,
          maxlength: 10,
          number: true,
        },
        company:"required",
        job:"required",
        terms: "required"
      },
      submitHandler: function(form2) {
        $("#txtName").attr( "name", "First Name");
        $("#txtSurName").attr("name", "Last Name");
        $("#txtMail").attr("name", "Email");
        $("#txtPhone").attr("name", "Mobile");
        $("#txtCompany").attr("name", "Company");
        $("#txtComment").attr("name", "Description");
        $("#enviarbtn").attr('disabled', 'disabled');
        $.ajax({
          url: form2.action,
          type: form2.method,
          data: $(form2).serialize(),
          success: function (response) {
            $("#enviarbtn2").removeAttr("disabled");
            if (response === "captcha") {
              Swal({
                  type: "error",
                  title: "Oops...",
                  text: "Verifica que no eres un robot.",
              })
            } else if (response === "error") {
              Swal({
                type: "error",
                title: "Oops...",
                text: "Algo salio mal, reintentalo."
              })
            } else if (response === "ok") {
              Swal({
                  title: "Correcto",
                  text: "Gracias por tus sugerencias.",
                  type: "success",
                  allowOutsideClick: false
              }).then(result => {
                  if (result.value) {
                      location.reload()
                  }
              })
            }
          },
          error: function () {
            $("#enviarbtn").removeAttr("disabled");
            Swal({
              type: "error",
              title: "Oops...",
              text: "Algo salio mal, reintentalo."
            })
          }
        })
      }
    });

  };
  controllerFormH();
})();