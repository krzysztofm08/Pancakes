import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Buttons.css';


const DeleteButton = ({deleteFn}) => (
    <>
    <div className="RecipeContainer__buttons">
        <button className="RecipeContainerMainButtons__delete" onClick={deleteFn}><FontAwesomeIcon icon={faTrash} className="DeleteRecipe__icon" />Delete</button>
    </div>
    </>
);

export default DeleteButton;