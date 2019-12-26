import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

interface PageProps {
  title: string,
  children: React.ReactNode,
};

const ChildrenWrapper = styled.div`
  padding: 16px;

  @media (min-width: 728px) {
    padding: 40px;
  }
`;

export default (props: PageProps) => {
  const { title, children } = props;

  return (
    <div id="root">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>

      <Footer />

      <style jsx global>{`
        @import url('https://rsms.me/inter/inter.css');
        @supports (font-variation-settings: normal) {
          html {
            font-family: 'Inter var', sans-serif;
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          background: none;
          outline: none;
          border: none;
        }

        button {
          cursor: pointer;
        }

        html {
          -webkit-font-smoothing: antialiased;
          background-color: #313233;
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};
