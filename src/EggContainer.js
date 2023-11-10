import EggItem from "./EggItem";

//input:
//props -
// 1. array of eggItem objects,
// 2. function to delete individual eggItem objects,
// 3. function to increase and decrease counter

//Output:
//return an array of egg items in jsx
//  where each item in the array is the eggItem component

export default function EggContainer(props) {
  //eggItemObjects is the key we named in App.js to pass down the list of pupils form our json file in the props
  const eggItemObjects = props.eggItemObjectsList;
  const deleteEggItemObject = props.deleteEggItemObject;

  //   console.log(eggItemObjects);
  //create a new, empty array. This is where you'll store your react elements
  const list = [];

  // loop over the array of egg item objects. For loop from index 0 to length -1. For each index:

  // This is a loop that iterates over each element in the array 'eggItemObjects'
  for (let i = 0; i < eggItemObjects.length; i++) {
    // Retrieve the current object from the array at index 'i'
    const object = eggItemObjects[i];

    // Create a React component 'EggItem' using the current object and assign it to the variable 'component'
    const component = (
      <EggItem className="eggItem"
        key={object.id} // Assign a unique key to the component using the 'id' property of the current object
        eggItem={object} // Pass the current object as a prop named 'eggItem' to the 'EggItem' component
        deleteEggItemObject={() => deleteEggItemObject(object.id)} // Pass a function as a prop to handle deletion of the current object
      />
    );

    // Add the 'component' to the 'list' array
    list.push(component);
  }

  return (
    <div class="eggContainerWhole">
      <div className="eggContainer">{list}</div>
    </div>
  );
}
