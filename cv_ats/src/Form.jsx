import React, { useContext } from "react";
import "./style.css";
import Input from "./Input";
import { AppContext } from "./AppProvider";
import { createPortal } from "react-dom";
import Dialog from "./Dialog";
export default function Form() {
  const {
    inputName,
    adduser,
    inputMob,
    inputMail,
    inputAddress,
    inputObjective,
    inputUniversity,
    inputGrade,
    inputGrDate,
    inputComp,
    inputTasks,
    inputTechSkills,
    inputSoftSkills,
    addTechSkills,
    addSoftSkills,
    inputJobTask,
    addJobTask,
    inputCourse,
    addCourse,
    inputVolunteering,
    addVolunteering,
    inputLanguage,
    addLanguage,
    openDialog,
  } = useContext(AppContext);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CV ATS</h1>
      <div className="form_">
        <div className="info">
          <div className="name">
            <Input lable="client name" ref={inputName} />
          </div>
          <div className="data">
            <div className="mob">
              <Input lable="mobile number" ref={inputMob} />
            </div>
            <div className="mail">
              <Input lable="e-mail" ref={inputMail} />
            </div>
            <div className="address">
              <Input lable="address" ref={inputAddress} />
            </div>
          </div>
        </div>
        <h1>Objectives</h1>
        <div className="objectives">
          <textarea
            name=""
            id=""
            placeholder="enter your objectives here"
            ref={inputObjective}
          ></textarea>
        </div>
        <h1>Education</h1>
        <div className="education">
          <div className="university">
            <Input lable="university name" ref={inputUniversity} />
          </div>
          <div className="qualification">
            <Input lable="qualification grade" ref={inputGrade} />
          </div>
          <div className="gradYear">
            <Input lable="graduation year" ref={inputGrDate} />
          </div>
        </div>
        <h1>Experiences</h1>
        <div className="experience">
          <div className="compName">
            <Input lable="Company Name" ref={inputComp} />
          </div>

          <div className="task">
            <Input lable="Job title" ref={inputTasks} />
          </div>

          <span>job tasks:</span>
          <div className="job_task">
            <Input ref={inputJobTask} />
            <button onClick={addJobTask}>Add job Task</button>
          </div>
        </div>
        <h1>Skills</h1>
        <div className="skills">
          <span>Technical skills:</span>
          <div className="tec_skills">
            <Input ref={inputTechSkills} />
            <button onClick={addTechSkills}>Add Tech</button>
          </div>
          <span>Soft skills:</span>

          <div className="soft_skills">
            <Input ref={inputSoftSkills} />
            <button onClick={addSoftSkills}>Add Soft</button>
          </div>
        </div>

        <h1>Courses</h1>
        <div className="courses">
          <Input ref={inputCourse} />
          <button onClick={addCourse}>Add Course</button>
        </div>

        <h1>Volunteering</h1>
        <div className="vol">
          <Input ref={inputVolunteering} />
          <button onClick={addVolunteering}>Add Volunteering work</button>
        </div>

        <h1>Languages</h1>
        <div className="langs">
          <Input ref={inputLanguage} />
          <button onClick={addLanguage}>Add Language</button>
        </div>
        <div className="ctrlBtns">
          <button className="save" onClick={adduser}>
            Save
          </button>
          <button className="show" onClick={openDialog}>
            SHow Data
          </button>
        </div>
      </div>
      {/* ---------------------------  form to show the data------------------------- */}
      {createPortal(<Dialog />, document.getElementById("saved_data"))}
    </div>
  );
}
