<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          <!-- sidebar -->
        </div>

        <!-- Main Content -->
        <div class="col-xl-10 col-lg-9 md-8 col-md-8">
          <FeaturedProduct/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from '~/components/FeaturedProduct';

export default {
  FeaturedProduct
}
</script>
