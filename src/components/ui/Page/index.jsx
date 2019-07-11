import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageContainer = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 1em;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    background: #fff;
    border-radius: 2px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
`;

const PageHead = styled.div`
    min-height: 3em;
    margin-bottom: -1px;
    padding: 0 1.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 2px 2px 0 0;
    zoom: 1;

    &::before {
        content: '';
        display: table;
    }    
`;

const PageHeadWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
`;

const PageHeadTitle = styled.div`
    display: inline-block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 16px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const PageBody = styled.div`
    padding: 1.5em 2em;
    zoom: 1;
`;

export default function Page({ children, title }) {

    return (
        <PageContainer>
            <PageHead><PageHeadWrapper><PageHeadTitle>{title}</PageHeadTitle></PageHeadWrapper></PageHead>
            <PageBody>{children}</PageBody>
        </PageContainer>
    )
}

Page.propTypes = {
    children: PropTypes.object,
    title: PropTypes.string,
};

Page.defaultProps = {
    children: {},
    title: '',
};