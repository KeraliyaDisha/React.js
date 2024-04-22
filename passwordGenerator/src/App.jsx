import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use ref hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => { 
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className=" text-center text-3xl font-semibold text-white mt-20">
        Password Generator
      </h1>

      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-2 text-gray-600 bg-gray-700 mt-5">
        <div className=" flex shadow rounded-lg overflow-hidden mb-5 mt-1">
          <input
            type="text"
            className=" outline-none w-full py-1 px-3 font-semibold"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClip}
            className="flex outline-none text-white bg-blue-500 font-semibold hover:bg-blue-400 px-2 py-1 pl-3 gap-1 shrink-0"
          >
            copy
            <svg
              className="w-4 h-4 mx-1 my-1.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </div>
        <div className=" flex text-sm">
          <div className=" flex items-center gap-x-2 text-white font-semibold">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Range: {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className=" cursor-pointer"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className=" cursor-pointer"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label>Special Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
