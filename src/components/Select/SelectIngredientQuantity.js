import React, { useState } from 'react';
import Select from 'react-select';
import './Select.css';

const options = [
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
    {value: "5", label: "5"},
    {value: "6", label: "6"},
    {value: "7", label: "7"},
    {value: "8", label: "8"},
    {value: "9", label: "9"},
    {value: "10", label: "10"},
];

function AddInvisibleIngredientInputs(props) {
  let visibleInputsArray=[];
  let invisibleInputsArray=[];
  for (let i=0; i<props; i++) {
    visibleInputsArray.push(<input placeholder="ingredientItem" name={"ingredientItem"+i}/>);
  }
  for (let i=props; i<10; i++) {
    invisibleInputsArray.push(<input placeholder="ingredientItem" name={"ingredientItem"+i} className="ingredientItemInvisible"/>);
  }
  return <>{visibleInputsArray}{invisibleInputsArray}</>;
}

const SelectIngredientQuantity = () => {
  const [selected, setSelected] = useState("");
  const onChange = e => {
    setSelected(e.value);
  };
const displayItem = selected => {
  const item = options.find(x => x.value === selected);
  return item ? item : { value: "", label: "Choose" };
};

return (
    <>
      <Select
        options={options}
        className="Select__style"
        onChange={onChange}
        value={displayItem(selected)}
      />
      {AddInvisibleIngredientInputs(selected)}
    </>
  );
};

export default SelectIngredientQuantity;
