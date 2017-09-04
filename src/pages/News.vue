<template>
  <div class="news">
    <PageLogo />
    <Navigation type="white" />
    <div class="news_top" :style="{ height: this.winSize.height + 'px' }">
      <div class="news_top_mask"></div>
      <Banner :content="newsTopContent" class="news_top_main" />
    </div>
    <div class="news_main">
      <div class="news_main_loading" v-if="isFetching">
        <i class="news_main_loading_icon"></i><span class="news_main_loading_txt">LOADING...</span>
      </div>
      <div class="news_main_error" v-if="!isFetching && isError">
        LOAD ERROR, PLEASE TRY AGAIN！
      </div>
      <paginate v-if="!isFetching && !isError" name="news" :list="newsList" :per="1" tag="div" ref="paginator" class="paginate_list">
        <div class="news_main_content" v-for="newsContent in paginated('news')">
          <div class="news_main_content_item" v-for="(item, key) in newsContent">
            <h2 class="news_main_content_title">{{key}}</h2>
            <ul class="news_main_content_list">
              <li class="news_main_content_list_item" v-for="newItem in item">
                <div class="news_main_content_list_txt" v-html="newItem.content.rendered"></div>
                <p class="news_main_content_list_date">{{newItem.date | formatDate}}</p>
              </li>
            </ul>
          </div>
        </div>
      </paginate>
      <paginate-links v-if="!isFetching && !isError" :limit="3" class="paginate_links clearfix" for="news"></paginate-links>
    </div>
    <Copyright />
  </div>
</template>

<script>
import jsonp from 'jsonp'

import mixin from '@/mixins'
import Navigation from '@/components/Navigation'
import PageLogo from '@/components/PageLogo'
import Banner from '@/components/Banner'
import BlockText from '@/components/BlockText'
import Copyright from '@/components/Copyright'

function chunk (array, size) {
  var result = []
  for (let x = 0; x < Math.ceil(array.length / size); x++) {
    let start = x * size
    let end = start + size
    result.push(array.slice(start, end))
  }
  return result
}

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
      isFetching: true,
      isError: false,
      newsList: [],
      pn: 10,
      paginate: ['news'],
      newsTopContent: {
        bigTitle: ['PORTFOLIO'],
        smallTitle: ['COMPANY', 'NEWS']
      }
    }
  },

  created () {
    this.isFetching = true
    let total = 0
    this.getAllCategoriesData()
      .then(categories => {
        const categoriesIds = []
        this.categoriesInfo = categories.map(item => {
          total += item.post_count
          categoriesIds.push(item.id)
          return {
            id: item.id,
            title: item.title
          }
        })
        this.total = total
        this.categoriesIds = categoriesIds.join(',')
        let fakePage = 1
        // 小于等于100条，直接获取
        if (this.total <= 100) {
          // 根据分类数据获取文章
          this.getNewsData(this.categoriesIds, 1)
            .then(data => {
              this.isFetching = false
              this.processNewsResult(data)
            }, () => {
              this.isFetching = false
              this.isError = true
            })
        } else {
          fakePage = Math.ceil(this.total / 100)
          const requestNewsP = []
          for (let i = 1; i <= fakePage; i++) {
            requestNewsP.push(this.getNewsData(this.categoriesIds, i))
          }
          Promise.all(requestNewsP)
            .then(data => {
              this.isFetching = false
              this.processNewsResult(data)
            }, () => {
              this.isFetching = false
              this.isError = true
            })
        }
      }, () => {
        this.isFetching = false
        this.isError = true
      })
  },

  methods: {
    processNewsResult (data) {
      let tempObj = {}
      data.forEach(item => {
        const categoryId = item.categories[0]
        const category = this.categoriesInfo.filter(item => parseInt(item.id, 10) === parseInt(categoryId, 10))[0]
        tempObj[category['title']] = tempObj[category['title']] || []
        tempObj[category['title']].push(item)
      })
      let newData = []
      const keys = Object.keys(tempObj)
      keys.sort()
      const len = keys.length
      for (let i = 0; i < len; i++) {
        const key = keys[i]
        newData = newData.concat(tempObj[key])
      }
      const chunkArr = chunk(newData, this.pn)
      chunkArr.forEach((chunkItem, index) => {
        this.$set(this.newsList, index, {})
        chunkItem.forEach(item => {
          const categoryId = item.categories[0]
          const category = this.categoriesInfo.filter(item => parseInt(item.id, 10) === parseInt(categoryId, 10))[0]
          if (!this.newsList[index][category['title']]) {
            this.$set(this.newsList[index], category['title'], [])
          }
          this.newsList[index][category['title']].push(item)
        })
      })
    },
    getAllCategoriesData () {
      return new Promise((resolve, reject) => {
        jsonp('http://argonauticventures.com/api/get_category_index/', {
          name: 'get_category_index'
        }, (err, data) => {
          if (err) {
            reject(err)
          }
          const categories = data.categories
          resolve(categories)
        })
      })
    },
    getNewsData (categories, page) {
      return new Promise((resolve, reject) => {
        jsonp(`http://argonauticventures.com/wp-json/wp/v2/posts?categories=${categories}&per_page=100&page=${page}`, {
          param: '_jsonp'
        }, (err, data) => {
          if (err) {
            return reject(err)
          }
          resolve(data)
        })
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/sass/_common';
  $blueColor: #017ad7;

  .news {
    &_top {
      position: relative;
      width: 100%;
      background: url(../assets/img/news.jpg) 0 0 no-repeat;
      background-size: cover;
      &_mask {
        width:  100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
      }
      &_main {
        left: 0;
        bottom: rem(166px);
      }
    }
    &_main {
      padding: 0 rem(32px) rem(64px) rem(32px);
      &_loading, &_error {
        padding-top: rem(64px);
        color: #393939;
        font-size: 16px;
        text-align: center;
        &_icon {
          display: inline-block;
          width: rem(54px);
          height: rem(54px);
          border: rem(8px) rgba(0, 0, 0, 0.25) solid;
          border-top: rem(8px) black solid;
          border-radius: 50%;
          animation: spCircRot .6s infinite linear;
          vertical-align: middle;
        }
        &_txt {
          display: inline-block;
          vertical-align: middle;
          padding-left: rem(20px);
        }
      }
      &_content {
        &_item {
          padding-top: rem(90px);
          &:before {
            content: '';
            display: block;
            width: rem(20px);
            height: rem(4px);
            background-color: $blueColor;
            margin-bottom: rem(42px);
          }
        }
        &_title {
          font-size: 30px;
          font-family: NexaRustSans-Black;
          line-height: 1;
          color: #000000;
          font-weight: 300;
          margin-bottom: rem(62px);
        }
        &_list {
          &_item {
            margin-bottom: rem(32px);
            &:last-child {
              margin-bottom: 0;
            }
          }
          &_txt {
            font-size: 12px;
            line-height: rem(44px);
            a {
              color: #383637;
            }
            a:hover,a:active,a:focus {
              color: #0079d7;
            }
          }
          &_date {
            font-size: 9px;
            font-weight: 700;
            color: #3a373a;
            line-height: 1;
            margin-top: rem(8px);
          }
        }
      }
      .paginate_list {
        margin-bottom: rem(98px);
      }
      .paginate_links {
        text-align: center;
        .number, .ellipses {
          display: inline-block;
          margin-right: rem(40px);
          a {
            color: #d9d9d9;
            font-weight: 700;
          }
          &.active {
            a {
              color: #000000;
            }
          }
        }
      }
    }
  }
  @keyframes spCircRot {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
