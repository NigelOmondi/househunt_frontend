import { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const [validEmail, setValidEmail] = useState(true);

    const onChange =  (e) => {
        setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
        if (e.target.id === 'email') {
            const isValid = e.target.checkValidity();
            setValidEmail(isValid);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validEmail) {
            alert('Please enter a valid email address');
            return;
        }

        const response = await fetch('/api/inquiries', {
            method: 'POST',
            body: JSON.stringify(contactInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            // reset the form
            setContactInfo({
                name: "",
                email: "",
                remarks: "",
            });
            // Send entered data to database
            console.log(contactInfo);
        };
        
    };

    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    value={contactInfo.name}
                    onChange={onChange}
                />    
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={contactInfo.email}
                    onChange={onChange}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                />
                {!validEmail && (
                  <p style={{ color: 'red' }}>Please enter a valid email address</p>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input
                    type="text"
                    id="remarks"
                    className="form-control"
                    placeholder="Remarks"
                    value={contactInfo.remarks}
                    onChange={onChange}
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                disabled={!contactInfo.name || !contactInfo.email}
                onClick={onSubmit}
            >Submit</button>
        </form>
    );
};
 
export default Inquiry;