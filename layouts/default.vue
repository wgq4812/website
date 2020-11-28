<template>
  <div>
    <div class="navbar">
      <div class="right">
        <NuxtLink to="/" class="button--grey">Home</NuxtLink>
        <NuxtLink to="/about" class="button--grey">About</NuxtLink>
        <a href="https://github.com/mattrax/Mattrax" class="button--grey"
          >Github</a
        >
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.navbar {
  width: 100%;
  padding: 10px;
  position: fixed;
  background: white;
}

.navbar .right {
  float: right;
}

q {
  font-style: italic;
}

q:before,
q:after {
  content: '';
}

a {
  color: inherit;
}
</style>
