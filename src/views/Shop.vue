<template>
  <div id="page-content">
    <div class="mt-3 block_filters_grid_1 block_filters_grid_1_complement">
      <div class="filter_btn">
        <img
          class=""
          style="width: 20px"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTkwLjUgMGgtMzB2MzYyaC0zMHY5MGgzMHY2MGgzMHYtNjBoMzB2LTkwaC0zMHptMCA0MjJoLTMwdi0zMGgzMHoiIGZpbGw9IiM2NjY2NjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDgxLjUgMzYyaC0zMHYtMzYyaC0zMHYzNjJoLTMwdjkwaDMwdjYwaDMwdi02MGgzMHptLTMwIDYwaC0zMHYtMzBoMzB6IiBmaWxsPSIjNjY2NjY2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTMzMS41IDBoLTMwdjIyMmgtMzB2OTBoMzB2MjAwaDMwdi0yMDBoMzB2LTkwaC0zMHptMCAyODJoLTMwdi0zMGgzMHoiIGZpbGw9IiM2NjY2NjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjEwLjUgMGgtMzB2NTMuNjUyaC0zMHY5MGgzMHYzNjguMzQ4aDMwdi0zNjguMzQ4aDMwdi05MGgtMzB6bTAgMTEzLjY1MmgtMzB2LTMwaDMweiIgZmlsbD0iIzY2NjY2NiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
        />
        <span class="grid_title">Filters</span>
      </div>

      <multiselect
        class="select_style"
        placeholder="Genre"
        :options="options_genre"
        id="select_genre"
        v-model="value_genre"
      ></multiselect>
    </div>

    <div class="search_div">
      <input
        class="search_input"
        type="text"
        placeholder="Search For Article "
        name=""
        id=""
      />
    </div>
    <!---FILTER BOX--->
    <div class="filter_side_bar_block">
      <div class="content_filter_side_bar_block">
        <div class="filter_box_header">
          <div style="color: #666">Filters</div>
          <div class="btn_done_fliter">
            <span class="close text-right" style="font-size: 30px">×</span>
          </div>
        </div>
        <div class="filter_box_after_hearder mt-5">
          <h6 class="upper_space">Filter By Category</h6>
          <div class="mt-3" style="margin-left: 10%">
            <div><a href="#">Men</a></div>
            <div><a href="#">Women</a></div>
            <div><a href="#">Kids</a></div>
          </div>
          <hr />

          <h6 class="upper_space">Filter By Color</h6>
          <div class="mt-3 color_box" style="margin-left: 10%">
            <div style="background-color: #002377" class="rounded_colors"></div>
            <div style="background-color: #ddbb33" class="rounded_colors"></div>
            <div style="background-color: #282828" class="rounded_colors"></div>
            <div style="background-color: #a6d7ea" class="rounded_colors"></div>
            <div style="background-color: #a3732c" class="rounded_colors"></div>
            <div style="background-color: #a3732c" class="rounded_colors"></div>
            <div style="background-color: #7f4141" class="rounded_colors"></div>
            <div style="background-color: #e5e5e5" class="rounded_colors"></div>
            <div style="background-color: #b8ddc2" class="rounded_colors"></div>
            <div style="background-color: #e0a6bb" class="rounded_colors"></div>
            <div style="background-color: #e86363" class="rounded_colors"></div>
            <div style="background-color: white" class="rounded_colors"></div>
          </div>
          <hr />

          <h6 class="upper_space">Filter By Size</h6>
          <div class="mt-3 color_box" style="margin-left: 10%">
            <div class="carred_colors">xs</div>
            <div class="carred_colors">s</div>
            <div class="carred_colors">m</div>
            <div class="carred_colors">l</div>
          </div>
          <hr />
          <h6 class="upper_space">Filter By Price</h6>
          <div class="mt-3 color_box" style="margin-left: 10%">
            <div><input placeholder="Min Price: $10" type="text" /></div>
            <div><input placeholder="Max Price: $500" type="text" /></div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <!---GRID VIEW BOX--->
    <div class="main_grid_view_box">
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <div class="reduce_show_box">- 9%</div>
        <div class="show_new_box">New</div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy1.jpg"
            alt=""
          />
        </a>
        <div class="block_for_miniature_grid mt-3">
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-3.jpg"
              alt=""
            />
          </div>
          <h6 class="ml-3 sub_title_grid_element txt_color_shows">3 Colors</h6>
        </div>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Max 97
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$39</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy2.jpg"
            alt=""
          />
        </a>

        <div class="block_for_miniature_grid mt-3">
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/270-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/270-2.jpg"
              alt=""
            />
          </div>
          <h6 class="ml-3 sub_title_grid_element txt_color_shows">2 Colors</h6>
        </div>
        <a href="product-detail.html">
          <div style="display: flex">
            <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
              Nike Air Max 270
            </h3>
          </div>

          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$19</h3>
        </a>
      </div>

      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy4.jpg"
            alt=""
          />
        </a>
        <a href="">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Force 1 React
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$839</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy5.jpg"
            alt=""
          />
        </a>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Court Vintage Premium
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$339</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy3.jpg"
            alt=""
          />
        </a>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Max Plus III
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$239</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy1.jpg"
            alt=""
          />
        </a>
        <div class="block_for_miniature_grid mt-3">
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-3.jpg"
              alt=""
            />
          </div>
          <h6 class="ml-3 sub_title_grid_element txt_color_shows">3 Colors</h6>
        </div>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Max 97
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$39</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy2.jpg"
            alt=""
          />
        </a>

        <div class="block_for_miniature_grid mt-3">
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/270-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/270-2.jpg"
              alt=""
            />
          </div>
          <h6 class="ml-3 sub_title_grid_element txt_color_shows">2 Colors</h6>
        </div>
        <a href="product-detail.html">
          <div style="display: flex">
            <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
              Nike Air Max 270
            </h3>
          </div>

          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$19</h3>
        </a>
      </div>

      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy4.jpg"
            alt=""
          />
        </a>
        <a href="">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Force 1 React
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$839</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy5.jpg"
            alt=""
          />
        </a>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Court Vintage Premium
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$339</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy3.jpg"
            alt=""
          />
        </a>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Max Plus III
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$239</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy1.jpg"
            alt=""
          />
        </a>
        <div class="block_for_miniature_grid mt-3">
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/97-3.jpg"
              alt=""
            />
          </div>
          <h6 class="ml-3 sub_title_grid_element txt_color_shows">3 Colors</h6>
        </div>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Max 97
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$39</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy2.jpg"
            alt=""
          />
        </a>

        <div class="block_for_miniature_grid mt-3">
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/270-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="col-lg-11 miniature_grid"
              src="assets/img/miniature_grid/270-2.jpg"
              alt=""
            />
          </div>
          <h6 class="ml-3 sub_title_grid_element txt_color_shows">2 Colors</h6>
        </div>
        <a href="product-detail.html">
          <div style="display: flex">
            <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
              Nike Air Max 270
            </h3>
          </div>

          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$19</h3>
        </a>
      </div>

      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy4.jpg"
            alt=""
          />
        </a>
        <a href="">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Force 1 React
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$839</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy5.jpg"
            alt=""
          />
        </a>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Court Vintage Premium
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$339</h3>
        </a>
      </div>
      <div>
        <div class="heart_block_perso">
          <i
            style="font-size: 15px"
            class="far fa-heart mt-1 wish_on_product"
          ></i>
        </div>
        <div class="quick_view_block">
          <i
            style="font-size: 15px"
            class="fas fa-arrows-alt mt-1 wish_on_product"
          ></i>
        </div>
        <a href="product-detail.html">
          <img
            class="col-lg-12 principale_grid_image"
            src="assets/img/gridy3.jpg"
            alt=""
          />
        </a>
        <a href="product-detail.html">
          <h3 class="mt-3 ml-3 grid_title" style="font-size: 20px">
            Nike Air Max Plus III
          </h3>
          <h6 class="ml-3 sub_title_grid_element">Shoes for men</h6>
          <h3 class="mt-1 ml-3 grid_title" style="font-size: 20px">$239</h3>
        </a>
      </div>
    </div>
    <!---QUICK VIEW BOX--->
    <div class="quick_view_box">
      <div class="content_quick_view_box">
        <div class="btn_done_quick_view_box">
          <span class="close text-right" style="font-size: 45px">×</span>
        </div>
        <div class="first_sub_box_content_quick_view_box">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item carousel-item_adds active">
                <img
                  class="img_quick_view_in_carou"
                  src="assets/img/97-1.jpg"
                  alt="Los Angeles"
                />
              </div>
              <div class="carousel-item carousel-item_adds">
                <img
                  class="img_quick_view_in_carou"
                  src="assets/img/miniature_grid/penche1.jpg"
                  alt="Chicago"
                />
              </div>
              <div class="carousel-item carousel-item_adds">
                <img
                  class="img_quick_view_in_carou"
                  src="assets/img/miniature_grid/penche2.jpg"
                  alt="New York"
                />
              </div>
              <div class="carousel-item carousel-item_adds">
                <img
                  class="img_quick_view_in_carou"
                  src="assets/img/miniature_grid/penche3.jpg"
                  alt="New York"
                />
              </div>
              <div class="carousel-item carousel-item_adds">
                <img
                  class="img_quick_view_in_carou"
                  src="assets/img/miniature_grid/penche4.jpg"
                  alt="New York"
                />
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div style="padding: 50px">
          <h2 style="color: black">Nike Air Zoom SuperRep 2</h2>
          <h5>119,99 €</h5>
          <h5 class="mt-4" style="text-transform: uppercase">Designer: Nike</h5>
          <div class="other_color row mt-3">
            <img
              style="
                height: 75px;
                border-style: solid;
                padding: 0px;
                border-width: 1px;
                box-sizing: border-box;
                border-color: rgb(1, 255, 112);
              "
              class="ml-2 others_images"
              src="assets/img/miniature_grid/penche_miniature1.png"
              alt="others_images"
            />
            <img
              style="height: 75px"
              class="ml-2 others_images"
              src="assets/img/miniature_grid/penche_miniature2.jpg"
              alt="others_images"
            />
          </div>
          <div class="row">
            <div class="select col-lg-6 col-sm-6 col-12 mt-5">
              <div class="first_select_element">
                <span class="txt_select_start"> Size</span>
                <i class="fas irier fa-angle-down mt-1" aria-hidden="true"></i>
              </div>
              <div class="select_content mt-1">
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">EU 35.5</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">EU 36</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">EU 37.5</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">EU 38</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">EU 38.5</span>
                </div>
              </div>
            </div>

            <div class="select col-lg-6 col-sm-6 mt-5">
              <div class="first_select_element">
                <span class="txt_select_start">Quantity</span>
                <i class="fas irier fa-angle-down mt-1" aria-hidden="true"></i>
              </div>
              <div class="select_content mt-1">
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">Qunatity: 1</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">Qunatity: 2</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">Qunatity: 3</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">Qunatity: 4</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">Qunatity: 5</span>
                </div>
                <div class="select-item">
                  <i
                    class="fas fa-check"
                    aria-hidden="true"
                    style="display: none"
                  ></i>
                  <span class="txt_select_content">Qunatity: 6</span>
                </div>
              </div>
            </div>
            <div>
              <button
                onclick="window.location.href='#'"
                class="
                  btn_carou_buy_now_big btn_by_now_simple btn_by_now_simple_add
                  mt-5
                  add_cart
                "
              >
                <span class="ml-2">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <style scoped>
