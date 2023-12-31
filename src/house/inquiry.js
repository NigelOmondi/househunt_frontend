import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });


    const onChange =  (e) => {
        setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
       
    };

    const onSubmit = async (e) => {
        e.preventDefault();



        try {
            const response = await axios.post('https://househunt-api.onrender.com/api/inquiries', contactInfo);
            
            if (response.status === 200) {
              // Notify the user, their response has been recorded
              toast.success("Your response has been recorded", {
                  position: "bottom-center",
                  autoClose: 6000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
               });

             // reset the form after successful submission
              setContactInfo({
                  name: "",
                  email: "",
                  remarks: "",
               });
            }   
        } catch (error) {
            console.error('Error submitting form:', error);
            // Notify the user if there's an error
            toast.error("Error submitting the form. Please try again later.");
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

                />
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