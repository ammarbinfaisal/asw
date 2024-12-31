import React from 'react';
import { Briefcase, ChevronDown, GraduationCap, LineChart, Pen, Book, Database } from 'lucide-react';

const Card = () => {
  const names = ['ABDUL', 'SAMAD', 'WANI'];

  return (
    <div className="max-w-2xl mx-auto min-h-screen flex flex-col p-6 xl:p-12">
      <div className="flex-1 flex flex-col gap-4">

        <div className="flex items-center justify-center gap-4 mb-16">
          {names.map((name, index) => (
            <React.Fragment key={name}>
              <span className="text-[#264653]">{name}</span>
              {index < names.length - 1 && (
                <div className="w-2 h-2 rounded-full bg-[#264653]" />
              )}
            </React.Fragment>
          ))}
        </div>
        <h1 className="text-3xl xl:text-6xl font-light text-[#264653]">
          Hello,<br />
          My name is <span className="font-medium">Abdul Samad</span>
        </h1>

        <div className="w-80 h-80 rounded-full overflow-hidden ml-auto">
          <img
            src="/pic.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 pb-8">
        <button className="px-6 py-2 rounded-full bg-white shadow-lg text-sm text-[#264653] hover:bg-[#264653] hover:text-white transition-colors">
          SCROLL DOWN
        </button>
        <ChevronDown className="animate-bounce text-[#264653]" />
      </div>
    </div>
  );
};

const Skills = ({ skills }) => (
  <div className="mb-8">
    <h2 className="text-sm font-medium mb-4 border-b border-[#264653] pb-1 text-[#264653]">SKILLS</h2>
    <div className="space-y-3">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center">
          <span className="w-32 text-sm text-[#264653]">{skill.name}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${index < skill.level ? 'bg-[#264653]' : 'bg-gray-200'
                  }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Specialties = ({ specialties }) => (
  <div>
    <h2 className="text-sm font-medium mb-4 border-b border-[#264653] pb-1 text-[#264653]">Specialties</h2>
    <div className="flex gap-6 mt-4">
      {specialties.map((specialty) => {
        const IconComponent = specialty.icon;
        return (
          <div key={specialty.name} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#264653] bg-opacity-20 flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-[#264653]" />
            </div>
            <span className="text-xs text-center text-[#264653]">{specialty.name}</span>
          </div>
        );
      })}
    </div>
  </div>
);

const TimelineItem = ({ title, period, company, type }) => (
  <div className="flex items-start gap-4">
    <div className="relative">
      <div className="absolute left-0 w-px h-full bg-[#264653] bg-opacity-20" />
      <div className="relative w-3 h-3 rounded-full bg-[#264653] mt-2" />
    </div>
    <div className="flex-1 pb-6">
      <h3 className="text-lg font-medium text-[#264653]">{title}</h3>
      <p className="text-sm text-[#e76f51] font-medium">{period}</p>
      <div className="mt-1">
        <span className="text-sm text-[#264653]">{company}</span>
        {type && (
          <>
            <span className="mx-2 text-[#264653] opacity-50">•</span>
            <span className="text-sm text-[#264653] opacity-75">{type}</span>
          </>
        )}
      </div>
    </div>
  </div>
);

const Timeline = ({ icon: Icon, title, items }) => (
  <div className="relative mb-8">
    <div className="flex items-center gap-4 mb-6">
      <Icon className="w-8 h-8 text-[#264653]" />
      <h2 className="text-xl font-semibold text-[#264653]">{title}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 20"
        className="h-5 ml-auto hidden xl:block"
      >
        <line x1="10" y1="10" x2="490" y2="10" stroke="#264653" strokeWidth="4" />
        <circle cx="10" cy="10" r="8" fill="#264653" />
      </svg>
    </div>
    <div className="pl-4">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const ResumeSection = () => {
  const experiences = [
    {
      title: 'Account Manager (Google Ads)',
      company: 'Engross Digital Marketing LLC',
      period: 'Present',
      type: 'Full-time'
    },
    {
      title: 'Content Writer',
      company: 'Freelance',
      period: 'Present',
      type: 'Part-time'
    },
    {
      title: 'Education Industry Professional',
      company: 'Various Institutions',
      period: '10+ years',
      type: 'Full-time'
    }
  ];

  const education = [
    {
      title: 'Digital Marketing Certifications',
      company: 'Google & Industry Training',
      period: 'Recent'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white bg-opacity-50 rounded-lg shadow-lg">
      <Timeline icon={Briefcase} title="Experiences" items={experiences} />
      <Timeline icon={GraduationCap} title="Education & Certifications" items={education} />
    </div>
  );
};

const Bio = () => (
  <div className="flex flex-col items-start justify-center p-4 xl:pl-12">
    <div className="w-full max-w-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" className='w-3/s'>
        <path
          d="M 20,20 Q 350,20 350,80"
          fill="none"
          stroke="#264653"
          strokeWidth="2"
        />
        {/* <circle at the end of the curve */}
        <circle cx="350" cy="80" r="4" fill="#264653" />
      </svg>
      <div className="rounded-3xl bg-white bg-opacity-50 shadow-lg p-8">
        <div className="max-w-2xl">
          <p className="text-sm text-[#264653]">
            Transitioning from a <span className="text-[#264653] font-medium">decade-long journey in education</span>,
            I'm now an <span className="text-[#264653] font-medium">Account Manager specializing in Google Ads</span> at
            Engross Digital Marketing LLC. I combine my analytical skills with creative digital marketing strategies
            to drive business growth and ROI for our clients. With expertise in keyword research, A/B testing, and
            data analysis, I'm passionate about staying ahead in this dynamic field while maintaining my commitment
            to educational causes through content writing and data-driven insights.
          </p>
        </div>
      </div>
    </div>
    <SkillsAndSpecialties />
  </div>
);

const ProfileCard = () => {
  const skills = [
    { name: 'Google Ads', level: 5 },
    { name: 'Digital Marketing', level: 5 },
    { name: 'Data Analysis', level: 4 },
    { name: 'Content Writing', level: 5 },
    { name: 'Education', level: 5 }
  ];

  const specialties = [
    { name: 'Digital Marketing', icon: LineChart },
    { name: 'Content Writing', icon: Pen },
    { name: 'Education', icon: Book },
    { name: 'Data Analysis', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f4a261] bg-opacity-50 text-[#264653]">
      <Card />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Bio />
        <ResumeSection />
      </div>
    </div>
  );
};

export default ProfileCard;

const SkillsAndSpecialties = () => {
  const skills = [
    { name: 'Google Ads', level: 5 },
    { name: 'Digital Marketing', level: 5 },
    { name: 'Data Analysis', level: 4 },
    { name: 'Content Writing', level: 5 },
    { name: 'Education', level: 5 }
  ];

  const specialties = [
    { name: 'Digital Marketing', icon: LineChart },
    { name: 'Content Writing', icon: Pen },
    { name: 'Education', icon: Book },
    { name: 'Data Analysis', icon: Database }
  ];

  return (
    <div className="max-w-md xl:ml-12 my-12">
      <Skills skills={skills} />
      <Specialties specialties={specialties} />
    </div>
  );
};