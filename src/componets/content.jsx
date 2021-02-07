import React from "react"
import { Route, Switch} from "react-router-dom"

import About from "../viewers/about"
import Artigo from "../viewers/artigo"
import Home from "../viewers/home"
import UtilizandoParametro from "../viewers/UtilizandoParametro"
function Content(){
    return(
    <main>
        <Switch >
            <Route exact path="/" component={Home} />            
            <Route  path="/about" component={About}/>                
            <Route path="/content" component={Artigo}/>   
            <Route path="/UtilizandoParametro/:texto" component={UtilizandoParametro}/>                        
            <Route path="/UtilizandoParametro/" component={UtilizandoParametro} />        
            <Route Redirect="*" component={Home}/>
        </Switch >
    </main>
    )
}
export default Content