import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import './components/ListAge';
import ListAge from "./components/ListAge";

const App = () => {
  console.log();

  const alphbraille = {
    a: "⠁",
    b: "⠃",
    c: "⠉",
  };
  const [braille, setbraille] = useState("");
  const [color, setColor] = useState();
  const [list, setlist] = useState([
    // { fname: '', lname: '', birthday: new Date() },
    
  ]);

  const input = useRef();

  const handleColor = (e) => {
    const value = e.target.value;
    setColor(value);
  };

  const transcript = (e) => {
    const value = e.target.value;

    const input = useRef();

    const braille = value
      .split("")
      .map((letter) => alphbraille[letter])
      .join("");

    setbraille(braille);
  };

  const handleForm = (e) => {
    e.preventDefault();
    // const value = input.current.value;
    const formData = new FormData(e.target);
    const birthday = () =>{
      (new Date() - new Date(formData.get('date'))) / 1000 / 60 / 60 / 24 / 365 ;
    };
    // console.log(formData);
    // créer un objet contenant les propriétés
    const person = {};
    person.lname = formData.get('nom');
    person.fname = formData.get('prenom');
    person.birthday = new Date(formData.get('date'));
    person.age = formData.get (birthday);
    // console.log(person);
    const clone = [...list];
    clone.push(person);
    setlist(clone);
    // input.current.value = '';
    e.target.reset();


  };

  return (
    <>
      <p style={{ color: color }}>Lorem ipsum dolor sit amet?</p>
      <input type="color" onInput={handleColor} />

      <hr />

      <input type="text" onInput={transcript} />

      <p>{braille}</p>

      <hr />

      <form onSubmit={handleForm}>
        <input type="text" name="prenom" placeholder="prénom" />

        <input type="text" name="nom" placeholder="nom" />

        <input type="date" name="date" />

        <button>Add</button>

        {/* <p>son age est {age} ans</p> */}
      </form>

      <ListAge propList={ list } />
    </>
  );
};

export default App;
