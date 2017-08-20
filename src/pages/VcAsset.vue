<template>
  <div class="vc">
    <Navigation type="white" />
    <div class="vc_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="vc_top_mask"></div>
      <Banner :content="vcTopContent" class="vc_top_main" />
    </div>
    <div class="vc_stage">
      <h2 class="vc_stage_title">3 STAGE MODEL</h2>
      <div class="vc_stage_model" v-for="(item, index) in stageModle">
        <p class="vc_stage_model_order">0{{index + 1}}</p>
        <h3 class="vc_stage_model_title">{{item.title}}</h3>
        <div class="vc_stage_model_content">{{item.content}}</div>
      </div>
    </div>
    <div class="vc_diligence clearfix">
      <h2 class="vc_diligence_title">DUE DILIGENCE MODEL</h2>
      <div class="vc_diligence_main">
        <h3 class="vc_diligence_main_title" v-html="diligenceModel.main.title"></h3>
        <div class="vc_diligence_main_content" v-html="diligenceModel.main.content"></div>
      </div>
      <div :class="['vc_diligence_model', (index % 2 === 0 ? 'odd' : 'even')]" v-for="(item, index) in diligenceModel.parts">
        <div :class="['vc_diligence_model_content', `vc_diligence_model_content_${index}`]" v-html="item.content"></div>
      </div>
    </div>
    <div class="vc_coverage">
      <h2 class="vc_coverage_title">SECTOR COVERAGE</h2>
      <BlockText type="h" :content="item" :key="index" v-for="(item, index) in blockContent" />
    </div>
    <div class="vc_map">
      <div class="vc_map_main">
        <div class="vc_map_main_area vc_map_main_area_1">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_2">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_3">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_4">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_5">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_6">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_7">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_8">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_9">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_10">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
        <div class="vc_map_main_area vc_map_main_area_11">
          <i class="vc_map_main_area_point vc_map_main_area_point_dot"></i>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle1"></div>
          <div class="vc_map_main_area_point vc_map_main_area_point_circle vc_map_main_area_point_circle2"></div>
        </div>
      </div>
    </div>
    <Copyright />
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import Banner from '@/components/Banner'
import BlockText from '@/components/BlockText'
import Copyright from '@/components/Copyright'

