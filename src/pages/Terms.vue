<template>
  <div class="terms">
    <PageLogo />
    <Navigation type="black" />
    <div class="terms_top">
      <p class="terms_top_title">argonautic</p>
      <p class="terms_top_title">ventures spc</p>
      <p class="terms_top_title">terms &amp;</p>
      <p class="terms_top_title">privacy</p>
      <div class="terms_top_desc">Access to and use of this internet web site www.argonau-ticventures.com (referred to as this “Site”) is governed by the terms and conditions set forth below, as well as any applicable laws and regulations. By browsing, visiting or otherwise accessing or using this Site, you agree to abide by the terms and conditions set forth below, which may be updated from time to time. If you do not agree to these terms, you may not further access or use the Site.</div>
    </div>
    <div class="terms_main">
      <BlockText :content="item" :key="index" v-for="(item, index) in mainContent" />
    </div>
    <Copyright />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import PageLogo from '@/components/PageLogo'
import BlockText from '@/components/BlockText'
import Copyright from '@/components/Copyright'

export default {
  components: {
    Navigation,
    PageLogo,
    BlockText,
    Copyright
  },

  data () {
    return {
      mainContent: [
        {
          smallTitle: 'RESTRIC',
          bigTitle: ' TIONS',
          main: [
            'Except as specifically permitted in accordance with the terms and conditions governing use of this Site, any use of such trademarks or trade names is strictly prohibited absent the prior written consent of Argonautic Investment Management Limited (“Argonautic”). In addition, the names, trade names or trademarks of third parties, may appear on this Site or its affiliated sites from time to time. All such names, trade names, and trademarks are proprietary to their respective owners. ',
            'Site information is general only. It is not intended as specific investment, financial, legal or tax advice and you should not rely on it as such. Site information does not constitute the official version of the disclosure documents of any companies managed by Argonautic. ',
            'This Site is not directed at, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to applicable law or regulation or which would subject Argonautic to any registration or licensing requirement within such jurisdiction. Nothing on this Site shall constitute an offer or a solicitation of an offer to buy or sell any products or services, including but not limited to any securities, financial instruments or other investments or investment advice. The information in this Site is descriptive of Argonautic as a whole and the services, securities and financial instruments described may not be suitable for you or available in the jurisdiction in which you are located. ',
            'Users of this Site should seek the advice of their independent financial adviser prior to taking any investment decision on the basis of any information contained herein and no information herein constitutes general or specific investment, legal, tax or accounting advice of any kind.'
          ]
        },
        {
          smallTitle: 'COPYRIGHT',
          bigTitle: ' NOTICE',
          main: [
            'This Site is protected by the copyright laws of the United States of America. Except as specifically permitted in accordance with the terms and conditions governing use of this Site, any copy, other reproduction, display, performance or retransmission of all or any of the contents of this Site is strictly prohibited. All rights reserved.'
          ]
        },
        {
          smallTitle: 'LI',
          bigTitle: 'NKS',
          main: [
            'For the convenience of users of this Site, one or more links to other internet web sites may appear from time to time. Argonautic assumes no responsibility for the contents of such internet web site, or for any potential damage arising out of or in connection with the use of any such link.'
          ]
        },
        {
          smallTitle: 'NO',
          bigTitle: ' LIABILITY',
          main: [
            'The information on this Site is provided on an "as is," "as available" basis. Argonautic makes no warranty that access to this site will be uninterrupted or error-free, that defects will be corrected, or that viruses or other harmful components will not be transmitted in connection with your use of this Site. Argonautic hereby expressly disclaims, to the fullest extent permitted by applicable law or regulation, all warranties, express, statutory or implied, regarding this Site and any results to be obtained from the use of this Site and its contents, including but not limited to all warranties of merchantability, non-infringement, fitness for a particular purpose or use and all warranties arising from course of performance, course of dealing or usage of trade or their equivalents under the applicable laws or regulations of any jurisdiction. Argonautic does not warrant or guarantee the accuracy, timeliness, suitability, completeness or availability of this Site or the information or results obtained from use of it.',
            'Under no circumstances and under no theory of any applicable law or regulation shall Argonautic be liable to anyone for any damages arising in tort, contract, strict liability or otherwise from access to or use of or inability to access or use this Site or from any action taken or not taken as a result, regardless of whether they are direct, indirect, special, incidental, or consequential damages of any character, including damages for trading losses or lost profits, or for any claim or demand by any third party, even if Argonautic knew or had reason to know of the possibility of such damages, claim or demand.'
          ]
        },
        {
          smallTitle: 'PRIVACY',
          bigTitle: ' POLICY',
          main: [
            'Argonautic collects information provided by users of this Site to generate follow-up messages for internal use only, and to generate statistical reports concerning users of this Site. Argonautic does not sell the information collected from users to any third party and does not make any other use of such information.'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';

  .terms {
    background-color: #f9f9f9;
    position: relative;
    &_top {
      padding-top: rem(222px);
      padding-left: rem(32px);
      padding-right: rem(32px);
      &_title {
        font-size: 35px;
        font-family: NexaRustSans-Black;
        line-height: 1.3;
        color: #000000;
      }
      &_desc {
        padding-top: rem(76px);
        font-size: 12px;
        color: #3a373a;
        line-height: rem(45px);
      }
    }
    &_main {
      padding-bottom: rem(72px);
    }
  }
</style>
