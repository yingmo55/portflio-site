import React from 'react';
import './ProjectShowcase.css';
import Project from '../Project/Project';
import { projects } from '../../Util/ProjectDetails/ProjectDetails';

function ProjectShowcase () {

    return (
        <section id="projectShowcase">
          <h2 tabindex="0">Projects</h2>
          <h3 tabindex="0"> Recent Works</h3>
            <p className='recentWorks'>Responsive static website for a local business</p>
            <p className='recentWorks'><a href="https://adobeid-na1.services.adobe.com/ims/jump/eyJraWQiOiJpbXNfbmExLWtleS1hdC0xIiwiYWxnIjoiUlMyNTYifQ.eyJqdGkiOiIxNjQ3MzYzNDgzMjgwX2MxOWEyNTZhLWI4MjktNDBhNi1iOWQ2LWQ0NzFlMDliNTg4NF91ZTEiLCJjaWQiOiJDb21ldFdlYjEiLCJ1aWQiOiI1MDI2RjI4QjU1NDdCMEY1MEE0Qzk4QTVAQWRvYmVJRCIsInJ1IjoiaHR0cHM6Ly94ZC5hZG9iZS5jb20vdmlldy9jYTkxOGM2OS05MjMzLTQ1YzctNTEyMC0yNDZkOGNlYWNhY2MtYmNhMC8iLCJydCI6InRva2VuIiwiY2UiOiJBYTN2bzZmOVV5eTRPYUl1S3B1WEVPVU82emNCTnh6ay1CYzJJQW5mNDU2UGlqeGhxQjgyQXNIM1BOdk5uUi0waVphanNENjNCVWVvMHJkVWx1QXR6NDJFRUI2MEpJQmloMGdNSHFnNm00M21IZyIsImV4cCI6MTY0NzM2NDM4MzI4MCwicmYiOiJXSVlRVkRUT1ZMRTVJUFVDTU1RRlJIUUEyUT09PT09PSIsInNpcCI6IjE4M2Q4OTMxIiwiZHRpZCI6IjE2MzE2ODAwOTc1MTZfMGFjZWNlZmItYmJmMS00ZjkxLTk4NTctNGFmMGMwYmU0ZGVjX3VlMSIsImlzcyI6Imh0dHBzOi8vaW1zLW5hMS5hZG9iZWxvZ2luLmNvbSJ9.S9bsLlTSEcfI18mN7lvHHAEHKmMBJXA2BrM7CmIXp4opvBOul4I8fJxAqD-pALb6V3hwDTVWUlzTOJnSoxDlNx83L9AyZJSuxvPVhzhYZvpCoFXGHjAqy_kG4ca3NYbx_vzNH70EwCeEu6YTt1IHpCO8APwdkwTcAefeJwKPGG7cur6kihzlPljusihTXW7AZ24wOvRqujIp71CqrgP1AiofyJ_uc0Vp7lFxcbvh2RfjzDwzgeI2MyqTpb2PQZdHrdsbIIqMQ7VQoPoS7P07MGdRpkoYUpMOhcBap9sEKj52f-jLhQUFvXAoY_NhA4RNoFakpvkAhsKq6PSL15hbYg">Prototype</a></p>
          <h3 tabindex="0">Previous Works</h3>
          <div id="showcase">
          {  projects.map(project => 
                <Project title={project.title} 
                         src={project.src} 
                         desc={project.shortDescription} 
                         tech={project.tools}
                         liveLink={project.liveLink}
                         codeLink={project.codeLink}
                         key={project.title} />
                )}
          </div>
      </section>
    )
}

export default ProjectShowcase;