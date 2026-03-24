import LeftNavigation from './components/LeftNavigation';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';
import QualificationSection from './components/QualificationSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementSection from './components/AchievementSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="fixed-bg"></div>
      <div className="fixed-bg-overlay"></div>

      <div className="container-fluid">
        <div className="row">
          <LeftNavigation />

          <div className="col-lg-9 col-xs-12 pad-zero">
            <Header />
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
              <AchievementSection />
              <hr className="separater-hr" />
              <ContactSection />
              <hr className="separater-hr" />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
