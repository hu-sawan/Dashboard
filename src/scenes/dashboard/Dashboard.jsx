import React from "react";
import WelcomeImage from "../../assets/welcome.png";
import AvatarImage from "../../assets/avatar.webp";
import News_01Image from "../../assets/news-01.png";
import News_02Image from "../../assets/news-02.png";
import News_03Image from "../../assets/news-03.png";
import News_04Image from "../../assets/news-04.png";
import Team_01Image from "../../assets/team-01.png";
import Team_02Image from "../../assets/team-02.png";
import Team_03Image from "../../assets/team-03.png";
import Team_04Image from "../../assets/team-04.png";
import Team_05Image from "../../assets/team-05.png";
import ProjectImage from "../../assets/project.png";
import pdfImage from "../../assets/pdf.svg";
import dllImage from "../../assets/dll.svg";
import psdImage from "../../assets/psd.svg";
import epsImage from "../../assets/eps.svg";
import pngImage from "../../assets/png.svg";

export default function Dashboard() {
    return (
        <>
            <h1 className="page-title">Dashboard</h1>
            <div className="wrapper d-grid gap-20 mb-20">
                <WelcomeBox />
                <DraftBox />
                <TargetBox />
                <TicketBox />
                <NewsBox />
                <TasksBox />
                <SearchedItemsBox />
                <UploadsBox />
                <LatestProjectProgressBox />
                <ReminderBox />
                <LatestPostBox />
                <SocialMediaBox />
            </div>
            <Projects />
        </>
    );
}

const WelcomeBox = ({
    user = { name: "user", title: "unknown", projects: 0, earnings: 0 },
}) => {
    return (
        <div className="welcome-box hidden bg-white r-10 txt-c-mobile d-block-mobile">
            <div className="intro p-20 d-flex space-between bg-eee">
                <div>
                    <h2 className="m-0">Welcome</h2>
                    <p className="txt-grey mt-5">{user.name}</p>
                </div>
                <img
                    src={WelcomeImage}
                    alt="welcome"
                    className="d-none-mobile"
                />
            </div>
            <img src={AvatarImage} alt="avatar" className="avatar round" />
            <div className="body p-20 mt-20 bb-eee bt-eee mb-20 d-flex txt-c d-block-mobile">
                <div>
                    {user.name}
                    <span className="d-block txt-grey fs-14 mt-10">
                        {user.title}
                    </span>
                </div>
                <div>
                    {user.projects}
                    <span className="d-block txt-grey fs-14 mt-10">
                        Projects
                    </span>
                </div>
                <div>
                    {user.earnings + "$"}
                    <span className="d-block txt-grey fs-14 mt-10">
                        Earnings
                    </span>
                </div>
            </div>
            <a href="/profile" className="visit d-block fs-14 w-fit btn-shape">
                Profile
            </a>
        </div>
    );
};

const DraftBox = () => {
    return (
        <div className="draft-box bg-white p-20 r-10 d-block-mobile hidden">
            <h2 className="box-title-p">Quick Draft</h2>
            <p className="mt-0 mb-20 fs-15 txt-grey">
                Write a draft for your idea
            </p>
            <form action="">
                <input
                    className="d-block b-none w-100 p-10 bg-eee r-6 mb-20"
                    type="text"
                    placeholder="Title"
                />

                <textarea
                    className="d-block b-none w-100 p-10 bg-eee mb-20 r-6"
                    placeholder="Your thoughts"
                ></textarea>

                <input
                    className="save b-none d-block w-fit fs-14 btn-shape"
                    type="submit"
                    value="Save"
                />
            </form>
        </div>
    );
};

