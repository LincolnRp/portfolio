import styled from 'styled-components'

export const DivContainerAbout = styled.div`
margin-left: 10%;
margin-top: 2%;
display: flex;
height: 280px;
width: 80vw;

`

export const DivContainAbout = styled.div`
height: 280px;
margin-left: 2%;

h1{
color: white;
margin-top: -1%;
height: 40px;
}

h2{
height: 40px;
color: white;
margin-top: -2%;

}

p{
height: 190px;
text-align: justify;
color: #BCBCBC;
display: flex;
flex-direction: column;
justify-content: space-between;
}

`
export const Social = styled.div`


img{
    margin-top: 2%;
    width: 24px;
    margin-right: 1%;
    &:hover{
        cursor: pointer;
    }

}

`

export const Lincoln = styled.img`

border-radius: 4px;

`