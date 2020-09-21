import React from 'react';
import { ProgressContainer, CoolBox } from './Progress.styles';

export default function Progress() {
    return (
        <ProgressContainer>
            <CoolBox delay={0}/>
            <CoolBox delay={200}/>
            <CoolBox delay={400}/>
            <CoolBox delay={800}/>
        </ProgressContainer>
    )
};