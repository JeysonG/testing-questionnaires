<template>
  <div id="app">
    <pf-translate/>
    <pf-side-bar
      v-if="contactId !== '' && token !== ''"
      :contactId="Number(contactId)"
      :token="token"
    />
  </div>
</template>

<script src="./App.js"></script>
