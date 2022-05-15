import { useContext } from 'react'
import { VscRepoForked, VscRepo } from 'react-icons/vsc'
import { IoMdStar } from 'react-icons/io'

import GithubContext from '../../context/github/GithubContext'

const RepoItem = ({ repo }) => {
  const { IntergerFormatter } = useContext(GithubContext)
  const {
    name,
    description,
    html_url,
    forks,
    stargazers_count,
    language,
    size,
  } = repo
  //conditional colors

  const lang_color = (lang) => {
    const lang_colors = {
      JavaScript: 'bg-amber-300',
      PHP: 'bg-sky-700',
      HTML: 'bg-orange-600',
      CSS: 'bg-indigo-700',
      TypeScript: 'bg-cyan-700',
      Python: 'bg-blue-500',
      Vue: 'bg-emerald-700',
      'C++': 'bg-pink-500',
      Haxe: 'bg-orange-400',
      Scala: 'bg-red-700',
      Shell: 'bg-green-300',
      Java: 'bg-yellow-800',
      Perl: '',
      Lua: '',
    }
    return lang_colors[lang]
  }

  return (
    <div className='mb-2 shadow-md rounded-md bg-slate-300  px-4 py-4 h-full flex flex-col justify-between hover:cursor-pointer hover:bg-slate-700 transition duration-400 ease-out hover:ease-in'>
      <a
        href={html_url}
        rel='noreferer'
        target='_blank'
        className='flex items-center justify-start hover:underline hover:text-blue-400 text-slate-700  text-xl mono'
      >
        <VscRepo className='mr-1' />
        <h3 className='mb-1 text-lg font-semibold truncate'>{name}</h3>
      </a>

      <em className='text-sm my-1 text-slate-600'>{description}</em>

      <div className='flex w-full justify-between items-center text-slate-600 text-sm'>
        <div className='flex w-2/3 justify-start items-center text-slate-600 text-sm'>
          {language && (
            <div className='flex justify-start items-center mr-3'>
              <div
                className={`w-2 h-2 rounded-full ${lang_color(language)} mr-2`}
              ></div>
              <div>{language}</div>
            </div>
          )}
          <div className={repo_info}>
            <IoMdStar className='mr-1' />
            {IntergerFormatter(stargazers_count)}
          </div>
          {/* <div className={repo_info}>
          <FaInfo className='mr-2' />
          {open_issues}
        </div> */}
          <div className={repo_info}>
            <VscRepoForked className='mr-1' />
            {forks}
          </div>
        </div>
        <div className={repo_info}>
          <div className='flex'>{IntergerFormatter(size)} KB</div>
        </div>
      </div>
    </div>
  )
}
const repo_info = 'mr-3 flex items-center'
export default RepoItem
