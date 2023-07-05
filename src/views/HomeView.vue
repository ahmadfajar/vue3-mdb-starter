<script setup lang="ts">
</script>

<template>
  <div class="my-5">
    <div class="col-md-8 mx-auto text-center">
      <img src="/images/logo.png" alt="Vue MDBootstrap" />
      <h1 class="display-1 md-fw-semibold mt-4 lh-sm">Hello Application</h1>
      <p class="lead my-4 fs-3">
        You have successfully implemented Vue MDBootstrap into your apps. 
        Now you can start coding and build powerful web apps with amazing UI.
      </p>
    </div>
    <div class="card-gallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-5">
      <div class="col">
        <BsCard class="bg-mdb-color darken-1 h-100" border-off>
          <BsCardBody class="d-flex flex-column">
            <BsCardContent type="title">Unlimited music now</BsCardContent>
            <BsCardContent type="text" class="flex-fill text-truncate opacity-50">
              Listen to your favorite artists and albums whenever and wherever, online and offline.
            </BsCardContent>
            <BsButton color="light" size="sm" flat>LISTEN NOW</BsButton>
          </BsCardBody>
        </BsCard>
      </div>
      <div class="col">
        <BsCard class="bg-cyan darken-4 h-100" border-off>
          <div class="d-flex justify-content-between">
            <BsCardBody class="d-flex flex-column">
              <BsCardContent type="title">Supermodel</BsCardContent>
              <BsCardContent type="text" class="flex-fill opacity-50">
                Foster the People
              </BsCardContent>
              <BsButton color="light" size="sm" outlined>START RADIO</BsButton>
            </BsCardBody>
            <div class="card-image">
              <img src="/images/foster.jpg" alt="Supermodel" />
            </div>
          </div>
        </BsCard>
      </div>
      <div class="col">
        <BsCard class="bg-unique h-100" border-off>
          <div class="d-flex justify-content-between">
            <BsCardBody class="d-flex flex-column">
              <BsCardContent type="title">Halcyon Days</BsCardContent>
              <BsCardContent type="text" class="flex-fill opacity-50">
                Ellie Goulding
              </BsCardContent>
              <div>
                <BsButton color="light" mode="icon" icon="play_arrow" size="sm" outlined />
              </div>
            </BsCardBody>
            <div class="card-image">
              <img src="/images/halcyon.jpg" alt="Halcyon Days" />
            </div>
          </div>
        </BsCard>
      </div>
    </div>
  </div>
</template>
