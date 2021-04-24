import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import DeleteButton from '../../Buttons/DeleteButton.js';


const RecipeListItem = (props) => (
    <li className="listItem__wrapper" id={props.index}>
        <div className="Recipe__container">
            <h3 className="RecipeContainer__title">
              {props.title}
            </h3>
            <div className="RecipeContainer__top">
              <img src={props.image} className="Recipe__logo" alt={props.title+" Logo"} />
              <div className="RecipeContainerTop__right">
                <div className="RecipeShort__description">
                  <p>Prep: {props.prep}</p>
                  <p>Cook: {props.cook}</p>
                  <p>Quantity: {props.quantity}</p>
                </div>
                <DeleteButton deleteFn={props.deleteFn}/>
              </div>
            </div>
            <div className="Recipe__description">
              <div className="RecipeDescription__ingredients">
                <h4 className="RecipeDescriptionIngredients__topic">
                  Ingredients
                </h4>
                <ul className="RecipeDescriptionIngredients__list">
                  {props.ingredients}
                </ul>
              </div>

              <div className="RecipeDescription__instructions">
                <h4 className="RecipeDescriptionInstructions__topic">
                  Instructions
                </h4>
                <ol className="RecipeDescriptionInstructions__list">
                  {props.instructions}
                </ol>
              </div>

            </div>
          </div>
    </li>
);

RecipeListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  prep: PropTypes.string.isRequired,
  cook: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  instructions: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
}

export default RecipeListItem;