import list from "../../public/list.json"
import { Link } from 'react-router-dom'
import Card from "./Card"
const Courses = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 justify-center items-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We proudly say that we stand <span className='text-[#00A385]'>with the students..</span> </h1>
          <p className='mt-6 md:mt-12'>Every expert developer once struggled with their first line of code and every mistake became a step toward mastery.We make that journey simpler   and proudly stand <span className='text-[#00A385]'>with students learning without fear..</span></p>
          <button className='btn mt-6 bg-[#00A385] text-white'><Link to={'/'} >Back to Home</Link></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {
            list.map((items)=>(
              <Card key={items.id} items={items} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Courses
