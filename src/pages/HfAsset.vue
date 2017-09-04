<template>
  <div class="hf">
    <PageLogo />
    <Navigation type="white" />
    <div class="hf_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="hf_top_mask"></div>
      <Banner :content="hfTopContent" class="hf_top_main" />
    </div>
    <div class="hf_block">
      <BlockText type="v" :content="item" :key="index" v-for="(item, index) in blockContent" />
    </div>
    <div class="hf_feat">
      <section :class="['hf_feat_content', `hf_feat_content_${item.type}`]" :key="item.type" v-for="item in featContent">
        <h2 class="hf_feat_content_title">{{item.title}}</h2>
        <div class="hf_feat_content_main">{{item.content}}</div>
      </section>
    </div>
    <Copyright />
  </div>
</template>

<script>
import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import PageLogo from '@/components/PageLogo'
import Banner from '@/components/Banner'
import BlockText from '@/components/BlockText'
import Copyright from '@/components/Copyright'

export default {
  components: {
    Navigation,
    PageLogo,
    Banner,
    BlockText,
    Copyright
  },

  mixins: [mixin],

  data () {
    return {
      hfTopContent: {
        bigTitle: ['HEDGE FUND'],
        smallTitle: ['ASSEST', 'CLASS']
      },
      blockContent: [
        {
          smallTitle: 'INVESTMENT',
          bigTitle: 'FRAMEWORK',
          main: ['Core strategy is to focus on emerging growth businesses with open-ended opportunities and competitive advantages. Companies that are the beneficiaries of structural shifts in industries are an added plus. Conversely, we will look to short challenged businesses on the wrong side of change with deteriorating business models. Target size is small to mid-cap as these names tend to experience more dramatic short-term dislocations in value thereby creating very compelling entry points. We also focus on identifying one or more timely catalysts for value realization including support of the macro tailwind in demographic changes, technological advances, governmental policies and intermarket relations.']
        },
        {
          smallTitle: 'INVESTMENT',
          bigTitle: 'SELECTION',
          main: ['The top down overlay for sifting through ideas will be to identify attractive investment themes or end markets where newer businesses are capturing value. This process should consistently generate 40-50 target opportunities at any given time. We focus on a handful of sectors where secular shifts are creating new business models. Technology and healthcare are two key focus areas. We also try to identify companies leveraging software and unique data assets to gain share within more mature sectors like transportation, industrials and business services. We will also occasionally identify an actionable, long duration investment theme (e.g. “global urbanization”, “mass automation of manual labor”) that has the potential to generate opportunities across multiple industry sectors. We typically avoid energy, utilities and retail companies.']
        },
        {
          smallTitle: 'PORTFOLIO',
          bigTitle: 'CONSTRUCTION',
          main: ['Primary investment vehicle will be a concentrated (10-15 positions) long-short equity fund with a target 130-30 ratio (or ~130% long vs. ~30% short).  If we see a massive dislocation in value in other asset classes (derivatives, fixed income, FX) then we will consider these on an ad hoc basis.  We establish 1- and 3-year target prices for every position and expect to periodically trade around core positions as they approach fair value.  Every short position will all be paired with a stop-limit order for risk management purposes.']
        },
        {
          smallTitle: 'VIEW ON US',
          bigTitle: 'MARKET',
          main: ['Primary investment vehicle will be a concentrated (10-15 positions) long-short equity fund with a target 130-30 ratio (or ~130% long vs. ~30% short).  If we see a massive dislocation in value in other asset classes (derivatives, fixed income, FX) then we will consider these on an ad hoc basis.  We establish 1- and 3-year target prices for every position and expect to periodically trade around core positions as they approach fair value.  Every short position will all be paired with a stop-limit order for risk management purposes.']
        },
        {
          smallTitle: 'GLOBAL MACRO',
          bigTitle: 'VIEW',
          main: ['There is a lingering uneasy sentiment still discernable because of structural risks primarily from unexpected tightening at ECB/JCB levels, the constant threat of protectionism and absence of fiscal policy details to effectively stimulate higher growth. This has polarized many political parties in numerous developed nations. While the risk in U.S. equity market is still to the upside, albeit at a moderated pace. However, the highly-correlated reflation trade for the better part of the last decade may be completed. The divergence has emerged within the market, which may explain the consistently subdued volatility index.Contrary to conventional theories, both long-duration U.S. treasury issues and gold may still prove to be effective hedges to equity portfolios, at least in the near term.']
        }
      ],
      featContent: [
        {
          type: 'equities',
          title: 'EQUITIES',
          content: 'Equity trading is the buying and selling of company stock shares. The equity market is the market for trading equity instruments. Stocks are securities that are a claim on the earnings and assets of a corporation. Shares in large publicly trading companies are bought and sold through one of the major stock exchanges, such as the New York Stock Exchange and the London Stock Exchange, which serve as managed auctions for stock trades. Stock shares in smaller public companies are bought and sold in over-the-counter (OTC) markets.'
        },
        {
          type: 'futures',
          title: 'FUTURES ⁄ OPTIONS',
          content: 'Futures and options are the two type of derivatives commonly traded. Derivatives are instruments that derive their value from an underlying security like a share, debt instrument, currency or commodity. A futures option, or option on futures, is an option contract in which the underlying is a single futures contract. The buyer of a futures option contract has the right (but not the obligation) to assume a particular futures position at a specified price (the strike price) any time before the option expires. The futures option seller must assume the opposite futures position when the buyer exercises this right.'
        },
        {
          type: 'fx',
          title: 'FX ⁄ CURRENCIES',
          content: 'Forex (FX) is the market in which currencies are traded. The forex market is the largest, most liquid market in the world, with average traded values that can be trillions of dollars per day. It includes all of the currencies in the world. There is no central marketplace for currency exchange; trade is conducted over the counter. Forex transactions take place on either a spot or a forward basis. A spot deal is for immediate delivery, which is defined as two business days for most currency pairs. Any forex transaction that settles for a date later than spot is considered a "forward.". A forward is a tailor-made contract: it can be for any amount of money and can settle on any date that\'s not a weekend or holiday. Transactions with maturities longer than a year are relatively unusual, but are possible. As in a spot transaction, funds are exchanged on the settlement date.'
        },
        {
          type: 'credit',
          title: 'CREDIT ⁄ FIXED INCOME',
          content: 'Credit market refers to the market through which companies and governments issue debt to investors, such as investment-grade bonds, junk bonds and short-term commercial paper. Sometimes called the debt market, the credit market also includes debt offerings, such as notes, and securitized obligations, including mortgage pools, collateralized debt obligations (CDOs), dwarfs and credit default swaps (CDS). A fixed-income security is an investment that provides a return in the form of fixed periodic payments and the eventual return of principal at maturity. Unlike a variable-income security, where payments change based on some underlying measure such as short-term interest rates, the payments of a fixed-income security are known in advance.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .hf {
    &_top {
      position: relative;
      width: 100%;
      background: url(../assets/img/hf_ac.jpg) 0 0 no-repeat;
      background-size: cover;
      &_mask {
        width:  100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
      }
      &_main {
        left: 0;
        bottom: rem(170px);
      }
    }
    &_block {
      margin-bottom: rem(90px);
    }
    &_feat {
      position: relative;
      width: 100%;
      background: url(../assets/img/hf_feat.jpg) 0 0 no-repeat;
      background-size: cover;
      padding-bottom: rem(70px);
      &_content {
        padding: rem(128px) rem(32px) 0 rem(32px);
        text-align: center;
        color: #fff;
        &:before {
          content: '';
          display: inline-block;
          width: rem(60px);
          height: rem(60px);
          margin-bottom: rem(34px);
        }
        &_equities {
          &:before {
            background: url(../assets/img/equities.png) center no-repeat;
            background-size: rem(60px) rem(54px);
          }
        }
        &_futures {
          &:before {
            background: url(../assets/img/futures.png) center no-repeat;
            background-size: rem(53px) rem(56px);
          }
        }
        &_fx {
          &:before {
            background: url(../assets/img/fx.png) center no-repeat;
            background-size: rem(57px) rem(55px);
          }
        }
        &_credit {
          &:before {
            background: url(../assets/img/credit.png) center no-repeat;
            background-size: rem(44px) rem(55px);
          }
        }
        &_title {
          font-family: NexaRustSans-Black;
          font-size: 18px;
          line-height: 1;
          margin-bottom: rem(62px);
        }
        &_main {
          line-height: 1.5;
          text-align: left;
          padding-left: rem(20px);
        }
      }
    }
  }
</style>
