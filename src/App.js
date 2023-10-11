import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";

// Components
import ScrollToTopButton from "./Components/ScrollToTop"

// Home
import HomeStartupPage from "./Pages/Home/Startup/Startup";
const HomeBusinessPage = lazy(() => import("./Pages/Home/Business"))
const CorporatePage = lazy(() => import("./Pages/Home/Corporate"))
const FinancePage = lazy(() => import("./Pages/Home/Finance"))
const ApplicationPage = lazy(() => import("./Pages/Home/Application"))
const ConsultingPage = lazy(() => import("./Pages/Home/Consulting"))
const DigitalagencyPage = lazy(() => import("./Pages/Home/DigitalAgency"))
const MarketingAgencyPage = lazy(() => import("./Pages/Home/MarketingAgency"))
const EventsConferencePage = lazy(() => import("./Pages/Home/EventsConference"))
const SeoAgencyPage = lazy(() => import("./Pages/Home/SeoAgency"))
const DesignagencyPage = lazy(() => import("./Pages/Home/DesignAgency"))
const WebagencyPage = lazy(() => import("./Pages/Home/WebAgency"))
const CreativeAgencyPage = lazy(() => import("./Pages/Home/CreativeAgency"))
const BrandingagencyPage = lazy(() => import("./Pages/Home/BrandingAgency"))
const PhotographyPage = lazy(() => import("./Pages/Home/Photography"))
const PersonalportfolioPage = lazy(() => import("./Pages/Home/PersonalPortfolio"))
const InteractiveportfolioPage = lazy(() => import("./Pages/Home/InteractivePortfolio"))
const CreativeportfolioPage = lazy(() => import("./Pages/Home/CreativePortfolio"))
const VerticalportfolioPage = lazy(() => import("./Pages/Home/VerticalPortfolio"))
const SplitPortfolioPage = lazy(() => import("./Pages/Home/SplitPortfolio"))
const ArchitecturePage = lazy(() => import("./Pages/Home/Architecture"))
const HotelResortPage = lazy(() => import("./Pages/Home/HotelResort"))
const TravelAgencyPage = lazy(() => import("./Pages/Home/TravelAgency"))
const YogaMeditationPage = lazy(() => import("./Pages/Home/YogaMeditation"))
const RestaurantPage = lazy(() => import("./Pages/Home/Restaurant"))
const GymFitnessPage = lazy(() => import("./Pages/Home/GymFitness"))
const SpaSalonPage = lazy(() => import("./Pages/Home/SpaSalon"))
const CafePage = lazy(() => import("./Pages/Home/Cafe"))
const HomeDecorPage = lazy(() => import("./Pages/Home/Decor"))
const DentistPage = lazy(() => import("./Pages/Home/Dentist"))
const InteriorDesignPage = lazy(() => import("./Pages/Home/InteriorDesign"))
const FurnitureShopPage = lazy(() => import("./Pages/Home/FurnitureShop"))
const FashionShopPage = lazy(() => import("./Pages/Home/FashionShop"))
const LifestyleBlogPage = lazy(() => import("./Pages/Home/LifestyleBlog"))
const ClassicBlogPage = lazy(() => import("./Pages/Home/ClassicBlog"))
const MagazinePage = lazy(() => import("./Pages/Home/Magazine"))

