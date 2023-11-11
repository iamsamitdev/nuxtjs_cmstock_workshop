export const useCounterStore = defineStore("counter", {
    // other options...
    state: () => ({
        count: 1,
    }),
    getters: {
        doubleCount(): number {
            return this.count * 2;
        },
        displayCounterText(): String {
            return `This is counter state = ${this.count}`;
        },
    },
});
