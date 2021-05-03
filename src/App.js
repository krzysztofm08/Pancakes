import logo from './assets/images/dorayaki-3943941_1280.png';
import RecipeListWrapper from "./components/RecipeListWrapper/RecipeListWrapper.js";
import Form from "./components/Form/Form.js";
import './App.css';
import React from 'react';
import EditForm from './components/Form/EditForm';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialStateItems= [
  {
    title: 'Blueberry Pancakes',
    image: 'https://images.squarespace-cdn.com/content/v1/5976c70e46c3c46045413cb7/1526042496549-F5YT49DCZ9IVRRCV70HT/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/food-2758150_1920.jpg',
    prep: '10 mins',
    cook: '10 mins',
    quantity: '10 servings',
    ingredients: [
        '200g self-raising flour',
        '1 tsp baking powder',
        '1 egg',
        '300ml milk',
        'knob butter',
        '150g pack blueberry',
        'sunflower oil or a little butter for cooking',
        'golden or maple syrup',
    ],
    instructions: [
            'Mix together 200g self-raising flour, 1 tsp baking powder and a pinch of salt in a large bowl.',
            'Beat 1 egg with 300ml milk, make a well in the centre of the dry ingredients and whisk in the milk to make a thick smooth batter.',
            'Beat in a knob of melted butter, and gently stir in half of the 150g pack of blueberries.',
            'Heat a teaspoon of sunflower oil or small knob of butter in a large non-stick frying pan.',
            'Drop a large tablespoonful of the batter per pancake into the pan to make pancakes about 7.5cm across. Make three or four pancakes at a time.',
            'Cook for about 3 minutes over a medium heat until small bubbles appear on the surface of each pancake, then turn and cook another 2-3 minutes until golden.',
            'Cover with kitchen paper to keep warm while you use up the rest of the batter.',
            'Serve with golden or maple syrup and the rest of the blueberries.',
    ]
  },
  {
    title: 'Strawberry Pancakes',
    image: 'data:image/jpeg;base64,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',
    prep: '10 mins',
    cook: '8 mins',
    quantity: '12 servings',
    ingredients: [
        '1 cup flour',
        '2 tsp. sugar',
        '1/2 tsp. salt',
        '1/2 tsp. baking powder',
        '1/2 tsp. baking soda',
        '1 cup milk',
        '1 egg',
        '2 Tbsp. butter melted',
        '1 tsp vanilla extract',
        '1 cup strawberries diced small',
    ],
    instructions: [
            'Mix flour, sugar, salt, baking powder and baking soda in a large mixing bowl.',
            'In another bowl, whisk milk and egg together. Add butter and whisk until combined.',
            'Add milk mixture to dry mixture and add vanilla. Whisk together until combined and most of the lumps are gone. Stir in strawberries.',
            'Heat griddle to medium heat. Spray with cooking spray and pour batter on hot griddle. Flip and cook through. Repeat and enjoy!',
    ]
  },
];


class App extends React.Component {
  state = {
    items: [...initialStateItems],
  }

  addRecipe = (e) => {
    e.preventDefault();
    const newRecipe = {
      title: e.target[0].value,
      image: e.target[1].value,
      prep: e.target[2].value,
      cook: e.target[3].value,
      quantity: e.target[4].value,
      ingredients: [e.target[6].value, e.target[7].value, e.target[8].value, e.target[9].value, e.target[10].value, e.target[11].value, e.target[12].value, e.target[13].value, e.target[14].value, e.target[15].value],
      instructions: [e.target[17].value, e.target[18].value, e.target[19].value, e.target[20].value, e.target[21].value, e.target[22].value, e.target[23].value, e.target[24].value, e.target[25].value, e.target[26].value],
    }

    this.setState(prevState => ({
      items: [...prevState.items, newRecipe],
    }));

    e.target.reset();

  }

  /* the delete function passed through RecipeListWrapper => RecipeListItem => DeleteButton*/
  deleteRecipe = (e) => {
    const listItemWrapperId = e.target.closest(".RecipeContainerMainButtons__delete").closest(".listItem__wrapper").id;
    const items = [...this.state.items.splice(listItemWrapperId, 1)];

    this.setState(prevState => ({
      items: [...prevState.items],
    }));

  }

  editRecipe = (e) => {
    const editFormContainer = document.querySelector(".EditForm");
    editFormContainer.style.display="inline";
    const listItemWrapperId = e.target.closest(".RecipeContainerMainButtons__edit").closest(".listItem__wrapper").id;
    //Title
    const editedTitle = document.querySelector('input[name="editTitle"]');
    editedTitle.value = this.state.items[listItemWrapperId].title;
    //image
    const editedImage = document.querySelector('input[name="editImage"]');
    editedImage.value = this.state.items[listItemWrapperId].image;
    //prep
    const editedPrep = document.querySelector('input[name="editPrep"]');
    editedPrep.value = this.state.items[listItemWrapperId].prep;
    //cook
    const editedCook = document.querySelector('input[name="editCook"]');
    editedCook.value = this.state.items[listItemWrapperId].cook;
    //quantity
    const editedQuantity = document.querySelector('input[name="editQuantity"]');
    editedQuantity.value = this.state.items[listItemWrapperId].quantity;
    //ingredients
    for (let i=0; i<10; i++) {
      const editedIngredient = document.querySelector('input[name="editedIngredientItem'+i+'"]');
      editedIngredient.value = this.state.items[listItemWrapperId].ingredients[i];
    }
    //instructions
    for (let i=0; i<10; i++) {
      const editedInstruction = document.querySelector('textarea[name="editedInstructionItem'+i+'"]');
      editedInstruction.value = this.state.items[listItemWrapperId].instructions[i];
    }
    const editedInputId = document.querySelector('.hiddenInput');
    editedInputId.value = listItemWrapperId;

  }

  showAddRecipe = () => {
    const submitFormContainer = document.querySelector(".form_className");
    submitFormContainer.style.display="inline";
  }
  /* Edited recipe submit */
  submitRecipe = (e) => {
    e.preventDefault();
    const editRecipe = {
      title: e.target[0].value,
      image: e.target[1].value,
      prep: e.target[2].value,
      cook: e.target[3].value,
      quantity: e.target[4].value,
      ingredients: [e.target[5].value, e.target[6].value, e.target[7].value, e.target[8].value, e.target[9].value, e.target[10].value, e.target[11].value, e.target[12].value, e.target[13].value, e.target[14].value],
      instructions: [e.target[15].value, e.target[16].value, e.target[17].value, e.target[18].value, e.target[19].value, e.target[20].value, e.target[21].value, e.target[22].value, e.target[23].value, e.target[24].value],
    }
    const editedInputId = e.target[25].value;
    /* Update an array item */

    const items = [...this.state.items.splice(editedInputId, 1, editRecipe)];

    this.setState(prevState => ({
      items: [...prevState.items],
    }));

    e.target.reset();

  }

  
  render() {
    return (
      <>
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <h1 className="Site__title">
          Pancakes
        </h1>
        <img src={logo} className="App-logo__right" alt="logo-right" />
      </header>
      <body>

        <div className="Body__container">
          <button className="ShowAddRecipeButton" onClick={this.showAddRecipe} ><FontAwesomeIcon icon={faPlusCircle} className="ShowAddRecipeButtonIcon"/>Add Recipe</button>
          <Form submitFn={this.addRecipe} />
          <EditForm editFn={this.submitRecipe} />
          <RecipeListWrapper
            items={this.state.items}
            deleteFn={this.deleteRecipe}
            editFn={this.editRecipe}
           />
        </div>
      </body>
      </>
  );
}
}

export default App;