import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  position: relative;
  display: grid;
  grid-gap: 128px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  height: 400px;
  box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, 0.2);

  padding: 0 16px;

  @media (min-width: 728px) {
    padding: 0 40px;
  }
`;

const FooterTemplateItem = styled.div`
  width: 100%;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Caption = styled.span`
  position: absolute;
  bottom: 24px;
  width: 100%;
  text-align: center;
  color: #FFC145;
`;

export default () => (
  <FooterWrapper>
    <section>
      <FooterTemplateItem />
      <FooterTemplateItem />
      <FooterTemplateItem />
      <FooterTemplateItem />
    </section>

    <section>
      <FooterTemplateItem />
      <FooterTemplateItem />
      <FooterTemplateItem />
      <FooterTemplateItem />
    </section>

    <section>
      <FooterTemplateItem />
      <FooterTemplateItem />
      <FooterTemplateItem />
      <FooterTemplateItem />
    </section>

    <Caption>© 2019 Olga Vlasova | Frontend Crash Course | HSE</Caption>
  </FooterWrapper>
);
