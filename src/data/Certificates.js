import cisco from '../assets/cisco.jpg';
import next from '../assets/nextGen.jpg'
import py from '../assets/Python.jpg'
import cer from '../assets/certi.jpg'
import lin from '../assets/linux.jpg'

const certificateData = [
    {
        id: 1,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "2024",
        credentialUrl: "",
        image: cisco,
    },

    {
        id: 2,
        title: "Linux for Beginners",
        issuer: "Infosys Springboard",
        date: "2025",
        credentialUrl: "https://verify.onwingspan.com",
        image: lin,
    },

    {
        id: 3,
        title: "Introduction to Python",
        issuer: "Infosys Springboard",
        date: "2025",
        credentialUrl: "https://verify.onwingspan.com",
        image: py,
    },

    {
        id: 4,
        title: "Next Gen Technologies",
        issuer: "Infosys Springboard",
        date: "2026",
        credentialUrl: "https://verify.onwingspan.com",
        image: next,
    },

    {
        id: 5,
        title: "Common Internship Test",
        issuer: "Internship Studio",
        date: "2024",
        credentialUrl: "",
        image: cer,
    },
];

export default certificateData;