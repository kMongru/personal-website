import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

//styling
import './timeline.css';

const Timeline = ({ data }) => {
  return (
    <VerticalTimeline>
      {data.map((item) => {
        let Icon = require(`../../assets/${item.iconName}.svg`);
        return (
          <VerticalTimelineElement
            key={item.title}
            className='vertical-timeline-element--work'
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date='2011 - present'
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={Icon}
          >
            <h3 className='vertical-timeline-element-title'>{item.title}</h3>
            <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
            <p>{item.bodyText}</p>
          </VerticalTimelineElement>
          // <VerticalTimelineElement
          //   key={item.frontmatter.title}
          //   date={item.frontmatter.date}
          //   iconStyle={{
          //     background: item.frontmatter.background,
          //     color: item.frontmatter.foreground,
          //   }}
          //   icon={<Icon />}
          // >
          //   {/* <Typography variant='h5' className='vertical-timeline-element-title'>
          //     {item.frontmatter.title}
          //   </Typography>
          //   <Typography variant='h6' className='vertical-timeline-element-subtitle'>
          //     {item.frontmatter.subtitle}
          //   </Typography> */}
          //   <div dangerouslySetInnerHTML={{ __html: item.html }} />
          // </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
