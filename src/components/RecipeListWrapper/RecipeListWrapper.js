import React from 'react';
import RecipeListItem from './RecipeListItem/RecipeListItem.js';
import './RecipeListWrapper.css';

const RecipeListWrapper = (props) => (
    <ul>
        {props.items.map((item, index) => (
            <RecipeListItem key= {index}
                index={index}
                title= {item.title}
                image= {item.image}
                prep= {item.prep}
                cook= {item.cook}
                quantity= {item.quantity}
                ingredients= {
                    item.ingredients.map(
                        ingredientItem => (ingredientItem!=="" ? <li>{ingredientItem} </li> : null)
                                        )
                            }
                instructions= {
                    item.instructions.map(
                        instructionItem => (instructionItem!=="" ?  <li>{instructionItem}</li> : null)
                                        )
                            }
                deleteFn= {props.deleteFn}
            />
        ))}
    </ul>
);

export default RecipeListWrapper;