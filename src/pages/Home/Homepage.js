import React from 'react'
import ContactSection from '../../components/HomePage/Contact';
import FrameworkSection from '../../components/HomePage/FrameWork';
import HeroSection from '../../components/HomePage/HeroSection';
import HowItWork from '../../components/HomePage/HowItWorkSection';
import withLayout from '../../layout/withLayout'

function Framework() {

}

function ModelLists() {

}

function Contact() {

}

function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWork />
      <FrameworkSection />
      <ContactSection />
    </>
   )
}

export default withLayout(HomePage);