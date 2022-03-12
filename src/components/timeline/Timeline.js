import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import * as MaterialDesign from 'react-icons/md';
import * as FontAwesome from 'react-icons/fa';

import Button from '../button/Button';

//styling
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

const dict = {
  Fa: FontAwesome,
  Md: MaterialDesign,
};

const Timeline = ({ data }) => {
  return (
    <VerticalTimeline>
      {data.map((item) => {
        const iconRef = item.iconName;
        const icon = MaterialDesign[iconRef];

        return (
          <VerticalTimelineElement
            key={item.id}
            date={item.date}
            dateClassName='timeline-date'
            iconStyle={{ background: item.iconBg, color: '#fff' }}
            icon={React.createElement(icon)}
          >
            <h3 className='vertical-timeline-element-title'>{item.title}</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              {item.organization}
            </h4>
            <p id='description'>{item.description}</p>
            {item.buttons &&
              item.buttons.map((button) => (
                <Button link={button.link} text={button.name} />
              ))}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
