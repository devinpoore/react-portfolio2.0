import React from 'react';

import './style.css';

export default function Portfolio(props) {
    return (
        <div>
            
            <h6 style={{ "color": props.themeHex }}>Background</h6>
            <p>
                Perhaps it's a bit indulgent (or recursive) to post my portfolio as a project on my portfolio. However,
                I spent a fair amount of time contemplating how a really functional portfolio might look and behave
                so I mostly want to discuss how this particular project took shape and what my takeaways were.
            </p>

            <h6 style={{ "color": props.themeHex }}>Project Philosophy</h6>
            <p>
                I think part of being a good developer is spending the time to give some thought towards the
                question of "What is the point/goal of a project?".
            </p>

            <p>
                As in most things, knowing the nature of the destination is a decent strategy for building the roadmap to get there.
            </p>
                
            <p>
                To me, it seems the goal of a portfolio is to
                provide easily accessible insight into the capabilities of a developer via the projects they have built or helped to build,
                but also, importantly, into the thought process of a developer.
            </p>

            <p>
                I have been spending a lot of time looking at job applications. Most of them ask for some combo of links to the applicant's
                GitHub, LinkedIn, and personal website -
                <ul>
                    <li>GitHub is a showcase of the hard technical skills and pure code.</li>
                    <li>LinkedIn is a summary of work experience and accomplished projects.</li>
                </ul>
                It struck me that there was a relevant middle ground being missed somewhere between these two "extremes" - somewhere where
                technical knowledge could be displayed alongside a summary of the motivation that was guiding how that technical knowledge
                was being put to use, as well as the skills gained or strengthened while working on a given project.
            </p>

            <p>
                As my ultimate goal here is to land a developer job, it seemed prudent to design an application to show off the work I've
                done that could itself also serve as an example of my work - and an example I'm proud of.
            </p>

            <p>
                I have probably spend too much time obsessing over and trying to perfect my portfolio 
            </p>

            <h6 style={{ "color": props.themeHex }}>Lessons Learned</h6>

            <h6 style={{ "color": props.themeHex }}>Going Forward</h6>
            <p>
                Mobile responsive, clean up/refactor components, finish readme on front and backend repos, clean up/refactor css for dark/light mode functionality,
                building a framework to easily/dynamiclly add content and new projects to portfolio, maybe a blog component too
            </p>



        </div>
    )
}
