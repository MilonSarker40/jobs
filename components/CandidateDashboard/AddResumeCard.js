import React from 'react';
import ContactForm from './ContactForm';
import EducationForm from './EducationForm';
import ResumeForm from './ResumeForm';
import SkillsForm from './SkillsForm';
import WorkForm from './WorkForm';

const AddResumeCard = () => {
  return (
    <>
      <ResumeForm />
      <EducationForm />
      <WorkForm />
      <SkillsForm />
      <ContactForm />
    </>
  )
}

export default AddResumeCard
