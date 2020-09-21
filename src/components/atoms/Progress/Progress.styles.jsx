import { styled } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

export const ProgressContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    animationDelay: '1s',
    position: "fixed",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
// align - items
// :
// center;
// overflow: hidden;
// animation - delay
// :
// 1
// s;
// position: fixed;
// top: 0;
// left: 0;
// width: 100 %;
// height: 100 %;

});

// const coolBoxKeyframes = keyframes`
//   0% {
//     height: 0px;
//     width: 0px;
//   }
//   25% {
//     opacity: 0.5;
//   }
//   50% {
//     height: 20px;
//     width: 20px;
//     opacity: 1;
//   }
//   75% {
//     opacity: 0.5;
//   }
//   100% {
//     height: 0px;
//     width: 0px;
//   }
// `

export const CoolBox = styled(Box)({
    margin: '5px',
    display: "inline-block",
    backgroundColor: '#03A9F9',
    position: "relative",
   // animation: `$coolBoxKeyframes 1200ms ${theme.transitions.easing.easeInOut} `

//     margin: 5px;
// display: inline - block;
// background - color
// :
// #03
// A9F9;
// position: relative;
// animation: ${coolBoxKeyframes} 1200
// ms
// ease - in -out ${props => props.delay}
// ms
// infinite;
// border - radius
// :
// 50 %;
});