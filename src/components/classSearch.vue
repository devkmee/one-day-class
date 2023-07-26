<template>
  <!-- Advance Search option start -->
  <div class="advance-search__wraper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!--메인 검색 DIv-->
          <div class="advance-search">
            <form action="#" class="inline-form">
              <div class="input-group">
                <label for="searchClsName">클래스 이름</label>
                <input
                  name="searchClsName"
                  id="searchClsName"
                  type="text"
                  placeholder="Dhaka"
                />
              </div>
              <div class="input-group">
                <label for="searchSidoCd">시도</label>
                <select name="searchSidoCd" id="searchSidoCd">
                  <option value="">searchSidoCd</option>
                </select>
              </div>
              <div class="input-group">
                <label for="searchSigCd">시군구</label>
                <select name="searchSigCd" id="searchSigCd">
                  <option value="">Average Price</option>
                </select>
              </div>
              <div class="input-group">
                <button class="btn btn-primary" type="submit">검색</button>
              </div>
            </form>
          </div>
          <div class="cate-search">
            <h1><span class="badge rounded-pill text-bg-primary">New</span></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Advance Search option end -->
</template>

<script></script>

<style></style>
