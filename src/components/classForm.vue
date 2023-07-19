<template>
  <div>
    <!-- contact-us section start -->
    <section class="contact-us" id="contact-us">
      <div class="container">
        <div class="section-header">
          <div class="section-header__content">
            <h4 class="sub-title">CLASS</h4>
            <h2 class="title">클래스 등록하기</h2>
          </div>
        </div>
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
              <form>
                <div class="mb-5">
                  <label class="form-label">클래스 이름</label>
                  <input type="password" name="clsName" class="form-control" />
                </div>
                <div class="flex-box">
                  <div>
                    <label class="form-label">카테고리</label>
                    <select
                      class="form-select"
                      name="cateCd"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label" name="area">모집상태</label>
                    <select
                      class="form-select"
                      name="status"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                    </select>
                  </div>
                </div>
                <div class="flex-box">
                  <div>
                    <label class="form-label">지역</label>
                    <select
                      class="form-select"
                      name="area"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label">가격</label>
                    <input type="text" name="price" class="form-control" />
                  </div>
                </div>
                <div class="flex-box">
                  <div>
                    <label class="form-label">최대 인원</label>
                    <input type="text" name="studentMax" class="form-control" />
                  </div>
                  <div>
                    <label class="form-label">수강시간 </label>
                    <input type="text" name="time" class="form-control" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact-us section end -->
  </div>
</template>

<script></script>

<style scoped>
.flex-box {
  display: flex;
}
.flex-box > div {
  flex: 1;
  margin: 0px 20px 40px 0px;
}
</style>
