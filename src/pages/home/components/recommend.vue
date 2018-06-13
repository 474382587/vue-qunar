<template>
    <div>
        <div class="title">
            Hot Deals
        </div>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="DL"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-description">{{item.description}}</p>
                    <p class="item-price">{{item.price}}</p>
                    <p class="item-button"><a :href="item.link">More Info</a></p>
                </div>
            </router-link>
        </ul>
        <a href="#" class="more-info">Load All Items</a>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
    margin-top: 0.1rem;
    line-height: 0.8rem;
    background-color: #eee;
    text-indent: 0.2rem;
}

.item {
    display: flex;
    height: 2.4rem;
    overflow: hidden;

    .item-img {
        width: 2rem;
        height: 2rem;
        padding: 0.2rem;
    }

    .item-info {
        flex: 1;
        padding: 0.2rem;
        overflow: hidden;

        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
            font-weight: 500;
            ellipsis();
        }

        .item-description {
            line-height: 0.4rem;
            color: #bbbbbb;
            ellipsis();
        }

        .item-price {
            line-height: 0.4rem;
            font-family: Helvetica, Arial, sans-serif;
        }

        .item-button {
            line-height: 0.44rem;
            width: 1.2rem;
            margin: 0.1rem 0;
            background-color: #ff9300;
            padding: 0 0.2rem;
            border-radius: 0.08rem;

            a {
                color: #ffffff;
            }
        }
    }
}
.more-info
  display block
  line-height  0.80rem
  text-align center
  color $bgColor
</style>
