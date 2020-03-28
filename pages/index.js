import React, { Component } from "react"
import { useState, useEffect } from "react"
import Stats from "../components/Stats"
import CountrySelector from "../components/country"

const IndexPage = () => {
  return (
    <div>
      <Stats url="https://covid19.mathdro.id/api/" />
      <CountrySelector />
    </div>
  )
}

export default IndexPage
