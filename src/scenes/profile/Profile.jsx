import React from "react";
import AvatarImage from "../../assets/avatar.webp";

export default function Profile() {
    return (
        <>
            <h1 className="page-title">Profile</h1>
            <div className="m-20 profile-page">
                <Overview />
                <div className="d-flex gap-20 more-data"></div>
            </div>
        </>
    );
}

const Overview = () => {
    const infoArray = [
        {
            title: "General Information",
            content: {
                full_name: "Alex Shanchez",
                gender: "Male",
                country: "Spain",
            },
        },
        {
            title: "Personal Information",
            content: {
                email: "husseinsawan2003@gmail.com",
                phone: "+961 71 127 843",
                date_of_birth: "20 - 10 - 2003",
            },
        },
        {
            title: "Job Information",
            content: {
                title: "Software Engineer",
                programming_languages: ["C++", "JS"],
                years_of_experience: "1 year",
            },
        },
        {
            title: "Billing Information",
            content: {
                payment_method: "Crypto",
                wallet_address: "*********",
                subscription: "Yearly",
            },
        },
    ];
    return (
        <div className="bg-white d-flex align-c r-10 overview">
            <div className="p-20 txt-c avatar-box">
                <img className="round mb-10" src={AvatarImage} alt="avatar" />
                <h3 className="m-0">S7S</h3>
                <p className="txt-grey mt-10">Level 20</p>
                <div className="bg-eee relative hidden r-6 level">
                    <span className="bg-blue r-6" style={{ width: "40%" }} />
                </div>
                <div className="rating mt-10 mb-10">
                    <i className="fa-solid fa-star txt-orange fs-13" />
                    <i className="fa-solid fa-star txt-orange fs-13" />
                    <i className="fa-solid fa-star txt-orange fs-13" />
                    <i className="fa-solid fa-star txt-orange fs-13" />
                    <i className="fa-solid fa-star txt-orange fs-13" />
                </div>
                <p className="txt-grey m-0 fs-13">400 Rating</p>
            </div>
            <div className="info-box w-100 txt-c-mobile">
                {infoArray.map((item) => {
                    return (
                        <div className="p-20 d-flex align-c flex-wrap box">
                            <h4 className="txt-grey w-100 m-0 fs-15">
                                {item.title}
                            </h4>
                            {Object.keys(item.content).map((key) => {
                                return (
                                    <div className="pt-10 fs-14">
                                        <span className="txt-grey">
                                            {(
                                                key[0].toUpperCase() +
                                                key.substring(1)
                                            )
                                                .split("_")
                                                .join(" ")}
                                            :{" "}
                                        </span>
                                        <span>
                                            {/* Checks if a given value is an array and display all items separated by , except for the last one or if there is onlly one item */}
                                            {Array.isArray(item.content[key])
                                                ? item.content[key].map(
                                                      (ele) => {
                                                          return item.content[
                                                              key
                                                          ].indexOf(ele) ===
                                                              item.content[key]
                                                                  .length -
                                                                  1
                                                              ? ele
                                                              : `${ele}, `;
                                                      }
                                                  )
                                                : item.content[key]}
                                        </span>
                                    </div>
                                );
                            })}
                            <div className="pt-10 fs-14">
                                <label>
                                    <input
                                        className="toggle-checkbox"
                                        type="checkbox"
                                    />
                                    <div className="toggle-switch" />
                                </label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
