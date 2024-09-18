import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [editSt, setEditSt] = useState(false); //-------------->
  //--------------------------------------------------------------------------------------------------
  const [name, setName] = useState("");
  const [editName, setEditName] = useState(name); //-------------->
  //-----------------------------------------------------------------------------
  const [mob, setMob] = useState("");
  const [editmob, setEditMob] = useState(mob); //-------------->
  //-------------------
  const [mail, setMail] = useState("");
  const [editMail, setEditMail] = useState(mail); //-------------->
  //---------------------
  const [address, setAddress] = useState("");
  const [editAddress, setEditAddres] = useState(address); //-------------->
  //---------------------------
  // -----------------------------------------------
  const [objective, setObjective] = useState("");
  const [editObjective, setEditObjective] = useState(objective); //-------------->
  // -----------------------------------------------
  const [unvName, setUnvName] = useState("");
  const [editUnv, setEditUnv] = useState(unvName); //-------------->
  // -----------------------------------------------
  const [grade, setGrade] = useState("");
  const [editGrade, setEditGrade] = useState(grade); //-------------->
  // -----------------------------------------------
  const [gDate, setGDate] = useState("");
  const [editDate, setEditDate] = useState(gDate); //-------------->
  // -----------------------------------------------------------------------------
  const [compName, setCompName] = useState("");
  const [editCompName, setEditCompName] = useState(compName); //-------------->
  // ------------------------------
  const [tasks, setTasks] = useState("");
  const [editTask, setEditTask] = useState(tasks); //-------------->
  //-------------------------------
  const [jobTask, setJobTask] = useState([]); //-------------------------------------------------------->
  // -----------------------------------------------
  const [tecSkills, setTechSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  // -----------------------------------------------
  const [course, setCourse] = useState([]);
  // -----------------------------------------------
  const [volunteering, setVolunteering] = useState([]);
  // -----------------------------------------------
  const [language, setLanguage] = useState([]);
  // -----------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  // -----------------------------------------------
  const inputName = useRef();
  const inputMob = useRef();
  const inputMail = useRef();
  const inputAddress = useRef();
  const inputObjective = useRef();
  const inputUniversity = useRef();
  const inputGrade = useRef();
  const inputGrDate = useRef();
  const inputComp = useRef();
  const inputTasks = useRef();
  const inputJobTask = useRef();
  const inputTechSkills = useRef();
  const inputSoftSkills = useRef();
  const inputCourse = useRef();
  const inputVolunteering = useRef();
  const inputLanguage = useRef();
  const inputEditJTask = useRef({});
  // console.log(inputEditJTask) ---------> it stores the current--> object-->multipe inputs with IDS
  // console.log(inputEditJTask) --> we can replace the {} with []-->arr
  // ----------------------------------------------------------------

  // ----------------------------------------------------------------
  const adduser = () => {
    setName(inputName.current.value);
    setEditName(inputName.current.value); //-->
    // ---------------
    setMob(inputMob.current.value);
    setEditMob(inputMob.current.value);
    // ------------------
    setMail(inputMail.current.value);
    setEditMail(inputMail.current.value);
    // ------------------
    setAddress(inputAddress.current.value);
    setEditAddres(inputAddress.current.value);
    // ------------------
    setObjective(inputObjective.current.value);
    setEditObjective(inputObjective.current.value);
    // ------------------
    setUnvName(inputUniversity.current.value);
    setEditUnv(inputUniversity.current.value);
    // ------------------
    setGrade(inputGrade.current.value);
    setEditGrade(inputGrade.current.value);
    // ------------------
    setGDate(inputGrDate.current.value);
    setEditDate(inputGrDate.current.value);
    // ------------------
    setCompName(inputComp.current.value);
    setEditCompName(inputComp.current.value);
    // ------------------
    setTasks(inputTasks.current.value);
    setEditTask(inputTasks.current.value);
    // ------------------inputName.current.value = "";
    inputMob.current.value = "";
    inputMail.current.value = "";
    inputAddress.current.value = "";
    inputObjective.current.value = "";
    inputUniversity.current.value = "";
    inputGrade.current.value = "";
    inputGrDate.current.value = "";
    inputComp.current.value = "";
    inputTasks.current.value = "";
  };
  // -------------------------------------------
  const addJobTask = () => {
    setJobTask([
      ...jobTask,
      { txt: inputJobTask.current.value, id: Math.random(), isEditing: false },
    ]);
    inputJobTask.current.value = "";
  };
  // -------------------------------------------

  const addTechSkills = () => {
    setTechSkills([
      ...tecSkills,
      {
        txt: inputTechSkills.current.value,
        id: Math.random(),
        isEditing: false,
      },
    ]);
    inputTechSkills.current.value = "";
  };
  // -------------------------------------------

  const addSoftSkills = () => {
    setSoftSkills([
      ...softSkills,
      {
        txt: inputSoftSkills.current.value,
        id: Math.random(),
        isEditing: false,
      },
    ]);
    inputSoftSkills.current.value = "";
  };
  // -------------------------------------------
  const addCourse = () => {
    setCourse([
      ...course,
      { txt: inputCourse.current.value, id: Math.random(), isEditing: false },
    ]);
    inputCourse.current.value = "";
  };
  // -------------------------------------------
  const addVolunteering = () => {
    setVolunteering([
      ...volunteering,
      {
        txt: inputVolunteering.current.value,
        id: Math.random(),
        isEditing: false,
      },
    ]);
    inputVolunteering.current.value = "";
  };
  // -------------------------------------------
  const addLanguage = () => {
    setLanguage([
      ...language,
      { txt: inputLanguage.current.value, id: Math.random(), isEditing: false },
    ]);
    inputLanguage.current.value = "";
  };
  // -------------------------------------------
  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  // -------------------------------------------
  const handelEdit_form = () => {
    inputName.current.value = editName;
    inputMob.current.value = editmob;
    inputMail.current.value = editMail;
    inputAddress.current.value = editAddress;
    inputObjective.current.value = editObjective;
    inputUniversity.current.value = editUnv;
    inputGrade.current.value = editGrade;
    inputGrDate.current.value = editDate;
    inputComp.current.value = editCompName;
    inputTasks.current.value = editTask;
    setEditSt(!editSt);
  };

  // -------------------------------------------
  const handel_edit = (id) => {
    setJobTask(
      jobTask.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
    //-----------------------------------
    setTechSkills(
      tecSkills.map((tec) =>
        tec.id === id ? { ...tec, isEditing: !tec.isEditing } : tec
      )
    );
    //-----------------------------------
    setSoftSkills(
      softSkills.map((soft) =>
        soft.id === id ? { ...soft, isEditing: !soft.isEditing } : soft
      )
    );
    //----------------------------------
    setCourse(
      course.map((c) => (c.id === id ? { ...c, isEditing: !c.isEditing } : c))
    );
    //-----------------------------------
    setVolunteering(
      volunteering.map((vol) =>
        vol.id === id ? { ...vol, isEditing: !vol.isEditing } : vol
      )
    );
    //-----------------------------------
    setLanguage(
      language.map((lang) =>
        lang.id === id ? { ...lang, isEditing: !lang.isEditing } : lang
      )
    );
  };
  //---------------------------------------------------------------------------------------------------------------
  const handel_save = (id) => {
    setJobTask(
      jobTask.map((task) =>
        task.id === id
          ? { ...task, isEditing: false, txt: inputEditJTask.current[id].value }
          : task
      )
    );
    //--------------------------------------
    setTechSkills(
      tecSkills.map((tec) =>
        tec.id === id
          ? { ...tec, isEditing: false, txt: inputEditJTask.current[id].value }
          : tec
      )
    );
    //--------------------------------------
    setSoftSkills(
      softSkills.map((soft) =>
        soft.id === id
          ? { ...soft, isEditing: false, txt: inputEditJTask.current[id].value }
          : soft
      )
    );
    //--------------------------------------
    setCourse(
      course.map((c) =>
        c.id === id
          ? { ...c, isEditing: false, txt: inputEditJTask.current[id].value }
          : c
      )
    );
    //--------------------------------------
    setVolunteering(
      volunteering.map((vol) =>
        vol.id === id
          ? { ...vol, isEditing: false, txt: inputEditJTask.current[id].value }
          : vol
      )
    );
    //--------------------------------------
    setLanguage(
      language.map((lang) =>
        lang.id === id
          ? { ...lang, isEditing: false, txt: inputEditJTask.current[id].value }
          : lang
      )
    );
  };
  // -------------------------------------------

  const values = {
    name,
    editName,
    inputName,
    inputMob,
    inputMail,
    inputAddress,
    mob,
    editmob,
    mail,
    editMail,
    address,
    editAddress,
    adduser,
    objective,
    editObjective,
    inputObjective,
    unvName,
    editUnv,
    gDate,
    editDate,
    editGrade,
    grade,
    inputUniversity,
    inputGrade,
    inputGrDate,
    compName,
    editCompName,
    tasks,
    inputComp,
    inputTasks,
    editTask,
    tecSkills,
    softSkills,
    inputTechSkills,
    inputSoftSkills,
    addTechSkills,
    addSoftSkills,
    inputJobTask,
    jobTask,
    addJobTask,
    course,
    inputCourse,
    addCourse,
    volunteering,
    inputVolunteering,
    addVolunteering,
    language,
    inputLanguage,
    addLanguage,
    isOpen,
    openDialog,
    closeDialog,
    setName,
    inputName,
    editName,
    editSt,
    handelEdit_form,
    inputEditJTask,
    handel_edit,
    handel_save,
  };
  return (
    <AppContext.Provider value={values}>
      {children}
      {
        //any comp
      }
    </AppContext.Provider>
  );
}
