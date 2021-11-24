import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Student } from "./components/Student";

function App() {
  const [students, setStudents] = useState([]);
  const getStudents = async () => {
    const response = await axios.get(
      "https://oyolah-school-management.herokuapp.com/students"
    );

    setStudents(response.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "100px",
          marginTop: "100px",
        }}
      >
        All Students
      </h1>

      {students?.map((student) => (
        <Student key={student.id} {...student} />
      ))}

      {students?.map((student) => (
        <Student key={student.id} {...student} />
      ))}

      {students?.map((student) => (
        <Student key={student.id} {...student} />
      ))}
      {students?.map((student) => (
        <Student key={student.id} {...student} />
      ))}
      {students?.map((student) => (
        <Student key={student.id} {...student} />
      ))}
      {students?.map((student) => (
        <Student key={student.id} {...student} />
      ))}
      {students?.map((student) => (
        <Student key={student.id} {...student} />
      ))}
    </div>
  );
}

export default App;
