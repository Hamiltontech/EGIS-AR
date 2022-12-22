import React from 'react'
import GOV from '../../public/data/Governorate.json'

const Search = () => {
  return (
    <div className=''>
      <form>
        <input type="radio" name="searchByGovArea" value="0" checked onchange="areasGovFill(1)"/>
      Governate
      <input type="radio" name="searchByGovArea" value="1" onchange="areasGovFill(2)"/> Area
      <select id="areasGovDDL" placeholder="Search Project Name" onchange="radioarButtonChange()">
        </select>
      </form>
    </div>
  )
}

export default Search
