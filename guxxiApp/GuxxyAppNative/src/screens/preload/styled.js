/**
 * Estilizações
 */

import React from 'react'
import styled from 'styled-components/native'
import {backgroundScreen} from '../../globals/index'

export const Container = styled.SafeAreaView`
    background-color: ${backgroundScreen};
    flex:1;
    justify-content:center;
    align-items:center;
`;