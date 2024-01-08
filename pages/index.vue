<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="container d-flex justify-content-center align-items-center bg-intro">
        <div class="text-center">
          <h1>Focus on Transferring across Cloud Storages</h1>
          <h3>Transfer and manage your multiple cloud storages with one app. 100% Free.</h3>
          <a class="btn btn-try text-white" href="/login">
            Start now!
          </a>
        </div>
      </div>
      <div class="introduce container">
        <div class="row">
          <div class="col">

          </div>
          <div class="col">
            <h4>Transfer Files between Cloud Drives</h4>
            <p>
              MultCloud can transfer files from one cloud service to another directly without downloading and re-uploading,
              such as transferring files from Dropbox to Google Drive or migrating files from one Google Drive to another.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Welcome to Cloud Linker',
  ogTitle: 'Welcome to Cloud Linker',
  description: `CLoud Linker is a opensource for link all of your cloud suchas Google Drive, 
                    DropBox, Google Photo,...`,
  ogDescription: `CLoud Linker is a opensource for link all of your cloud suchas Google Drive, 
                    DropBox, Google Photo,...`,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
<style scope lang="scss">
.bg-intro {
  height: 400px;
  font-style: "Source Serif 4", Georgia, serif;
}

.btn-try:hover {
  background-color: $primary;
  font-size: x-large;
}

.btn-try {
  background-color: black;
  font-size: x-large;
}
</style>