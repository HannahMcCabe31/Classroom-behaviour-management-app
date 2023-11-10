export default function EggItem(props) {
  const eggItemIndividual = props.eggItem;
  const deleteEggItemObject = props.deleteEggItemObject;
  console.log(eggItemIndividual);
  return (
    <div className="eggItem">
      <button className="crossButton" onClick={deleteEggItemObject}>X</button>
      <h1>{eggItemIndividual.name}</h1>
    </div>
  );
}
