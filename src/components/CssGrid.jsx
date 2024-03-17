import {data} from '../assets/data'

function CssGrid() {

    const boxStyle =
    'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center';

  return (
    <div className='grid md:grid-cols-3 px-10 auto-rows-[300px] gap-4 my-10'>
      {data.map((item, i) => (
        <div 
        key={i} 
     className={`${boxStyle} ${ i === 3 || i === 6 ? 'md:col-span-2' : ''}`} 
        >
            <h2 className='text-xl text-gray-600'>{item.title}</h2>
            <p className='font-bold text-2xl'>{item.value}</p>
        </div>
      ))}
    </div>
  )
}

export default CssGrid
