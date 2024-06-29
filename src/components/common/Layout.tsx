import { breakpoints } from "@/styles/media";
import React, { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "@/components/common/Header";

export const DefaultLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <LayoutWrapper>
      <Suspense fallback={"loading..."}>
        <LayoutContainer>
          <Header
            onClickLogo={() => {
              navigate("/");
            }}
            onClickMyPage={() => {
              navigate("/mypage");
            }}
          />
          <Layout>
            <Outlet />
          </Layout>
        </LayoutContainer>
      </Suspense>
    </LayoutWrapper>
  );
};

export const AuthLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Suspense fallback={"loading..."}>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </Suspense>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
`;
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  min-height: 100dvh;
  height: 100dvh;

  ${breakpoints.small} {
    width: 100vw;
  }

  ${breakpoints.medium} {
    width: 80vw;
  }

  ${breakpoints.large} {
    width: 60vw;
  }
`;

const Layout = styled.div`
  min-height: calc(100dvh - 60px);
`;
