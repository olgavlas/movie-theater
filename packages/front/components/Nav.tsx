import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavWrapper = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #414243;
  
  padding: 0 16px;

  @media (min-width: 728px) {
    padding: 0 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  margin-right: 32px;
`;

const InputPlaceholder = styled.div`
  width: 256px;
  height: 40px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const AccountPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default () => (
  <NavWrapper>
    <LeftColumn>
      <Link href="/">
        <StyledLogo src="/logo.svg" />
      </Link>

      <InputPlaceholder />
    </LeftColumn>

    <AccountPlaceholder />
  </NavWrapper>
);
