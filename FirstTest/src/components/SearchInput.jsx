import React from 'react'

const SearchInput = ({ filter, onFilterChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Filter by first name..."
        value={filter}
        onChange={onFilterChange}
      />
    </form>
  )
}

export default SearchInput
