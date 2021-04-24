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

function AddInvisibleInstructionInputs(props) {
  let visibleInputsArray=[];
  let invisibleInputsArray=[];
  for (let i=0; i<props; i++) {
    visibleInputsArray.push(<textarea placeholder="instructiontItem" name="instructionItem"/>);
  }
  for (let i=props; i<10; i++) {
    invisibleInputsArray.push(<textarea placeholder="instructionItem" name="instructionItem" className="instructionItemInvisible"/>);
  }
  return <>{visibleInputsArray}{invisibleInputsArray}</>;
}

const SelectInstructionQuantity = () => {
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
      {AddInvisibleInstructionInputs(selected)}
    </>
  );
};

export default SelectInstructionQuantity;
