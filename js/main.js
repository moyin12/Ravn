
const getApi = (suffix) => "http://localhost:8080" + suffix

;(function ($) {
    // "use strict";

    // ============================================  Ravn code

    $("#loginForm").on("submit", event => {
        event.preventDefault()
        const email = $("input[name='email']").val()
        const password = $("input[name='pass']").val()
        console.log(email, password)
        $.post(getApi("/users/login"), { email, password })
            .then(resp => {
                const [user] = resp.data
                localStorage.user = user._id
                localStorage.merchant = user.merchant
                location.href = "./index.html"
            })
    })


    // ========================================

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    // $('.validate-form').on('submit',function(){
    //     var check = true;

    //     for(var i=0; i<input.length; i++) {
    //         if(validate(input[i]) == false){
    //             showValidate(input[i]);
    //             check=false;
    //         }
    //     }

    //     return check;
    // });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);