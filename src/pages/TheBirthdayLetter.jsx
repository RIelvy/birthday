import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hi Nay, happy birthday!</p>
                    <p>
                       Cieee tambah tuaa, semoga diusia yang baru ini kamu selalu diberikan kesehatan,kebahagiaan, dan dilancarkan dalam hal apapun yg kamu inginkan. Semoga semua hal baik yang kamu usahakan tercapai satu per satu, dan segala kesulitan yang datang kamu bisa lewatin dengan baik.
                    </p>
                    <p>
                        Satu lagi, aku bangga kamu lolos SNBT, selamat yaa udah di terima di jurusan yg kamu inginkan, enjoy ur new journey. hope Allah bless you and let happiness comes to you in every single seconds. Wish you all the best, Yala. Semoga tahun ini menjadi salah satu tahun terbaik dalam hidupmu.
                    </p>
                    <p style={{ textAlign: "right" }}>Dika</p>
                    <p style={{ textAlign: "right" }}></p>
                </div>
            </div>

            <div className="title">
                <p>needs more?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thanks</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sorry.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sorry</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/happy.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">happy</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sad.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sad</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
