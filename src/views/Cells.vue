<template>
  <div>
    <div style="display: flex; flex-wrap: wrap">
      <div class="container-cell">
        <b-cell :cell="bigNormal" size="big" />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" error size="big" />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" position="middle" />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" position="last" />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" position="single" />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" size="big" />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" position="middle" size="big" />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" position="last" size="big" />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" position="single" size="big" />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" position="middle" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" position="last" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="normalTitle" type="island" position="single" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" size="big" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" position="middle" size="big" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" position="last" size="big" error />
      </div>
      <div class="container-cell">
        <b-cell :cell="bigNormal" type="island" position="single" size="big" error />
      </div>
    </div>
    <div>
      <b-cell :cell="normalTitle" />
      <b-cell :cell="textNormal" size="big" error text-error="Заполните" />
      <b-cell :cell="textNormal" size="big" />
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <span class="text-black">{{ currencySplit('8 888 889,99')[0] }}
              <span style="color: #b8bdc2">{{ currencySplit('8 888 889,99')[1] || '00' }}</span>
              ₸</span>
          </div>
        </template>
      </b-cell>
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <b-icon style="cursor: pointer" name="arrowRight" />
          </div>
        </template>
      </b-cell>
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <b-icon style="cursor: pointer" name="warning" />
          </div>
        </template>
      </b-cell>
      <b-cell :cell="bigNormal" size="big">
        <template #rigthInfo>
          <div class="block-flex">
            <span class="text-gray">Optional</span>
          </div>
        </template>
      </b-cell>
      <b-cell :cell="bigNormal" size="big">
        <template #rigthInfo>
          <div style="cursor: pointer" class="block-flex">
            <span class="text-gray">Optional</span>
            <b-icon name="arrowRight" />
          </div>
        </template>
      </b-cell>
      <b-cell :cell="bigNormal" size="big">
        <template #rigthInfo>
          <div class="block-flex">
            <span class="text-gray">USD, KZT</span>
            <b-icon style="cursor: pointer; margin-left: 8px" name="close" />
          </div>
        </template>
      </b-cell>
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <input id="switch1" type="checkbox" hidden="hidden" />
            <label class="switch" for="switch1"></label>
          </div>
        </template>
      </b-cell>
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <input id="switch2" type="checkbox" checked hidden="hidden" />
            <label class="switch" for="switch2"></label>
          </div>
        </template>
      </b-cell>
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <input id="radio1" type="radio" checked hidden />
            <label for="radio1"></label>
          </div>
        </template>
      </b-cell>
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <input id="radio2" type="radio" hidden />
            <label for="radio2"></label>
          </div>
        </template>
      </b-cell>
      <b-cell :cell="normalTitle">
        <template #rigthInfo>
          <div class="block-flex">
            <input id="checkbox1" class="checkbox-input" type="checkbox" checked hidden />
            <label for="checkbox1"></label>
          </div>
        </template>
      </b-cell>
      <b-cell :cell="textSize" error error-text="Заполните" />
      <b-cell :cell="normalTitle" position="last">
        <template #rigthInfo>
          <div class="block-flex">
            <button>Действовать</button>
          </div>
        </template>
      </b-cell>
      <b-cell-group :cells="cellsGroup" />

      <b-cell-group :cells="[normalTitle]">
        <template #rigthInfo>
          <div class="block-flex">
            <b-icon style="cursor: pointer" name="arrowRight" />
          </div>
        </template>
      </b-cell-group>

      <b-cell-group :cells="cellsGroupOnlyTitle">
        <template #leftIcon>
          <b-icon name="leftIcon" />
        </template>
        <template #rigthInfo>
          <div class="block-flex">
            <b-icon style="cursor: pointer" name="arrowRight" />
          </div>
        </template>
      </b-cell-group>

      <b-cell-group :cells="[bigNormal]" is-image-left>
        <template #leftIcon>
          <b-icon name="bag" />
        </template>
      </b-cell-group>
      <b-cell-group :cells="[catCell]" is-image-left>
        <template #leftIcon>
          <img src="../assets//cat.png" width="48" />
        </template>
      </b-cell-group>
      <b-cell-group :cells="cellsGroupTestAll" is-image-left>
        <template #rigthInfo>
          <div class="block-flex">
            <b-icon style="cursor: pointer" name="arrowRight" />
          </div>
        </template>
      </b-cell-group>
      <b-cell-group :cells="cellsGroupWallet" is-image-left>
        <template #leftIcon="{ item }">
          <b-icon :name="item.icon" />
        </template>
        <template #rigthInfo="{ item }">
          <div v-if="item.price" class="block-flex">
            <span class="text-black">{{ currencySplit(item.price)[0] }}
              <span style="color: #b8bdc2">{{ currencySplit(item.price)[1] || '00' }}</span>
              {{ item.currType }}</span>
          </div>
        </template>
      </b-cell-group>
    </div>
  </div>
</template>

<script>
import { ref, } from 'vue'
const currency = '8 888 889,99'
export default {
  setup() {
    const bigNormal = ref({ title: 'Title', subtitle: 'Subtitle', },)
    const normalTitle = ref({ title: 'Title', },)
    const catCell = ref({ title: 'Котэ пёстрый', },)
    // ==================
    const textNormal = ref({ title: 'Оформить кредит', subtitle: 'За недорого', },)
    const textSize = ref({
      title: 'Если быть точным, то в самом длинном слове в мире умещается 189 918 букв.',
    },)

    const currencySplit = (currency,) => {
      return currency && currency.split(',',)
    }

    const cellsGroup = ref([
      { title: 'Title', },
      { title: 'Title', subtitle: 'Subtitle', },
      { title: 'Title', subtitle: 'Subtitle', },
      { title: 'Title', },
      { title: 'Title', },
    ],)

    const cellsGroupOnlyTitle = ref([{ title: 'Title', }, { title: 'Title', }, { title: 'Title', },],)

    const cellsGroupTestAll = ref([
      { title: 'Очень длинный заголовок в две строки', },
      { title: 'Title', subtitle: 'Subtitle', },
      { title: 'Title', },
    ],)

    const cellsGroupWallet = ref([
      {
        title: 'Счёт KZT',
        price: '8 888 889,99',
        currType: '₸',
        isBgDark: true,
        icon: 'leftIconWhite',
      },
      { title: 'Счёт USD', price: '159', currType: '$', isBgDark: true, icon: 'leftIconWhite', },
      { title: 'Открыть счёт', isBgDark: false, icon: 'leftIcon', },
    ],)

    return {
      bigNormal,
      normalTitle,
      textNormal,
      currencySplit,
      textSize,
      cellsGroup,
      cellsGroupOnlyTitle,
      cellsGroupTestAll,
      catCell,
      cellsGroupWallet,
    }
  },
}
</script>

<style lang="scss" scoped>
.container-cell {
  margin: 8px;
}
.block-flex {
  display: flex;
  align-items: center;
  .text-black {
    color: var(--vt-text-color-black);
    font-family: SF Pro Text;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.32px;
  }
  .text-gray {
    color: var(--vt-text-color-gray);
    font-family: SF Pro Text;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.32px;
  }
  button {
    padding: 4px, 8px, 4px, 8px;
    border-radius: 8px;
    background: var(--vt-bg-accent-light);
    color: var(--vt-text-color-red);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.078px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid var(--vt-bg-accent-light);
  }
}
</style>
