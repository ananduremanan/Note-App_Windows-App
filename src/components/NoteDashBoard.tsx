import "../App.css";
import { useState, useRef, useEffect } from "react";
import sendData from "../handles/sendData";
import getData from "../handles/getData";
import NoteListComponent from "../components/NoteListComponent";
import NavBar from "./UI/NavBar";

function NoteDashBoard() {
  const [inputText, setInputText] = useState("");
  const [heading, setHeading] = useState("");
  const todosRef = useRef<any>([]);
  const [noteData, setNoteData] = useState<any>([]);

  useEffect(() => {
    let unsubscribe: any;
    const fetchData = async () => {
      unsubscribe = await getData(setNoteData);
    };
    fetchData();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
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
      timeCreated:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };

    todosRef.current = [newNote];
    setInputText("");
    setHeading("");
    await sendData(todosRef.current);
    setNoteData(todosRef.current);
  };

  const handleResetNote = () => {
    setInputText("");
    setHeading("");
    setNoteData([]);
    todosRef.current = [];
    sendData(todosRef.current);
  };

  return (
    <>
      <NavBar />
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
            <button
              className="bg-blue-400 rounded-lg p-2 text-white hover:font-bold hover:bg-blue-500"
              onClick={handleResetNote}
            >
              Clear
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

export default NoteDashBoard;