// Pages
const LandingPage = lazy(() => import("./Pages/Landing"))
const AccordionPage = lazy(() => import("./Pages/Elements/Accordion"))
const ButtonPage = lazy(() => import("./Pages/Elements/Button"))
const TeamPage = lazy(() => import("./Pages/Elements/Team"))
const TeamCarouselPage = lazy(() => import("./Pages/Elements/TeamCarousel"))
const ClientPage = lazy(() => import("./Pages/Elements/Clients"))
const ClientCarouselPage = lazy(() => import("./Pages/Elements/ClientCarousel"))
const SubscribePage = lazy(() => import("./Pages/Elements/Subscribe"))
const CallToActionPage = lazy(() => import("./Pages/Elements/CallToAction"))
const TabPage = lazy(() => import("./Pages/Elements/Tab"))
const GoogleMapPage = lazy(() => import("./Pages/Elements/GoogleMap"))
const ContactFormPage = lazy(() => import("./Pages/Elements/ContactForm"))
const ImageGalleryPage = lazy(() => import("./Pages/Elements/ImageGallery"))
const ProgressBarPage = lazy(() => import("./Pages/Elements/ProgressBar"))
const IconWithTextPage = lazy(() => import("./Pages/Elements/IconWithText"))
const OverLineIconBoxPage = lazy(() => import("./Pages/Elements/OverLineIconBox"))
const CustomIconWithTextPage = lazy(() => import("./Pages/Elements/CustomIconWithText"))
const CountersPage = lazy(() => import("./Pages/Elements/Counters"))
const CountDownPage = lazy(() => import("./Pages/Elements/CountDown"))
const PieChartPage = lazy(() => import("./Pages/Elements/PieChart"))
const FancyTextBoxPage = lazy(() => import("./Pages/Elements/FancyTextBox"))
const TextBoxPage = lazy(() => import("./Pages/Elements/TextBox"))
const FancyTextPage = lazy(() => import("./Pages/Elements/FancyText"))
const TestimonialsPage = lazy(() => import("./Pages/Elements/Testimonials"))
const TestimonialsCarouselPage = lazy(() => import("./Pages/Elements/TestimonialsCarousel"))
const VideoPage = lazy(() => import("./Pages/Elements/Video"))
const InteractiveBannersPage = lazy(() => import("./Pages/Elements/InteractiveBanners"))
const ServicesPage = lazy(() => import("./Pages/Elements/Services"))
const InfoBannerPage = lazy(() => import("./Pages/Elements/InfoBanner"))
const RotateBoxPage = lazy(() => import("./Pages/Elements/RotateBox"))
const ProcessStepPage = lazy(() => import("./Pages/Elements/ProcessStep"))
const InstagramPage = lazy(() => import("./Pages/Elements/Instagram"))
const ParallaxScrollingPage = lazy(() => import("./Pages/Elements/ParallaxScrolling"))
const TextSliderPage = lazy(() => import("./Pages/Elements/TextSlider"))
const HeadingPage = lazy(() => import("./Pages/Elements/Heading"))
const DropCapsPage = lazy(() => import("./Pages/Elements/DropCaps"))
const ColumnsPage = lazy(() => import("./Pages/Elements/Columns"))
const BlockquotePage = lazy(() => import("./Pages/Elements/Blockquote"))
const HighlightsPage = lazy(() => import("./Pages/Elements/Highlights"))
const MessageBoxPage = lazy(() => import("./Pages/Elements/MessageBox"))
const SocialIconsPage = lazy(() => import("./Pages/Elements/SocialIcons"))
const ListsPage = lazy(() => import("./Pages/Elements/Lists"))
const SeparatorsPage = lazy(() => import("./Pages/Elements/Separators"))
const PricingTablePage = lazy(() => import("./Pages/Elements/PricingTable"))
const ElementPage = lazy(() => import("./Pages/Elements"))

const PortfolioPage = lazy(() => import("./Pages/Portfolios"))
const PortfolioClassicTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicTwoColumn"))
const PortfolioClassicThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicThreeColumn"))
const PortfolioClassicFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicFourColumn"))
const PortfolioClassicMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicMasonry"))
const PortfolioClassicMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicMetro"))

const PortfolioBorderedTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedTwoColumn"))
const PortfolioBorderedThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedThreeColumn"))
const PortfolioBorderedFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedFourColumn"))
const PortfolioBorderedMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedMasonry"))
const PortfolioBorderedMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedMetro"))

const PortfolioBoxedTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedTwoColumn"))
const PortfolioBoxedThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedThreeColumn"))
const PortfolioBoxedFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedFourColumn"))
const PortfolioBoxedMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedMasonry"))
const PortfolioBoxedMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedMetro"))

const PortfolioColorfulTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulTwoColumn"))
const PortfolioColorfulThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulThreeColumn"))
const PortfolioColorfulFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulFourColumn"))
const PortfolioColorfulMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulMasonry"))
const PortfolioColorfulMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulMetro"))

const PortfolioOverlayTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayTwoColumn"))
const PortfolioOverlayThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayThreeColumn"))
const PortfolioOverlayFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayFourColumn"))
const PortfolioOverlayMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayMetro"))
const PortfolioOverlayMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayMasonry"))
const PortfolioSwitchImgTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageTwoColumn"))
const PortfolioSwitchImgThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageThreeColumn"))
const PortfolioSwitchImgFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageFourColumn"))
const PortfolioSwitchImgMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageMasonry"))
const PortfolioSwitchImgMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageMetro"))
const PortfolioScatteredPage = lazy(() => import("./Pages/Portfolios/PortfolioScattered"))
const PortfolioJustifiedGalleryPage = lazy(() => import("./Pages/Portfolios/PortfolioJustifiedGallery"))
const PortfolioSliderPage = lazy(() => import("./Pages/Portfolios/PortfolioSlider"))
const SingleProjectPage01 = lazy(() => import("./Pages/Portfolios/SingleProjectPage01"))
const SingleProjectPage02 = lazy(() => import("./Pages/Portfolios/SingleProjectPage02"))
const SingleProjectPage03 = lazy(() => import("./Pages/Portfolios/SingleProjectPage03"))
const SingleProjectPage04 = lazy(() => import("./Pages/Portfolios/SingleProjectPage04"))
const SingleProjectPage05 = lazy(() => import("./Pages/Portfolios/SingleProjectPage05"))

// Header
const TransparentHeaderPage = lazy(() => import("./Pages/Header/TransparentHeaderPage"))
const WhiteHeaderPage = lazy(() => import("./Pages/Header/WhiteHeaderPage"))
const DarkHeaderPage = lazy(() => import("./Pages/Header/DarkHeaderPage"))
const HeaderwithTopbarPage = lazy(() => import("./Pages/Header/HeaderwithTopbarPage"))
const HeaderWithPushPage = lazy(() => import("./Pages/Header/HeaderWithPushPage"))
const CenterNavigationPage = lazy(() => import("./Pages/Header/CenterNavigationPage"))
const CenterLogoPage = lazy(() => import("./Pages/Header/CenterLogoPage"))
const TopLogoPage = lazy(() => import("./Pages/Header/TopLogoPage"))
const OnePageNavigationPage = lazy(() => import("./Pages/Header/OnePageNavigationPage"))
const LeftMenuClassicPage = lazy(() => import("./Pages/Header/LeftMenuClassicPage"))
const LeftMenuModernPage = lazy(() => import("./Pages/Header/LeftMenuModernPage"))
const HeaderAlwaysFixedPage = lazy(() => import("./Pages/Header/HeaderTypes/HeaderAlwaysFixedPage"))
const HeaderResponsiveSticky = lazy(() => import("./Pages/Header/HeaderTypes/HeaderResponsiveSticky"))
const HeaderDisableFixed = lazy(() => import("./Pages/Header/HeaderTypes/HeaderDisableFixed"))
const HeaderReverseScroll = lazy(() => import("./Pages/Header/HeaderTypes/HeaderReverseScroll"))
const MobileMenuClassicPage = lazy(() => import("./Pages/Header/MobileMenu/MobileMenuClassicPage"))
const MobileMenuModernPage = lazy(() => import("./Pages/Header/MobileMenu/MobileMenuModernPage"))
const MobileMenuFullScreen = lazy(() => import("./Pages/Header/MobileMenu/MobileMenuFullScreen"))
const HamburgerMenuPage = lazy(() => import("./Pages/Header/HamburgerMenu/HamburgerMenuPage"))
const HamburgerMenuModernPage = lazy(() => import("./Pages/Header/HamburgerMenu/HamburgerMenuModernPage"))
const HamburgerMenuHalfPage = lazy(() => import("./Pages/Header/HamburgerMenu/HamburgerMenuHalfPage"))

// Footer
const FooterStyle01Page = lazy(() => import("./Pages/Footer/FooterStyle01Page"))
const FooterStyle02Page = lazy(() => import("./Pages/Footer/FooterStyle02Page"))
const FooterStyle03Page = lazy(() => import("./Pages/Footer/FooterStyle03Page"))
const FooterStyle04Page = lazy(() => import("./Pages/Footer/FooterStyle04Page"))
const FooterStyle05Page = lazy(() => import("./Pages/Footer/FooterStyle05Page"))
const FooterStyle06Page = lazy(() => import("./Pages/Footer/FooterStyle06Page"))
const FooterStyle07Page = lazy(() => import("./Pages/Footer/FooterStyle07Page"))
const FooterStyle08Page = lazy(() => import("./Pages/Footer/FooterStyle08Page"))
const FooterStyle09Page = lazy(() => import("./Pages/Footer/FooterStyle09Page"))
const FooterStyle10Page = lazy(() => import("./Pages/Footer/FooterStyle10Page"))
const FooterStyle11Page = lazy(() => import("./Pages/Footer/FooterStyle11Page"))
const FooterStyle12Page = lazy(() => import("./Pages/Footer/FooterStyle12Page"))

