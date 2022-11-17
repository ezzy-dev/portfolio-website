import React from "react";
import "./ProjectTwo.scss";
import brainstorm1 from "../../../assets/images/project-two/brainstorm 1-1.jpg";
import brainstorm2 from "../../../assets/images/project-two/brainstorm 2-1.jpg";
import brainstorm3 from "../../../assets/images/project-two/brainstorm 3-1.jpg";
import interface1 from "../../../assets/images/project-two/interface 1-1.jpg";
import interface2 from "../../../assets/images/project-two/interface 2-1.jpg";

function ProjectTwo(): JSX.Element {
  return (
    <div className="project-two">
      <h1 className="project-two__header">Project 2 - Redesigning Canvas</h1>
      <div className="project-two__pre-design">
        <h2 className="project-two__subheading">1. Pre-Design</h2>
        <div className="project-two__choosing-a-theme">
          <h3 className="project-two__super-subheading">Choosing a theme</h3>
          <p>
            For our Alterna-Canvas project, we have decided to go with Theme 1:
            the motivational and organizational tool for students. We decided to
            choose this theme because we felt it was both interesting and it
            resonated with both of us. We both felt that having a way to better
            organize material and motivate students to complete their
            assignments in a more timely manner would be a feature that we would
            both strongly utilize. After doing some brainstorming about the
            design requirements for our Alterna-Canvas, we came up with the
            following notes:
          </p>
          <ul className="project-two__list">
            <li>
              More ways to show progress throughout each assignment and
              throughout each course
            </li>
            <li>
              A calendar that shows due dates for all assignments in each course
              (potentially with some kind of filtering implemented)
            </li>
            <li>
              A course summary of all grades across all classes (both on a
              per-assignment basis and a full course basis).
            </li>
            <li>A way to group similar assignments</li>
            <li>
              A method to hide features or not personally useful to you or to
              modify their order
            </li>
            <li>
              Some personal motivation on the home screen -- this includes
              things like a print out of all completed assignments, a print out
              of what week you are in, and a randomly generated motivational
              quote.
            </li>
            <li>A way to see your advisors and their contact information</li>
          </ul>
        </div>
        <div className="project-two__research-pre-design-prep">
          <h3 className="project-two__super-subheading">
            User Research, Pre-Design Preparation
          </h3>
          <p>
            We are doing research for this project because we would like to find
            out what users do and don’t like about the current rendition of
            Canvas. We are hoping to learn what motivates students to finish
            their work and not procrastinate, and we would like to understand
            how students prefer to organize their material. Below is a list of
            research questions we generated based on our design requirements
            above and our research goals. Questions in boldface are our key
            questions – the questions we believe are the most important to ask
            to the interviewees.
          </p>
          <ul className="project-two__list">
            <li>
              <b>What is your experience with using Canvas?</b>
            </li>
            <li>
              <b>
                How do you feel about the organizational tools currently
                available in Canvas?
              </b>
            </li>
            <li>
              Do you use any of the orgazional tools in Canvas? If so, which
              ones?
            </li>
            <li>Do you feel that Canvas is good at motivating students?</li>
            <li>
              <b>
                Is there any additional content you would like to see in Canvas?
              </b>
            </li>
            <li>
              <b>What personally motivates you to get work done?</b>
            </li>
            <li>
              What strategies do you use to get work done in a timely manner?
            </li>
            <li>
              <b>
                What kind of tools do you personally use to organize your work?
              </b>
            </li>
            <li>
              <b>
                Rate the following features on a scale from 1-5 (1 being the
                lowest):
              </b>
            </li>
            <ul className="project-two__sublist">
              <li>
                A calendar that shows due dates for all assignments in each
                course
              </li>
              <li>A course summary of all grades across all classes</li>
              <li>A way to group similar assignments</li>
              <li>
                A method to hide features or not personally useful to you or to
                modify their order
              </li>
              <li>A way to see your advisors and their contact information</li>
            </ul>
          </ul>
        </div>
        <div className="project-two__interview-prep">
          <h3 className="project-two__super-subheading">
            Interview Preparation
          </h3>
          <p>
            We both felt that the first set of interviews (from project 1) were
            somewhat tough simply because neither of us had ever conducted an
            interview like that before. We felt that asking simple, direct
            questions worked well and believe that “why” questions got the most
            response out of individuals. After considering this, we were able to
            generate the following list of interview questions:
          </p>
          <ol className="project-two__list">
            <li>
              What do you like and dislike about Canvas? (As a follow up) What
              is your reasoning behind your thoughts?
            </li>
            <li>What do you personally do to organize your school work?</li>
            <li>
              Do you think the organization of Canvas could be improved upon?
            </li>
            <li>What motivates you to complete assignments?</li>
            <li>Are there any tools that help you from procrastinating?</li>
            <li>
              If you could add any feature to Canvas, what would it be? Why?
            </li>
            <li>What parts would you like the ability to customize?</li>
          </ol>
        </div>
        <div className="project-two__interview-prep">
          <h3 className="project-two__super-subheading">Contextual Inquiry</h3>
          <p>
            For the contextual inquiry, we both feel the best way to conduct
            this procedure would be to hop in an online call with 2 or 3
            individuals and have them walk through their daily routine on Canvas
            while sharing their screen. One thing that we are concerned about is
            not taking enough notes, and to ensure this doesn’t happen we plan
            on taking as many notes as possible and then whittling them down
            after each inquiry. To elicit interesting findings, we plan on first
            having the user go through their daily routine, and then asking them
            to perform the following operations:
          </p>
          <ul className="project-two__list">
            <li>Checking their grades</li>
            <li>Checking their current assignments</li>
            <li>Looking into an individual assignment for details</li>
            <li>Submitting an assignment</li>
          </ul>
        </div>
      </div>
      <div className="project-two__research-and-sketching">
        <h2 className="project-two__subheading">
          2. Research Findings and Sketching
        </h2>
        <div className="project-two__interview-response">
          <h3 className="project-two__super-subheading">
            Responses to Our Interviews
          </h3>
          <p>
            Jordan: I gave our interview out to three different people who all
            had experience using Canvas. One common thing people liked about
            Canvas was the calendar feature – users really liked the calendar
            but found themselves putting reminders on their own calendars so I
            believe enhancing the calendar will be a great addition especially
            since all three interviewees said they believe the calendar could be
            improved upon. One common dislike I noticed came from the
            overwhelming amount of features Canvas has. Because of this I think
            a more stripped down version of Canvas would be more preferable to
            users. Users also said deadlines were one of the biggest motivators
            to finish work so I would like to make deadlines an integral part of
            the new design, maybe finding a way to motivate with deadlines and
            alerts about them. Finally, users said they would like to be able to
            customize the tabs inside the classes themselves, so having a way to
            customize the classroom view and its contents would make the user
            experience better.
          </p>
          <p>
            Ethan: After hearing feedback from other students, some in different
            universities, I found they mostly dislike the task list
            implementation. The teachers have to check a box to allow their
            assignments to show up there. The students want a task list that
            accurately lists all of their assignments for every class, leaving
            the little configuration for the teachers. Following up on that they
            would like a calendar that displays all of their due dates and have
            it sync with their other calendar software, such as Google or
            Outlook calendars. Lastly, they would like to be able to see their
            grades all in one place. Similarly to how the Canvas app does it,
            where their grade is displayed on each class card in the main menu.
          </p>
        </div>
        <div className="project-two__contextual-response">
          <h3 className="project-two__super-subheading">
            Findings from Our Contextual Inquiries
          </h3>
          <p>
            Jordan: From my contextual inquiry, I had two students who
            frequently use Canvas perform the operations outlined in our
            contextual inquiry. For checking grades, I noticed that the process
            was pretty easy and I believe having a tab within the class view to
            check grades is perfectly fine. One change we may be able to make
            would be to have the grades for a class show up outside of a tab to
            whittle down the amount of tabs in the classroom and make navigation
            easier. For checking current assignments, I noticed that both
            students went directly to the calendar view instead of the
            dashboard. Because of this, I don’t think all the assignments
            necessarily need to be on the dashboard and I believe the calendar
            could be enhanced with better filtering and viewing styles (i.e.
            day, month, or year). Looking at an individual assignment, I noticed
            that one student went through the calendar and the other student
            went into the classroom view for the assignment they were looking
            for. However, the student that originally went into the classroom
            then went back to the calendar because they couldn’t find the
            assignment as quickly. I think this is a great indicator that the
            calendar should have better integration with the classrooms, and the
            assignments should be easier to find from the classroom view.
            Finally for assignment submission, I noticed once again that both
            students first went through the calendar view to navigate to the
            assignment, but both had zero issues actually submitting the
            assignment once they reached the assignment page.
          </p>
        </div>
        <div className="project-two__sketches">
          <h3 className="project-two__super-subheading">Sketches</h3>
          <p>
            Below are the brainstorming sketches and interface sketches for this
            project:
          </p>
          <h4 className="project-two__image-subheading">
            Brainstorming Sketches
          </h4>
          <div className="project-one__alternatives-img">
            <img src={brainstorm1}></img>
            <img src={brainstorm2}></img>
            <img src={brainstorm3}></img>
          </div>
          <h4 className="project-two__image-subheading">Interface Sketches</h4>
          <div className="project-one__alternatives-img">
            <img src={interface1}></img>
            <img src={interface2}></img>
          </div>
        </div>
        <div className="project-two__work-split">
          <h3 className="project-two__super-subheading">
            Implementation and Work Split
          </h3>
          <p>
            For this project, we have decided to use vanilla HTML/CSS/JS for our
            implementation. To split up the work based off our sketches, Jordan
            will handle the main dashboard, calendar page, goals page, and the
            main classroom dashboard (assignments, grades, etc.) and Ethan will
            handle all the individual views for each classroom (syllabus view,
            assignment submission, modules, etc.)
          </p>
        </div>
      </div>
      <div className="project-two__implementation">
        <h2 className="project-two__subheading">3. Implementation</h2>
        <div className="project-two__project-download">
          <h3 className="project-two__super-subheading">
            Implementation Download
          </h3>
          <p>
            To check out our implementation, you can download the .zip file
            below and run the site locally. One way to do this is by running the
            Python http.server package by typing in the terminal of your
            favorite IDE `python -m http.server`. To do this, ensure you have
            Python 3 installed on your computer and after running the command
            open up localhost:8000 in your browser.
          </p>
          <a
            className="project-two__download"
            href="../../../assets/zips/AlternaCanvas.zip"
            download
          >
            Click Here to Download the Project!
          </a>
        </div>
        <div className="project-two__demo-video">
          <h3 className="project-two__super-subheading">Demo Video</h3>
          <p>
            Below is a brief video to demonstrate how the smart shower UI works
          </p>
          <video width="960" height="540" controls>
            <source type="video/mp4" />
            Your browser does not support HTML5 video
          </video>
        </div>
      </div>
    </div>
  );
}

export default ProjectTwo;