.search_div {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.search_input {
  width: 100%;
  border-width: 0px;
  background-image: url("../../public/search.png");
  background-repeat: no-repeat;
  background-position: 98%;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
  padding: 10px 0px 10px 10px;
  color: #2c3e50;
  margin: 20px 20% 20px 20%;
}
.block_filters_grid_1 {
}
.select-item:hover {
  background-color: #01ff70;
  cursor: pointer;
}

.fas {
  color: black;
}

.select .select_content {
  background-color: white;
  color: #666;
  border-radius: 0px;
  margin: 0;
  z-index: 100 !important;
}

.first_select_element {
  box-shadow: none;
  border-color: white;
  background-color: white;
  color: #666;
  text-indent: 5px;
  margin-top: -5px;
}

.accordion_title {
  background-color: #c18d6f;
}

@media screen and (max-width: 992px) {
  .accordion_title {
    background-color: white;
    padding: 10px;
    color: black;
    margin-top: 10px;
    box-shadow: none;
    text-transform: uppercase;
  }
}
</style>


<style scoped src="../assets/custom.css">
</style>
<style scoped src ="../assets/home4.css">
</style>
<style scoped src="../assets/bootstrap.css">
</style>
<style scoped src="../assets/aos.css">
</style>
<style scoped>
@import "http://127.0.0.1:8000/assets/css/animate.min.css";
</style>
<style scoped src="../assets/main.css">
</style>
<style scoped src="../assets/grid_view_1.css">
</style>
<style scoped src= "../assets/accordion/main.css">
</style>
<style scoped src= "../assets/aos.css">
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
<script>
import Multiselect from "@vueform/multiselect";
import { mapState } from "vuex";
export default {
  name: "Shop",
  computed: {
    ...mapState(["domain_for_external_js_css_file"]),
  },
  components: {
    Multiselect,
  },
  methods: {
    importScript(script_link) {
      let scriptAdd = document.createElement("script");
      scriptAdd.setAttribute(
        "src",
        this.domain_for_external_js_css_file + script_link
      );
      document.body.appendChild(scriptAdd);
    },
    importScriptHead(script_link) {
      let scriptAdd = document.createElement("script");
      scriptAdd.setAttribute(
        "src",
        this.domain_for_external_js_css_file + script_link
      );

      document.head.appendChild(scriptAdd);
    },
  },
  data() {
    return {
      value_genre: "",
      options_genre: ["Trap", "hip hop"],
    };
  },
  mounted() {
    this.importScriptHead("assets/js/jquery.js");
    this.importScriptHead("assets/js/popper.js");
    this.importScriptHead("assets/js/bootstrap.min.js"); //
    this.importScriptHead("assets/js/fontawesome.js");

    this.importScript("assets/js/main.js"); //
    this.importScript("assets/css/accordion/main.js");
    this.importScript("assets/js/grid_view_1.js");
    this.importScript("assets/js/carousel/owlcarousel/owl.carousel.min.js");
    this.importScript("assets/js/aos.js");
    this.importScript("assets/js/carousel/custom.js");
    // this.importScript("assets/js/carousel/big.js");
  },
};
</script>
