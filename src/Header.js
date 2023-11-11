import AppLogo from "./Images/AppLogo.png";
//props: none
//state: none
//renders jsx being returned
//

export default function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={AppLogo} alt="EggcellentAchievementsLogo" />
      <h1>Classroom Rewards Nest</h1>
    </div>
  );
}