// Model-Popup
const ModalPopupPage = lazy(() => import("./Pages/ModalPopup"))
const SimpleModel = lazy(() => import("./Pages/ModelPopup/SimpleModel"))
const ContactFormModal = lazy(() => import("./Pages/ModelPopup/ContactFormModal"))
const SubscriptionModal = lazy(() => import("./Pages/ModelPopup/SubscriptionModal"))
const VimeoVideoModal = lazy(() => import("./Pages/ModelPopup/VimeoVideoModal"))
const YouTubeVideoModal = lazy(() => import("./Pages/ModelPopup/YouTubeVideoModal"))
const GoogleMapModal = lazy(() => import("./Pages/ModelPopup/GoogleMapModal"))

// Icon Packs
const IconsMindLinePage = lazy(() => import("./Pages/Icons/IconsMindIconPage"))
const IconsMindSolidPage = lazy(() => import("./Pages/Icons/IconsMindSolidPage"))
const FontAwesomeIconPage = lazy(() => import("./Pages/Icons/FontAwesomeIconPage"))
const FeatherIconPage = lazy(() => import("./Pages/Icons/FeatherIconPage"))
const EtLineIconPage = lazy(() => import("./Pages/Icons/EtLineIconPage"))
const SimplelineIconPage = lazy(() => import("./Pages/Icons/SimplelineIconPage"))
const ThemifyIconPage = lazy(() => import("./Pages/Icons/ThemifyIconPage"))
const AnimationPage = lazy(() => import("./Pages/Animation"))

// Page-Title
const LeftAlignmentPage = lazy(() => import("./Pages/PageTitle/LeftAlignmentPage"))
const RightAlignmentPage = lazy(() => import("./Pages/PageTitle/RightAlignmentPage"))
const CenterAlignmentPage = lazy(() => import("./Pages/PageTitle/CenterAlignmentPage"))
const ColorfulStylePage = lazy(() => import("./Pages/PageTitle/ColorfulStylePage"))
const ParallaxBackground = lazy(() => import("./Pages/PageTitle/ParallaxBackground"))
const SeparateBreadcrumbsPage = lazy(() => import("./Pages/PageTitle/SeparateBreadcrumbsPage"))
const GalleryBackgroundPage = lazy(() => import("./Pages/PageTitle/GalleryBackgroundPage"))
const BackgroundVideoPage = lazy(() => import("./Pages/PageTitle/BackgroundVideoPage"))
const MiniVersionPage = lazy(() => import("./Pages/PageTitle/MiniVersionPage"))
const BigTypographyPage = lazy(() => import("./Pages/PageTitle/BigTypographyPage"))
const PageTitle = lazy(() => import("./Pages/PageTitle"))

// About Pages
const AboutMePage = lazy(() => import("./Pages/About/AboutMePage"))
const AboutUsPage = lazy(() => import("./Pages/About/AboutUsPage"))
const OurStoryPage = lazy(() => import("./Pages/About/OurStoryPage"))
const WhoWeArePage = lazy(() => import("./Pages/About/WhoWeArePage"))

// Services Pages
const OurServicesPage = lazy(() => import("./Pages/Services/OurServicesPage"))
const WhatWeOfferPage = lazy(() => import("./Pages/Services/WhatWeOfferPage"))
const OurProcessPage = lazy(() => import("./Pages/Services/OurProcessPage"))

// Contact Pages
const ContactUsSimplePage = lazy(() => import("./Pages/Contact/ContactUsSimplePage"))
const ContactUsClassicPage = lazy(() => import("./Pages/Contact/ContactUsClassicPage"))
const ContactUsModernPage = lazy(() => import("./Pages/Contact/ContactUsModernPage"))

