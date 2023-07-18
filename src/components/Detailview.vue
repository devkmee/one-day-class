<template>
  <div>
    <!-- contact-us section start -->
    <section class="contact-us" id="contact-us">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-5">
            <div class="section-banner">
              <img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="section-header__content v2">
              <h4 class="sub-title">CLASS</h4>
              <h2 class="title">
                Looking to Buy a new property or Sell an existing one? Rents
                provides an awesome solution!
              </h2>
              <p class="text">
                A brand-new community featuring sophisticated apartment
                residences and stylish amenities in one of L.A.’s most energetic
                locations. From beachside to cityside or poolside to fireside,
                this is where lifestyle and location are in perfect alignment.
              </p>
              <ul class="icon-list">
                <li>
                  <span class="icon"
                    ><img src="assets/images/icons/check.svg" alt="checked"
                  /></span>
                  <span>Residentital Development</span>
                </li>
                <li>
                  <span class="icon"
                    ><img src="assets/images/icons/check.svg" alt="checked"
                  /></span>
                  <span>Commercial Development</span>
                </li>
                <li>
                  <span class="icon"
                    ><img src="assets/images/icons/check.svg" alt="checked"
                  /></span>
                  <span>Construction Management</span>
                </li>
                <li>
                  <span class="icon"
                    ><img src="assets/images/icons/check.svg" alt="checked"
                  /></span>
                  <span>Property Management</span>
                </li>
              </ul>

              <a href="#" class="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact-us section end -->
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const route = useRoute();

    const clsId = route.id;
    const cls = ref({
      clsId: 0,
      clsName: '',
      teacher: '',
      expln: '',
      area: '',
      cateCd: '',
      studentMax: '',
      timeStart: '',
      timeEnd: '',
      price: '',
      status: 0,
    });

    onMounted(() => {
      selectClsView();
    });

    //상세조회
    const selectClsView = async () => {
      try {
        const res = await axios.get(`class`);
      } catch (err) {}
    };

    return {
      clsId,
      cls,
    };
  },
};
</script>

<style lang="scss" scoped></style>
