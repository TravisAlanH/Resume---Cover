let data = {
  "Name": "Travis Heidelberger",
  "HomeQuote": "Web Developer, Data Structures, Agile Methodologies",
  "Email": "Travis.H.Dev@gmail.com",
  "Links": [
    {
      "Name": "About",
      "URL": "/about",
    },
    {
      "Name": "Projects",
      "URL": "/projects",
    },
    {
      "Name": "Contact",
      "URL": "/contact",
    },
  ],
  "Contact": [
    { "Type": "Email", "Data": "Travis.H.Dev@gmail.com" },
    { "Type": "Phone", "Data": "757-403-2228" },
    { "Type": "Portfolio", "Data": "www.TravisH.Dev" },
    { "Type": "LinkedIn", "Data": "www.linkedin.com/in/TravisHDev" },
    { "Type": "GitHub", "Data": "www.github.com/TravisAlanH" },
  ],
  "Link": {
    "LinkedIn": "//www.linkedin.com/in/TravisHDev",
    "GitHub": "https://github.com/TravisAlanH",
  },
  "ExternalLinks": [
    {
      "Name": "Linked In",
      "Url": "//www.linkedin.com/in/TravisHDev",
    },
    {
      "Name": "Git Hub",
      "Url": "https://github.com/TravisAlanH",
    },
    {
      "Name": "resume",
      "Url": "https://indd.adobe.com/view/a02a1e3e-d989-459d-9ae4-7c4e97f834c1",
    },
  ],
  "AboutText":
    "My Name is Travis Heidelberger. I am a front end web developer that understands the importance of well built data structures. For the past 14 years I was Active duty with the United States Navy as a Government Credit Card Holder and Logistics Specialist where I maintained the financial assets of my command. I have a passion for learning, and drive to create new, responsive, things for the web.",
  "AboutTextAlt": "I am a front end web developer that understands the importance of well built data structures. I have a passion for learning, and drive to create new, responsive, things for the web.",

  "HeaderLines": [
    {
      "Name": "About",
      "Link1": "Home",
      "Link1URL": "/home",
      "Link2": "Contact",
      "Link2URL": "/contact",
      "Link3": "Projects",
      "Link3URL": "/projects",
    },
  ],
  "Collage": [
    {
      "School": "Dakota State University, Madison SD",
      "Degree": "Computer Science (BS)",
      "GradYear": "Class 2022",
      "Data": ["Agile Methodologies", "Object Oriented Design", "Data Structures", "Software Security", "Algorithms and Optimization"],
    },
    {
      "School": "University of Charleston, Charleston WV",
      "Degree": "Business Admin (BA)",
      "GradYear": "Class 2019",
      "Data": ["Organizational Behavior", "Principles of Accounting", "Resource Management"],
    },
  ],
  "Work": [
    {
      "Place": "United States Navy, Location Varies",
      "Title": "Logistics and Financial Management",
      "Time": "2009 - 2023",
      "Data": [
        "Designed, Developed, and Deployed local Web App in support of streamline Department of Defense Audit requirements (User Stories)",
        "Quality assurance oversight throughout logistics process, from budget management to the receipt of Government Assets.",
        "Direct Oversight of Command Logistics Department planning, polices, and facilities elements. ",
      ],
    },
  ],
  "TalentName": "Team",
  "TalentSkills": ["Agile Development", "Object Oriented Design", "Data Structures", "Mentorship", "Financial Management"],
  "SkillsName": "Programing",
  "Skills": ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
  "ContactHeader": "Start the conversation here,",
  "ContactInput": [
    {
      "Label": "Name*",
      "Name": "name",
      "ID": "name",
      "Type": "text",
      "Required": "required",
      "HTMLFor": "Name",
    },
    {
      "Label": "Email*",
      "Name": "email",
      "ID": "email",
      "Type": "text",
      "Required": "required",
      "HTMLFor": "email",
    },
    {
      "Label": "Phone",
      "Name": "phone",
      "ID": "phone",
      "Type": "text",
      "Required": "",
      "HTMLFor": "phone",
    },
  ],
  "TextArea": (
    <div className="FormLine">
      <textarea type="text" className="FormInputTextArea ChangeLabel" name="comments" id="comments" rows={6}></textarea>
      <label htmlFor="Phone" className="FormLabel ">
        Comments
      </label>
    </div>
  ),
  "SubmitButton": {
    "SubmitText": "Submit",
    "Type": "submit",
  },
  "Projects": [
    {
      "Name": "Amazon Clone",
      "Description": "This is a clone of the Amazon website. It is built using React, HTML and CSS",
      "GitHubLink": "https://github.com/TravisAlanH/AmazonClone",
      "LiveLink": "https://stately-melba-346208.netlify.app",
    },
    {
      "Name": "U.S. Navy Logistics",
      "Description": "WORKING PROJECT : US Navy Logistics Specialist assistance page, Todo Calender, Document Creation, Personnel Management, Vender Management",
      "GitHubLink": "https://github.com/TravisAlanH/Navy-Page",
      "LiveLink": "https://main--luxury-conkies-c0db37.netlify.app",
    },
    {
      "Name": "Canvas Game",
      "Description": "W,A,S,D to move, Mouse Down to Shoot, Space for Bomb",
      "GitHubLink": "https://github.com/TravisAlanH/CanvasGame",
      "LiveLink": "https://main--animated-florentine-0b348b.netlify.app",
    },
  ],
};

export default data;
