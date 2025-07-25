import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Filter from './Filter.jsx';
import NotesList from './NotesList.jsx';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      subject: "Database Management Systems",
      description: "Comprehensive notes covering SQL, normalization, indexing, and database design principles. Includes practical examples and case studies.",
      course: "BSc-IT",
      semester: 1,
      fileName: "DBMS.pdf",
      filePath: "uploads/dbms.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 2,
      subject: "Financial Accounting",
      description: "Detailed study material on accounting principles, journal entries, ledger preparation, and financial statement analysis.",
      course: "BCA",
      semester: 3,
      fileName: "Financial Accounting.pdf",
      filePath: "uploads/accounting.pdf",
      downloads: 78,
      uploadDate: new Date("2025-02-10"),
    },
    {
      id: 3,
      subject: "Computer Numerical and Statistics",
      description: "This subject introduces numerical methods and statistical techniques for solving mathematical problems and analyzing data using computational tools.",
      course: "BSc-IT",
      semester: 2,
      fileName: "CNS.pdf",
      filePath: "uploads/CNS.pdf",
      downloads: 92,
      uploadDate: new Date("2025-01-28"),
    },
    {
      id: 4,
      subject: "Marketing Management",
      description: "Strategic marketing concepts, consumer behavior, market research, and digital marketing fundamentals.",
      course: "BBA",
      semester: 4,
      fileName: "Marketing_Management.pdf",
      filePath: "uploads/marketing.pdf",
      downloads: 34,
      uploadDate: new Date("2025-03-05"),
    },
    {
      id: 5,
      subject: "JAVA",
      description: "Java programming fundamentals, OOP concepts, inheritance, polymorphism, and exception handling with examples.",
      course: "BCA",
      semester: 3,
      fileName: "Java.pdf",
      filePath: "https://drive.google.com/drive/folders/14IKriLSLs7FuBcBwV3f_4JOMblW9reZm",
      downloads: 67,
      uploadDate: new Date("2025-02-20"),
    },
    {
      id: 6,
      subject: "Web Development",
      description: "HTML, CSS, JavaScript, and modern web frameworks. Includes responsive design and best practices.",
      course: "BSc-IT",
      semester: 3,
      fileName: "Web_Development.pdf",
      filePath: "https://drive.google.com/drive/folders/1cQoq3EzUbIb0vSmjlkWR_PefoosMCu3J?usp=drive_link",
      downloads: 156,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 7,
      subject: "Computer Architecture",
      description: "Computer architecture is the design and organization of a computer's core components, defining how hardware and software interact to execute tasks efficiently.",
      course: "BCA",
      semester: 1,
      fileName: "COA.pdf",
      filePath: "uploads/COA.pdf",
      downloads: 99,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 8,
      subject: "Operating System",
      description: "A foundational subject that explores the principles, design, and functionality of system software responsible for managing hardware, processes, memory, and user interaction.",
      course: "BCA",
      semester: 1,
      fileName: "OS.pdf",
      filePath: "https://drive.google.com/drive/folders/1_gp9t4l8QUtziv317azB3OAnpkmA1B6H",
      downloads: 92,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 9,
      subject: "English",
      description: " A subject focused on developing skills in reading, writing, speaking, and understanding the English language, enhancing communication and comprehension across various contexts.",
      course: "BCA",
      semester: 1,
      fileName: "Eng.pdf",
      filePath: "uploads/Eng.pdf",
      downloads: 90,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 10,
      subject: "C Programming",
      description: "A foundational subject that teaches the principles of programming using the C language, focusing on problem-solving, algorithm development, and efficient code implementation.",
      course: "BCA",
      semester: 1,
      fileName: "C Programming.pdf",
      filePath: "https://drive.google.com/drive/folders/1e34rEpIdrcTKmIMdrUxC7zXCRFo2SZq1",
      downloads: 90,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 11,
      subject: "English",
      description: " A subject focused on developing skills in reading, writing, speaking, and understanding the English language, enhancing communication and comprehension across various contexts.",
      course: "BSc-IT",
      semester: 1,
      fileName: "Eng.pdf",
      filePath: "uploads/Eng.pdf",
      downloads: 90,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 12,
      subject: "C Programming",
      description: "A foundational subject that teaches the principles of programming using the C language, focusing on problem-solving, algorithm development, and efficient code implementation.",
      course: "BSc-IT",
      semester: 1,
      fileName: "C Programming.pdf",
      filePath: "https://drive.google.com/drive/folders/1e34rEpIdrcTKmIMdrUxC7zXCRFo2SZq1",
      downloads: 90,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 13,
      subject: "Computer Architecture",
      description: "Computer architecture is the design and organization of a computer's core components, defining how hardware and software interact to execute tasks efficiently.",
      course: "BSc-IT",
      semester: 1,
      fileName: "COA.pdf",
      filePath: "uploads/COA.pdf",
      downloads: 99,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 14,
      subject: "Database Management Systems",
      description: "Comprehensive notes covering SQL, normalization, indexing, and database design principles. Includes practical examples and case studies.",
      course: "BCA",
      semester: 2,
      fileName: "DBMS.pdf",
      filePath: "uploads/dbms.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 15,
      subject: "Discrete Mathematics",
      description: "Discrete Mathematics is the study of mathematical structures that are fundamentally countable or distinct, such as logic, sets, graphs, and algorithms.",
      course: "BCA",
      semester: 2,
      fileName: "discMath.pdf",
      filePath: "uploads/discMath.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 16,
      subject: "C++ Programming",
      description: "C++ Programming introduces the fundamentals of structured and object-oriented programming for efficient software development.",
      course: "BCA",
      semester: 2,
      fileName: "Cpp.pdf",
      filePath: "https://drive.google.com/drive/folders/1_Zubg0aFLGJ1DN3t1ZHzgh1Te7RjLV6j?usp=drive_link",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 17,
      subject: "English Communication",
      description: "English Communication focuses on developing speaking, listening, reading, and writing skills for effective personal and professional interaction.",
      course: "BCA",
      semester: 2,
      fileName: "eng2.pdf",
      filePath: "uploads/eng2.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 18,
      subject: "C++ Programming",
      description: "C++ Programming introduces the fundamentals of structured and object-oriented programming for efficient software development.",
      course: "BSc-IT",
      semester: 2,
      fileName: "Cpp.pdf",
      filePath: "https://drive.google.com/drive/folders/1_Zubg0aFLGJ1DN3t1ZHzgh1Te7RjLV6j?usp=drive_link",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 19,
      subject: "English Communication",
      description: "English Communication focuses on developing speaking, listening, reading, and writing skills for effective personal and professional interaction.",
      course: "BSc-IT",
      semester: 2,
      fileName: "eng2.pdf",
      filePath: "uploads/eng2.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 20,
      subject: "Computer Architecture",
      description: "Computer architecture is the design and organization of a computer's core components, defining how hardware and software interact to execute tasks efficiently.",
      course: "BSc-IT",
      semester: 3,
      fileName: "COA2.pdf",
      filePath: "uploads/COA2.pdf",
      downloads: 99,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 21,
      subject: "Web Development",
      description: "HTML, CSS, JavaScript, and modern web frameworks. Includes responsive design and best practices.",
      course: "BCA",
      semester: 3,
      fileName: "Web_Development.pdf",
      filePath: "https://drive.google.com/drive/folders/1cQoq3EzUbIb0vSmjlkWR_PefoosMCu3J?usp=drive_link",
      downloads: 156,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 22,
      subject: "Digital Electronics",
      description: "Digital Electronics focuses on the principles and applications of digital circuits, including logic gates, combinational and sequential systems, and microprocessors.",
      course: "BSc-IT",
      semester: 2,
      fileName: "DigitalElectronics.pdf",
      filePath: "uploads/DE.pdf",
      downloads: 99,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 23,
      subject: "JAVA",
      description: "Java programming fundamentals, OOP concepts, inheritance, polymorphism, and exception handling with examples.",
      course: "BSc-IT",
      semester: 3,
      fileName: "Java.pdf",
      filePath: "https://drive.google.com/drive/folders/14IKriLSLs7FuBcBwV3f_4JOMblW9reZm",
      downloads: 67,
      uploadDate: new Date("2025-02-20"),
    },
    {
      id: 24,
      subject: "Computer Networking",
      description: "Computer Networking covers the principles, protocols, and technologies used to connect and communicate between computer systems.",
      course: "BCA",
      semester: 3,
      fileName: "Computer Networking.pdf",
      filePath: "https://drive.google.com/drive/folders/1xxuxHl3Bi3xSy-UITinMaAJk0JOnovRR",
      downloads: 67,
      uploadDate: new Date("2025-02-20"),
    },
    {
      id: 25,
      subject: "Discrete Mathematics",
      description: "Discrete Mathematics is the study of mathematical structures that are fundamentally countable or distinct, such as logic, sets, graphs, and algorithms.",
      course: "BSc-IT",
      semester: 3,
      fileName: "discMath.pdf",
      filePath: "uploads/discMath.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    //sem 4
    {
      id: 26,
      subject: "Computer-Based Statistics",
      description: "The application of statistical methods using computer software to analyze, interpret, and visualize data efficiently.",
      course: "BCA",
      semester: 4,
      fileName: "stats.pdf",
      filePath: "uploads/stats.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 27,
      subject: "Visual Programming",
      description: "A programming method where users create programs by manipulating graphical elements rather than writing text code.",
      course: "BCA",
      semester: 4,
      fileName: "vb.pdf",
      filePath: "https://drive.google.com/drive/folders/1P4KZoXxj0UBnVFqGKmwfBQdp1MAA3cTM?usp=sharing",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 28,
      subject: "Visual Programming",
      description: "A programming method where users create programs by manipulating graphical elements rather than writing text code.",
      course: "BSc-IT",
      semester: 4,
      fileName: "vb.pdf",
      filePath: "https://drive.google.com/drive/folders/1P4KZoXxj0UBnVFqGKmwfBQdp1MAA3cTM?usp=sharing",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 29,
      subject: "Android Programming",
      description: "The process of creating mobile applications for devices running the Android operating system using languages like Java or Kotlin.",
      course: "BCA",
      semester: 4,
      fileName: "android.pdf",
      filePath: "https://drive.google.com/drive/folders/1FRIh90eMFKOAdQkiQCvpjn0Z54Z1Uir4?usp=sharing",
      downloads: 156,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 30,
      subject: "Android Programming",
      description: "The process of creating mobile applications for devices running the Android operating system using languages like Java or Kotlin.",
      course: "BSc-IT",
      semester: 4,
      fileName: "android.pdf",
      filePath: "https://drive.google.com/drive/folders/1FRIh90eMFKOAdQkiQCvpjn0Z54Z1Uir4?usp=sharing",
      downloads: 156,
      uploadDate: new Date("2025-03-12"),
    },
    {
      id: 31,
      subject: "Design and Analysis of Algorithms",
      description: "The study of designing efficient algorithms and analyzing their performance in terms of time and space complexity.",
      course: "BCA",
      semester: 4,
      fileName: "DAA.pdf",
      filePath: "uploads/daa.pdf",
      downloads: 67,
      uploadDate: new Date("2025-02-20"),
    },
    {
      id: 32,
      subject: "Computer-Based Statistics",
      description: "The application of statistical methods using computer software to analyze, interpret, and visualize data efficiently.",
      course: "BSc-IT",
      semester: 4,
      fileName: "stats.pdf",
      filePath: "uploads/stats.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 33,
      subject: "Operating System",
      description: "A foundational subject that explores the principles, design, and functionality of system software responsible for managing hardware, processes, memory, and user interaction.",
      course: "BSc-IT",
      semester: 4,
      fileName: "OS.pdf",
      filePath: "uploads/OS.pdf",
      downloads: 92,
      uploadDate: new Date("2025-03-12"),
    },
    //sem 5
    {
      id: 34,
      subject: "Internet of Things (IoT)",
      description: "A network of interconnected physical devices that collect and exchange data using embedded sensors and internet connectivity.",
      course: "BCA",
      semester: 5,
      fileName: "IOT.pdf",
      filePath: "uploads/iot.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 35 ,
      subject: "Internet of Things (IoT)",
      description: "A network of interconnected physical devices that collect and exchange data using embedded sensors and internet connectivity.",
      course: "BSc-IT",
      semester: 5,
      fileName: "IOT.pdf",
      filePath: "uploads/iot.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 36,
      subject: "Programming in Python",
      description: "Writing code using Python, a high-level, easy-to-read programming language known for its simplicity and wide range of applications.",
      course: "BSc-IT",
      semester: 5,
      fileName: "Python.pdf",
      filePath: "uploads/python.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 37,
      subject: "Programming in Python",
      description: "Writing code using Python, a high-level, easy-to-read programming language known for its simplicity and wide range of applications.",
      course: "BCA",
      semester: 5,
      fileName: "Python.pdf",
      filePath: "uploads/python.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 38,
      subject: "Artificial Intelligence (AI)",
      description: "The simulation of human intelligence in machines that can learn, reason, and make decisions.",
      course: "BSc-IT",
      semester: 5,
      fileName: "Artificial Intelligence.pdf",
      filePath: "uploads/AI.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 39,
      subject: "Artificial Intelligence (AI)",
      description: "The simulation of human intelligence in machines that can learn, reason, and make decisions.",
      course: "BCA",
      semester: 5,
      fileName: "Artificial Intelligence.pdf",
      filePath: "uploads/AI.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 40,
      subject: "Computer Graphics (CG)",
      description: "The field of creating, manipulating, and displaying visual content using computers, including images, animations, and 3D models.",
      course: "BCA",
      semester: 5,
      fileName: "Computer Graphics.pdf",
      filePath: "uploads/CG.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 41,
      subject: "Computer Graphics (CG)",
      description: "The field of creating, manipulating, and displaying visual content using computers, including images, animations, and 3D models.",
      course: "BSc-IT",
      semester: 5,
      fileName: "Computer Graphics.pdf",
      filePath: "uploads/CG.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 42,
      subject: "Research Methodology",
      description: "A systematic approach to conducting research, including the methods and techniques used to collect, analyze, and interpret data.",
      course: "BCA",
      semester: 6,
      fileName: "Research Methodology.pdf",
      filePath: "uploads/RM.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 43,
      subject: "Research Methodology",
      description: "A systematic approach to conducting research, including the methods and techniques used to collect, analyze, and interpret data.",
      course: "BSc-IT",
      semester: 6,
      fileName: "Research Methodology.pdf",
      filePath: "uploads/RM.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 44,
      subject: "Cyber Security",
      description: "The practice of protecting computers, networks, and data from unauthorized access, attacks, and damage.",
      course: "BCA",
      semester: 6,
      fileName: "Cyber Security.pdf",
      filePath: "uploads/CyberSec.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 45,
      subject: "Cyber Security",
      description: "The practice of protecting computers, networks, and data from unauthorized access, attacks, and damage.",
      course: "BSc-IT",
      semester: 6,
      fileName: "Cyber Security.pdf",
      filePath: "uploads/CyberSec.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    }, 
    {
      id: 46,
      subject: "Data Mining with R",
      description: "The process of discovering patterns and insights from large datasets using statistical and machine learning techniques in the R programming language.",
      course: "BCA",
      semester: 6,
      fileName: "Data Mining with R.pdf",
      filePath: "uploads/DataMiningR.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 47,
      subject: "Data Mining with R",
      description: "The process of discovering patterns and insights from large datasets using statistical and machine learning techniques in the R programming language.",
      course: "BSc-IT",
      semester: 6,
      fileName: "Data Mining with R.pdf",
      filePath: "uploads/DataMiningR.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 48,
      subject: "Design and Analysis of Algorithms",
      description: "The study of creating efficient algorithms and evaluating their performance to solve computational problems optimally.",
      course: "BSc-IT",
      semester: 6,
      fileName: "Design and Analysis of Algorithms.pdf",
      filePath: "uploads/DAA.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },
    {
      id: 49,
      subject: "Cloud Computing",
      description: "The delivery of computing services—like storage, servers, databases, and software—over the internet, allowing on-demand access and scalability.",
      course: "BCA",
      semester: 6,
      fileName: "Cloud Computing.pdf",
      filePath: "uploads/cloudComputing.pdf",
      downloads: 45,
      uploadDate: new Date("2025-01-15"),
    },      
  ]);

  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleFilter = (course, semester) => {
    let updatedFilteredNotes = notes;

    if (course && course !== 'All') {
      updatedFilteredNotes = updatedFilteredNotes.filter(note => note.course === course);
    }

    if (semester && semester !== 'All') {
      updatedFilteredNotes = updatedFilteredNotes.filter(note => note.semester === parseInt(semester));
    }

    setFilteredNotes(updatedFilteredNotes);
  };

  const handleClearFilters = () => {
    setFilteredNotes(notes);
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center">
        <Navbar style={{ marginBottom: '20px' }} />
        <Hero style={{ marginBottom: '20px' }} />
        <Filter notes={notes} onFilter={handleFilter} style={{ marginBottom: '20px' }} />
        <NotesList notes={filteredNotes} />
      </div>
    </>
  );
}

export default App;
