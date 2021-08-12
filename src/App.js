import Home from './component/Home/index'

import { Route, Switch } from "react-router-dom";
function App() {
 return (
   <div>
     <Switch>
       <>
         <Route exact path="/" component={Home} />
        
       </>
     </Switch>
   </div>
 );
}

export default App;