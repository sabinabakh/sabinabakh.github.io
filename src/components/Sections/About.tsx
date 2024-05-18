import classNames from 'classnames';
import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { description, aboutItems } = aboutData;
  return (
    <Section className="bg-dark" sectionId={SectionId.About}>
      <div className={classNames('col-span-1 flex flex-col gap-y-6')}>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold text-light">About me</h2>
          <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-4"> 
          {aboutItems.map(({ label, text, Icon }, idx) => (
            <li className="flex items-start" key={idx}>
              {Icon && <Icon className="h-5 w-5 text-light" />}
              <span className="text-sm font-bold text-light mr-2">{label}:</span> 
              <span className="text-sm text-gray-300">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
