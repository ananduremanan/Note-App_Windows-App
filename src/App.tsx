import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<any>([]);

  const handleOnChangeText = (event: any) => {
    setInputText(event.target.value);
  };

  const handleSubmitNote = (event: any) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };

  return (
    <>
      <nav className="bg-blue-500 flex p-4 justify-between lg:px-12">
        <div className="flex justify-center items-center gap-1">
          <img src={reactLogo} alt="viteLogo" />
          <div className="font-bold text-white">NoteBook</div>
        </div>
        <div className="bg-white p-1 rounded-full cursor-pointer">
          <img src={viteLogo} alt="" />
        </div>
      </nav>
      <section>
        <div className="p-4 lg:px-12 w-screen">
          <textarea
            placeholder="Enter your notes here.."
            className="bg-gray-100 p-4 w-full rounded-xl h-64"
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
      <section>
        {todos &&
          todos.map((note: any) => {
            console.log(note);
          })}
      </section>
    </>
  );
}

export default App;
