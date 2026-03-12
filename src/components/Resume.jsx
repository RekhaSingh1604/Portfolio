import React from 'react'
import '../Style/Resume.css'
const Resume = () => {
  return (
   <section class="resume">

<h1 class="title">My Resume</h1>

<div class="resume-container">


<div class="card">

<h2>Education</h2>
<div class="line"></div>

<div class="item">
<h3>Bachelor's Degree</h3>
<h4>Glocal University</h4>
<p>Duration: 2022 - 2025</p>
<p>
Completed a Bachelor's degree in Web Development,
gaining strong knowledge in programming languages,
database and computer science concepts.
</p>
</div>

<div class="item">
<h3>Intermediate School</h3>
<h4>CBSE Board</h4>
<p>Duration: 2020 - 2021</p>
<p>Gained foundational knowledge in Science.</p>
</div>

<div class="item">
<h3>High School</h3>
<h4>CBSE Board</h4>
<p>Completed high school education.</p>
</div>

</div>



<div class="card">

<h2>Completed Projects</h2>
<div class="line"></div>

<div class="item">
<h3>Petrol Pump Management System</h3>
<h4>Teachnology Used:MERN</h4>
<p>
A web-based system designed to manage petrol pump operations such as fuel inventory, sales transactions, billing, and customer records. The system helps petrol pump owners efficiently track daily fuel sales and manage stock through an easy-to-use dashboard.
</p>
<div className='link_display'>
<a href='https://amarneerfuelstationfrontend.vercel.app/'>Live</a>
<a href='https://github.com/AeronDigitalSolutions/amarneerfuelstationfrontend'>Github </a>
</div>
</div>

<div class="item">
<h3>Facebook Lead Generation Campaign</h3>
<h4>Teachnology Used:MERN</h4>
<p>
A digital marketing campaign focused on generating high-quality leads through targeted Facebook advertisements. The campaign used audience targeting and optimized ad creatives to increase engagement and conversions.
</p>
<div className='link_display'>
<a href='https://amarneerfuelstationfrontend.vercel.app/'>Live</a>
<a href='https://github.com/AeronDigitalSolutions/amarneerfuelstationfrontend'>Github </a>
</div>
</div>

<div class="item">
<h3>UndercoverSocial Website</h3>
<h4>Teachnology Used:WordPress, HTML, CSS, Elementor, Theme and Plugins</h4>
<p>
Developed a branding-focused website for UndercoverSocial using WordPress, designed to showcase digital marketing and social media services. The project focused on creating a modern, responsive layout and strong brand presentation to improve user engagement and online visibility.
</p>
<div className='link_display'>
<a href='https://undercoversocials.in/'>Live</a>
</div>
</div>

</div>

</div>
</section>

  )
}

export default Resume
