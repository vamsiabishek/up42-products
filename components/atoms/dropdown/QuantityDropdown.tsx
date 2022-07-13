import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

interface Props {
    selectedValue: number;
    onSelect: (key: number) => void;
}

const options = [
  {key: 1, value: '1'},
  {key: 2, value: '2'},
  {key: 3, value: '3'},
  {key: 4, value: '4'},
  {key: 5, value: '5'},
]

function QuantityDropdown({selectedValue, onSelect}: Props) {
  return (
    <div>
        <DropdownButton id="dropdown-basic-button" variant="light" title={`Qty: ${selectedValue}`}>
            {options.map(option => <Dropdown.Item key={`quantity-drpdmn-${option.key}`} eventKey={option.key} onClick={() => onSelect(option.key)}>{option.value}</Dropdown.Item>)}
        </DropdownButton>
    </div>
  )
}

export default QuantityDropdown