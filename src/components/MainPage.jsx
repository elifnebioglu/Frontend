import React, { useState } from "react";
import "../styles/MainPage.css";
import Login from "./Login";
import Button from "./Button";
const MainPage = ({handleSendClick}) => {
    const [postContent, setText] = useState("");
    const handleTextChange = (e) => {
        setText(e);
      };
      const handleButtonClick = () => {
        handleSubmit();
        handleSendClick();
      };
    const handleSubmit = () => {
      sendRequest("http://localhost:8080/api/chatgpt");
        console.log(postContent);

      };
      const sendRequest =  (path) => {
        console.log(postContent);
        fetch(path,{
          method:"POST", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTcxMjc0NDk1MH0.1u5kspqOBWAAyTibbnJwC6EQBRtFw-egTkZbOIWa0-_Ok7iFoBuEOFZ-LqgFFxVRJAPL5ERJsQtyVRNWTLrM5g"
          },
          
          body: JSON.stringify(postContent)
        })
        
      
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((err) => console.log(err))
      }
      
	return (
		<div className="relative">
            <div className="lable">
                <label >
                        Please specify your mood!
                </label>
            </div>

            <div className='textarea'>
                <textarea name="postContent" rows={10} cols={80} onChange={(i) => handleTextChange(i.target.value)} />
            </div>
            <div className="sendbut" >
                <Button text={"Send"} onclick={handleButtonClick} />
            </div>
		</div>
	);
};

export default MainPage;