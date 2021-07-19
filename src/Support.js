import React from "react";
import "./styles/support.css";
import { useState } from "react";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const apii = "http://localhost:5000/posts";

export const createPost = async (post) =>
  await (
    await axios.post(apii, post)
  ).data;

export default function Support() {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <div className="main">
      E mail
      <input
        className="but"
        type="text"
        name="email"
        value={inputs.email}
        onChange={handleChange}
      ></input>
      Ad
      <input
        className="but"
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
      ></input>
      Şikayet
      <form>
        {" "}
        <textarea
          className="text-area"
          type="text"
          name="description"
          value={inputs.description}
          onChange={handleChange}
        ></textarea>
      </form>
      <div className="buttons-row">
        {" "}
        <button
          className="gonder"
          onSubmit="return false"
          onClick={() => {
            createPost(inputs);
            alert("Başarıyla kaydedildi");
            console.log("basdık");
            window.location.reload();
          }}
        >
          gönder
        </button>
        <a href="/">
          <button className="return-button"> geri dön</button>
        </a>
      </div>
    </div>
  );
}
