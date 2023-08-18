import avatar from "./assets/ai_gen_img.jpg";
import nbLogo from "./assets/nbLogo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import sendData from "./handles/sendData";
import getData from "./handles/getData";
import NoteListComponent from "./components/NoteListComponent";

function App() {
  const [inputText, setInputText] = useState("");
  const [heading, setHeading] = useState("");
  const todosRef = useRef<any>([]);
  const [noteData, setNoteData] = useState<any>([]);

  useEffect(() => {
    getData().then((data) => {
      setNoteData(data);
    });
  }, []);

  const handleOnChangeText = (event: any) => {
    setInputText(event.target.value);
  };

  const handleAddHeading = (event: any) => {
    setHeading(event.target.value);
  };

  const handleSubmitNote = async (event: any) => {
    event.preventDefault();
    if (heading === "" || inputText === "") return;
    const newNote = {
      heading: heading,
      text: inputText,
      completed: false,
      id: Math.random(),
      dateCreated: new Date().toUTCString().slice(5, 16),
      timeCreated: new Date().getHours() + ":" + new Date().getMinutes(),
    };

    todosRef.current = [newNote, ...todosRef.current];
    setInputText("");
    setHeading("");
    await sendData(todosRef.current);
    getData().then((data) => {
      setNoteData(data);
    });
  };

  return (
    <>
      <nav className="bg-blue-500 flex p-4 justify-between lg:px-12 sticky top-0">
        <div className="flex justify-center items-center gap-1">
          <img src={nbLogo} alt="viteLogo" className="w-4" />
          <div className="font-bold text-white text-xl">NoteBook</div>
        </div>
        <div className=" p-1 rounded-full cursor-pointer w-14">
          <img src={avatar} alt="" className="rounded-full border" />
        </div>
      </nav>
      <section className="overflow-hidden">
        <div className="p-4 lg:px-12 w-screen">
          <input
            placeholder="Enter a Title.."
            className="bg-gray-100 p-4 w-full rounded-xl"
            value={heading}
            onChange={handleAddHeading}
          />
          <textarea
            placeholder="Enter your notes here.."
            className="bg-gray-100 p-4 w-full rounded-xl h-64 mt-2"
            value={inputText}
            onChange={handleOnChangeText}
          />
          <div className="flex gap-2 mt-2">
            <button
              className="bg-blue-400 rounded-lg p-2 text-white hover:font-bold hover:bg-blue-500"
              onClick={handleSubmitNote}
              type="submit"
            >
              Save Note
            </button>
            <button className="bg-blue-400 rounded-lg p-2 text-white hover:font-bold hover:bg-blue-500">
              Reset
            </button>
          </div>
        </div>
      </section>
      <section className="p-4 lg:px-12 overflow-hidden">
        <div className="text-gray-400 mb-2">Your Notes</div>
        <hr />
        <div className="mt-2">
          <NoteListComponent noteData={noteData} />
        </div>
      </section>
    </>
  );
}

export default App;
