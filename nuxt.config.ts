// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/mycss.css"],
    modules: [
        "dayjs-nuxt",
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "@ant-design-vue/nuxt",
        "@pinia/nuxt",
    ],
    pinia: {
        storesDirs: ["./stores/**"],
    },
    antd: {},
    runtimeConfig: {
        secretEnv: process.env.SECRET_ENV,
        public: {
            publicEnv: process.env.PUBLIC_ENV,
        },
    },
});
