const Validation = (userData) =>{
      const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = "Enter a valid email";
    }
    if (!userData.email) { // userData.email.length === ''
        errors.email = "Wrong email";
    }
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = "enter a password with at least one number";
    }
    if (userData.password.length < 6 || userData.password.length > 12) {
        errors.password = "type a password between 6 and 12 characters";
    }

    return errors;
}

export default Validation