const TargetBox = () => {
    const TargetRow = ({ text, progress, value, color }) => {
        return (
            <div className={`target-row mb-20 flex-center ${color}`}>
                <div className="icon flex-center">
                    <i
                        className={`fa-solid fa-dollar-sign fa-lg txt-${color}`}
                    ></i>
                </div>
                <div className="details">
                    <span className="fs-14 txt-grey">{text}</span>
                    <span className="d-block mt-5 mb-10 fw-bold">
                        {text.toLowerCase() === "money" ? value + "$" : value}
                    </span>
                    <div className="progress relative">
                        <span
                            style={{ width: `${progress}%` }}
                            className={`bg-${color} ${color}`}
                        >
                            <span className={`bg-${color} txt-white r-6`}>
                                {progress + "%"}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="target-box hidden p-20 r-10 bg-white">
            <h2 className="box-title-p">Yearly Targets</h2>
            <p className="mt-0 mb-20 fs-15 txt-grey">Targets for the year</p>
            <TargetRow
                text={"Money"}
                progress={40}
                value={100}
                color={"blue"}
            />
            <TargetRow
                text={"Project"}
                progress={60}
                value={10}
                color={"orange"}
            />
            <TargetRow text={"Team"} progress={50} value={2} color={"green"} />
        </div>
    );
};

const TicketBox = () => {
    const Box = ({ text, value, icon = null }) => {
        return (
            <div className="box p-20 r-10 b-ccc fs-14">
                <i className="fa-regular fa-rectangle-list fa-2x mb-10 txt-orange"></i>
                <span className="d-block fs-25 fw-bold txt-black">{value}</span>
                <span className="d-block txt-grey">{text}</span>
            </div>
        );
    };
    return (
        <div className="ticket-box bg-white p-20 r-10 hidden">
            <h2 className="box-title-p">Tickets Statistics</h2>
            <p className="mt-0 mb-20 fs-15 txt-grey">
                Your saved data about support
            </p>
            <div className="d-flex flex-wrap gap-20 txt-c">
                <Box text={"Total"} value={2000} />
                <Box text={"Pending"} value={700} />
                <Box text={"Closed"} value={800} />
                <Box text={"Delete"} value={500} />
            </div>
        </div>
    );
};

const postsArray = [
    {
        title: "Create SASS Section",
        image: `${News_01Image}`,
        summary: "New SASS Examples & Tutorials",
        date: "2 days ago",
    },
    {
        title: "Changed The Design",
        image: `${News_02Image}`,
        summary: "A Brand New Website Design",
        date: "3 days ago",
    },
    {
        title: "Team Increased",
        image: `${News_03Image}`,
        summary: "1 Developer Joined The Team",
        date: "6 days ago",
    },
    {
        title: "Added Payment Gateway",
        image: `${News_04Image}`,
        summary: "Many New Payment Gateways Added",
        date: "1 week ago",
    },
];

const NewsBox = () => {
    return (
        <div className="news-box bg-white p-20 r-10 hidden txt-c-mobile">
            <h2 className="box-title">Latest News</h2>
            {postsArray.map((post) => {
                return (
                    <div
                        key={postsArray.indexOf(post)}
                        className="news-row d-flex align-c bb-eee"
                    >
                        <img
                            className="r-6"
                            src={post.image}
                            alt="rooms with chairs"
                        />
                        <div className="info">
                            <h3>{post.title}</h3>
                            <p className="m-0 fs-14 txt-grey">{post.summary}</p>
                        </div>
                        <div className="fs-14 bg-eee label">{post.date}</div>
                    </div>
                );
            })}
        </div>
    );
};

const tasksArray = [
    {
        title: "Record One New Video",
        description: "Record Python Create Exe Project",
        isDone: "",
    },
    {
        title: "Write Article",
        description: "Write Low Level vs High Level Languages",
        isDone: "",
    },
    {
        title: "Finish Project",
        description: "Publish Academy Programming Project",
        isDone: "",
    },
    {
        title: "Attend The Meeting",
        description:
            "Attend The Project Business Analysis MeetingWrite Low Level vs High Level Languages",
        isDone: "done",
    },
    {
        title: "Finish Lesson",
        description: "Finish Teaching Flex Box",
        isDone: "",
    },
];

const TasksBox = () => {
    return (
        <div className="task-box bg-white p-20 r-10 hidden">
            <h2 className="box-title">Latest Tasks</h2>
            {tasksArray.map((task) => {
                return (
                    <div className={`task-row flex-between ${task.isDone}`}>
                        <div className="info">
                            <h3 className="mt-0 fs-15 mb-5">{task.title}</h3>
                            <p className="txt-grey m-0">{task.description}</p>
                        </div>
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                );
            })}
        </div>
    );
};

const projectsArray = [
    {
        name: "University Project",
        date: "20 Jan 2023",
        client: "Software Course",
        price: 10,
        team: [`${Team_01Image}`, `${Team_02Image}`, `${Team_03Image}`],
        status: "Done",
    },
    {
        name: "University Project",
        date: "20 Jan 2023",
        client: "Software Course",
        price: 40,
        team: [
            `${Team_03Image}`,
            `${Team_02Image}`,
            `${Team_03Image}`,
            `${Team_01Image}`,
        ],
        status: "Canceled",
    },
    {
        name: "University Project",
        date: "20 Jan 2023",
        client: "X-Fasion",
        price: 90,
        team: [`${Team_02Image}`, `${Team_03Image}`, `${Team_01Image}`],
        status: "In Progress",
    },
    {
        name: "University Project",
        date: "20 Jan 2023",
        client: "Software Course",
        price: 100,
        team: [`${Team_04Image}`, `${Team_01Image}`, `${Team_05Image}`],
        status: "On Waiting List",
    },
];

const Projects = () => {
    return (
        <div className="projects bg-white p-20 r-10 m-20">
            <h2 className="box-title">Projects</h2>
            <div className="responsive-table">
                <table className="fs-15 w-100">
                    <thead>
                        <tr>
                            <td className="bg-eee fw-bold">Name</td>
                            <td className="bg-eee fw-bold">Finish Date</td>
                            <td className="bg-eee fw-bold">Client</td>
                            <td className="bg-eee fw-bold">Price</td>
                            <td className="bg-eee fw-bold">Team</td>
                            <td className="bg-eee fw-bold">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {projectsArray.map((project) => {
                            return (
                                <tr>
                                    <td>{project.name}</td>
                                    <td>{project.date}</td>
                                    <td>{project.client}</td>
                                    <td>{`${project.price}$ `}</td>
                                    <td>
                                        {project.team.map((img) => {
                                            return (
                                                <img
                                                    className="round"
                                                    src={img}
                                                    alt="Team member avatar"
                                                />
                                            );
                                        })}
                                    </td>
                                    <td>
                                        <span
                                            className={`${project.status
                                                .split(" ")
                                                .join(
                                                    "-"
                                                )} btn-padding txt-white r-6`}
                                        >
                                            {project.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const searchItemsArray = [
    {
        keyword: "Programming",
        count: 100,
    },
    {
        keyword: "JavaScript",
        count: 88,
    },
    {
        keyword: "Python",
        count: 60,
    },
    {
        keyword: "HTML",
        count: 40,
    },
    {
        keyword: "PHP",
        count: 10,
    },
];

const SearchedItemsBox = () => {
    return (
        <div className="searched-items-box bg-white p-20 r-10 hidden">
            <h2 className="box-title">Top Searched Items</h2>
            <div className="items-head d-flex space-between mb-10 txt-grey">
                <span>keyword</span>
                <span>Search count</span>
            </div>
            {searchItemsArray.map((item) => {
                return (
                    <div className="item d-flex space-between pt-15 pb-15">
                        <span>{item.keyword}</span>
                        <span className="btn-padding txt-black r-6 fs-14 bg-eee">
                            {item.count}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

const uploadsArray = [
    {
        name: "my-file",
        type: "pdf",
        owner: "Admin",
        size: "2mb",
        image: pdfImage,
    },
    {
        name: "my-file",
        type: "dll",
        owner: "Admin",
        size: "2mb",
        image: dllImage,
    },
    {
        name: "my-file",
        type: "psd",
        owner: "Admin",
        size: "2mb",
        image: psdImage,
    },
    {
        name: "my-file",
        type: "eps",
        owner: "Admin",
        size: "2mb",
        image: epsImage,
    },
    {
        name: "my-file",
        type: "png",
        owner: "Admin",
        size: "2mb",
        image: pngImage,
    },
];

const UploadsBox = () => {
    return (
        <div className="uploads-box bg-white p-20 r-10 hidden">
            <h2 className="box-title">Latest Uploads</h2>
            {uploadsArray.map((upload) => {
                return (
                    <div className="uploads-row flex-center pb-10 mb-10 bb-eee">
                        <img
                            className="mr-10"
                            src={`${upload.image}`}
                            alt="file"
                        />
                        <div className="info">
                            <span>{upload.name + "." + upload.type}</span>
                            <span className="d-block txt-grey fs-15">
                                {upload.owner}
                            </span>
                        </div>
                        <span className="btn-padding txt-black fs-14 r-6 bg-eee">
                            {upload.size}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

const LatestProjectProgressBox = () => {
    return (
        <div className="project-box bg-white p-20 r-10 hidden relative">
            <h2 className="box-title">Last Project Progress</h2>
            <ul className="m-0 relative">
                <li className="d-flex mt-25 align-c done">Got the project</li>
                <li className="d-flex mt-25 align-c done">
                    Started the project
                </li>
                <li className="d-flex mt-25 align-c current">
                    The project about to finish
                </li>
                <li className="d-flex mt-25 align-c">Test the project</li>
                <li className="d-flex mt-25 align-c">
                    Finish the project and get money
                </li>
            </ul>
            <img className="d-none-mobile" src={ProjectImage} alt="" />
        </div>
    );
};

const ReminderBox = () => {
    return (
        <div className="reminder-box bg-white p-20 r-10 hidden">
            <h2 className="box-title">Reminders</h2>
            <ul className="m-0">
                <li className="d-flex align-c mt-15">
                    <span className="mr-15 bg-blue d-block round key"></span>
                    <div className="pl-15 blue">
                        <p className="fs-14 fw-bold mt-0 mb-5">
                            Software course project
                        </p>
                        <span className="txt-grey fs-13">
                            18/01/2023 - 2:00pm
                        </span>
                    </div>
                </li>
                <li className="d-flex align-c mt-15">
                    <span className="mr-15 bg-orange d-block round key"></span>
                    <div className="pl-15 orange">
                        <p className="fs-14 fw-bold mt-0 mb-5">
                            Webinar with Microsoft team
                        </p>
                        <span className="txt-grey fs-13">
                            20/01/2023 - 1:00pm
                        </span>
                    </div>
                </li>
                <li className="d-flex align-c mt-15">
                    <span className="mr-15 bg-green d-block round key"></span>
                    <div className="pl-15 green">
                        <p className="fs-14 fw-bold mt-0 mb-5">
                            Weekly meeting with the team
                        </p>
                        <span className="txt-grey fs-13">
                            24/01/2023 - 9:00am
                        </span>
                    </div>
                </li>
                <li className="d-flex align-c mt-15">
                    <span className="mr-15 bg-red d-block round key"></span>
                    <div className="pl-15 red">
                        <p className="fs-14 fw-bold mt-0 mb-5">
                            Job interview at Google
                        </p>
                        <span className="txt-grey fs-13">
                            13/07/2025 - 12:00pm
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

const LatestPostBox = () => {
    return (
        <div className="latest-post bg-white p-20 r-10 hidden">
            <h2 className="box-title">Latest Post</h2>
            <div className="publisher d-flex align-c">
                <img className="round mr-15" src={AvatarImage} alt="avatar" />
                <div>
                    <span className="fs-14 fw-bold mb-5 d-block">S7S</span>
                    <span className="txt-grey fs-13">2 hours ago</span>
                </div>
            </div>
            <div className="content pt-20 pb-20 mb-20 mt-20 bb-eee bt-eee txt-c-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                nostrum quidem dignissimos aperiam corporis, enim deserunt
                molestiae eaque distinctio in velit!
            </div>
            <div className="flex-between">
                <div className="txt-grey">
                    <i className="fa-regular fa-heart"></i>
                    <span>200</span>
                </div>
                <div className="txt-grey">
                    <i className="fa-regular fa-comments"></i>
                    <span>30</span>
                </div>
            </div>
        </div>
    );
};

const socialMediaArray = [
    {
        platformName: "twitter",
        followersCount: "100",
        countDescription: "Followers",
        action: "Follow",
    },
    {
        platformName: "facebook",
        followersCount: "1.9k",
        countDescription: "Friends",
        action: "Add",
    },
    {
        platformName: "youtube",
        followersCount: "500",
        countDescription: "Subscribers",
        action: "Subscribe",
    },
    {
        platformName: "linkedin",
        followersCount: "40",
        countDescription: "Followers",
        action: "Connect",
    },
];

const SocialMediaBox = () => {
    return (
        <div className="social-media bg-white p-20 r-10 hidden">
            <h2 className="box-title">Social Media Stats</h2>
            {socialMediaArray.map((item) => {
                return (
                    <div
                        className={`p-15 relative flex-between ${item.platformName} box mb-10`}
                    >
                        <i className="h-100 txt-white flex-center absolute"></i>
                        <span>
                            {item.followersCount + " " + item.countDescription}
                        </span>
                        <a
                            className="btn-padding txt-white fs-13 r-6"
                            href="/dashboard"
                        >
                            {item.action}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};
