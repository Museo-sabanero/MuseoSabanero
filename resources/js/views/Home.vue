<template>
  <main class="main-wrap order-history mb-xxl">
    <div class="search-box">
      <div>
        <i class="iconly-Search icli search"></i>
        <input
          class="form-control"
          type="search"
          placeholder="Search here..."
        />
        <i class="iconly-Voice icli mic"></i>
      </div>
      <button
        class="filter font-md"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#filter"
        aria-controls="filter"
      >
        Filter
      </button>
    </div>
    <section class="tab-content ratio2_1">
      <div class="tab-pane fade show active">
        <div class="order-box">
    <div class="media">
      <a href="order-detail.html" class="content-box">
        <h2 class="font-sm title-color">ID: #5151515 , Dt: 20 Dec, 2020</h2>
        <p class="font-xs content-color">8857 Morris Rd. ,Charlottesville</p>
        <span class="content-color font-xs"
          >Paid: <span class="font-theme">$250.00</span>, Items:
          <span class="font-theme">15</span></span
        >
      </a>
      <div class="media-body">
        <img src="/images/map/map.jpg" alt="map" />
      </div>
    </div>
    <div class="bottom-content active">
      <a href="address2.html" class="title-color font-sm fw-600">
        Order Again
      </a>
      <a href="javascript:void(0)" class="give-rating content-color font-sm">
        Rate & Review Product</a
      >
      <div class="rating">
        <i data-feather="star"></i>
        <i data-feather="star"></i>
        <i data-feather="star"></i>
        <i data-feather="star"></i>
        <i data-feather="star"></i>
      </div>
    </div>
  </div>
      </div>
    </section>
  </main>
  <div
    id="filter"
    class="shop-fillter order-history-filter offcanvas offcanvas-bottom"
    tabindex="-1"
    aria-labelledby="filter"
  >
    <div class="offcanvas-header">
      <h5 class="title-color font-md">Filter</h5>
    </div>
    <div class="offcanvas-body small">
      <div class="pack-size mt-0">
        <div class="row g-3">
          <div class="col-6">
            <div class="size">
              <span class="font-sm">All order</span>
            </div>
          </div>

          <div class="col-6">
            <div class="size">
              <span class="font-sm">Open Order</span>
            </div>
          </div>

          <div class="col-6">
            <div class="size">
              <span class="font-sm">Return Orders</span>
            </div>
          </div>

          <div class="col-6">
            <div class="size">
              <span class="font-sm">Cancelled Order</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pack-size">
        <h5 class="title-color font-md">Time Filter</h5>
        <div class="row g-3">
          <div class="col-6">
            <div class="size">
              <span class="font-sm">Last 30days</span>
            </div>
          </div>

          <div class="col-6">
            <div class="size">
              <span class="font-sm">Last 6 Month</span>
            </div>
          </div>

          <div class="col-6">
            <div class="size">
              <span class="font-sm">2021</span>
            </div>
          </div>

          <div class="col-6">
            <div class="size">
              <span class="font-sm">2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offcanvas-footer">
      <div class="btn-box">
        <button
          class="btn-outline font-md"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Close
        </button>
        <button
          class="btn-solid font-md"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',

}
</script>
