<template>
  <div class="bgAbout">
      <div class="content">
        
        <div class="column">
          <h1 style="padding: 12px 48px" class="has-text-centered title">
            About Us
          </h1>
        </div>

        <center>
          <img :src="require(`@/assets/pp_logo.png`)" width="200" >
          <div class="cnt">
            <p class="has-text-left intro title is-4 *x-6">
              Kenalin kami Pizza Pizza
            </p>
            <p class="has-text-justified title is-4 *x-6">
              Pizza Pizza adalah sebuah perusahaan pizza dimana kami menyediakan pizza delivery secara daring.
              Dalam masa pandemi ini terutama ketika kebijakan PPKM sedang dijalankan, ada berbagai kendala yang dialami baik oleh pemilik usaha pizza maupun oleh pembeli.
              Dengan menggunakan teknologi, proses bisnis penjualan pizza dapat dilakukan secara online. Sehingga beberapa kendala tersebut dapat diatasi.
            </p>
            <p class="has-text-justified title is-4 *x-6">
              Pizza merupakan makanan cepat saji yang umum ditemukan tersebar di berbagai kota. Kecenderungan yang terjadi pada bidang makanan cepat saji adalah penyajian yang cepat dan mudahnya akses kepada makanan tersebut. Tetapi di masa pandemi ini, jarang sekali orang yang pergi ke lokasi untuk membeli pizza. Hal ini menimbulkan suatu kebutuhan agar masyarakat dapat tetap membeli tanpa harus datang ke lokasi.
            </p>
          </div>
        </center>

    </div>
  </div>
</template>



<script>

</script>

<style scoped>
.bgAbout {
  background-image: url("../assets/about/about_bg.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}
.content {
  background-color: white;
  opacity: 95%;
}
.intro {
  color: red;
}
.cnt {
  width: 80%;
  height: 400px;
}
</style>
