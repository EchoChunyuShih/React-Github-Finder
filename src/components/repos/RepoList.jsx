import React from 'react'

import RepoItem from './RepoItem'

const RepoList = ({ repos }) => {
  return (
    <>
      <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className='card-body w-full'>
          <h2 className='text-3xl font-bold my-4 card-title'>
            Latest Repositories
          </h2>
          <div className='grid grid-cols-3 items-center gap-3'>
            {repos.map((repo) => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default RepoList
