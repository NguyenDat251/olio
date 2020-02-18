
<template>
  <div>
    <v-card v-if="loading_panel">
      <div id="loading-panel">
        <div id="loading-panel-loader">
          <img src="images/logo.png" />
          <div id="loading-panel-text-loading">Loading ...</div>
        </div>
      </div>
    </v-card>

    <div id="app">
      <v-app>
        <v-app-bar app color="primary">
          <v-img src="/images/logo.png" max-height="50" max-width="200" contain></v-img>
        </v-app-bar>
        <v-content>
          <v-container fluid>
            <v-row>
              <v-col cols="6" md="6" sm="12" xs="12">
                <v-card id="main-background"></v-card>
                <v-card
                  v-for="item in items"
                  :key="item.id"
                  :id="item.id"
                  class="image-area"
                  :color="item.color"
                ></v-card>
              </v-col>
              <v-col cols="6" md="6" sm="12" xs="12">
                <div style="margin-bottom:5px">
                  <v-btn class="ma-2" tile outlined color="success">Quay Lại</v-btn>
                  <v-btn class="ma-2" tile outlined color="indigo" dark>
                    <v-icon left>mdi-pencil</v-icon>Hướng Dẫn
                  </v-btn>
                </div>
                <v-card>
                  <v-tabs v-model="tab" centered icons-and-text style="padding:5px">
                    <!-- <v-tab v-for="tab in tab_label" :key="tab.label" :href="tab.href">
                      {{tab.label}}
                      <v-img :src="tab.img" max-width="52" max-height="52"></v-img>
                    </v-tab>-->
                    <v-tab v-for="tab in ItemIterator" :key="tab" :href="tab_label[tab].href">
                      {{tab_label[tab].label}}
                      <v-img :src="tab_label[tab].img" max-width="52" max-height="52"></v-img>
                    </v-tab>
                  </v-tabs>

                  <!-- Color-select-zone  -->
                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="tab in ItemIterator" :key="tab" :value="tab">
                      <template>
                        <v-card flat>
                          <v-item-group style="padding: 15px;">
                            <v-container style="height:300px; overflow-y:scroll">
                              <v-row>
                                <!-- <template v-if="tab != 'blanket-duo'"> -->
                                <!-- <template v-if="tab != 'blanket-duo'"> -->
                                <v-col v-for="n in ListSwatch[tab]" :key="n.label" cols="2" md="2">
                                  <v-item v-slot:default="{ active, toggle }">
                                    <div>
                                      <v-card
                                        :color="active ? 'primary' : ''"
                                        @click="changColor(n, tab, toggle, active)"
                                      >
                                        <template v-if="tab != 'blanket-duo'">
                                          <v-card height="60px" :color="n.color"></v-card>
                                        </template>
                                        <template v-else>
                                          <div :style="n.style"></div>
                                        </template>
                                        <v-card-text
                                          class="text-center"
                                          :class="active ? 'white--text' : ''"
                                        >{{n.label}}</v-card-text>
                                      </v-card>
                                    </div>
                                  </v-item>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-item-group>
                          <v-item-group>
                            <div style="margin-top:10px;">
                              <v-row justify="center">
                                <v-col cols="4">
                                  <v-overflow-btn
                                    :items="ListSize[tab]"
                                    item-text="label"
                                    item-value="value"
                                    :placeholder="ListSize[tab][0].label"
                                    v-model="ItemIsSelected[tab].ValueSize"
                                    @change="ChooseSize(tab)"
                                    dense
                                    outlined
                                  ></v-overflow-btn>
                                </v-col>
                              </v-row>
                            </div>
                          </v-item-group>
                        </v-card>

                        <!--Button dropdown select size-->
                      </template>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>

                <v-card style="margin-top:10px">
                  <v-card-title>
                    <h4>OLIO Set Đã Chọn:</h4>
                  </v-card-title>
                  <v-list dense>
                    <v-list-item v-for="item in ItemIterator" :key="item">
                      <template v-if="ItemIsSelected[item].label !== null">
                        <v-list-item-content>{{ItemIsSelected[item].name}}</v-list-item-content>
                        <v-list-item-content
                          class=".align-center"
                        >Màu {{ItemIsSelected[item].label}}</v-list-item-content>
                        <template v-if="ItemIsSelected[item].ValueSize !== null">
                          <v-list-item-content class="align-end">{{ItemIsSelected[item].size}}</v-list-item-content>
                        </template>
                        <template v-else>
                          <v-list-item-content class="align-end">Cần chọn kích thước</v-list-item-content>
                        </template>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
                <div class="text-center" style="margin-top:10px">
                  <v-btn class="ma-2" x-large tile color="indigo" dark @click="addToCart()">
                    <v-icon left>mdi-pencil</v-icon>ĐẶT HÀNG
                  </v-btn>
                  <v-btn @click="addToCart()">abc</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<style scope type="text/css">
    
    #loading-panel {
      height: 100%;
      position: absolute;
      width: 100%;
      display: table;
      background-color: #0d1d42;
    }

    #loading-panel-loader {
      height: 100%;
      width: 100%;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
    }

    #loading-panel-text-loading {
      font-size: 24px;
      margin: 10px auto;
      font-weight: bold;
      color: #0d1d42;
      background: #ffffff;
      width: 200px;
      padding: 5px 5px;
    }

    #test-change {
        color: white;
    }

  #main-background{
    background-image: url(/images/background.jpg);
    height: 760px; 
    z-index:1;
    background-size:     cover; 
    background-position: center center;
  }

  .image-area {
    background-blend-mode: multiply;
    top: 0;
    background-size:     cover; 
    background-position: center center;
    -webkit-mask-size: cover;
    -webkit-mask-position: center center;
    mask-size: cover;
    mask-position: center center;
    height: 760px;
    margin-top: -760px;
  }

  #blanket-back-img {
    background-image: url(/images/men-b-w.png);
    -webkit-mask-image: url(/images/men-b.png);
    mask-image: url(/images/men-b.png);
     z-index: 3;
  }
  #blanket-front-img {
    background-image: url(/images/men-f-w.png);
    -webkit-mask-image: url(/images/men-f.png);
    mask-image: url(/images/men-f.png);
     z-index: 3;
  }
  #pillow-img {
    background-image: url(/images/goi-w.png);
    -webkit-mask-image: url(/images/goi.png);
    mask-image: url(/images/goi.png);
     z-index: 3;
  }
  #drap-img {
    background-image: url(/images/nem-s.png);
    -webkit-mask-image: url(/images/nem.png);
    mask-image: url(/images/nem.png);
     z-index: 1;
  }
  #bolster-img {
    background-image: url(/images/goiom-w.png);
    -webkit-mask-image: url(/images/goiom.png);
    mask-image: url(/images/goiom.png);
     z-index: 3;
  }
  </style>

