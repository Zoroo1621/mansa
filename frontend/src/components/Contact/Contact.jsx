import React, { useState } from 'react';
import contact from '../../assets/contact.png';
import phone from '../../assets/call.svg';
import mail from '../../assets/mail.svg';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        gmail: '',
        phone: '',
        date: '',
        time: '00:00',
        message: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' });
                // Reset form
                setFormData({
                    name: '',
                    gmail: '',
                    phone: '',
                    date: '',
                    time: '00:00',
                    message: ''
                });
            } else {
                setSubmitStatus({ type: 'error', message: data.message || 'Submission failed' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="container" id='contact'>
                <div className="left">
                    <div className="img">
                        <img src={contact} alt="contact illustration" />
                        <div className="phone-mail">
                            <img src={phone} alt="phone icon" />
                            <p>+977 9819045447</p>
                        </div>
                        <div className="phone-mail">
                            <img src={mail} alt="email icon" />
                            <p>zoroo1621@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>Get In Touch</h1>
                    
                    {/* Status Message */}
                    {submitStatus && (
                        <div className={`status-message ${submitStatus.type}`}>
                            {submitStatus.message}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <p>*Full Name</p>
                            <input 
                                type="text" 
                                placeholder='Enter Your Full Name' 
                                className='inpt' 
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="gmail">
                            <p>*Gmail</p>
                            <input 
                                type="email"  
                                placeholder='Enter Your Email' 
                                className='inpt' 
                                name='gmail'
                                value={formData.gmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="number">
                            <p>*Phone Number</p>
                            <input 
                                type="number" 
                                placeholder='Enter Your Phone Number' 
                                className='inpt'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="dnt">
                            <p>Date of visit</p>
                            <input 
                                type="date" 
                                name="date" 
                                value={formData.date}
                                onChange={handleChange}
                            />
                            <input 
                                type="time" 
                                id="time" 
                                value={formData.time}
                                name='time' 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="msg">
                            <textarea 
                                name="message" 
                                placeholder='Any message (optional)'
                                cols={44} 
                                rows={8}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type='submit' disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;