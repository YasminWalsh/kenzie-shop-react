import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
        list-style: none;
        
    }

    :root{
        
        --gray0 : rgba(248, 249, 250, 1);
        --gray1:rgba(134, 142, 150, 1);
        --gray2: rgba(52, 59, 65, 1);
        --gray3:rgba(33, 37, 41, 1);
        --gray4: rgba(18, 18, 20, 1);        
        --pink: rgba(255, 87, 127, 1);
        --pinkFocus: rgba(255, 66, 127, 1);
        --greenAqua: rgb(5, 209, 175,1);
        --greenAquaLight:rgb(173, 245, 233,1);
        --purpleDark: rgb(115, 62, 180,1);
        --purpleLight:rgb(190, 139, 253,1)
        
        
    }

    body{
        background-color: var(--gray3);
    }

    

    


`;
export default globalStyle;