<script>
import MAGENTO_API from '~/plugins/magento'
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
export default {
    async asyncData(context) {
      let ListSize= {};
      ListSize["drap"] = await MAGENTO_API.ConfigProduct.getSizeItem('LA-14038');
      ListSize["pillow"] = [{label: '45x65 cm', value: ''}];
      ListSize["bolster"] = [{label: '35x100 cm', value: ''}];
      ListSize["blanket"] = await MAGENTO_API.ConfigProduct.getSizeItem('LA-14041');
      ListSize["blanket-duo"] = await MAGENTO_API.ConfigProduct.getSizeItem('LA-14042');
      
      //console.log(ListSize["drap"]);

      return {
        ListSize: ListSize
      }
    },
    data: function () {
        return {
          DefaultColor: "#00818F",
          tab_label: {
                       "drap": {label: "GA BỌC",
                        img: "/images/icon_1.png",
                        href: "#drap"},
                        "pillow": {label: "ÁO GỐI",
                        img: "/images/icon_2.png",
                        href: "#pillow"},
                        "bolster": {label: "ÁO GỐI ÔM",
                        img: "/images/icon_3.png",
                        href: "#bolster"},
                        "blanket": {label: "MỀN 1 MÀU",
                        img: "/images/icon_4.png",
                        href: "#blanket"},
                        "blanket-duo": {label: "MỀN 2 MÀU",
                        img: "/images/icon_5.png",
                        href: "#blanket-duo"}},
          
          ItemIterator: [ "drap", 
                         "pillow",
                         "bolster",
                         "blanket",
                         "blanket-duo"],

          
          /*background-img*/
          items: [{id: "drap-img",
                  color: "#00818F"},
                  {id: "pillow-img", 
                  color: "#00818F"},
                  {id: "bolster-img",
                  color: "#00818F"},
                  {id: "blanket-back-img",  
                  color: "#00818F"},
                  {id: "blanket-front-img",
                  color: "#00818F"}],
                  
          ItemIsSelected: {"drap": {name: "Ga bọc",
                                    sku: "LA-14038",
                                    label: null,
                                    color: null,
                                    size: null,
                                    ValueColor: null,
                                    ValueSize: null},
                          "pillow": {name: "Áo gối",
                                    sku: "LA-14039",
                                    label: null,
                                    color: null,
                                    size: null,
                                    ValueColor: null,
                                    ValueSize: null},
                          "bolster": {name: "Áo gối ôm",
                                      sku: "LA-14040",
                                      label: null,
                                      color: null,
                                      size: null,
                                      ValueColor: null,
                                      ValueSize: null},
                          "blanket": {name: "Mền 1 màu",
                                      sku: "LA-14041",
                                      label: null,
                                      color: null,
                                      size: null,
                                      ValueColor: null,
                                      ValueSize: null},
                          "blanket-duo": {name: "Mền 2 màu",
                                          sku: "LA-14042",
                                          label: null,
                                          color: null,
                                          size: null,
                                          ValueColor: null,
                                          ValueSize: null},
          },

          ListSwatch: {},
          ListSize: {},
          // itemSizeSelected: {"drap": {label: null,
          //                           value: null},
          //                   "pillow": {label: null,
          //                           value: null},
          //                   "bolster": {label: null,
          //                           value: null},
          //                   "blanket": {label: null,
          //                           value: null},
          //                   "blanket-duo": {label: null,
          //                           value: null},},
          //CurrentColor: "red",
         // CurrentItem: null,
          //ListSwatch: [],
          //ListSwatchDuo: [],
          //item: "red",
          loading_panel: true,
          tab: null,



        }
      },
      methods: {
          onClickCard() {
              this.color_text = white;
          },
          changColor(Swatch, item, toggle, active) {
            let $this = this;
            toggle();

            let ColorWillBeSet = $this.DefaultColor;
            let ColorWillBeSetForFrontBlanket = $this.DefaultColor;
            let ColorWillBeSetForBackBlanket = $this.DefaultColor;
            let LabelWillBeSet = null;
            let CodeWillBeSet = null;

            //set up the color, if the button that change the color is not active, the color will be set by the color of the button. In the opposite, the color will be set by default
            if(!active){
              ColorWillBeSet = Swatch.color;
              LabelWillBeSet = Swatch.label;
              CodeWillBeSet = Swatch.value;
              if(item == "blanket-duo"){
                ColorWillBeSetForFrontBlanket = Swatch.color_front;
                ColorWillBeSetForBackBlanket = Swatch.color_back;
              }
            }
            $this.ItemIsSelected[item].label = LabelWillBeSet;
            $this.ItemIsSelected[item].ValueColor = CodeWillBeSet;

            switch (item){
              case "drap":
                $this.items[0].color = ColorWillBeSet;
                break;
              case "pillow":
                $this.items[1].color = ColorWillBeSet;
                break;
              case "bolster":
                $this.items[2].color = ColorWillBeSet;
                break;
              case "blanket":
                $this.items[3].color = ColorWillBeSet;
                $this.items[4].color = ColorWillBeSet;
                break;
              case "blanket-duo":
                $this.items[3].color = ColorWillBeSetForBackBlanket;
                $this.items[4].color = ColorWillBeSetForFrontBlanket;
                break;
              
            }
           
          },
          ChooseSize(tab){
            this.ListSize[tab].forEach(item => {
              if(item.value === this.ItemIsSelected[tab].ValueSize)
                this.ItemIsSelected[tab].size = item.label;
            })
          },
          addToCart(){
            console.log("add to cart:");
            // this.ItemIterator.forEach(async (item) => {
            //   if (this.ItemIsSelected[item].ValueColor) {
            //     await MAGENTO_API.Cart.addConfigProductToCart(this.$router, this.ItemIsSelected[item]);
            //     console.log("add to cart: " + this.ItemIsSelected[item].name);
            //   }
            // })
            this.$router.push({
              path: '/test',
              data: {abc: "abc"}
            
              });
          }
      },
      created: function () {
        let $this = this;

        $this.ItemIterator.forEach(item =>{
          //console.log(item);
          if(item !== "blanket-duo"){
            $this.ListSwatch[item] = require('static/olio.json').ArrSwatch;
          }
          else{
            $this.ListSwatch[item] = require('static/olio.json').ArrSwatchDuo;
          }
        })
        
        //set the first option size for all item
        $this.ItemIterator.forEach(item =>{
          $this.ItemIsSelected[item].size = $this.ListSize[item][0].label;
          $this.ItemIsSelected[item].ValueSize = $this.ListSize[item][0].label;
        })
        
        //console.log($this.ListSwatch);

        //set up style for each duo color button
        $this.ListSwatch["blanket-duo"].forEach(element => {
          element["style"] =  "height: 60px; background: linear-gradient(154deg, " + element.color_front 
          + " 0%, " + element.color_front + " 50%, " +  element.color_back + " 50%, " +  element.color_back + " 100%);";
        });

        
        this.loading_panel = false;
      }
}
</script>