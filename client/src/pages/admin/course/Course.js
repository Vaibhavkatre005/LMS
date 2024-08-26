import React, { useState } from "react";
import Hoc from "../layout/Hoc";

const Course = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };
    const user = [
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
        {
            id: 1,
            name: "Rahul",
            address: "Delhi",
            date: "10/10/2022",
            type: "Electric",
            switch: "On",
            status: "Active"
        },
    ]
    return (
        <>
            <Hoc />
            <div class="hero-section">
                <div class="user-search">
                    <div id="user-tag">
                        <h4>Users</h4>
                    </div>
                    <div id="search-inner-hero-section">
                        <input type="text" placeholder="Search" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                <div class="user-instructor-top">
                    <div class="user-instructor">
                        <p>Users | Instructor</p>
                    </div>
                    <div class="hero-inner-logo">
                        <img src={require("../../../assets/image/pdf-logo.png")} />
                        <img src={require("../../../assets/image/x-logo.png")} />
                        <img src={require("../../../assets/image/print-logo.png")} />
                    </div>
                </div>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <h5>ID</h5>
                                </th>
                                <th>
                                    <h5>NAME</h5>
                                </th>
                                <th>
                                    <h5>ADDRESS</h5>
                                </th>
                                <th>
                                    <h5>DATE</h5>
                                </th>
                                <th>
                                    <h5>TYPE</h5>
                                </th>
                                <th>
                                    <h5>SWITCH</h5>
                                </th>
                                <th>
                                    <h5>&nbsp; &nbsp; &nbsp;STATUS</h5>
                                </th>
                                <th>
                                    <h5>ACTION</h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((i, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.address}</td>
                                            <td>{i.date}</td>
                                            <td>{i.type}</td>
                                            <td>{i.switch}</td>
                                            <td>{i.status}</td>
                                            <td>
                                                <div className={`menu-container ${activeDropdown === index ? "active" : ""}`}>
                                                    <div class="menu-button" onClick={() => toggleDropdown(index)}>
                                                        {" "}
                                                        ⋮{" "}
                                                    </div>
                                                    {activeDropdown === index && (
                                                        <div className="menu-content">
                                                            <p>
                                                                Edit
                                                            </p>
                                                            <p>
                                                                Delete
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="footer-text">
                    <p>Showing 1-09 of 78</p>
                    <span class="next-page-icon">
                        <i class="fa-solid fa-angle-left"></i>
                        <i class="fa-solid fa-angle-right"></i>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Course;
