import "./house.css";
import { useState } from "react";
import emailIcon from './Email.png';
import Inquiry from "./inquiry";
import PropTypes from 'prop-types';
import currencyFormatter from "../helpers/currencyFormatter";

const House = ( { house }) => {
    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    };

    return (
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.county}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" />
                </div>
                <div className="col-md-5">
                    <p className="price">{currencyFormatter.format(house.price)}</p>
                    <p>{house.description}</p>
                    <p><b>For inquiries, please click on the mailbox icon below:</b></p>
                    <img
                        src={emailIcon}
                        height="30"
                        width="30"
                        alt="inquiry"
                        onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry house={house} />}
                </div>
            </div>
        </div>
    );
}

House.propTypes = { house: PropTypes.object.isRequired, };

export default House;