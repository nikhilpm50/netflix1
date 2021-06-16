import React from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

import Rowpost from './Components/Rowpost/Rowpost'
import { orginals,action, Comedy, Romance, Horror, Documentaries } from './Urls';

function Files(props) {
    return (
        <div>
     <Navbar />
     <Banner />
     <Rowpost url={orginals} title='Netflix originals' />
     <Rowpost url={action} title='Action ' isSmall />
     <Rowpost url={Romance} title='Romance' isSmall />
     <Rowpost url={Comedy} title='Comedy' isSmall />
     <Rowpost url={Horror} title='Horror' isSmall />
     <Rowpost url={Documentaries} title='Documentaries' isSmall />
        </div>
    )
}

export default Files
