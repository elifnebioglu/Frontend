import React from "react";
import "../styles/FrontPage.css";
import Button from "./Button";

const FrontPage = ({ onLoginClick }) => {
	return (
		<div className="relative flex flex-col h-full w-fit inset-x-0 mx-auto justify-center space-y-8">
			<div className=" space-y-2 text-8xl leading-tight">
				<p className="fadeInUpDelay text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
					MOODIFY.
				</p>
				
			</div>
            <div className="fadeInUpDelay flex justify-center pt-3">
				<Button text={"Login"} onclick={onLoginClick} />
			</div>
		</div>
	);
};

export default FrontPage;