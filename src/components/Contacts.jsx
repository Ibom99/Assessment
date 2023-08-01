import React from "react";
import "../styles/Contacts.css";
import { Search } from "react-iconly";

const Contacts = () => {
  const contactList = [
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_2_ddjtmi.png",
      status: "#5570F1",
      name: "Jane Doe",
      message: "Hi, i want to make enquiries about yo...",
      notification: "New",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_3_wjlzpe.png",
      status: "#C4CAE8",
      name: "Janet Adebayo",
      message: "Hi, i want to make enquiries about yo...",
      notification: "New",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868462/assessment%20images/Rectangle_3_4_pwcwek.png",
      status: "#5570F1",
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      notification: "New",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_2_ddjtmi.png",
      status: "#5570F1",
      name: "Jane Doe",
      message: "Hi, i want to make enquiries about yo...",
      notification: "2",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_3_wjlzpe.png",
      status: "#5570F1",
      name: "Janet Adebayo",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868462/assessment%20images/Rectangle_3_4_pwcwek.png",
      status: "#C4CAE8",
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_2_ddjtmi.png",
      status: "#C4CAE8",
      name: "Jane Doe",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_3_wjlzpe.png",
      status: "#C4CAE8",
      name: "Janet Adebayo",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868462/assessment%20images/Rectangle_3_4_pwcwek.png",
      status: "#C4CAE8",
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868462/assessment%20images/Rectangle_3_4_pwcwek.png",
      status: "#5570F1",
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_2_ddjtmi.png",
      status: "#5570F1",
      name: "Jane Doe",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_3_wjlzpe.png",
      status: "#5570F1",
      name: "Janet Adebayo",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
    {
      image:
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1690868462/assessment%20images/Rectangle_3_4_pwcwek.png",
      status: "#5570F1",
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      notification: "",
      time: "12:55 am",
    },
  ];

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <div className="contacts-title">
          <h3>Contacts</h3>
          <div className="contacts-amount">34</div>
        </div>
        <div className="contacts-search">
          <Search set="light" primaryColor="black" />
          <input className="contacts-input" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="contact-list">
        {contactList.map((item, index) => (
          <div className="contact-item" key={index}>
            <div className="image-status">
              <img src={item.image} alt="contact profile photo" />
              <span
                style={{ backgroundColor: item.status }}
                className="status"
              ></span>
            </div>

            <div className="message-desc">
              <div className="name-message">
                <p className="contact-name">{item.name}</p>
                <p className="contact-message">{item.message}</p>
              </div>
              <div className="notification-time">
                <p
                  className="message-notification"
                  style={{
                    backgroundColor:
                      item.notification == "New" ? "#FEF5EA" : "#FFCC91",
                  }}
                >
                  {item.notification}
                </p>
                <p className="time">{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
