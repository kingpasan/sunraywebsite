import React from 'react'
import { languagesList } from '../constants'
import { useSelector, useDispatch } from 'react-redux'
import { showModel, changeLanguage } from '../redux/langReducer'

const LanguagePopUp = () => {
    const isShow = useSelector((state) => state.languageModel.modelShow)
    const dispatch = useDispatch()

    const handleLangClick = (langModel) => {
        dispatch(changeLanguage(langModel))
        dispatch(showModel(false))
    }

    return (
        <>
            {isShow ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-primary">
                                        Select Language
                                    </h3>
                                    <button className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => dispatch(showModel(false))}>
                                        <span className="bg-transparent text-primary  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <div className='flex flex-wrap justify-evenly'>
                                        {languagesList.map((lan, index) => (
                                            <div key={index} className={`p-5 mb-2 text-primary hover:text-white hover:bg-primary rounded-lg text-center`} onClick={() => handleLangClick(lan.langModel)}>
                                                <div className='w-[32px] h-[32px]'>
                                                    <img src={lan.img} alt={lan.title} />
                                                </div>
                                                <h2 className='mt-1'>{lan.title}</h2>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default LanguagePopUp