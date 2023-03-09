import React from 'react'
import { fl_uk } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { showModel } from '../redux/langReducer'
import { languagesList } from '../constants'

const LanguageNav = () => {
    const dispatch = useDispatch()
    const currentLang = useSelector((state) => state.languageModel.currentLangModel)
    return (
        <div className='cursor-pointer w-[32px] h-[32px]' onClick={() => dispatch(showModel(true))}>
            {
                languagesList.map((langs, index) => {
                    if (langs.langModel === currentLang) {
                        return <img key={index} src={langs.img} alt={langs.title} />
                    }
                })
            }
        </div>
    )
}

export default LanguageNav