import mavenSiliconLogo from "../assets/maven-silicon-logo.jpg";
import courseraLogo from "../assets/coursera-logo.png";
import guviLogo from "../assets/hcl-guvi-logo.webp";
import networkEssentialsCertificate from "../assets/network-essentials-certificate.jpg";

export const portfolioData = {
  name: "Mathiyarasu Arumugam"
};

export const projectCategories = [
  {
    category: "Full Stack Projects",
    projects: [
      {
        title: "Student Management System",
        description: "Built a Java and MySQL student records app with CRUD workflows, normalized data, and form validation.",
        tech: ["Java", "MySQL", "HTML/CSS"],
        details: {
          objectives: [
            "Design an efficient student record management system",
            "Automate data entry and retrieval processes",
            "Reduce manual errors in record keeping",
            "Provide secure access to student information"
          ],
          features: [
            "Student Registration & Profile Management",
            "Academic Records Tracking",
            "Search & Filter Functionality",
            "Secure Authentication System",
            "Report Generation"
          ],
          technologies: [
            { label: "Backend", items: ["Java", "JDBC"] },
            { label: "Database", items: ["MySQL"] },
            { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] }
          ],
          implementationHighlights: [
            "Implemented CRUD operations for student records",
            "Designed normalized database schema",
            "Created responsive user interface",
            "Integrated form validation and error handling"
          ],
          outcome: "Successfully developed a functional student management system that streamlines administrative tasks and improves data accuracy."
        },
        liveLink: "https://student-management-system-eight-lake.vercel.app/",
        githubLink: "https://github.com/Mathidevdevil/Student-Management-System"
      },
      {
        title: "Online Shopping Website",
        description: "Built a responsive React shop with a searchable catalog, product pages, and shopping-cart management.",
        tech: ["React", "HTML/CSS", "JavaScript"],
        details: {
          objectives: [
            "Build a modern e-commerce platform",
            "Implement responsive design for all devices",
            "Create intuitive user experience",
            "Develop efficient cart management system"
          ],
          features: [
            "Product Catalog with Search & Filters",
            "Shopping Cart Management",
            "Responsive Design",
            "Product Detail Pages",
            "User-friendly Navigation"
          ],
          technologies: [
            { label: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"] },
            { label: "State Management", items: ["React Hooks"] },
            { label: "Styling", items: ["CSS3", "Responsive Design"] }
          ],
          implementationHighlights: [
            "Developed reusable React components",
            "Implemented state management for cart functionality",
            "Created responsive layouts for mobile and desktop",
            "Optimized performance with React best practices"
          ],
          outcome: "Delivered a fully functional e-commerce website with smooth user experience and modern design aesthetics."
        },
        liveLink: "https://online-shopping-mu-six.vercel.app/",
        githubLink: "https://github.com/Mathidevdevil/online-shopping-"
      }
    ]
  },
  {
    category: "Machine Learning Projects",
    projects: [
      {
        title: "Student Performance Prediction",
        description: "Predicts student performance from historical data using preprocessing, feature engineering, and model comparison.",
        tech: ["Python", "Pandas", "Scikit-learn"],
        details: {
          objectives: [
            "Predict student academic performance accurately",
            "Identify key factors affecting student success",
            "Implement data preprocessing pipeline",
            "Compare multiple ML algorithms for best results"
          ],
          features: [
            "Data Preprocessing & Cleaning",
            "Feature Engineering",
            "Multiple ML Model Training",
            "Model Evaluation & Comparison",
            "Performance Visualization"
          ],
          technologies: [
            { label: "Language", items: ["Python"] },
            { label: "Libraries", items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"] },
            { label: "Algorithms", items: ["Linear Regression", "Decision Trees", "Random Forest"] }
          ],
          implementationHighlights: [
            "Performed comprehensive data analysis and visualization",
            "Engineered relevant features from raw data",
            "Trained and evaluated multiple ML models",
            "Achieved high prediction accuracy",
            "Generated insights on performance factors"
          ],
          outcome: "Successfully built a predictive model that helps identify at-risk students and understand key performance indicators in academic success."
        },
        githubLink: "https://github.com/Mathidevdevil/Student-management-system-"
      },
      {
        title: "1-Bit MIMO Precoding in DACs using Deep Learning",
        description: "Deep learning-based precoding framework for massive MIMO systems with 1-bit DACs, targeting low-cost and energy-efficient communication. Final year B.E. ECE project.",
        tech: ["Python", "PyTorch", "CNN"],
        details: {
          objectives: [
            "Design a deep learning-based precoding framework for massive MIMO systems",
            "Optimize communication with 1-bit DACs for low-cost implementation",
            "Reduce interference and overcome hardware constraints",
            "Achieve energy-efficient wireless communication"
          ],
          features: [
            "Residual Neural Network Architecture",
            "CSI to Precoding Vector Mapping",
            "Interference Reduction Algorithms",
            "Hardware Constraint Optimization",
            "Energy-Efficient Communication Design"
          ],
          technologies: [
            { label: "Language", items: ["Python"] },
            { label: "Framework", items: ["PyTorch"] },
            { label: "Techniques", items: ["Convolutional Neural Networks (CNN)", "Deep Learning", "Residual Networks"] },
            { label: "Libraries", items: ["SciPy", "NumPy", "Matplotlib"] }
          ],
          implementationHighlights: [
            "Designed residual neural network to map CSI to optimized precoding vectors",
            "Implemented deep learning framework for massive MIMO systems",
            "Addressed hardware constraints of 1-bit DACs",
            "Reduced interference in multi-user communication scenarios",
            "Achieved significant performance improvement over conventional methods"
          ],
          outcome: "Successfully developed a deep learning-based precoding solution that enables low-cost, energy-efficient massive MIMO communication systems while maintaining high performance despite 1-bit DAC hardware constraints. This B.E. ECE final year project demonstrated the practical application of deep learning in wireless communication systems."
        },
        githubLink: "https://github.com/Mathidevdevil/1-Bit-MIMO-Precoding-in-DACs-using-Deep-Learning"
      }
    ]
  },
  {
    category: "IoT Projects",
    projects: [
      {
        title: "Smart Lock System",
        description: "Built an ESP32-CAM smart lock with remote control, live monitoring, and camera-based access features.",
        tech: ["ESP32-CAM", "Embedded C", "Blynk IoT"],
        details: {
          objectives: [
            "Design a secure IoT-enabled smart lock system",
            "Enable remote lock control via mobile application",
            "Enhance security using camera monitoring and notifications",
            "Provide real-time status updates and activity logs"
          ],
          features: [
            "Remote Lock & Unlock Control",
            "Live Camera Monitoring",
            "Mobile App Control using Blynk",
            "Instant Notifications for Door Activity",
            "Activity Logs for Access Tracking",
            "Wi-Fi Enabled IoT Communication"
          ],
          hardwareComponents: [
            "ESP32-CAM Microcontroller",
            "Camera Module (OV2640)",
            "Motorized Locking Mechanism",
            "TIP122 Darlington Transistor",
            "FTDI USB-to-Serial Interface",
            "Power Supply & Connecting Components"
          ],
          technologies: [
            { label: "Embedded", items: ["Embedded C", "Arduino"] },
            { label: "Firmware", items: ["ESP32-CAM Firmware"] },
            { label: "Platform", items: ["Blynk IoT Platform"] },
            { label: "Communication", items: ["Wi-Fi", "MQTT"] },
            { label: "Mobile", items: ["Blynk Mobile App"] }
          ],
          securityMeasures: [
            "Encrypted communication between device and mobile app",
            "Camera-based authentication for access monitoring",
            "Secure Wi-Fi connectivity (WPA/WPA2)",
            "Controlled access via authenticated mobile application"
          ],
          implementationHighlights: [
            "Programmed ESP32-CAM to handle camera capture, Wi-Fi communication, and lock control",
            "Integrated motor driver circuit using TIP122 transistor",
            "Implemented real-time notifications and lock status updates via Blynk",
            "Successfully tested remote access and alert mechanisms"
          ],
          futureEnhancements: [
            "Biometric authentication (Fingerprint / Face Recognition)",
            "AI-based access prediction",
            "Blockchain-based tamper-proof access logs",
            "Integration with smart home ecosystems"
          ],
          outcome: "The project successfully demonstrated an IoT-based smart security system that improves convenience, safety, and real-time monitoring. It provided hands-on experience in embedded systems, IoT communication, and hardware-software integration."
        },
        githubLink: "https://github.com/Mathidevdevil/Smart-lock-system"
      }
    ]
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "code",
    skills: ["React.js", "HTML5/CSS3", "JavaScript", "TailwindCSS"]
  },
  {
    title: "Backend & Database",
    icon: "database",
    skills: ["Java", "Spring Boot", "Python", "MySQL", "MongoDB"]
  },
  {
    title: "Tools & Automation",
    icon: "tools",
    skills: ["VS Code", "Eclipse", "Git", "Jupyter Notebook", "n8n Basics"]
  },
  {
    title: "EDA Tools",
    icon: "cpu",
    skills: ["LTspice", "Virtuoso", "Multisim", "Xilinx Vivado", "OrCAD X", "Electric Binary"]
  },
  {
    title: "Operating Systems",
    icon: "monitor",
    skills: ["Windows", "Linux"]
  }
];

export const siliconSkills = [
  { name: "SystemVerilog/UVM", icon: "cpu" },
  { name: "Verilog", icon: "cpu" },
  { name: "STA Concepts", icon: "cpu" },
  { name: "C/C++", icon: "code" },
  { name: "Digital Electronics", icon: "cpu" }
];

export const certificates = [
  {
    name: "Crash Course on Python",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/H6D8ZLTH7BPS",
    image: courseraLogo
  },
  {
    name: "Network Essential",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1Dgtcf-9z4UcIyXHlXAu4QvTGKmPpfhzR/view",
    image: networkEssentialsCertificate
  },
  {
    name: "HTML/CSS",
    issuer: "GUVI",
    link: "https://www.guvi.in/share-certificate/38C211D824XA1Mg7i0",
    image: guviLogo
  },
  {
    name: "JavaScript",
    issuer: "GUVI",
    link: "https://www.guvi.in/share-certificate/XJ27p611O679K044q8",
    image: guviLogo
  },
  {
    name: "Git",
    issuer: "GUVI",
    link: "https://www.guvi.in/share-certificate/4694i412B271F2pS71",
    image: guviLogo
  },
  {
    name: "VLSI System On Chip Design",
    issuer: "Maven Silicon",
    link: "https://drive.google.com/file/d/1I5tPlE3dfYTmyyjvSj7FfqS0GrFcfOhZ/view?usp=sharing",
    image: mavenSiliconLogo
  }
];

export const contactContent = {
  heading: "Let's connect.",
  description: "Reach out by phone, email, GitHub, or LinkedIn."
};

export const contactDetails = [
  { label: "Mobile", value: "+91 9159018280", href: "tel:+919159018280", icon: "phone" },
  { label: "Alternative mobile", value: "+91 9363250852", href: "tel:+919363250852", icon: "phone" },
  { label: "Email", value: "mathiayarasuarumugamk@gmail.com", href: "mailto:mathiayarasuarumugamk@gmail.com", icon: "email" },
  { label: "Alternative email", value: "mathiyarasu2920011@outlook.com", href: "mailto:mathiyarasu2920011@outlook.com", icon: "email" },
  { label: "GitHub", href: "https://github.com/Mathidevdevil", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mathiyarasu2001", icon: "linkedin" }
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mathiyarasu2001",
    icon: "linkedin"
  },
  {
    label: "GitHub",
    href: "https://github.com/Mathidevdevil",
    icon: "github"
  },
  {
    label: "Email",
    href: "mailto:mathiayarasuarumugamk@gmail.com",
    icon: "email"
  }
];

export const portfolioContent = {
  heroLabel: "SOFTWARE & VLSI VERIFICATION ENGINEER",
  heroTagline: "Engineering the future, from silicon to software.",
  navigationLinks: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Learning", id: "learning" },
    { label: "Skills", id: "skills" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" }
  ],
  projectFilters: ["All", "Full Stack", "ML", "IoT"],
  projectActions: {
    viewDetails: "View Details",
    liveDemo: "Live Demo",
    github: "GitHub",
    detailsHeading: "Project Details",
    technologyLabel: "Technologies"
  },
  heroActions: [
    { label: "View Projects", href: "#projects", icon: "projects" },
    { label: "View Resume", href: "https://mathi-resume.vercel.app/", icon: "resume" },
    { label: "Get in touch", href: "#contact", icon: "contact" }
  ],
  certificateLinkLabel: "View Certificate",
  sectionTitles: {
    about: "About Me.",
    experience: "Experience.",
    projects: "Selected Projects.",
    learning: "Currently Learning.",
    skills: "Core Competencies.",
    certifications: "Certifications."
  },
  about: {
    description: "Electronics and Communication Engineering Graduate (B.E. & Diploma with Distinction) with strong software development skills and a solid academic grounding in electronics. Proficient in C++, Python, and full-stack development, with practical experience building circuit simulation programs and test automation scripts. Possesses foundational knowledge of digital electronics, core VLSI concepts, and benchtop hardware testing, with a keen interest in applying software engineering to semiconductor workflows and electronic design tools.",
    highlights: [
      {
        label: "Software",
        details: "C++, Python, full-stack development, circuit simulation, and test automation."
      },
      {
        label: "Electronics",
        details: "Academic foundation in digital electronics, core VLSI concepts, and benchtop hardware testing."
      },
      {
        label: "Direction",
        details: "Applying software engineering to semiconductor workflows and electronic design tools."
      }
    ],
    education: [
      {
        title: "B.E. ECE",
        institution: "Government College of Engineering, Erode",
        university: "Anna University - Chennai",
        period: "Aug 2022 – May 2025"
      },
      {
        title: "Diploma in ECE",
        institution: "The Kavery Polytechnic College, Salem",
        result: "87%"
      },
      {
        title: "High School",
        institution: "Government High School, Karattupudur, Salem"
      }
    ]
  },
  experience: [
    {
      role: "Full Stack Java Development Trainee",
      company: "Besant Technologies",
      location: "Bangalore",
      date: "Feb 2025 – July 2025",
      description: "Core Java, Spring Boot, React, Database Management, scalable web apps."
    },
    {
      role: "Machine Learning Trainee",
      company: "TVS Training and Services Limited",
      location: "Chennai",
      date: "June 2024 – July 2024",
      description: "supervised learning, data preprocessing with Python, Pandas, scikit-learn, model evaluation on real-world datasets"
    }
  ],
  footer: "© 2026 Mathiyarasu Arumugam. All rights reserved."
};
