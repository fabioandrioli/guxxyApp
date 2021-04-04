/** 
 * screens 
 * 
 * */

import React from 'react'
import {Container} from './styled'
import {Text} from 'react-native'

import GuxxyLogo from '../../assets/guxxy.svg'


const Preload = () => {
    return(
        <Container>
            <GuxxyLogo with="100%" height="160" />
        </Container>
    );
}

export default Preload;