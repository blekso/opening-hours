import Vue from "vue";
import Nujek from "~nujek-ui/plugin.js";
import { NjSection, NjBurger, NjNav, NjSidebar } from "~nujek-ui/components";

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      fixedClasses: {
        // https://github.com/tailwindlabs/tailwindcss-typography#overriding-max-width
        wrapper:
          "max-w-none w-full py-8 md:py-10 xl:py-12 flex justify-center w-full",
        container: "px-6 w-full"
      },
      variants: {
        "section-2xl": {
          container: "max-w-screen-2xl"
        },
        "section-xl": {
          container: "max-w-screen-xl"
        },
        "section-lg": {
          container: "max-w-screen-lg"
        },
        spacer: {
          wrapper: "py-6 md:py-8 lg:py-10 xl:py-12"
        }
      }
    }
  },
  NjBurger: {
    component: NjBurger,
    props: {
      classes: {
        bar: "bg-brand-yellow z-20"
      }
    }
  },
  NjNav: {
    component: NjNav,
    props: {
      classes: {
        header: "w-full flex items-center justify-between"
      }
    }
  },
  NjSidebar: {
    component: NjSidebar,
    props: {
      classes: {
        sidenav: "z-30"
      }
    }
  }
};

Vue.use(Nujek, settings);
