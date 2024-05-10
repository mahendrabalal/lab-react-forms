import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev")
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add new student
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };
    const updatedStudents = [newStudent, ...students];
    setStudents(updatedStudents);

    // Clear form fields
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev"); // Reset to default value
    setGraduationYear(2023); // Reset to default value
    setGraduated(false); // Reset to default value
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(e)=> setFullName(e.target.value)} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(e) => setImage(e.target.value)} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={(e) => setProgram(e.target.value)}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={(e) => setGraduationYear(parseInt(e.target.value))}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={graduated} onChange={(e) => setGraduated(e.target.checked)}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
