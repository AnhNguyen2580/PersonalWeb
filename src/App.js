//import './App.css';
import LeftNavigation from './components/LeftNavigation';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';
import QualificationSection from './components/QualificationSection';
import ExperienceSection from './components/ExperienceSection';
import ClientSection from './components/ClientSection';
import AchievementSection from './components/AchievementSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <!--Fixed Bg Image--> */}
      <div className="fixed-bg"></div>
      <div className="fixed-bg-overlay"></div>
      {/* <!--/Fixed Bg Image--> */}

      {/* <!--Preloader--> */}
      <div id="pre_load" className="preloader-it">
        <div id="la_anim" className="la-anim-1"></div>
      </div>
      {/* <!--/Preloader--> */}

      {/* <!--Container--> */}
      <div className="container-fluid">
        <div className="row">
          <LeftNavigation />

          <div className="col-lg-8 col-xs-12 pad-zero">
            <Header />
            {/* <!--Main Content--> */}
            <div
              id="main_content"
              className="content-block margin-top-150 margin-top-sm-70 margin-top-xs-50"
            >
              <Introduction />
              <hr className="separater-hr" />
              <ServicesSection />
              <hr className="separater-hr" />
              <SkillsSection />
              <hr className="separater-hr" />
              <WorkSection />
              <hr className="separater-hr" />
              <QualificationSection />
              <hr className="separater-hr" />
              <ExperienceSection />
              <hr className="separater-hr" />
              <ClientSection />
              <hr className="separater-hr" />
              <AchievementSection />
              <hr className="separater-hr" />
              <ContactSection />
              <hr className="separater-hr" />
              <Footer />
            </div>
            {/* <!--/Main Content--> */}
          </div>
        </div>
      </div>
      {/* <!-- /Container --> */}
    </div>
  );
}

export default App;
