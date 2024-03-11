import React from 'react'
import CategoryCard from './CategoryCard'
import {BsVectorPen, BsArrowUpRight,BsEmojiSunglasses,BsDatabase} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {PiMicrophoneStage,PiMusicNote,PiLightbulbBold,PiMoneyLight,PiChalkboardTeacherLight} from 'react-icons/pi'
import {MdOutlineBusinessCenter,MdOutlinePhotoCamera,MdOutlineHealthAndSafety} from 'react-icons/md'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0'>
        <h1 className='md:leadng-[72px]  text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
              <p className=' text-lg text-grey-600'>Various versions have evolved over the years, sometimes by accident,</p>
              <div className=' grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                <CategoryCard 
                    icons={<BsVectorPen size={30} />}
                    title={'Design'}
                />
                <CategoryCard 
                    icons={<TiHtml5 size={30} />}
                    title={'Development'}
                />
                <CategoryCard 
                    icons={<PiMicrophoneStage size={30} />}
                    title={'Marketing'}
                />
                <CategoryCard 
                    icons={<MdOutlineBusinessCenter size={30} />}
                    title={'Business'}
                />


                <CategoryCard 
                    icons={<BsEmojiSunglasses size={30} />}
                    title={'Lifestyle'}
                />
                <CategoryCard 
                    icons={<MdOutlinePhotoCamera size={30} />}
                    title={'Photography'}
                />
                <CategoryCard 
                    icons={<PiMusicNote size={30} />}
                    title={'Music'}
                />
                <CategoryCard 
                    icons={<BsDatabase size={30} />}
                    title={'Data Science'}
                />


                <CategoryCard 
                    icons={<PiLightbulbBold size={30} />}
                    title={'Personal Develop'}
                />
                <CategoryCard 
                    icons={<MdOutlineHealthAndSafety size={30} />}
                    title={'Health & Fitness'}
                />
                <CategoryCard 
                    icons={<PiMoneyLight size={30} />}
                    title={'Finance'}
                />
                <CategoryCard 
                    icons={<PiChalkboardTeacherLight size={30} />}
                    title={'Teaching'}
                />

              </div>

        </div>
    </div>
  )

}

export default Categories
