import React from 'react'
import { NavLink } from 'react-router-dom'

const Workout = () => {
  return (
    <div>
      <div className="bg-white dark:bg-black h-full py-6 sm:py-8 lg:py-12">
        <h1 className='text-white'>WORKOUTS</h1>
        <div className="mx-auto max-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <NavLink to="/workout/1"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 1</span>
            </NavLink>

            <NavLink to="/workout/2"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src=" https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 2</span>
            </NavLink>

            <NavLink to="/workout/3"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 3</span>
            </NavLink>

            <NavLink to="/workout/4"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 4</span>
            </NavLink>

            <NavLink to="/workout/5"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 5</span>
            </NavLink>

            <NavLink to="/workout/6"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 6</span>
            </NavLink>

            <NavLink to="/workout/7"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 7</span>
            </NavLink>

            <NavLink to="/workout/8"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src=" https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b4000baa35ff5b02b9a8c_chris%20bumstead%20photo.jpeg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">workout 8</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workout