// Additional Pages
const LatestNewsPage = lazy(() => import("./Pages/AdditionalPages/LatestNewsPage"))
const OurTeamPage = lazy(() => import("./Pages/AdditionalPages/OurTeamPage"))
const FreelancerPage = lazy(() => import("./Pages/Home/Freelancer"))
const PricingPackagesPage = lazy(() => import("./Pages/AdditionalPages/PricingPackagesPage"))
const NotFoundPage = lazy(() => import("./Pages/404"))
const MaintenancePage = lazy(() => import("./Pages/AdditionalPages/MaintenancePage"))
const ComingSoonPage = lazy(() => import("./Pages/AdditionalPages/ComingSoonPage"))
const ComingSoonV2Page = lazy(() => import("./Pages/AdditionalPages/ComingSoonV2Page"))
const FaqSPage = lazy(() => import("./Pages/AdditionalPages/FaqSPage"))
const SearchResultPage = lazy(() => import("./Pages/AdditionalPages/SearchResultPage"))

// Shop Pages
const ShopWidePage = lazy(() => import("./Pages/Shop/ShopWide"))
const HomeBlogMetroPage = lazy(() => import("./Pages/Home/BlogMetro"))
const ShoppingCart = lazy(() => import("./Pages/Shop/ShoppingCart"))
const Checkout = lazy(() => import("./Pages/Shop/Checkout"))
const LoginRegister = lazy(() => import("./Pages/Shop/LoginRegister"))
const SingleProduct = lazy(() => import("./Pages/Shop/SingleProduct"))
const OnlyCategoriesPage = lazy(() => import("./Pages/Shop/OnlyCategories"))
const RightSidebar = lazy(() => import("./Pages/Shop/RightSidebar"))
const LeftSidebar = lazy(() => import("./Pages/Shop/LeftSideBar"))
const Footer = lazy(() => import("./Pages/Footer"))
const Privacy = lazy(() => import("./Pages/Privacy"))

// Blogs
const BlogPage = lazy(() => import("./Pages/Blogs"))
const BlogGridPage = lazy(() => import("./Pages/Blogs/BlogGrid"))
const BlogMasonryPage = lazy(() => import("./Pages/Blogs/BlogMasonry"))
const BlogClassicPage = lazy(() => import("./Pages/Blogs/BlogClassic"))
const BlogSimplePage = lazy(() => import("./Pages/Blogs/BlogSimple"))
const BlogSideImPage = lazy(() => import("./Pages/Blogs/BlogSideImg"))
const BlogMetroPage = lazy(() => import("./Pages/Blogs/BlogMetro"))
const BlogModernPage = lazy(() => import("./Pages/Blogs/BlogModern"))
const BlogCleanPage = lazy(() => import("./Pages/Blogs/BlogClean"))
const BlogWidgetPage = lazy(() => import("./Pages/Blogs/BlogWidget"))
const BlogOverlayImgPage = lazy(() => import("./Pages/Blogs/BlogOverlayImg"))
const BlogStandardPage = lazy(() => import("./Pages/Blogs/BlogStandard"))
const CategoryPage = lazy(() => import("./Pages/Blogs/CategoryPage"))
const AuthorPage = lazy(() => import("./Pages/Blogs/AuthorPage"))

const BlogPostLayout01 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout01"))
const BlogPostLayout02 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout02"))
const BlogPostLayout03 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout03"))
const BlogPostLayout04 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout04"))
const BlogPostLayout05 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout05"))

// Blogs Types
const BlogGalleryPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogGalleryPostPage"))
const BlogStandardPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogStandardPostPage"))
const BlogSliderPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogSliderPostPage"))
const BlogHtml5VideoPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogHtml5VideoPostPage"))
const BlogYoutubeVideoPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogYoutubeVideoPostPage"))
const BlogVimeoVideoPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogVimeoVideoPostPage"))
const BlogAudioPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogAudioPostPage"))
const BlogBlockquotePostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogBlockquotePostPage"))
const BlogFullWidthPost = lazy(() => import("./Pages/Blogs/PostTypes/BlogFullWidthPost"))

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();

  // RetinaJS
  useEffect(() => {
    window.addEventListener('load', retina(document.querySelectorAll('img')));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then(module => {
        module.SetHeaderMenuPos()
        module.setDocumentFullHeight()
      })
    }, 1000);
  }, [location])

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
      }}
    >
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
      {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence exitBeforeEnter>
              <Suspense fallback={<></>}>
                <Routes>
                  <Route path="/" element={<ArchitecturePage />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
    </GlobalContext.Provider>
  )
}

export default App;