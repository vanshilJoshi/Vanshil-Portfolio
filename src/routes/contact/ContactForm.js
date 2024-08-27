import { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({ fullname: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleValidation = (values) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;

    if (!values.fullname) {
      errors.fullname = "Enter your full name";
    } else if (numberRegex.test(values.fullname)) {
      errors.fullname = "Full name can't be numbers!";
    }

    if (!values.email) {
      errors.email = "Enter your email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.message) {
      errors.message = "Message field can't be empty";
    } else if (values.message.length < 10) {
      errors.message = "The message should contain at least 10 characters";
    }

    return errors;
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const errors = handleValidation(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);
    setServerError(""); 

    // Form data for Web3Forms
    const formData = new FormData();
    formData.append('access_key', '098d0ab9-0243-455c-9fb3-1de84fa9ba1d'); 
    formData.append('fullname', formValues.fullname);
    formData.append('email', formValues.email);
    formData.append('message', formValues.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmit(true);
        setFormValues({ fullname: "", email: "", message: "" });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setServerError("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false); 
    }
  }

  return (
    <section className="contact-us-form">
      {submit ? (
        <section className="form-success">
          <h3>Message successfully sent!</h3>
          <p>I will get back to you as soon as possible!</p>
          <button type="button" onClick={() => setSubmit(false)}>Send again</button>
        </section>
      ) : (
        <form className="contact-form form-tag" onSubmit={submitForm}>
          <section className="contact-form-item">
            <input
              onChange={handleChange}
              value={formValues.fullname}
              className="fullname-input"
              type="text"
              placeholder="Full name"
              name="fullname"
            />
            <br />
            <label className="fullname-error">{formErrors.fullname}</label>
          </section>
          <section className="contact-form-item">
            <input
              onChange={handleChange}
              value={formValues.email}
              name="email"
              className="email-input"
              type="text"
              placeholder="Email"
            />
            <br />
            <label className="email-error">{formErrors.email}</label>
          </section>
          <section className="contact-form-item">
            <textarea
              onChange={handleChange}
              value={formValues.message}
              name="message"
              className="textarea-input"
              placeholder="Message"
            />
            <br />
            <label className="textarea-error">{formErrors.message}</label>
          </section>
          <section className="contact-form-item">
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
            {serverError && <p className="error-message">{serverError}</p>}
            <br />
          </section>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
