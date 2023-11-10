import Header from "./Header";
import Footer from "./Footer";
import EggContainer from "./EggContainer";
import Form from "./Form";

//import array of pupil objects imported from our json file
import EggItemList from "./EggItemList.json";
import { useState } from "react";

function App() {
  //Create some state to keep track of array of egg item objects
  //Use the useState hook from react
  //Call the useState function
  //set the inital value (Initial value our empty array in EggItemList.json)

  //here we are destructuring the array
  const [eggItemObjects, setEggItemObjects] = useState(EggItemList);
  //Remove an item from the array (state)
  //React: immutably (change the copy of the DOM, not the original)
  //Delete function:
  //Input:
  //  Take in an id (parameter)
  //Output:
  //  (does not produce a value, it removes one)
  //Use setEggItemObjects to update the array (so that the particular egg item is removed)
  //Create a new, empty array
  //Loop over the existing EggItemObjects. For each object:
  //  If the current object's id matches the id that needs to be deleted:
  //    Don't add it to the new array
  // Otherwise:
  //    Add the object to the new array

  function deleteEggItemObjectById(idToDelete) {
    setEggItemObjects((prev) => {
      return prev.filter((obj) => obj.id !== idToDelete);
    });
  }

  function addEggItem(eggItemObject) {
    setEggItemObjects((prev) => {
      const created = {
        id: window.crypto.randomUUID(),
        name: eggItemObject.name,
        count: 0
      };
      const appended = prev.concat(created);
      return appended;
    })
  }

  return (
    <>
      <Header className="header"/>
      <Form className="form" addEggItem={addEggItem} />
      <EggContainer className="eggContainer"
        deleteEggItemObject={deleteEggItemObjectById}
        eggItemObjectsList={eggItemObjects}
      />
      <Footer className="footer" />
    </>
  );
}

export default App;
