import Egghatch1 from "./Images/Egghatch1.png"

export default function EggItem(props) {
  const eggItemIndividual = props.eggItem;
  const deleteEggItemObject = props.deleteEggItemObject;
  console.log(eggItemIndividual);
  return (
    <div className="eggItem">
      <button className="crossButton" onClick={deleteEggItemObject}>
        X
      </button>
      <img src={Egghatch1} className="egg-item-logo" alt="egg"/>
      <h1>{eggItemIndividual.name}</h1>
    </div>
  );
}
