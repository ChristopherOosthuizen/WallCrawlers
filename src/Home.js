import React from "react";
import uh from './uh.jpg';
import rock from './rock.PNG';

class Home extends React.Component{
    render() {
        return(
            <div class="bg-indigo-300 ">
            
            <h2 class="absolute text-uh-white left-1/4 top-1/8">
            <img src={rock} class="object-contain object-center h-1/2 w-1/2 "/>
                The Rock Wranglers
                </h2>
            <img src={uh} class="object-fill object-center h-550 w-750 "/>
            </div>
        );
    }
}

export default Home;