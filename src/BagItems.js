import React from 'react'


function BagItems(BagItems, key) {
  const Bags = ['Sky blue Leather Shoulder Bag', 'Silicone yellow Medium Shoulder Bag',


    {
      id: 1, 
      bag: 'Sky blue Leather Shoulder Bag',
      prize: 45000,
    },
    {
      id: 2,
      bag: 'Silicone yellow Medium Shoulder Bag',
      prize: 40000,
    }
  ];
 
  
const bagItems = bagItems.map(bag => {bagItems key={bagItems.name} bag={bag}/>)
return <div>{bagItems}</div>
}

export default BagItems