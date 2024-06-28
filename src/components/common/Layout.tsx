import { breakpoints } from "@/styles/media";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <LayoutWrapper>
          <Outlet />
        </LayoutWrapper>
      </Suspense>
    </div>
  );
};

export const AuthLayout: React.FC = () => {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <LayoutWrapper>
          <Outlet />
        </LayoutWrapper>
      </Suspense>
    </div>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  min-height: 100dvh;

  ${breakpoints.medium} {
    width: 100vw;
  }

  ${breakpoints.large} {
    width: 80vw;
  }
`;
