import React from 'react'
import Card from './components/Card'
const App = () => {
const jobs = [
  {
    img: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    brandName: "Amazon",
    dayAgo: 3,
    designation: "Senior UI/UX Designer",
    employmentType: "Part Time",
    employmentLevel: "Senior Level",
    payment: 120,
    location: "Mumbai, India"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    brandName: "Google",
    dayAgo: 4,
    designation: "Backend Developer",
    employmentType: "Full Time",
    employmentLevel: "Senior Level",
    payment: 150,
    location: "Indore, India"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    brandName: "Microsoft",
    dayAgo: 1,
    designation: "Frontend Developer",
    employmentType: "Full Time",
    employmentLevel: "Mid Level",
    payment: 110,
    location: "Bangalore, India"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    brandName: "Meta",
    dayAgo: 2,
    designation: "React Developer",
    employmentType: "Remote",
    employmentLevel: "Mid Level",
    payment: 130,
    location: "Remote"
  },
  {
    img: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    brandName: "Apple",
    dayAgo: 5,
    designation: "iOS Developer",
    employmentType: "Full Time",
    employmentLevel: "Senior Level",
    payment: 180,
    location: "Hyderabad, India"
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    brandName: "Netflix",
    dayAgo: 6,
    designation: "Full Stack Engineer",
    employmentType: "Remote",
    employmentLevel: "Senior Level",
    payment: 200,
    location: "Remote"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTmVc7unwsynm3Ofz31vehWOoGK4FMpkPtw&s",
    brandName: "Adobe",
    dayAgo: 2,
    designation: "UI Engineer",
    employmentType: "Contract",
    employmentLevel: "Mid Level",
    payment: 95,
    location: "Pune, India"
  },
  {
    img: "data:image/png;base64,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",
    brandName: "Tesla",
    dayAgo: 7,
    designation: "Software Engineer",
    employmentType: "Full Time",
    employmentLevel: "Entry Level",
    payment: 100,
    location: "Delhi, India"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    brandName: "Spotify",
    dayAgo: 3,
    designation: "Web Developer",
    employmentType: "Remote",
    employmentLevel: "Mid Level",
    payment: 115,
    location: "Remote"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoU4xXyUBeOQbhMK6ZvlIGAsOmk-GaCMPM9Q&s",
    brandName: "Uber",
    dayAgo: 1,
    designation: "Mobile App Developer",
    employmentType: "Full Time",
    employmentLevel: "Mid Level",
    payment: 125,
    location: "Chennai, India"
  }
];

  return (
    <div className='parent'>
    {jobs.map((job,index)=>(
      <Card key = {index} {...job}/>
    ))}
    </div>
  )
}

export default App
