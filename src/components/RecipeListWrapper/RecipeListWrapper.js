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
                        ingredientItem =>  {
                            if (ingredientItem!=="" && ingredientItem!=="undefined") {
                                return <li>{ingredientItem} </li>;
                                }
                            else {
                            return null;
                                }
                             }
                    )
                }                   
        
                instructions= {
                    item.instructions.map(
                        instructionItem => {
                            if (instructionItem!=="" && instructionItem!=="undefined") {
                                return <li>{instructionItem} </li>;
                                }
                            else {
                            return null;
                                }
                             }
                    )
                }        
                        
                deleteFn= {props.deleteFn}
                editFn= {props.editFn}
            />
        ))}
    </ul>
);

export default RecipeListWrapper;