<template>
    <div class="sidebar">
        <div class="logo">
            <img src="https://images.vexels.com/media/users/3/160976/isolated/preview/0ff8aa27b419536c142f06fb41956a38-planeta-terra-globo-africa-america-plano-by-vexels.png" alt="Logo" width="60" height="60">
        </div>
        <ul class="menu">
            <router-link tag="li" to="/dashboard">
                <div class="item-menu">
                    <span class="menu-span" :class="{ active: activeItem === '/dashboard' }">
                        <i class="far fa-chart-bar fa-2x"></i>
                        Dashboard
                    </span>
                </div>
            </router-link>
            <router-link tag="li" to="/user">
                <div class="item-menu">
                    <span class="menu-span" :class="{ active: activeItem === '/user' }">
                        <i class="far fa-user fa-2x"></i>
                        Usuário
                    </span>
                </div>
            </router-link>
            <router-link class= "bottom-footer" tag="li" to="/" @click.native="logout()">
                <div class="item-menu">
                    <span class="menu-span">
                        <i class="fas fa-sign-out-alt fa-2x"></i>
                        Sair
                    </span>
                </div>
            </router-link>
        </ul>
        <nav>
            <div class="navbar">

            </div>
        </nav>
    </div>
</template>
<script>
export default {
  name: 'Sidebar',
  computed: {
    activeItem () {
      return this.$route.path
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('userComponent')
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>
<style scoped>
.sidebar{
    height: 100vh;
    background-color: #0d0d0d;
    width: 140px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 98;
}
.navbar{
    height: 80px;
    width: 100%;
    background-color: #0d0d0d;
    position: fixed;
    margin-left: 139px;
    top: 0;
}
.menu{
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item-menu {
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
}
.menu-span:hover, .active{
    color:#0061c2!important;
}
.menu-span{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    color: #9899AC;
}
.bottom-footer{
    position: fixed;
    bottom: 0;
}
</style>
