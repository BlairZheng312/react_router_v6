import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./component/Header";

export default function App() {
  function activeClassName({isActive}) {
    return isActive ? "list-group-item demo" : "list-group-item"
  }

  const element = useRoutes(routes)

  return (
    <div>
      <div className="row">
        <Header/>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={activeClassName} to="/about">About</NavLink>
            <NavLink className={activeClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
            {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

