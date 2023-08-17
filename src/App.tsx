import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import handleSubmit from "./handles/handle";

function App() {
  const [inputText, setInputText] = useState("");
  const [heading, setHeading] = useState("");
  // const [todos, setTodos] = useState<any>([]);
  const todosRef = useRef<any>([]);

  const handleOnChangeText = (event: any) => {
    setInputText(event.target.value);
  };

  const handleAddHeading = (event: any) => {
    setHeading(event.target.value);
  };

  const handleSubmitNote = (event: any) => {
    event.preventDefault();
    todosRef.current = [
      ...todosRef.current,
      {
        heading: heading,
        text: inputText,
        completed: false,
        id: Math.random(),
        dateCreated: new Date().toUTCString().slice(5, 16),
        timeCreated: new Date().getHours() + ":" + new Date().getMinutes(),
      },
    ];
    setInputText("");
    setHeading("");
    handleSubmit(todosRef.current);
  };

  // const noteList = todos.map((note: any) => {
  //   return (
  //     <div key={note.id} className="flex-col bg-blue-200 rounded-lg p-4">
  //       <div className="font-bold">{note.heading}</div>
  //       <div>{note.text}</div>
  //       <div className="text-xs text-gray-400 mt-1">
  //         {note.dateCreated.toString()} • {note.timeCreated.toString()}
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <>
      <nav className="bg-blue-500 flex p-4 justify-between lg:px-12 sticky top-0">
        <div className="flex justify-center items-center gap-1">
          <img src={reactLogo} alt="viteLogo" className="w-6" />
          <div className="font-bold text-white text-xl">NoteBook</div>
        </div>
        <div className="bg-white p-1 rounded-full cursor-pointer">
          <img src={viteLogo} alt="" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {/* {noteList} */}
        </div>
      </section>
    </>
  );
}

export default App;
