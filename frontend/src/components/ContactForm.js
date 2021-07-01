import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import validator from 'validator';

const ContactForm = () => {
    const url = `/contact/messages`;

    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onSubmitPostData = async () => {
        ////// // Lets add sent time also /////////////////

        const time = new Date().toLocaleString();

        ///////// Posting data to given url /////////////
        try {
            const res = await axios.post(url, {
                name: data.name,
                email: data.email,
                message: data.message,
                time: time,
            });
            console.log(res);
        } catch (err) {
            console.error();
            swal({
                title: 'Error',
                text: 'There is some error in sending this message. Please try some other listed method to connect.',
                icon: 'error',
                dangerMode: false,
            });
        }
    };

    const submit = (e) => {
        e.preventDefault();     //// so onSubmit page doesnt refresh

        //////////////////// validate the data before sending to server //////////////////

        const validEmail = validator.isEmail(data.email);
        const emptyName = validator.isEmpty(data.name, {
            ignore_whitespace: true,
        });
        const emptyMessage = validator.isEmpty(data.message, {
            ignore_whitespace: true,
        });

        //////////////////////// alert before sending ///////////////////////////////////

        if (!emptyName && validEmail && !emptyMessage) {
            console.log(`Message details: ${JSON.stringify(data)}`);
            swal({
                title: 'Confirmation',
                text: 'Please click OK if you want to send this message.',
                icon: 'info',
                dangerMode: false,
            }).then((willSend) => {
                if (willSend) {
                    swal(
                        'Thankyou!',
                        'Your message has been sent successfully!'
                    );
                    onSubmitPostData();
                }
            });
        } else {
            if (emptyMessage || emptyName) {
                swal({
                    title: 'Error!',
                    text: 'Please fill all the fields of the form.',
                    dangerMode: false,
                    icon: 'warning',
                });
            } else if (!validEmail) {
                swal({
                    title: 'Invalid Email!',
                    text: 'Please enter a valid email address.',
                    dangerMode: false,
                });
            } else {
                swal({
                    title: 'Error!',
                    text: 'Please fill all the fields of form.',
                    dangerMode: false,
                });
            }
            return;
        }

        //////////////////////////////////////////////////////////////////////
    };

    // this function will be called at every change to avoid this use debouncing
    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        // console.log(newData);
    };

    

    ////////////////////////////////////// Debouncing ///////////////////////////////
    // // lets create a betterHandle using debouncing concept
    // const debounce = (fn, period) => {
    //     let timer;
    //     console.log(data);
    //     return (...args) => {
    //         if (timer) clearTimeout(timer);
    //         timer = setTimeout(() => fn(...args), period);
    //     };
    // };

    // const handleInput = (e) => {
    //     console.log(e.target.value);
    //     setData({ ...data, [e.target.id]: e.target.value });
    // };

    /////////////////////////////////////////////////////////////////////////

    return (
        <div className="getInTouchContactForm">
            <h2>Contact form</h2>
            <form onSubmit={(e) => submit(e)}>
                <input
                    onChange={(e) => handle(e)}
                    type="text"
                    defaultValue={data.name}
                    id="name"
                    placeholder="Full Name"
                />
                <br />
                <input
                    onChange={(e) => handle(e)}
                    type="email"
                    id="email"
                    defaultValue={data.email}
                    placeholder="Email Address"
                />
                <br />
                <textarea
                    onChange={(e) => handle(e)}
                    id="message"
                    defaultValue={data.message}
                    rows="5"
                    cols="auto"
                    placeholder="Message"
                />
                <br />
                <input type="submit" className="btn" value="Send Message" />
            </form>
        </div>
    );
};

export default ContactForm;
