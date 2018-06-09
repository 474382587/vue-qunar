<template>
    <div>
        <div class="title">
            Hot Deals
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="DL"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-description">{{item.description}}</p>
                    <p class="item-price">{{item.price}}</p>
                    <p class="item-button"><a :href="item.link">More Info</a></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [
        {
          id: '01',
          imgUrl: 'static/d00d72664c3e73d8.water.jpg_200x200_d2b5720b.jpg',
          title: 'Planetarium',
          description:
            "Planetarium Star Theatre, you'll experience planets, meteor showers, nebulas, black holes, galaxies, and countless other astronomical wonders. ",
          price: '$24.99/ticket',
          link: '#'
        },
        {
          id: '02',
          imgUrl:
            'static/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
          title: 'Disneyland Park',
          description:
            'Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. ',
          price: 'Strat from $184.99/ticket',
          link: '#'
        },
        {
          id: '03',
          imgUrl:
            'static/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: 'Wild Animal Safari',
          description:
            'Choose your safari! Discover herds of animals roaming field habitats on a unique adventure at the San Diego Zoo Safari Park.',
          price: '$14.99/ticket',
          link: '#'
        },
        {
          id: '04',
          imgUrl:
            'static/0265195fc4b7913a758674357c3cc8f6.jpg_200x200_b58ea00b.jpg',
          title: 'Water Park',
          description:
            'Cultus Lake Waterpark is the biggest waterpark in BC, with over 16 slides',
          price: 'Start from $34.99/ticket',
          link: '#'
        },
        {
          id: '05',
          imgUrl: 'static/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
          title: 'Vancouver Aquarium',
          description:
            'The Vancouver Aquarium is a non-profit society dedicated to the conservation of aquatic life.',
          price: 'Strat from $36.49/ea',
          link: '#'
        }
      ]
    }
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
</style>
