import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <IconWrapper>
        <Icon id="shopping-bag" strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 8px 32px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export default SuperHeader;
