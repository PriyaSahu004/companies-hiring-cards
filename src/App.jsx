import { useState } from 'react'
import './App.css'
import { RiBookmarkLine } from '@remixicon/react';
import Card from './components/card';

function App() {
 const companiesData = [
  {
    id: 1,
    src: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg",
    name: "Amazon",
    time: 5,
    job: "Front-end developer",
    tag1: "Remote",
    tag2: "Contract",
    amount: "$100",
    city: "Delhi, India"
  },
  {
    id: 2,
    src: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
    name: "Google",
    time: 3,
    job: "UI/UX Designer",
    tag1: "On-site",
    tag2: "Full-time",
    amount: "$120",
    city: "Bangalore, India"
  },
  {
    id: 3,
    src: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
    name: "Microsoft",
    time: 1,
    job: "Full-stack Engineering",
    tag1: "Hybrid",
    tag2: "Full-time",
    amount: "$150",
    city: "Hyderabad, India"
  },
  {
    id: 4,
    src: "https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg",
    name: "Netflix",
    time: 4,
    job: "React Specialist",
    tag1: "Remote",
    tag2: "Contract",
    amount: "$110",
    city: "Mumbai, India"
  },
  {
    id: 5,
    src: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg",
    name: "Apple",
    time: 2,
    job: "iOS Development",
    tag1: "On-site",
    tag2: "Full-time",
    amount: "$160",
    city: "Chennai, India"
  },
  {
    id: 6,
    src: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
    name: "Meta",
    time: 7,
    job: "Product Design",
    tag1: "Remote",
    tag2: "Full-time",
    amount: "$95",
    city: "Pune, India"
  },
  {
    id: 7,
    src: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    name: "Github",
    time: 6,
    job: "Backend development",
    tag1: "Hybrid",
    tag2: "Contract",
    amount: "$85",
    city: "Gurugram, India"
  },
  {
    id: 8,
    src: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg",
    name: "Spotify",
    time: 12,
    job: "Mobile App Architect",
    tag1: "Remote",
    tag2: "Full-time",
    amount: "$130",
    city: "Kolkata, India"
  },
  {
    id: 9,
    src: "https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg",
    name: "Adobe",
    time: 9,
    job: "Graphics development",
    tag1: "On-site",
    tag2: "Internship",
    amount: "$105",
    city: "Noida, India"
  },
  {
    id: 10,
    src: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg",
    name: "Airbnb",
    time: 2,
    job: "DevOps Engineering",
    tag1: "Remote",
    tag2: "Full-time",
    amount: "$115",
    city: "Ahmedabad, India"
  }
];
  return (
    <div className="parent">
      {
        companiesData.map((company) =>(
          <Card 
            src={company.src}
            name={company.name} 
            time={company.time}
            job={company.job}
            tag1={company.tag1}
            tag2={company.tag2}
            amount={company.amount}
            place={company.city}
          />
        ))
      }
    </div>
   
  )
}

export default App
