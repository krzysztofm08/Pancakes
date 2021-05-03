import React from 'react';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Form.css';

function CloseWindow () {
    const editFormContainer = document.querySelector(".EditForm");
    editFormContainer.style.display="none";
}

const EditForm = ({editFn}) => (
    <form
      className="EditForm"
      onSubmit={editFn}>
        <div className="Add-new-recipe__container">
            <h5 className="Add-new-recipe-container__title">
            Edit existing recipe
            </h5>
            <p>Title</p>
            <input placeholder="title" name="editTitle"/>
            <p>Image link</p>
            <input placeholder="image link" name="editImage"/>
            <p>Preparation time</p>
            <input placeholder="prep" name="editPrep"/>
            <p>Cooking time</p>
            <input placeholder="cook" name="editCook"/>
            <p>Quantity</p>
            <input placeholder="quantity" name="editQuantity"/>
            <p>Ingredients</p>
            <input placeholder="editedIngredientItem" name="editedIngredientItem0"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem1"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem2"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem3"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem4"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem5"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem6"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem7"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem8"/>
            <input placeholder="editedIngredientItem" name="editedIngredientItem9"/>
            <p>Instructions</p>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem0"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem1"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem2"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem3"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem4"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem5"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem6"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem7"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem8"/>
            <textarea placeholder="editedInstructiontItem" name="editedInstructionItem9"/>

            <input className="hiddenInput" placeholder="editedItemId" name="editedItemId"/>

        <div className="Edit__recipe">
            <button type="submit" className="Edit-recipe__button">
                <FontAwesomeIcon icon={faCheckCircle} className="Edit-recipe-button__icon" />
                Save changes
            </button>
            <button type="button" className="Discard-recipe__button" onClick={CloseWindow}>
                <FontAwesomeIcon icon={faBan} className="Discard-recipe-button__icon" />
                Discard changes
            </button>
        </div>
        </div>
    </form>
)

export default EditForm;