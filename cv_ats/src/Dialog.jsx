import React, { useContext } from "react";
import "./style.css";
import edit_icon from "./edit-3-svgrepo-com.svg";
import save_icon from "./done-v-svgrepo-com.svg";
import { AppContext } from "./AppProvider";
export default function Dialog() {
  const {
    name,
    mob,
    mail,
    address,
    objective,
    unvName,
    grade,
    gDate,
    compName,
    tasks,
    tecSkills,
    softSkills,
    jobTask,
    course,
    volunteering,
    language,
    isOpen,
    closeDialog,
    editName,
    editSt,
    handelEdit_form,
    editmob,
    editMail,
    editAddress,
    editObjective,
    editUnv,
    editGrade,
    editDate,
    editCompName,
    editTask,
    inputEditJTask,
    handel_edit,
    handel_save,
  } = useContext(AppContext);
  return (
    isOpen && (
      <dialog open>
        <div className="saved_info">
          <h3>{editSt ? editName : name}</h3>
          <div className="user_data">
            <span>{editSt ? editmob : mob}</span>
            <span>{editSt ? editMail : mail}</span>
            <span>{editSt ? editAddress : address}</span>
          </div>
        </div>
        <h1>Objectives</h1>
        <div className="saved_objectives">
          <p>{editSt ? editObjective : objective}</p>
        </div>
        <h1>Education</h1>
        <div className="edu_data">
          <span>{editSt ? editUnv : unvName}</span>
          <span>{editSt ? editGrade : grade}</span>
          <span>{editSt ? editDate : gDate}</span>
        </div>
        <h1>Experiences</h1>
        <div className="comp_data">
          <span>{editSt ? editCompName : compName}</span>
          <span>{editSt ? editTask : tasks}</span>
          <span>job tasks:</span>

          {
            <div className="job_task_data">
              {jobTask.map((job) => (
                <ul key={job.id}>
                  <li>
                    {job.isEditing ? (
                      <>
                        <input
                          defaultValue={job.txt}
                          ref={(el) => (inputEditJTask.current[job.id] = el)}
                        />
                        {
                          /*
                          el---> يعني تخصيص المدخل انبت للايضي الخاص به

                          This assigns the DOM element (el--> the input field for the specific task item)
                           to the corresponding entry in the inputRefs.current object.
                            The key for each entry is the task.id, ensuring that each task item
                             has its own unique reference.
                          
                          */
                        }
                        <img
                          src={save_icon}
                          alt=""
                          onClick={() => handel_save(job.id)}
                        />
                      </>
                    ) : (
                      <>
                        {job.txt}

                        <img
                          src={edit_icon}
                          alt=""
                          onClick={() => handel_edit(job.id)}
                        />
                      </>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          }
        </div>
        <h1>Skills</h1>
        <div className="skills_data">
          <div>
            {tecSkills.map((tec) => (
              <ul key={tec.id}>
                <li>
                {tec.isEditing ? (
                      <>
                        <input
                          defaultValue={tec.txt}
                          ref={(el) => (inputEditJTask.current[tec.id] = el)}
                        />
                        <img
                          src={save_icon}
                          alt=""
                          onClick={() => handel_save(tec.id)}
                        />
                      </>
                    ) : (
                      <>
                        {tec.txt}

                        <img
                          src={edit_icon}
                          alt=""
                          onClick={() => handel_edit(tec.id)}
                        />
                      </>
                    )}
                </li>
              </ul>
            ))}
          </div>

          <div>
            
          {softSkills.map((soft) => (
              <ul key={soft.id}>
                <li>
                {soft.isEditing ? (
                      <>
                        <input
                          defaultValue={soft.txt}
                          ref={(el) => (inputEditJTask.current[soft.id] = el)}
                        />
                        <img
                          src={save_icon}
                          alt=""
                          onClick={() => handel_save(soft.id)}
                        />
                      </>
                    ) : (
                      <>
                        {soft.txt}

                        <img
                          src={edit_icon}
                          alt=""
                          onClick={() => handel_edit(soft.id)}
                        />
                      </>
                    )}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <h1>Courses</h1>
        <div className="courses_data">
        {course.map((c) => (
              <ul key={c.id}>
                <li>
                {c.isEditing ? (
                      <>
                        <input
                          defaultValue={c.txt}
                          ref={(el) => (inputEditJTask.current[c.id] = el)}
                        />
                        <img
                          src={save_icon}
                          alt=""
                          onClick={() => handel_save(c.id)}
                        />
                      </>
                    ) : (
                      <>
                        {c.txt}

                        <img
                          src={edit_icon}
                          alt=""
                          onClick={() => handel_edit(c.id)}
                        />
                      </>
                    )}
                </li>
              </ul>
            ))}
        </div>
        <h1>Volunteering</h1>
        <div className="volunteering_data">
        {volunteering.map((vol) => (
              <ul key={vol.id}>
                <li>
                {vol.isEditing ? (
                      <>
                        <input
                          defaultValue={vol.txt}
                          ref={(el) => (inputEditJTask.current[vol.id] = el)}
                        />
                        <img
                          src={save_icon}
                          alt=""
                          onClick={() => handel_save(vol.id)}
                        />
                      </>
                    ) : (
                      <>
                        {vol.txt}

                        <img
                          src={edit_icon}
                          alt=""
                          onClick={() => handel_edit(vol.id)}
                        />
                      </>
                    )}
                </li>
              </ul>
            ))}
        </div>
        <h1>Languages</h1>
        <div>
        {language.map((lang) => (
              <ul key={lang.id}>
                <li>
                {lang.isEditing ? (
                      <>
                        <input
                          defaultValue={lang.txt}
                          ref={(el) => (inputEditJTask.current[lang.id] = el)}
                        />
                        <img
                          src={save_icon}
                          alt=""
                          onClick={() => handel_save(lang.id)}
                        />
                      </>
                    ) : (
                      <>
                        {lang.txt}

                        <img
                          src={edit_icon}
                          alt=""
                          onClick={() => handel_edit(lang.id)}
                        />
                      </>
                    )}
                </li>
              </ul>
            ))}
        </div>
        <div className="dailog_btns_ctrl">
          <button onClick={handelEdit_form}>Edit</button>
          <button onClick={closeDialog}>Cancel</button>
        </div>
      </dialog>
    )
  );
}
