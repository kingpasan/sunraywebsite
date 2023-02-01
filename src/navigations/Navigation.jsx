import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  HomePage,
  ServicePage,
  DestinationsPage,
  ContactUs,
  SriLankaPage,
  IndiaPage,
  BintanIslandPage,
  GeorgiaPage,
  IcelandPage,
  IndonesiaPage,
  KenyaPage,
  MaldivesPage,
  PortugalPage,
  SeychellesPage,
  SingaporePage,
  SolveniaPage,
  SpainPage,
  TanzaniaPage,
  ThailandPage,
  VietnamPage
} from '../pages'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/destinations' element={<DestinationsPage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/lk' element={<SriLankaPage />} />
        <Route path='/in' element={<IndiaPage />} />
        <Route path='/id-bn' element={<BintanIslandPage />} />
        <Route path='/ga' element={<GeorgiaPage />} />
        <Route path='/is' element={<IcelandPage />} />
        <Route path='/id' element={<IndonesiaPage />} />
        <Route path='/ke' element={<KenyaPage />} />
        <Route path='/mv' element={<MaldivesPage />} />
        <Route path='/pt' element={<PortugalPage />} />
        <Route path='/sc' element={<SeychellesPage />} />
        <Route path='/sg' element={<SingaporePage />} />
        <Route path='/si' element={<SolveniaPage />} />
        <Route path='/es' element={<SpainPage />} />
        <Route path='/tz' element={<TanzaniaPage />} />
        <Route path='/th' element={<ThailandPage />} />
        <Route path='/vn' element={<VietnamPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation