const URL = 'https://oztcard.herokuapp.com/stripe/charge';

const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const elements = stripe.elements();
let style = {
    base: {
        color: '#32325d',
    }
};

const card = elements.create('card',{style: style});
card.mount('#card-element');

// order payload
function order(amount) {
    charge = payload => {
        if (typeof payload.token === 'undefined') {
            alert('Please use correct details');
            return false;
        }
    }
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');

    const params = {
        amount: amount,
        currency: 'EUR',
        description: '',
        token: payload.token.id,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
    };

    fetch(URL, params)
        .then((res) => {

        });

}