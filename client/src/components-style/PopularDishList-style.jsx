import styled from 'styled-components';

export const Slider = styled.div`
    left: 50px;
    float: left;
    width: 615px;
    position: relative;
    height: 225px;
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;  
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }   
`;

export const Slide = styled.div`
    width: 190.5px;
    flex-shrink: 0;
    height: 90%;
    padding-right: 8px;
    padding-left: 8px;
    transition: transform .5s ease; 
    div {
        scroll-snap-align: start;
        cursor: pointer;
    }
`;

export const GoLeft = styled.button`
    left: 40px;
    border: .5px solid #e6e6e6;
    border-radius: 30px;
    background-image: url('/leftarrow.png');
    background-position: 45% 45%;
    background-size: 45px 45px;
    height: 35px;
    width: 35px;
    outline-width: 0;
    &:hover {
        box-shadow: 12px 0 15px -6px rgba(31, 73, 125, 0.8), -12px 0 8px -6px rgba(31, 73, 125, 0.8);
    }
`;

export const GoRight = styled.button`
    left: 663px;
    border: .5px solid #e6e6e6;
    border-radius: 30px;
    background-image: url('/arrow.png');
    background-position: 45% 40%;
    background-size: 45px 45px;
    height: 35px;
    width: 35px;
    outline-width: 0;
    &:hover {
        box-shadow: 12px 0px 15px -6px rgba(31, 73, 125, 0.8), -12px 0px 8px -6px rgba(31, 73, 125, 0.8);
    }
`;

export const NextDish = styled.button`
    position: absolute;
    right: -580px;
    font-size: 15px;
    color: white;
    background-color: transparent;
    margin-top: 311px;
    border: none;
    outline-width: 0;
    &:hover {
        text-decoration: underline;
    }
`;


export const LastDish = styled.button`
    position: absolute;
    font-size: 15px;
    color: white;
    background-color: transparent;
    left: -585px;
    margin-top: 311px;
    border: none;
    outline-width: 0;
    &:hover {
        text-decoration: underline;
    }
`;

export const DishArrowRight = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border-top: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg);
    margin-top: -15px;
    right: -10px;
`;

export const DishArrowLeft = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border-top: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(225deg);
    margin-top: -15px;
    left: -10px
`;