export default {
  components: {
    Navigation,
    Banner,
    BlockText,
    Copyright
  },

  mixins: [mixin],

  data () {
    return {
      vcTopContent: {
        bigTitle: ['VENTURE', 'CAPITAL'],
        smallTitle: ['ASSEST CLASS']
      },
      stageModle: [
        {
          title: 'SEED AND EARLY STAGE FUND',
          content: 'Everything with our venture fund managers begins with its Seed fund where the team take a collaborative co-investment approach to deal flow (targeting 3.5% ownership) deploying over 35 investments over the first 3 years of the fund life. This gives the Seed fund ample time for its portfolio companies to mature, for the Seed fund to follow-on in subsequent financings of its best performing companies, and for the Seed fund to provide liquidity to investors as soon in the fund lifecycle as possible. This approach also allows the Seed fund to withstand over half of its investments ending in "below base case" scenarios (20% write-offs and 25% 1x outcomes) while still cumulatively performing in the top quartile of the asset class. This gives the Seed Fund the ability to hunt for outsized returns, collaborate with blue chip funds, and take aggressive swings while still delivering above-market returns relative to other asset classes including PE, Real Estate and VC comparable benchmarks.'
        },
        {
          title: 'GROWTH FUND',
          content: 'Our venture fund managers pursue downside protective provisions such as liquidation preferences and broad-based weighted average anti-dilution protection and upside protective provisions such as pro-rata rights - allowing the Seed fund to maintain ownership in strong portfolio companies while serving as a priori access and deal flow for its Growth fund. The managers employ an aggressive and calculated strategy where it uses its pro-rata rights to gain access to growth rounds of its portfolio companies while also using this capital and leverage to lead rounds in subsequent financings of its best performing companies. This strategy coupled with their ability to source the best deals in the world / maintain relationships with the strongest funds on Sand Hill Road - puts our Growth fund in a very unique situation where capital can be deployed in favorable risk / reward profile scenario companies that our fund managers have a very strong "insider" like relationship with. Our managers use their world class network to seek out new deals in growth round financings of world class companies.'
        },
        {
          title: 'SPECIAL PURPOSE VEHICLE ARBITRAGE OPPORTUNITIES',
          content: 'Our venture fund managers take advantage of its access to seek opportunistic arbitrage opportunities at the Pre-IPO stage. Given their strong access to general counsel at the largest venture-backed companies in the world as well as to venture funds that historically seek liquidity on the secondary market before IPO. Their ability to navigate this aspect of the asset class when it comes to collaborating with the Board of a Company directly to avoid ROFR / ensure Company approval of the transaction or to negotiate with a VC directly to buy out an existing LP (with no forward carry or future management fees) has allowed our venture fund managers to secure opportunistic investments for its investor base. Our models show that under the right macro conditions, the Pre-IPO market can serve as a solid return profile for its investors targeting 1.5x - 2.5x blended average returns over short periods of time relative to the rest of the asset class.'
        }
      ],
      diligenceModel: {
        main: {
          title: 'INVESTMENT DECISION',
          content: 'Our partners have<br>developed a very systemic<br>diligence process. Positive<br>investment decisions<br>are made for about 1% of all<br>companies our partners<br>evaluate.'
        },
        parts: [
          {
            content: 'Preliminary Assessment<br>includes an introduction<br>to the team, articulation<br>of problem and solution,<br>review of materials, and<br>assessment of channels.'
          },
          {
            content: 'Research and Discovery<br>includes high level<br>research into the<br>management team, the<br>market dynamics, the<br>company\'s business<br>model and the metrics<br>involved.'
          },
          {
            content: 'Deep Dive<br>Diligence includes the<br>analysis of financial<br>models, market share<br>potential, technical<br>review of the<br>product/service by<br>industry experts and deal<br>structure review.'
          },
          {
            content: 'Final Diligence<br>includes meeting with<br>founders for live<br>character assessment,<br>strategic reasoningon<br>inclusion into portfolio<br>and potential for high exit<br>valuation.'
          }
        ]
      },
      blockContent: [
        {
          smallTitle: 'ENTERPRISE',
          bigTitle: ' INFRASTRUCTURE',
          main: ['Data Center Infrastructure, IT Operations, Enterprise Mobility, Database Technology, Big Data Infrastructure, Virtualization, DevOps, Coding Tools, Mobile DevTools, Enterprise Storage, Enterprise Networking, Open Source, PaaS, Application Testing, Enterprise Security, API Management, Cloud Infrastructure, Docker Ecosystem']
        },
        {
          smallTitle: 'ENTERPRISE',
          bigTitle: ' APPLICATIONS',
          main: ['Mining Tech, ERPVIEW, Customer Success Management, Event Management, Enterprise Collaboration, Product Management Tools, Field Force Automation, SaaS, Sales Force Automation, Data as a Service, PR Tech, Call Center Software, Nonprofit Tech, Loyalty Software, Business Intelligence, GRC Software, Customer Service Software, HRTech, Manufacturing Tech, Mobile-first Enterprise Apps, MarketingTech, Legal Tech, RetailTech, SCM Software, Aviation Software, Big Data Analytics, Robotic Process, Automation, Finance & Accounting, Ecommerce Enablers, GovTech, Construction Tech']
        },
        {
          smallTitle: 'TECH',
          bigTitle: 'NOLOGY',
          main: ['Chatbots, Smart Cars, Industrial Internet of Things, Consumer Robotics, Virtual Reality, Sensors, Smart Homes, Wearable Technology, Advanced Materials, Industrial Robotics, Smart Cities, Natural User , Interface, 3D Printing, Semiconductors, Security & Surveillance Technology, NewSpace, Display , Technology, Artificial Intelligence, Internet of Things Infrastructure, Geographic Information System, Blockchain, Augmented Reality, Nanotechnology, Drones']
        },
        {
          smallTitle: 'FINTECH/',
          bigTitle: 'TELECOM',
          mainTitle: ['FINTECH', 'TELECOM'],
          main: [
            'Mobile Payments, Banking Tech, Investment Tech, Consumer Finance, Insurance Tech, Bitcoin, Remittance, Alternative Lending, Robo Advisors, Crowdfunding, Finance & Accounting, Payments',
            'OSS & BSS, Telecom Infrastructure, Telecom Operators, Telecom Operation & Maintenance, 5G Enablers, AUTO, Electric Vehicles, Smart Cars, Auto Brands, Auto Components, Auto Tech, Auto Services, Transport Tech'
          ]
        },
        {
          smallTitle: 'MOBILE/',
          bigTitle: 'MEDIA AND ENTERTAINMENT',
          mainTitle: ['MOBILE', 'MEDIA AND ENTERTAINMENT'],
          main: [
            'Mobile Payments, Mobile Gaming, Mobile App Distribution, Mobile Communication, Mobile Advertising, Essential Mobile Apps, Mobile-first Enterprise Apps, Mobile App Studios, Mobile DevTools',
            'Tech for Media Industry, Tech for Entertainment Industry, Online Video, Content Platforms, Music Tech, Media & Entertainment Providers, Services for Media & Entertainment, Internet-first Media'
          ]
        },
        {
          smallTitle: 'CON',
          bigTitle: 'SUMER',
          main: ['Mobile App Distribution, Conversational Commerce, Sports Tech, Social Platforms, Online Rental, Local Services, Content Platforms, Music Tech, Auto Tech, Online Grocery, Essential Mobile Apps, Online Travel, Transport Tech, FoodTech, Wedding Tech, Online Photos, Logistics Tech, Matchmaking, Marketplaces, Online Gifting, Mobile Communication, RealEstate Tech, Consumer Goods, Mobile App Studio']
        },
        {
          smallTitle: 'RETAIL/',
          bigTitle: 'GAMINGT<span>/</span>FOOD',
          mainTitle: ['RETAIL', 'GAMINGT', 'FOOD'],
          main: [
            'Fashion Tech, B2B eCommerce, Mom & Baby Care, Product Discovery, Subscription Commerce, Cross Border Commerce, Home Improvements, RetailTech, Second Hand Goods, Internet First Brands, Beauty Tech, Online Retail, Ecommerce Enablers, Coupons and Deals',
            'PC & Console Gaming, Mobile Gaming, VR Gaming, Gaming Enablers',
            'Food Processing & Packaging, Food Products, Food Services, Online Grocery, FoodTech'
          ]
        },
        {
          smallTitle: 'LIFE SCIENCES/',
          bigTitle: 'ENERGY<span>/</span>AGRICULTURE',
          mainTitle: ['LIFE SCIENCES', 'ENERGY', 'AGRICULTURE'],
          main: [
            'Medical Devices, Diagnostics, Diabetes, Biopharma, Biotech R&D, Biopharma , Nutraceuticals, Diagnostics , Biopharma Contract Services, Life Sciences Software',
            'Electric Vehicles, Smart Grid, Nuclear Energy, Wind Energy, Solar Energy, Energy Storage, Waste & Water Management, Oil & Gas Tech, Geothermal Energy, Marine Energy, Hydro Power, Energy Efficiency, Bioenergy, Oil & Gas',
            'Aquaculture & Fisheries, AgriTech, Cellular Agriculture, Livestock, Agriculture, Field Crops, Horticulture, Indoor Agriculture'
          ]
        },
        {
          smallTitle: 'EDTECH/',
          bigTitle: 'ADTECH',
          mainTitle: ['EDTECH', 'ADTECH'],
          main: [
            'Pre-K, Continued Learning, Language Learning, K-12, Corporate Learning, Higher Education, Education IT, Test Preparation',
            'Mobile Advertising, MarketingTech, Traditional Advertising, HEALTHTECH, Healthcare Analytics, Telemedicine, Healthcare IT, Fitness & Wellness, Consumer HealthTech, Life Sciences Software'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';
  $blueColor: #017ad7;

  .vc {
    &_top {
      position: relative;
      width: 100%;
      background: url(../assets/img/core.jpg) 0 0 no-repeat;
      background-size: cover;
      &_mask {
        width:  100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .8);
      }
      &_main {
        left: 0;
        bottom: rem(170px);
      }
    }
    &_stage {
      background: url(../assets/img/vc_stage_model_bg.png) right bottom no-repeat;
      background-size: 100%;
      background-color: #000000;
      padding: rem(108px) rem(32px) rem(96px) rem(32px);
      &_title {
        font-size: 20px;
        color: #ffffff;
        line-height: 1;
      }
      &_model {
        padding-top: rem(84px);
        &:before {
          content: '';
          display: block;
          width: rem(20px);
          height: rem(4px);
          background-color: $blueColor;
          margin-bottom: rem(45px);
        }
        &_order {
          font-size: 30px;
          font-family: FFXEuropeanThin;
          font-weight: 300;
          color: #ffffff;
          line-height: 1;
          margin-bottom: rem(20px);
        }
        &_title {
          font-size: 16px;
          color: #ffffff;
          line-height: rem(68px);
          margin-bottom: rem(10px);
        }
        &_content {
          font-size: 12px;
          color: #8d8d8d;
          line-height: 1.5;
        }
      }
    }
    &_diligence {
      background-color: #000000;
      padding: rem(116px) rem(32px) rem(100px) rem(32px);
      position: relative;
      &_title {
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 1;
        margin-bottom: rem(96px);
      }
      &_main {
        position: absolute;
        border-radius: 100%;
        border: rem(8px) solid $blueColor;
        width: rem(344px);
        height: rem(344px);
        left: 50%;
        margin-left: rem(-180px);
        top: 50%;
        margin-top: rem(-136px);
        background-color: #000000;
        z-index: 1;
        text-align: center;
        box-shadow: 0 0 rem(4px) rgba(0,0,0,.5);
        &_title {
          font-size: 12px;
          color: #fff;
          padding-top: rem(76px);
          line-height: 1;
          padding-bottom: rem(24px);
        }
        &_content {
          font-size: 12px;
          color: #8d8d8d;
          line-height: 1.1;
        }
      }
      &_model {
        float: left;
        width: 50%;
        box-sizing: border-box;
        margin-bottom: rem(34px);
        &_content {
          background-color: #202020;
          height: rem(464px);
          box-sizing: border-box;
          padding: rem(30px) rem(16px);
          border-radius: rem(18px);
          font-size: 12px;
          &_2 {
            height: rem(494px);
            padding-top: rem(120px);
          }
          &_3 {
            height: rem(494px);
            padding-top: rem(120px);
          }
        }
        &.odd {
          padding-right: rem(42px);
          text-align: left;
        }
        &.even {
          padding-left: rem(42px);
          text-align: right;
        }
      }
    }
    &_coverage {
      padding: rem(96px) 0 rem(102px) 0;
      background-color: #ffffff;
      &_title {
        font-size: 20px;
        padding: 0 rem(32px) 0 rem(32px);
        color: #000000;
        line-height: 1;
      }
      .btext_title {
        font-size: 20px;
        margin-bottom: rem(44px);
      }
    }
    &_map {
      padding: rem(110px) rem(32px) rem(48px) rem(32px);
      background-color: #000000;
      &_main {
        position: relative;
        width: 100%;
        height: rem(336px);
        background: url(../assets/img/map.png) center center no-repeat;
        background-size: 100%;
        &_area {
          width: rem(70px);
          height: rem(70px);
          position: absolute;
          transition: opacity .5s ease-out;
          &_point {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            border-radius: 50%;
            background-clip: padding-box;
            background: transparent;
            &_dot {
              z-index: 1;
              background-color: #0079d7;
              border: 1px solid #202020;
            }
            &_circle {
              width: 100%;
	            height: 100%;
              &:after {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border-radius: 50%;
                opacity: 0;
                border: rem(4px) solid #0079d7;
                animation: ripple 2.5s ease-out .5s infinite;
              }
            }
          }
          &_1 {
            top: rem(93px);
            right: rem(103px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(20px);
                height: rem(20px);
              }
              &_circle1 {
                width: rem(34px);
                height: rem(34px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(68px);
                height: rem(68px);
              }
            }
          }
          &_2 {
            top: rem(23px);
            right: rem(23px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(14px);
                height: rem(14px);
              }
              &_circle1 {
                width: rem(24px);
                height: rem(24px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(48px);
                height: rem(48px);
              }
            }
          }
          &_3 {
            top: rem(94px);
            right: rem(135px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(8px);
                height: rem(8px);
              }
              &_circle1 {
                width: rem(25px);
                height: rem(25px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(50px);
                height: rem(50px);
              }
            }
          }
          &_4 {
            top: rem(215px);
            right: rem(78px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(14px);
                height: rem(14px);
              }
              &_circle1 {
                width: rem(25px);
                height: rem(25px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(48px);
                height: rem(48px);
              }
            }
          }
          &_5 {
            top: rem(147px);
            right: rem(327px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(10px);
                height: rem(10px);
              }
              &_circle1 {
                width: rem(25px);
                height: rem(25px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(48px);
                height: rem(48px);
              }
            }
          }
          &_6 {
            top: rem(210px);
            right: rem(440px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(10px);
                height: rem(10px);
              }
              &_circle1 {
                width: rem(25px);
                height: rem(25px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(48px);
                height: rem(48px);
              }
            }
          }
          &_7 {
            top: rem(58px);
            right: rem(477px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(8px);
                height: rem(8px);
              }
              &_circle1 {
                width: rem(25px);
                height: rem(25px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(50px);
                height: rem(50px);
              }
            }
          }
          &_8 {
            top: rem(116px);
            left: rem(97px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(10px);
                height: rem(10px);
              }
              &_circle1 {
                width: rem(25px);
                height: rem(25px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(48px);
                height: rem(48px);
              }
            }
          }
          &_9 {
            top: rem(70px);
            left: rem(78px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(10px);
                height: rem(10px);
              }
              &_circle1 {
                width: rem(25px);
                height: rem(25px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(48px);
                height: rem(48px);
              }
            }
          }
          &_10 {
            top: rem(37px);
            left: rem(42px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(14px);
                height: rem(14px);
              }
              &_circle1 {
                width: rem(24px);
                height: rem(24px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(48px);
                height: rem(48px);
              }
            }
          }
          &_11 {
            top: rem(55px);
            left: rem(40px);
            .vc_map_main_area_point {
              &_dot {
                width: rem(20px);
                height: rem(20px);
              }
              &_circle1 {
                width: rem(34px);
                height: rem(34px);
                &:after {
                  animation-delay: .1s;
                }
              }
              &_circle2 {
                width: rem(68px);
                height: rem(68px);
              }
            }
          }
        }
      }
    }
  }
  @keyframes ripple {
    0% {
      opacity: 0;
      transform: scale(.1);
    }

    5% {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>
