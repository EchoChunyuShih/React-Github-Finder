import { FaEye, FaInfo, FaStar } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { VscRepoForked, VscRepo } from 'react-icons/vsc'
import { IoMdStar } from 'react-icons/io'

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    language,
  } = repo
  //conditional colors
  const lang_color = (language) => {
    const lang_colors = {
      JavaScript: 'bg-amber-300',
      PHP: 'bg-sky-700',
      HTML: 'bg-orange-600',
      CSS: 'bg-indigo-700',
      TypeScript: 'bg-cyan-700',
      Python: 'bg-blue-500',
      Vue: 'bg-emerald-700',
    }
    const color = lang_colors[language]
    return color
  }

  return (
    <div className='mb-2 shadow-md rounded-md bg-slate-300  px-4 py-4 h-full flex flex-col justify-between  hover:cursor-pointer hover:bg-slate-700 transition duration-400 ease-out hover:ease-in'>
      <a
        href={html_url}
        rel='noreferer'
        target='_blank'
        className='flex items-center justify-start hover:underline hover:text-blue-400'
      >
        <VscRepo className='mr-1' />
        <h3 className='mb-1 text-lg font-semibold truncate '>{name}</h3>
      </a>

      <em className='text-sm my-1'>{description}</em>

      <div className='flex w-1/3 justify-between items-center'>
        {/* <div className={repo_info}>
          <FaEye className='mr-2' />
          {watchers_count}
        </div> */}
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
          {stargazers_count}
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
    </div>
  )
}
const repo_info = 'mr-3 flex items-center'
export default RepoItem
