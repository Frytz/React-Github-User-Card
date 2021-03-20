import React from 'react';
// import { Container, Row, Col } from 'reactstrap';

export  const Header =  user  => {
 
    return(
  <>
    <h1 >{user.user.login}'s Github</h1>

  </>
    )
}