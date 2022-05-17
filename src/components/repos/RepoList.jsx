import React, { useState, useEffect, useContext } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

import RepoItem from './RepoItem'

const RepoList = ({ repos }) => {
  const [displayRepo, setDisplayRepo] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [sortType, setSortType] = useState('stars')
  const sortTypes = ['stars', 'forks', 'size']
  const getTopRepos = (type) => {
    const LIMIT = 10
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    }
    const sortProperty = map[type]
    const sorted = repos
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT)

    setDisplayRepo(sorted)
  }
  useEffect(() => {
    if (repos.length) {
      getTopRepos()
    }
  }, [])
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  console.log(dropdownOpen)
  const changeRepoSort = (sortType) => {
    setSortType(sortType)
    toggleDropdown()
  }
  useEffect(() => getTopRepos(sortType), [sortType])

  return (
    <>
      <div className='w-5/6 h-full mx-auto relative bottom-10'>
        <div className='flex justify-start items-center mb-10 xl:mx-16'>
          <h2 className='text-3xl font-bold'>Top Repos</h2>
          <span className='ml-3'>by</span>
          <div
            className={`btn btn-sm btn-ghost rounded-md ml-3 w-1/10 ${
              dropdownOpen && 'btn-active'
            }`}
            onClick={toggleDropdown}
          >
            {sortType}
            {dropdownOpen ? (
              <RiArrowDropUpLine fontSize={25} />
            ) : (
              <RiArrowDropDownLine fontSize={25} />
            )}
          </div>
          {dropdownOpen && (
            <div className='static'>
              <div className='ml-6 absolute z-10 left-45 top-9.1 stats stats-vertical rounded-md'>
                {sortTypes.map((type, i) => (
                  <div className='bg-light' key={i}>
                    <div
                      className='stat hover:bg-gray hover:text-slate-50 px-4 py-1.5 w-full hover:cursor-pointer'
                      onClick={() => changeRepoSort(type)}
                    >
                      {type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center gap-3 xl:mx-16'>
          {displayRepo.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default RepoList
