<template lang="pug">
  v-app
    v-navigation-drawer(app temporary fixed v-model="sideNav")
      v-btn(flat v-for="i in sideNavItems" :key='i.title' :to="i.link")
        | {{i.title}}
    v-app-bar(fixed color="primary" dark)
      v-app-bar-nav-Icon(@click="toggleSideNav")
      v-app-bar-title
        router-link(to="/" tag="span" style="cursor:pointer") VueShare
      v-spacer
      v-text-field(flex placeholder="Search Posts" color="accent" single-line hide-details)
      v-spacer
      v-app-bar-items
        v-btn(flat v-for="i in horizontalNavItems" :key='i.title' :to="i.link")
          | {{i.title}}
    main
    v-spacer
      v-container.mt-4
        transition(name="fade")
          router-view
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav: false,
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
        { icon: 'create', title: 'Sign Up', link: '/signup' },
      ];
    },
    sideNavItems() {
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
        { icon: 'create', title: 'Sign Up', link: '/signup' },
      ];
    },
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    },
  },
};
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.2s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
