import React from 'react';
import styled from 'styled-components';

export default function Footer(){
  const currentYear = new Date().getFullYear();
  return(
    <FooterWrapper>
          <span>© {currentYear} EVENT</span>
          <div className="cta-icons">
            <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
            <a href="https://twitter.com/"><i className="fab fa-twitter" /></a>
            <a href="https://en-gb.facebook.com/"><i className="fab fa-facebook-f" /></a>
          </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #333;
    padding: 2.5rem;
    span {
      color: #f2fcff;
      position: absolute;
      opacity: 0.7;
      left: 0;
      right: 0;
    }
  .cta-icons {
    display: flex;
    justify-content: flex-end;
    a {
      padding: 0 1.5rem;
      color: #f2fcff;
      opacity: 0.7;
      z-index: 3;
      &:hover {
        color: #07a0c3;
        cursor: pointer;
        transition: 0.3s ease;
        opacity: 1;
      }
    }
  }
`;