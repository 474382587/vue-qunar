<template>
  <div>
    <div class="title">
        Weekend Choices
    </div>
    <ul>
        <li class="item border-bottom" v-for="item in itemList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt="item.id">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-description">{{item.description}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      itemList: [
        {
          id: '01',
          imgUrl: 'static/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: 'Planetarium',
          description:
            "Planetarium Star Theatre, you'll experience planets, meteor showers, nebulas, black holes, galaxies, and countless other astronomical wonders. ",
          price: '$24.99/ticket',
          link: '#'
        },
        {
          id: '02',
          imgUrl:
            'static/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: 'Disneyland Park',
          description:
            'Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. ',
          price: 'Strat from $184.99/ticket',
          link: '#'
        },
        {
          id: '03',
          imgUrl:
            'static/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          title: 'Wild Animal Safari',
          description:
            'Choose your safari! Discover herds of animals roaming field habitats on a unique adventure at the San Diego Zoo Safari Park.',
          price: '$14.99/ticket',
          link: '#'
        },
        {
          id: '04',
          imgUrl:
            'static/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
          title: 'Water Park',
          description:
            'Cultus Lake Waterpark is the biggest waterpark in BC, with over 16 slides',
          price: 'Start from $34.99/ticket',
          link: '#'
        },
        {
          id: '05',
          imgUrl: 'static/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg',
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
@import "~styles/mixins.styl";
.title {
    line-height: 0.8rem;
    background-color: #eee;
    text-indent: 0.2rem;
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37%;

    img {
        width: 100%;
    }
}

.item-info {
    flex: 1;
    padding: 0.2rem;
    overflow: hidden;

    .item-title {
        font-size: 0.32rem;
        line-height: 0.54rem;
        ellipsis();
    }

    .item-description {
        color: #616161;
        line-height: 0.42rem;
        ellipsis();
    }
}
</style>
