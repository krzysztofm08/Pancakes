import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Buttons.css';


const EditButton = ({editFn}) => (
    <>
    <div className="RecipeContainer__buttons">
        <button className="RecipeContainerMainButtons__edit" onClick={editFn}><FontAwesomeIcon icon={faBook} className="EditRecipe__icon" />Edit</button>
    </div>
    </>
);

export default EditButton;