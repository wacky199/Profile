import React from 'react'
import swal from 'sweetalert';
import validator from 'validator';

import {MyContext} from './ContactForm'

const ValidateContactFormData = () => {
    const data = React.useContext(MyContext)
    const validEmail = validator.isEmail(data.email);
    const validName = validator.isEmpty(data.name, {
        ignore_whitespace: true,
    });
    const validMessage = validator.isEmpty(data.message, {
        ignore_whitespace: true,
    });
    ////// alert before sending ////////
    if (!validName && validEmail && !validMessage) {
        swal({
            title: 'Are you sure?',
            text: 'Are you sure that you want to send this message?',
            icon: 'warning',
            dangerMode: false,
        }).then((willSend) => {
            if (willSend) {
                swal(
                    'Thankyou!',
                    'Your message has been sent successfully!',
                    'success'
                );
            }
        });
    } else {
        if (!validEmail) {
            swal({
                title: 'Invalid Email!',
                text: 'Please enter a valid email address.',
                icon: 'warning',
                dangerMode: false,
            });
        } else {
            swal({
                title: 'Error!',
                text: 'Please fill all the fields of form.',
                icon: 'warning',
                dangerMode: false,
            });
        }
    }
}

export default ValidateContactFormData
