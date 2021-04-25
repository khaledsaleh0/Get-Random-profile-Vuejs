const app = Vue.createApp({

    data() {
        return {
            firstName: 'Khaled',
            lastName: 'Saleh',
            email: 'khaledxe@gmail.com',
            gender: 'male',
            picture: 'https://avatars.githubusercontent.com/u/83133082?v=4'
        }
    },
    methods: {

        async getUser() {

            const res = await fetch("https://randomuser.me/api")
            const { results } = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            console.log(results)

        }
    },
})

app.mount('#app');