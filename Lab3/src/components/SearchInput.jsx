import React from 'react'

const SearchInput = ({ filter, onFilterChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Filter by title..."
        value={filter}
        onChange={onFilterChange}
      />
    </form>
  )
}

export default SearchInput
