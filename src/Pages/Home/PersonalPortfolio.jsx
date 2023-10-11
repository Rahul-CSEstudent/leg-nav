import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Team from '../../Components/Team/Team';
import { Parallax } from 'react-scroll-parallax'
import Clients from '../../Components/Clients/Clients'

import PortfolioBordered from '../../Components/Portfolio/PortfolioBordered'
import { m } from "framer-motion"
import Buttons from '../../Components/Button/Buttons'
import { Link as ScrollTo } from "react-scroll"

// Components
import { fadeIn,fadeInRight, fadeInLeft } from '../../Functions/GlobalAnimations'
import Header, { HamburgerMenu, HeaderNav } from '../../Components/Header/Header'
import PortfolioOverlay from '../../Components/Portfolio/PortfolioOverlay'
import { IconWithTextData_05, IconWithTextData_08 } from '../../Components/IconWithText/IconWithTextData'
import IconWithText from '../../Components/IconWithText/IconWithText'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import SocialIcons from '../../Components/SocialIcon/SocialIcons'
import { Footer } from '../../Components/Footers/Footer'
import ReactCustomScrollbar from '../../Components/ReactCustomScrollbar'
import { FilterData } from '../../Components/Portfolio/PortfolioData';
import { TextAnime } from '../../Components/FancyText/FancyText'
import SideButtons from "../../Components/SideButtons";

// Data
import { ProgressBarData01 } from '../../Components/ProgressBar/ProgressBarData'


const TeamData = [
  {
    img: '/logo/arav.png',
    name: 'Aravindh Ravichandran',
    designation: 'Founder',
    subtitle: '',
    social_links: [
      {
        title: 'facebook',
        link: "https://www.facebook.com",
        icon: "fab fa-facebook-f"
      },
      {
        title: 'Linkedin',
        link: "https://www.linkedin.com/in/avra/",
        icon: "fa-brands fa-linkedin"
      },
      {
        title: 'twitter',
        link: "https://www.twitter.com",
        icon: "fa-brands fa-twitter"
      },
      {
        title: 'instagram',
        link: "https://www.instagram.com/aravavr",
        icon: "fa-brands fa-instagram"
      },
    ]
  },
  {
    img: '/logo/amrish.png',
    name: 'Amrish Krishnan',
    designation: 'Senior Partner',
    subtitle: '',
    social_links: [
      {
        title: 'facebook',
        link: "https://www.facebook.com",
        icon: "fab fa-facebook-f"
      },
      {
        title: 'Linkedin',
        link: "https://www.linkedin.com/in/amrish-krishnan/",
        icon: "fa-brands fa-linkedin"
      },
      {
        title: 'twitter',
        link: "https://www.twitter.com",
        icon: "fa-brands fa-twitter"
      },
      {
        title: 'instagram',
        link: "https://www.instagram.com/buddy_its_me_who/",
        icon: "fa-brands fa-instagram"
      },
    ]
  },
  {
    img: '/logo/monisha.png',
    name: 'Monishaa K M',
    designation: 'Chied Executive Officer',
    subtitle: '',
    social_links: [
      {
        title: 'facebook',
        link: "https://www.facebook.com",
        icon: "fab fa-facebook-f"
      },
      {
        title: 'Linkedin',
        link: "https://www.linkedin.com/in/monishaakm/",
        icon: "fa-brands fa-linkedin"
      },
      {
        title: 'twitter',
        link: "https://www.twitter.com",
        icon: "fa-brands fa-twitter"
      },
      {
        title: 'instagram',
        link: "https://www.instagram.com/monishaakm/",
        icon: "fa-brands fa-instagram"
      },
    ]
  },

]

const FooterSocialIconData = [
  {
      color: "#828282",
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook-f"
  },
  {
      color: "#828282",
      link: "https://dribbble.com/",
      icon: "fab fa-dribbble"
  },
  {
      color: "#828282",
      link: "https://twitter.com/",
      icon: "fab fa-twitter"
  },
  {
      color: "#828282",
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram"
  },
]

const HeaderSocialIconsData = [
  {
      color: "#828282",
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook-f"
  },
  {
      color: "#828282",
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram"
  },
  {
      color: "#828282",
      link: "https://twitter.com/",
      icon: "fab fa-twitter"
  }
]


