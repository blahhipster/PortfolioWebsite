import React from 'react';
// import './ExperienceSection.css'; // Assuming the CSS is in this file

const ExperienceSection = () => {
  return (
    <div className="experience-section">
        <div className="experience-content left">
            <div>
                <h3>Amazon</h3>
                <p>Campaign Management and Optimization <br />of Campaigns across EU5, NA and JP Locales <br /> <br />  Setting up the new campaigns for Amazon<br /> Platforms and other
                Network partner websites <br /> <br />Analyzed & Implemented changes requested <br />for the optimization</p>
            </div>
            <div>
                <h3>HGS Digital</h3>
                <p>Consulting on
                business best practices on both marketing <br />strategies and platform.</p>
            </div>
            <div>
                <h3>Tharkaree</h3>
                <p>Worked extensively on keyword research,<br />guest blogging, meta tagging, meta descriptions |<br />Created and Maintained Sitemap & Robots files.</p>
            </div>
            <div>
                <h3>Unido Labs</h3>
                <p>Overseeing and managing paid media campaigns<br /> on Facebook, Instagram, Twitter |<br />Client management | Setting up ads on Sprinklr</p>
            </div>
        </div>

        <div className="timeline-bar"></div>

        <div className="experience-content right">
            <div>
                <h3>Jan 2022</h3>
                <p>July 2024</p>
            </div>
            <div className='second'>
                <h3>March, 2021</h3>
                <p>June, 2021</p>
            </div>
            <div className='third'>
                <h3>Feb, 2020</h3>
                <p>Jan, 2021</p>
            </div>
            <div className='fourth'>
                <h3>Sep, 2018</h3>
                <p>Dec, 2019</p>
            </div>
        </div>
    </div>
  );
};

export default ExperienceSection;
