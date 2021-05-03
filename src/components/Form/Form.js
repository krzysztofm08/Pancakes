import React from 'react';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectIngredientQuantity from "../Select/SelectIngredientQuantity.js";
import SelectInstructionQuantity from "../Select/SelectInstructionQuantity.js";
import './Form.css';

function DiscardWindow () {
    const submitFormContainer = document.querySelector(".form_className");
    submitFormContainer.style.display="none";
}

const Form = ({submitFn}) => (
    <form
      className="form_className"
      onSubmit={submitFn}>
        <div className="Add-new-recipe__container">
            <h5 className="Add-new-recipe-container__title">
            Add new recipe
            </h5>
            <p>Title</p>
            <input placeholder="title" name="title"/>
            <p>Image link</p>
            <input placeholder="image link" name="image"/>
            <p>Preparation time</p>
            <input placeholder="prep" name="prep"/>
            <p>Cooking time</p>
            <input placeholder="cook" name="cook"/>
            <p>Quantity</p>
            <input placeholder="quantity" name="quantity"/>
            <p>Ingredients</p>
            <SelectIngredientQuantity/>
            <p>Instructions</p>
            <SelectInstructionQuantity/>
        <div className="Add-new__recipe">
            <button type="submit" className="Add-new-recipe__button">
                <FontAwesomeIcon icon={faBook} className="Add-new-recipe-button__icon" />
                Submit
            </button>
            <button type="button" className="Discard-new-recipe__button" onClick={DiscardWindow}>
                <FontAwesomeIcon icon={faBan} className="Discard-new-recipe-button__icon" />
                Cancel
            </button>
        </div>
        </div>
    </form>
)

export default Form;