const PortfolioData = [
  {
      title: "Package 1",
      img: "/assets/img/portfolio1.png",
      category: ["Branding", "Logo"],
      subtitle: "50+ Publications",
      link: "/portfolio/single-project-page-01",
      double_col: false
  },
  {
      title: "Package 2",
      img: "/assets/img/portfolio2.png",
      category: ["Graphics", "Logo"],
      subtitle: "250+ Publications",
      link: "/portfolio/single-project-page-02",
      double_col: false
  },
  {
      title: "Package 3",
      img: "/assets/img/portfolio5.png",
      category: ["Branding", "Photography"],
      subtitle: "150+ Publications",
      link: "/portfolio/single-project-page-03",
      double_col: false
  },
  {
      title: "Package 4",
      img: "/assets/img/portfolio4.png",
      category: ["Graphics", "Photography"],
      subtitle: "100+ Publications",
      link: "/portfolio/single-project-page-04",
      double_col: false
  },
  {
      title: "Package 5",
      img: "/assets/img/portfolio3.png",
      category: ["Branding", "Graphics", "Logo"],
      subtitle: "100+ Publications",
      link: "/portfolio/single-project-page-05",
      double_col: false
  },
  {
      title: "Package 6",
      img: "/assets/img/portfolio6.png",
      category: ["Logo", "Photography"],
      subtitle: "150+ Publications",
      link: "/portfolio/single-project-page-01",
      double_col: false
  },
  {
      title: "Package 7",
      img: "/assets/img/portfolio7.png",
      category: ["Branding", "Graphics", "Photography"],
      subtitle: "200+ Publications",
      link: "/portfolio/single-project-page-02",
      double_col: false
  },

]

const ClientData = [
  {
      img: '/logo/timesnow.png'
  },
  {
      img: '/logo/timesbulletin.png'
  },
  {
      img: '/logo/indiasag.png'
  },
  {
      img: '/logo/bollywood.png'
  },
  // {
  //     img: 'https://via.placeholder.com/232x110'
  // },
  // {
  //     img: 'https://via.placeholder.com/232x110'
  // },
  // {
  //     img: 'https://via.placeholder.com/232x110'
  // },
  // {
  //     img: 'https://via.placeholder.com/232x110'
  // },
]


const PortfolioOverlayData = [
  {
    title: "Daimler",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Brochure",
    link: "/portfolio/single-project-page-01"
  },
  {
    title: "Waterlly",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Branding",
    link: "/portfolio/single-project-page-02"
  },
  {
    title: "Leather",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Photography",
    link: "/portfolio/single-project-page-03"
  },
  {
    title: "Gardner",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Photography",
    link: "/portfolio/single-project-page-04"
  },
  {
    title: "Manchester",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Photography",
    link: "/portfolio/single-project-page-05"
  },
  {
    title: "Armchair",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Photography",
    link: "/portfolio/single-project-page-01"
  },
  {
    title: "Truenorth",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Identity",
    link: "/portfolio/single-project-page-02"
  },
  {
    title: "Cortifiel",
    img: "https://via.placeholder.com/800x800",
    category: [""],
    subtitle: "Photography",
    link: "/portfolio/single-project-page-03"
  }
]

const SocialIconsData = [
  {
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  },
  {
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble"
  },
  {
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  },
  {
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  }
]

