import React, { Component } from "react"
import { useState, useEffect } from "react"
import Stats from "../components/Stats"
import CountrySelector from "../components/country"
import styled from "styled-components"
import MyDocument from "../pages/_document"

const Header = styled.div`
  font-size: 4rem;
  text-align: center;
  margin: 3rem 0 3rem 0;
  color: #984b43;
`
const Global = styled.div`
  background-image: url("../styles/coronavirus.jpg");
`

const IndexPage = () => {
  return (
    <Global>
      <Header>COVID-19</Header>
      <h2 className="world-header">In the World</h2>
      <Stats url="https://covid19.mathdro.id/api/" />
      <CountrySelector />
    </Global>
  )
}

export default IndexPage