const PersonalportfolioPage = (props) => {
  return (
    <div style={props.style}>
      <SideButtons />
      {/* Header Start */}
      <Header className="absolute top-0 left-0 w-full z-10 md:bg-white header-personalportfolio">
        <HeaderNav fluid="fluid" theme="light" className="h-[100px] md:h-[70px] mr-[50px] ml-[35px] md:mx-[15px]" containerClass="md:px-0">
          <Col lg={2} sm={6} className="col-auto ps-lg-0 me-auto md:!px-0">
            <Link aria-label="link for" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
              <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/LN.png' data-rjs='/assets/img/webp/LN.png' alt='logo' />
                                    <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/LN.png' data-rjs='/assets/img/webp/LN.png' alt='logo' />
                                    <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/LN.png' data-rjs='/assets/img/webp/LN.png' alt='logo' />
              </Navbar.Brand> 
            </Link>
          </Col>
          <Col className="col-auto text-end px-0">
            {/* <HamburgerMenu theme="light" className="w-[25%] xl:w-[40%] lg:w-[45%] md:w-[50%] sm:w-full">
              <Row className="h-full mx-0">
                <Col lg={12} className="p-0">
                  <Row className="h-[100vh] p-28 xs:p-12 mx-0 items-center justify-center bg-black">
                    <Col xs={12} className="hamburgermenu-modern-page text-left h-full max-h-[calc(65vh-100px)] flex-1 px-0">
                      <ReactCustomScrollbar className="h-full flex justify-center" autoHide>
                        <div>
                          <ul className="font-serif w-full flex flex-col justify-center h-full">
                            <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/">home</Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/page/about-me">about</Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/page/our-services">services</Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/portfolio/portfolio-colorful-metro">portfolio</Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/blogs/blog-grid">blog</Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/page/contact-modern">contact</Link></li>
                          </ul>
                        </div>
                      </ReactCustomScrollbar>
                    </Col>
                    <Col className="col-12 text-left none md:block sm:hidden px-0">
                      <div className="font-serif mt-[50px]">
                        <span className="mb-[10px] font-light text-xlg inline-block">Let's work together?</span>
                        <h2 className="heading-6 mb-0"><a aria-label="gmail" href="mailto:info@domain.com" className="text-[#ffeb04] border-b border-[#ffeb04] hover:text-white hover:border-white">info@domain.com</a></h2>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </HamburgerMenu> */}
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}

      {/* Parallax section start */}
      <div className="md:flex md:items-center overflow-hidden relative">
                    <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(https://via.placeholder.com/1920x1081)` }}></Parallax>
                    <div className="h-full w-full left-0 top-0 absolute cover-background" style={{ backgroundImage: `url('/assets/img/hero.jpg')` }}></div>
                    <Container className="relative w-full">
                        <Row className="full-screen md:h-[650px] sm:h-[500px]">
                            <Col lg={5} md={6} sm={7} className="flex flex-col items-start justify-center">
                                <h1 className="font-serif font-semibold text-[60px] leading-[95px] text-darkgray -tracking-[4px] mb-[4.5rem] xs:w-[65%] lg:text-[55px] lg:leading-[90px] md:text-[45px] md:leading-[65px] sm:text-[30px] sm:leading-[43px] sm:-tracking-[.5px]">Your Media And Press Release Partner</h1>
                               <Buttons ariaLabel="Get started now" to="https://wa.me/+91+919629572929" className="font-semibold font-serif z-10 uppercase btn-expand rounded md:mb-[15px] hover:text-darkgray" size="xl" color="#232323" themeColor="#fff" title="Get started now" />
                            </Col>
                        </Row>
                    </Container>
                    <div className="absolute bottom-[30px] w-auto left-0 right-0 z-[1]">
                        <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="section-link block w-[2px] h-[35px] bg-white mx-auto right-0 left-0 absolute cursor-pointer">
                            <span className="text-darkgray absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0] hover:text-darkgray">scroll</span>
                        </ScrollTo>
                    </div>
                </div>
      {/* Parallax section End */}

      {/* Section Start */}
      <section id="about" className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <Container>
                        <IconWithText grid="row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 gap-y-[50px] justify-center" theme="icon-with-text-05" data={IconWithTextData_05} animation={fadeIn} animationDelay={0.1} />
                        <Row className="items-end justify-center mt-[10.5rem] md:mt-28 md:text-center">
                            <Col lg={3} className="md:mb-[25px] sm:mb-[15px] lg:px-0">
                                <m.span className="font-serif font-semibold text-[100px] leading-[95px] text-[#ffcc2e] -tracking-[5px] sm:-tracking-[1.5px] lg:text-[90px] md:text-[70px] sm:text-[45px] sm:leading-none" {...{ ...fadeIn, transition: { duration: .7 } }}>navigate<span className="text-darkgray">.</span></m.span>
                            </Col>
                            <Col lg={5} md={10} className="text-right md:mb-[25px] md:text-center">
                                <m.h2 className="heading-4 font-serif font-semibold text-darkgray block mb-0 pr-10 -tracking-[1px] lg:pr-0" {...{ ...fadeIn, transition: { duration: .7, delay: 0.5 } }}>Crafting Connections, Shaping<br/> Reputations.</m.h2>
                            </Col>
                            <m.div className="pl-[30px] md:pl-[15px] col-lg-4 col-md-9"  {...{ ...fadeIn, transition: { duration: .7, delay: 0.7 } }}>
                                <p className="w-[80%] mb-[15px] lg:w-full">Legacies Navigate is a PR platform and online media publishing hub dedicated to amplifying voices and promoting impactful stories.</p>
                                <Buttons ariaLabel="Agency info" to="legacies.app" className="font-semibold font-serif uppercase btn-link after:h-[2px] !text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Who We Are?" />
                            </m.div>
                        </Row>
                    </Container>
                </section>
      {/* Section End */}

      {/* Portfolio Section Start */}
      <section className="py-[160px] border-t border-mediumgray pb-0 lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <PortfolioBordered
                        title="All You Need, Personalized Package"
                        className="design-agency-portfolio-bordered"
                        grid="grid grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col"
                        data={PortfolioData}
                       
                    />
                </section>
      {/* Portfolio Section End */}

      <section id="pricing" className="py-[160px] overflow-hidden border-b border-mediumgray pb-0 lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <Container>
                        {/* <m.div className="row items-center" {...fadeIn}>
                            <Col xl={4} lg={5} className="md:mb-20 sm:mb-[6.5rem] sm:text-center">
                                <h2 className="heading-4 font-serif font-semibold text-darkgray -tracking-[1px] mb-10">Hire dedicated creative designer?</h2>
                                <p className="w-[90%] sm:w-full mb-[25px]">Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt labore dolore magna ut enim ad minim veniam nostrud ullamco laboris nisi commodo.</p>
                                <Buttons ariaLabel="Pricing packages" to="/page/pricing-packages" className="mt-[20px] font-medium rounded-none font-serif uppercase btn-transparent hover:text-white md:mb-[15px]" color="#232323" size="lg" themeColor="#232323" title="Pricing packages" />
                            </Col>
                            <Col xl={{ span: 6, offset: 2 }} lg={7} className="md:pl-[25px] md:pr-[35px] sm:px-[15px]">
                                <PricingTable02 grid="row-cols-1 row-cols-md-2 justify-center items-center gap-y-[30px]" theme="pricing-table-style-02 xs:px-[15px]" data={pricingTable} />
                            </Col>
                        </m.div> */}
                        <Row className="items-center justify-center mt-0 md:mt-8">
                            <m.div className="text-right md:mb-20 xs:mb-16 md:text-center col-lg-3 col-md-5 col-sm-6 order-1" {...fadeInLeft}>
                                <i className="fas fa-quote-right text-[28px] block opacity-30 mb-[25px]"></i>
                                <span className="font-serif font-medium text-lg leading-[30px] text-darkgray inline-block w-[80%] md:text-xmd md:leading-[22px]">We offers perfect hiring models for your project requirements</span>
                            </m.div>
                            <Col lg={{ span: 6, order: 2 }} md={8} className="p-0 order-3">
                                <m.img className="w-full" width={585} height={340} src="assets/img/pic.jpg" alt="" {...fadeIn} />
                            </Col>
                            <m.div className="md:mb-20 xs:mb-28 md:text-center col-lg-3 col-md-5 col-sm-6 order-lg-3 order-2" {...fadeInRight}>
                                <i className="fas fa-quote-left text-[28px] block opacity-30 mb-[25px]"></i>
                                <span className="font-serif font-medium text-lg leading-[30px] text-darkgray inline-block w-[80%] md:text-xmd md:leading-[22px]">Our highly qualified and skilled designer are here to help</span>
                            </m.div>
                        </Row>
                    </Container>
                </section>


                <section className="pt-[160px] overflow-hidden lg:pt-[120px] md:pt-[95px] sm:pt-[80px] xs:pt-[50px]">
                    <Container>
                        <Clients grid="row-cols-1 row-cols-sm-2 row-cols-md-4" theme="client-logo-style-06 light" data={ClientData} animation={fadeIn} />
                    </Container>
                </section>

                <section id="downsection" className="our-team-page-team py-[130px] lg:pt-[100px] lg:pb-[95px] md:pt-[70px] md:pb-[40px] sm:py-[50px] xs:pb-[25px] switch-tabs">
                    
                    <Container fluid className="px-[7%] lg:px-[3%]">
                    <h3 className="heading-4 flex font-serif mb-10 p-0 item-center justify-center font-semibold text-darkgray tracking-[-1px]">Our Team</h3>
                    <Team
                        themeColor="light"
                        overlay={["#0039e3cc", "#4132e0cc", "#5e28ddcc", "#741bd9cc", "#8600d4cc"]}
                        theme='team-style-04'
                        data={TeamData}
                        grid="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-center"
                        carousel={false}
                        carouselOption={{ slidesPerView: 3, spaceBetween: 30, loop: true, navigation: true, autoplay: { delay: 3000, disableOnInteraction: true }, pagination: { dynamicBullets: true, clickable: true } }} />
                    </Container>
      </section>
                {/* Section End */}

                {/* Section Start */}
                <section className="py-[160px] overflow-hidden bg-no-repeat bg-right lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" style={{ backgroundImage: `url('https://via.placeholder.com/653x323')` }}>
                    <Container>
                        <m.div className="row items-center">
                            <m.div className="col-12 col-lg-3 md:mb-16 xs:mb-12" {...fadeInRight}>
                                <m.div className="-ml-[40vw] text-right md:ml-0 md:text-center">
                                    <span className="font-serif pr-8 font-semibold text-[200px] leading-[200px] text-[#ffcc2e] -tracking-[10px] block sm:tracking-[-1px] lg:text-[160px] lg:leading-[160px] lg:pr-0 md:text-[120px] md:leading-[120px] sm:text-[90px] sm:leading-[90px] xs:text-[50px] xs:leading-[50px]">navigate</span>
                                </m.div>
                            </m.div>
                            <Col lg={6} className="text-left md:mb-12 md:text-center">
                                <m.h2 className="heading-4 font-serif font-medium text-darkgray mb-0 -tracking-[1px] inline-block md:w-[80%] xs:w-full" {...fadeIn}>Join With Legacies Navigate To Elevate Your Business</m.h2>
                            </Col>
                            <m.div className="text-center col-lg-3" {...{ ...fadeIn, transition: { delay: 0.6 } }}>
                                <Buttons ariaLabel="Start a project" to="/page/contact-modern" className="btn-fill btn-fancy font-medium font-serif uppercase rounded-none btn-shadow" size="md" themeColor="#232323" color="#fff" title="Lets Share your Journey" />
                            </m.div>
                        </m.div>
                    </Container>
                </section>

      {/* Progressbar Section Start */}
      <section className="py-[160px] overflow-hidden bg-[#ffeb04] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
            <Col className="col-lg-5 md:mb-20 sm:mb-16">
              <h2 className="heading-6 font-serif text-darkgray mb-0 leading-[40px] sm:leading-[26px]">Provide <span className="font-semibold">high quality and cost effective</span> offshore web and software development services. Wide range of web and software development services across the world.</h2>
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <ProgressBar theme="progressbar-style-01" data={ProgressBarData01} trailColor="transparent" height="4px" color="#232323" animation={fadeIn} />
            </Col>
          </m.div>
        </Container>
      </section>
      {/* Progressbar Section End */}

      {/* Section Start */}
      <section className="bg-[#ffeb04] py-[80px] pt-0 md:pb-0">
        <Container fluid>
          <Row className="items-center">
            <Col className="border-[1px] border-r-0 border-l-0 border-b-0 border-dotted border-darkgray sm:mb-[30px]"></Col>
            <m.div className="col-md-auto text-center px-[4.5rem] md:px-10 xs:pt-6 xs:pb-8" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
              <span className="font-serif font-light text-[70px] leading-[90px] text-darkgray -tracking-[3px] block xs:text-[50px] xs:leading-[55px]">Let's work <span className="font-semibold">together?</span></span>
            </m.div>
            <div className="col-md border-[1px] border-r-0 border-l-0 border-b-0 border-dotted border-darkgray sm:mt-[30px]"></div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <Footer className="bg-[#ffeb04] py-20" theme="light">
        <Container>
          <Row>
            <Col lg={4} className="justify-start md:justify-center md:mb-[20px] flex items-center">
              <span className="font-serif font-semibold text-sm uppercase text-darkgray">Call us today! +1 234 567 8910</span>
            </Col>
            <Col lg={4} className="text-center md:mb-[20px]">
              <SocialIcons theme="social-icon-style-12" iconColor="dark" size="md" data={SocialIconsData} />
            </Col>
            <Col lg={4} className="text-right justify-end md:justify-center md:text-center flex items-center">
              <p className="font-serif font-semibold text-sm uppercase text-darkgray leading-[30px]">© {new Date().getFullYear()} Litho is Powered by <a aria-label="footer themezaa link" href="https://www.themezaa.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4 text-darkgray hover:text-darkgray">ThemeZaa</a></p>
            </Col>
          </Row>
        </Container>
      </Footer>
      {/* Footer End */}
    </div>
  )
}

export default PersonalportfolioPage
